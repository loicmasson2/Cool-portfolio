// @ts-ignore
import styled from 'styled-components';

 interface Breakpoints {
  [index: string]: string;
}
const breakpoints: Breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)',
};

const hidden = (key: string) => (props: { [x: string]: never; }) => {
  return props[key] && {
    [breakpoints[key]]: {
      display: 'none',
    },
  }
};

const xs = hidden('xs');
const sm = hidden('sm');
const md = hidden('md');
const lg = hidden('lg');

const customQuery = (props: { query: never; }) =>
  props.query && {
    [props.query]: {
      display: 'none',
    },
  };

// @ts-ignore
const Hide = styled.div([], xs, sm, md, lg, customQuery);

export default Hide;
