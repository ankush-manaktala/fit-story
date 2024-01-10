import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ComponentRoutes } from "./utils/Constants/component-routes";
import { Welcome, Login, Diet } from "./utils/LazyLoaded";
import Layout from "./Layout";
import { useApp } from "./hooks/app-hook";

const App = () => {
  const { header, getWelcomeData } = useApp();

  useEffect(() => {
    getWelcomeData();
  }, [getWelcomeData]);

  return (
    <Layout data={header}>
      <Suspense>
        <Routes>
          <Route exact path={ComponentRoutes.default} Component={Welcome} />
          <Route exact path={ComponentRoutes.welcome} Component={Welcome} />
          <Route exact path={ComponentRoutes.login} Component={Login} />
          <Route exact path={ComponentRoutes.diet} Component={Diet} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
