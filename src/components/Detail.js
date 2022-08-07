import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImg from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImg from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const detailListIcons = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ]

  return (
    <Stack gap='60px' sx={{flexDirection: { lg: 'row' }, alignItems: 'center', p: '20px'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant='h3' textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant='h5'>
          Do this {target} exercise to target your {bodyPart}.
        </Typography>
        {detailListIcons.map((item, index) => (
          <Stack key={index} direction='row' alignItems='center' gap='24px'>
            <Button sx={{ background: '#FFE66D', borderRadius: '50%', width: '80px', height: '80px'}}>
              <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '40px'}} />
            </Button>
            <Typography variant='h6' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail