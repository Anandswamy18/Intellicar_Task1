import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {signup} from "../services/UserServices"

function Signup() {


    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()


    const handleSignupSubmit =  async(e) => {
        e.preventDefault()
        console.log('Signup:', { username, mobile, gender, email, age, password });
        const formdata={
            username:username,
            mobile:mobile,
            gender:gender,
            email:email,
            age:age,
            password:password,

        }
   

       
            let response = await signup(formdata)
            if(response.status===200){
                navigate("/login")
            }
            
            console.log(response);
            
        
    };
    return (
        
            <center>
                <form action="" className="form">
                    
                    
                    <legend style={{ fontFamily: "-moz-initial", fontSize: "40px",color:"red"}}>User Registration</legend>

                    <div>
                        <label htmlFor="username" className="label">Username:</label>
                        <input id="username" type="text" className="inputStyle"  value={username} onChange={(e)=>setUsername(e.target.value)}  required/>
                    </div>

                    <div>
                        <label htmlFor="mobile" className="label">Mobile No:</label>
                        <input id="mobile" type="tel" className="inputStyle"  value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
                    </div>

                    <div className="gen-blk">
                        <label className="label"> Gender:</label>
                        <input type="radio"  style={{width:"20px",height:"25px",}} id="male" name="gender"  value="male" onChange={(e)=>setGender(e.target.value)}/>
                        <label htmlFor="male"><span style={{fontSize:"22px",fontFamily:"fantasy"}} >Male</span></label>
                        <input type="radio"  style={{width:"20px",height:"25px",}} id="female" name="gender" value="female" onChange={(e)=>setGender(e.target.value)} />
                        <label htmlFor="female"><span  style={{fontSize:"22px",fontFamily:"fantasy"}}>Female</span></label>
                    </div>

                    <div>
                        <label htmlFor="email" className="label">Email Id:</label>
                        <input id="email" type="email" className="inputStyle" onChange={(e)=>setEmail(e.target.value)}   required />
                    </div>

                    <div>
                        <label htmlFor="age" className="label">Age:</label>
                        <input id="age" type="number" className="inputStyle"onChange={(e)=>setAge(e.target.value)} required  />
                    </div>

                    <div>
                        <label htmlFor="password" className="label">Password:</label>
                        <input id="password" type="password" className="inputStyle" onChange={(e)=>setPassword(e.target.value)} required />
                    </div>

                    <div className="btn-block">
                        <button type="submit" onClick={handleSignupSubmit}>Signup</button>
                        <Link to="/login" ><button type="reset">Cancel</button></Link>
                        
                    </div>
                </form>
            </center>
        
    );
}

export default Signup;
