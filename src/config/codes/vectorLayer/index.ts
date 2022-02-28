import { lineLayerList } from "./LineLayer";
import { pointLayerList } from "./PointLayer";
import { polygonLayerList } from "./PolygonLayer";

export const vectorLayerList = [
  {
    title: "矢量图层",
    children: [
      {
        title: "点图层",
        children: pointLayerList,
      },
      {
        title: "线图层",
        children: lineLayerList,
      },
      {
        title: "面图层",
        children: polygonLayerList,
      },
    ],
  },
];
