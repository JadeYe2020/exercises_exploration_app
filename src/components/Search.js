import { useState } from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const Search = ({ bodyParts, setExercisesToShow, bodyPart, setBodyPart, allExercises, setHasResults }) => {
  const [keyword, setKeyword] = useState('')

  const handleSearch = async () => {
    if (keyword) {
      const searchedExercises = allExercises.filter((exercise) => 
        exercise.name.toLowerCase().includes(keyword) ||
        exercise.target.toLowerCase().includes(keyword) ||
        exercise.equipment.toLowerCase().includes(keyword) ||
        exercise.bodyPart.toLowerCase().includes(keyword)
      )

      if (searchedExercises.length) {
        setExercisesToShow(searchedExercises)
        setHasResults(true)
      } else { setHasResults(false) }

      setBodyPart('')
      window.location.href='#exercises'
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
            borderRadius: '4px'
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
      <Box sx={{ position: 'relative', width: '100%', p: { lg: '20px', xs: '0px' } }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            allExercises={allExercises}
            setExercisesToShow={setExercisesToShow}
            setKeyword={setKeyword}
            setHasResults={setHasResults}
            isCatalogue='true'
          />
      </Box>
    </Stack>    
  )
}

export default Search