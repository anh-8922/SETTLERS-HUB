import '../Style/layout.css';
import { HeaderWithRedLogo } from '../Components/Header';
import Footer from '../Components/Footer';
import {FaHome} from 'react-icons/fa';
import {GiReturnArrow} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import NavBar1 from '../Features/NavBar';
import Navbar from 'react-bootstrap/Navbar';

export default function SearchLayout({children}) {
    return(
        <>
            <div className='searchlayout'>
                <HeaderWithRedLogo/>
                <div style={{padding:'0 12rem 0 8rem'}}><NavBar1/></div>
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
                <Navbar fixed="bottom">
                <Link to='/' style={{
                borderRadius:'50%', 
                margin:'0 0 1rem 2rem',
                fontSize:'4rem', 
                width:'fit-content',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'whitesmoke',
                width:'6rem', height:'6rem'
                }}>
                    <GiReturnArrow/>
                    
                </Link>
            </Navbar>
            </div>
            <Footer/>
        </>
    )
}