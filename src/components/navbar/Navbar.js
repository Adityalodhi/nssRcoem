import React,{useState}  from 'react';
import "./NavbarComp.css";
import logo1 from "./images/nssLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const[fix,setFix] = useState(false);

    function navFixedd(){
        if(window.scrollY > 8){
            setFix(true);
        }
        else{
            setFix(false);
        }
    }
    window.addEventListener('scroll', navFixedd);

    return (
    <>
{/* "main-nav" */}
        <nav className={fix ? "main-nav navvv" : "main-nav"}>
            {/* logo part */}
            <div className='logo'>
                <a href="/">
                    <img className='img1' src={logo1} alt="" />
                </a>
                
            </div>
            <div className='logo-text'>
                <p><span>N</span>ational <span>S</span>ervice <span>S</span>cheme</p><br />
                <p>RCOEM</p>
            </div>

            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </a>
            </div>

            {/* menun link part */}
            <div className={showMediaIcons ? "mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Initiatives</a>
                    </li>
                    <li>
                        <a href="/">Events</a>
                    </li>
                    <li>
                        <a href="/">Team</a>
                    </li>
                    <li>
                        <a href="/">Gallary</a>
                    </li>
                </ul>
            </div>

            

        </nav>
    
    
    </>
  )
}
// export default Navbar;
