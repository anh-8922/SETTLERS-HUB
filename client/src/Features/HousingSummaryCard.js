import '../Style/feature.css';
import {FaBath} from "react-icons/fa"
import {FaBed} from "react-icons/fa"

export default function HousinhgSummaryCard (props) {
    const {_id, beds, baths, houseType,rate, address, category, image } =props
    // const imagePath = `https://res.cloudinary.com/dgnqjr0we/image/upload/${image}`;

    return (
        <div className='summary-card'>
            <div key={_id} className="guide-card">
            
                <img className='property-img' src={image} alt={category}/>
                <div className='property-details'>
                    <h3 style={{fontWeight:"bold"}}>{beds} bed {houseType} for {category} </h3>
                    <h4>{address}</h4>
                    <div>£ {rate} PCM </div>
                    
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