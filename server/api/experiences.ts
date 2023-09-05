import { defineEventHandler, EventHandlerResponse, H3Event } from "h3";
import { UserExperience } from "~/types/useExperiences";

export default defineEventHandler(
  (event: H3Event): EventHandlerResponse<UserExperience[]> => {
    return [
      {
        companyUrl: "https://www.gupy.io",
        companyName: "Gupy",
        jobTitle: "Software Development Engineer II",
        jobLocation: "Brazil",
        jobDescription: [
          "On-call rotation.",
          "Test Driven Development.",
          "Systems Observability and Monitoring.",
          "Development of serverless applications.",
        ],
        startDate: new Date("2022-6-1").toISOString(),
        endDate: new Date().toISOString(),
      },
      {
        companyUrl: "https://www.niduu.com",
        companyName: "Niduu",
        jobTitle: "Back-end Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Back-end development of APIs.",
          "Front-end development of PWAs.",
          "CI/CD pipelines and git actions.",
          "Microservices with Event Driven Architecture.",
          "Recommendation services using Graph Databases.",
        ],
        startDate: new Date("2019-11-1").toISOString(),
        endDate: new Date("2022-5-1").toISOString(),
      },
      {
        companyUrl: "https://terravivaseguros.com.br",
        companyName: "Terra Viva Seguros",
        jobTitle: "Full-stack Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Development of several SPAs.",
          "Full-stack developer on web applications.",
          "development of an mobile application for sales.",
        ],
        startDate: new Date("2018-4-1").toISOString(),
        endDate: new Date("2019-10-1").toISOString(),
      },
      {
        companyUrl: "https://www.uema.br",
        companyName: "Universidade Estadual do Maranhão",
        jobTitle: "Software Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Development of web applications.",
          "Development of technical IT documentation.",
          "PM in many system development related projects.",
        ],
        startDate: new Date("2016-4-1").toISOString(),
        endDate: new Date("2018-7-1").toISOString(),
      },
      {
        companyUrl: "https://www.fapema.br",
        companyName: "Fundação de Amparo e Pesquisa do Maranhão",
        jobTitle: "Software Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Project analysis and development of organizational tools.",
          "Individual contributor on the main web application for research grants.",
        ],
        startDate: new Date("2015-2-1").toISOString(),
        endDate: new Date("2015-8-1").toISOString(),
      },
      {
        companyUrl: "https://www.caema.ma.gov.br",
        companyName: "Companhia de Saneamento Ambiental do Maranhão",
        jobTitle: "Systems Support",
        jobLocation: "Brazil",
        jobDescription: [
          "On-premises hardware solutions.",
          "Technical support on network infrastructure.",
        ],
        startDate: new Date("2014-5-1").toISOString(),
        endDate: new Date("2014-11-1").toISOString(),
      },
      {
        companyUrl: "https://www.bb.com.br",
        companyName: "Banco do Brasil",
        jobTitle: "Software Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Front-end development.",
          "Feature support in SYSBB.",
          "Development of automated scripted routines.",
        ],
        startDate: new Date("2013-5-1").toISOString(),
        endDate: new Date("2013-12-1").toISOString(),
      },
      {
        companyUrl: "https://www.pitagoras.com.br",
        companyName: "Faculdade Pitágoras",
        jobTitle: "Full-stack Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Acknowledgment of scientific projects.",
          "Development of internal tools built in the web.",
        ],
        startDate: new Date("2011-6-12").toISOString(),
        endDate: new Date("2012-11-29").toISOString(),
      },
      {
        companyUrl: "https://www.danielmarinho.dev",
        companyName: "Freelancer",
        jobTitle: "Web Developer",
        jobLocation: "Brazil",
        jobDescription: [
          "Website developer.",
          "CMS management and development with Joomla.",
          "WordPress development for personal blogs and plugins.",
        ],
        startDate: new Date("2008-1-2").toISOString(),
        endDate: new Date("2011-12-1").toISOString(),
      },
    ];
  },
);
