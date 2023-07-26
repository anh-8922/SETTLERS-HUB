// import SinglePostLayout from "../Layout/SinglePostLayout"
// import { SearchContext } from "../Context/SearchContext"
// import { useState, useEffect, useCallback, useContext } from 'react'
// import InfoLayout from "../Layout/GuideLayout"
// import SummaryCard1 from "../Features/SummaryCard"

// export default function SearchPage () {
//     const { searchQuery } = useContext(SearchContext)
//     const [isItemLoading, setIsItemLoading] = useState(false)
//     const [searchText, setSearchText] = useState([])

//     const getSearchData = async () => {
//         try {
//           let response;
//           if (searchQuery.trim() !== '') {
//             response = await fetch(`http://localhost:5000/guide/search?text=${searchQuery}`);
//           }
//           const responseData = await response.json(); // Parse the JSON data
//           console.log("Respose search:",responseData);
//         } catch (error) {
//           console.log("search error:", error);
//         //   setSearchText([]);
//         }
//       }
        
//     useEffect ( () => {
//         getSearchData()
//     }, [searchQuery, getSearchData])

//     searchData = responseData.searchGuide
//     return (
//         <InfoLayout>
//             <div>
//                 {searchData.map((item) => {
//                     const { _id, image, title, abstract } = item
//                     return (
//                         <SummaryCard1
//                         key={_id}
//                         title={title}
//                         abstract={abstract}
//                         image={image}
//                         // onHandleClick={() => handleReadMore(_id)}
//                         />
//                     )
//                 })}
//                 <SummaryCard1/>
//             </div>
//         </InfoLayout>
        
//     )
// }

import SinglePostLayout from "../Layout/SinglePostLayout";
import { SearchContext } from "../Context/SearchContext";
import { useState, useEffect, useContext } from "react";
import InfoLayout from "../Layout/GuideLayout";
import SummaryCard1 from "../Features/SummaryCard";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const { searchQuery } = useContext(SearchContext);
  const [isItemLoading, setIsItemLoading] = useState(false);
  const [searchData, setSearchData] = useState([]); 
  const navigate = useNavigate();

  const getSearchData = async () => {
    try {
      if (searchQuery.trim() !== "") {
        const response = await fetch(
          `http://localhost:5000/guide/search?text=${searchQuery}`
        );
        const responseData = await response.json();
        console.log("Response search:", responseData);
        setSearchData(responseData.searchGuide);
      }
    } catch (error) {
      console.log("search error:", error);
      //   setSearchText([]);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [searchQuery]);

  const handleReadMore = (_id) => {
    console.log("_id", _id)
  navigate(`/singlesearchpost/${_id}`);
};

  return (
    <InfoLayout>
      <div>
        {searchData.map((item) => {
          const { _id, image, title, abstract } = item;
          return (
            <SummaryCard1
              key={_id}
              title={title}
              abstract={abstract}
              image={image}
              onHandleClick={() => handleReadMore(_id)}
            />
          );
        })}
      </div>
    </InfoLayout>
  );
}
