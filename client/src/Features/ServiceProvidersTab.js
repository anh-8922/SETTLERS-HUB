import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Plumbers from './ServiceCategories/Plumbers';
import Electricians from './ServiceCategories/Electricians';
import HVACTechnicians from './ServiceCategories/HVACTechniciancs';
import Mechanics from './ServiceCategories/Mechanic';
import Painters from './ServiceCategories/Painters';
import Landscapers from './ServiceCategories/Landscapers';
import GeneralServiceProviders from './ServiceCategories/GeneralServiceProviders';

export default function ServiceProviderTabs() {
  return (
    <div className='newadd-tab'>

  
          <Tabs
        defaultActiveKey="plumbers"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
           
            <Tab eventKey="plumbers" title="Plumbers">
              <h1>Plumbers</h1>
              <Plumbers/>
            </Tab>
            <Tab eventKey="electricians" title="Electricians">
              <h1>Electricians</h1>
              <Electricians/>
            </Tab>
            <Tab eventKey="hvactechnician" title="HVAC Technicians">
              <h1>HVAC Technicians</h1>
              <HVACTechnicians/>
            </Tab>
            <Tab eventKey="mechanics" title="Mechanics">
              <h1>Mechanics</h1>
              <Mechanics/>
            </Tab>
            <Tab eventKey="painters" title="Painters">
              <h1>Painters</h1>
              <Painters/>
            </Tab>
            <Tab eventKey="landscapers" title="Gardeners/Landscaper ">
              <h1>Gardeners/ Landscapers</h1>
              <Landscapers/>
            </Tab>
            <Tab eventKey="general" title="General">
              <h1>General</h1>
              <GeneralServiceProviders/>
            </Tab>
          </Tabs>
    </div>
    
  );
}