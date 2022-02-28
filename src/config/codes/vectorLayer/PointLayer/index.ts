import { addAndRemoveCodes } from "./addAndRemove";
import { addMarkerCodes } from "./addMarker";
import { addMultiPointCodes } from "./addMultiPoint";
import { batchAddCodes } from "./batchAdd";
import { filterByPropertyCodes } from "./filterByProperty";
import { getByIdCodes } from "./getById";
import { setZoomBoundaryCodes } from "./setZoomBoundary";
import { toggleVisibleCodes } from "./toggleVisible";

export const pointLayerList = [
  {
    title: "图层添加和移除",
    html: addAndRemoveCodes.html,
    css: addAndRemoveCodes.css,
    js: addAndRemoveCodes.js,
  },
  {
    title: "隐藏显示图层",
    html: toggleVisibleCodes.html,
    css: toggleVisibleCodes.css,
    js: toggleVisibleCodes.js,
  },
  {
    title: "图层最小和最大级别",
    html: setZoomBoundaryCodes.html,
    css: setZoomBoundaryCodes.css,
    js: setZoomBoundaryCodes.js,
  },
  {
    title: "添加Marker",
    html: addMarkerCodes.html,
    css: addMarkerCodes.css,
    js: addMarkerCodes.js,
  },
  {
    title: "添加MultiPoint",
    html: addMultiPointCodes.html,
    css: addMultiPointCodes.css,
    js: addMultiPointCodes.js,
  },
  {
    title: "批量添加图形",
    html: batchAddCodes.html,
    css: batchAddCodes.css,
    js: batchAddCodes.js,
  },
  {
    title: "根据ID获取图形",
    html: getByIdCodes.html,
    css: getByIdCodes.css,
    js: getByIdCodes.js,
  },
  {
    title: "根据属性条件筛选图形",
    html: filterByPropertyCodes.html,
    css: filterByPropertyCodes.css,
    js: filterByPropertyCodes.js,
  },
  {
    title: "获取所有图形的Extent",
  },
  {
    title: "禁用图形事件",
  },
  {
    title: "禁用鼠标样式检测",
  },
  {
    title: "设置图层style",
  },
  {
    title: "图层数据整体放大",
  },
  {
    title: "图片标注",
  },
  {
    title: "多图片标注",
  },
  {
    title: "矢量标注",
  },
  {
    title: "矢量标注模式填充",
  },
  {
    title: "SVG矢量标注",
  },
  {
    title: "标注水平和垂直对齐",
  },
  {
    title: "旋转对齐与倾斜对齐",
  },
  {
    title: "旋转标注",
  },
  {
    title: "旋转文字标注",
  },
  {
    title: "带文字的图片标注",
  },
  {
    title: "图标尺寸自动适应文字",
  },
  {
    title: "组合样式",
  },
  {
    title: "样式的部分更新",
  },
  {
    title: "根据zoom设置样式",
  },
  {
    title: "根据属性数据设置样式",
  },
  {
    title: "海量点标注性能",
  },
  {
    title: "鼠标点选数据",
  },
  {
    title: "鼠标悬停高亮数据",
  },
  {
    title: "监听Marker事件",
  },
  {
    title: "碰撞检测",
  },
  {
    title: "数据高亮",
  },
  {
    title: "数据JSON序列化",
  },
  {
    title: "图层JSON序列化",
  },
  {
    title: "Marker转成GeoJSON",
  },
  {
    title: "GeoJSON转成Marker",
  },
];
