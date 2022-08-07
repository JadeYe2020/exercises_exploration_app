import React, { useContext } from 'react'
import BodyParts from './BodyParts'
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

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isCatalogue, allExercises, setExercisesToShow, setKeyword }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>        
      { data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m='0 40px'
        >
          { isCatalogue ?
            <BodyParts 
              item={item} 
              bodyPart={bodyPart} 
              setBodyPart={setBodyPart} 
              allExercises={allExercises} 
              setExercisesToShow={setExercisesToShow} 
              setKeyword={setKeyword} />
            : <ExerciseCard exercise={item} />
          }          
        </Box>
      ) ) }        
    </ScrollMenu>    
  )
}

export default HorizontalScrollbar