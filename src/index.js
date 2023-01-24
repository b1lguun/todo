import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { Information } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="navbar">
                <div className="nvbr-left">
                  <div className="Logo">
                    <div className="logo">team</div>
                    <div className="cube"></div>
                  </div>
                  <div className="blog">
                    <div className="blog1">Blog posts</div>
                    <div className="blog2">
                      Our latest updates and blogs about managing your team
                    </div>
                  </div>
                </div>
                <div className="nvbr-right">
                  <Link to="/">
                    <div className="nv-text">Home</div>
                  </Link>
                  <div className="nv-text">Blog</div>
                  <div className="nv-text">Contact</div>
                  <div className="nv-text">Log in</div>
                  <div className="nv-tex">Get Access</div>
                </div>
              </div>
              <Outlet />
            </div>
          }
        >
          <Route index element={<App />} />
          <Route path="/login" element={<div>login</div>} />
          <Route path="/post/:id" element={<Information />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
