import React from 'react';
import { Heading, HeadingProps } from 'rebass';

const H2:React.FC<HeadingProps> = ({ children, color = 'black' }) => (
  <Heading fontSize={['64px']} fontFamily={'Cabin'} color={color}>
    {children}
  </Heading>
);

export default H2;
