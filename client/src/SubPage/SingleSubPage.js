import GuideItem from '../Features/GuideItem';
import { Link, useParams } from "react-router-dom";
import Spinner from "../Features/Spinner";
import useFetchData from "../CustomHooks/useFetchData";
import '../Style/page.css';
import SinglePostLayout from '../Layout/SinglePostLayout';

export default function SingleSubPage() {
  const { id } = useParams();
  const { data } = useFetchData("http://localhost:5000/guide/list");

  if (!data) {
    return <Spinner />;
  }

  const selectedPost = data.find((item) => item._id === id);
  console.log("selected post:", selectedPost)
  

  if (!selectedPost) {
    return <div>Post not found</div>;
  }

  const {image, title, subtitle, subtitle1, subtitle2, abstract, paragraph, paragraph1, paragraph2} = selectedPost;

  return (
    <SinglePostLayout>
        
        <div className="single-post">
          <GuideItem
            title={title}
            image={image}
            abstract={abstract}
            subtitle={subtitle}
            paragraph={paragraph}
            subtitle1={subtitle1}
            subtitle2={subtitle2}
            paragraph1={paragraph1}
            paragraph2={paragraph2}
          />
          <Link to="/">
            <button style={{
                          fontSize:'1.5rem', 
                          backgroundColor:'pink', 
                          marginLeft:'5rem', 
                          padding:'0.8rem',
                          borderRadius:'0.5rem'}}>Back to Home</button>
          </Link>
        </div>
    </SinglePostLayout>
  )
}