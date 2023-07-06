import '../Style/layout.css';
import NavBar from "../Features/NavBar";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import london3 from '../Assets/london3.jpg';

export default function GuideLayout({children}) {
    return(
        <>
            <div className='homelayout'>
                <Header/>
                <NavBar/>
                <div style={{
                    backgroundImage: `url("${london3}")`, 
                    width: "100%",
                    height: "60vh",
                    borderRadius: "1rem"}}><button>Info</button></div>
            </div>
            <div>{children}</div>
            <Footer/>
        </>
    )
}