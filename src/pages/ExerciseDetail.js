import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiOptions, fetchData, baseUrl } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { Box } from '@mui/material'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    const fetchExerciseData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${baseUrl}/exercise/${id}`, apiOptions)
      setExerciseDetail(exerciseDetailData)
    }
    fetchExerciseData()
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail