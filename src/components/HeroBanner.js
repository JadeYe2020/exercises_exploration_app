import Search from '../components/Search'
import { Box, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner-transparent.png'

const HeroBanner = ({ bodyParts, setExercisesToShow, bodyPart, setBodyPart, allExercises, setHasResults }) => {
  return (
    <Box className='banner' position='relative' mt='50px'
      sx={{
        backgroundImage:`url(${HeroBannerImage})`,
        backgroundSize: 'cover',
        p: { lg:'40px', xs: '20px'}
      }}
    >
      <Typography color='#1A535C' fontWeight='600' fontSize='26px'>
        Find any exercise that 
      </Typography>
      <Typography color='#1A535C' fontWeight='700' mb='23px' mt='30px' sx={{
        fontSize: { lg: '44px', xs: '40px'}
      }}>
        works for you!
      </Typography>
      <Typography color='#1A535C' fontSize='22px' lineHeight='35px' mb={4}>
        Check out hundreds of awesome exercises here
      </Typography>
      <Search
        bodyParts={bodyParts}
        setExercisesToShow={setExercisesToShow}
        allExercises={allExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setHasResults={setHasResults}
      />
    </Box>
  )
}

export default HeroBanner