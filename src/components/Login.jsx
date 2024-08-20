import { Link } from "react-router-dom"
import {login} from "../services/UserServices"
import { useState } from "react";

import "./Login.css"




export default function Login() {
      
    const [email,setEMail]=useState("")
    const [password,setPassword]=useState("")

    const handleLoginSUbmit = async(e)=>{
        e.preventDefault()

        const loginData={
            email:email,
            password:password
        }

       let response = await login(loginData)
       console.log(response);
       
       const accessToken = response.data.token;
       localStorage.setItem("token", accessToken);
       console.log(response);
       


        

    }



    return (
        <>

            <center>
                <form action="" className="formLogin">


                    <legend style={{ fontFamily: "-moz-initial", fontSize: "40px", color: "red" }}>User Login</legend>

                    <div>
                        <label htmlFor="email" className="label">Email Id:</label>
                        <input id="email" type="email" className="inputStyle" onChange={(e)=>setEMail(e.target.value)} required/>
                    </div>


                    <div>
                        <label htmlFor="password" className="label">Password:</label>
                        <input id="password" type="password" className="inputStyle" onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>


                    <div className="link-div">
                     <span className="link">New User ?   </span>
                    <Link  to="/" style={{textDecoration:"none"}} className="link">
                    <span>Create Account</span>
                    </Link>
                    </div>
                   



                    <div className="btn-block">
                        <button type="submit" onClick={handleLoginSUbmit}>Login</button>
                        <button type="reset">Cancel</button>
                    </div>
                </form>
            </center>


        </>
    )

}