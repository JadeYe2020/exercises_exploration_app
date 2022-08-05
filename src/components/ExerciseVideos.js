import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const numOfVideos = 6

  return (
    <Box p='20px' sx={{ marginTop: { lg: '200px', xs: '20px' }}}>
      <Typography variant='h4' mb='33px'>
        Watch some {` `}
        <a href={`https://www.youtube.com/results?search_query=${name}`}
          target="_blank" rel='noreferrer'
          style={{color: '#4ECDC4', textTransform: 'capitalize'}}>
            {name}
        </a>
        {` `} exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignment='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos?.slice(0, numOfVideos).map((item, index) => (
          <a key={index} className='exercise-video'
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt='thumbnail of {item.video.title}' />
            <Box>
              <Typography variant='h5' color='#1A535C'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#1A535C'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>

    </Box>
  )
}

export default ExerciseVideos