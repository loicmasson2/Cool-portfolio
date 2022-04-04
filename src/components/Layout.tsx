import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from './Helmet'
const colors = {
  background: '#FFFFFF',
  backgroundDark: '#f0e6f6',

  primary: '#4467D9',
  primaryLight: '#6682DF',
  primaryDark: '#324B9E',

  secondary: '#C59985',
  secondaryLight: '#DABEB1',
  secondaryDark: '#B48C79',
}

  const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    font-family: Cabin;
    overflow-x: hidden;
  }
`


const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
        <Helmet />
        {children}
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
