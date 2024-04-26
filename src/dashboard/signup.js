import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from './../Images/logo1.png';


const SignUp = () => {

    return (
        <div className="fullscreen">
            <div className="loginform">
                <form className="form">
                    <div className="img"><img src={logo1} /></div>
                    <div className="box">
                        <div className="userns">
                            <div className="userns_div"><label>First Name :</label></div>
                            <div className="userns_input"><input type="text" name="fname" placeholder="FirstName" /></div>
                        </div>
                        <div className="userns">
                            <div className="userns_div"><label>Last Name :</label></div>
                            <div className="userns_input"> <input type="text" name="lname" placeholder="LastName" /></div>
                        </div>
                        <div className="userns">
                            <div className="userns_div"> <label>Username :</label></div>
                            <div className="userns_input">   <input type="text" name="uname" placeholder="Username" /></div>
                        </div>
                        <div className="userns">
                            <div className="userns_div">   <label>Password :</label></div>
                            <div className="userns_input"> <input type="Password" name="pswd" placeholder="Password" /></div>
                        </div>
                        <div className="userns">
                            <div className="userns_div"> <label>Contact :</label></div>
                            <div className="userns_input"> <input type="number" name="number" placeholder="1234567890" /> </div>
                        </div>
                    </div>
                </form>
                <div className="buttonlogin" >
                    <button className="btn1">Create account</button>
                    <button className="btn1"><NavLink to='/login'> Already have an acount?</NavLink></button>
                    <button className="btn2"><NavLink to='/'> Skip!</NavLink></button>
                </div>
            </div>
        </div>
    )
}
export default SignUp;