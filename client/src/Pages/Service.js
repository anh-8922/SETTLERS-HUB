import '../Style/page.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { HeroSectionB } from '../Components/HeroSection';
import MainLayout from '../Layout/MainLayout';
import utility from '../Assets/utility.png';
import serviceprovider from '../Assets/serviceprovider.jpg';
import ServiceRequest from '../Assets/ServiceRequest.jpg';
import NewsLetter from "../Components/NewsLetter";

import UtilityTabs from "../Features/UtilityTabs";
import ServiceProviderTabs from "../Features/ServiceProvidersTab";
import ServiceRequestTabs from '../Features/ServiceRequestTabs';

export default function ServicePage() {

    return (
      <MainLayout>
        <HeroSectionB/>
        <div className='housing-content'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className='house-tabs' eventKey="first"><img src={utility} style={{width:'15rem', borderRadius:'0.5rem'}}/>UTILITY</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='house-tabs' eventKey="second"><img src={serviceprovider} style={{width:'15rem', borderRadius:'0.5rem'}}/>SERVICE PROVIDERS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='house-tabs' eventKey="third"><img src={ServiceRequest} style={{width:'15rem', borderRadius:'0.5rem'}}/>REQUEST</Nav.Link>
              </Nav.Item>
             
            </Nav>
          </Col>
          <Col >
            <Tab.Content>
              <Tab.Pane eventKey="first" ><div style={{marginLeft:'5rem'}}><UtilityTabs/></div></Tab.Pane>
              <Tab.Pane eventKey="second"><ServiceProviderTabs/></Tab.Pane>
              <Tab.Pane eventKey="third" ><div style={{marginLeft:'5rem'}}><ServiceRequestTabs/></div></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
        </div>
        <NewsLetter/>
     
      </MainLayout>
    );
  }
  