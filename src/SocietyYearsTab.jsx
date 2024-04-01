import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExecImgs from './images/execImgs';
import DirImgs from './images/dirImgs';
import SubImgs from './images/subImgs';
import YsImgs from './images2/ysImgs';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonClick = () => {
    navigate('/creativeProjs');
  };

  const handleButtonClick2 = () => {
    navigate('/PIPprojects');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Student Societies" {...a11yProps(0)} />
          <Tab label="Arc Yellow Shirts 2023" {...a11yProps(1)} />
          <Tab label="Prodigi PIP" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
            <Typography variant="h5" gutterBottom>
                Computer Science and Engineering Society (CSESoc)
            </Typography>
            <Typography variant="h7" sx={{ fontWeight: 'bold' }} gutterBottom>
                Vice President of Internals - VPI (2024)
            </Typography>
            <Typography variant="body2" gutterBottom>
                As the VPI I manage and oversee the internal teams' of CSESoc that is, Creative, Media,
                Marketing and HR projects. These primarily consist of content creating teams that support the 
                promotional activity for our society-held events. 
                <br></br>
                Alongside this, I help to foster an inclusive environment through inter-portfolio bonding where our team members feel comfortable 
                and supported. 
            </Typography>
            <ExecImgs/>
            <Typography variant="h7" sx={{ fontWeight: 'bold' }} gutterBottom>
                Creative Director (2023)
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '15px' }} gutterBottom>
                As a Creative Director alongside two others, we led a team of 11 students to create social media content promoting events that 
                reached over 3500 students studying computer science and engineering at UNSW. We managed design projects including logo changes in celebration of events throughout the year, comics, 60+ social media 
                graphics and banners and the first annual yearbook for our society. I am extremely proud of our team and am happy to have helped CSESoc receive
                our first UNSW Arc Club award in 2023 for People's Choice Promotional Material. 
                <br></br>
                Moreover, I communicated with external suppliers to organise custom production of merchandise including t-shirts, tote bag, stickers, temporary 
                tattoos, iron on patches as well as our annual hoodies with over 300+ sales. 
            </Typography>
            <Button onClick={handleButtonClick} variant="outlined" size="small" color="secondary">See all my creative work here.</Button>
            <DirImgs/>
            <Typography variant="h7" gutterBottom>
                Creative Subcommittee Member (2022)
            </Typography>
            <Typography variant="body2" gutterBottom>
                As a subcommittee member I was upskilled in the use of the Adobe Suite and Canva to produce event-based 
                graphics as well as merchandise, working collaboratively with my team to brainstorm ideas and designs. 
            </Typography>
            <SubImgs/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h5" gutterBottom>
            UNSW Arc Yellow Shirts Program
        </Typography>
        <Typography variant="body2" gutterBottom>
            Alongside a total of approprimately 190 passionate volunteers, known as Yellow Shirts, 
            we led UNSW O-Week (Orientation Week) campus tours, promotional activities to generate sign ups
            and collaborated to organise events for incoming first years.
            We aimed to foster and showcase a friendly and welcoming student community for the 8,700+ new students that come to O-week at UNSW every year. 
        </Typography>
        <YsImgs/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h5" gutterBottom>
            Prodigi Product Innovation Program (PIP) - UX/UI Designer
        </Typography>
        <Typography variant="body2" gutterBottom>
            As part of the Prodigi PIP Program, I collaborated with a team consisting of 5 total students of different disciplines, 2 team managers and 2 industry mentors to solve a case study. 
            Within the team, as a UX/UI Designer alongside two others, a Business Analyst and Product Manager we conducted research on UX/UI solutions and 
            designed an interface in Figma. 
        </Typography>
        <Button onClick={handleButtonClick2} variant="outlined" size="small" color="secondary">See key points from our PIP research here.</Button>
      </CustomTabPanel>
    </Box>
  );
}