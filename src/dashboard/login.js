import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from './../Images/logo1.png';


const LogIn = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleLogin = () => {
        console.log(email, pwd);

        const body = {
            username: email,
            password: pwd,
            expiresInMins: 30
        }
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                
                // expiresInMins: 30, // optional, defaults to 60
                ...body
            })
        })
            .then(res => res.json())
            .then(console.log);
    }


    const addProduct = () => {
        // fetch('https://dummyjson.com/products/add', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         title: email,
        //         /* other product data */
        //     })
        // })
        //     .then(res => res.json())
        //     .then(console.log);

        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
            
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>console.log(json))

        fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json())
        .then(json=>console.log(json))


    }
    return (
        <div className="fullscreen">

            <div className="loginform">
                <form className="form">
                    <div className="img"><img src={logo1} /></div>
                    <div className="usern">
                        {/* <label className="username">Username :</label><br></br> */}
                        <input type="text" name="uname" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="usern">
                        {/* <label className="userpswd">Password :</label><br></br> */}
                        <input type="Password" name="pswd" placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                    </div>
                </form>
                <div className="buttonlogin">
                    <div>
                        <button className="btn1" onClick={handleLogin}>Login</button>
                        <button onClick={addProduct}> addProduct</button>
                    </div>
                    <div>
                        <button className="btn1"><NavLink to='/signup'> Create acount?</NavLink></button>
                        <button className="btn2"><NavLink to='/'> Skip!</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogIn;   