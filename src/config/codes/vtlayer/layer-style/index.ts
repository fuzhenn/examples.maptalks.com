import { defaultVtStyleCodes } from "./default-style";
import { setVtStyleCodes } from "./set-style";
import { filterDataStyleCodes } from "./filter-data";
import { updateRenderStyleCodes } from "./update-style";
import { updateDataConfigCodes } from "./update-dataConfig";
import { updateSceneConfigCodes } from "./update-sceneConfig";
import { removeVtStyleCodes } from "./remove-style";
import { compressVtStyleCodes } from "./compress-style";
import { hideFeatureCodes } from "./hide-feature";
import { setFeatureStyleCodes } from "./set-feature-style";
import { updateFeatureDataConfigCodes } from "./update-feature-dataConfig";
import { updateFeatureSceneConfigCodes } from "./update-feature-sceneConfig";
import { updateFeatureStyleCodes } from "./update-feature-style";
import { enlargeIconCodes } from "./enlarge-icon";

export const layerStyleList = [
  {
    title: "图层默认样式",
    html: defaultVtStyleCodes.html,
    css: defaultVtStyleCodes.css,
    js: defaultVtStyleCodes.js,
  },
  {
    title: "设置图层样式",
    html: setVtStyleCodes.html,
    css: setVtStyleCodes.css,
    js: setVtStyleCodes.js,
  },
  {
    title: "只显示符合条件的数据",
    html: filterDataStyleCodes.html,
    css: filterDataStyleCodes.css,
    js: filterDataStyleCodes.js,
  },
  {
    title: "更新渲染插件样式",
    html: updateRenderStyleCodes.html,
    css: updateRenderStyleCodes.css,
    js: updateRenderStyleCodes.js,
  },
  {
    title: "更新渲染插件的dataConfig",
    html: updateDataConfigCodes.html,
    css: updateDataConfigCodes.css,
    js: updateDataConfigCodes.js,
  },
  {
    title: "更新渲染插件的sceneConfig",
    html: updateSceneConfigCodes.html,
    css: updateSceneConfigCodes.css,
    js: updateSceneConfigCodes.js,
  },
  {
    title: "移除图层样式",
    html: removeVtStyleCodes.html,
    css: removeVtStyleCodes.css,
    js: removeVtStyleCodes.js,
  },
  {
    title: "压缩图层样式数据",
    html: compressVtStyleCodes.html,
    css: compressVtStyleCodes.css,
    js: compressVtStyleCodes.js,
  },
  {
    title: "单独隐藏Feature",
    html: hideFeatureCodes.html,
    css: hideFeatureCodes.css,
    js: hideFeatureCodes.js,
  },
  {
    title: "单独设置Feature的样式",
    html: setFeatureStyleCodes.html,
    css: setFeatureStyleCodes.css,
    js: setFeatureStyleCodes.js,
  },
  {
    title: "更新Feature的样式",
    html: updateFeatureStyleCodes.html,
    css: updateFeatureStyleCodes.css,
    js: updateFeatureStyleCodes.js,
  },
  {
    title: "更新Feature渲染插件的dataConfig",
    html: updateFeatureDataConfigCodes.html,
    css: updateFeatureDataConfigCodes.css,
    js: updateFeatureDataConfigCodes.js,
  },
  {
    title: "更新Feature渲染插件的sceneConfig",
    html: updateFeatureSceneConfigCodes.html,
    css: updateFeatureSceneConfigCodes.css,
    js: updateFeatureSceneConfigCodes.js,
  },
  {
    title: "整体放大图标和文字",
    html: enlargeIconCodes.html,
    css: enlargeIconCodes.css,
    js: enlargeIconCodes.js,
  },
];
