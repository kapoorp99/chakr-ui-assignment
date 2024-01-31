import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import DashboardContentTop from "./DashboardContents/DashboardContentTop";
import DashboardContentMiddle from "./DashboardContents/DashboardContentMiddle";
import Navbar from "./Navbar";
import DashboardContentBottom from "./DashboardContents/DashboardContentBottom";

function DashboardMain() {
  return (
    <Flex w="100%">
      <Sidebar />
      <Stack width={"100%"} p="20px">
        <Navbar />
        <DashboardContentTop />
        <DashboardContentMiddle />
        <DashboardContentBottom />
      </Stack>
    </Flex>
  );
}

export default DashboardMain;
