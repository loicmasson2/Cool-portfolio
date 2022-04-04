import React from 'react';
import Headroom from 'react-headroom';
import {Flex} from 'rebass';
import styled from 'styled-components';

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    span {
      color: white;
    }

    img {
      filter: brightness(0) invert(1);
    }

    background: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const Header = () => {
    return <HeaderContainer>
            <Flex
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                p={3}
            >

            </Flex>
    </HeaderContainer>
};

export default Header;
