import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api";

const BreakdownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  //console.log(data);

  if (!data || isLoading) return "Loading...";

  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  const testData = {
    sapato: 100,
    blusa: 80,
    relogio: 200,
    brinco: 50,
  };

  // for (const value in testData) {
  //   console.log(value);
  // }

  const formattedTestData = Object.entries(testData).map((data) => console.log(data[0]));

  const formattedData = Object.entries(data.salesByCategory).map(([category, sales], i) => ({
    id: category,
    label: category,
    value: sales,
    color: colors[i],
  }));

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    ></Box>
  );
};

export default BreakdownChart;
