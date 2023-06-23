import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import UserLogin from './views/UserLogin';
import UserRegistration from './views/UserRegistration';
import Dashboard from './views/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/login' element={<UserLogin/>}></Route>
      <Route path='/registration' element={<UserRegistration/>}></Route>
      <Route path='/dash' element={<Dashboard/>}></Route> 
      </Routes>


      <ToastContainer/>
    </>
  );
}

export default App;
