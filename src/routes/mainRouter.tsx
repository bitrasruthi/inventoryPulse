import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const MainRouter: FC = () => {
  return (
    <Routes>
      {/* Authorized routes */}
      {/* {currentuser?.Id &&
          routes.map((route, index) => (
            <Route key={index} element={<route.layout />}>
              <Route
                path={route.path}
                element={
                  <AuthorizedRoute>
                    <route.component />
                  </AuthorizedRoute>
                }
              />
            </Route>
          ))} */}

      {/* Public routes */}
      {routes
        // .filter((i: any) => i.withoutLogin === true)
        .map((route, index) => {
          return (
            <Route key={index} element={<route.layout />}>
              <Route path={route.path} element={<route.component />} />
            </Route>
          );
        })}
    </Routes>
  );
};
export default MainRouter;
