import { Project } from './Project';
import { Packages } from "./Package";

const {
  react, reactRouter, redux, reactRedux, reduxThunk,
  mongoose, axios, express,
  angular, rxjs, pandas,
  laravel, moment,
  semanticCss, angularMaterial, bulma
} = Packages

const Projects: { [key: string]: Project } = {
  api_demo: {
    name: 'Utilizing External APIs',
    description: 'A simple project that interacts with external APIs',
    packages: [react, reactRouter, redux, reactRedux, reduxThunk, axios, semanticCss],
    github: 'https://github.com/DT-FullStack/external-api-demo',
    host: {
      provider: 'Netlify',
      url: 'https://optimistic-goodall-f89630.netlify.app/'
    }
  },
  mern_stack: {
    name: 'Mini Social Network',
    description: 'A minimalist social network on a MERN stack',
    notes: ['The CSS stylesheets were supplied by an instructor'],
    packages: [react, reactRouter, moment, redux, reactRedux, reduxThunk, mongoose],
    github: 'https://github.com/DT-FullStack/mern-dev-connector',
    host: {
      provider: 'Heroku',
      url: 'https://sleepy-sierra-07378.herokuapp.com/'
    }
  }
}