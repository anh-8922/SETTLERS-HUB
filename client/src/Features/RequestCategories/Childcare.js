import ServiceRequestCard from "../../Components/ServiceReqestCard";
import useFetchData from "../../CustomHooks/useFetchData";
import Spinner from "../Spinner"

export default function Childcare () {
    const {data} = useFetchData('/servicerequests/listservicerequset')
    console.log("request data:", data)

    if (!data) {
        return <Spinner />;
      }


    const childcare = data.serviceRequestAds.filter((item) => item.category === "Childcare")
    console.log("childcare req:", childcare)
    const handleRequestMessage = () => {

    }

    return(
        <div>
            {
                childcare.map((item) => {
                    const {_id, subject, location, createdAt, description} = item
                    const created = new Date (createdAt)
                    const year = created.getFullYear()
                    const month = created.getMonth() + 1
                    const day = created.getDate()

                    return(
                        <ServiceRequestCard handleMessage={handleRequestMessage}
                                            key={_id}
                                            _id={_id}
                                            subject={subject}
                                            location={location}
                                            description={description}
                                            createdAt = {`${year}-${month}-${day}`}/>
                    )
                })
            }
            
        </div>
    )
}