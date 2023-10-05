import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/index.ts";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./routes/home.tsx";
import { ErrorPage } from "./routes/errorPage.tsx";
import { Skills } from "./routes/skills.tsx";
import { Projects } from "./routes/projects.tsx";
import { Contact } from "./routes/contact.tsx";
import { Personal } from "./routes/personal.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/personal",
        element: <Personal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
