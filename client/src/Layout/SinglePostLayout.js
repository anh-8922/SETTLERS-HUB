import '../Style/layout.css';
import {GiReturnArrow} from 'react-icons/gi';
import { HeaderWithRedLogo } from '../Components/Header';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function SinglePostLayout({children}) {
    return(
        <div style={{
            backgroundColor: "#caebf2", 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            height:'max-content',
            paddingBottom:'3rem'}}>
            <HeaderWithRedLogo/>
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

