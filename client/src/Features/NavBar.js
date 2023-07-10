import { NavLink } from "react-router-dom";
import '../Style/feature.css';
import SearchBar from "./SearchBar";

export default function NavBar() {
    return(
        <div className="nav-bar">
            <div className="navigator">
                <NavLink className="NavItems" to="/">HOME</NavLink>
                <NavLink className="NavItems" to="/service">SERVICES</NavLink>
                <NavLink to="/housing" className="NavItems">HOUSING</NavLink>
                <NavLink to="/community" className="NavItems">COMMUNITY</NavLink>
            </div>
            <SearchBar/>
        </div>
    )
}

