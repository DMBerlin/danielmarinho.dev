interface HomeRoute {
  label: "HOME";
  path: "/";
}

interface CareerRoute {
  label: "CAREER";
  path: "/career";
}

interface ProjectsRoute {
  label: "PROJECTS";
  path: "/projects";
}

interface AboutRoute {
  label: "ABOUT";
  path: "/about";
}

type NavigationRoute = HomeRoute | CareerRoute | ProjectsRoute | AboutRoute;

export type UseNavigationList = Array<NavigationRoute>;
