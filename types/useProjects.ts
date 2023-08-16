export interface UseProjectInterface {
  id: number;
  title: string;
  description: string;
  stack: number[];
}

export type ProjectTechStack = UseProjectInterface[];
