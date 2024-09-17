import React from 'react'
import "./EventComp.css";
import firstImg from "./EventImages/firstImage.jpg";
import upComming from "./EventImages/upcommingEvents.jpg";
import houseOfLaw from "./EventImages/houseOfLaw.jpg";
import anukriti from "./EventImages/anukriti.jpg";
import chakravyuh from "./EventImages/chakravyuh.jpg";
import healthCheckUp from "./EventImages/healthCheckUp.jpg";
import junoon from "./EventImages/junoon.jpg";
import prayas from "./EventImages/prayas.jpg";
// import prerna from "./EventImages/prerna.jpg";
import villageVisit from "./EventImages/villageVisit.jpg";


export default function Event() {
    return (
        <>
            <div className='main'>
                <div className='main2'>
                    <h2 className='textHeadings eventH'>Our Events..</h2>
                    <div className='hrTag headings'></div>
                    <p className='text firtPara'>The National Service Scheme is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. Here,we conduct various social , cultural events that contribute to the overall development of the students or participants.“PRERNA” under NSS is the biggest socio-cultural event of Central India. It strives to develop various personality aspects associated with physical and mental growth of the students through various events followed by social developmental activities .</p>

                    <h2 className='textHeadings eventH'>Upcoming Events..</h2>
                    <div className='hrTag headings'></div>
                    <img src={upComming} className='upImage' alt="" />

                </div>
                <div className='main3'>
                    <img src={firstImg} className='mainImg' alt="" />
                </div>
            </div>

            <div className='EventPart'>

                <h2 className='textHeadings allEventH'>All Events..</h2>
                <div className='hrTag allEventHr'></div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={houseOfLaw} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>House of Law</h2>
                        <div className='hrTag houseHr11' ></div>
                        <p className='text housePara'>The “House of Laws” is the mentally challenging event,that deals with the participant’s decision making skills and pre-requisite about law and order,in order to escape the given situation. First is the pen paper round to solve the given situation , next is a courtroom drama round where participants get to act as a lawyer defending their sides . The final round is basically a press conference that decides the winning team.</p>
                    </div>
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Prayas</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>"The only way to do great work is to love what you do." - Steve Jobs With the ingenious ideas the igniting minds step in and present their start-ups to the panel who then decide the best of them and precisely they get the sponsorship to implement the same.PRAYAS is an initiative to encourage students to think and bring their ideas to reality .</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={prayas} alt="" />
                    </div>
                    
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer'>
                        <img src={healthCheckUp} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Health Check Up Camp</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Join the NSS at its Health Check-up Camp, where your well-being takes center stage. Our camp is designed to offer a thorough assessment of your health, covering various aspects to ensure you're on the path to a healthy and fulfilling life . Experienced healthcare professionals , certified optometrists , dental experts , and trained counselors will assist you in order to ensure a healthier and happier life.</p>
                    </div>
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Chakravyuh</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Chakravyuh is a thrilling and dynamic event that puts participants through rigorous tests of decision-making, physical prowess, problem-solving acumen, and teamwork. It challenges teams to navigate intricate and ever-changing scenarios, requiring quick thinking and collaboration. This engaging activity fosters a holistic approach to skill development, combining mental agility with physical fitness, making it an exciting and comprehensive challenge for participants.</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={chakravyuh} alt="" />
                    </div>
                    
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={anukriti} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Anukriti</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Junoon</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>This event provides a platform for children of varying abilities to unite, display their talents, and promote inclusivity. Specially-abled youngsters will shine with music, dance, drama, and art displays, showcasing their remarkable abilities. It aims to raise awareness about inclusiveness and inspire a society that recognizes and celebrates the boundless potential in every child.</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={junoon} alt="" />
                    </div>
                    
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer'>
                        <img src={villageVisit} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Village Visit</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Village Visit is a purposeful initiative focused on community development through village adoption and engagement. We aim to forge connections, foster understanding, and make a lasting difference by immersing in the chosen village's culture. Activities include skill-sharing in areas like computer literacy, agriculture, healthcare, hygiene, and sanitation, enriching both the villagers and participants' lives.</p>
                    </div>
                </div>

            </div>

            

        </>
    )
}
