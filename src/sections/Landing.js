/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Heading, Flex, Box, Text, Image } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import ME from '../components/Logo/ME.jpg';
import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import Hide from '../components/Hide';

const LandingPage = () => {
  const name = 'Loïc Masson';
  const adjectives = ['Cool', 'Efficient', 'Positive'];
  return (
    <Section.Container id="landing">
      <Flex alignItems="center" flexDirection={['column', 'row']}>
        <Flex p={[1, 3]} width={1} justifyContent="center">
          <Image
            src={ME}
            sx={{
              width: ['70%', '80%'],
              borderRadius: 8,
            }}
          />
        </Flex>
        <Box p={[2, 3]} width={1} textAlign={'center'}>
          <H1 color="primary" mb={[3, 4, 5]}>
            {`Hello, I'm ${name}!`}
          </H1>
          <Hide xs>
            <H2 color="primary" mb={[3, 5]}>
              <TextLoop>
                {adjectives.map((text) => (
                  <Text width={[100, 300, 500]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </H2>
          </Hide>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default LandingPage;
