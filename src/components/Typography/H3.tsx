import React from 'react';
import { Heading, HeadingProps } from 'rebass';

const H3:React.FC<HeadingProps> = ({ children, color = 'black' }) => (
  <Heading fontSize={['32px', '48px']} fontFamily={'Cabin'} color={color}>
    {children}
  </Heading>
);

export default H3;
