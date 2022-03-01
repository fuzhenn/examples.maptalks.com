import { addAndRemoveCodes } from "./addAndRemove";
import { addMarkerCodes } from "./addMarker";
import { addMultiPointCodes } from "./addMultiPoint";
import { batchAddCodes } from "./batchAdd";
import { compositeSymbolCodes } from "./compositeSymbol";
import { disableGeoEventsCodes } from "./disableGeoEvents";
import { disableHitDetectCodes } from "./disableHitDetect";
import { filterByPropertyCodes } from "./filterByProperty";
import { getByIdCodes } from "./getById";
import { getExtentCodes } from "./getExtent";
import { imageMarkerCodes } from "./imageMarker";
import { imageTextMarkerCodes } from "./imageTextMarker";
import { markerMapAlignmentCodes } from "./markerMapAlignment";
import { markerMiddleAlignmentCodes } from "./markerMiddleAlignment";
import { markerTextFitCodes } from "./markerTextFit";
import {mouseIdentifyCodes} from "./mouseIdentify"
import { multiImageMarkerCodes } from "./multiImageMarker";
import { rotateMarkerCodes } from "./rotateMarker";
import { rotateTextCodes } from "./rotateText";
import { setStyleCodes } from "./setStyle";
import { setZoomBoundaryCodes } from "./setZoomBoundary";
import { styleScaleCodes } from "./styleScale";
import { svgPathMarkerCodes } from "./svgPathMarker";
import { symbolByPropCodes } from "./symbolByProp";
import { symbolByZoomCodes } from "./symbolByZoom";
import { toggleVisibleCodes } from "./toggleVisible";
import { updateSymbolCodes } from "./updateSymbol";
import { vectorGradientCodes } from "./vectorGradient";
import { vectorMarkerCodes } from "./vectorMarker";
import { vectorPatternCodes } from "./vectorPattern";

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
    html: getExtentCodes.html,
    css: getExtentCodes.css,
    js: getExtentCodes.js,
  },
  {
    title: "禁用图形事件",
    html: disableGeoEventsCodes.html,
    css: disableGeoEventsCodes.css,
    js: disableGeoEventsCodes.js,
  },
  {
    title: "禁用鼠标样式检测",
    html: disableHitDetectCodes.html,
    css: disableHitDetectCodes.css,
    js: disableHitDetectCodes.js,
  },
  {
    title: "设置图层style",
    html: setStyleCodes.html,
    css: setStyleCodes.css,
    js: setStyleCodes.js,
  },
  {
    title: "图层数据整体放大",
    html: styleScaleCodes.html,
    css: styleScaleCodes.css,
    js: styleScaleCodes.js,
  },
  {
    title: "图片标注",
    html: imageMarkerCodes.html,
    css: imageMarkerCodes.css,
    js: imageMarkerCodes.js,
  },
  {
    title: "多图片标注",
    html: multiImageMarkerCodes.html,
    css: multiImageMarkerCodes.css,
    js: multiImageMarkerCodes.js,
  },
  {
    title: "矢量标注",
    html: vectorMarkerCodes.html,
    css: vectorMarkerCodes.css,
    js: vectorMarkerCodes.js,
  },
  {
    title: "矢量标注模式填充",
    html: vectorPatternCodes.html,
    css: vectorPatternCodes.css,
    js: vectorPatternCodes.js,
  },
  {
    title: "矢量标注渐变填充",
    html: vectorGradientCodes.html,
    css: vectorGradientCodes.css,
    js: vectorGradientCodes.js,
  },
  {
    title: "SVG矢量标注",
    html: svgPathMarkerCodes.html,
    css: svgPathMarkerCodes.css,
    js: svgPathMarkerCodes.js,
  },
  {
    title: "标注水平和垂直对齐",
    html: markerMiddleAlignmentCodes.html,
    css: markerMiddleAlignmentCodes.css,
    js: markerMiddleAlignmentCodes.js,
  },
  {
    title: "旋转对齐与倾斜对齐",
    html: markerMapAlignmentCodes.html,
    css: markerMapAlignmentCodes.css,
    js: markerMapAlignmentCodes.js,
  },
  {
    title: "旋转标注",
    html: rotateMarkerCodes.html,
    css: rotateMarkerCodes.css,
    js: rotateMarkerCodes.js,
  },
  {
    title: "旋转文字标注",
    html: rotateTextCodes.html,
    css: rotateTextCodes.css,
    js: rotateTextCodes.js,
  },
  {
    title: "带文字的图片标注",
    html: imageTextMarkerCodes.html,
    css: imageTextMarkerCodes.css,
    js: imageTextMarkerCodes.js,
  },
  {
    title: "图标尺寸自动适应文字",
    html: markerTextFitCodes.html,
    css: markerTextFitCodes.css,
    js: markerTextFitCodes.js,
  },
  {
    title: "组合样式",
    html: compositeSymbolCodes.html,
    css: compositeSymbolCodes.css,
    js: compositeSymbolCodes.js,
  },
  {
    title: "样式的部分更新",
    html: updateSymbolCodes.html,
    css: updateSymbolCodes.css,
    js: updateSymbolCodes.js,
  },
  {
    title: "根据zoom设置样式",
    html: symbolByZoomCodes.html,
    css: symbolByZoomCodes.css,
    js: symbolByZoomCodes.js,
  },
  {
    title: "根据属性数据设置样式",
    html: symbolByPropCodes.html,
    css: symbolByPropCodes.css,
    js: symbolByPropCodes.js,
  },
  {
    title: "海量点标注性能",
  },
  {
    title: "鼠标点选数据",
    html: mouseIdentifyCodes.html,
    css: mouseIdentifyCodes.css,
    js: mouseIdentifyCodes.js,
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
