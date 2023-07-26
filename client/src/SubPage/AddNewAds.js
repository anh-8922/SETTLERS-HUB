import NewAddTabs from "../Features/NewAdsTabs";
import SinglePostLayout from "../Layout/SinglePostLayout";
import { Link } from "react-router-dom";

export default function AddNewAds () {
    return (
        <SinglePostLayout>

            <div style={{height:"max-content"}}>
                <h3 style={{margin:'0 0 2rem 2rem'}}>Create your new Advertisement:</h3>
                <NewAddTabs/>
                <Link to="/profile">
                     <button style={{
                          fontSize:'1.5rem', 
                          backgroundColor:'pink', 
                          marginLeft:'2rem', 
                          marginTop:'2rem',
                          padding:'0.8rem',
                          borderRadius:'0.5rem'}}>Back to Profile</button>
                 </Link>
            </div>
        </SinglePostLayout>
    )
}