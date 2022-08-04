import { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { Box, Stack, Typography } from "@mui/material"

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log('exercises', exercises)

  return (
    <Box id='exercises' mt='50px' p='20px'
      sx={{mt: { lg: '110px' }}}
    >
      <Typography variant='h3' mb='46px'>
        Showing Resultes
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises