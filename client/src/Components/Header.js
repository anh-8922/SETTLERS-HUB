import Logo from './Logo'
import '../Style/component.css'
import LoginButtons from '../Features/LoginButtons'
import { LogoRed } from './Logo'

export default function Header() {

    return(
        <div className='header' style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        }}>
            <Logo/>
            <LoginButtons/>
        </div>
    )
}

export function HeaderWithRedLogo() {
    return(
        <div className='single-post-header'>
                <LogoRed/>
                <LoginButtons/>
        </div>
    )
}