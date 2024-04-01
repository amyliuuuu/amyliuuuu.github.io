import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['About', 'Experience', 'Projects', 'Contact'];

function TopBar(props) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/${item}`)
  };
  const handleNameClick = () => {
    navigate('/')
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar component="nav" sx={{ backgroundColor: '#FFB6C1', boxShadow: '5px 5px 5px rgba(255, 182, 193, 0.5)'}}>
        <Toolbar sx={{ color: '#E75480'}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={handleNameClick}
          >
            Amy Liu ✨
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => handleItemClick(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;