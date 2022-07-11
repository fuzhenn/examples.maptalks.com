import { lineLayerList } from "./lineLayer";
import { pointLayerList } from "./pointLayer";
import { polygonLayerList } from "./polygonLayer";

export const vectorLayerList = {
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
};
