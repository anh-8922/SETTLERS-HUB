import londonA from '../Assets/londonA.jpg';
import '../Style/responsive.css';
import logo1 from '../Assets/logo1.png';
import MenuBarMb from './MenuBarMb';
import {BsChevronCompactDown} from 'react-icons/bs';
import { useRef } from 'react';
import NewsTicker from 'react-advanced-news-ticker';
import useFetchData from "../CustomHooks/useFetchData";
import {SpotlightsCard} from "../Features/SummaryCard";
import Spinner from "../Features/Spinner";
import { useNavigate } from "react-router-dom";
import CategoryMb from './CategoryMb';
import FooterMb from './FooterMb';
import LayoutMB from './LayoutMB';

export default function HomeMb() {
    
    return(
        <>
            <HeroSectionMb/>
            <SpotLightMb/>
            <CategoryMb/>
            <FooterMb/>
        </>
    )
}

function HeroSectionMb() {
    

    return(
        <div className="heroSectionMb" style={{
            backgroundImage: `url("${londonA}")`, backgroundPosition:'contain',
            textAlign:'center', 
            height:'60vh'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'2rem 3rem'}}>
                <img src={logo1} style={{width:'40%', height:'70%'}}/>
                <MenuBarMb/>
            </div>
            <h1 style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent: "center", 
                height:'50%',
                color:"whitesmoke"}}>
            Some Main Text Should Be Here
            </h1>
        </div>
    )
}

function SpotLightMb() {
    const ref = useRef();
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
    const spotlightCard = data.filter(
      (item) => item.category.toLowerCase() === "spotlights"
    );
   console.log(spotlightCard)
    return(
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
    )
}

