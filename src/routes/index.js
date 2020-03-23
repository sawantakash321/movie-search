import React from "react";
import { Switch, Route } from "react-router-dom";
import { commonRoutes } from "./commonRoutes";

const RoutesHOC = props => {
  const { routes } = props;
  return (
    <React.Fragment>
      {routes.map((route) => {
        return <Route {...route} />;
      })}
    </React.Fragment>
  );
};

export default props => {
  return (
    <Switch>
      <RoutesHOC routes={commonRoutes} />
    </Switch>
  );
};
