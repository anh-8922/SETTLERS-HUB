import { NavLink } from "react-router-dom";
import '../Style/feature.css';
import SearchBar from "./SearchBar";

export default function NavBar() {
    return(
        <div className="nav-bar">
            <div className="navigator">
                <NavLink className="NavItems" to="/">Home</NavLink>
                <NavLink className="NavItems">Services</NavLink>
                <NavLink className="NavItems">Housing</NavLink>
                <NavLink className="NavItems">Community</NavLink>
            </div>
            <SearchBar/>
        </div>
    )
}

