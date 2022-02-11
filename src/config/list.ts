import { addMarkerCodes } from "./codes/gltflayer/add-marker";
import { addToGltfLayerCodes } from "./codes/gltfmarker/addto-gltflayer";
import { clearLayerCodes } from "./codes/gltflayer/clear-layer";

const list = [
  {
    title: "Gltf图层示例",
    key: "0-0",
    children: [
      {
        title: "添加模型",
        key: "0-0-0",
        html: addMarkerCodes.html,
        css: addMarkerCodes.css,
        js: addMarkerCodes.js,
      },
      {
        title: "清除图层",
        key: "0-0-1",
        html: clearLayerCodes.html,
        css: clearLayerCodes.css,
        js: clearLayerCodes.js,
      },
    ],
  },
  {
    title: "Gltf Marker示例",
    key: "0-1",
    children: [
      {
        title: "添加到图层",
        key: "0-1-0",
        html: addToGltfLayerCodes.html,
        css: addToGltfLayerCodes.css,
        js: addToGltfLayerCodes.js,
      },
    ],
  },
];

export { list };
