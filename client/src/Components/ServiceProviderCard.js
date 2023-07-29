import '../Style/component.css'

export default function ServiceProvidertCard ({
    _id,
    firstName,
    lastName,
    subject,
    location,
    rate,
    description,
    createdAt,
    experience,
    handleMessage,
    handleReview,
    qulifications,
    text,
    reviewd,
    reviewerFirstNames,
    reviewerLastNames,
    reviews
}) {

    return (
        <div className='S-provider-card' key={_id}>
            <div style={{
              backgroundColor:'#C72D22', 
              borderRadius:'0.5rem', 
              padding:'0.5rem', marginBottom:'1rem',
              width:'max-content',
              color:'whitesmoke',fontSize:'0.8rem',
              fontWeight:'bold'}}>FEATURED</div>
            <div style={{fontWeight:'bold', fontSize:'1.5rem', color:'#2B6197'}}>Service: {subject}</div>
            <div><span style={{fontWeight:'bold'}}>Provider:</span> {firstName} {lastName}</div>
            <div><span style={{fontWeight:'bold'}}>Posted Date:</span> {createdAt}</div>
            <div className='S-provider-card-details'>
                <div>
                    <div>Qualifications: {qulifications}</div>
                    <div>Experience: {experience}</div>
                </div>
                <div>
                    <div>Location: {location}</div>
                    <div>Rate: £ {rate} p/hr</div>
                </div>
            </div>
            <div><span style={{fontWeight:'bold'}}>Description:</span> {description}</div>
            <div className='S-provider-card-button'>
              <button className='S-provider-buttons' onClick={() => handleReview(_id)}>Add Review</button>
              <button className='S-provider-buttons' onClick={() => handleMessage(_id)}>Send Message</button>
            </div>
            <div style={{backgroundColor:'whitesmoke', borderRadius:'1rem', padding:'1rem'}}>
                { reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} >
                <div style={{fontStyle:'italic'}}>{review.text}</div>
                {index < reviewerFirstNames.length && index < reviewerLastNames.length && (
                  <div>
                    <span style={{fontWeight:'600'}}>By:</span> {reviewerFirstNames[index]} {reviewerLastNames[index]}
                  </div>
                )}
              </div>
            ))
          )  : (
            null
          )}
            </div>
            
        
        </div>
    )
}