import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import axios from 'axios' ;
// import apiRequest from '../../../../requests';
import axiosInstance from '../../requests';

function Login() {
    const [email,setEmail] = useState("") ;
    const [password,setPassword] = useState("") ;
    const navigate = useNavigate() ;

    const handleLogin = async (e) =>{
        e.preventDefault() ;



        if (email === 'admin@gmail.com' && password === 'Admin@123') {
            navigate('/admin');
          } else {
              await axiosInstance.get('/get-user-id',{
                params : {
                email : email,
                password : password}
              }).then((res) => {
                const userData = res.data ;
                if(userData.get_user_id.length === 0 || !userData.get_user_id[0].id){
                  alert("Invalid Credentials ") ;
                } else{

                  navigate(`/dashboard/${userData.get_user_id[0].id}`) ;
                }   
              }).catch((err) =>{
                console.log('ERROR '+err) ;
              })
            }
  
          console.log(email,password) ;
    }

    const BASE_URL = "https://bursting-gelding-24.hasura.app/api/rest" ;


  useEffect(()=>{

  },[])
  
    return (
    <form onSubmit={handleLogin} className="h-screen flex justify-center
    m-auto items-center bg-slate-100">
        <div className="card bg-white flex flex-col p-10 justify-center rounded-xl">
            <div className="text-2xl mb-7 self-center"> Login </div>
            <div className="flex justify-between w-auto items-center my-3">
                <div className="mr-5"> Enter Email : </div>
                <input type="text" className="bg-slate-100 p-3 outline-none rounded-xl" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder='Enter your Email Address'/>
            </div>
            <div className="flex justify-between w-auto items-center my-3">
                <div className="mr-5"> Enter Password :  </div>
                <input type="password" className="bg-slate-100 p-3 outline-none rounded-xl" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'/>
            </div>
            <button className="my-5 cursor-pointer bg-slate-300 w-24 p-2 justify-center items-center self-center rounded-xl hover:font-bold" > Log in </button>
        </div>
        
    </form>
  )
}

export default Login