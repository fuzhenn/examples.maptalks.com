import { addVideoLayerCodes } from "./addVideo";
import { setVideoLayerCodes } from "./setVideo";
import { editVideoLayerCodes } from "./editVideo";


const videoLayerList =
{
  title: "VideoLayer图层示例",
  children: [
    {
      title: "添加视频对象",
      html: addVideoLayerCodes.html,
      css: addVideoLayerCodes.css,
      js: addVideoLayerCodes.js,
    },
    {
      title: "调整视频参数",
      html: setVideoLayerCodes.html,
      css: setVideoLayerCodes.css,
      js: setVideoLayerCodes.js,
    },
    {
      title: "视频编辑",
      html: editVideoLayerCodes.html,
      css: editVideoLayerCodes.css,
      js: editVideoLayerCodes.js,
    }
  ],
};

export { videoLayerList };
