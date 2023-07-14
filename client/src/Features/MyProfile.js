import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"

export default function MyProfile () {
    const userID = useGetUserID ()
    console.log("profileuser:", userID)
    const {data} = useFetchData(`http://localhost:5000/user/listoneuser/${userID}`)
    console.log("user data profile:", data)

    return (
        <div>
            hi my pro
        </div>
    )
}