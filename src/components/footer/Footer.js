import React from 'react'
import "./FooterComp.css";

export default function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="container">

                    <div className="row">

                        <div className="upperrow">

                            <div className="box">

                                <div className="footer-col">

                                    <div className="map">

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3909908612036!2d79.05904737510942!3d21.17662138050995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1693572204554!5m2!1sen!2sin"
                                            width="310" height="319" className="bordered" allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div>

                                </div>

                            </div>

                            <div className="box">

                                <div className="footer-col">

                                    <h1>Contact Us</h1>

                                    <div className="location">

                                        <a href="https://goo.gl/maps/WFizVKCzB67Ps8y79">
                                            <div className="loc">

                                                <div className="loc-logo aa">
                                                    <span><i className="fa-solid fa-location-dot" ></i></span>
                                                </div>

                                                <div className="loc-text">
                                                    Shri Ramdeobaba College of Engineering and Management, Katol Rd, Lonand,
                                                    Gittikhadan,
                                                    Nagpur,
                                                    Maharashtra 440013
                                                </div>

                                            </div>

                                        </a>

                                    </div>

                                    <div className="mail aa" >

                                        <a href=""><span><i className="fa-solid fa-envelope" ></i></span>NSS
                                            Mail-ID</a>

                                    </div>

                                    <div className="phone aa">

                                        <a href=""><span><i className="fa-solid fa-phone" ></i></span>Phone
                                            Number</a>

                                    </div>

                                </div>

                            </div>

                            <div className="box">

                                <div className="footer-col">

                                    <form action="">

                                        <div className="row1">

                                            <div className="name">

                                                <input type="text" className="name" placeholder="Name" id="name" size="10" />

                                            </div>

                                            <div className="email">

                                                <input type="text" className="email" placeholder="Email" id="email" size="10" />

                                            </div>

                                        </div>

                                        <div className="row1">

                                            <textarea name="message" placeholder="Type you message here ..." id="message" cols="50"
                                                rows="12"></textarea>

                                        </div>

                                        <div className="submit">

                                            <input type="submit" value="Submit" />

                                        </div>


                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="social">

                            <div className="logo aab">
                                <a href=""><span><i className="fa-brands fa-square-facebook" ></i></span></a>
                            </div>

                            <div className="logo aac">
                                <a href=""><span><i className="fa-brands fa-square-instagram" ></i></span></a>
                            </div>

                            <div className="logo aab">
                                <a href=""><span><i className="fa-brands fa-square-twitter" ></i></span></a>
                            </div>

                            <div className="logo aad">
                                <a href=""><span><i className="fa-brands fa-youtube" ></i></span></a>
                            </div>

                            <div className="logo aae">
                                <a href=""><span><i className="fa-brands fa-linkedin" ></i></span></a>
                            </div>

                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}
