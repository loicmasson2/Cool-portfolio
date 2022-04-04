import React from 'react';
import styled from 'styled-components';
import { Flex, Heading } from 'rebass';
import LinkAnimated from './LinkAnimated';
import Background from '@lokit/black-sheep';

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

type ContainerProps = {
  id: string,
};

const Container: React.FC<ContainerProps> = ({ id, children }) => (
    <Background id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Background>
);


type HeaderProps = {
  name: string,
  icon: string,
  label: string
};

const Header: React.FC<HeaderProps> = ({ name, icon = '', label = '' }) => (
  <Flex justifyContent="center">
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
  </Flex>
);

export default {
  Container,
  Header,
};
