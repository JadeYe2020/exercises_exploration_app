import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercises from '../components/Exercises'
import { useState } from 'react'
import { Box } from '@mui/material'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home