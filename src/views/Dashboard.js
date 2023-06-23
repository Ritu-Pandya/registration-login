import React, { useEffect, useState } from 'react'
import authfetch from '../axios/authInterceptor';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function Dashboard() {
    const[apiData,setData]= useState([]);

    useEffect(()=>{
        authfetch.get("/accounts")
        .then(y=>{
            setData(y.data)
            console.log(y.data);
        })
    },[])

    const columns = [
        
        {field:'id',headerName:'Id',width:130},
         {field: 'title', headerName: 'Title',width:130},
           { field: 'fullName', headerName: 'Full Name', width: 130,
           valueGetter:(params)=>{
             return params.row.firstName + ' '+params.row.lastName
           } },
         {
           field: 'email',
           headerName: 'Email',
           width: 90,
           
           },
        
     
         
         {
           field: "Delete",
           headerName: "Delete",
           width: 90,
           renderCell: (params) => {
     
             console.log(params);
              // you will find row info in params
             return (<Button onClick={()=>{  }} 
             variant='contained' color='error'>Delete</Button>)
           }
         },
     
         {
           field: "Edit",
           headerName: "Edit",
           width: 90,
           renderCell: (params) => {
     
             console.log(params);
              // you will find row info in params
             return (<Button onClick={()=>{  }}
             variant='contained' color='warning'>Edit</Button>)
           }
         }
        
       
       ]
  return (
    <div>
  <h4>My Data</h4>
  <DataGrid
    rows={apiData}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection />

        {/* {
            apiData.map((value)=>{
                return(<tr>
                    <td>{value.id}</td>
                    <td>{value.email}</td>
                    </tr>)
            })
        } */}
    </div>
  )
}
