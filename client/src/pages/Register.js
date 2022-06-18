import React,{useState} from 'react';
import {Link} from'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';





const Register  = () => {



    const [name,setName] =  useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const [confirmPassword,setConfirmedPassword] =useState('');




    const registerUser=()=>{


        if(password === confirmPassword){

         const userObj = {
            name,password,email,confirmPassword
        }

        try{

        }

        catch(err){

        }

        }

        else{
            toast.error('Passwords  not matched')
        }


    }



 return(
    <div className="flex justify-center items-center  h-screen">


        <div className="w-[400px] flex space-y-5 flex-col shadow-lg border-2 border-gray p-5">
            <h1 className="font-semibold  text-center text-2xl text-blue-800">  Welcome to the authenication</h1>



            <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}/>

           <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="email"
             onChange={(e) => setEmail(e.target.value)}/>


         <input type="password" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" value={password} placeholder="password"
             onChange={(e) => setPassword(e.target.value)}/>

        <input type="password" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="comfirm password"
              onChange={(e)=>setConfirmedPassword(e.target.value)}/>


             <div className="flex justify-between items-end">
                <Link to="/login" className="underline text-secondary">Click Here To Login</Link>

                <button className="py-1 px-3 text-white bg-blue-800" onClick={registerUser}>REGISTER</button>
             </div>
        </div>


    </div>
 )


}



export default Register