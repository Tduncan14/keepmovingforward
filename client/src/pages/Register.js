import React from 'react';
import {Link} from'react-router-dom';




const Register  = () => {






 return(
    <div className="flex justify-center items-center  h-screen">


        <div className="w-[400px] flex space-y-5 flex-col">
            <h1 className="font-semibold  text-center text-2xl text-blue-800">  Welcome to the authenication</h1>



            <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="name"/>

           <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="email"/>


         <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="password"/>

        <input type="text" className="py-1 px-3 border-2 
            border-blue-800 rounded
             focus:outline-none w-full" placeholder="comfirm password"/>


             <div className="flex justify-between items-end">
                <Link to="/login" className="underline">Click Here To Login</Link>

                <button className="py-1 px-3 text-white bg-blue-800">REGISTER</button>
             </div>
        </div>


    </div>
 )


}



export default Register