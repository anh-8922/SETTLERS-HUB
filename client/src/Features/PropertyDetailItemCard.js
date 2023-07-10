import Carousel from 'react-bootstrap/Carousel'
import useFetchData from '../CustomHooks/useFetchData'
import {Link, useParams} from 'react-router-dom'
import Spinner from './Spinner'
import PlaceIcon from '@mui/icons-material/Place'
import Map from './Map'
import { useRef, useState, useEffect } from 'react';

export default function PropertyDetails () {
    const { id } = useParams()
    const [center, setCenter] = useState({ lat: 51.4934, lng: 0.0098 })
    const [zoom, setZoom] = useState(8)
    const mapRef = useRef(null)
    console.log("selected single property id:", id)
    const {data, error} = useFetchData(`http://localhost:5000/housing/listoneproperty/${id}`)
    console.log("selected property data:", data)
    const myMap = process.env.REACT_APP_MY_GOOGLE_API
    console.log("API:", myMap)

    useEffect(() => {
        if (data) {
          setCenter({ lat: latitude, lng: longitude });
          setZoom(13); 
    
        }
      }, [data])


    if (!data || !data.selectedProperty) {
        return <Spinner />
      }



    
    



    const {_id, address, availableOn, baths, beds, category, date, description, houseType, latitude, longitude, owner, rate, image } = data.selectedProperty
    const postCode = address[0].postcode 
    const city = address[0].city               

    console.log("lat:", postCode)
    // const selectedProperty = data.selectedProperty
    // console.log('selected singel propety details:', selectedProperty)

    const handleSeeMapClick = () => {
        if (mapRef.current) {
          mapRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }

;

    return (
        <div className="single-property-details">
            <Carousel style={{width: '70%', height:'100%'}}>
            {
                image.map((imageUrl, index) => {
                    return(
                        
                        <Carousel.Item key={index}  style={{background: `url(${imageUrl})`, height: '200px', backgroundSize: "cover"}}>
                       
                        </Carousel.Item>
                
                        
                    )
                })
            }
            </Carousel>
            <div className="place-property-details">
                {city} 
                <sapan> {postCode}</sapan>
                | <button onClick={handleSeeMapClick} > 
                    <PlaceIcon /> See map</button>

            </div>
            <div className="rate-property-details">
            {category === "Rent" ?  
                    <div>£ {rate} PCM </div> : 
                    <div>£ {rate}</div>}
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
        <div className="map-container" ref={mapRef}>
          
            <Map apiKey={myMap}
                 center={center}
                 zoom={zoom}
                 latitude={latitude}
                 longitude={longitude} 
                 text={"Porperty"}/>
        </div>  
        
        </div>
    )
}