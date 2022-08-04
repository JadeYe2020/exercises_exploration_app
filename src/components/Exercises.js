import { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { Pagination, Box, Stack, Typography } from "@mui/material"

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage= 9

  const indexOfFirstOnNextPage = currentPage * exercisesPerPage
  const indexOfFirstOnCurrPage = indexOfFirstOnNextPage - exercisesPerPage
  const exercisesOnCurrPage = exercises.slice(indexOfFirstOnCurrPage, indexOfFirstOnNextPage)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  return (
    <Box id='exercises' mt='50px' p='20px'
      sx={{mt: { lg: '110px' }}}
    >
      <Typography variant='h3' mb='46px'>
        Showing Resultes
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
      >
        {exercisesOnCurrPage.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems='center' mt='100px'>
        {exercises.length > exercisesPerPage && (
          <Pagination color='standard' shape='rounded' size='large'
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises