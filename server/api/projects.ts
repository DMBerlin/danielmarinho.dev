import { defineEventHandler, EventHandlerResponse, H3Event } from "h3";
import { UseProjectInterface } from "~/types/useProjects";

export default defineEventHandler(
  (
    event: H3Event,
  ): EventHandlerResponse<Omit<UseProjectInterface, "getTechIds">[]> => {
    return [
      {
        id: 1,
        title: "Content Discovery Service",
        description:
          "I created a content discovery service behind an engaging education feature, empowered over 700k users to explore enriching educational material, enabling them to master desired skills with unparalleled ease and enjoyment.",
        stack: [1, 6, 8, 7, 13, 12, 19, 20, 18, 21],
      },
      {
        id: 2,
        title: "Observability for Optimal Performance",
        description:
          "In this project, I undertook comprehensive application monitoring across 30 services using a suite of observability tools, including Datadog, Cloud Logging, and New Relic. I diligently tracked system health, longevity, failure points, and performance bottlenecks, contributing to an optimized and resilient application ecosystem.",
        stack: [18, 19, 20, 21],
      },
      {
        id: 3,
        title: "Services Asynchronous Communication",
        description:
          "Implemented an event-driven architecture, with lightning-fast communication and unwavering reliability using message brokers. All orchestrated atop cloud containers, carrying low latency with high availability, increasing the bar on setting the stage for a microservice environment.",
        stack: [1, 6, 7, 15, 18, 19, 20, 21],
      },
      {
        id: 4,
        title: "API Gateway Integration",
        description:
          "I undertook a significant initiative by engineering an API Gateway solution, harmonizing multiple discrete NodeJS applications under a singular, unifying endpoint. This simplification of query procedures for backend resources, and the mitigation of overall system complexity, contributed to heightened operational efficiency and an enhanced user experience.",
        stack: [4, 6, 7, 18, 21],
      },
      {
        id: 5,
        title: "Integrated Event Management Platform",
        description:
          "In this project, I spearheaded the development of a comprehensive event management platform akin to Meetup, enabling customers to effortlessly organize and host events. By integrating employee coordination, seamless room reservations, and real-time notifications, I ensured a dynamic and efficient user experience. Leveraging NoSQL databases, I implemented a robust reporting system, empowering managers with insightful data for informed decision-making.",
        stack: [2, 4, 6, 7, 9, 17, 21],
      },
      {
        id: 6,
        title: "Tailored CRM Solution for Enhanced Efficiency",
        description:
          "I conceptualized and constructed a meticulously tailored Customer Relationship Management System (CRM). This robust system adeptly oversaw our sales pipeline and streamlined employee and external seller routines, resulting in a notable reduction of over 50% in expenses previously allocated to third-party applications.",
        stack: [2, 4, 6, 5, 16, 9, 17, 21],
      },
      {
        id: 7,
        title: "Integrated Landing Pages Driving Sales",
        description:
          "I spearheaded the development of multiple high-performance Landing Pages, optimized for AdSense and Server-Side Rendering (SSR), seamlessly integrated disparate platforms into a unified CRM application. This strategic move catalyzed a substantial 26% upswing in overall sales, underscoring the project's pivotal impact on the company's success.",
        stack: [3, 4, 6, 5, 14, 11, 21],
      },
    ];
  },
);
