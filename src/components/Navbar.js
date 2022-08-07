import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' px='20px'
      sx={{ 
        gap: {sm: '100px', xs: '20px'}, 
        mt: { sm: '32px', xs: '20px'},
        justifyContent: 'none'
      }}
    >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{
          width: '60px'
        }} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
        sx={{ 
          gap: { sm: '40px', xs: '20px' }
        }}
      >
        <Link to='/' style={{
          textDecoration: 'none',
          color: '#3A1212'
        }}>
          <Typography variant='h6' component='h1'>Home</Typography>
        </Link>
        <a href='#exercises' style={{
          textDecoration: 'none',
          color: '#3A1212'
        }}>
          <Typography variant='h6' component='h1'>Exercises</Typography>
        </a>        
      </Stack>
    </Stack>
  )
}

export default Navbar