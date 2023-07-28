import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../Style/feature.css';
import { Link } from 'react-router-dom';

export default function UtilityTabs() {
  return (
    <div className='newadd-tab'>

  
          <Tabs
        defaultActiveKey="water"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            
            <Tab eventKey="water" title="Water"><WaterSupplier/></Tab>
            <Tab eventKey="electricity" title="Electricity">Electricity</Tab>
            <Tab eventKey="telecommunication" title="Telecommunication">Telecommunication</Tab>
            <Tab eventKey="gas" title="Gas">Gas</Tab>
          </Tabs>
    </div>
    
  );
}

function WaterSupplier() {
  return(
    <div>
        <h1>Find out your water and wastewater provider</h1>
        <h3>Service Area: London</h3>
        <div className='Water-Suppliers'>
          <div className='W-supplier'>
            <div style={{fontWeight:'500'}}>WATER ONLY IS PROVIDED BY</div>
            <div style={{fontSize:'2.5rem', fontWeight:'bold'}}>Affinity Water</div>
            <p>General enquiries call <span style={{fontWeight:'bold'}}>03453 572 401</span></p>
            <p>Billed by <span style={{fontWeight:'bold'}}>Affinity Water</span></p>
            <Link to='https://www.affinitywater.co.uk/' target="_blank"><button>Go to Affinity Water</button></Link>
          </div>
          <div className='W-supplier'>
          <div style={{fontWeight:'500'}}>WATER AND SEWERAGE ARE PROVIDED BY</div>
            <div style={{fontSize:'2.5rem', fontWeight:'bold'}}>Thames Water</div>
            <p>General enquiries call <span style={{fontWeight:'bold'}}>08009 808 800</span></p>
            <p>Billed by <span style={{fontWeight:'bold'}}>Affinity Water</span></p>
            <Link to='https://www.thameswater.co.uk/' target="_blank"><button>Go to Thames Water</button></Link>
          </div>
        </div>
    </div>
    
  )
}