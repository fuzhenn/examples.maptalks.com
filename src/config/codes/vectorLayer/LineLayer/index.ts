
import { addLineCodes } from "./addLine";
import { addMultiLineStringCodes } from "./addMultiLineString";
import { lineStyleCodes } from "./lineStyle";
import { dashStyleCodes } from "./dashStyle";
import { outlineStyleCodes } from "./outlineLine";
import { patternLineCodes } from "./patternLine";
import { linePatternGapCodes } from "./linePatternGap";
import { linePatternAnimSpeedCodes } from "./linePatternAnimSpeed";
import { markerPlacementCodes } from "./markerPlacement";
import { textPlacementCodes } from "./textPlacement";
import { updateStyleCodes } from "./updateStyle";
import { setStyleCodes } from "./setStyle";
import { eventCodes } from "./lineStringEvent";
import { dataJSONCodes } from "./dataToJSON";
import { layerJSONCodes } from "./layerToJSON";
import { lineToGeoJSONCodes } from "./lineToGeoJSON";
import { geojsonToLineCodes } from "./geojsonToLine";
import { hightLightLineCodes } from "./hightLightLines";
import { bigdataLinesCodes } from "./bigdataLines";


export const lineLayerList = [
  {
    title: "添加线",
    html: addLineCodes.html,
    css: addLineCodes.css,
    js: addLineCodes.js
  },
  {
    title: "添加MultiLineString",
    html: addMultiLineStringCodes.html,
    css: addMultiLineStringCodes.css,
    js: addMultiLineStringCodes.js
  },
  {
    title: "线的基础样式",
    html: lineStyleCodes.html,
    css: lineStyleCodes.css,
    js: lineStyleCodes.js
  },
  {
    title: "线的虚线样式",
    html: dashStyleCodes.html,
    css: dashStyleCodes.css,
    js: dashStyleCodes.js
  },
  {
    title: "有描边的线",
    html: outlineStyleCodes.html,
    css: outlineStyleCodes.css,
    js: outlineStyleCodes.js
  },
  {
    title: "线的模式填充",
    html: patternLineCodes.html,
    css: patternLineCodes.css,
    js: patternLineCodes.js
  },
  {
    title: "有间隔的模式填充",
    html: linePatternGapCodes.html,
    css: linePatternGapCodes.css,
    js: linePatternGapCodes.js
  },
  {
    title: "线的模式填充动画",
    html: linePatternAnimSpeedCodes.html,
    css: linePatternAnimSpeedCodes.css,
    js: linePatternAnimSpeedCodes.js
  },
  // {
  //   title: "沿线绘制图标",
  //   html: markerPlacementCodes.html,
  //   css: markerPlacementCodes.css,
  //   js: markerPlacementCodes.js
  // },
  // {
  //   title: "沿线绘制文字",
  //   html: textPlacementCodes.html,
  //   css: textPlacementCodes.css,
  //   js: textPlacementCodes.js
  // },
  {
    title: "线样式部分更新",
    html: updateStyleCodes.html,
    css: updateStyleCodes.css,
    js: updateStyleCodes.js
  },
  {
    title: "设置图层style",
    html: setStyleCodes.html,
    css: setStyleCodes.css,
    js: setStyleCodes.js
  },
  {
    title: "监听LineString事件",
    html: eventCodes.html,
    css: eventCodes.css,
    js: eventCodes.js
  },
  {
    title: "数据高亮",
    html: hightLightLineCodes.html,
    css: hightLightLineCodes.css,
    js: hightLightLineCodes.js
  },
  {
    title: "数据JSON序列化",
    html: dataJSONCodes.html,
    css: dataJSONCodes.css,
    js: dataJSONCodes.js
  },
  {
    title: "图层JSON序列化",
    html: layerJSONCodes.html,
    css: layerJSONCodes.css,
    js: layerJSONCodes.js
  },
  {
    title: "LineString转成GeoJSON",
    html: lineToGeoJSONCodes.html,
    css: lineToGeoJSONCodes.css,
    js: lineToGeoJSONCodes.js
  },
  {
    title: "GeoJSON转成LineString",
    html: geojsonToLineCodes.html,
    css: geojsonToLineCodes.css,
    js: geojsonToLineCodes.js
  },
  {
    title: "海量线的示例",
    html: bigdataLinesCodes.html,
    css: bigdataLinesCodes.css,
    js: bigdataLinesCodes.js
  },
];
