import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { Container, StyledTabs } from "./style";
import { css, cssCompletion } from "@codemirror/lang-css";
import { getCurrentCodes, getFirstKey } from "@/utils";
import { html, htmlCompletion } from "@codemirror/lang-html";
import { useMount, useUpdateEffect } from "react-use";

import { javascript } from "@codemirror/lang-javascript";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

const { TabPane } = StyledTabs;

const JS_POSTFIX = '\n\n\n\n\n\n\n\n\n\n\n\n';

function CodeEditor() {
  const store = useStore();

  useMount(() => {
    const key = getFirstKey() ?? "";
    store.setCurrentKey(key);
  });

  useUpdateEffect(() => {
    if (store.currentKey) {
      const codes = getCurrentCodes(store.currentKey);
      if (codes.html || codes.css || codes.js) {
        store.setHtmlCode(codes.html ?? "");
        store.setCssCode(codes.css ?? "");
        store.setJsCode(codes.js ? codes.js + JS_POSTFIX : "");
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
