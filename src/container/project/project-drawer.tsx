import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";

interface PortfolioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    drawerContent: () => JSX.Element;
  };
}

const ProjectDrawer = ({ isOpen, onClose, data }: PortfolioDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
      <DrawerOverlay />
      <DrawerContent maxW={"992px"}>
        <DrawerCloseButton />
        <DrawerHeader>{data?.name}</DrawerHeader>
        <DrawerBody overflowY={"auto"}>{data.drawerContent()}</DrawerBody>
        <DrawerFooter>
          <Button onClick={onClose}>close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDrawer;
