import CodeEditor from "./CodeEditor";
import CodePreview from "./CodePreview";
import { Container } from "./style";

function CodeBox() {
  return (
    <Container>
      <CodeEditor />
      <CodePreview />
    </Container>
  );
}

export default CodeBox;
