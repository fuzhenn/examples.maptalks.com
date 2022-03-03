import { IFrame } from "./style";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store";

function CodePreview() {
  const store = useStore();

  const doc = `<!DOCTYPE html>
  <html>
  <head>
  <style type="text/css">
  ${store.cssCode}
  </style>
  <link rel="stylesheet" href="https://unpkg.com/maptalks/dist/maptalks.css">
  <script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@maptalks/vt/dist/maptalks.vt.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@maptalks/gltf-layer/dist/maptalks.gltf.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@maptalks/geojson-bbox/dist/bbox.umd"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/dat.gui/build/dat.gui.min.js"></script>
  </head>
  <body>
  ${store.htmlCode}
  <script>
  window.onerror=(message, source, lineno, colno, error) => {
    if (message.includes("ResizeObserver")) {
      return;
    }
    document.body.innerHTML = "<div>" + message +  "</div>"
  }
  ${store.jsCode}
  </script>
  </body>
  </html>`;

  return <IFrame sandbox="allow-scripts allow-same-origin" srcDoc={doc} />;
}

export default observer(CodePreview);
