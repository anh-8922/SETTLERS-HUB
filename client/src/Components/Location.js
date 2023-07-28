import { MdLocationPin } from 'react-icons/md';
// import './css/styles.css';
const LocationPin = ({ text }) => (
  <div className="pin">
    <p
      className="pin-text"
      style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transformOrigin: 'center center',
        color: "#924946",
        fontSize:"1.2rem"
      }}
    >
      <MdLocationPin className="pin-icon"  style={{ height: '100%', position:'relative', fontSize:"3rem", color:"blue"}} /><br/>

      {text}
    </p>
  </div>
);

export default LocationPin