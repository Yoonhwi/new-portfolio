import { useCurrentSection } from "@/hooks";
import DefaultLayoutDotnav from "./default-layout-dotnav";
import DefaultLayoutHeader from "./default-layout-header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const currentSection = useCurrentSection();

  return (
    <>
      <DefaultLayoutHeader currentSection={currentSection} />
      <DefaultLayoutDotnav currentSection={currentSection} />
      {children}
    </>
  );
};

export default DefaultLayout;
