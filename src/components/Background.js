/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from 'rebass';
import BackgroundPrimaryLight from '../components/Backgrounds/BackgroundPrimaryLight.png';
import BackgroundSecondaryLight from '../components/Backgrounds/BackgroundSecondaryLight.png';

const backgroundMapping = {
  landing: BackgroundPrimaryLight,
  about: BackgroundSecondaryLight,
  experience: BackgroundPrimaryLight,
};

const Background = ({ name, children }) => (
  <Box
    sx={{
      px: 6,
      py: 6,
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${backgroundMapping[name]})`,
      backgroundSize: '100% 50%',
      backgroundPosition: '0 bottom',
      borderRadius: 8,
    }}
  >
    {children}
  </Box>
);

export default Background;
