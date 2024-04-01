import * as React from 'react';
import TopBar from './TopBar.jsx'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicTabs from './SocietyYearsTab.jsx';

function Experience() {
    return (
        <Box sx={{ marginTop: '64px', padding: '16px' }}>
          <TopBar/>
          <Box sx={{ marginTop: '16px' }}>
            <Typography variant="h5" gutterBottom>
              My experiences! 🌏
            </Typography>
            <Box sx={{backgroundColor: '#D4F1F4', padding: '10px', marginBottom: '15px'}}>
                <Typography variant="h6" gutterBottom>
                    Tutor
                </Typography>
                <Typography variant="body2" gutterBottom>
                    As an academic tutor at North Shore Tutoring College I manage classes, review curriculum and contribute new content to 
                    students' workbooks from primary to high school students taking English 📚, Mathematics 📏,
                    Chemistry 🧪, Science 🔬 and General Thinking 🧠 courses. 
                </Typography>
            </Box>
            <Box sx={{backgroundColor: '#FDFD96', padding: '10px'}}>
                <Typography variant="h6" gutterBottom>
                    UNSW Student Involvement
                </Typography>
                <BasicTabs/>
            </Box>
          </Box>
        </Box>
    );
}

export default Experience;