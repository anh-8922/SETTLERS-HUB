import { useNavigate } from "react-router-dom"

export default function ProfilePage ()  {
    const navigate = useNavigate()
    return (
        <div>
            <div>Hi from profile</div>
            <button onClick={() => navigate('/addnewad')}>Add new Ad</button>
        </div>
    )
}