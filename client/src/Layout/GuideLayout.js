import '../Style/layout.css';
import { HeaderWithRedLogo } from '../Components/Header';
import Footer from '../Components/Footer';
import {FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function InfoLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>General Information</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function AccommodationsLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Accommodations</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function WorkLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Looking for a job</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function StudyLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Education</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function HealthLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Health Care</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function LeisureLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Leisure Activities</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function TransportLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Transportation</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export function MiscellaneousLayout({children}) {
    return(
        <>
            <div className='guidelayout'>
                <HeaderWithRedLogo/>
                <div className="guide-heading">
                    <button className='css-button-neumorphic'>Miscellaneous</button>
                </div>
                
                <div className='guide-list-content'>
                    <Link to="/" className='link-to-home'><FaHome/><h5>Back to Home</h5></Link>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}