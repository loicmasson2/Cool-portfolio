/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Image } from 'rebass';
import BackgroundPrimaryLight from '../components/Backgrounds/BackgroundPrimaryLight.png';
import angular from './Logo/angular.png';
import aws from './Logo/aws.png';
import flask from './Logo/flask.png';
import gatsby from './Logo/gatsby.png';
import go from './Logo/go.png';
import graphql from './Logo/graphql.png';
import mongodb from './Logo/mongodb.png';
import mysql from './Logo/mysql.png';
import php from './Logo/php.png';
import prismic from './Logo/prismic.png';
import python from './Logo/python.png';
import react from './Logo/react.png';
import redux from './Logo/redux.png';
import symfony from './Logo/symfony.png';
import typescript from './Logo/typescript.png';

const iconsMapping = {
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

const ExperienceIcon = ({ name }) => (
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
