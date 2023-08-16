import { defineEventHandler, EventHandlerResponse, H3Event } from 'h3';
import { UserExperience } from '../../types/useExperiences';

export default defineEventHandler<UserExperience[]>((event: H3Event): EventHandlerResponse<UserExperience[]> => {
  return [
    {
      companyUrl: "https://www.gupy.io",
      companyName: "Gupy",
      jobLocation: "São Luís (remote)",
      jobTitle: "Software Development Engineer II",
      startDate: new Date("2022-06-01").toISOString(),
      endDate: new Date().toISOString(),
    },
    {
      companyUrl: "https://www.niduu.com",
      companyName: "Niduu",
      jobLocation: "São Luís",
      jobTitle: "Back-end Developer",
      startDate: new Date("2019-11-01").toISOString(),
      endDate: new Date("2022-05-01").toISOString(),
    },
    {
      companyUrl: "https://terravivaseguros.com.br",
      companyName: "Terra Viva Seguros",
      jobLocation: "São Luís",
      jobTitle: "Full-stack Developer",
      startDate: new Date("2018-04-01").toISOString(),
      endDate: new Date("2019-10-01").toISOString(),
    },
    {
      companyUrl: "https://www.uema.br",
      companyName: "Universidade Estadual do Maranhão",
      jobLocation: "São Luís",
      jobTitle: "Software Developer",
      startDate: new Date("2016-04-01").toISOString(),
      endDate: new Date("2018-07-01").toISOString(),
    },
    {
      companyUrl: "https://www.fapema.br",
      companyName: "Fundação de Amparo e Pesquisa do Maranhão",
      jobLocation: "São Luís",
      jobTitle: "Software Developer",
      startDate: new Date("2015-02-01").toISOString(),
      endDate: new Date("2015-08-01").toISOString(),
    },
    {
      companyUrl: "https://www.caema.ma.gov.br",
      companyName: "Companhia de Saneamento Ambiental do Maranhão",
      jobLocation: "São Luís",
      jobTitle: "Systems Support",
      startDate: new Date("2014-05-01").toISOString(),
      endDate: new Date("2014-11-01").toISOString(),
    },
    {
      companyUrl: "https://www.bb.com",
      companyName: "Banco do Brasil",
      jobLocation: "São Luís",
      jobTitle: "Software Developer",
      startDate: new Date("2013-05-01").toISOString(),
      endDate: new Date("2013-12-01").toISOString(),
    },
    {
      companyUrl: "https://www.pitagoras.com.br",
      companyName: "Faculdade Pitágoras",
      jobLocation: "São Luís",
      jobTitle: "Full-stack Developer",
      startDate: new Date("2011-06-12").toISOString(),
      endDate: new Date("2012-11-29").toISOString(),
    },
  ];
})