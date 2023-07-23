import NewAddTabs from "../Features/NewAdsTabs";
import SinglePostLayout from "../Layout/SinglePostLayout";
import { Link } from "react-router-dom";

export default function AddNewAds () {
    return (
        <SinglePostLayout>
            <div style={{height:"100vh"}}>
               <h1>Create your new Advertisement</h1> 
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