import React from 'react'
import { Link } from 'react-router-dom'
import { Chip, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  const chipStyle = { 
    ml: '21px', 
    color: '#fff', 
    fontSize: '14px', 
    borderRadius: '20px',
    textTransform: 'capitalize'
}

  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Chip label={exercise.bodyPart} sx={{...chipStyle, backgroundColor: '#FF6B6B'}} />
        <Chip label={exercise.target} sx={{...chipStyle, backgroundColor: '#4ECDC4'}} />
        <Chip label={exercise.equipment} sx={{...chipStyle, backgroundColor: '#FFE66D', color: '#000'}} />
      </Stack>
      <Typography color='#000' fontWeight='bold' textTransform='capitalize'
        ml='21px' mt='11px' pb='10px'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard