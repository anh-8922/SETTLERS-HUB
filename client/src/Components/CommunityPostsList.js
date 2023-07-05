import useFetchData from "../CustomHooks/useFetchData"
import TimeAgo from 'react-timeago'

export default function ListCommunityPost () {
    const {data} = useFetchData(`http://localhost:5000/community/listpost`)
    console.log(data)
    const post = data.communityPosts

    console.log("posts:", post)

    if (!data){
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className="community_post_list">
            <div>community posts</div>
            {
                post.map((item) => {
                    const {_id, owner, text, date} = item
                    return (
                        <div key={_id}>
                            <div className="post-owner" style={{fontSize:"1.2rem", fontWeight:"bold"}}>
                                {owner.firstName} <span>{owner.lastName}</span>
                            </div>

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