import * as React from 'react';
import TopBar from './TopBar.jsx'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Projects() {
  const navigate = useNavigate();
  const handleButtonClick2 = () => {
    navigate('/PIPprojects');
  };

    return (
        <Box sx={{ marginTop: '64px', padding: '16px' }}>
          <TopBar/>
          <Box sx={{ marginTop: '16px' }}>
            <Typography variant="h5" gutterBottom>
              My Projects!
            </Typography>
            <Typography variant="h7" sx={{fontWeight: 'bold'}} gutterBottom>
              AirBrB
            </Typography>
            <Typography variant="body2" gutterBottom>
              AirBrB is a ReactJS project satisfying expectations in UI, UX and Accessibility to recreate the AirBnB website. It is a project that involved 
              building a frontend for a provided backend using API calls to connect the functionality of the backend to the 
              frontend. Features of this site included a login/register screen, creating, editing and publishing a hosted listing, as well as searching and 
              booking live listings. 
            </Typography>
            <br/>
            <Typography variant="h7" sx={{fontWeight: 'bold'}} gutterBottom>
              DungeonMania Game
            </Typography>
            <Typography variant="body2" gutterBottom>
              DungeonMania is a Java game where the user controls a Player to complete various goals within a series of 
              maze-like dungeons, including fighting enemies using weapons or collectibles, to finish the game. 
              Though the basic functionality of the game was given, the code base required refactoring and implementation of 
              more efficient design patterns in order to add more functionality and aspects to the game following the UML diagram. This included more enemies,
              battles between the player and enemy, and being able to collect treasure. 
            </Typography>
            <br/>
            <Typography sx={{fontWeight: 'bold'}} variant="h7" gutterBottom>
              Prodigi Figma Case Study
            </Typography>
            <Typography variant="body2" gutterBottom>
              As part of the Prodigi PIP Program, I collaborated with a team consisting of 5 total students of different disciplines, 2 team managers and 2 industry mentors to solve a case study. 
              Within the team, as a UX/UI Designer alongside two others, a Business Analyst and Product Manager we conducted research on UX/UI solutions and 
              designed an interface in Figma. 
            </Typography>
            <Button onClick={handleButtonClick2} variant="outlined" size="small" color="secondary">View Case Here.</Button>
          </Box>
        </Box>
    );
}

export default Projects;