import { LinkProject, RowTag } from "@/components";
import { ProjectData } from "@/constants";
import { Flex, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import ProjectDrawer from "./project-drawer";

interface ProjectItemProps {
  data: ProjectData;
}
const ProjectItem = ({ data }: ProjectItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex gap={6} direction={"column"} maxW={{ base: "100%", lg: "800px" }}>
      <Image src={data.imgSrc} maxH={"400px"} />
      <Heading size={"lg"}>{data.name}</Heading>

      <Flex direction={"column"} gap={1}>
        {data.description.map((desc, index) => (
          <Text key={`desc_${index}`}>{desc}</Text>
        ))}
      </Flex>

      <RowTag tags={data.tags} />
      <LinkProject onOpen={onOpen} link={data.link} />

      <ProjectDrawer
        isOpen={isOpen}
        onClose={onClose}
        data={{ name: data.name, drawerContent: data.drawerContent }}
      />
    </Flex>
  );
};

export default ProjectItem;
