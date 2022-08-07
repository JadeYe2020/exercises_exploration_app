import React, { useState, useEffect } from 'react'
import { apiOptions, fetchData, baseUrl } from './utils/fetchData'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';


const App = () => {
  const [bodyParts, setBodyParts] = useState([])
  const [allExercises, setAllExercises] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${baseUrl}/bodyPartList`, apiOptions)
      setBodyParts(['all', ...bodyPartsData])

      const exercisesData = await fetchData(baseUrl, apiOptions)
      setAllExercises(exercisesData)
    }
    fetchExercisesData()
  }, [setAllExercises])

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home bodyParts={bodyParts} allExercises={allExercises} /> } />
        <Route path="/exercise/:id" element={ <ExerciseDetail allExercises={allExercises} /> } />
      </Routes>
      <Footer />
    </Box>    
  )
}

export default App