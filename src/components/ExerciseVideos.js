import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const numOfVideos = 6

  return (
    <Box p='20px' sx={{ marginTop: { lg: '100px', xs: '20px' }}}>
      <Typography variant='h4' color='#1A535C' mb='33px' ml='10px'>
        Related videos on Youtube
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
              <Typography variant='h6' color='#1A535C'>
                {item.video.title}
              </Typography>
              <Typography variant='subtitle2' color='#1A535C'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
      <Typography m={1} textAlign='center'>
          <a href={`https://www.youtube.com/results?search_query=${name}`}
            target="_blank" rel='noreferrer'
            style={{color:'#1A535C', textTransform: 'capitalize'}}>
            Check out more videos on Youtube
          </a>
        </Typography>
    </Box>
  )
}

export default ExerciseVideos