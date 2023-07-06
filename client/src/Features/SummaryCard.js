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