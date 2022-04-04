/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Image } from 'rebass';
import angular from './Logo/angular.png';
import aws from './Logo/aws.png';
import flask from './Logo/flask.png';
import gatsby from './Logo/gatsby.png';
import go from './Logo/go.png';
import graphql from "./Logo/graphql.png";
import mongodb from './Logo/mongodb.png';
import mysql from './Logo/mysql.png';
import php from './Logo/php.png';
import prismic from './Logo/prismic.png';
import python from './Logo/python.png';
import react from './Logo/react.png';
import redux from './Logo/redux.png';
import symfony from './Logo/symfony.png';
import typescript from './Logo/typescript.png';

const iconsMapping: mapping = {
  angular,
  aws,
  flask,
  gatsby,
  go,
  graphql,
  mongodb,
  mysql,
  php,
  prismic,
  python,
  react,
  redux,
  symfony,
  typescript,
};


const ExperienceIcon: React.FC<{name:string}> = ({ name }): JSX.Element => (
  <Image
    sx={{
      px: 1,
      py: 1,
      width: '64px',
      height: '64px',
    }}
    src={iconsMapping[name]}
  />
);

export default ExperienceIcon;
