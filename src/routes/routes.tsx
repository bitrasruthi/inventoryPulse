import Layout from "../layout";
import EmptyLayout from "../layout/emptyLayout";
import Login from "../pages/AuthPages/login";
import Clients from "../pages/Clients/clients";
import Dashboard from "../pages/Dashboard/dashboard";
import Inspections from "../pages/Inspections";
import Properties from "../pages/Properties";
import Users from "../pages/Users/users";
import { paths } from "./paths";

const routes = [
  {
    component: Dashboard,
    layout: Layout,
    path: paths.HOME,
    withoutLogin: true,
  },
  {
    component: Login,
    layout: EmptyLayout,
    path: paths.LOGIN,
    withoutLogin: true,
  },
  {
    component: Inspections,
    layout: Layout,
    path: paths.INSPECTIONS,
    withoutLogin: true,
  },
  {
    component: Properties,
    layout: Layout,
    path: paths.PROPERTIES,
    withoutLogin: true,
  },
  {
    component: Users,
    layout: Layout,
    path: paths.USERS,
    withoutLogin: true,
  },
  {
    component: Clients,
    layout: Layout,
    path: paths.CLIENTS,
    withoutLogin: true,
  },
];

export default routes;
