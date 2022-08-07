import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { videoApiOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import { Box } from '@mui/material'

const ExerciseDetail = ({ allExercises }) => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    const fetchExerciseData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = allExercises.find((exercise) => exercise.id === id)
      // const exerciseDetailData = await fetchData(`${baseUrl}/exercise/${id}`, apiOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, videoApiOptions)
      const videosOnly = exerciseVideosData.contents.filter(item => item.video)
      setExerciseVideos(videosOnly)
    }
    fetchExerciseData()
  }, [id, allExercises])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    </Box>
  )
}

export default ExerciseDetail