import { Package } from "./Packages";
import { PackageList } from "./Packages";

export interface Project {
  name: string;
  minorProject: boolean,
  type: 'Front End' | 'Back End' | 'Full Stack';
  github: string;
  description: string[];
  highlights?: string[];
  notes?: string[];
  host?: {
    provider: string;
    url: string;
  }
  packages: Package[]
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  react, reactRouter, redux, reactRedux, reduxThunk,
  mongoose, axios, express, parcel,
  angular, rxjs, pandas, typeScript,
  laravel, moment, jsonServer, sass, npm, composer,
  semanticCss, angularMaterial, bulma, git, jquery,
} = PackageList
/* eslint-enable @typescript-eslint/no-unused-vars */

export const ProjectList: { [key: string]: Project } = {
  bodywizard: {
    minorProject: false,
    name: 'Medical Portal',
    type: 'Full Stack',
    description: ['A personal project that evolved into a career change', 'No major Javascript or CSS frameworks', 'Intended for healthcare providers, patients, and staff'],
    highlights: ['Authentication', 'Role-Based Authorization', 'Custom User-Built Form System', 'Nesting Modals', 'Banner Notifications'],
    packages: [laravel, jquery, sass, moment, axios, git, composer, npm],
    notes: [],
    github: 'https://github.com/DT-FullStack/BodyWizard',
    host: {
      provider: 'Heroku',
      url: 'https://bodywizard.herokuapp.com/'
    }
  },
  multi_search: {
    minorProject: false,
    name: 'Multimedia Search Engine',
    type: 'Front End',
    description: ['A project capable of searching multiple external APIs and displaying results', 'Connects to Spotify, Wikipedia, and YouTube'],
    highlights: ['Routing', 'State Management', 'External APIS'],
    packages: [react, reactRouter, redux, reactRedux, reduxThunk, axios, semanticCss, git, npm],
    github: 'https://github.com/DT-FullStack/external-api-demo',
    host: {
      provider: 'Netlify',
      url: 'https://dt-multimedia-search.netlify.app/'
    }
  },
  mern_stack: {
    minorProject: false,
    name: 'Mini Social Network',
    type: 'Full Stack',
    description: ['A minimalist social network on a MERN stack'],
    highlights: ['MongoDB', 'Authentication', 'State Management'],
    notes: ['The CSS stylesheets were supplied by an instructor'],
    packages: [react, reactRouter, moment, redux, reactRedux, reduxThunk, mongoose, git, npm],
    github: 'https://github.com/DT-FullStack/mern-dev-connector',
    host: {
      provider: 'Heroku',
      url: 'https://sleepy-sierra-07378.herokuapp.com/'
    }
  },
  json_server: {
    minorProject: false,
    name: 'RESTful Model Collections',
    type: 'Full Stack',
    github: 'https://github.com/DT-FullStack/model-system',
    host: {
      provider: 'Heroku',
      url: 'https://model-system.herokuapp.com/'
    },
    description: ['A TypeScript app for managing collections of models', 'No major frameworks, only four dependencies'],
    highlights: ['Event listeners from scratch', 'Abstract classes', 'Generic classes'],
    notes: [''],
    packages: [typeScript, express, semanticCss, git, npm]
  },
  portfolio: {
    minorProject: true,
    name: 'This Portfolio Page',
    type: 'Front End',
    description: [
      'I built this page simply to showcase my projects and skills',
      'Each project has a link to GitHub and to a live production site, if available'
    ],
    highlights: ['React-TypeScript', 'Sortable'],
    packages: [react, typeScript, semanticCss, sass, git, npm],
    github: 'https://github.com/DT-FullStack/portfolio',
  },
  math_game: {
    minorProject: true,
    name: 'Math Game',
    type: 'Front End',
    github: 'https://github.com/DT-FullStack/math-game',
    description: ['A game that times you while solving arithmetic problems'],
    highlights: ['RxJS Pipes', 'Angular Forms', 'Form Validators', 'Dynamic Form Changes'],
    host: {
      provider: 'Netlify',
      url: 'https://dt-math-game.netlify.app/'
    },
    notes: [],
    packages: [angular, rxjs, git, npm]
  },
}
