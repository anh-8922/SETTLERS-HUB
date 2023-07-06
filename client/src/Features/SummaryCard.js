import '../Style/feature.css';

export default function SummaryCard1 (props) {
    const {_id, image, title, abstract} =props
    const imagePath = `http://localhost:5000/uploads/${image}`;

    return (
        <div className='summary-card'>
            <div key={_id} className="guide-card">
            
                <img className='guide-img' src={imagePath} alt={title}/>
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