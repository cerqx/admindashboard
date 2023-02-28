import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

function Layout() {
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobileScreens ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobileScreens={isNonMobileScreens}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
