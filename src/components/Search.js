import { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const Search = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} mb='50px' textAlign='center' sx={{
        fontSize: { lg: '44px', xs: '30px' }        
      }}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          type='text'
          value=''
          onChange={(e) => {}}
          placeholder='Search Exercises'
          height='76px'
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: '40px'
          }}
        />
        <Button className='search-btn' sx={{
          backgroundColor: '#1a535c',
          color: '#FFF',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0'
        }}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default Search