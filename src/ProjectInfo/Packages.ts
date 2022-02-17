export interface Package {
  name: PackageName;
  description: string;
  experience_level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: Language;
}

export type Language =
  'HTML' | 'JSX' | 'CSS' | 'SASS' |
  'JavaScript' | 'TypeScript' | 'Python' | 'PHP' | 'CLI' |
  'MySQL' | 'MongoDB';

export type PackageName =
  'Axios' | 'Express' | 'Moment' | 'Parcel' | 'Json Server' | 'TypeScript' |
  'React' | 'React Router' | 'Redux' | 'React-Redux' | 'Redux-Thunk' | 'Mongoose' |
  'Angular' | 'RxJS' | 'jQuery' |
  'Pandas' | 'Git' |
  'Laravel' | 'Composer' | 'NPM' |
  'Semantic UI CSS' | 'Sass' | 'Angular Material' | 'Bulma';


export const PackageList: { [key: string]: Package } = {
  react: {
    name: 'React',
    description: 'FrontEnd Javascript Framework',
    experience_level: 'Advanced',
    language: "JavaScript"
  },
  reactRouter: {
    name: "React Router",
    description: 'URL Routing for React',
    experience_level: 'Beginner',
    language: 'JavaScript'
  },
  redux: {
    name: 'Redux',
    description: 'State Maintenenace Package',
    experience_level: 'Advanced',
    language: 'JavaScript'
  },
  reactRedux: {
    name: 'React-Redux',
    description: 'Bridge For React and Redux',
    experience_level: 'Advanced',
    language: 'JavaScript'
  },
  reduxThunk: {
    name: 'Redux-Thunk',
    description: 'Redux middleware to allow asynchronous operations',
    experience_level: 'Advanced',
    language: 'JavaScript'
  },
  mongoose: {
    name: 'Mongoose',
    description: 'Package for use with MongoDB and Node',
    experience_level: 'Beginner',
    language: 'MongoDB'
  },
  axios: {
    name: 'Axios',
    description: 'HTTP Requests',
    experience_level: 'Advanced',
    language: 'JavaScript'
  },
  express: {
    name: 'Express',
    description: 'Creates a Node.js server',
    experience_level: 'Intermediate',
    language: 'JavaScript'
  },
  typeScript: {
    name: 'TypeScript',
    description: 'Package that type-checks code',
    experience_level: 'Advanced',
    language: 'TypeScript'
  },
  jsonServer: {
    name: 'Json Server',
    description: 'A basic express app that creates a RESTful API using a json file as a database',
    experience_level: 'Intermediate',
    language: 'JavaScript'
  },
  parcel: {
    name: 'Parcel',
    description: 'A lightweight package that bundles static files from underlying Javascript',
    experience_level: 'Intermediate',
    language: 'CLI'
  },
  angular: {
    name: 'Angular',
    description: 'FrontEnd Javascript Framework',
    experience_level: 'Intermediate',
    language: 'TypeScript'
  },
  rxjs: {
    name: 'RxJS',
    description: 'Powerful event handling package',
    experience_level: 'Intermediate',
    language: 'TypeScript'
  },
  git: {
    name: 'Git',
    description: 'Version manager',
    language: 'CLI',
    experience_level: 'Intermediate'
  },
  jquery: {
    name: 'jQuery',
    description: 'Javascript library',
    language: 'JavaScript',
    experience_level: 'Advanced'
  },
  pandas: {
    name: 'Pandas',
    description: 'Data Processing',
    experience_level: 'Beginner',
    language: 'Python'
  },
  laravel: {
    name: 'Laravel',
    description: 'BackEnd PHP Framework',
    experience_level: 'Advanced',
    language: 'PHP'
  },
  semanticCss: {
    name: 'Semantic UI CSS',
    description: 'CSS Framework',
    experience_level: 'Advanced',
    language: 'CSS'
  },
  sass: {
    name: 'Sass',
    description: 'Powerful CSS preprocessor',
    experience_level: 'Advanced',
    language: 'CSS'
  },
  angularMaterial: {
    name: 'Angular Material',
    description: 'UI components',
    experience_level: 'Beginner',
    language: 'TypeScript'
  },
  bulma: {
    name: 'Bulma',
    description: 'CSS Framework',
    experience_level: 'Beginner',
    language: 'CSS'
  },
  moment: {
    name: 'Moment',
    description: 'Powerful Date-Time package',
    experience_level: 'Advanced',
    language: 'JavaScript'
  },
  composer: {
    name: 'Composer',
    description: 'PHP package manager',
    experience_level: 'Advanced',
    language: "CLI"
  },
  npm: {
    name: 'NPM',
    description: 'JavaScript package manager',
    experience_level: 'Advanced',
    language: "CLI"
  },
}
