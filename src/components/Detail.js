import React from 'react'
import { Typography, Stack } from '@mui/material'
import { GiMuscleUp } from 'react-icons/gi'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
  const bulletPoints = [ bodyPart, target, equipment ]

  return (
    <Stack gap='60px' sx={{flexDirection: { lg: 'row' }, alignItems: 'center', p: '20px'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant='h4' textTransform='capitalize'>
          {name}
        </Typography>
        {bulletPoints.map((point, index) => (
          <Stack key={index} direction='row' alignItems='center' gap='24px'>
            <GiMuscleUp color='#1A535C' size='48px' />
            <Typography variant='h6' textTransform='capitalize'>
              {point}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail