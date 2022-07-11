import { gltfMarkerList } from "./gltfMarker";
import { layerList } from "./layer";
import { multiMarkerList } from "./multiMarker";
import { transformControlList } from "./transformControl";

const gltfLayerList = {
  title: "GlLTF图层示例",
  children: [
    {
      title: "GLTFMarker示例",
      children: gltfMarkerList,
    },
    {
      title: "GLTFLayer示例",
      children: layerList,
    },
    {
      title: "MultiGLTFMarker示例",
      children: multiMarkerList,
    },
    {
      title: "TransformControl",
      children: transformControlList,
    },
  ],
};

export { gltfLayerList };
