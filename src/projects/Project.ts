import { Package } from "./Package";

export interface Project {
  name: string;
  github: string;
  description: string;
  notes?: string | string[];
  host: {
    provider: string;
    url: string;
  }
  packages: Package[]
}

