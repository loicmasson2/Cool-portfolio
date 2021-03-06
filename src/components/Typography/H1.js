import React from 'react';
import { Heading } from 'rebass';

const H1 = ({ children, color = 'black' }) => (
  <Heading as={'h1'} fontSize={[6, 7]} fontFamily={'Cabin'} color={color}>
    {children}
  </Heading>
);

export default H1;
