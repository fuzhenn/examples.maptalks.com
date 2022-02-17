import { addMarkerCodes } from "./codes/gltflayer/add-marker";
import { addToGltfLayerCodes } from "./codes/gltfmarker/addto-gltflayer";
import { clearLayerCodes } from "./codes/gltflayer/clear-layer";

interface IListItem {
  title: string;
  key?: string;
  html?: string;
  css?: string;
  js?: string;
  children?: IListItem[];
}

const baseList: IListItem[] = [
  {
    title: "Gltf图层示例",
    children: [
      {
        title: "添加模型",
        html: addMarkerCodes.html,
        css: addMarkerCodes.css,
        js: addMarkerCodes.js,
      },
      {
        title: "清除图层",
        html: clearLayerCodes.html,
        css: clearLayerCodes.css,
        js: clearLayerCodes.js,
      },
    ],
  },
  {
    title: "Gltf Marker示例",
    children: [
      {
        title: "添加到图层",
        html: addToGltfLayerCodes.html,
        css: addToGltfLayerCodes.css,
        js: addToGltfLayerCodes.js,
      },
    ],
  },
];

// 生成 key 值
function getList(list: IListItem[]) {
  list.forEach((item1, index1) => {
    item1.key = `${index1}`;
    if (item1.children) {
      item1.children.forEach((item2, index2) => {
        item2.key = `${index1}-${index2}`;
        if (item2.children) {
          item2.children.forEach((item3, index3) => {
            item3.key = `${index1}-${index2}-${index3}`;
          });
        }
      });
    }
  });
  return list;
}

const list = getList(baseList);

export { list };
