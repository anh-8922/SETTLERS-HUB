import {HeroSectionB} from "../Components/HeroSection";
import MainLayout from "../Layout/MainLayout";
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {useState} from "react"
import UtilityTabs from "../Features/UtilityTabs";
import ServiceProviderTabs from "../Features/ServiceProvidersTab";

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


export default function HomePage() {
    const navigate = useNavigate()

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <MainLayout>
            <HeroSectionB/>
            <div>
            <div style={{ marginTop:"2vh"}}>
            <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:"80vh", width:"100vw", marginTop:"2rem" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        three={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Utility" {...a11yProps(0)} />
        <Tab label="Service Providers" {...a11yProps(1)} />
        <Tab label="Requests" {...a11yProps(2)} />
        {/* <Tab label="Notificatios" {...a11yProps(3)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <h1>Utility</h1>
        <UtilityTabs/>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
       <h1>Service Providers</h1>
       <ServiceProviderTabs/>
     
       
      </TabPanel>
      <TabPanel value={value} index={2}>
       <h1>Requests</h1> 
       
      </TabPanel>

    </Box>
    </div>
        </div>
        </MainLayout>
    )
}