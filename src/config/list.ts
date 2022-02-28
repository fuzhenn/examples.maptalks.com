import { gltfList } from "./codes/gltflayer/gltfList";
import { vectorLayerList } from "./codes/vectorLayer";
import { videoLayerList } from "./codes/videoLayer/videoLayerList";
import { vtLayerList } from "./codes/vtlayer";

interface IListItem {
  title: string;
  key?: string;
  html?: string;
  css?: string;
  js?: string;
  children?: IListItem[];
}

const baseList: IListItem[] = [
  gltfList,
  videoLayerList,
  ...vtLayerList,
  ...vectorLayerList,
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
