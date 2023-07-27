import '../Style/component.css';
import NavBar from "../Features/NavBar";
import Header from './Header';
import londonA from '../Assets/londonA.jpg';
import service1 from '../Assets/service1.jpg';
import trafargal from '../Assets/trafargal.jpg';
import heroSectionD from '../Assets/herosectionD.jpg';

export default function HeroSectionA() {
    return(
        <div className="heroSection" style={{backgroundImage: `url("${londonA}")`}}>
            <Header/>
            <NavBar/>
            <h1 className='main-h1' style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent: "center", 
                height:"100%",
                color:"whitesmoke",
                fontSize:'3rem'}}>
            Navigating New Beginnings, Together
            </h1>
        </div>
    )
}

export function HeroSectionB() {
    return (
        <div className="heroSection" style={{backgroundImage: `url("${service1}")`}}>
            <Header/>
            <NavBar/>
            <h1 className='main-h1' style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent: "center", 
                height:"100%",
                color:"whitesmoke",
                fontSize:'3rem'}}> 
            Connecting Talents, Impacting Lives: Join Us Today
            </h1>
        </div>
    )
}

export function HeroSectionC() {
    return (
        <div className="heroSection" style={{backgroundImage: `url("${trafargal}")`, backgroundPosition:'center'}}>
            <Header/>
            <NavBar/>
            <h1 className='main-h1' style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent: "center", 
                height:"100%",
                color:"whitesmoke",
                fontSize:'3rem'}}>
            From Settlers to Community: Join the Conversation
            </h1>
        </div>
    )
}

export function HeroSectionD() {
    return (
        <div className="heroSection" style={{backgroundImage: `url("${heroSectionD}")`}}>
            <Header/>
            <NavBar/>
            <h1 className='main-h1' style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent: "center", 
                height:"100%",
                fontSize:'3rem',
                color:"whitesmoke"}}>
            Find Your Sanctuary: Explore Properties for Settlers
            </h1>
        </div>
    )
}