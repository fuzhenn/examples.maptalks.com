import { Container, StyledTabs } from "./style";

import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { observer } from "mobx-react-lite";
import { useCodeEditor } from "./hooks";

const { TabPane } = StyledTabs;

function CodeEditor() {
  const { code, handleCodeChange } = useCodeEditor();

  return (
    <Container>
      <StyledTabs defaultActiveKey="html">
        <TabPane tab="HTML" key="html">
          <CodeMirror
            editable={true}
            extensions={[html()]}
            height="100%"
            theme="dark"
            value={code}
            onChange={handleCodeChange}
          />
        </TabPane>
      </StyledTabs>
    </Container>
  );
}

export default observer(CodeEditor);
