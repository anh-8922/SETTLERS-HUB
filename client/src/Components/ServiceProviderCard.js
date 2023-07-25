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
        <div key={_id}>
            <div>Service Provider: {firstName} {lastName}</div>
            <div>Subject: {subject}</div>
            <div>Location: {location}</div>
            <div>Rate: £ {rate} p/hr</div>
            <div>Qulifications: {qulifications}</div>
            <div>Experience: {experience}</div>
            <div>Description: {description}</div>
            <div>Posted Date: {createdAt}</div>
            <button onClick={() => handleMessage(_id)}>Message</button>
            <button onClick={() => handleReview(_id)}>Review</button>
                { reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <div>{review.text}</div>
            {index < reviewerFirstNames.length && index < reviewerLastNames.length && (
              <div>
                By: {reviewerFirstNames[index]} {reviewerLastNames[index]}
              </div>
            )}
          </div>
        ))
      )  : (
        null
      )}
        </div>
    )
}