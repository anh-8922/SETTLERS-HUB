import Carousel from 'react-bootstrap/Carousel';
import london1 from '../Assets/london1.jpg';
import london2 from '../Assets/london2.jpg';
import london3 from '../Assets/london3.jpg';
import '../Style/component.css';
import useFetchData from "../CustomHooks/useFetchData";
import {SpotlightsCard} from "../Features/SummaryCard";
import Spinner from "../Features/Spinner";
import { useNavigate } from "react-router-dom";

//import "../Styles/category.css";
//import InfoLayout from '../Layout/GuideLayout'

export default function SpotLight() {

    const { data } = useFetchData("http://localhost:5000/guide/list" );
    // console.log("datafetched",data)
    const navigate = useNavigate();
  
    const handleReadMore = (_id) => {
        console.log("_id", _id)
      navigate(`/singleguidepost/${_id}`);
    };
  
    if (!data) {
      return <Spinner />;
    }
    const spotlightCard = data.filter(
      (item) => item.category.toLowerCase() === "spotlights"
    );
   console.log(spotlightCard)

    return(
        <div className="spotlight">
            <h1>What's on in London</h1>
            <div className='spotlight-content'>
                <CarouselA/>
                <div className='spotlight-items'>
                    <h2>Spotlights</h2>
                   
                    <div className='spotlight-news'>
                        {spotlightCard.map((item) => {
                            const { _id, image, title, abstract } = item;
                                return (
                                    <SpotlightsCard
                                    key={_id}
                                    title={title}
                                    abstract={abstract}
                                    image={image}
                                    onHandleClick={() => handleReadMore(_id)}
                                    />
                                );
                        })}
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}


function CarouselA() {
    return (
      <Carousel style={{width: '70%', height:'100%'}}>
        <Carousel.Item style={{background: `url(${london1})`, height: '100%', backgroundSize: "cover"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
        <Carousel.Item style={{background: `url(${london2})`, height: '100%', backgroundSize: "cover"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
        <Carousel.Item style={{background: `url(${london3})`, height: '100%', backgroundSize: "cover"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
      </Carousel>
    );
  }

