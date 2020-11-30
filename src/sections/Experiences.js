/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import Section from '../components/Section';
import Hide from '../components/Hide';
import colors from '../../colors';

const Title = styled(Text)`
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

function createMarkup(text) {
  return {
    __html: text,
  };
}

const Experience = ({ name, period, role, technologies }) => (
  <Flex
    flexDirection={'row'}
    width={1}
    my={4}
    alignItems="center"
    justifyContent={'space-between'}
  >
    <Flex flexDirection={'column'}>
      <Flex>{name}</Flex>
      <Flex>
        {role} - {period}
      </Flex>
    </Flex>
    <Flex justifyContent={'space-around'}>
      {technologies.map((t, i) => (
        <p>{t}</p>
      ))}
    </Flex>
  </Flex>
);

Experience.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

const Experiences = () => {
  const experiences = [
    {
      name: 'Loyalty Company',
      period: 'July 2015 - May 2017',
      role: 'Software Developer',
      technologies: ['Angular', 'PHP', 'Symfony', 'React', 'React Native'],
    },
    {
      name: 'Yousician',
      period: 'May 2017 - September 2018',
      role: 'Software Developer',
      technologies: ['Angular', 'React', 'Python', 'Flask', 'MongoDB'],
    },
    {
      name: 'Nightingale',
      period: 'November 2018 - April 2019',
      role: 'Software Developer',
      technologies: [
        'Gatsby',
        'React',
        'Prismic',
        'GraphQL',
        'Typescript',
        'AWS',
      ],
    },
    {
      name: 'Blueprint Genetics',
      period: 'Current position',
      role: 'Software Developer',
      technologies: ['React', 'Angular', 'PHP', 'GO', 'AWS', 'MySQL'],
    },
  ];
  return (
    <Section.Container id="experience">
      <Section.Header name="Experiences" icon="✨" Box="notebook" />
      <Flex
        justifyContent="space-between"
        alignItems="space-between"
        flexWrap="wrap"
        width={1}
      >
        {experiences.map((p, i) => (
          <Experience key={p.id} {...p} />
        ))}
      </Flex>
    </Section.Container>
  );
};

export default Experiences;
