export enum TechStackEnum {
  JAVASCRIPT,
  TYPESCRIPT,
  VUE,
  NUXT,
  GRAPHQL,
  EXPRESSJS,
  NODE,
  NEST,
  JEST,
  MONGODB,
  MYSQL,
  POSTGRESQL,
  NEO4J,
  REDIS,
  VERCEL,
  RABBITMQ,
  HEROKU,
  FIREBASE,
  GCP,
  DOCKER,
  DATADOG,
  GIT,
}

export type TechStackCard = {
  id: TechStackEnum;
  label: string;
  icon: string;
};

export type TechStackRecord = Record<TechStackEnum, Omit<TechStackCard, "id">>;
export type TechStackArray = Array<TechStackCard>;
