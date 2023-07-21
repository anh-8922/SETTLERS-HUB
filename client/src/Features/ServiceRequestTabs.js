import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Education from './RequestCategories/Education';
import Legal from './RequestCategories/Legal';
import Tax from './RequestCategories/Tax';
import Childcare from './RequestCategories/Childcare';
import General from './RequestCategories/General';


export default function ServiceRequestTabs() {
  return (
    <div className='newadd-tab'>

  
          <Tabs
        defaultActiveKey="education"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            
            <Tab eventKey="education" title="Education">
                <h1>Education</h1>
                <Education/>
            </Tab>
            <Tab eventKey="legal" title="Legal">
                <h1>Legal</h1>
                <Legal/>
            </Tab>
            <Tab eventKey="tax" title="Tax">
                <h1>Tax</h1>
                <Tax/>
            </Tab>
            <Tab eventKey="childcare" title="Childcare">
                <h1>Childcare</h1>
                <Childcare/>
            </Tab>
            <Tab eventKey="general" title="General">
                <hi>General</hi>
                <General/>
            </Tab>
          </Tabs>
    </div>
    
  );
}