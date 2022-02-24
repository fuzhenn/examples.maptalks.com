import { layerOperationList } from "./layer-operation";
import { layerStyleList } from "./layer-style";
import { lineStyleList } from "./line-style";
import { threeDLineStyleList } from "./3dLine-style";

export const vtLayerList = [
  {
    title: "矢量瓦片图层",
    children: [
      {
        title: "图层操作",
        children: layerOperationList,
      },
      {
        title: "图层样式",
        children: layerStyleList,
      },
      {
        title: "点的样式",
        children: [
          {
            title: "组合多个图标",
          },
          {
            title: "组合图标和文字",
          },
          {
            title: "图标随地图级别缩放大小",
          },
          {
            title: "文字随地图级别缩放大小",
          },
          {
            title: "跟随地图倾斜的图标和文字",
          },
          {
            title: "跟随地图旋转的图标和文字",
          },
          {
            title: "只在指定的级别上显示",
          },
          {
            title: "不同属性显示不同的图标",
          },
          {
            title: "从属性数据中读取图标",
          },
          {
            title: "从属性数据中读取文字",
          },
          {
            title: "开启和关闭碰撞检测",
          },
          {
            title: "跨图层的碰撞检测",
          },
        ],
      },
      {
        title: "线的样式",
        children: lineStyleList,
      },
      {
        title: "三维线样式",
        children: threeDLineStyleList,
      },
      {
        title: "面的样式",
        children: [
          {
            title: "设置纹理",
          },
          {
            title: "纹理动画",
          },
          {
            title: "设置高度",
          },
          {
            title: "从属性数据中读取颜色",
          },
          {
            title: "在面上绘制文字",
          },
          {
            title: "开启泛光",
          },
        ],
      },
      {
        title: "三维面的样式",
        children: [
          {
            title: "设置高度",
          },
          {
            title: "高度和侧面设置不同的纹理",
          },
          {
            title: "顶部纹理与顶面朝向一致",
          },
          {
            title: "隐藏顶面的围栏",
          },
          {
            title: "透明度渐变围栏",
          },
          {
            title: "三维面的进场动画",
          },
        ],
      },
      {
        title: "面的水面效果",
        children: [
          {
            title: "水面绘制并开启倒影",
          },
          {
            title: "抬升水面高度",
          },
          {
            title: "水面上绘制文字",
          },
        ],
      },
      {
        title: "图层交互",
        children: [
          {
            title: "高亮所有数据",
          },
          {
            title: "高亮指定渲染插件的数据",
          },
          {
            title: "单独高亮Feature",
          },
          {
            title: "查询给定坐标上的数据",
          },
          {
            title: "查询给定屏幕坐标上的数据",
          },
          {
            title: "鼠标点选数据",
          },
        ],
      },
    ],
  },
];
