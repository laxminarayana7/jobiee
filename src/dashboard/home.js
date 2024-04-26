import React from "react";
import Header from "./header";
// import logo1 from './../Images/logo1.png';
import homebackground from './../Images/homeimg.png';
import HomePageMui from "./jobieehomepagemui";

const Home = () => {
    return (
        <div className="homepage">
            <div className="headerbar">
                <div className="logolist">
                    <div>
                        {/* <img src={logo1} /> */}
                        <HomePageMui />
                        </div>
                    <div className="listui">
                        <ul className="list">
                            <li><a href="">Home</a></li>
                            <li><a href="">Job</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bodycnt_bg">
                <div className="bodycnt">
                    <div className="content">
                        <h1> Job seeking Platform with 100% Job</h1>
                        <div className="jobsearch">
                            <input type="text" placeholder="Search for jobs" />
                            <input type="text" placeholder="location" />
                            <button>Find</button>
                        </div>
                        <div> <Header /></div></div>
                    <div className="userimg"><img src={homebackground} /></div>
                </div>


            </div>

            <footer className="footer">
                <div className="footer_size">
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div className="footnav">
                        {/* <ul>
                        <li>Home</li>
                        <li>Job</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                        <li>Service</li>
                    </ul> */}
                        <p>Home</p>
                        <p>Job</p>
                        <p>Contact</p>
                        <p>Portfolio</p>
                        <p>Service</p>
                    </div>
                </div>
                <div className="cpy">Copyright <i class="fa-solid fa-copyright"></i>2020; Designed by Laxminarayana</div>
            </footer>
        </div>
    )
}

export default Home;