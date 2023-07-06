import '../Style/component.css';
import { NavLink } from 'react-router-dom';
import {HiInformationCircle} from 'react-icons/hi';

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
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Accommodations</h3><p>Rent or Buy a property</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Work</h3><p>Looking for a job</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Study</h3><p>Education</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Health Care</h3><p>Public and Private Healthcare</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Leisure</h3><p>Activities, Sports, Shopping, Attractions</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Transport</h3><p>Getting around</p>
                    </NavLink>
                </div>
                <div className="guide-items">
                    <NavLink className="guide-topic">
                        <HiInformationCircle/><h3>Miscellaneous</h3><p>Family Life</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}