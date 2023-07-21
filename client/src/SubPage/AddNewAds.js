import NewAddTabs from "../Features/NewAdsTabs";
import SinglePostLayout from "../Layout/SinglePostLayout";

export default function AddNewAds () {
    return (
        <SinglePostLayout>
            <div style={{height:"100vh"}}>
                Create your new Advertisement
                <NewAddTabs/>
            </div>
        </SinglePostLayout>
    )
}