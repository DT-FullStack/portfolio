import { Package } from "./Package";

export interface Project {
  name: string;
  type: 'FrontEnd Only' | 'BackEnd Only' | 'Full Stack';
  github: string;
  description: string;
  highlights?: string[];
  notes?: string[];
  host?: {
    provider: string;
    url: string;
  }
  packages: Package[]
}

