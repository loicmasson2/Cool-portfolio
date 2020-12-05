import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';

const H1 = ({ children, color = 'black', ...other }) => (
  <Text fontSize={['24px']} fontFamily={'Cabin'} color={color} {...other}>
    {children}
  </Text>
);

export default H1;
