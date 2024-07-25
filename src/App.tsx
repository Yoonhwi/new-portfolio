import { About, Contact, Intro, Project, Stacks } from "@/container";
import { DefaultLayout } from "@/components";

function App() {
  return (
    <DefaultLayout>
      <Intro />
      <About />
      <Stacks />
      <Project />
      <Contact />
    </DefaultLayout>
  );
}

export default App;
