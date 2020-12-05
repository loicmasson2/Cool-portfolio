/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Flex } from 'rebass';
import Section from '../components/Section';
import H3 from '../components/Typography/H3';
import Body from '../components/Typography/Body';

const Education = () => {
  return (
    <Section.Container id="education">
      <Section.Header name="Education" icon="🏫" />
      <Flex
        justifyContent="space-between"
        alignItems="space-between"
        flexWrap="wrap"
        width={1}
      >
        <Flex flexDirection={'row'} width={1} my={4} alignItems="center">
          <Flex flexDirection={'column'}>
            <H3>Université Robert Schuman (Strasbourg III)</H3>
            <Flex>
              <Body>Bachelor Degree IT and web devlopment</Body>
              <Body ml={5} color={'#4467D9'}>
                2012 - 2015
              </Body>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section.Container>
  );
};

export default Education;
