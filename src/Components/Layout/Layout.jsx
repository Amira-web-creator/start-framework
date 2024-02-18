import React from "react";
import Navbar from "../Navbar/Navbar";
import BottomContent from "../Bottom-content/BottomContent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div Style="margin-top: 86px;min-height: calc(-106px + 100vh);">
        <Outlet></Outlet>
      </div>
      <BottomContent />
    </>
  );
}
