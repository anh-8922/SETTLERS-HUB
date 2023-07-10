import '../Style/responsive.css';
import logo2 from '../Assets/logo2.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaPinterestSquare} from 'react-icons/fa';
import {BsMenuUp} from 'react-icons/bs';

export default function FooterMb() {
    return(
        <div className="footermenu">
            <div>
                <img src={logo2} alt="logo" style={{width: "50%"}}/>
                <SocialBar/>
            </div>
            <FootNavigator/>
            
        </div>
    )
}

function FootNavigator() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        
        <div style={{display:'flex', flexDirection:'column'}}>
            <BsMenuUp style={{fontSize:'2.5rem'}} onClick={handleOpen}/>
                <Modal
                open={open}
                onClose={handleClose}
                
                >
                    <Box style={{
                        backgroundColor:'whitesmoke', 
                        margin:'7rem 1rem 0 15rem', height:'85vh', borderRadius:'1rem',
                        display: 'flex', flexDirection:'column',
                        gap:'1rem', alignItems:'flex-start', alignContent:'stretch', padding:'2rem'}}>
                        <NavLink className="footNav-items">About us</NavLink>
                        <NavLink className="footNav-items">Contact</NavLink>
                        <NavLink className="footNav-items">FAQ</NavLink>
                        <NavLink className="footNav-items">Terms and Conditions</NavLink>
                        <NavLink className="footNav-items">Cookie Policy</NavLink>
                        <NavLink className="footNav-items">Privacy Statement</NavLink>
                        <NavLink className="footNav-items">Disclamer</NavLink>
                    </Box>
                </Modal>
            
        </div>
    )
}

function SocialBar() {
    return(
        <div style={{display:'flex', flexDirection:'row', gap:'1rem'}}>
            <Link className='SB-items'><FaFacebookSquare/></Link>
            <Link className='SB-items'><FaInstagram/></Link>
            <Link className='SB-items'><FaTwitter/></Link>
            <Link className='SB-items'><FaLinkedin/></Link>
            <Link className='SB-items'><FaPinterestSquare/></Link>
        </div>
    )
}