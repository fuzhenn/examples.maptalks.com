import { addMarkerCodes } from "./codes/gltflayer/add-marker";
import { addToGltfLayerCodes } from "./codes/gltfmarker/addto-gltflayer";
import { clearLayerCodes } from "./codes/gltflayer/clear-layer";
import { addVtLayerCodes } from "./codes/vtlayer/layer-operation/add-vtlayer";
import { loadLocalGeoDataCodes } from "./codes/vtlayer/layer-operation/load-local-geo";
import { setLayerVisibleCodes } from "./codes/vtlayer/layer-operation/set-layer-visible";
import { removeLayerCodes } from "./codes/vtlayer/layer-operation/remove-layer";
import { loadRemoteGeoDataCodes } from "./codes/vtlayer/layer-operation/load-remote-geo";
import { convertedGeoDataCodes } from "./codes/vtlayer/layer-operation/convert-geo";
import { setLayerZoomBoundaryCodes } from "./codes/vtlayer/layer-operation/set-zoom-boundary";
import { setLayerZoomAccessCodes } from "./codes/vtlayer/layer-operation/set-zoom-access";
import { convertCoordinateCodes } from "./codes/vtlayer/layer-operation/convert-coordinate";
import { defaultVtStyleCodes } from "./codes/vtlayer/layer-style/default-style";
import { setVtStyleCodes } from "./codes/vtlayer/layer-style/set-style";
import { filterDataStyleCodes } from "./codes/vtlayer/layer-style/filter-data";
import { updateRenderStyleCodes } from "./codes/vtlayer/layer-style/update-style";
import { updateDataConfigCodes } from "./codes/vtlayer/layer-style/update-dataConfig";

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
  {
    title: "矢量瓦片图层",
    children: [
      {
        title: "图层操作",
        children: [
          {
            title: "添加一个矢量瓦片图层",
            html: addVtLayerCodes.html,
            css: addVtLayerCodes.css,
            js: addVtLayerCodes.js,
          },
          {
            title: "载入GeoJSON对象数据",
            html: loadLocalGeoDataCodes.html,
            css: loadLocalGeoDataCodes.css,
            js: loadLocalGeoDataCodes.js,
          },
          {
            title: "载入远程GeoJSON数据",
            html: loadRemoteGeoDataCodes.html,
            css: loadRemoteGeoDataCodes.css,
            js: loadRemoteGeoDataCodes.js,
          },
          {
            title: "转换函数把远程JSON数据转成GeoJSON",
            html: convertedGeoDataCodes.html,
            css: convertedGeoDataCodes.css,
            js: convertedGeoDataCodes.js,
          },
          {
            title: "设置图层的最大和最小级别",
            html: setLayerZoomBoundaryCodes.html,
            css: setLayerZoomBoundaryCodes.css,
            js: setLayerZoomBoundaryCodes.js,
          },
          {
            title: "设置图层的最大可访问级别",
            html: setLayerZoomAccessCodes.html,
            css: setLayerZoomAccessCodes.css,
            js: setLayerZoomAccessCodes.js,
          },
          {
            title: "隐藏显示图层",
            html: setLayerVisibleCodes.html,
            css: setLayerVisibleCodes.css,
            js: setLayerVisibleCodes.js,
          },
          {
            title: "移除图层",
            html: removeLayerCodes.html,
            css: removeLayerCodes.css,
            js: removeLayerCodes.js,
          },
          {
            title: "坐标系转换",
            html: convertCoordinateCodes.html,
            css: convertCoordinateCodes.css,
            js: convertCoordinateCodes.js,
          },
        ],
      },
      {
        title: "图层样式",
        children: [
          {
            title: "图层默认样式",
            html: defaultVtStyleCodes.html,
            css: defaultVtStyleCodes.css,
            js: defaultVtStyleCodes.js,
          },
          {
            title: "设置图层样式",
            html: setVtStyleCodes.html,
            css: setVtStyleCodes.css,
            js: setVtStyleCodes.js,
          },
          {
            title: "只显示符合条件的数据",
            html: filterDataStyleCodes.html,
            css: filterDataStyleCodes.css,
            js: filterDataStyleCodes.js,
          },
          {
            title: "更新渲染插件样式",
            html: updateRenderStyleCodes.html,
            css: updateRenderStyleCodes.css,
            js: updateRenderStyleCodes.js,
          },
          {
            title: "更新渲染插件的dataConfig",
            html: updateDataConfigCodes.html,
            css: updateDataConfigCodes.css,
            js: updateDataConfigCodes.js,
          },
          {
            title: "更新渲染插件的sceneConfig",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "移除图层样式",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "压缩图层样式数据",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "单独隐藏Feature",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "单独设置Feature的样式",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "更新Feature的样式",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "更新Feature渲染插件的dataConfig",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "更新Feature渲染插件的sceneConfig",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "整体放大图标和文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "点的样式",
        children: [
          {
            title: "组合多个图标",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "组合图标和文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "图标随地图级别缩放大小",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "文字随地图级别缩放大小",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "跟随地图倾斜的图标和文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "跟随地图旋转的图标和文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "只在指定的级别上显示",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "不同属性显示不同的图标",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "从属性数据中读取图标",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "从属性数据中读取文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "开启和关闭碰撞检测",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "跨图层的碰撞检测",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "线的样式",
        children: [
          {
            title: "宽度随地图级别缩放",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "颜色随地图级别变化",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "从属性数据中读取颜色",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "设置纹理",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "纹理动画",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "开启泛光",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "沿线绘制文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "三维线样式",
        children: [
          {
            title: "设置纹理",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "设置高度",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "面的样式",
        children: [
          {
            title: "设置纹理",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "纹理动画",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "设置高度",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "从属性数据中读取颜色",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "在面上绘制文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "开启泛光",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "三维面的样式",
        children: [
          {
            title: "设置高度",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "高度和侧面设置不同的纹理",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "顶部纹理与顶面朝向一致",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "隐藏顶面的围栏",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "透明度渐变围栏",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "三维面的进场动画",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "面的水面效果",
        children: [
          {
            title: "水面绘制并开启倒影",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "抬升水面高度",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "水面上绘制文字",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
      },
      {
        title: "图层交互",
        children: [
          {
            title: "高亮所有数据",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "高亮指定渲染插件的数据",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "单独高亮Feature",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "查询给定坐标上的数据",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "查询给定屏幕坐标上的数据",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
          {
            title: "鼠标点选数据",
            html: addToGltfLayerCodes.html,
            css: addToGltfLayerCodes.css,
            js: addToGltfLayerCodes.js,
          },
        ],
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
