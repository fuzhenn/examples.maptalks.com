import {alignmentCodes} from "./alignment"
import {geojsonToGeometryCodes} from "./geojsonToGeometry"
import { geometryJsonCodes } from "./geometryJson";
import { geometryPolygonCodes } from "./geometryPolygon";
import {geometryToGeojsonCodes} from "./geometryToGeojson"
import {highlightCodes} from "./highlight"
import { layerJsonCodes } from "./layerJson";
import { layerStyleCodes } from "./layerStyle";
import { multiPolygonCodes } from "./multiPolygon";
import { polygonPatternCodes } from "./polygonPattern";
import { polygonSymbolCodes } from "./polygonSymbol";
import { updateSymbolCodes } from "./updateSymbol";
import { vertexMarkerCodes } from "./vertexMarker";

export const polygonLayerList = [
  {
    title: "添加Polygon",
    html: geometryPolygonCodes.html,
    css: geometryPolygonCodes.css,
    js: geometryPolygonCodes.js,
  },
  {
    title: "添加MultiPolygon",
    html: multiPolygonCodes.html,
    css: multiPolygonCodes.css,
    js: multiPolygonCodes.js,
  },
  {
    title: "面的基本样式",
    html: polygonSymbolCodes.html,
    css: polygonSymbolCodes.css,
    js: polygonSymbolCodes.js,
  },
  {
    title: "面的模式填充",
    html: polygonPatternCodes.html,
    css: polygonPatternCodes.css,
    js: polygonPatternCodes.js,
  },
  {
    title: "面的端点样式",
    html: vertexMarkerCodes.html,
    css: vertexMarkerCodes.css,
    js: vertexMarkerCodes.js,
  },
  {
    title: "面的内部点样式",
    html: alignmentCodes.html,
    css: alignmentCodes.css,
    js: alignmentCodes.js,
  },
  {
    title: "面样式部分更新",
    html: updateSymbolCodes.html,
    css: updateSymbolCodes.css,
    js: updateSymbolCodes.js,
  },
  {
    title: "设置图层style",
    html: layerStyleCodes.html,
    css: layerStyleCodes.css,
    js: layerStyleCodes.js,
  },
  {
    title: "数据高亮",
    html: highlightCodes.html,
    css: highlightCodes.css,
    js: highlightCodes.js,
  },
  {
    title: "数据JSON序列化",
    html: geometryJsonCodes.html,
    css: geometryJsonCodes.css,
    js: geometryJsonCodes.js,
  },
  {
    title: "图层JSON序列化",
    html: layerJsonCodes.html,
    css: layerJsonCodes.css,
    js: layerJsonCodes.js,
  },
  {
    title: "Polygon转成GeoJSON",
    html: geometryToGeojsonCodes.html,
    css: geometryToGeojsonCodes.css,
    js: geometryToGeojsonCodes.js,
  },
  {
    title: "GeoJSON转成Polygon",
    html: geojsonToGeometryCodes.html,
    css: geojsonToGeometryCodes.css,
    js: geojsonToGeometryCodes.js,
  },
];
