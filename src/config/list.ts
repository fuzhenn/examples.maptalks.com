import { analysisList } from "./analysis";
import { gltfLayerList } from "./gltfLayer";
import { threeDTilesLayerList } from "./3DTilesLayer";
import { vectorLayerList } from "./vectorLayer";
import { videoLayerList } from "./videoLayer";
import { vtLayerList } from "./vtlayer";
import { weatherList } from "./Weather";

interface IListItem {
  title: string;
  key?: string;
  path?: string;
  href?: string;
  children?: IListItem[];
}

const baseList: IListItem[] = [
  vtLayerList,
  vectorLayerList,
  gltfLayerList,
  videoLayerList,
  analysisList,
  weatherList,
  threeDTilesLayerList,
  {
    title: "THREE图层插件",
    href: "https://github.com/maptalks/maptalks.three",
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
