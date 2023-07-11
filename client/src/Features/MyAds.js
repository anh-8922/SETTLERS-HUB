import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"

export default function MyAds () {
    const userId = useGetUserID ()
    console.log("user from my ads:", userId)
    const {data} = useFetchData(`http://localhost:5000/housing/listpropertiesbyuser?owner=${userId}`)
    console.log("Ads by user:", data)
    
    return (
        <div>Housing adds</div>
    )
}