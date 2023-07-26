import '../Style/component.css';
import logo2 from '../Assets/logo2.png';
import {NavLink, Link} from 'react-router-dom';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa'

export default function Footer() {
    return(
        <div className="footer">
            <img src={logo2} alt="logo" style={{width: "20rem"}}/>
            <FootNavigator/>
            <SocialBar/>
        </div>
    )
}

function FootNavigator() {
    return(
        <div className='foot-navigator'>
            <NavLink className="footNav-items" to='/aboutus'>About us</NavLink>
            <NavLink className="footNav-items">Contact</NavLink>
            <NavLink className="footNav-items">FAQ</NavLink>
            <NavLink className="footNav-items">Terms and Conditions</NavLink>
            <NavLink className="footNav-items">Cookie Policy</NavLink>
            <NavLink className="footNav-items">Privacy Statement</NavLink>
            <NavLink className="footNav-items">Disclamer</NavLink>
        </div>
    )
}

function SocialBar() {
    return(
        <div className='social-bar'>
            <Link className='socialBar-items'><FaFacebookSquare/></Link>
            <Link className='socialBar-items'><FaInstagram/></Link>
            <Link className='socialBar-items'><FaTwitter/></Link>
            <Link className='socialBar-items'><FaLinkedin/></Link>
            <Link className='socialBar-items'><FaPinterestSquare/></Link>
        </div>
    )
}