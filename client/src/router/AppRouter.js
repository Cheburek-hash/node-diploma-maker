import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

export const AppRouter = (isAuthenticated = false) => {
  if (isAuthenticated) {
    return (
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            element={<route.component />}
            key={route.path}
          />
        ))}
       <Route
            path={'/'}
            exact
            element={<Navigate to="/" />}
            key={'/'}
          />
      </Routes>
    );
  }
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          element={<route.component />}
          key={route.path}
        />
      ))}
       <Route
            path={'/'}
            exact
            element={<Navigate to="/" />}
            key={'/'}
          />
    </Routes>
  );
};
