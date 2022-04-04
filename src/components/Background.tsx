/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from 'rebass';
import BackgroundPrimaryLight from '../components/Backgrounds/BackgroundPrimaryLight.png';
import BackgroundSecondaryLight from '../components/Backgrounds/BackgroundSecondaryLight.png';

const backgroundMapping: mapping = {
  landing: BackgroundPrimaryLight,
  about: BackgroundSecondaryLight,
  experiences: BackgroundPrimaryLight,
};
const Background:React.FC<{id:string}> = ({ id, children }) => (
  <Box
    px={[0, 6]}
    sx={{
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${backgroundMapping[id]})`,
      backgroundSize: '100% 40%',
      backgroundPosition: '0 bottom',
      borderRadius: 8,
    }}
  >
    {children}
  </Box>
);

export default Background;
