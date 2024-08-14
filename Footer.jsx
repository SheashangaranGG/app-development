import React from 'react';
import { Container, Grid, Box, Typography} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, WhatsApp } from '@mui/icons-material';
import '../asserts/Footer.css';

const Footer = () => {
return (
    <Box className="footer">
    <Container>
        <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
            <Typography variant="h6" style={{userSelect:'none'}}>Programs:</Typography>
            <Typography>Beginner</Typography>
            <Typography>Intermediate</Typography>
            <Typography>Advanced</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <Typography variant="h6" style={{userSelect:'none'}}>Service:</Typography>
            <Typography>Online</Typography>
            <Typography>One to One</Typography>
            <Typography>Tutorial</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <Typography variant="h6"style={{userSelect:'none'}}>Address:-</Typography>
            <Typography>
                Nehru street,99, Avinashi Road, Peelamedu - Pudur Main Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
            </Typography>
            <Typography></Typography>
            <Typography></Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            
            
        <Box className="social-icons">
    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
        <WhatsApp />
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <YouTube />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram />
    </a>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Facebook />
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <LinkedIn />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <Twitter />
    </a>
    </Box>
            <Typography>Mobile: +917892474250,+918754757394</Typography>
            <Typography>Email: Chessarchade@gmail.com</Typography>
        </Grid>
        </Grid>
        <Box className="footer-bottom">
        <Typography>© 2024 Chessarchade.com</Typography>
        </Box>
    </Container>
    </Box>
);
};

export default Footer;