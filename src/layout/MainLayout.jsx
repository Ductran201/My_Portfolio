import React from "react";
import ToggleTheme from "../components/toggleTheme/ToggleTheme";
import MainNav from "../components/mainNav/MainNav";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    // <div className="main">
    <div>
      <ToggleTheme />
      <MainNav />
      <Outlet />
    </div>
  );
}
