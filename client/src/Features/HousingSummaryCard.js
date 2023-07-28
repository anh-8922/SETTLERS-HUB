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
        <div className='housing-summary-card'>
            <div key={_id} className="house-card">
            
                <img style={{width:'20rem', height:'15rem', borderRadius:'0.5rem'}} src={image} alt={category}/>
                <div className='property-details'>
                    <h3 style={{fontWeight:"bold"}}>{beds} bed {houseType} for {category} </h3>
                    <h4> <PlaceIcon /><span> {address}</span></h4>
                    {/* <h4> <PlaceIcon /><span> <Link to="/location" style={{textDecoration:"none"}}>{address} </Link></span></h4> */}

                    {category === "Rent" ?  
                    <div style={{fontSize:"1.5rem", fontWeight:"600"}}>£ {rate} PCM </div> : 
                    <div style={{fontSize:"1.5rem", fontWeight:"600"}}>£ {rate}</div>}

                    <div style={{display:"flex",
                            marginTop:"1rem",
                            gap:"3rem"}}>
                        <p> <FaBed style={{fontSize:"2rem"}}/> <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem", marginLeft:"1rem", padding:"0"}}>{beds}</span> </p>
                        <p> <FaBath style={{fontSize:"1.7rem"}}/> <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem", marginLeft:"1rem"}}>{baths}</span> </p>
                    </div>
                    <button className="css-button-sliding-to-left--red" 
                    onClick={props.onHandleClick}>Details...</button>
                </div>
        
            </div>
        </div>
    )
}