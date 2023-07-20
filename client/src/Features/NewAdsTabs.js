import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PostNewHousingAds from '../Components/PostNewHousingAds';
import NewServiceAds from '../Components/AddNewServiceAds';

export default function NewAddTabs() {
  return (
    <div className='newadd-tab'>

  
          <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            <Tab eventKey="contact" title="" disabled></Tab>
            <Tab eventKey="housing" title="Housing"><PostNewHousingAds/></Tab>
            <Tab eventKey="service" title="Service"><NewServiceAds/></Tab>
            <Tab eventKey="requests" title="Service Requests">Requests</Tab>
          </Tabs>
    </div>
    
  );
}