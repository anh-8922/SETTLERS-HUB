import '../Style/feature.css';
import {FaBath} from "react-icons/fa"
import {FaBed} from "react-icons/fa"
import PlaceIcon from '@mui/icons-material/Place';
// import { Link, useNavigate } from 'react-router-dom';

export default function HousinhgSummaryCard (props) {
    const {_id, beds, baths, houseType,rate, address, category, image } =props
    // const imagePath = `https://res.cloudinary.com/dgnqjr0we/image/upload/${image}`;
    // const navigate = useNavigate()


    return (
        <div className='summary-card'>
            <div key={_id} className="guide-card">
            
                <img className='property-img' src={image} alt={category}/>
                <div className='property-details'>
                    <h3 style={{fontWeight:"bold"}}>{beds} bed {houseType} for {category} </h3>
                    <h4> <PlaceIcon /><span> {address}</span></h4>
                    {/* <h4> <PlaceIcon /><span> <Link to="/location" style={{textDecoration:"none"}}>{address} </Link></span></h4> */}

                    {category === "Rent" ?  
                    <div>£ {rate} PCM </div> : 
                    <div>£ {rate}</div>}
                    
                    <div>
                    <p> <FaBed/> {beds}</p>
                    <p> <FaBath/> {baths}</p>
                    </div>
                    <button className="css-button-sliding-to-left--red" 
                    onClick={props.onHandleClick}>Read more...</button>
                </div>
        
            </div>
        </div>
    )
}