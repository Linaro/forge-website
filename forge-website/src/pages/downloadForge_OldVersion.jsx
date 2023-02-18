import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar/index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import previousVersions from '../../content/JsonFiles/previous_versions.json';
import Link from 'next/link';

const downloadForge_OldVersion = () => {
  return (
    <>
    <Navbar />
    
    <Container fixed>
         <Grid  sx={{display:'flex',flexDirection:'column',borderRadius:0,borderColor:'white',ml:6,width:'100%',mt:4,mx:'auto'}}>
         <Typography variant="h5" sx={{mt:2,mb:2}}>Older versions of Arm Forge remote client software</Typography>
         </Grid>
         <TableContainer sx={{width:'100%',display:'flex',mx:'auto'}} component={Paper}>
    <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow >
          <TableCell align="center" sx={{fontWeight:'bold'}}>Operating System</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Arm Forge version</TableCell>
          <TableCell align="center" sx={{fontWeight:'bold'}}>Packages</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {previousVersions.map((row) => (
          <TableRow
            key={row.os}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {row.os}
            </TableCell>
                <TableCell align="center">
                  {row.versions.map((item)=>(
                    <div>{item.forge}</div>
                  ))}
                </TableCell>
            
            <TableCell align="center"> {row.versions.map((item)=>(
              item.packages.map((pack)=>(
                <div style={{color:'#2596be',}}><Link style={{textDecoration:'none!important',color:'#2596be'}} href={pack.link}>{pack.label}</Link>
                {pack.suffix &&<span style={{color:'black',}}>-{pack.suffix}</span>}
                </div>
              ))
                   
                  ))}</TableCell>
                </TableRow> 
         
          
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </Container>
    </>
  )
}

export default downloadForge_OldVersion;