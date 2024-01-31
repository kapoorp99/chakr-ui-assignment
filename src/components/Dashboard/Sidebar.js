import React, { useState } from "react";
import { Box, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import logo from "../../assets/dashboard/logo.png";
import logoMark from "../../assets/dashboard/logoMark.png";
import avatar from "../../assets/dashboard/avatar.png";
import collapseIcon from "../../assets/dashboard/collapse-icon.png";
import searchIcon from "../../assets/dashboard/search-icon.png";
import dashboardIcon from "../../assets/dashboard/dashboard-icon.png";
import customersIcon from "../../assets/dashboard/customers-icon.png";
import geographyIcon from "../../assets/dashboard/geography-icon.png";
import conversationsIcon from "../../assets/dashboard/conversations-icon.png";
import dealsIcon from "../../assets/dashboard/deals-icon.png";
import exportIcon from "../../assets/dashboard/export-icon.png";
// import arrowIcon from "../../assets/dashboard/arrow-icon.png";
import reportIcon from "../../assets/dashboard/report-icon.png";
import closedIcon from "../../assets/dashboard/closed-icon.png";
// import productIcon from "../../assets/dashboard/product-icon.png";
// import orderIcon from "../../assets/dashboard/order-icon.png";
import settingsIcon from "../../assets/dashboard/settings-icon.png";
import logoutIcon from "../../assets/dashboard/logout-icon.png";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Stack
      w={isCollapsed ? "70px" : "280px"}
      p={"20px"}
      display={["none", "none", "block"]}
    >
      <Stack w="100%" h="642px" gap={"8px"} position={"relative"}>
        <Image
          src={logo.src}
          alt="OrangeFarm"
          w={"180px"}
          display={isCollapsed ? "none" : "block"}
        />
        <Image
          src={logoMark.src}
          alt="OrangeFarm"
          w={"40px"}
          display={isCollapsed ? "block" : "none"}
        />
        <Flex
          mt="5px"
          border={isCollapsed ? "" : "1px solid #F1F1F1"}
          gap="8px"
          align={"center"}
          borderRadius={"20px"}
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "20px" : "12px"}
            h={isCollapsed ? "20px" : "12px"}
            src={searchIcon.src}
            alt="Search"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color={"#7D7D7D"}
            display={isCollapsed ? "none" : "block"}
          >
            Search
          </Text>
        </Flex>
        <Flex
          align={"center"}
          gap="8px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={dashboardIcon.src}
            alt="Dashboard-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Dashboard
          </Text>
        </Flex>
        <Flex
          w="100%"
          justify={"space-between"}
          align={"center"}
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Flex align={"center"} gap="8px">
            <Image
              w={isCollapsed ? "22px" : "16px"}
              h={isCollapsed ? "22px" : "16px"}
              src={customersIcon.src}
              alt="Customers-icon"
            />
            <Text
              fontSize={"14px"}
              fontWeight={"medium"}
              color="#131313"
              display={isCollapsed ? "none" : "block"}
            >
              Customers
            </Text>
          </Flex>
          <Image
            w="16px"
            h="16px"
            src={closedIcon.src}
            alt="Closed"
            display={isCollapsed ? "none" : "block"}
          />
        </Flex>
        <Flex
          align={"center"}
          gap="8px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={reportIcon.src}
            alt="Report-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            All reports
          </Text>
        </Flex>
        <Flex
          align={"center"}
          gap="8px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={geographyIcon.src}
            alt="Geography-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Geography
          </Text>
        </Flex>
        <Flex
          align={"center"}
          gap="8px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={conversationsIcon.src}
            alt="Conversations-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Conversations
          </Text>
        </Flex>
        <Flex
          align={"center"}
          gap="8px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={dealsIcon.src}
            alt="Deals-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Deals
          </Text>
        </Flex>
        <Flex
          align={"center"}
          gap="8px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={exportIcon.src}
            alt="Export-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Export
          </Text>
        </Flex>
        <Image
          transform={isCollapsed ? "rotate(180deg)" : "rotate(0deg)"}
          position={"absolute"}
          w={isCollapsed ? "26px" : "24px"}
          h={isCollapsed ? "26px" : "24px"}
          bottom={0}
          right={0}
          src={collapseIcon.src}
          alt="Collapse-Icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </Stack>
      <Stack w="100%" h="180px" gap="12px">
        <Flex
          align={"center"}
          gap="12px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image w="32px" h="32px" src={avatar.src} alt="Avatar" />
          <Stack gap="4px">
            <Text
              fontSize={"14px"}
              fontWeight={"medium"}
              color="#131313"
              display={isCollapsed ? "none" : "block"}
            >
              Gustavo Xavier
            </Text>
            <Flex
              fontSize={"10px"}
              bg="#FFCD71"
              borderRadius={"24px"}
              padding={"0px 6px"}
              w="45px"
              display={isCollapsed ? "none" : "block"}
            >
              Admin
            </Flex>
          </Stack>
        </Flex>
        <Flex
          align={"center"}
          gap="12px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={settingsIcon.src}
            alt="Setting-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Settings
          </Text>
        </Flex>
        <Flex
          align={"center"}
          gap="12px"
          padding={isCollapsed ? "12px 0px" : "12px 20px"}
        >
          <Image
            w={isCollapsed ? "22px" : "16px"}
            h={isCollapsed ? "22px" : "16px"}
            src={logoutIcon.src}
            alt="Logout-icon"
          />
          <Text
            fontSize={"14px"}
            fontWeight={"medium"}
            color="#131313"
            display={isCollapsed ? "none" : "block"}
          >
            Logout
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default Sidebar;
