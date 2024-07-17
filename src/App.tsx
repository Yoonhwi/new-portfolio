import { Contact, Home, Project } from "@/container";
import DefaultLayout from "./components/layouts/default-layout/default-layout";

function App() {
  return (
    <DefaultLayout>
      <Home />
      <Project />
      <Contact />
    </DefaultLayout>
  );
}

export default App;
