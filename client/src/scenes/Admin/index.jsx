import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetAdminsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();
  const theme = useTheme();

  console.log(data);

  return <div>Admin</div>;
};

export default Admin;
