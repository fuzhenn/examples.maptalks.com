import { CodeBox, SideBar, Title } from "./components";
import { Container, Content } from "./style";

function App() {
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
