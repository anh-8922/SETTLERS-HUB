import '../Style/layout.css';
import Footer from '../Components/Footer';
import { HeaderWithRedLogo } from '../Components/Header';

export default function SinglePostLayout({children}) {
    return(
        <div style={{backgroundColor: "#caebf2", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <HeaderWithRedLogo/>
            <div className="single-post-content">{children}</div>
            <Footer/>
        </div>
    )
}