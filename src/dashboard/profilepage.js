import React from "react";
import logo1 from './../Images/logo1.png';
import profileimage from './../Images/profile.webp';


const ProfilePage = () => {

    return (
        <div>
            <div>
                <div className="headerbar">
                    <div className="logolist">
                        <div>
                            <img src={logo1} />

                        </div>
                        <div className="listui">
                            <ul className="list">
                                <li><a href="">Home</a></li>
                                <li><a href="">Job</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Service</a></li>
                                <li className="profile">
                                    <i class="fa-regular fa-user"></i>
                                    <div className="profile_dropdown">
                                        <div>user</div>
                                        <div>logout</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="profile_bg">
                    <div className="profile_bg_outer">
                        <div className="left">
                            <div>
                                <img src={profileimage} />
                                <h1>User one</h1>
                                <p>A Full-Stack developer is a professional responsible for working on both front-end and back-end development processes. They design, develop, and maintain fully-fledged and functioning platforms with databases or servers. These servers do not need other third-party applications to build an entire system from scratch.</p>
                            </div>
                            <div>
                                <h2>Skills</h2>
                                <div>
                                    <p>FrontEnd Development</p>
                                    <p>ReactJs</p>
                                    <p>Material UI</p>
                                    <p>JavaScript</p>
                                    <p>CSS</p>
                                    <p>HTML</p>
                                    <p>Bootstrap</p>
                                    <p>Responsive website</p>
                                </div>
                            </div>
                            <div>
                                <h1>Add Notes</h1>
                                <textarea>Add notes for future reference</textarea>
                            </div>
                            <button>Add Note</button>
                        </div>
                        <div className="right">
                            <div className="right1">
                                <h1>Basic Information</h1>
                                <div className="basic_profile_top">
                                    <div className="">
                                        <div>
                                            <p>AGE</p>
                                            <p>28 years</p>
                                        </div>
                                        <div>
                                            <p>CTC</p>
                                            <p>12.5Lac</p>
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                            <p>YEARS OF EXPERIENCE</p>
                                            <p>8 years</p>
                                        </div>
                                        <div>
                                            <p>LOCATION</p>
                                            <p>Hyderabad, Telangana</p>
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                            <p>PHONE</p>
                                            <p>+91 1234567891</p>
                                        </div>
                                        <div>
                                            <p>EMAIL</p>
                                            <p>Userone@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button><i class="fa-regular fa-download"></i>Download Resume</button>
                                    <button><i class="fa-regular fa-envelope"></i>Sent Email</button>
                                </div>
                            </div>
                            <div className="right2">
                                <h1>Experience</h1>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="right3"></div>
                            <div className="right4"></div>
                            <div className="right5"></div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfilePage;