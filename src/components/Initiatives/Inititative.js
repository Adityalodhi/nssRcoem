import React from 'react'
import "./InitiativeComp.css";
import mainImage from "./InitiativeImages/IniMainImage.jpg";
import bloodDonation from "./InitiativeImages/bloodDonation.jpg";
import educationAwareness from "./InitiativeImages/educationAwareness.jpg";
import healthCheackUp from "./InitiativeImages/healthCheackUp.jpg";
import organDonation from "./InitiativeImages/organDonation.jpg";
import roadSafty from "./InitiativeImages/roadSafty.jpg";
import swacchBharat from "./InitiativeImages/swacchBharat.jpg";
import treePlantation from "./InitiativeImages/treePlantation.jpg";
import womenSafty from "./InitiativeImages/womenSafty.jpg";

export default function Inititative() {
    return (
        <>
            <div className="ini">
                <div className="ini2">
                    <h2 className='heading'>Our Initiatives...</h2>
                    <div className="hrtag"></div>
                    <p className='para'>Our NSS initiative is a concerted effort to address pressing societal issues through volunteerism and community engagement. With a focus on education, environment, and health, we organize events, workshops, and campaigns aimed at raising awareness and driving positive change. By leveraging our collective skills and passion, we hope to inspire others to join our cause and create a ripple effect of compassion and service, making our community a better place for everyone.</p>
                </div>
                <div className="ini3">
                    <img src={mainImage} className='mainImg' alt="" />
                </div>
            </div>
            <div className='IniPages'>
                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={bloodDonation} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Blood Donation</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'> A crucial and admirable component of the NSS community service programs are blood donation drives.Within colleges and universities , we plan and coordinate blood donation drives in collaboration with local blood banks or hospitals.We conduct these programs to inform the public about the value of blood donation, its role in saving lives, and to clear common misconceptions</p>
                    </div>
                </div>
                
                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Swachh Bharat Abhiyan</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>The Swachh Bharat Abhiyan (Clean India Mission) is a prominent national cleanliness and sanitation campaign in India.NSS UNIT actively participates in and supports this mission by organizing cleanliness drives in and around educational institutions, villages, and urban areas,also conducts awareness campaigns on sanitation and the importance of proper waste disposal.</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={swacchBharat} alt="" />
                    </div>
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={treePlantation} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Tree Plantation</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Tree plantation is a significant environmental conservation activity often undertaken by NSS in RCOEM.Firstly we identify suitable sites for tree plantation and select appropriate tree species for plantation depending on the region and ecological considerations. We also raise awareness about the importance of preserving trees and forests</p>
                    </div>
                </div>
                
                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Education Awareness</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Education Awareness refers to initiatives and programs designed to inform individuals and communities about the significance of education. It aims to highlight the benefits of learning, promote access to quality education, and address issues like illiteracy and dropout rates. Education Awareness campaigns often stress the role of education in personal growth and societal development.</p>
                    </div>
                    <div className='imageContainer imageContainer1 iniImgComp'>
                        <img src={educationAwareness} alt="" />
                    </div>
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={roadSafty} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Road Safty</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>A Road Safety Campaign is a targeted initiative aimed at raising awareness and promoting safe driving practices to reduce road accidents and fatalities. These campaigns typically involve educational programs, public service announcements, law enforcement efforts, and community engagement to emphasize the importance of following traffic rules, wearing seat belts, and avoiding distracted driving.</p>
                    </div>
                </div>
                
                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Health Cheack Up Camp</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>A Health Check-Up Camp is a community event offering free or affordable medical examinations and consultations. These camps help detect health issues early, promote wellness, and educate participants about maintaining a healthy lifestyle. They are often organized by healthcare organizations, NGOs, or local authorities to benefit underserved populations.</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={healthCheackUp} alt="" />
                    </div>
                </div>

                <div className='container11' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={womenSafty} alt="" />
                    </div>
                    <div className='textContainer' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Walkthon for Women Safty</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>The event involves a powerful march and symbolic walk through the community to highlight the importance of women's safety. Participants will carry banners, placards, and messages promoting safety and gender equality.Engaging workshops and seminars led by experts focusing on self-defense techniques, personal safety, legal rights, and mental well-being to equip women with the knowledge and confidence to navigate the world safely. </p>
                    </div>
                </div>
                
                <div className='container11' data-aos="zoom-in">
                    <div className='textContainer1' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <h2 className='textHeadings houseH'>Organ Donation Rally</h2>
                        <div className='hrTag houseHr11'></div>
                        <p className='text housePara'>Join us for the "Organ Donation Rally," an impactful event dedicated to promoting organ donation awareness and advocating for the noble act of saving lives through organ and tissue donation. This rally aims to inspire, educate, and motivate individuals to become organ donors and make a life-changing difference in the lives of those in need.</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={organDonation} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}
