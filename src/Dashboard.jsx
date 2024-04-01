import * as React from 'react';
import TopBar from './TopBar.jsx'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import catGIF from './giphy.gif';


function Dashboard() {
    return (
        <Box sx={{ marginTop: '64px', padding: '16px' }}>
          <TopBar/>
          <Box sx={{ marginTop: '16px' }}>
            <Typography variant="h5" gutterBottom>
              Hello!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Created this simple website using ReactJS to help you learn a bit more about me ⭐
            </Typography>
            <img src={catGIF} alt="loading"/>
          </Box>
        </Box>
  );
}

export default Dashboard;