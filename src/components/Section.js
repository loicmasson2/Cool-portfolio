import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Flex, Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';
import Background from './Background';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const Container = ({ id, children, name }) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background name={id}>
      <SectionContainer>{children}</SectionContainer>
    </Background>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  BackgroundVar: PropTypes.func,
};

const Header = ({ name, icon = '', label = '' }) => (
  <Flex justifyContent="center">
    <Slide left>
      <Heading
        color="secondaryDark"
        mb={6}
        fontSize={[6, 7]}
        mx="auto"
        textAlign={['center', 'left']}
      >
        <LinkAnimated selected>
          {name}
          {icon && (
            <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
              {icon}
            </span>
          )}
        </LinkAnimated>
      </Heading>
    </Slide>
  </Flex>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
};
