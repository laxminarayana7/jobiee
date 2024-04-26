import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import LogIn from "./login";
import SignUp from "./signup";
import Header from "./header";
import Home from "./home";
import HomePageMui from "./jobieehomepagemui";

const DashBoard = () => {

    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/jobieehomepagemui" element={<HomePageMui />} />

            </Routes>
            
        </BrowserRouter>
    )
}

export default DashBoard;