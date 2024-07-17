import DefaultLayoutHeader from "./default-layout-header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <DefaultLayoutHeader />
      {children}
    </>
  );
};

export default DefaultLayout;
