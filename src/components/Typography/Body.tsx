import React from 'react';
import { Text, TextProps } from 'rebass';

const Body:React.FC<TextProps> = ({ children, color = 'black', ...other }) => (
  <Text fontSize={['24px']} fontFamily={'Cabin'} color={color} {...other}>
    {children}
  </Text>
);

export default Body;
