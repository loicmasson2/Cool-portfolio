/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import Section from '../components/Section';
import H3 from '../components/Typography/H3';
import Body from '../components/Typography/Body';

import Hide from '../components/Hide';
import ExperienceIcon from '../components/ExperienceIcon';

const Experience = ({ name, period, role, technologies }) => (
  <Flex
    flexDirection={'row'}
    width={1}
    my={4}
    alignItems="center"
    justifyContent={'space-between'}
  >
    <Flex flexDirection={'column'} width={1 / 2}>
      <H3>{name}</H3>
      <Flex>
        <Body>{role}</Body>{' '}
        <Body ml={5} color={'#4467D9'}>
          {period}
        </Body>
      </Flex>
    </Flex>
    <Flex justifyContent={'flex-start'} width={1 / 3}>
      <Flex justifyContent={'space-between'} width={1}>
        {technologies.map((t, i) => (
          <ExperienceIcon name={t}></ExperienceIcon>
        ))}
      </Flex>
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
      name: 'Blueprint Genetics 🧬',
      period: 'Current position',
      role: 'Software Developer',
      technologies: ['react', 'angular', 'php', 'go', 'aws', 'mysql'],
    },
    {
      name: 'Nightingale 🩸',
      period: 'November 2018 - April 2019',
      role: 'Software Developer',
      technologies: [
        'gatsby',
        'react',
        'prismic',
        'graphql',
        'typescript',
        'aws',
      ],
    },
    {
      name: 'Yousician 🎼',
      period: 'May 2017 - September 2018',
      role: 'Software Developer',
      technologies: ['angular', 'react', 'python', 'flask', 'mongodb'],
    },
    {
      name: 'Loyalty Company 👔',
      period: 'July 2015 - May 2017',
      role: 'Software Developer',
      technologies: ['angular', 'php', 'symfony', 'react'],
    },
  ];
  return (
    <Section.Container id="experiences">
      <Section.Header name="Experiences" icon="✨" />
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
