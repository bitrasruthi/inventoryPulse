import Layout from "../layout";
import EmptyLayout from "../layout/emptyLayout";
import CompanyLogin from "../pages/Auth/companyLogin";
import Login from "../pages/Auth/login";
import Clients from "../pages/Clients";
import Dashboard from "../pages/Dashboard";
import Inspections from "../pages/Inspections";
import InspectionDetails from "../pages/Inspections/InspectionDetails";
import Properties from "../pages/Properties";
import Users from "../pages/Users";
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
    component: CompanyLogin,
    layout: EmptyLayout,
    path: paths.CHOOSE_LOGIN,
    withoutLogin: true,
  },
  {
    component: Inspections,
    layout: Layout,
    path: paths.INSPECTIONS,
    withoutLogin: true,
  },
  {
    component: InspectionDetails,
    layout: Layout,
    path: paths.INSPECTIONSDETAILS,
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
