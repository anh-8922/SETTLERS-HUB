import logo1 from '../Assets/logo1.png';
import '../Style/component.css';


export default function Header() {
    return(
        <div className='header' style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        }}>
            <img src={logo1} alt="logo" style={{width: "20rem"}}/>
            <button >Join Us</button>
            <button >Login</button>
            <button >Profile</button>
            <button >Log out</button>
            <button >notifications</button>
            
        </div>
    )
}

