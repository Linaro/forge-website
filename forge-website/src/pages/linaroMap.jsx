import React from 'react';
import LinaroHeroMap from '../components/HeroCard/LinaroMapHeroCard/index';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Footer from '../components/Footer/index';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TalkAndContact from '../components/TalkAndContact/index';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useRouter } from "next/router";
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const LinaroMap = () => {
  const formtheme = createTheme({
    typography: {
      fontFamily: 'Lato',
    },
  });
  const router = useRouter();
  return (
    <ThemeProvider theme={formtheme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <CssBaseline />
      <Grid>
        {/* // <Grid flexGrow={2} sx={{backgroundColor:'white',
    // boxSizing:'border-box',m:0,p:0,width:{xs:'min-content',md:'100%',sm:'100%' }
    // , }}> */}

        <LinaroHeroMap />
        <Grid sx={{ width: '100%', mt: 2, minHeight: { md: '70.5vh', xs: '100vh' } }}>
          <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 4, mx: 'auto', fontWeight: '600' }}>Show Exactly Where and Why Code Is Losing Performance</Typography>
          <Grid container rowSpacing={1} sx={{ mx: 'auto', flexDirection: { xs: 'column', md: 'row' } }} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0', } }}>
              <Box xs='auto' md={4} sx={{
                backgroundColor: 'white', mb: 0, p: 2, mt: 2, width: { xs: '100%', md: '100%' }, pl: { xs: '0', md: '10%' }, display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <List sx={{ listStyleType: 'disc', pl: { xs: 0, md: 25 }, width: { xs: '100%', md: '100%', fontSize: '14px' } }}>
                  <ListItem sx={{ display: 'list-item', mb: -1 }}>No need to change your code or the way you build it</ListItem>
                  <ListItem sx={{ display: 'list-item', mb: -1 }}>Profiling for applications running on more than one server and multiple processes</ListItem>
                  <ListItem sx={{ display: 'list-item', mb: -1 }}>Clear views of bottlenecks in I/O, in compute, in thread or in multi-process activity</ListItem>
                  <ListItem sx={{ display: 'list-item', mb: -1 }}>Deep insight into actual processor instruction types that affect your performance</ListItem>
                  <ListItem sx={{ display: 'list-item', mb: -2 }}>View memory usage over time to discover high watermarks and changes across the complete memory footprint</ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0', } }}>
              <Box xs='auto' md={4} sx={{ backgroundColor: '#e6e6e6', mb: 1, p: 3, mt: 6, width: { xs: '100%', md: '65%', } }}>
                <Typography variant="subtitle2" sx={{ mb: 2, mt: 2, mx: 'auto' }}>Download your free trial of Linaro Forge or contact us
                  for more information.</Typography>
                <Button sx={{ backgroundColor: 'white', borderColor: '#f28630', fontSize: '14px', color: 'black', fontWeight: '600' }} onClick={() => router.push("/freeTrial")} variant="outlined">Download Free Trial</Button></Box>
              <Box sx={{ backgroundColor: '#e6e6e6', p: 3, width: { xs: '100%', md: '65%' } }}>
                <Button onClick={() => router.push("/contactUs")} sx={{ backgroundColor: 'white', borderColor: '#9bcc4c', fontSize: '14px', color: 'black', fontWeight: '600' }} variant="outlined">Contact us today</Button></Box>
            </Grid>
            <Grid item xs={6} sx={{ mx: { xs: 'auto', md: '0' }, }}>
              <CardMedia
                component="img"
                sx={{ height: 400, mx: { xs: 'auto', md: '0' } }}
                image='/images/MAP_pic.jpg'
                alt="Linaro Map image"
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: 4, mx: { xs: 'auto', md: '0' } }}>
              <Typography variant="h5" sx={{ mx: 'auto', ml: 2, p: 3, fontWeight: '500' }}>Linaro MAP Resources</Typography>
              <Typography variant="subtitle2" sx={{ display: 'flex', mt: 2, mx: 'auto', ml: 2, p: 2, width: '60%' }}>
                Find resources that describe how to develop, deploy and
                optimize enterprise and scientific HPC (High Performance
                Computing) applications, including:</Typography>
              <List sx={{ listStyleType: 'disc', pl: 7, fontSize: '14px' }}>
                <ListItem sx={{ display: 'list-item' }}>Help and Tutorials</ListItem>
                <ListItem sx={{ display: 'list-item' }}>HPC Blog</ListItem>
                <ListItem sx={{ display: 'list-item' }}>Linaro Forge</ListItem>
              </List>
            </Grid>
          </Grid>
          <TalkAndContact backColor={'#e6e6e6'} />
        </Grid>
        <Footer />
      </Grid>
    </ThemeProvider>
  )
}

export default LinaroMap;