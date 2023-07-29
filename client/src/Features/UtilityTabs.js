import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../Style/feature.css';
import { Link } from 'react-router-dom';
import water from '../Assets/water.jpg';
import Accordion from 'react-bootstrap/Accordion';
import eon from '../Assets/eon.png';
import outfox from '../Assets/outfox.png'
import sse from '../Assets/sse.png';
import uwater from '../Assets/uwater.png';
import together from '../Assets/together.png';
import energy from '../Assets/energy.jpg';
import telecom from '../Assets/telecom.jpeg'

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
            <Tab eventKey="telecommunication" title="Telecommunication"><TelecomSuppliers/></Tab>
            
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
      <div style={{backgroundImage: `url("${energy}")`, height:'12rem', backgroundSize:'cover', margin:' 1rem 0'}}></div>
        
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>E.ON</h3>
          <div style={{
            backgroundImage: `url("${eon}")`, 
            width: '8rem', height:'2.4rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose E.ON</Accordion.Header>
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
            backgroundImage: `url("${outfox}")`, 
            width: '7rem', height:'3.7rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose Outfox the Market</Accordion.Header>
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
            backgroundImage: `url("${sse}")`, 
            width: '8rem', height:'2.5rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose SSE</Accordion.Header>
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
            backgroundImage: `url("${uwater}")`, 
            width: '6.5rem', height:'3.5rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose Utility Wareouse</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Utility Warehouse carries out nearly all energy switches within 15 days and offers one of the cheapest tariffs.</p>

              <p>Utility Warehouse provides almost all (97%) of its customers experience a quick switch, while 95% receive an accurate bill at least once a year.

The supplier has one of the cheapest variable rate tariffs on the market, however its cheapest fixed rate tariff is quite expensive, with the supplier charging a £40 exit fee per fuel to leave it early.

It also offers information online to help customers understand their bills and an app, for those who want to manage their accounts on the go.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>Together Energy</h3>
          <div style={{
            backgroundImage: `url("${together}")`, 
            width: '7rem', height:'4.2rem',
            backgroundSize:'cover'}}></div>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why we chose Together Energy</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Together Energy provides a cheap variable rate tariff and carries out swift switches.</p>

              <p>Together Energy’s cheapest variable rate tariff is one of the lowest on the market, unlike its cheapest fixed tariff which comes with an attached exit fee of £30 per fuel should you leave it early.

              The supplier carries out 99.6% of switches within 15 working days and customers can manage their accounts online.

              Although call waiting times average at 26 seconds, and the supplier responds to approximately 85% of customer emails within two days, the company’s website lacks online advice and complaints average at around 225 per 10,000 customers.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
    </div>
    
  );
}

function TelecomSuppliers() {
  return (
    <div style={{width:'100%'}}>
      <h1>Top Five Telecom Commpanies in the UK</h1>
      <div style={{backgroundImage: `url("${telecom}")`, height:'12rem', backgroundSize:'cover', margin:' 1rem 0'}}></div>
        
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>Vodafone</h3>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Vodafone</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Vodafone is one of the world's largest mobile telecommunications companies.</p>

              <p>Currently, Vodafone operates networks in 22 countries, with 48 additional countries having partner networks. As a result, over 150 countries can access the company's global enterprise division, which offers telephony and IT services to corporations.

              As of November 2021, Vodafone ranked third among the UK's mobile network operators, behind EE and O2, and Three. In the UK, it has 16.9 million subscribers. The company was established in 1984 by Gerry Whent and Ernest Harrison. Originally called Racal-Vodafone (Holdings) Ltd, the company name was changed to Vodafone Group.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>O2 (Telefónica)</h3>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>About O2 (Telefónica)</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>O2 is a telecommunications company founded in 1985. The O2 Group, a British telecommunications company, headquartered in Slough, is legally known as Telefonica UK Limited. The company operates under the O2 brand. It is owned 50:50 by Telefónica and Liberty Global through Virgin Media O2. This company provides mobile, broadband, and landline services to customers across Britain. It has 31.3 million subscribers as of September 2021 and employs over 6500 people.</p>

              <p>Be Un Limited in the UK provides internet services; O2 purchased it in June 2006 for £50 million. In October 2007, O2 launched a separate O2-branded broadband service using the Be network, keeping the Be brand. According to O2, six masts installed in Slough demonstrated a 4G connection using LTE technology on 15 December 2009. 

As a result of Huawei's technology, they achieved a peak downlink rate of 150 Mbps. In addition, by launching Europe's largest free Wi-Fi zone and offering free Wi-Fi access in and around every O2 store in January 2012, O2 plans to provide free internet to millions of residents and visitors in central London.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>Everything Everywhere (EE)</h3>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Everything Everywhere (EE)</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Everything Everywhere, also known as EE, is a telecommunications company that provides wireless and mobile phone services. The company was established in 2010. The company has 26.1 million subscribers as of September 2021, making it the second-largest mobile network operator in Telecommunications Companies UK.</p>

              <p>Now EE has offices in London, Bristol, Darlington, Sunderland, Greenock, Merthyr Tydfil, North Tyneside, Plymouth, and Leeds, as well as Hatfield, England. A combination of EE's 5G, 4G, and 2G networks covers over 99% of the UK population, including double-speed 4G coverage for 80% and 3G coverage for 98%.

              Intelligent number technology, launched by EE on 11 June 2018, allows customers to use the same number across a wide range of devices, such as smartphones, tablets, smartwatches, and laptops. In addition to being free of charge, it is part of the company's strategy to attract and retain customers. By April 2015, EE had 900,000 broadband subscribers, having inherited Orange UK broadband service. </p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>British Sky Broadcasting Group (BSkyB) (Sky)</h3>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>About British Sky Broadcasting Group (BSkyB) (Sky)</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>BSkyB, also known as Sky, is one of Europe's largest television and broadband service providers. </p>

              <p>According to their website, they have an estimated 12.7 million customers across the UK. With a large subscriber base, it's no wonder that BSkyB has been crowned as one of the most successful Telecommunications Companies in London, with a value of billion of pounds sterling. 

According to Sky Group, Paramount+ is set to launch by 2022 in the United Kingdom, Ireland, Italy, Germany, Switzerland, and Austria as a joint venture between the company and ViacomCBS. The company has its headquarters in London, UK. Paramount+ will launch for Sky customers in Ireland and the United Kingdom on 22 June 2022, according to an announcement on 3 May 2022.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <div className='E-supplier'>
        <div className='E-supplier-head'>
          <h3>TalkTalk</h3>
        </div>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Talk Talk</Accordion.Header>
            <Accordion.Body>
              <p style={{fontWeight:'bold'}}>Founded in 2003 by Charles Dunstone, TalkTalk is a nationwide broadband and telephone provider. Now a provider of broadband and telephony services to consumers under the TalkTalk brand and businesses under the TalkTalk Business brand, TalkTalk was originally only a fixed-line telephony provider. </p>

              <p>Since December 2012, 92% of TalkTalk's customers have been unbundled, a process known as local-loop-unbundling (LLU). As a result, TalkTalk became, after Virgin Media, the UK's second quadruple play service, offering TV, broadband, phone, and mobile services simultaneously. There are no longer mobile contracts offered by the company (end of 2018); existing customers are referred to register with another provider.</p>
            </Accordion.Body>
          </Accordion.Item>
         
        </Accordion>
      </div>
      <h5 style={{margin:'2rem 0'}}>Referece: <a href='https://www.neon-soft.com/blog/top-5-telecommunication-companies-in-united-kingdom-uk/'>Top 5 Telecommunication Companies in UK</a></h5>
    </div>
    
  );
}
