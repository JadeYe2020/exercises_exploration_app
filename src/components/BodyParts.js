import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/muscle.png'

const BodyParts = ({ item, setBodyPart, bodyPart, allExercises, setExercisesToShow, setKeyword }) => {
  return (
    <Stack
      className='bodyPart-card'
      type='button'
      onClick={() => {
        setBodyPart(item)
        let filteredData = []
        if (item !== 'all') {
          filteredData = allExercises.filter((exercise) => exercise.bodyPart === item )
        } else { filteredData = allExercises }
        
        setExercisesToShow(filteredData)
        // reset searchbox
        setKeyword('')
        // scroll down to specific type of exercises
        window.location.href='#exercises'
      }}
      alignItems='center'
      justifyContent='center'
      sx={{
        borderTop: bodyPart === item ? '4px solid #1a535c' : '',
        backgroundColor:'#fff',
        borderBottomLeftRadius: '20px',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        gap: '30px'
      }}
    >
      <img src={Icon} alt='muscleIcon' style={{ width: '40px', height: '40px'}} />
      <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyParts