import { acrosCollisionCodes } from "./across-collision";
import { combineIconAndTextCodes } from "./combine-iconAndText";
import { combineIconsCodes } from "./combine-icon";
import { diffrentIconsCodes } from "./diffrent-icons";
import { displayAtLevelCodes } from "./display-at-level";
import { iconScaleCodes } from "./icon-scale";
import { pitchCodes } from "./pitch";
import { readIconCodes } from "./read-icon";
import { readTextCodes } from "./read-text";
import { rotationCodes } from "./rotation";
import { textScaleCodes } from "./text-scale";
import { toggleCollisionCodes } from "./toggle-collision";

export const pointStyleList = [
  {
    title: "组合多个图标",
    html: combineIconsCodes.html,
    css: combineIconsCodes.css,
    js: combineIconsCodes.js,
  },
  {
    title: "组合图标和文字",
    html: combineIconAndTextCodes.html,
    css: combineIconAndTextCodes.css,
    js: combineIconAndTextCodes.js,
  },
  {
    title: "图标随地图级别缩放大小",
    html: iconScaleCodes.html,
    css: iconScaleCodes.css,
    js: iconScaleCodes.js,
  },
  {
    title: "文字随地图级别缩放大小",
    html: textScaleCodes.html,
    css: textScaleCodes.css,
    js: textScaleCodes.js,
  },
  {
    title: "跟随地图倾斜的图标和文字",
    html: pitchCodes.html,
    css: pitchCodes.css,
    js: pitchCodes.js,
  },
  {
    title: "跟随地图旋转的图标和文字",
    html: rotationCodes.html,
    css: rotationCodes.css,
    js: rotationCodes.js,
  },
  {
    title: "只在指定的级别上显示",
    html: displayAtLevelCodes.html,
    css: displayAtLevelCodes.css,
    js: displayAtLevelCodes.js,
  },
  {
    title: "不同属性显示不同的图标",
    html: diffrentIconsCodes.html,
    css: diffrentIconsCodes.css,
    js: diffrentIconsCodes.js,
  },
  {
    title: "从属性数据中读取图标",
    html: readIconCodes.html,
    css: readIconCodes.css,
    js: readIconCodes.js,
  },
  {
    title: "从属性数据中读取文字",
    html: readTextCodes.html,
    css: readTextCodes.css,
    js: readTextCodes.js,
  },
  // {
  //   title: "开启和关闭碰撞检测",
  //   html: toggleCollisionCodes.html,
  //   css: toggleCollisionCodes.css,
  //   js: toggleCollisionCodes.js,
  // },
  {
    title: "跨图层的碰撞检测",
    html: acrosCollisionCodes.html,
    css: acrosCollisionCodes.css,
    js: acrosCollisionCodes.js,
  },
];
