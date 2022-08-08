import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const footer = () => {
  return (
    <Box mt='80px'>
      <Typography variant="h6" mt="41px" textAlign="center">
        Made with ❤️ by {` `}
        <a href='https://github.com/JadeYe2020/gym_exercises_app' target="_blank" rel='noreferrer'>
          JadeYe2020 
        </a>
      </Typography>
      <Typography variant="h6" textAlign="center">
        Inspired by {` `} 
        <a href='https://github.com/adrianhajdin/project_fitness_app' target="_blank" rel='noreferrer'>
          JavaScript Mastery
        </a>
      </Typography>      
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