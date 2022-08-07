import Exercises from '../components/Exercises'
import { apiOptions, fetchData, baseUrl } from '../utils/fetchData'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  const [bodyParts, setBodyParts] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  const [allExercises, setAllExercises] = useState([])
  const [exercisesToShow, setExercisesToShow] = useState([])
  const [hasResults, setHasResults] = useState(true)

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${baseUrl}/bodyPartList`, apiOptions)
      setBodyParts(['all', ...bodyPartsData])

      const exercisesData = await fetchData(baseUrl, apiOptions)
      setAllExercises(exercisesData)
      setExercisesToShow(exercisesData)
    }
    fetchExercisesData()
  }, [setAllExercises])

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