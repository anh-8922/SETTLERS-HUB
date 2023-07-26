import logo1 from '../Assets/logo1.png';
import logo2 from '../Assets/logo2.png';
import '../Style/component.css';
import { Link } from 'react-router-dom';

export default function Logo() {
    return(
        <Link className='logo' to='/' >
                <img src={logo1} alt="logo" style={{width: "20rem"}}/>
        </Link>
    )
}

export function LogoRed() {
    return(
        <Link className='logo' to='/' >
                <img src={logo2} alt="logo2" style={{width: "20rem"}}/>
        </Link>
    )
}