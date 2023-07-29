import '../Style/component.css';

export default function ServiceRequestCard ({
    _id,
    subject,
    location,
    description,
    createdAt,
    handleMessage
}) {

    return (
        <div className='S-provider-card' key={_id}>
                       <div style={{
              backgroundColor:'#C72D22', 
              borderRadius:'0.5rem', 
              padding:'0.5rem', marginBottom:'1rem',
              width:'max-content',
              color:'whitesmoke', fontSize:'0.8rem',
              fontWeight:'bold'}}>FEATURED</div>
            <div style={{fontWeight:'bold', fontSize:'1.5rem', color:'#2B6197'}}>Request: {subject}</div>
            
            <div><span style={{fontWeight:'bold'}}>Posted Date:</span> {createdAt}</div>
            <div><span style={{fontWeight:'bold'}}>Location:</span> {location}</div>
           
            <div style={{paddingBottom:'1rem'}}><span style={{fontWeight:'bold'}}>Description:</span> {description}</div>
            <button className='S-provider-buttons' onClick={() => handleMessage(_id)}>Send Offer</button>
            
        </div>
    )
}
