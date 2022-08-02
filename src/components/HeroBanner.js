import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box position='relative' p='20px' sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px' }
    }}>
      <Typography color='#1a535c' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight='700' mb='23px' mt='30px' sx={{
        fontSize: { lg: '44px', xs: '40px'}
      }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button href='#exercises' sx={{
        backgroundColor: '#1a535c', 
        color: '#FFF',
        padding: '10px'
      }}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color='#1a535c' fontSize='200px' sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'non'}
      }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner