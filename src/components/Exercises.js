import { useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination, Box, Stack, Typography } from "@mui/material"

const Exercises = ({ exercisesToShow, hasResults }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage= 9

  const indexOfFirstOnNextPage = currentPage * exercisesPerPage
  const indexOfFirstOnCurrPage = indexOfFirstOnNextPage - exercisesPerPage
  const exercisesOnCurrPage = exercisesToShow.slice(indexOfFirstOnCurrPage, indexOfFirstOnNextPage)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  console.log('ExercisesToShow in Exercises.js', exercisesToShow)
  console.log('hasResults in Exercises.js', hasResults)

  if (!hasResults) {
    return (
      <Box id='exercises' mt='50px' p='20px'
        sx={{mt: { lg: '80px' }}}
      >
        <Typography variant='h3' mb='46px' textTransform='capitalize'>
          Oops! No exercise found. Please try some other keywords
        </Typography>
      </Box>
    )
  }
  
  return (
    <Box id='exercises' mt='50px' p='20px'
      sx={{mt: { lg: '80px' }}}
    >
      <Typography variant='h3' mb='46px' textTransform='capitalize'>
        Showing Results
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
      >
        {exercisesOnCurrPage.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems='center' mt='100px'>
        {exercisesToShow.length > exercisesPerPage && (
          <Pagination color='standard' shape='rounded' size='large'
            count={Math.ceil(exercisesToShow.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}

      </Stack>
    </Box>
  )  
}

export default Exercises