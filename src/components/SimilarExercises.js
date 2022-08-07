import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
import { Box, Stack, Typography } from '@mui/material'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box p='20px' sx={{ mt: { lg: '100px', xs: '0' }}}>
      <Typography variant='h4' ml='10px'>Exercises that target the same muscle group</Typography>
      <Stack direction='row' mt={5} mb={5} sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length > 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h4' ml='10px'>Exercises that use the same equipment</Typography>
      <Stack direction='row' mt={5} mb={5} sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length > 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises