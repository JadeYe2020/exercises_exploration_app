import React, { useContext } from 'react'
import CategoryCards from './CategoryCards'
import ExerciseCard from './ExerciseCard'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <MdNavigateBefore onClick={() => scrollPrev()} className="left-arrow" size='48px' />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)
  return (
    <MdNavigateNext onClick={() => scrollNext()} className="right-arrow" size='48px' />
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isCatalogue, allExercises, setExercisesToShow, setKeyword, setHasResults }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>        
      { data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          sx={{ m: {lg: '0 40px', xs: '0 20px'}}}
        >
          { isCatalogue ?
            <CategoryCards 
              item={item} 
              bodyPart={bodyPart} 
              setBodyPart={setBodyPart} 
              allExercises={allExercises} 
              setExercisesToShow={setExercisesToShow} 
              setKeyword={setKeyword}
              setHasResults={setHasResults}
            />
            : <ExerciseCard exercise={item} />
          }          
        </Box>
      ) ) }        
    </ScrollMenu>    
  )
}

export default HorizontalScrollbar