import '../Style/layout.css';
import {GiReturnArrow} from 'react-icons/gi';
//import Header from '../Components/Header';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Components/Logo';
import LoginButtons from '../Features/LoginButtons';
import { Link } from 'react-router-dom';

export default function FooterPostLayout({children}) {
    return(
        <div style={{
            backgroundColor: "grey", 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            height:'max-content',
            paddingBottom:'3rem'}}>
            <div style={{
                display:'flex', flexDirection:'row', 
                justifyContent:'space-between',
                padding:'2rem 10rem 0 10rem'}}>
                <Logo/>
                <LoginButtons/>
            </div>
            <div className="single-post-content">
                
                <div>{children}</div>   
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
    )
}

