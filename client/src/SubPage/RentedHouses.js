import HousinhgSummaryCard from "../Features/HousingSummaryCard";
import useFetchData from "../CustomHooks/useFetchData"
import Spinner from "../Features/Spinner";
import { useNavigate } from "react-router-dom";

export default function RentedHouses  ( ) {
    const {data} = useFetchData("http://localhost:5000/housing/listproperties")
    console.log("listed properties:", data)
    // const newPropertyAds = data
    // console.log("listed new properties:", newPropertyAds)
    const navigate = useNavigate()

    const handlePropertyDetais = (_id) => {
        console.log('Property Details id:', _id)
        navigate(`/singlepropertypage/${_id}`);
    }

    if (!data) {
        return <Spinner />; 
      }


    const rentedProperties = data.propertyAds.filter(
        (item) => item.category.toLowerCase() === "rent"
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