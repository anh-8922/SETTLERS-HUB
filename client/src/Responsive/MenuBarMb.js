import {BsMenuUp} from 'react-icons/bs';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/responsive.css';

export default function MenuBarMb() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div style={{
            backgroundColor:'whitesmoke', 
            borderRadius:'50%', 
            
            padding: '1rem'}}>
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
                        <Link className='MenuMb-items' to='/'>Home</Link>
                        <Link className='MenuMb-items' to="/service">Service</Link>
                        <Link className='MenuMb-items'to="/housing">Housing</Link>
                        <Link className='MenuMb-items' to="/community">Community</Link>
                        <Link className='MenuMb-items' to="/userregister">Signup</Link>
                        <Link className='MenuMb-items' to="/login">Login</Link>
                    </Box>
                </Modal>
        </div>
    )
}