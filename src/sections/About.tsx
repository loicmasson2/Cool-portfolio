import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { Text as Text2 } from "@lokit/black-sheep"
import Section from '../components/Section';

function createMarkup(text:string) {
  return {
    __html: text,
  };
}
// Second section fo the page
const About = () => {
  const aboutMe = `
        Hello 👋 I'm Loïc an enthusiastic software developer.</br></br>

        Always looking to improve "things", code, process, mood of the team, etc.</br>
        Curiosity makes me go out of my comfort zone, away from web development.</br>
        Making the most of new tools, and pushing them in my dev workflow.</br>
        `;
  return (
    <Section.Container id="about">
      <Section.Header name="About me" icon="🙋‍♂️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
            <Text width={[1]} my={2} fontSize={5}>
              <div dangerouslySetInnerHTML={createMarkup(aboutMe)} />
            </Text>
            <Text2>HELLO</Text2>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default About;
