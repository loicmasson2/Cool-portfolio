/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box } from 'rebass';
import BackgroundPrimaryLight from '../components/Backgrounds/BackgroundPrimaryLight.png';

const Background = ({ children }) => (
  <Box
    sx={{
      px: 6,
      py: 6,
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${BackgroundPrimaryLight})`,
      backgroundSize: '100%',
      backgroundPosition: '0 bottom',
      borderRadius: 8,
    }}
  >
    {children}
  </Box>
);

export default Background;
