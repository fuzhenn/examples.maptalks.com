import { highlightAllDataCodes } from "./highlight-all-data";
import { highlightFeatureCodes } from "./highlight-feature";
import { highlightPluginCodes } from "./highlight-plugin-data";
import { mouseCodes } from "./mouse";
import { queryCoordinateCodes } from "./query-coordinate";
import { queryScreenCodes } from "./query-screen";

export const layerInteractionList = [
  {
    title: "高亮所有数据",
    html: highlightAllDataCodes.html,
    css: highlightAllDataCodes.css,
    js: highlightAllDataCodes.js,
  },
  {
    title: "高亮指定渲染插件的数据",
    html: highlightPluginCodes.html,
    css: highlightPluginCodes.css,
    js: highlightPluginCodes.js,
  },
  {
    title: "单独高亮Feature",
    html: highlightFeatureCodes.html,
    css: highlightFeatureCodes.css,
    js: highlightFeatureCodes.js,
  },
  {
    title: "查询给定坐标上的数据",
    html: queryCoordinateCodes.html,
    css: queryCoordinateCodes.css,
    js: queryCoordinateCodes.js,
  },
  {
    title: "查询给定屏幕坐标上的数据",
    html: queryScreenCodes.html,
    css: queryScreenCodes.css,
    js: queryScreenCodes.js,
  },
  {
    title: "鼠标点选数据",
    html: mouseCodes.html,
    css: mouseCodes.css,
    js: mouseCodes.js,
  },
];
