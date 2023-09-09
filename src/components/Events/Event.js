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
                    <div className='hrTag'></div>
                    <p className='text firtPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam nisi deserunt, quo atque aut, placeat facere modi perferendis error ex laboriosam? Accusamus qui animi deserunt ipsam in illum nulla molestiae, porro, esse laboriosam est sed dicta corrupti beatae! Fugit eligendi possimus quaerat quo laborum repudiandae distinctio quidem vitae officiis.</p>

                    <h2 className='textHeadings eventH'>Upcoming Events..</h2>
                    <div className='hrTag'></div>
                    <img src={upComming} className='upImage' alt="" />

                </div>
                <div className='main3'>
                    <img src={firstImg} className='mainImg' alt="" />
                </div>
            </div>

            <div className='EventPart'>

                <h2 className='textHeadings allEventH'>All Events..</h2>
                <div className='hrTag allEventHr'></div>

                <div className='container' data-aos="zoom-in-left">
                    <div className='imageContainer' >
                        <img src={houseOfLaw} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>House of Law</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>

                <div className='container' data-aos="zoom-in-right">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Prayas</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={prayas} alt="" />
                    </div>
                    
                </div>

                <div className='container' data-aos="zoom-in-left">
                    <div className='imageContainer'>
                        <img src={healthCheckUp} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Health Check Up Camp</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>

                <div className='container' data-aos="zoom-in-right">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Chakravyuh</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={chakravyuh} alt="" />
                    </div>
                    
                </div>

                <div className='container' data-aos="zoom-in-left">
                    <div className='imageContainer'>
                        <img src={anukriti} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Anukriti</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>

                <div className='container' data-aos="zoom-in-right">
                    <div className='textContainer1' >
                        <h2 className='textHeadings houseH'>Junoon</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                    <div className='imageContainer imageContainer1'>
                        <img src={junoon} alt="" />
                    </div>
                    
                </div>

                <div className='container' data-aos="zoom-in-left">
                    <div className='imageContainer'>
                        <img src={villageVisit} alt="" />
                    </div>
                    <div className='textContainer'>
                        <h2 className='textHeadings houseH'>Village Visit</h2>
                        <div className='hrTag houseHr'></div>
                        <p className='text housePara'>Lorem  Vitae laboriosam, sed, distinctio veritatis obcaecati similique vero aspernatur omnis laudantium consequuntur repellendus reprehenderit expedita ducimus accusantium quisquam placeat numquam nesciunt molestias dolore odio. Deleniti harum cupiditate distinctio nulla mollitia fuga, neque dolores velit dicta in itaque laborum?</p>
                    </div>
                </div>

            </div>

            

        </>
    )
}
