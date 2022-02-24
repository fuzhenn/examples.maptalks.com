import { bloomCodes } from "./bloom";
import { drawTextCodes } from "./draw-text";
import { readColorCodes } from "./read-color";
import { setTextureCodes } from "./set-texture";

export const polygonStyleList = [
  {
    title: "设置纹理",
    html: setTextureCodes.html,
    css: setTextureCodes.css,
    js: setTextureCodes.js,
  },
  {
    title: "纹理动画",
  },
  {
    title: "设置高度",
  },
  {
    title: "从属性数据中读取颜色",
    html: readColorCodes.html,
    css: readColorCodes.css,
    js: readColorCodes.js,
  },
  {
    title: "在面上绘制文字",
    html: drawTextCodes.html,
    css: drawTextCodes.css,
    js: drawTextCodes.js,
  },
  {
    title: "开启泛光",
    html: bloomCodes.html,
    css: bloomCodes.css,
    js: bloomCodes.js,
  },
];
