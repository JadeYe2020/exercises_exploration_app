import { useState, useEffect } from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { apiOptions, fetchData } from '../utils/fetchData'

const Search = ({ setExercises, bodyPart, setBodyPart }) => {
  const [keyword, setKeyword] = useState('')  
  const [bodyParts, setBodyParts] = useState([])
  const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises'

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${baseUrl}/bodyPartList`, apiOptions)

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (keyword) {
      const exercisesData = await fetchData(baseUrl, apiOptions)
      const searchedExercises = exercisesData.filter((exercise) => 
        exercise.name.toLowerCase().includes(keyword) ||
        exercise.target.toLowerCase().includes(keyword) ||
        exercise.equipment.toLowerCase().includes(keyword) ||
        exercise.bodyPart.toLowerCase().includes(keyword)
      )
      
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack id='searchBox' alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} mb='50px' textAlign='center' sx={{
        fontSize: { lg: '44px', xs: '30px' }        
      }}>
        Explore exercises
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          onKeyUp={(e) => { if (e.key === 'Enter') {handleSearch()}}}     
          placeholder='Search Exercises'
          height='76px'
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: '40px'
          }}
        />
        <Button className='search-btn' 
          onClick={handleSearch}
          sx={{
          backgroundColor: '#1a535c',
          color: '#FFF',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0'
        }}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isCatalogue='true'
          />

      </Box>
    </Stack>
  )
}

export default Search