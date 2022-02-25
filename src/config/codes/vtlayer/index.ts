import { layerInteractionList } from "./layer-interaction";
import { layerOperationList } from "./layer-operation";
import { layerStyleList } from "./layer-style";
import { lineStyleList } from "./line-style";
import { pointStyleList } from "./point-style";
import { polygonStyleList } from "./polygon-style";
import { threeDLineStyleList } from "./3dLine-style";
import { threeDPolygonStyleList } from "./3dPolygon-style";
import { waterStyleList } from "./water-style";

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
  },
];
