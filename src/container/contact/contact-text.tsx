import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";

const contactItems = [
  { name: "Phone", icon: FaPhone, text: "010. 5045. 9248" },
  { name: "Email", icon: MdEmail, text: "ush0105@naver.com" },
  { name: "Github", icon: FaGithub, text: "https://github.com/Yoonhwi" },
  { name: "Blog", icon: FaBlog, text: "https://winhwi.tistory.com" },
];

const ContactText = () => {
  return (
    <Flex direction={"column"} gap={4}>
      {contactItems.map((item) => {
        return (
          <Flex alignItems={"center"} gap={2} key={item.name}>
            <Flex
              borderRadius={4}
              overflow={"hidden"}
              bgColor={"whiteAlpha.300"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Icon as={item.icon} fontSize={20} color={"white"} />
            </Flex>
            <Flex gap={4}>
              <Text fontSize={20} minW={"70px"}>
                {item.name}
              </Text>
              <Text position={"relative"} top={"2px"} fontWeight={"bold"}>
                :
              </Text>
              <Text fontSize={20}>{item.text}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ContactText;
