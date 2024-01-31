import React from "react";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import arrowIcon from "../../../assets/dashboard/arrow-icon.png";
import arrowRight from "../../../assets/dashboard/arrow-right.png";
import widget from "../../../assets/dashboard/widget.png";

function DashboardContentTop() {
  return (
    <Flex width={"100%"} justify={"space-evenly"} flexWrap={"wrap"}>
      <Stack w={"40%"} px="15px" py="10px" minW={"150px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Revenues
        </Text>
        <Flex mt="15px" align={"center"} gap="8px">
          <Text fontSize={"48px"} fontWeight={"medium"}>
            {"15%"}
          </Text>
          <Image w="32px" h="32px" src={arrowIcon.src} alt="Arrow" />
        </Flex>
        <Text fontSize={"14px"} mt="-5px">
          Increase compared to last week
        </Text>
        <Flex mt="40px" align={"center"} gap="4px">
          <Text fontSize={"14px"} color="#734A00">
            Revenues report
          </Text>
          <Image w="14px" h="14px" src={arrowRight.src} alt="Arrow-Right" />
        </Flex>
      </Stack>
      <Stack w={"40%"} px="15px" py="10px" minW="150px">
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Lost deals
        </Text>
        <Flex mt="15px" align={"center"} gap="8px">
          <Text fontSize={"48px"} fontWeight={"medium"}>
            {"4%"}
          </Text>
          {/* <Image w="32px" h="32px" src={arrowIcon.src} alt="Arrow" /> */}
        </Flex>
        <Text fontSize={"14px"} mt="-5px">
          You closed 96 out of 100 deals
        </Text>
        <Flex mt="40px" align={"center"} gap="4px">
          <Text fontSize={"14px"} color="#734A00">
            All deals
          </Text>
          <Image w="14px" h="14px" src={arrowRight.src} alt="Arrow-Right" />
        </Flex>
      </Stack>
      <Stack w={"20%"} px="15px" py="10px" minW={"200px"}>
        <Image src={widget.src} alt="Widget" />
      </Stack>
    </Flex>
  );
}

export default DashboardContentTop;
