import { addMarkerCodes } from "./GLTFMarker/add-marker";
import { copyMarkerCodes } from "./GLTFMarker/copy-marker";
import { animationMarkerCodes } from "./GLTFMarker/animation-marker";
import { showMarkerCodes } from "./GLTFMarker/show-marker";
import { trsMarkerCodes } from "./GLTFMarker/trs-marker";
import { materialMarkerCodes } from "./GLTFMarker/material-marker";
import { shaderMarkerCodes } from "./GLTFMarker/shader-marker";
import { setSymbolMarkerCodes } from "./GLTFMarker/setSymbol-marker";
import { infowindowMarkerCodes } from "./GLTFMarker/infowindow-marker";

interface IListItem {
  title: string;
  key?: string;
  html?: string;
  css?: string;
  js?: string;
  children?: IListItem[];
}

const gltfList =
{
    title: "GlLTF图层示例",
    children: [
        {
            title: "1. GLTFMarker示例",
            children: [
                {
                    title: '1.1 添加GLTFMarker',
                    html: addMarkerCodes.html,
                    css: addMarkerCodes.css,
                    js: addMarkerCodes.js,
                },
                {
                    title: '1.2 复制GLTFMarker',
                    html: copyMarkerCodes.html,
                    css: copyMarkerCodes.css,
                    js: copyMarkerCodes.js,
                },
                {
                    title: '1.3 动画模型',
                    html: animationMarkerCodes.html,
                    css: animationMarkerCodes.css,
                    js: animationMarkerCodes.js,
                },
                {
                    title: '1.4 模型的显示与隐藏',
                    html: showMarkerCodes.html,
                    css: showMarkerCodes.css,
                    js: showMarkerCodes.js,
                },
                {
                    title: '1.5 模型的平移、旋转与缩放',
                    html: trsMarkerCodes.html,
                    css: trsMarkerCodes.css,
                    js: trsMarkerCodes.js,
                },
                {
                    title: '1.6 模型材质调节',
                    html: materialMarkerCodes.html,
                    css: materialMarkerCodes.css,
                    js: materialMarkerCodes.js,
                },
                {
                    title: '1.7 着色器切换',
                    html: shaderMarkerCodes.html,
                    css: shaderMarkerCodes.css,
                    js: shaderMarkerCodes.js,
                },
                {
                    title: '1.8 模型的symbol设置',
                    html: setSymbolMarkerCodes.html,
                    css: setSymbolMarkerCodes.css,
                    js: setSymbolMarkerCodes.js,
                },
                {
                    title: '1.9 设置信息弹出框',
                    html: infowindowMarkerCodes.html,
                    css: infowindowMarkerCodes.css,
                    js: infowindowMarkerCodes.js,
                }
            ]
        }
    ],
};

export { gltfList };
