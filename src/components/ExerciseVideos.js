import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const numOfVideos = 6

  // console.log('exerciseVideos', exerciseVideos)

  return (
    <Box p='20px' sx={{ marginTop: { lg: '100px', xs: '20px' }}}>
      <Typography variant='h4' mb='33px' ml='10px'>
        Watch some {` `}
        <a href={`https://www.youtube.com/results?search_query=${name}`}
          target="_blank" rel='noreferrer'
          style={{color: '#4ECDC4', textTransform: 'capitalize'}}>
            {name}
        </a>
        {` `} exercise videos
      </Typography>
      <Stack direction='row' justifyContent='center' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: 'row',
          rowGap: '10px',
          columnGap: '80px'
        }}
      >
        {exerciseVideos?.slice(0, numOfVideos).map((item, index) => (
          <a key={index} className='exercise-video'
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt='thumbnail of {item.video.title}' height='202' />
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