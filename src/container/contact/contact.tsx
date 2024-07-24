import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Contact = () => {
  const { registerSection } = useSection();

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    registerSection("CONTACT", el);
  }, [registerSection]);

  return (
    <Box bgColor={"gray"} minH={`100vh`} ref={contactRef}>
      <Text>Contact</Text>
    </Box>
  );
};

export default Contact;
