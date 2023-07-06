import useFetchData from "../CustomHooks/useFetchData"
import TimeAgo from 'react-timeago'

export default function ListCommunityPost () {
    const {data,error} = useFetchData(`http://localhost:5000/community/listpost`)
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
            <div>community posts</div>
            {
               data.communityPosts.map((item) => {
                    const {_id, owner, text, date, image} = item
                    return (
                        <div key={_id}>
                            <div className="post-owner" style={{fontSize:"1.2rem", fontWeight:"bold"}}>
                                {owner.firstName} <span>{owner.lastName}</span>
                            </div>
                            {/* <div>
                                <img src={`https://res.cloudinary.com/dgnqjr0we/image/upload/v1688490791/${image}`} alt={image}/>
                            </div> */}

                            <div className="post-topic">
                                {text}
                            </div>
                            <div>
                            <TimeAgo date={date}/>
                            </div>

                        </div>
                    )

                })
            }
        </div>
    )
}