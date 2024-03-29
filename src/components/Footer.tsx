import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import PropTypes from 'prop-types';

const FooterContainer = styled.footer`
  
  padding: 1em;
  background: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Logo:React.FC<{url:string, logo:string, alt?: string}> = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <ResponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
      <Flex justifyContent="center" alignItems="center">
        <Text m={2} fontSize={4} textAlign="center">
          <span role="img" aria-label="heart">
            Made with ❤️ by Loïc Masson
          </span>
        </Text>
      </Flex>
  </FooterContainer>
);

export default Footer;
