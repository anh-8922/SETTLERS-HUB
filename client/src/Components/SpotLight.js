import Carousel from 'react-bootstrap/Carousel';
import london1 from '../Assets/london1.jpg';
import london2 from '../Assets/london2.jpg';
import london3 from '../Assets/london3.jpg';
import '../Style/component.css';

export default function SpotLight() {
    return(
        <div className="spotlight">
            <h1>What's on in London</h1>
            <div className='spotlight-content'>
                <CarouselA/>
                <div className='spotlight-items'>
                    <h2>Spotlights</h2>
                </div>
            </div>
            
        </div>
    )
}


function CarouselA() {
    return (
      <Carousel style={{width: '70%', height:'100%'}}>
        <Carousel.Item style={{background: `url(${london1})`, height: '100%', backgroundPosition: "center"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
        <Carousel.Item style={{background: `url(${london2})`, height: '100%', backgroundPosition: "center"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
        <Carousel.Item style={{background: `url(${london3})`, height: '100%', backgroundPosition: "center"}}>
            <div className='spotlight-slide'>
                
            </div>
        </Carousel.Item>
      </Carousel>
    );
  }

