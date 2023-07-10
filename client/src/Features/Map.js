// import { useState, useEffect } from 'react'
// import LocationPin from '../Components/Location'
// import GoogleMapReact from 'google-map-react'

// export default function Map () {
//     const myMap = process.env.REACT_APP_MY_GOOGLE_API
//     const [center, setCenter] = useState({ lat: 51.4934, lng: 0.0098 });
//     const [zoom, setZoom] = useState(8);

//     useEffect(() => {
      
//           setCenter({ lat: 51.4934, lng:  0.0098  });
//           setZoom(8); 
    
       
//       }, []);

//       return (
//         <>
//           <div id="map-container">
//             <p>Hello from map</p>
//           <div id="map">
//             <GoogleMapReact
//               id="locate-map"
//               bootstrapURLKeys={{ key: myMap }}
//               center={center}
//               zoom={zoom}
//             >
//               {/* <LocationPin lat={data.latitude} lng={data.longitude} text="You are here" /> */}
//             </GoogleMapReact>
//           </div>
//           </div>
//         </>
//       );
      
// }


import React from "react"
import GoogleMapReact from 'google-map-react'
import LocationPin from '../Components/Location'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props){
//   const defaultProps = {
//     center: {
//       lat: 51.4934,
//       lng: 0.0098
//     },
//     zoom: 11
//   };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: props.apiKey }}
        center={props.center}
        zoom={props.zoom}
      >
        {/* <AnyReactComponent
          lat={51.4934}
          lng={0.0098}
          text="My Marker"
        /> */}
        <LocationPin lat={props.latitude} lng={props.longitude} text={props.text} />
      </GoogleMapReact>
    </div>
  );
}