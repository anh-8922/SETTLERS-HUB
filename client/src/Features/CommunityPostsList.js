import useFetchData from "../CustomHooks/useFetchData"
import TimeAgo from 'react-timeago'
import { useEffect } from "react"
import '../Style/feature.css'

export default function ListCommunityPost () {
    const {data,error, refetch} = useFetchData(`http://localhost:5000/community/listpost`)
    console.log(data)
    // const post = data.communityPosts

    // console.log("posts:", post)
 

    if (!data){
        return (
            <div>{error}</div>
        )
    }

    return (
        <div className="community_post_list">
           
            {
               data.communityPosts.map((item) => {
                    const {_id, owner, text, createdAt, image} = item
                    return (
                        <div key={_id}>
                            <div className="post-owner" style={{fontSize:"1.2rem", fontWeight:"bold"}}>
                                {owner.firstName} <span>{owner.lastName}</span>
                            </div>
                             {/* <div>
                                <img src={`https://res.cloudinary.com/dgnqjr0we/image/upload/${image}`} alt={image}/>
                            </div>  */}

                            <div className="post-topic">
                                {text}
                            </div>
                            <div>
                            <TimeAgo date={createdAt}/>
                            </div>

                        </div>
                    )

                })
            }
        </div>
    )
}