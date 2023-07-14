import '../Style/page.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import RentedHouses from '../SubPage/RentedHouses';
import PropertyToSale from '../SubPage/PropertyToSale';
import { HeroSectionD } from '../Components/HeroSection';
import MainLayout from '../Layout/MainLayout';
import house1 from '../Assets/house1.jpg';
import house2 from '../Assets/house2.jpg';
import NewsLetter from "../Components/NewsLetter";

export default function Housing() {

  return (
    <MainLayout>
      <HeroSectionD/>
      <div className='housing-content'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link  eventKey="first"><img src={house2} style={{width:'15rem', borderRadius:'0.5rem'}}/>PROPERTY FOR RENT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='house-tabs' eventKey="second"><img src={house1} style={{width:'15rem', borderRadius:'0.5rem'}}/>PROPERTY FOR SALE</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" ><h2 style={{paddingLeft:'2rem'}}>This is where we list rent property</h2><RentedHouses/></Tab.Pane>
            <Tab.Pane eventKey="second"><h2 style={{paddingLeft:'2rem'}}>This is where we list sale property</h2><PropertyToSale/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </div>
      <NewsLetter/>
   
    </MainLayout>
  );
}
