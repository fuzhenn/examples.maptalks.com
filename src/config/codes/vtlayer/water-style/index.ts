import { drawTextCodes } from "./draw-text";
import { reflectionCodes } from "./reflection";

export const waterStyleList = [
  {
    title: "水面绘制并开启倒影",
    html: reflectionCodes.html,
    css: reflectionCodes.css,
    js: reflectionCodes.js,
  },
  {
    title: "抬升水面高度",
  },
  {
    title: "水面上绘制文字",
    html: drawTextCodes.html,
    css: drawTextCodes.css,
    js: drawTextCodes.js,
  },
];
