import Logo from './Logo'
import '../Style/component.css'
import LoginButtons from '../Features/LoginButtons'



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
