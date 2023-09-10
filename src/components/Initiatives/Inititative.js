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
                    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit ducimus pariatur recusandae distinctio voluptatem hic dolorem et dolores earum fugiat sequi, veniam veritatis sint non necessitatibus nulla voluptatum eaque placeat quasi repellat explicabo magni inventore. Deserunt velit itaque, eligendi perspiciatis earum officiis laborum doloremque accusamus, cumque saepe natus accusantium.</p>
                </div>
                <div className="ini3">
                    <img src={mainImage} className='mainImg' alt="" />
                </div>
            </div>
            <div className='IniPages'>
                <div className='container' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={bloodDonation} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Blood Donation</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>
                
                <div className='container' data-aos="zoom-in">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Swachh Bharat Abhiyan</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={swacchBharat} alt="" />
                    </div>
                </div>

                <div className='container' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={treePlantation} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Tree Plantation</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>
                
                <div className='container' data-aos="zoom-in">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Education Awareness</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1 iniImgComp'>
                        <img src={educationAwareness} alt="" />
                    </div>
                </div>

                <div className='container' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={roadSafty} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Road Safty</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>
                
                <div className='container' data-aos="zoom-in">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Health Cheack Up Camp</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={healthCheackUp} alt="" />
                    </div>
                </div>

                <div className='container' data-aos="zoom-in">
                    <div className='imageContainer' >
                        <img src={womenSafty} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Walkthon for Women Safty</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>
                
                <div className='container' data-aos="zoom-in">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Organ Donation Rally</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={organDonation} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}
