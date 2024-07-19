import { useResizeOffsetTop } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  useResizeOffsetTop({ ref: contactRef, name: "CONTACT" });

  return (
    <Box bgColor={"gray"} minH={`100vh`} ref={contactRef}>
      <Text>Contact</Text>
    </Box>
  );
};

export default Contact;
