import React from 'react'
import { Flex } from 'rebass'

import Section from '../components/Section'
import H3 from '../components/Typography/H3'
import Body from '../components/Typography/Body'
import ExperienceIcon from '../components/ExperienceIcon'

type ExperienceProps = {
  name: string,
  period: string,
  role: string
  technologies: string[]
}

// Third section of the page
const Experience: React.FC<ExperienceProps> = ({ name, period, role, technologies }) => (
  <Flex
    flexDirection={['column', 'row']}
    width={1}
    my={4}
    alignItems='center'
    justifyContent={'space-between'}
  >
    <Flex
      flexDirection={'column'}
      width={[1, 1 / 2]}
      textAlign={['center']}
    >
      <H3>{name}</H3>
      <Flex mt={[3, 0]} flexDirection={['column', 'row']}>
        <Body>{role}</Body>{' '}
        <Body ml={[0, 5]} color={'#4467D9'}>
          {period}
        </Body>
      </Flex>
    </Flex>
    <Flex mt={[3, 0]} justifyContent={'flex-start'} width={[1, 1 / 3]}>
      <Flex justifyContent={'space-between'} width={1}>
        {technologies.map((t, i) => (
          <ExperienceIcon key={i} name={t}/>
        ))}
      </Flex>
    </Flex>
  </Flex>
)

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
  ]
  return (
    <Section.Container id='experiences'>
      <Section.Header name='Experiences' label='Experiences' icon='✨' />
      <Flex
        justifyContent='space-between'
        alignItems='space-between'
        flexWrap='wrap'
        width={1}
      >
        {experiences.map((p, i) => (
          <Experience name={p.name} period={p.period} role={p.role} technologies={p.technologies}  />
        ))}
      </Flex>
    </Section.Container>
  )
}

export default Experiences
