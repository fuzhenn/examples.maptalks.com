import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { Container, StyledTabs } from "./style";
import { css, cssCompletion } from "@codemirror/lang-css";
import { html, htmlCompletion } from "@codemirror/lang-html";
import { useMount, useUpdateEffect } from "react-use";

import { javascript } from "@codemirror/lang-javascript";
import { list } from "@/config";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

const { TabPane } = StyledTabs;

function CodeEditor() {
  const store = useStore();

  useMount(() => {
    store.setCurrentKey("0-0-0");
  });

  useUpdateEffect(() => {
    if (store.currentKey) {
      for (const i of list) {
        for (const j of i.children) {
          if (j.key === store.currentKey) {
            store.setHtmlCode(j.html);
            store.setCssCode(j.css);
            store.setJsCode(j.js);
          }
        }
      }
    }
  }, [store.currentKey]);

  function handleJsCodeChange(value: string) {
    store.setJsCode(value);
  }

  function handleCssCodeChange(value: string) {
    store.setCssCode(value);
  }

  function handleHtmlCodeChange(value: string) {
    store.setHtmlCode(value);
  }

  return (
    <Container>
      <StyledTabs defaultActiveKey="js">
        <TabPane tab="js" key="js">
          <CodeMirror
            extensions={[javascript(), EditorView.lineWrapping]}
            height="100%"
            theme="dark"
            value={store.jsCode}
            onChange={handleJsCodeChange}
          />
        </TabPane>
        <TabPane tab="css" key="css">
          <CodeMirror
            theme="dark"
            value={store.cssCode}
            height="100%"
            extensions={[css(), cssCompletion]}
            onChange={handleCssCodeChange}
          />
        </TabPane>
        <TabPane tab="html" key="html">
          <CodeMirror
            theme="dark"
            value={store.htmlCode}
            height="100%"
            extensions={[html(), htmlCompletion, EditorView.lineWrapping]}
            onChange={handleHtmlCodeChange}
          />
        </TabPane>
      </StyledTabs>
    </Container>
  );
}

export default observer(CodeEditor);
