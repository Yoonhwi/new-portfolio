import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";

const Contact = () => {
  const { registerSection } = useSection();

  return (
    <Box
      bgColor={"gray"}
      minH={`100vh`}
      ref={(el) => {
        if (!el) return;
        registerSection("CONTACT", el);
      }}
    >
      <Text>Contact</Text>
    </Box>
  );
};

export default Contact;
