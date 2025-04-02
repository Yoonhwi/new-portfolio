import { Box, Flex } from "@chakra-ui/react";
import { EmblaViewportRefType } from "embla-carousel-react";
import ProjectItem from "./project-item";
import {
  calendarData,
  cookaData,
  joinusData,
  portfolioData,
} from "@/constants";

interface ProjectCarouselProps {
  emblaRef: EmblaViewportRefType;
}

const projectItems = [
  <ProjectItem data={portfolioData} />,
  <ProjectItem data={joinusData} />,
  <ProjectItem data={calendarData} />,
  <ProjectItem data={cookaData} />,
];

const ProjectCarousel = ({ emblaRef }: ProjectCarouselProps) => {
  return (
    <Box>
      <Box overflow={"hidden"} ref={emblaRef}>
        <Flex>
          {projectItems.map((el, index) => {
            return (
              <Box key={`project_${index}`} minW={"100%"}>
                {el}
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCarousel;
