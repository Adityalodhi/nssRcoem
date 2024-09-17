import React from 'react'
import "./HomeComp.css";
import { Link } from 'react-router-dom';
import image from "./HomeImages/images.png";
import firstImg from "./HomeImages/firstImage.jpg";
import car from "./HomeImages/car.jpg";
import nature from "./HomeImages/nat.jpg";


export default function Home() {
  return (
    <>
      <div className='mainclass'>
        <div>
          <img className='ll' src={image} alt="" />
        </div>
        {/* <div className='nssHead'>
          <h1>NSS RCOEM</h1>
          <p> <span>" Not Me But You "</span></p>
        </div> */}
        <div className='maindiv'>
          <div className='childdiv'>
            <div className='divvv firstt'>
              <h3>Our Vision</h3>
              <p>The core vision of NSS is to develop socially conscious, caring, and self-aware young people who actively participate in volunteer work and advance their communities and the country as a whole.</p>
            </div>
            <div className='divvv secondd'>
              <h3>Who we are ?</h3>
              <p> We are a youth-focused voluntary organization in India. It was established in 1969 under the Ministry of Youth Affairs and Sports, Government of India with the primary objective of involving young students in community service and social development activities.</p>
            </div>
            <div className='divvv firstt'>
              <h3>Our Goals</h3>
              <p> Our primary goal is to develop  empathetic and empowered youth who actively engage in community service and contribute to the betterment of society .We also aim at encouraging students to develop a deep understanding of social issues and challenges.</p>
            </div>
            

          </div>
          <div className='childdiv'>
            <div className='seconddiv'>
              <h3>What we do ?</h3>
              <div className='hrTag'></div>
              <p> Our organization is dedicated to addressing vital issues through awareness campaigns, health camps, and educational initiatives. We actively focus on environmental conservation, hygiene, sanitation, health, and literacy. Furthermore, we foster an inclusive environment by encouraging diverse social and cultural activities. Through our multifaceted approach, we aim to make a positive impact on our community and society, promoting well-being and understanding while championing important causes that contribute to a better future for all.</p>
            </div>
          </div>
        </div>
        <div className='journysec'>
          <div className='childjourney'>
            <h3>Our Journey...</h3>
            <div className='hrTag'></div>
            <p>The journey of the National Service Scheme (NSS) in India has been a remarkable one,starting with it's launch on 24th September 1969, on the occasion of the birth centenary of Mahatma Gandhi, as a way to remember his values of selfless service and community engagement. Initially, NSS was launched in 37 universities.Over time, it expanded to include colleges and institutions and today, it operates at both the levels across the country.It emphasizes the motto "Not Me But You," expressing the spirit of selfless service and community engagement.It continues to be a platform that empowers youth to contribute meaningfully to society while imbibing the values of social responsibility and citizenship.</p>
          </div>
          <div className='childjourney2'>
            <img src={firstImg} className='mainImg' alt="" />
          </div>
        </div>
        <div className='sust'>
          <h3>Sustainability Conclave</h3>
          <div className='hrTag'></div>
          <p>NSS RCOEM is an organisation of over 1000 active and dedicated members with a common goal of ‘striving to the betterment of our motherland by fully indulging ourselves in the service of mankind. It is a fraternity that aims to foster the feelings of social service among the youth and provide them with a platform where they can make a difference in society and develop one’s interpersonal and intrapersonal skills. As highlighted by the motto ' Not for me, but for the nation ', the organisation aims to produce socially responsible engineers and work for the nation's development.<Link to="/event"> Explore all event...</Link></p>
          <div className='sustchild'>
            <img src={car} className='mainImg' alt="" />
            <img src={nature} className='mainImg' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
