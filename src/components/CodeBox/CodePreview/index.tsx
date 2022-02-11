import { IFrame } from "./style";
import { observer } from "mobx-react-lite";
import { useMount } from "react-use";
import { useRef } from "react";
import { useStore } from "@/store";

function CodePreview() {
  const store = useStore();
  const iframeRef = useRef<HTMLIFrameElement>();

  window.onerror = () => {
    console.log(333);
  };

  useMount(() => {
    console.log(2222);
    iframeRef.current!.contentWindow!.onerror = () => {
      console.log(1111);
    };
    iframeRef.current!.contentWindow!.addEventListener("error", () => {
      console.log(1111);
    });
    console.log(iframeRef.current!.contentWindow);
  });

  const initial = `<!DOCTYPE html>
  <html>
  <head>
  <style type="text/css">
  ${store.cssCode}
  </style>
  <link rel="stylesheet" href="https://unpkg.com/maptalks/dist/maptalks.css">
  <script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@maptalks/gl@0.66.0/dist/maptalksgl.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@maptalks/gltf-layer@0.31.0/dist/maptalks.gltf.js"></script>
  </head>
  <body>
  ${store.htmlCode}
  <script>
  window.onerror=(message, source, lineno, colno, error) => {
    console.log(colno)
    document.body.innerHTML = "<div>" + message +  "</div>"
  }
  ${store.jsCode}
  </script>
  </body>
  </html>`;

  return <IFrame ref={iframeRef} initialContent={initial}></IFrame>;
}

export default observer(CodePreview);
