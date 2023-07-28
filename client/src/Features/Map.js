
import GoogleMapReact from 'google-map-react'
import LocationPin from '../Components/Location'


export default function Map(props){

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', 
                  width: '80%',
                  margin:"1rem 8rem 1rem 6rem" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: props.apiKey }}
        center={props.center}
        zoom={props.zoom}
      >

        <LocationPin lat={props.latitude} lng={props.longitude} text={props.text} />
      </GoogleMapReact>
    </div>
  );
}