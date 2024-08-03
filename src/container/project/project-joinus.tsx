import { RowTag, LinkProject } from "@/components";
import { joinusData } from "@/constants";
import { useDisclosure, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ProjectDrawer from "./project-drawer";

const ProjectJoinus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex gap={6} direction={"column"} maxW={"800px"}>
      <Image src={"./img/project_joinus1.png"} maxH={"400px"} />
      <Heading size={"lg"}>{joinusData.name}</Heading>

      <Flex direction={"column"} gap={1}>
        {joinusData.description.map((desc, index) => (
          <Text key={`desc_${index}`}>{desc}</Text>
        ))}
      </Flex>

      <RowTag tags={joinusData.tags} />
      <LinkProject onOpen={onOpen} />

      <ProjectDrawer
        isOpen={isOpen}
        onClose={onClose}
        data={{ name: "Join-us" }}
      />
    </Flex>
  );
};

export default ProjectJoinus;
