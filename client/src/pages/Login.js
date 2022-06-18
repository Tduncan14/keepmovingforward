import React ,{useState}from 'react'
import {Link} from 'react-router-dom';
 



const Login = () => {



    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');




    const LoginUser = () => {
           const Obj = {email,password}

    }





    return(
        <div className="flex justify-center items-center  h-screen ">


        <div className="w-[400px] flex space-y-5  p-5 flex-col shadow-lg border-2 border-gray">
            <h1 className="font-semibold  text-center text-2xl text-blue-800"> Login </h1>



 

           <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" value={email} placeholder="email"
             onChange={(e) => setEmail(e.target.value)}/>


         <input type="password" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" value={password} placeholder="password"
             onChange={(e) => setPassword(e.target.value)}/>

   


             <div className="flex justify-between items-end">
                <Link to="/register" className="underline text-secondary">Click Here To Register</Link>

                <button className="py-1 px-3 text-white bg-blue-800" onClick={LoginUser}>Login</button>
             </div>
        </div>


    </div>
 )
    
}

export default Login