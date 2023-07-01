import '../Style/component.css';
import NavBar from "../Features/NavBar";
import Header from './Header';

export default function HeroSectionA() {
    return(
        <div className="heroSection-A">
            <Header/>
            <NavBar/>
            <h1 style={{
                display:"flex", 
                flexDirection:"column", 
                justifyContent: "center", 
                height:"100%",
                color:"whitesmoke"}}>
            Some Main Text Should Be Here
            </h1>
        </div>
    )
}