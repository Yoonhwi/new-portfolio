import { About, Contact, Intro, Project } from "@/container";
import { DefaultLayout } from "@/components";

function App() {
  return (
    <DefaultLayout>
      <Intro />
      <About />
      <Project />
      <Contact />
    </DefaultLayout>
  );
}

export default App;
