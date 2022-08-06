import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const footer = () => {
  return (
    <Box mt='80px' bgcolor='#F7FFF7'>
      <Stack direction='row' gap='20px' justifyContent='center' flexWrap='wrap' p='24px' color='#4ECDC4'>
        <a href="https://www.flaticon.com/free-icons/workout" title="workout icons" style={{textDecoration: 'none'}}>
          <Typography textAlign='center' color='#4ECDC4'>
            weights icons created by kosonicon - Flaticon
          </Typography>
        </a>
        <p>|</p>
        <a href="https://www.flaticon.com/free-icons/strong" title="strong icons"  style={{textDecoration: 'none'}}>
          <Typography textAlign='center' color='#4ECDC4'>
            muscle icons created by Freepik - Flaticon
          </Typography>
        </a>
      </Stack>      
    </Box>
  )
}

export default footer