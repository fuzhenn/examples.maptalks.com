import { drawTextCodes } from "./draw-text";
import { lineBloomCodes } from "./bloom";
import { lineColorVariesCodes } from "./color-varies";
import { lineWidthScaleCodes } from "./width-scale";
import { readColorCodes } from "./read-color";
import { setTextureCodes } from "./set-texture";
import { textureAnimationCodes } from "./texture-animation";

export const lineStyleList = [
  {
    title: "宽度随地图级别缩放",
    html: lineWidthScaleCodes.html,
    css: lineWidthScaleCodes.css,
    js: lineWidthScaleCodes.js,
  },
  {
    title: "颜色随地图级别变化",
    html: lineColorVariesCodes.html,
    css: lineColorVariesCodes.css,
    js: lineColorVariesCodes.js,
  },
  {
    title: "从属性数据中读取颜色",
    html: readColorCodes.html,
    css: readColorCodes.css,
    js: readColorCodes.js,
  },
  {
    title: "设置纹理",
    html: setTextureCodes.html,
    css: setTextureCodes.css,
    js: setTextureCodes.js,
  },
  {
    title: "纹理动画",
    html: textureAnimationCodes.html,
    css: textureAnimationCodes.css,
    js: textureAnimationCodes.js,
  },
  {
    title: "开启泛光",
    html: lineBloomCodes.html,
    css: lineBloomCodes.css,
    js: lineBloomCodes.js,
  },
  {
    title: "沿线绘制文字",
    html: drawTextCodes.html,
    css: drawTextCodes.css,
    js: drawTextCodes.js,
  },
];
