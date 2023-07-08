import '../Style/component.css';
import { NavLink } from 'react-router-dom';
import {HiInformationCircle} from 'react-icons/hi';
import {BiSolidHomeSmile} from 'react-icons/bi';
import {MdWork} from 'react-icons/md';
import {IoMdSchool} from 'react-icons/io';
import {MdHealthAndSafety} from 'react-icons/md';
import {MdOutlineSportsEsports} from 'react-icons/md';
import {SiTransportforlondon} from 'react-icons/si';
import {RxMix} from 'react-icons/rx'

export default function LondonGuide() {
    return(
        <div className="london-guide"> 
            <h1>London Guide</h1>
            <div className='guide-content'>
                <div className="guide-items">
                    <NavLink className="guide-topic" to="/guide/info">
                        <HiInformationCircle/><h3>About London</h3><p>General Information</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic" to='/guide/accommodations'>
                        <BiSolidHomeSmile/><h3>Accommodations</h3><p>Rent or Buy a property</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic" to='/guide/work'>
                        <MdWork/><h3>Work</h3><p>Looking for a job</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic" to='/guide/study'>
                        <IoMdSchool/><h3>Study</h3><p>Education</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic" to='/guide/health'>
                        <MdHealthAndSafety/><h3>Health Care</h3><p>Public and Private</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic" to='/guide/leisure'>
                        <MdOutlineSportsEsports/><h3>Leisure</h3><p>Activities, Sports, Shopping, Attractions</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic" to='/guide/transport'>
                        <SiTransportforlondon/><h3>Transport</h3><p>Getting around</p>
                    </NavLink>
                </div>
                <div className="guide-items" >
                    <NavLink className="guide-topic" to='/guide/miscellaneous'>
                        <RxMix/><h3>Miscellaneous</h3><p>Others</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}