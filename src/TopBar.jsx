import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AboutModal from './AboutModal';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', 
  maxHeight: '90%',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  p: 4,
};

function TopBar(props) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const handleAbout = () => {
    handleOpen();
  };

  const handleContact = () => {
    handleOpen2();
  };

  const handleExperience = () => {
    handleOpen3();
  };

  const handleProjects = () => {
    handleOpen4();
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
          >
            Amy Liu ✨
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }} onClick={() => handleAbout()}>
                About
              </Button>
              <Button sx={{ color: '#fff' }} onClick={() => handleExperience()}>
                Experience
              </Button>
              <Button sx={{ color: '#fff' }} onClick={() => handleProjects()}>
                Projects
              </Button>
              <Button sx={{ color: '#fff' }} onClick={() => handleContact()}>
                Contact
              </Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AboutModal/>
            </Box>
          </Modal>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Contact/>
            </Box>
          </Modal>
          <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Experience/>
            </Box>
          </Modal>
          <Modal
            open={open4}
            onClose={handleClose4}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Projects/>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;