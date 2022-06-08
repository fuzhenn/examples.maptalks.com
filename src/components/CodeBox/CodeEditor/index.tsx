import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { Container, StyledTabs } from "./style";
// import { css, cssCompletion } from "@codemirror/lang-css";
// import { getCurrentCodes, getFirstKey } from "@/utils";
import { html, htmlCompletion } from "@codemirror/lang-html";
import { useMount, useUpdateEffect } from "react-use";
import { html_beautify } from 'js-beautify';

import { observer } from "mobx-react-lite";
import { useStore } from "@/store";
import { useState } from "react";
const { TabPane } = StyledTabs;

function newline(value: string | undefined): string {
  return value ? value + "\n" : "";
}

function CodeEditor() {
  const store = useStore();

  useMount(() => {
    // const key = getFirstKey() ?? "";
    // store.setCurrentKey(key);
  });

  useUpdateEffect(() => {
    if (store.currentKey && store.isFile) {
      console.log(store.currentKey)
      const url = `./resources${store.currentKey}?__time=${new Date().getTime()}`;
      fetch(url).then(res => res.text()).then(text => {
        const html = html_beautify(text, { indent_size: 2, end_with_newline: true });
        setDoc(html);
        store.setHtmlCode(html);
      })
      // let doc = store.htmlCode;
      // doc = html_beautify(doc, { indent_size: 2, end_with_newline: true });
      // const codes = getCurrentCodes(store.currentKey);
      // if (codes.html || codes.css || codes.js) {
      //   store.setHtmlCode(newline(codes.html));
      //   store.setCssCode(newline(codes.css));
      //   store.setJsCode(newline(codes.js));
      // }
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

  //   let doc = `<!DOCTYPE html>
  //   <html>
  //   <head>
  //   <style type="text/css">
  //   ${store.cssCode}
  //   </style>
  //   <link rel="stylesheet" href="https://unpkg.com/maptalks/dist/maptalks.css">
  //   <script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
  //   <script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
  //   <script type="text/javascript" src="https://unpkg.com/@maptalks/vt/dist/maptalks.vt.js"></script>
  //   <script type="text/javascript" src="https://unpkg.com/@maptalks/gltf-layer/dist/maptalks.gltf.js"></script>
  //   <script type="text/javascript" src="https://unpkg.com/dat.gui/build/dat.gui.min.js"></script>
  //   </head>
  //   <body>
  //   ${store.htmlCode}
  //   <script>
  //   ${store.jsCode}
  //   </script>
  //   </body>
  //   </html>

  // `;
  let [doc, setDoc] = useState('');

  return (
    <Container>
      <StyledTabs defaultActiveKey="js">
        {/* <TabPane tab="js" key="js">
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
            </TabPane> */}
        <TabPane tab="HTML" key="all">
          <CodeMirror
            editable={false}
            extensions={[html(), htmlCompletion, EditorView.lineWrapping]}
            height="100%"
            theme="dark"
            value={doc}
          />
        </TabPane>
      </StyledTabs>
    </Container>
  );
}

export default observer(CodeEditor);
