import { LinkProject, RowTag } from "@/components";
import { portfolioData } from "@/constants";
import { Flex, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import ProjectDrawer from "./project-drawer";

const ProjectPortfolio = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex gap={6} direction={"column"} maxW={"800px"}>
      <Image src={"./img/project_portfolio1.png"} maxH={"400px"} />
      <Heading size={"lg"}>{portfolioData.name}</Heading>

      <Flex direction={"column"} gap={1}>
        {portfolioData.description.map((desc, index) => (
          <Text key={`desc_${index}`}>{desc}</Text>
        ))}
      </Flex>

      <RowTag tags={portfolioData.tags} />
      <LinkProject onOpen={onOpen} />

      <ProjectDrawer
        isOpen={isOpen}
        onClose={onClose}
        data={{ name: "Winhwi's Portfolio" }}
      />
    </Flex>
  );
};

export default ProjectPortfolio;
