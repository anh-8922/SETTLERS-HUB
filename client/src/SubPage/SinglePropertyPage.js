import SinglePostLayout from "../Layout/SinglePostLayout";
import Map from "../Features/Map"
import PropertyDetails from "../Features/PropertyDetailItemCard";

export default function SingleProperty () {

    return (
        <SinglePostLayout>
            <div>
                <h2>Hi from single property</h2>
                <PropertyDetails/>
            </div>
            
        </SinglePostLayout>
    )
}