import React from 'react'
import "./FooterComp.css";
import instaa from "./FooterImages/insta.webp";
import youtube from "./FooterImages/youtube.png";
import whatsapp from "./FooterImages/whatsapp.png";
import facebook from "./FooterImages/facebook.webp";
// import ReactPlayer from 'react-player';

import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { BiLogoFacebookCircle } from 'react-icons/bi';

export default function Footer() {
    return (
        <>
            <footer className='mainfoot'>
                <div className="ff">
                    <div className="nn">
                        <div className="aaa">
                            <div className="aaa1">
                                <h3>Contact Us.</h3>
                                <p>Shri Ramdeobaba College of Engineering and Management, Katol Rd, Lonand, Gittikhadan, Nagpur, Maharashtra - 440013</p>
                            </div>
                            <div className="aaa2">
                                <p>nssrcoem@rknec.edu</p>
                                <p>+91-XXXXXXXXXX</p>
                            </div>
                        </div>
                        <div className='logoss'>
                            <a href="https://instagram.com/nss_rcoem?igshid=MzRlODBiNWFlZA=="  target='_blank' className='insta ii'><img src={instaa} alt="" /></a>
                            <a href="https://youtube.com/@nssrcoem1180?si=Dlez4A-bE_HZYoqU"  target='_blank' className='insta'><img src={youtube} alt="" /></a>
                            <a href=""  target='_blank' className='insta'><img src={whatsapp} alt="" /></a>
                            <a href=""  target='_blank' className='insta'><img src={facebook} alt="" /></a>
                            {/* <a href="https://instagram.com/nss_rcoem?igshid=MzRlODBiNWFlZA==" target='_blank' className='insta'><BiLogoInstagramAlt /></a> */}
                            {/* <a href="https://youtube.com/@nssrcoem1180?si=Dlez4A-bE_HZYoqU" target='_blank'><BsYoutube /></a>
                            <a href="" target='_blank'><RiWhatsappFill /></a>
                            <a href="" target='_blank'><BiLogoFacebookCircle /></a> */}
                        </div>
                    </div>
                    <div className="nn1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3908650294857!2d79.05904737500413!3d21.17662638268401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1694786839677!5m2!1sen!2sin" width="310" height="319" loading="lazy" ></iframe>
                    </div>
                </div>
                <div className='xxxx'>
                    <div className="linee"></div>
                    <p>copy rights</p>
                </div>
            </footer>
            {/* <footer className="ft">

                <div className="con">

                    <div className="rws">

                        <div className="uw">

                            <div className="bx">

                                <div className="ft-col">

                                    <div className="mp">

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3908650294857!2d79.05904737500413!3d21.17662638268401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1694786839677!5m2!1sen!2sin" width="310" height="319"  loading="lazy" ></iframe>

                                    </div>

                                </div>

                            </div>

                            <div className="bx">

                                <div className="ft-col">

                                    <h1>Contact Us</h1>

                                    <div className="lt">

                                        <a href="https://goo.gl/maps/WFizVKCzB67Ps8y79">
                                            <div className="loc">

                                                <div className="loc-logo aa">
                                                    <span><i icon="fa-solid fa-location-dot" style={{ color: "#ffffff", }}></i></span>
                                                </div>

                                                <div className="loc-txt">
                                                    Shri Ramdeobaba College of Engineering and Management, Katol Rd, Lonand,
                                                    Gittikhadan,
                                                    Nagpur,
                                                    Maharashtra 440013
                                                </div>

                                            </div>

                                        </a>

                                    </div>

                                    <div className="ml aa" >

                                        <a href=""><span><i icon="fa-solid fa-envelope" style={{ color: "#ffffff", }}></i></span>NSS
                                            Mail-ID</a>

                                    </div>

                                    <div className="pn aa">

                                        <a href=""><span><i icon="fa-solid fa-phone" style={{ color: "#ffffff", }}></i></span>Phone
                                            Number</a>

                                    </div>

                                </div>

                            </div>

                            <div className="bx">

                                <div className="ft-col">

                                    <form action="">

                                        <div className="row1">

                                            <div className="ne">

                                                <input type="text" className="name" placeholder="Name" id="name" size="10" />

                                            </div>

                                            <div className="el">

                                                <input type="text" className="email" placeholder="Email" id="email" size="10" />

                                            </div>

                                        </div>

                                        <div className="row1">

                                            <textarea name="message" placeholder="Type you message here ..." id="message" cols="50"
                                                rows="8"></textarea>

                                        </div>

                                        <div className="sb">

                                            <input type="submit"  value="Submit" />

                                        </div>


                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="rws">

                        <div className="sol">

                            <div className="lg inst">
                                <a href="https://instagram.com/nss_rcoem?igshid=MzRlODBiNWFlZA==" className='txt' target='_blank'><span><BiLogoInstagramAlt /></span></a>
                            </div>

                            <div className="lg you">
                                <a href="https://youtube.com/@nssrcoem1180?si=Dlez4A-bE_HZYoqU" target='_blank'><BsYoutube/></a>
                            </div>

                            <div className="lg what">
                            <a href=""><RiWhatsappFill/></a>
                            </div>

                            <div className="lg face">
                            <a href=""><BiLogoFacebookCircle/></a>
                            </div>

                        </div>

                    </div>

                </div>

            </footer> */}
        </>
    )
}
