import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
            </Tab>
            <Tab eventKey="electricians" title="Electricians">
              <h1>Electrician</h1>
            </Tab>
            <Tab eventKey="hvactechnician" title="HVAC Technicians">
              <h1>HVAC Technician</h1>
            </Tab>
            <Tab eventKey="mechanics" title="Mechanics">
              <h1>Mechanic</h1>
            </Tab>
            <Tab eventKey="painters" title="Painters">
              <h1>Painters</h1>
            </Tab>
            <Tab eventKey="landscapers" title="Gardeners/Landscaper ">
              <h1>Gardeners/ Landscapers</h1>
            </Tab>
            <Tab eventKey="general" title="General">
              <h1>General</h1>
            </Tab>
          </Tabs>
    </div>
    
  );
}