import { Grid } from "@chakra-ui/react";
import MobileViewStacksItem from "./mobile-view-stacks-item";

interface MobileViewStacksBoxProps {
  stacks: {
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

const MobileViewStacksBox = ({ stacks }: MobileViewStacksBoxProps) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
      rowGap={4}
      columnGap={8}
    >
      {stacks.map((stack) => (
        <MobileViewStacksItem
          key={stack.title}
          imgSrc={stack.imgSrc}
          alt={stack.alt}
          title={stack.title}
          description={stack.description}
        />
      ))}
    </Grid>
  );
};

export default MobileViewStacksBox;
