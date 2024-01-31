import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import closedIcon from "../../../assets/dashboard/closed-icon.png";
import avatar from "../../../assets/dashboard/avatar.png";
import chatIcon from "../../../assets/dashboard/chat-icon.png";
import starIcon from "../../../assets/dashboard/star-icon.png";
import penIcon from "../../../assets/dashboard/pen-icon.png";
import dotsIcon from "../../../assets/dashboard/dots-icon.png";
import line from "../../../assets/dashboard/line.png";
import growthImg from "../../../assets/dashboard/growth-img.png";

function DashboardContentMiddle() {
  return (
    <Flex w="100%" mt="30px" flexWrap={"wrap"} justify={"space-evenly"}>
      <Stack
        w={["100%", "100%", "45%"]}
        px="5px"
        py="10px"
        minW={["200px", "400px"]}
        mx="10px"
      >
        <Flex w="100%" justify={"space-between"} align={"center"} px="20px">
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Customers
          </Text>
          <Flex align={"center"} gap={"4px"} display={["none", "flex"]}>
            <Text fontSize={"14px"}>
              Sort by <span style={{ fontWeight: "bold" }}>Newest</span>
            </Text>
            <Image w="14px" h="14px" src={closedIcon.src} alt="Closed" />
          </Flex>
        </Flex>
        <Stack w="100%" py="8px">
          <Flex w="100%" px="20px" py="10px" align={"center"} gap={"12px"}>
            <Image w="32px" h="32px" src={avatar.src} alt="Avatar" />
            <Stack>
              <Text fontSize={"14px"} fontWeight={"medium"}>
                Chris Friedkly
              </Text>
              <Text fontSize={"14px"} mt="-10px">
                Supermarket Villanova
              </Text>
            </Stack>
          </Flex>
          <Flex
            w="100%"
            px="20px"
            py="10px"
            align={"center"}
            gap={"12px"}
            bg="#FFF7E8"
            borderRadius={"16px"}
            position={"relative"}
          >
            <Image w="32px" h="32px" src={avatar.src} alt="Avatar" />
            <Stack>
              <Text fontSize={"14px"} fontWeight={"medium"}>
                Maggie Johnson
              </Text>
              <Text fontSize={"14px"} mt="-10px">
                Oasis Organic Inc.
              </Text>
            </Stack>
            <Flex
              position="absolute"
              right={"20px"}
              w="150px"
              justify={"space-evenly"}
              display={["none", "flex"]}
            >
              <Image w="16px" h="16px" src={chatIcon.src} alt="Chat" />
              <Image w="16px" h="16px" src={starIcon.src} alt="Star" />
              <Image w="16px" h="16px" src={penIcon.src} alt="Pen" />
              <Image h="16px" src={line.src} alt="Line" />
              <Image w="16px" h="16px" src={dotsIcon.src} alt="Dots" />
            </Flex>
          </Flex>
          <Flex w="100%" px="20px" py="10px" align={"center"} gap={"12px"}>
            <Image w="32px" h="32px" src={avatar.src} alt="Avatar" />
            <Stack>
              <Text fontSize={"14px"} fontWeight={"medium"}>
                Gael Harry
              </Text>
              <Text fontSize={"14px"} mt="-10px">
                New York Finest Fruits
              </Text>
            </Stack>
          </Flex>
          <Flex w="100%" px="20px" py="10px" align={"center"} gap={"12px"}>
            <Image w="32px" h="32px" src={avatar.src} alt="Avatar" />
            <Stack>
              <Text fontSize={"14px"} fontWeight={"medium"}>
                Jenna Sullivan
              </Text>
              <Text fontSize={"14px"} mt="-10px">
                Walmart
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
      <Stack
        w={["100%", "100%", "45%"]}
        px="5px"
        py="10px"
        minW={["200px", "400px"]}
        mx="10px"
      >
        <Flex w="100%" justify={"space-between"} align={"center"} px="20px">
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Growth
          </Text>
          <Flex align={"center"} gap={"4px"} display={["none", "flex"]}>
            <Text fontSize={"14px"}>Yearly</Text>
            <Image w="14px" h="14px" src={closedIcon.src} alt="Closed" />
          </Flex>
        </Flex>
        <Image src={growthImg.src} alt="Growth" w="100%" mt="20px" />
        <Flex width={"100%"} justify={"space-evenly"} flexWrap={"wrap"}>
          <Stack w={"30%"} px="15px" py="10px" minW={"150px"}>
            <Text fontWeight={"bold"} fontSize={"16px"} color={"#7D7D7D"}>
              Top Month
            </Text>
            <Flex mt="15px" align={"center"} gap="8px">
              <Text fontSize={"24px"} fontWeight={"bold"} color={"#734A00"}>
                November
              </Text>
            </Flex>
            <Text
              fontSize={"16px"}
              fontWeight={"medium"}
              mt="-5px"
              color={"#FFA500"}
            >
              2019
            </Text>
          </Stack>
          <Stack w={"30%"} px="15px" py="10px" minW={"150px"}>
            <Text fontWeight={"bold"} fontSize={"16px"} color={"#7D7D7D"}>
              Top year
            </Text>
            <Flex mt="15px" align={"center"} gap="8px">
              <Text fontSize={"24px"} fontWeight={"bold"} color={"#734A00"}>
                2023
              </Text>
            </Flex>
            <Text fontSize={"16px"} fontWeight={"medium"} mt="-5px">
              96k sold so far
            </Text>
          </Stack>
          <Stack w={"30%"} px="15px" py="10px" minW={"150px"}>
            <Text fontWeight={"bold"} fontSize={"16px"} color={"#7D7D7D"}>
              Top buyer
            </Text>
            {/* <Flex mt="15px" align={"center"} gap="8px">
              <Text fontSize={"24px"} fontWeight={"bold"}>
                2023
              </Text>
            </Flex>
            <Text fontSize={"16px"} fontWeight={"medium"} mt="-5px">
              96k sold so far
            </Text> */}
            <Image src={avatar.src} alt="Avatar" w="32px" h="32px" mt="10px" />
            <Text fontWeight={"medium"} fontSize={"12px"}>
              Maggie Johnson
            </Text>
            <Text fontSize={"10px"} mt="-8px">
              Oasis Organic Inc.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default DashboardContentMiddle;
