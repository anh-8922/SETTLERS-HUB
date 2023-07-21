import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function UtilityTabs() {
  return (
    <div className='newadd-tab'>

  
          <Tabs
        defaultActiveKey="water"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            
            <Tab eventKey="water" title="Water">Water</Tab>
            <Tab eventKey="electricity" title="Electricity">Electricity</Tab>
            <Tab eventKey="telecommunication" title="Telecommunication">Telecommunication</Tab>
            <Tab eventKey="gas" title="Gas">Gas</Tab>
          </Tabs>
    </div>
    
  );
}