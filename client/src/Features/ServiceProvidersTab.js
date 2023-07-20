import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function ServiceProviderTabs() {
  return (
    <div className='newadd-tab'>

  
          <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            <Tab eventKey="contact" title="" disabled></Tab>
            <Tab eventKey="plumbers" title="Plumbers">Plumbers</Tab>
            <Tab eventKey="electricians" title="Electricians">Electrician</Tab>
            <Tab eventKey="hvactechnician" title="HVAC Technicians">HVAC Technician</Tab>
            <Tab eventKey="mechanics" title="Mechanics">Mechanic</Tab>
            <Tab eventKey="painters" title="Painters">Painters</Tab>
            <Tab eventKey="landscapers" title="Gardeners/Landscaper ">Gardeners/ Landscapers</Tab>
            <Tab eventKey="general" title="General">General</Tab>
          </Tabs>
    </div>
    
  );
}