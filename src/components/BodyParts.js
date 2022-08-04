import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      className='bodyPart-card'
      type='button'
      onClick={() => {
        setBodyPart(item)
        // scroll down to specific type of exercises
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
      alignItems='center'
      justifyContent='center'
      sx={{
        borderTop: bodyPart === item ? '4px solid #1a535c' : '',
        backgroundColor:'#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      <img src={Icon} alt='gymIcon' style={{ width: '40px', height: '40px'}} />
      <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyParts