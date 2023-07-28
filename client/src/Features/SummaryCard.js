import '../Style/feature.css';

export default function SummaryCard1 (props) {
    const {_id, image, title, abstract} =props
    const imagePath = `https://res.cloudinary.com/dgnqjr0we/image/upload/v1688490791/${image}`;

    return (
        <div className='summary-card'>
            <div key={_id} className="guide-card">
            
                <img className='guide-img' src={imagePath} alt={image}/>
                <div className='guide-details'>
                    <h3 style={{fontWeight:"bold"}}>{title}</h3>
                    <p>{abstract}</p>
                    <button className="css-button-sliding-to-left--red" 
                    onClick={props.onHandleClick}>Read more...</button>
                </div>
        
            </div>
        </div>
    )
}
//<img src={`https://res.cloudinary.com/dgnqjr0we/image/upload/v1688490791/${image}`} alt={image}/>

export function SpotlightsCard (props) {
    const {_id, image, title, abstract} =props
    const imagePath = `https://res.cloudinary.com/dgnqjr0we/image/upload/v1688490791/${image}`;

    return (
        <div>
            <div key={_id} className="spotlights-parts" onClick={props.onHandleClick} style={{cursor:'pointer'}}>
                <img className='spot-img' src={imagePath} alt={image} />
                <h3 style={{fontWeight:"bold", fontSize: "1.2rem", textAlign:'left'}}>{title}</h3>
            </div>
        </div>
    )
}

export function ServiceUtilityCard (props) {
    const {_id, image, title, abstract} =props
    const imagePath = `https://res.cloudinary.com/dgnqjr0we/image/upload/v1688490791/${image}`;

    return (
        <div>
            <div key={_id} className="spotlights-parts" onClick={props.onHandleClick} style={{cursor:'pointer'}}>
                <img className='spot-img' src={imagePath} alt={image} />
                <h3 style={{fontWeight:"bold", fontSize: "1.2rem", textAlign:'left'}}>{title}</h3>
            </div>
        </div>
    )
}