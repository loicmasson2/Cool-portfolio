import React from 'react';
import { Heading, HeadingProps } from 'rebass';

const H1:React.FC<HeadingProps> = ({ children, color = 'black' }) => (
  <Heading as={'h1'} fontSize={[6, 7]} fontFamily={'Cabin'} color={color}>
    {children}
  </Heading>
);

export default H1;
