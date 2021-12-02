export interface Package {
  name: PackageT;
  experience_level: 'none' | 'beginner' | 'intermediate' | 'advanced';
  language: Language | Language[];
}

type Language =
  'HTML' | 'JSX' | 'CSS' | 'SASS' |
  'JavaScript' | 'TypeScript' |
  'Python' | 'PHP' | 'CLI' |
  'MySQL' | 'MongoDB';

type PackageT =
  'Axios' | 'Express' | 'Moment' |
  'React' | 'React Router' | 'Redux' | 'React-Redux' | 'Redux-Thunk' | 'Mongoose' |
  'Angular' | 'RxJS' |
  'pandas' |
  'Laravel' |
  'Semantic UI CSS' | 'Angular Material' | 'Bulma'

export const Packages: { [key: string]: Package } = {
  react: {
    name: 'React',
    experience_level: 'intermediate',
    language: "JavaScript"
  },
  reactRouter: {
    name: "React Router",
    experience_level: 'beginner',
    language: 'JavaScript'
  },
  redux: {
    name: 'Redux',
    experience_level: 'intermediate',
    language: 'JavaScript'
  },
  reactRedux: {
    name: 'React-Redux',
    experience_level: 'intermediate',
    language: 'JavaScript'
  },
  reduxThunk: {
    name: 'Redux-Thunk',
    experience_level: 'intermediate',
    language: 'JavaScript'
  },
  mongoose: {
    name: 'Mongoose',
    experience_level: 'beginner',
    language: 'MongoDB'
  },
  axios: {
    name: 'Axios',
    experience_level: 'advanced',
    language: 'JavaScript'
  },
  express: {
    name: 'Express',
    experience_level: 'intermediate',
    language: 'JavaScript'
  },
  angular: {
    name: 'Angular',
    experience_level: 'intermediate',
    language: 'TypeScript'
  },
  rxjs: {
    name: 'RxJS',
    experience_level: 'intermediate',
    language: 'TypeScript'
  },
  pandas: {
    name: 'pandas',
    experience_level: 'beginner',
    language: 'Python'
  },
  laravel: {
    name: 'Laravel',
    experience_level: 'advanced',
    language: 'PHP'
  },
  semanticCss: {
    name: 'Semantic UI CSS',
    experience_level: 'advanced',
    language: 'CSS'
  },
  angularMaterial: {
    name: 'Angular Material',
    experience_level: 'intermediate',
    language: ['TypeScript', 'CSS']
  },
  bulma: {
    name: 'Bulma',
    experience_level: 'beginner',
    language: ['HTML', 'CSS']
  },
  moment: {
    name: 'Moment',
    experience_level: 'advanced',
    language: 'JavaScript'
  }
}
