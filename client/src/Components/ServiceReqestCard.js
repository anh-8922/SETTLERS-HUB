export default function ServiceRequestCard ({
    _id,
    subject,
    location,
    description,
    createdAt,
    handleMessage
}) {

    return (
        <div key={_id}>
            <div>Subject: {subject}</div>
            <div>Location: {location}</div>
            <div>Description: {description}</div>
            <div>Posted Date: {createdAt}</div>
            <button onClick={() => handleMessage(_id)}>Message</button>
        </div>
    )
}