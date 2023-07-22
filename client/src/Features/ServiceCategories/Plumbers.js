import ServiceProvidertCard from "../../Components/ServiceProviderCard";
import useFetchData from "../../CustomHooks/useFetchData";
import Spinner from "../Spinner"

export default function Plumbers () {
    const {data} = useFetchData('/serviceprovider/listserviceproviders')
    console.log("request data:", data)

    if (!data) {
        return <Spinner />;
      }


    const plumbers = data.serviceProvidersAds.filter((item) => item.category === "Plumber")
    console.log("plumbers:", plumbers)

    const handleRequestMessage = () => {

    }

    const handleRequestReview = () => {

    }

    return(
        <div>
            {
                plumbers.map((item) => {
                    const {_id, subject, location, createdAt, description, rate, qulifications, experience, owner } = item
                    const created = new Date (createdAt)
                    const year = created.getFullYear()
                    const month = created.getMonth() + 1
                    const day = created.getDate()

                    return(
                        <ServiceProvidertCard handleMessage={handleRequestMessage}
                                                handleReview={handleRequestReview}
                                                key={_id}
                                                _id={_id}
                                                firstName={owner.firstName}
                                                lastName={owner.lastName}
                                                subject={subject}
                                                location={location}
                                                rate={rate}
                                                experience={experience}
                                                qulifications={qulifications}
                                                description={description}
                                                createdAt = {`${year}-${month}-${day}`}/>
                    )
                })
            }
            
        </div>
    )
}



