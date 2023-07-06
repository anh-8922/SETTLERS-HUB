import logo1 from '../Assets/logo1.png';
import logo2 from '../Assets/logo2.png';
import '../Style/component.css';

export default function Logo() {
    return(
        <div className='logo'>
                <img src={logo1} alt="logo" style={{width: "20rem"}}/>
        </div>
    )
}

export function LogoRed() {
    return(
        <div className='logo'>
                <img src={logo2} alt="logo2" style={{width: "20rem"}}/>
        </div>
    )
}