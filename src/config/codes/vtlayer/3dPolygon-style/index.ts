import { diffrentTextureCodes } from "./diffrent-texture";
import { gradientFenceCodes } from "./gradient-fence";
import { setHeightCodes } from "./set-height";
import { topHideFenceCodes } from "./top-hide-fence";

export const threeDPolygonStyleList = [
  {
    title: "设置高度",
    html: setHeightCodes.html,
    css: setHeightCodes.css,
    js: setHeightCodes.js,
  },
  {
    title: "高度和侧面设置不同的纹理",
    html: diffrentTextureCodes.html,
    css: diffrentTextureCodes.css,
    js: diffrentTextureCodes.js,
  },
  {
    title: "顶部纹理与顶面朝向一致",
  },
  {
    title: "隐藏顶面的围栏",
    html: topHideFenceCodes.html,
    css: topHideFenceCodes.css,
    js: topHideFenceCodes.js,
  },
  {
    title: "透明度渐变围栏",
    html: gradientFenceCodes.html,
    css: gradientFenceCodes.css,
    js: gradientFenceCodes.js,
  },
  {
    title: "三维面的进场动画",
  },
];
