import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";

const Contact = () => {
  const { registerSection } = useSection();

  const contactRef = useRef<HTMLDivElement>(null);

  const updateSection = useCallback(() => {
    const el = contactRef.current;
    if (!el) return;
    registerSection("CONTACT", el);
  }, [registerSection]);

  useEffect(() => {
    updateSection();
  }, [updateSection]);

  return (
    <Box bgColor={"gray"} minH={`100vh`} ref={contactRef}>
      <Text>Contact</Text>
    </Box>
  );
};

export default Contact;
