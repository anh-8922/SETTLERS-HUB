import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../Style/feature.css';
import { Link } from 'react-router-dom';
import water from '../Assets/water.jpg';
import Accordion from 'react-bootstrap/Accordion';
import eon from '../Assets/eon.png'

export default function UtilityTabs() {
  return (
    <div>

  
          <Tabs
        defaultActiveKey="water"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            
            <Tab eventKey="water" title="Water"><WaterSupplier/></Tab>
            <Tab eventKey="energy" title="Energy"><EnergySuppliers/></Tab>
            <Tab eventKey="telecommunication" title="Telecommunication">Telecommunication</Tab>
            
          </Tabs>
    </div>
    
  );
}

function WaterSupplier() {
  return(
    <div>
        <h1>Find out your water and wastewater provider</h1>
        <div style={{backgroundImage: `url("${water}")`, height:'12rem', backgroundSize:'cover', margin:' 1rem 0'}}></div>
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

function EnergySuppliers() {
  return (
    <div style={{width:'100%'}}>
      <h1>Find out your enery providers</h1>
      <div style={{backgroundImage: `url("${water}")`, height:'12rem', backgroundSize:'cover', margin:' 1rem 0'}}></div>
        
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>E.ON</h3>
          <div style={{
            backgroundImage: `url("${eon}")`, 
            width: '9rem', height:'2.5rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose it?</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>E.ON offers one of the cheapest tariffs available and provides a wealth of online resources.</p>

              <p>E.ON particularly impresses for the tools and advice it provides online. As a customer, you can manage your account online and take advantage of plenty of information on its website to better understand your bills and save energy.

              The supplier currently offers one of the cheapest fixed tariffs on the market. It applies a £30 exit fee per fuel should you later find a better deal and decide to leave early.

              E.ON responds to over half (52.8%) of customer emails within two days, while customers experience an average call waiting time of just over nine minutes.

              The supplier will carry out a swift switch within 15 working days.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>Outfox the Market</h3>
          <div style={{
            backgroundImage: `url("${eon}")`, 
            width: '9rem', height:'2.5rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose it?</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Outfox the Market makes the list for offering one of the cheapest tariffs on the market and sourcing 100% renewable electricity.</p>

              <p>Outfox the Market’s cheapest variable rate tariff is one of the cheapest tariffs on the market. Customers on its cheapest fixed tariff should expect an exit fee of £33.50 per fuel to leave it early, should they find a better deal.

              It shows a strong commitment to sustainable practices, which includes sourcing 100% renewable electricity.

              Outfox the Market’s customers experience an average call waiting time of just over two minutes, while the supplier responds to 99.2% of emails within two days, completes 100% of switches within 15 working days, and offers a Vulnerability Commitment.

              It only receives approximately 10 complaints per 10,000 customers.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>SSE</h3>
          <div style={{
            backgroundImage: `url("${eon}")`, 
            width: '9rem', height:'2.5rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose it?</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>SSE’s can benefit from one of the cheapest fixed rate tariffs available and a swift switch.</p>

              <p>SSE’s cheapest fixed rate tariff is impressively low, and no exit fee is levied should you leave it early for a better deal.

              The supplier offers a Vulnerability Commitment and Switch Guarantee, carrying out 99.2% of switches within 15 working days.

              Detailed energy-saving advice can be found on the supplier’s website, however its online advice for understanding bills and digital tools are limited.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>Utility Wareouse</h3>
          <div style={{
            backgroundImage: `url("${eon}")`, 
            width: '9rem', height:'2.5rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose it?</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Utility Warehouse carries out nearly all energy switches within 15 days and offers one of the cheapest tariffs.</p>

              <p>Utility Warehouse provides almost all (97%) of its customers experience a quick switch, while 95% receive an accurate bill at least once a year.

The supplier has one of the cheapest variable rate tariffs on the market, however its cheapest fixed rate tariff is quite expensive, with the supplier charging a £40 exit fee per fuel to leave it early.

It also offers information online to help customers understand their bills and an app, for those who want to manage their accounts on the go.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
    </div>
    
  );
}
