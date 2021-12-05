import React from "react";
import { Redirect } from "react-router-dom";
const ZHome = React.lazy(() => import("pages/home"));
const ZAddMessage = React.lazy(() => import("pages/add_message"));
const ZBlassification = React.lazy(() => import("pages/classification"));
const ZAbout = React.lazy(() => import("pages/about"));
const ZDetail = React.lazy(() => import("pages/detail"));
const ZSubclass = React.lazy(() => import("pages/classification/cpns"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: ZHome,
  },
  {
    path: "/project",
    component: ZAddMessage,
  },
  {
    path: "/classification",
    component: ZBlassification,
  },
  {
    path: "/about",
    component: ZAbout,
  },
  {
    path: "/detail",
    component: ZDetail,
  },
  {
    path: "/subclass",
    component: ZSubclass,
  },
];

export default routes;
