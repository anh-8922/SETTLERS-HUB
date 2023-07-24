import HousinhgSummaryCard from "../Features/HousingSummaryCard";
import useFetchData from "../CustomHooks/useFetchData"
import Spinner from "../Features/Spinner";
import { useNavigate } from "react-router-dom";

export default function PropertyToSale  ( ) {
    const {data} = useFetchData("https://settlers-hub-server.vercel.app/housing/listproperties")
    console.log("listed properties:", data)
    // const newPropertyAds = data
    // console.log("listed new properties:", newPropertyAds)
    const navigate = useNavigate ()

    const handlePropertyDetais = (_id) => {
        console.log("Sale property detail id:", _id)
        navigate (`/singlepropertypage/${_id}`)
    }

    if (!data) {
        return <Spinner />; 
      }


    const rentedProperties = data.propertyAds.filter(
        (item) => item.category.toLowerCase() === "sale"
    )

    return (
        <div className="rented-houses">
           {
            rentedProperties
            .map((item) => {
               const {_id, beds, baths, houseType,rate, address, category, image }  = item
               const firstImage = image[0]
               const postCode = address[0].postcode
               
                return (
                    <div key = {_id}>
                    <HousinhgSummaryCard beds={beds}
                                     baths={baths}
                                     houseType={houseType}
                                     rate={rate}
                                     address= {postCode}
                                     category={category}
                                     image={firstImage}
                                     onHandleClick={ () => handlePropertyDetais (_id)}/>
                     </div>
                )
                
               
            })
            
           }
            

        </div>
    )
}