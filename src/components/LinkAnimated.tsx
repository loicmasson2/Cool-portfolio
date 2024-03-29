import styled from 'styled-components';

type LinkAnimatedProps = {
  selected: boolean,
};

const LinkAnimated = styled.span<LinkAnimatedProps>`
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  ${(props) => props.color && `color: ${props.theme.colors.primaryDark}`};
  ${(props) =>
    props.selected &&
    `border-bottom:  5px solid ${props.theme.colors.primaryLight}`};
  transition: 0.4s;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  text-size: 64px;
  font-family: Cabin;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${(props) => props.theme.colors.secondaryDark};
    height: 5px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default LinkAnimated;
