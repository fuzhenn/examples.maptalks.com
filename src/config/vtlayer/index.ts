import { layerInteractionList } from "./layerInteraction";
import { layerOperationList } from "./layerOperation";
import { layerStyleList } from "./layerStyle";
import { lineStyleList } from "./lineStyle";
import { pointStyleList } from "./pointStyle";
import { polygonStyleList } from "./polygonStyle";
import { threeDLineStyleList } from "./3dLineStyle";
import { threeDPolygonStyleList } from "./3dPolygonStyle";
import { waterStyleList } from "./waterStyle";

export const vtLayerList = {
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
      children: pointStyleList,
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
      children: polygonStyleList,
    },
    {
      title: "三维面的样式",
      children: threeDPolygonStyleList,
    },
    {
      title: "面的水面效果",
      children: waterStyleList,
    },
    {
      title: "图层交互",
      children: layerInteractionList,
    },
  ],
};
