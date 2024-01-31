import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import avatar from "../../../assets/dashboard/avatar.png";
import widget from "../../../assets/dashboard/widget-2.png";
import addIcon from "../../../assets/dashboard/add-icon.png";

function DashboardContentBottom() {
  return (
    <Flex w="100%" flexWrap={"wrap"} justify={"space-evenly"}>
      <Stack w={["90%", "60%", "30%"]} p="20px" minW="250px">
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Chats
        </Text>
        <Text>2 unread messages</Text>
        <Flex w="100%" my="10px" gap="8px">
          <Flex p="10px" borderRadius={"16px"} bg="#FFF7E8">
            <Image
              w="32px"
              h="32px"
              src={avatar.src}
              alt="Avatar"
              minW={"32px"}
            />
          </Flex>
          <Flex p="10px" borderRadius={"16px"} bg="#FFF7E8">
            <Image
              w="32px"
              h="32px"
              src={avatar.src}
              alt="Avatar"
              minW={"32px"}
            />
          </Flex>
          <Flex p="10px" borderRadius={"16px"}>
            <Image
              w="32px"
              h="32px"
              src={avatar.src}
              alt="Avatar"
              minW={"32px"}
            />
          </Flex>
          <Flex p="10px" borderRadius={"16px"}>
            <Image
              w="32px"
              h="32px"
              src={avatar.src}
              alt="Avatar"
              minW={"32px"}
            />
          </Flex>
        </Flex>
      </Stack>
      <Stack w={["90%", "60%", "30%"]} p="20px" minW="200px">
        <Image src={widget.src} alt="Widget" />
      </Stack>
      <Stack w={["90%", "70%", "60%", "40%"]} p="20px" minW="200px">
        <Text fontWeight={"bold"} fontSize={"20px"} mb="10px">
          New deals
        </Text>
        <Flex flexWrap={"wrap"}>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
          <Flex
            align={"center"}
            gap="8px"
            p="12px 16px"
            bg="#FFF7E8"
            borderRadius={"16px"}
            m="5px"
          >
            <Image w="24px" h="24px" src={addIcon.src} alt="Add-icon" />
            <Text fontSize={"14px"}>Fruit2Go</Text>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default DashboardContentBottom;
