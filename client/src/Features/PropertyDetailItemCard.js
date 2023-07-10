import Carousel from 'react-bootstrap/Carousel'
import useFetchData from '../CustomHooks/useFetchData'
import {Link, useParams} from 'react-router-dom'
import Spinner from './Spinner'
import PlaceIcon from '@mui/icons-material/Place'
import Map from './Map'
import { useRef, useState, useEffect } from 'react';
import TimeAgo from 'react-timeago'
import {FaBath} from "react-icons/fa"
import {FaBed} from "react-icons/fa"

export default function PropertyDetails () {
    const { id } = useParams()
    const [center, setCenter] = useState({ lat: 51.5072, lng: -0.1876 })
    const [zoom, setZoom] = useState(8)
    const mapRef = useRef(null)
    console.log("selected single property id:", id)
    const {data, error} = useFetchData(`http://localhost:5000/housing/listoneproperty/${id}`)
    console.log("selected property data:", data)
    const myMap = process.env.REACT_APP_MY_GOOGLE_API

    useEffect(() => {
        if (data && data.selectedProperty) {
          const { latitude, longitude } = data.selectedProperty;
          setCenter({ lat: latitude, lng: longitude });
          console.log('center:', center)
          setZoom(10); 
    
        }
      }, [data])



    if (!data || !data.selectedProperty) {
        return <Spinner />
      }

    const {address, availableOn, baths, beds, category, date, description, houseType, latitude, longitude, owner, rate, image, letType, deposit, furnishedType, councilTaxBand} = data.selectedProperty
    const postCode = address[0].postcode 
    const city = address[0].city    
    const contact = owner.email           

    

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
                        
                        <Carousel.Item key={index}  style={{background: `url(${imageUrl})`, height: '60vh', backgroundSize: "cover"}}>
                       
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
                    <div>Rent: £ {rate} PCM </div> : 
                    <div>£ {rate}</div>}
            </div>

            <div className='houseType'> Property Type: {houseType}</div>
            <div>
            {category === "Rent"  && (
                <div className='deposit'> Deposit: £ {deposit}</div>
            )
            }
           </div>
                        
            <div className='let-type'> Let Type: {letType}</div>
            <div>
                    <p> <FaBed/> {beds}</p>
                    <p> <FaBath/> {baths}</p>
            </div>
            <div className='avialableOn'> Available On: {availableOn}</div>
            <div className='funished-type'> Fernished Type: {furnishedType}</div>
            <div className='taxt-band'> Council Tax: Band {councilTaxBand}</div>
            <div className='description'> Description: {description}</div>
            <div className='contact'> Contact: {contact}</div>
            <div className='advertised-on'> Advertised On: <TimeAgo date={date}/></div>
            
        <div className="map-container" ref={mapRef}>
          
            <Map apiKey={myMap}
                 center={center}
                 zoom={zoom}
                 latitude={latitude}
                 longitude={longitude} 
                 text={"Porperty"}
                />
        </div>  
        
        </div>
    )
}