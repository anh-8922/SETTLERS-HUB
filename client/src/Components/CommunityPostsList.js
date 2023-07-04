import useFetchData from "../CustomHooks/useFetchData"

export default function ListCommunityPost () {
    const {data, error} = useFetchData(`http://localhost:5000/community/listpost`)

    return (
        <div>
            Community posts
        </div>
    )
}