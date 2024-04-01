import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook.js';
import InstagramIcon from '@mui/icons-material/Instagram.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn.js';
import EmailIcon from '@mui/icons-material/Email.js';


export default function Contact() {
    return (
        <Box sx={{ padding: '16px' }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Get in contact!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px'}} gutterBottom>
              Always down for a chat 🕺
            </Typography>
            <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                <FacebookIcon/>
                <a href="https://www.facebook.com/profile.php?id=100014513357728">Facebook</a>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                <InstagramIcon/>
                <a href="https://www.instagram.com/amy.liuuu/">Instagram</a>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                <LinkedInIcon/>
                <a href="https://www.linkedin.com/in/amyliu8/">LinkedIn</a>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                <EmailIcon/>
                <Typography variant="subtitle" gutterBottom>
                thisisamyl@hotmail.com
                </Typography>
            </Box>
          </Box>
        </Box>
    );
}
