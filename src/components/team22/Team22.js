import React from 'react';
import './Team22Comp.css';
import image from './Team22Image/1.jpg';
import { Link } from 'react-router-dom';

export default function Team22() {
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
                                    <span>Select Session <i className="fa-solid fa-circle-chevron-down" style={{ color: "#000000", padding: "2px" }}></i></span>
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
                                    <h2 className="nm">Aryan Gangapari</h2>
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
                                    <h2 className="nm">Kalyani Trivedi</h2>
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
                                    <h2 className="nm">Rohan Kukreja</h2>
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
                                    <h2 className="nm">Supriya Thakur</h2>
                                    <p className="dep">Joint Secretory</p>

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
                                    <h2 className="nm">Shushank Giri</h2>
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
                                    <h2 className="nm">Samidha Halmare</h2>
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
                                    <h2 className="nm">Srushti Pai</h2>
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
                                    <h2 className="nm">Himanshu Yelchatti</h2>
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
                                    <h2 className="nm">Nihar Malani</h2>
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
                                    <h2 className="nm">Karan Kapoor</h2>
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
                                    <h2 className="nm">Yash Tiwari</h2>
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
                                    <h2 className="nm">Hardik Ganvir </h2>
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
                                    <h2 className="nm">Sanchit Srivastava</h2>
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
                                    <h2 className="nm">Koyna Tiwari</h2>
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
                                    <h2 className="nm">Prabhat Chitade</h2>
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
                                    <h2 className="nm">Prashant Shrivastava</h2>
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
                                    <h2 className="nm">Parag Kankariya</h2>
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
                                    <h2 className="nm">Sejal Patil</h2>
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
                                    <h2 className="nm">Ankan Deb</h2>
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
                                    <h2 className="nm">Aditya Gupta</h2>
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
                                    <h2 className="nm">Samiksha Panpaliya</h2>
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
                                    <h2 className="nm">Manan Agrawal</h2>
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
                                    <h2 className="nm">Isha Singh</h2>
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
                                    <h2 className="nm">Kripa Marothi</h2>
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
                                    <h2 className="nm">Yudhir Kothari</h2>
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
                                    <h2 className="nm">Yash Kumbhare</h2>
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
                                    <h2 className="nm">Rugweda Khiratkar</h2>
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
                                    <h2 className="nm">Yudhan Thakur</h2>
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
                                    <h2 className="nm">Vidit Agrawal</h2>
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
                                    <h2 className="nm">Anurag Yadav</h2>
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
                                    <h2 className="nm">Jatin Agrawal</h2>
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
                                    <h2 className="nm">Vanshita Lalwani</h2>
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
                                    <h2 className="nm">Raman Khatod </h2>
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
                                    <h2 className="nm">Ujwal Masane </h2>
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
                                    <h2 className="nm">Pranav Nikhade</h2>
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
                                    <h2 className="nm">Aditya Bopche</h2>
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
                                    <h2 className="nm">Nilanshu Hedaoo</h2>
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
