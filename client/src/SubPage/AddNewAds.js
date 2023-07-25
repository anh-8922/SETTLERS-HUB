import NewAddTabs from "../Features/NewAdsTabs";
import SinglePostLayout from "../Layout/SinglePostLayout";

export default function AddNewAds () {
    return (
        <SinglePostLayout>
            <div style={{height:"max-content"}}>
                <h3 style={{margin:'0 0 2rem 2rem'}}>Create your new Advertisement:</h3>
                <NewAddTabs/>
            </div>
        </SinglePostLayout>
    )
}