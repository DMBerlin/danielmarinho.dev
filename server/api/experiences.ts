import { defineEventHandler, EventHandlerResponse, H3Event } from "h3";
import { UserExperience } from "~/types/useExperiences";

export default defineEventHandler<UserExperience[]>(
  (event: H3Event): EventHandlerResponse<UserExperience[]> => {
    return [
      {
        companyUrl: "https://www.gupy.io",
        companyName: "Gupy",
        jobLocation: "Brazil (remote)",
        jobTitle: "Software Development Engineer II",
        startDate: new Date("2022-06-01").toISOString(),
        endDate: new Date().toISOString(),
      },
      {
        companyUrl: "https://www.niduu.com",
        companyName: "Niduu",
        jobLocation: "Brazil",
        jobTitle: "Back-end Developer",
        startDate: new Date("2019-11-01").toISOString(),
        endDate: new Date("2022-05-01").toISOString(),
      },
      {
        companyUrl: "https://terravivaseguros.com.br",
        companyName: "Terra Viva Seguros",
        jobLocation: "Brazil",
        jobTitle: "Full-stack Developer",
        startDate: new Date("2018-04-01").toISOString(),
        endDate: new Date("2019-10-01").toISOString(),
      },
      {
        companyUrl: "https://www.uema.br",
        companyName: "Universidade Estadual do Maranhão",
        jobLocation: "Brazil",
        jobTitle: "Software Developer",
        startDate: new Date("2016-04-01").toISOString(),
        endDate: new Date("2018-07-01").toISOString(),
      },
      {
        companyUrl: "https://www.fapema.br",
        companyName: "Fundação de Amparo e Pesquisa do Maranhão",
        jobLocation: "Brazil",
        jobTitle: "Software Developer",
        startDate: new Date("2015-02-01").toISOString(),
        endDate: new Date("2015-08-01").toISOString(),
      },
      {
        companyUrl: "https://www.caema.ma.gov.br",
        companyName: "Companhia de Saneamento Ambiental do Maranhão",
        jobLocation: "Brazil",
        jobTitle: "Systems Support",
        startDate: new Date("2014-05-01").toISOString(),
        endDate: new Date("2014-11-01").toISOString(),
      },
      {
        companyUrl: "https://www.bb.com",
        companyName: "Banco do Brasil",
        jobLocation: "Brazil",
        jobTitle: "Software Developer",
        startDate: new Date("2013-05-01").toISOString(),
        endDate: new Date("2013-12-01").toISOString(),
      },
      {
        companyUrl: "https://www.pitagoras.com.br",
        companyName: "Faculdade Pitágoras",
        jobLocation: "Brazil",
        jobTitle: "Full-stack Developer",
        startDate: new Date("2011-06-12").toISOString(),
        endDate: new Date("2012-11-29").toISOString(),
      },
    ];
  },
);
