import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import logo from "../../assets/dashboard/logo.png";
import hamburgerIcon from "../../assets/dashboard/hamburger-icon.jpg";
import searchIcon from "../../assets/dashboard/search-icon.png";
import dashboardIcon from "../../assets/dashboard/dashboard-icon.png";
import logoMark from "../../assets/dashboard/logoMark.png";
import avatar from "../../assets/dashboard/avatar.png";
import collapseIcon from "../../assets/dashboard/collapse-icon.png";
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
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image w={"180px"} src={logo.src} alt="OrangeFarm" />
          </DrawerHeader>

          <DrawerBody>
            <Stack w="100%" p="20px">
              <Flex
                mt="5px"
                border={"1px solid #F1F1F1"}
                gap="8px"
                align={"center"}
                borderRadius={"20px"}
                padding={"12px 20px"}
              >
                <Image
                  w={"12px"}
                  h={"12px"}
                  src={searchIcon.src}
                  alt="Search"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color={"#7D7D7D"}>
                  Search
                </Text>
              </Flex>
              <Flex align={"center"} gap="8px" padding={"12px 20px"}>
                <Image
                  w={"16px"}
                  h={"16px"}
                  src={dashboardIcon.src}
                  alt="Dashboard-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Dashboard
                </Text>
              </Flex>
              <Flex
                w="100%"
                justify={"space-between"}
                align={"center"}
                p="12px 20px"
              >
                <Flex align={"center"} gap="8px">
                  <Image
                    w="16px"
                    h="16px"
                    src={customersIcon.src}
                    alt="Customers-icon"
                  />
                  <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                    Customers
                  </Text>
                </Flex>
                <Image w="16px" h="16px" src={closedIcon.src} alt="Closed" />
              </Flex>
              <Flex align={"center"} gap="8px" p="12px 20px">
                <Image
                  w="16px"
                  h="16px"
                  src={reportIcon.src}
                  alt="Report-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  All reports
                </Text>
              </Flex>
              <Flex align={"center"} gap="8px" p="12px 20px">
                <Image
                  w="16px"
                  h="16px"
                  src={geographyIcon.src}
                  alt="Geography-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Geography
                </Text>
              </Flex>
              <Flex align={"center"} gap="8px" p="12px 20px">
                <Image
                  w="16px"
                  h="16px"
                  src={conversationsIcon.src}
                  alt="Conversations-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Conversations
                </Text>
              </Flex>
              <Flex align={"center"} gap="8px" p="12px 20px">
                <Image w="16px" h="16px" src={dealsIcon.src} alt="Deals-icon" />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Deals
                </Text>
              </Flex>
              <Flex align={"center"} gap="8px" p="12px 20px">
                <Image
                  w="16px"
                  h="16px"
                  src={exportIcon.src}
                  alt="Export-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Export
                </Text>
              </Flex>
              <Flex align={"center"} gap="12px" p="12px 20px" mt="40px">
                <Image w="32px" h="32px" src={avatar.src} alt="Avatar" />
                <Stack gap="4px">
                  <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                    Gustavo Xavier
                  </Text>
                  <Flex
                    fontSize={"10px"}
                    bg="#FFCD71"
                    borderRadius={"24px"}
                    padding={"0px 6px"}
                    w="45px"
                  >
                    Admin
                  </Flex>
                </Stack>
              </Flex>
              <Flex align={"center"} gap="12px" p="12px 20px">
                <Image
                  w="16px"
                  h="16px"
                  src={settingsIcon.src}
                  alt="Setting-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Settings
                </Text>
              </Flex>
              <Flex align={"center"} gap="12px" p="12px 20px">
                <Image
                  w="16px"
                  h="16px"
                  src={logoutIcon.src}
                  alt="Logout-icon"
                />
                <Text fontSize={"14px"} fontWeight={"medium"} color="#131313">
                  Logout
                </Text>
              </Flex>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        w="100%"
        display={["flex", "flex", "none"]}
        gap="10px"
        align={"center"}
      >
        <Image
          w={"40px"}
          h="37px"
          src={hamburgerIcon.src}
          alt="Hamburger"
          ref={btnRef}
          onClick={onOpen}
        />
        <Image w={"180px"} src={logo.src} alt="OrangeFarm" />
      </Flex>
    </>
  );
}

export default Navbar;
