import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  { element : <App />,
    children: [
  { path: "/", element: <Home /> },
  { path: "/new", element: <NewPost /> },
]}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
