import '../Style/layout.css';
import NavBar from "../Features/NavBar";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function HomeLayout({children}) {
    return(
        <>
            <div className='homelayout'>
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
            <div>{children}</div>
            <Footer/>
        </>
    )
}