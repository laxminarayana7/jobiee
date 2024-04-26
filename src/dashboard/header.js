import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="listlogsign">
            <div className="btn_withloginsignup">
                <div className="log_in">
                    <button className="log_inbtn"><NavLink to='login'>LOGIN</NavLink> </button>
                </div>
                <div className="sign_up">
                    <button className="log_inbtn"><NavLink to='signup'>SIGNUP</NavLink></button>
                </div>
            </div>






        </div>
    )
}

export default Header;