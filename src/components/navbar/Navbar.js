import React,{useState}  from 'react';
import "./NavbarComp.css";
import logo1 from "./images/nssLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const location = useLocation();
    console.log(location.pathname);
    const path = location.pathname;
    const[fix,setFix] = useState(true);

    function navFixedd(){
        if(window.scrollY > 8 && location?.pathname === '/'){
            setFix(true);
        }
        else {
            if(location?.pathname === '/')
            setFix(false);
        }
    }
    window.addEventListener('scroll', navFixedd);

    return (
    <>
{/* "main-nav" */}
        <nav className='navvv' style={{backgroundColor: (path !== '/') ? 'white' : (window.scrollY > 8) ? 'white' : 'transparent', boxShadow:(path==='/' && window.scrollY<8) ? 'none' : 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}} >
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
                        <Link to="/gallary">Gallery</Link>
                    </li>
                </ul>
            </div>

            <div className="xyz">
                <ul>
                    <li>
                        <Link to="/team23"></Link>
                    </li>
                    <li>
                        <Link to="/team22"></Link>
                    </li>
                    <li>
                        <Link to="/prerna15"></Link>
                    </li>
                </ul>
            </div>

            

        </nav>
    
    
    </>
  )
}
// export default Navbar;
