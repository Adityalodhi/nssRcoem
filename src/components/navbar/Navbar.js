import React,{useState}  from 'react';
import "./NavbarComp.css";
import logo1 from "./images/nssLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


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
                <Link to="/">
                    <img className='img1' src={logo1} alt="" />
                </Link>
                
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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/initiative">Initiatives</Link>
                    </li>
                    <li>
                        <Link to="/event">Events</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <Link to="/gallary">Gallary</Link>
                    </li>
                </ul>
            </div>

            

        </nav>
    
    
    </>
  )
}
// export default Navbar;
