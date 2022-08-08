import Search from '../components/Search'
import { Box, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner-transparent.png'

const HeroBanner = ({ bodyParts, setExercisesToShow, bodyPart, setBodyPart, allExercises, setHasResults, hasResults }) => {
  return (
    <>
      <Box className='banner' position='relative' mt='50px'
        sx={{
          backgroundImage:`url(${HeroBannerImage})`,
          backgroundSize: 'cover',
          p: { lg:'40px', xs: '20px'}
        }}
      >
        <Typography color='#1A535C' fontWeight='600' fontSize='26px'>
          Find any exercise
        </Typography>
        <Typography color='#1A535C' fontWeight='700' mb='23px' mt='30px'
          sx={{ fontSize: { lg: '44px', xs: '40px'}
        }}>
          That Works For You!
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
      <Box id='exercises' mt='50px' p='20px'
        sx={{mt: { lg: '80px' }}}
      >
        <Typography variant='h3' mb='46px' textTransform='capitalize'>
          {
            !hasResults ? 
                `Oops! No exercise found. Please try some other keywords` :
                bodyPart !== '' ?
                  `${bodyPart} Exercises` :
                  'Showing Results'
          }
        </Typography>
      </Box>
    </>
  )
}

export default HeroBanner