import { Project } from './Project';
import { Packages } from "./Package";

/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  react, reactRouter, redux, reactRedux, reduxThunk,
  mongoose, axios, express, parcel,
  angular, rxjs, pandas, typeScript,
  laravel, moment, jsonServer,
  semanticCss, angularMaterial, bulma
} = Packages
/* eslint-enable @typescript-eslint/no-unused-vars */

const Projects: { [key: string]: Project } = {
  api_demo: {
    name: 'Multimedia Search Engine',
    type: 'FrontEnd Only',
    description: 'A project capable of searching multiple external APIs and displaying results',
    highlights: ['Routing', 'State Management', 'External APIS'],
    packages: [react, reactRouter, redux, reactRedux, reduxThunk, axios, semanticCss],
    github: 'https://github.com/DT-FullStack/external-api-demo',
    host: {
      provider: 'Netlify',
      url: 'https://optimistic-goodall-f89630.netlify.app/'
    }
  },
  mern_stack: {
    name: 'Mini Social Network',
    type: 'Full Stack',
    description: 'A minimalist social network on a MERN stack',
    highlights: ['MongoDB', 'Authentication', 'State Management'],
    notes: ['The CSS stylesheets were supplied by an instructor'],
    packages: [react, reactRouter, moment, redux, reactRedux, reduxThunk, mongoose],
    github: 'https://github.com/DT-FullStack/mern-dev-connector',
    host: {
      provider: 'Heroku',
      url: 'https://sleepy-sierra-07378.herokuapp.com/'
    }
  },
  json_server: {
    name: 'RESTful Model Collections',
    type: 'Full Stack',
    github: 'https://github.com/DT-FullStack/model-system',
    description: 'A no nonsense TypeScript app with only three dependencies',
    highlights: ['Event handling from scratch', 'No front-end framework', 'Abstract classes', 'Generic classes'],
    notes: [''],
    packages: [typeScript, jsonServer, parcel, semanticCss]
  }
}

export default Projects;