import Exercises from '../components/Exercises'
import { useState  } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'

const Home = ({ bodyParts, allExercises }) => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercisesToShow, setExercisesToShow] = useState(allExercises)
  const [hasResults, setHasResults] = useState(true)

  return (
    <Box>
      <HeroBanner
        bodyParts={bodyParts}
        setExercisesToShow={setExercisesToShow}
        allExercises={allExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setHasResults={setHasResults}
        hasResults={hasResults}
      />
      <Exercises exercisesToShow={exercisesToShow} hasResults={hasResults} />
    </Box>
  )
}

export default Home