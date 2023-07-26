import Carousel from 'react-bootstrap/Carousel';
import london1 from '../Assets/london1.jpg';
import london2 from '../Assets/london2.jpg';
import london3 from '../Assets/london3.jpg';
import '../Style/component.css';
import useFetchData from "../CustomHooks/useFetchData";
import {SpotlightsCard} from "../Features/SummaryCard";
import Spinner from "../Features/Spinner";
import { useNavigate } from "react-router-dom";
import NewsTicker from 'react-advanced-news-ticker';
import {BsChevronCompactDown} from 'react-icons/bs';
import { useRef } from 'react';

export default function SpotLight() {
    

    return(
        <div className="spotlight">
            <h1 style={{fontWeight:'bold', marginBottom:'2rem'}}>What's on in London</h1>
            <div className='spotlight-content'>
                <CarouselA/>
                <SpotlightNews/>
            </div>
            
        </div>
    )
}

export function SpotlightNews() {
    const ref = useRef();
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
        <div className='spotlight-items'>
                    <h2>Spotlights</h2>
                    <div className='spotlight-news'>
                        <NewsTicker style={{height:"30rem", listStyle:"none"}} 
                            rowHeight={150} 
                            ref={ref} 
                            duration={6000}>
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
                        </NewsTicker>
                        <BsChevronCompactDown style={{fontSize:"3rem", cursor:'pointer'}} 
                        onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }}/>
                    </div>
                    
                    
                </div>
    )
}

function CarouselA() {
    return (
      <Carousel fade style={{width: '70%', height:'100%'}}>
        <Carousel.Item interval={500} style={{background: `url(${london1})`, height: '100%', backgroundSize: "cover"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{background: `url(${london2})`, height: '100%', backgroundSize: "cover"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{background: `url(${london3})`, height: '100%', backgroundSize: "cover"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
      </Carousel>
    );
  }

