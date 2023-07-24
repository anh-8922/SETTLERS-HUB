import useFetchData from "../CustomHooks/useFetchData";
import SummaryCard1 from "../Features/SummaryCard";
import Spinner from "../Features/Spinner";
import { useNavigate } from "react-router-dom";
//import "../Styles/category.css";
import {WorkLayout} from '../Layout/GuideLayout'

export default function Work() {
    const { data } = useFetchData("https://settlers-hub-server.vercel.app/guide/list" );
    // console.log("datafetched",data)
    const navigate = useNavigate();
  
    const handleReadMore = (_id) => {
        console.log("_id", _id)
      navigate(`/singleguidepost/${_id}`);
    };
  
    if (!data) {
      return <Spinner />;
    }
    const infoCard = data.filter(
      (item) => item.category.toLowerCase() === "work"
    );
   console.log(infoCard)
    return(
        <WorkLayout>
            {infoCard.map((item) => {
                const { _id, image, title, abstract } = item;
                return (
                    <SummaryCard1
                    key={_id}
                    title={title}
                    abstract={abstract}
                    image={image}
                    onHandleClick={() => handleReadMore(_id)}
                    />
                );
            })}
        </WorkLayout>
    )
}

