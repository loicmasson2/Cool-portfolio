import React from 'react';
import { Heading } from 'rebass';

const H1 = ({ children, color = 'black' }) => (
  <Heading fontSize={['48px']} fontFamily={'Cabin'} color={color}>
    {children}
  </Heading>
);

export default H1;
