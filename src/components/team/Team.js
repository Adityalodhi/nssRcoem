import React from 'react';
import './TeamComp.css';
import image from './TeamImg/1.jpg';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div className="con">

            <div className="con1">

                <div className="mn">
                    <div className="bx1">
                        <div className="mn2">
                            <h2 className="txh eH">Our Team..</h2>
                            <div className='hrTag houseHr'></div>
                            <p className="tex fp">Our NSS team is a dynamic group of individuals committed to social service and community betterment. With a shared passion for making a positive impact, we engage in various initiatives, from environmental cleanups to educational outreach. Our unity and dedication drive us to tackle local challenges, foster empathy, and create lasting change. Together, we embody the spirit of volunteerism, fostering a stronger, more compassionate society for all.</p>
                        </div>
                    </div>


                    <div className="bx1">
                        <div className="mn3">
                            <div className="dd">
                                <button className="st">
                                    <span>Select Session <i className="fa-solid fa-circle-chevron-down" style={{ color: "#000000", padding:"2px" }}></i></span>
                                </button>
                                <div className="ys">
                                    <Link to="/team">2023</Link>
                                    <Link to="/team22">2022</Link>
                                    <Link to="/team24">2024</Link>
                                    {/* <Link to="#">2021</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className="con1">

                <div className="rw">
                    <div className="hd">
                        <h2 className="txh">Faculty Coordinator</h2>
                        <div className='fac'></div>
                    </div>

                    <div className="cent">
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Amit Anurag</h2>
                                    <p className="dep">Faculty Coordinator</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="rw">
                    <div className="hd">
                        <h2 className="txh">Secretory</h2>
                        <div className='sec'></div>
                    </div>

                    <div className="cent">
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Rohan Kukreja</h2>
                                    <p className="dep">Secretory</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Samidha Halmare</h2>
                                    <p className="dep">Secretory</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rw">
                    <div className="hd">
                        <h2 className="txh">Joint Secretory</h2>
                        <div className='js'></div>
                    </div>

                    <div className="cent">
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Yash Ghoderao</h2>
                                    <p className="dep">Joint Secretory</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Khushi Agrawal</h2>
                                    <p className="dep">Joint Secretory</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                


                

                <div className="rw">
                    <div className="hd">
                        <h2 className="txh">Final Year Committee</h2>
                        <div className='i4th'></div>
                    </div>

                    <div className="cent">
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Anurag Yadav</h2>
                                    <p className="dep">Public Relations Co-ordinator</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Shushank Giri</h2>
                                    <p className="dep">Social Outreach Co-ordinator</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Sanchit Shrivastava</h2>
                                    <p className="dep">Systems and Technical </p>
                                    <p className="dep1">Co-ordinator</p>
                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Himanshu Yelchatti</h2>
                                    <p className="dep">Creative and Literary</p>
                                    <p className="dep1">Co-ordinator</p>
                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Core Committe Section  */}



                <div className="rw">
                    <div className="hd">
                        <h2 className="txh">Core Committee</h2>
                        <div className='i4thcc'></div>
                    </div>

                    <div className="cent">
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Harsh Soni</h2>
                                    <p className="dep"> Event Manager</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Nikita Bafna</h2>
                                    <p className="dep"> Event Manager</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Nikhil Dhanda</h2>
                                    <p className="dep"> Event Manager </p>
                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Raksha Ashtankar</h2>
                                    <p className="dep">Executive Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Ishita Joshi</h2>
                                    <p className="dep">Executive Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Tanush Agroya</h2>
                                    <p className="dep">Executive Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Arya Pandey</h2>
                                    <p className="dep">External Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Raj Singh Rajput</h2>
                                    <p className="dep">External Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Aditya Lodhi</h2>
                                    <p className="dep">Technical Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Devang Bhute</h2>
                                    <p className="dep">Technical Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Praveen Agrawal</h2>
                                    <p className="dep">System Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Rishikesh Pandey</h2>
                                    <p className="dep">System Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Atish Kachhaway</h2>
                                    <p className="dep">System Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Siddesh Singabhatti</h2>
                                    <p className="dep">System Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Prashil Bhattad</h2>
                                    <p className="dep">Publicity Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Rushabh Singhwi</h2>
                                    <p className="dep">Publicity Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Aliya Rizvi</h2>
                                    <p className="dep">Publicity Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Diya Temburene</h2>
                                    <p className="dep">Publicity Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Divya Chandak</h2>
                                    <p className="dep">Backdrop Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Khushi Joshi</h2>
                                    <p className="dep">Backdrop Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Samruddhi Rathi</h2>
                                    <p className="dep">Backdrop Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Gandhali Mandavkar</h2>
                                    <p className="dep">Backdrop Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Tisha Murarka</h2>
                                    <p className="dep">INR Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Yashika Rahangdale</h2>
                                    <p className="dep">INR Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Pratham Bajaj</h2>
                                    <p className="dep">INR Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Sharad Agrawal</h2>
                                    <p className="dep">Venue Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Aditya Tibdewal</h2>
                                    <p className="dep">Venue Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Raghav Somani</h2>
                                    <p className="dep">Venue Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Rishi Purohit</h2>
                                    <p className="dep">Venue Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Charvi Sharma</h2>
                                    <p className="dep">Literary Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Riddhi Hinge</h2>
                                    <p className="dep">Literary Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Pranav Darak</h2>
                                    <p className="dep">Photography Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="cw">
                            <div className="card">
                                <div className="img-ct">
                                    <span className="ol"></span>

                                    <div className="cd-img">
                                        <img src={image} alt="img" className="cdimg" />
                                    </div>
                                </div>

                                <div className="cd-ct">
                                    <h2 className="nm">Anish Bhaiya</h2>
                                    <p className="dep">Photography Head</p>

                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>

            </div>

        </div>
  )
}
