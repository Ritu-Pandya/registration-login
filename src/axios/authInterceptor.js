import axios from "axios";

const authfetch = axios.create({
    baseURL: "https://real-pear-fly-kilt.cyclic.app"
})

let userItem = JSON.parse(localStorage.getItem("token"))?.jwtToken;
authfetch.interceptors.request.use(
    (request)=> {

        request.headers["Authorization"]=
        `Bearer ${userItem}`
        console.log('request sent');
        return request;
    },
    (error)=> {
        //to handle or save data in cloud
      return Promise.reject(error);
    }
);
authfetch.interceptors.response.use(
    (response)=> {
        console.log('got response');
        return response;
    },
    (error)=> {
        console.log(error.response);
        if(error.response.status === 404)
        {
            console.log('Not Found!!');
        }
        if(error.response.status === 401)
        {
            console.log('Unauthorized!!');
        }
        return Promise.reject(error);

    }
);

export default authfetch;