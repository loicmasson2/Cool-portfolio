/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';
import colors from '../../colors';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '300px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

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

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

function createMarkup(text) {
  return {
    __html: text,
  };
}

const Company = ({ name, description, role, logo, flag, period }) => (
  <Flex flexDirection={['column', 'row']} width={1} my={4} alignItems="center">
    <Flex width={1 / 2} flex justifyContent="center">
      <Image width={500} height={200} src={logo} />
    </Flex>
    <Box width={1 / 2}>
      <TextContainer>
        <Title my={2} pb={1}>
          {name}
          {flag && (
            <span role="img" style={{ marginLeft: '10px' }}>
              {flag}
            </span>
          )}
        </Title>
        <Text width={[1]} my={2} fontSize={4} color={colors.primary}>
          {`As a ${role}, ${period}`}
        </Text>
        <Text width={[1]} my={2} fontSize={4}>
          <div dangerouslySetInnerHTML={createMarkup(description)} />
        </Text>
      </TextContainer>
    </Box>
  </Flex>
);

Company.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

const Projects = () => {
  const companies = [
    {
      name: 'Loyalty Company',
      flag: '🇫🇷',
      description: `Loyalty Company is an independent, 100% integrated BtoB Customer Marketing agency.</br></br>
      Being in a great team composed of experienced developers allowed me to grow as a <b>professional developer</b>. I filled the need to have expertise on the front end side with <b>AngularJS</b> knowledge.
      I have been involved on some heavy refactoring for our homemade <b>PHP framework</b>, as well to move forward with <b>Symfony</b>.
      `,
      period: 'July 2015 - May 2017',
      role: 'Software Developer',
      logo:
        'https://www.loyaltycompany.com/wp-content/themes/loyaltycompany/assets/images/logo-loyalty-company.png',
    },
    {
      name: 'Yousician',
      flag: '🇫🇮',
      description: `Yousician is a revolutionary music platform for anyone to learn, play, create and teach music.</br></br>
      I moved to Finland to work for this exciting company.</br>
      Using <b>AngularJS</b> and <b>jQuery</b> on our websites and/or internal tools for the front end and <b>Python</b> with <b>Django</b> for the backend. Improvements of the existing CI in <b>Jenkins</b>.</br>
      I also created a set of <b>E2E tests</b>, being part of the <b>recruitment process</b> and creating <b>landing pages</b>, <b>email templates</b> for marketing campaigns.
      `,
      period: 'May 2017 - September 2018',
      role: 'Software Developer',
      logo:
        'https://s2-cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/163/900/original/Greenhouse_Yousician_logo.png?1526977785',
    },
    {
      name: 'Nightingale',
      flag: '🇫🇮',
      description: `Nightingale Health is a biotech company aiming to solve the global burden of chronic diseases by transforming preventive health.</br></br>
      Mobing toward a more <b>impactful company</b>, in a complex domain. My mission was to implement a website to deliver a <b>clear and understandable message</b> to our customers and researchers.</br>
      Using the latest <b>React</b>, <b>Gatsby</b> with <b>Typescript</b> and <b>Prismic</b> as our API. We provided a flexible way for any relevant stakeholders in our company to update the website content in an <b>intuitive way</b>.`,
      period: 'November 2018 - April 2019',
      role: 'Software Developer',
      logo:
        'https://images.prismic.io/nightingaleprod/9f8c6b4e-1024-432c-9332-d5ead6d94b16_47_Press_release_Nightingale_2_website_blog_page.png?auto=compress,format&rect=0,0,6000,2292&w=1257.375&h=480',
    },
    {
      name: 'Blueprint Genetics',
      flag: '🇫🇮',
      description: `Blueprint Genetics is a genetic diagnostics company that provides clinical interpretation for hereditary diseases.</br></br>
      Developing software aimed at <b>healthcare professionnal</b> and <b>geneticist</b> is not a trivial task. Using a wide variety of technologies, <b>Angular 6 and 4</b>, <b>React</b>, <b>PHP</b> and <b>GO</b>.</br>
      To handle all those technologies , <b>self-organisation</b> and a <b>quick learning ability</b> is a must.
      `,
      period: 'Current position',
      role: 'Software Developer',
      missions: [
        'Working on existing solutions',
        'Introduce wireframes and prototyping',
      ],
      technologies: ['React', 'PHP', 'GO', 'Angular 6', 'Angular 4'],
      logo:
        'https://blueprintgenetics.com/wp-content/uploads/2019/03/Blueprint-Genetics.jpg',
    },
  ];
  return (
    <Section.Container id="Companies">
      <Section.Header
        name="Here's what I've done so far"
        icon="💻"
        Box="notebook"
      />
      <Flex
        justifyContent="space-between"
        alignItems="space-between"
        flexWrap="wrap"
        width={1}
      >
        {companies.map((p, i) => (
          <Company key={p.id} {...p} />
        ))}
      </Flex>
    </Section.Container>
  );
};

export default Projects;
