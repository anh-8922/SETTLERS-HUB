import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {useState} from "react"
import SinglePostLayout from '../Layout/SinglePostLayout';
import MyAds from "../Features/MyAds";
import MyProfile from "../Features/MyProfile";
import MyMessages from "../Features/MyMessages";
import '../Style/page.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export default function ProfilePage ()  {
    const navigate = useNavigate()

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <SinglePostLayout>
        <div>
            <h3>Hello</h3>
            <button className="single-post-btn" onClick={() => navigate('/')}>Back to home</button>
            <button className='single-post-btn' onClick={() => navigate('/addnewad')}>Add new Ad</button>
            <div style={{ marginTop:"3vh"}}>
            <Box style={{
              backgroundColor:'whitesmoke', display:'flex', flexDirection:'row',
              borderRadius:'1rem', border:'1px solid grey'}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        three={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="My Profile" {...a11yProps(0)} />
        <Tab label="My Ads" {...a11yProps(1)} />
        <Tab label="Message" {...a11yProps(2)} />
        {/* <Tab label="Notificatios" {...a11yProps(3)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <h1>My Profile</h1>
        <MyProfile/>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
       <h1>My Ads</h1>
       <MyAds/> 
       
      </TabPanel>
      <TabPanel value={value} index={2}>
       <h1>Messages</h1> 
       <MyMessages/>
       
      </TabPanel>

    </Box>
    </div>
        </div>
    </SinglePostLayout>
    )
}







