import { analysisList } from "./codes/Analysis/analysisList";
import { gltfList } from "./codes/gltflayer/gltfList";
import { threeDTilesLayerList } from "./codes/3dtilesLayer";
import { vectorLayerList } from "./codes/vectorLayer";
import { videoLayerList } from "./codes/videoLayer/videoLayerList";
import { vtLayerList } from "./codes/vtlayer";
import { weatherList } from "./codes/Weather/weatherList";

interface IListItem {
  title: string;
  key?: string;
  html?: string;
  css?: string;
  js?: string;
  href?: string;
  children?: IListItem[];
}

const baseList: IListItem[] = [
  ...vtLayerList,
  ...vectorLayerList,
  gltfList,
  videoLayerList,
  analysisList,
  weatherList,
  ...threeDTilesLayerList,
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
