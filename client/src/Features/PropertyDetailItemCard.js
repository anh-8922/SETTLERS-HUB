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
            <div style={{display:"flex", justifyContent:"center"}}>
                <Carousel style={{width: '80%', height:'100%'}}>
                {
                    image.map((imageUrl, index) => {
                        return(

                            <Carousel.Item key={index}  style={{background: `url(${imageUrl})`, height: '60vh', backgroundSize: "cover"}}>
                            
                            </Carousel.Item>


                        )
                    })
                }
                </Carousel>
            </div>
            <div className="place-property-details"
                 style={{marginLeft:"6rem",
                         marginTop:"20px",
                         fontSize:"1.5rem", fontWeight:"700"}}>
                {city} 
                <sapan> {postCode}</sapan>
                <button onClick={handleSeeMapClick} 
                        style={{margin:"10px", 
                                width:"10rem",
                                height:"3rem"}}
                                className="css-button-sliding-to-left--red" > 
                    <PlaceIcon /> See map </button>

            </div>
            <div className="rate-property-details">
                <div style={{display:"flex", 
                             flexDirection:"row", 
                             gap:"5rem",
                             marginLeft:"6rem",
                             marginTop:"1.2rem"}}>
                    {category === "Rent" ?  
                        <div>
                            <span style={{fontSize:"1.5rem", fontWeight:"600"}}>Rent:</span> 
                            <span style={{fontSize:"1.3rem", fontWeight:"500"}}> £ {rate} PCM </span>
                            </div> :
                        <div style={{fontSize:"1.3rem", fontWeight:"600"}}>£ {rate}</div>}

                <div>
                    {category === "Rent"  && (
                            <div className='deposit'> 
                                <span style={{fontSize:"1.5rem", fontWeight:"600"}}>Deposit: </span>
                                <span style={{fontSize:"1.3rem", fontWeight:"500"}}> £ {deposit}</span> 
                            </div>
                        )
                    }
                </div>
            </div>

           </div>
           <div style={{display:"flex",
                        justifyContent:"space-between",
                        marginRight:"8rem"}}>
                <div className='houseType'
                     style={{marginLeft:"6rem",
                             marginTop:"1rem"}}> 
                        <span style={{fontSize:"1.5rem", fontWeight:"600",  }}>Property Type:</span> 
                        <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}> {houseType} </span>
                </div>
                    
                <div className='let-type'
                     style={{marginTop:"1rem"}}> 
                    <span style={{fontSize:"1.5rem", fontWeight:"600",  }}>Let Type:</span>
                    <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}> {letType}</span> 
                </div>
                <div style={{display:"flex",
                            marginTop:"1rem",
                            gap:"3rem"}}>
                        <p> <FaBed/> <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem", marginLeft:"1rem"}}>{beds}</span> </p>
                        <p> <FaBath/> <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem", marginLeft:"1rem"}}>{baths}</span> </p>
                </div>
            </div>
            <div style={{display:"flex",
                        justifyContent:"space-between",
                        marginRight:"8rem",
                        marginLeft:"6rem",
                        marginTop:"1rem"}}>
                <div className='avialableOn'>
                    <span style={{fontSize:"1.5rem", fontWeight:"600",  }}> Available On: </span>
                    <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}>{availableOn} </span>
                </div>
                <div className='funished-type'>
                    <span style={{fontSize:"1.5rem", fontWeight:"600",  }}> Fernished Type: </span>
                    <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}>{furnishedType}</span>
                </div>
                <div className='taxt-band'>
                <span style={{fontSize:"1.5rem", fontWeight:"600",  }}> Council Tax: </span>
                <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}> Band {councilTaxBand}</span>
                </div>
            </div>
            <div style={{fontSize:"1.5rem", 
                         fontWeight:"600",
                         marginRight:"8rem",
                         marginLeft:"6rem",
                         marginTop:"1rem"}}>Description : </div>
            <pre style={{ whiteSpace: 'pre-wrap', 
                          fontFamily: 'Ysabeau Infant, sans-serif', 
                          fontSize: '1.2rem', 
                          margin: "1rem 8rem 0 6rem"}}className='description'>{description}</pre>
            <div style={{display:"flex",
                        justifyContent:"space-between",
                        marginRight:"8rem",
                        marginLeft:"6rem",
                        marginTop:"1rem"}}>
                <div className='contact'> 
                    <span style={{fontSize:"1.5rem", fontWeight:"600",  }}>Contact: </span>
                    <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}>{contact}</span>
                </div>
                <div className='advertised-on'>
                    <span style={{fontSize:"1.5rem", fontWeight:"600",  }}>Advertised On: </span>
                    <span style={{fontSize:"1.3rem", fontWeight:"500",  marginTop:"1.2rem"}}><TimeAgo date={date}/></span>
                </div>
            </div>
    
            
        <div className="map-container" ref={mapRef}>
          
            <Map apiKey={myMap}
                 center={center}
                 zoom={zoom}
                 latitude={latitude}
                 longitude={longitude} 
                 text={"Porperty"}
                />
        </div>  
        <Link to="/housing">
            <button style={{
                          fontSize:'1.5rem', 
                          backgroundColor:'pink', 
                          marginLeft:'6rem', 
                          padding:'0.8rem',
                          borderRadius:'0.5rem',
                          marginTop:"1rem"}}>Back to Housing</button>
          </Link>
        
        </div>
    )
}