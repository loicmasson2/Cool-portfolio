/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Heading, Flex, Box, Text, Image } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import ME from '../components/Logo/ME.jpg';
import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';

const LandingPage = () => {
  const name = 'Loïc Masson';
  const adjectives = ['Cool', 'Efficient', 'Positive'];
  return (
    <Section.Container id="landing">
      <Flex alignItems="center" flexDirection={['column', 'row']}>
        <Flex p={3} width={1} justifyContent="center">
          <Image
            src={ME}
            sx={{
              width: ['70%', '80%'],
              borderRadius: 8,
            }}
          />
        </Flex>
        <Box p={3} width={1}>
          <H1 textAlign="center" color="primary" mb={[3, 4, 5]}>
            {`Hello, I'm ${name}!`}
          </H1>

          <H2 color="primary" mb={[3, 5]} textAlign="center">
            <TextLoop>
              {adjectives.map((text) => (
                <Text width={[300, 300, 500]} key={text}>
                  {text}
                </Text>
              ))}
            </TextLoop>
          </H2>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default LandingPage;
