import { addVtLayerCodes } from "./add-vtlayer";
import { loadLocalGeoDataCodes } from "./load-local-geo";
import { loadRemoteGeoDataCodes } from "./load-remote-geo";
import { convertedGeoDataCodes } from "./convert-geo";
import { setLayerZoomBoundaryCodes } from "./set-zoom-boundary";
import { setLayerZoomAccessCodes } from "./set-zoom-access";
import { setLayerVisibleCodes } from "./set-layer-visible";
import { removeLayerCodes } from "./remove-layer";
import { convertCoordinateCodes } from "./convert-coordinate";

export const layerOperationList = [
  {
    title: "添加一个矢量瓦片图层",
    html: addVtLayerCodes.html,
    css: addVtLayerCodes.css,
    js: addVtLayerCodes.js,
  },
  {
    title: "载入GeoJSON对象数据",
    html: loadLocalGeoDataCodes.html,
    css: loadLocalGeoDataCodes.css,
    js: loadLocalGeoDataCodes.js,
  },
  {
    title: "载入远程GeoJSON数据",
    html: loadRemoteGeoDataCodes.html,
    css: loadRemoteGeoDataCodes.css,
    js: loadRemoteGeoDataCodes.js,
  },
  {
    title: "数据转换函数",
    html: convertedGeoDataCodes.html,
    css: convertedGeoDataCodes.css,
    js: convertedGeoDataCodes.js,
  },
  {
    title: "设置图层的最大和最小级别",
    html: setLayerZoomBoundaryCodes.html,
    css: setLayerZoomBoundaryCodes.css,
    js: setLayerZoomBoundaryCodes.js,
  },
  {
    title: "图层的最大可访问级别",
    html: setLayerZoomAccessCodes.html,
    css: setLayerZoomAccessCodes.css,
    js: setLayerZoomAccessCodes.js,
  },
  {
    title: "隐藏显示图层",
    html: setLayerVisibleCodes.html,
    css: setLayerVisibleCodes.css,
    js: setLayerVisibleCodes.js,
  },
  {
    title: "移除图层",
    html: removeLayerCodes.html,
    css: removeLayerCodes.css,
    js: removeLayerCodes.js,
  },
  {
    title: "坐标系转换",
    html: convertCoordinateCodes.html,
    css: convertCoordinateCodes.css,
    js: convertCoordinateCodes.js,
  },
];
