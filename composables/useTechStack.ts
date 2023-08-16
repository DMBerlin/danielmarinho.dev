import {
  TechStackRecord,
  TechStackEnum,
  TechStackArray,
  TechStackCard,
} from "~/types/techStackCard";
import { UseTechStackInterface } from "~/types/useTechStack";

export const useTechStack = (): UseTechStackInterface => {
  const techStack: TechStackRecord = {
    [TechStackEnum.JAVASCRIPT]: {
      label: "JavaScript",
      icon: "/static/icons/lang-js-icon.svg",
    },
    [TechStackEnum.TYPESCRIPT]: {
      label: "TypeScript",
      icon: "/static/icons/lang-ts-icon.svg",
    },
    [TechStackEnum.VUE]: {
      label: "Vue",
      icon: "/static/icons/lang-vue-icon.svg",
    },
    [TechStackEnum.NUXT]: {
      label: "Nuxt",
      icon: "/static/icons/lang-nuxt-icon.svg",
    },
    [TechStackEnum.GRAPHQL]: {
      label: "GraphQL",
      icon: "/static/icons/lang-graphql-icon.svg",
    },
    [TechStackEnum.EXPRESSJS]: {
      label: "Express",
      icon: "/static/icons/lang-express-icon.svg",
    },
    [TechStackEnum.NODE]: {
      label: "Node",
      icon: "/static/icons/lang-node-icon.svg",
    },
    [TechStackEnum.NEST]: {
      label: "Nest",
      icon: "/static/icons/lang-nest-icon.svg",
    },
    [TechStackEnum.JEST]: {
      label: "Jest",
      icon: "/static/icons/lang-jest-icon.svg",
    },
    [TechStackEnum.MONGODB]: {
      label: "Mongodb",
      icon: "/static/icons/lang-mongodb-icon.svg",
    },
    [TechStackEnum.MYSQL]: {
      label: "MySQL",
      icon: "/static/icons/lang-mysql-icon.svg",
    },
    [TechStackEnum.POSTGRESQL]: {
      label: "PostgreSQL",
      icon: "/static/icons/lang-postgresql-icon.svg",
    },
    [TechStackEnum.NEO4J]: {
      label: "Neo4j",
      icon: "/static/icons/lang-neo4j-icon.svg",
    },
    [TechStackEnum.REDIS]: {
      label: "Redis",
      icon: "/static/icons/lang-redis-icon.svg",
    },
    [TechStackEnum.RABBITMQ]: {
      label: "RabbitMQ",
      icon: "/static/icons/lang-rabbitmq-icon.svg",
    },
    [TechStackEnum.VERCEL]: {
      label: "Vercel",
      icon: "/static/icons/lang-vercel-icon.svg",
    },
    [TechStackEnum.HEROKU]: {
      label: "Heroku",
      icon: "/static/icons/lang-heroku-icon.svg",
    },
    [TechStackEnum.FIREBASE]: {
      label: "Firebase",
      icon: "/static/icons/lang-firebase-icon.svg",
    },
    [TechStackEnum.GCP]: {
      label: "Google Cloud",
      icon: "/static/icons/lang-gcp-icon.svg",
    },
    [TechStackEnum.DOCKER]: {
      label: "Docker",
      icon: "/static/icons/lang-docker-icon.svg",
    },
    [TechStackEnum.DATADOG]: {
      label: "Datadog",
      icon: "/static/icons/lang-datadog-icon.svg",
    },
    [TechStackEnum.GIT]: {
      label: "Git",
      icon: "/static/icons/lang-git-icon.svg",
    },
  };

  const toMap = (): TechStackRecord => techStack;

  const toArray = (): TechStackArray => {
    const output: TechStackArray = [];

    Object.entries(techStack).forEach(
      ([id, value]: [id: string, value: Omit<TechStackCard, "id">]): void => {
        output[id] = {
          id: parseInt(id),
          ...value,
        };
      },
    );

    return output;
  };

  return { toMap, toArray };
};

export const useTechIndexation = (
  values: Array<TechStackEnum>,
): Array<number> =>
  values
    .map((value: TechStackEnum, index: number): number =>
      value ? index : null,
    )
    .filter((index) => index !== null);
