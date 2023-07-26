import '../Style/feature.css'
import { SearchContext } from "../Context/SearchContext"
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useContext} from 'react'

export default function SearchBar({children}) {

  const {searchQuery, setSearchQuery} = useContext(SearchContext)
  const navigate = useNavigate();

  const handleSearch = (e) => {
      e.preventDefault();
      if (searchQuery.trim() !== '') {
        setSearchQuery(searchQuery);
        navigate(`/search?text=${searchQuery}`)
      } else {
        alert('Please enter valid text.');
        
      }
    };

  return (
    <div>
    <div className="search-box">
      <input
      className='input-search'
        type="search"
        label="Enter your text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn-search" onClick={handleSearch}>
        <BsSearch />
      </button>
    </div>
    
    </div>
  );
}