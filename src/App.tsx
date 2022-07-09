import { CodeBox, SideBar, Title } from "./components";
import { Container, Content } from "./style";

import { useMount } from "react-use";

function App() {
  useMount(() => {
    console.log(123);
  });

  return (
    <Container>
      <Title />
      <Content>
        <SideBar />
        <CodeBox />
      </Content>
    </Container>
  );
}

export default App;
