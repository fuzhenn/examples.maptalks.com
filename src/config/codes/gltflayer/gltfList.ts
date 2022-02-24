import { addMarkerCodes } from "./GLTFMarker/add-marker";
import { copyMarkerCodes } from "./GLTFMarker/copy-marker";
import { animationMarkerCodes } from "./GLTFMarker/animation-marker";
import { showMarkerCodes } from "./GLTFMarker/show-marker";
import { trsMarkerCodes } from "./GLTFMarker/trs-marker";
import { materialMarkerCodes } from "./GLTFMarker/material-marker";
import { shaderMarkerCodes } from "./GLTFMarker/shader-marker";
import { setSymbolMarkerCodes } from "./GLTFMarker/setSymbol-marker";
import { infowindowMarkerCodes } from "./GLTFMarker/infowindow-marker";
import { mouseeventMarkerCodes } from "./GLTFMarker/mouseevent-marker";
import { outlineMarkerCodes } from "./GLTFMarker/outline-marker";
import { bloomMarkerCodes } from "./GLTFMarker/bloom-marker";
import { shadowMarkerCodes } from "./GLTFMarker/shadow-marker";
import { skinningMarkerCodes } from "./GLTFMarker/skinning-marker";
import { glowMarkerCodes } from "./GLTFMarker/glow-marker";
import { menuMarkerCodes } from "./GLTFMarker/menu-marker";
import { anchorZMarkerCodes } from "./GLTFMarker/anchorZ-marker";
import { fixSizeOnZoomMarkerCodes } from "./GLTFMarker/fixsize-marker";
import { modelMatrixMarkerCodes } from "./GLTFMarker/modelmatrix-marker";
import { setAnimationTimeFrameMarkerCodes } from "./GLTFMarker/setAnimationTimeFrame-marker";
import { propertyMarkerCodes } from "./GLTFMarker/property-marker";
//GLTFLayer
import { addToGltfLayerCodes } from "./GLTFLayer/addto-gltflayer";
import { getMarkerGLTFLayerCodes } from "./GLTFLayer/getmarker-gltflayer";
import { removeMarkerGLTFLayerCodes } from "./GLTFLayer/removemarker-gltflayer";
import { clearGLTFLayerCodes } from "./GLTFLayer/clear-gltflayer";
import { showGLTFLayerCodes } from "./GLTFLayer/show-gltflayer";
import { jsonGLTFLayerCodes } from "./GLTFLayer/json-gltflayer";
import { styleGLTFLayerCodes } from "./GLTFLayer/style-gltflayer";
import { identifyGLTFLayerCodes } from "./GLTFLayer/identify-gltflayer";
import { customShaderGLTFLayerCodes } from "./GLTFLayer/customshader-gltflayer";
import { moreGLTFLayerCodes } from "./GLTFLayer/morelayers-gltflayer";
import { filterGLTFLayerCodes } from "./GLTFLayer/filter-gltflayer";
import { modelloadGLTFLayerCodes } from "./GLTFLayer/modelload-gltflayer";
//MultiGLTFMarker
import { addToMultiGLTFMarkerCodes } from "./MultiGLTFMarker/addto-multigltfmarker";
import { additemMultiGLTFMarkerCodes } from "./MultiGLTFMarker/additem-multigltfmarker";
import { removeitemMultiGLTFMarkerCodes } from "./MultiGLTFMarker/removeitem-multigltfmarker";
import { updateitemMultiGLTFMarkerCodes } from "./MultiGLTFMarker/updateitem-multigltfmarker";
import { mouseeventMultiGLTFMarkerCodes } from "./MultiGLTFMarker/mouseevent-multigltfmarker";
//Analysis
import { viewshedAnalysisCodes } from "./Analysis/viewshed-analysis";
import { floodAnalysisCodes } from "./Analysis/flood-analysis";
import { skylineAnalysisCodes } from "./Analysis/skyline-analysis";


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
                },
                {
                    title: '1.10 鼠标事件监听',
                    html: mouseeventMarkerCodes.html,
                    css: mouseeventMarkerCodes.css,
                    js: mouseeventMarkerCodes.js,
                },
                {
                    title: '1.11 模型设置外轮廓',
                    html: outlineMarkerCodes.html,
                    css: outlineMarkerCodes.css,
                    js: outlineMarkerCodes.js,
                },
                {
                    title: '1.12 模型泛光效果',
                    html: bloomMarkerCodes.html,
                    css: bloomMarkerCodes.css,
                    js: bloomMarkerCodes.js,
                },
                {
                    title: '1.13 阴影设置',
                    html: shadowMarkerCodes.html,
                    css: shadowMarkerCodes.css,
                    js: shadowMarkerCodes.js,
                },
                {
                    title: '1.14 加载有骨骼动画的模型',
                    html: skinningMarkerCodes.html,
                    css: skinningMarkerCodes.css,
                    js: skinningMarkerCodes.js,
                },
                {
                    title: '1.15 发光环',
                    html: glowMarkerCodes.html,
                    css: glowMarkerCodes.css,
                    js: glowMarkerCodes.js,
                },
                {
                    title: '1.16 右键菜单',
                    html: menuMarkerCodes.html,
                    css: menuMarkerCodes.css,
                    js: menuMarkerCodes.js,
                },
                {
                    title: '1.17 锚点的设置',
                    html: anchorZMarkerCodes.html,
                    css: anchorZMarkerCodes.css,
                    js: anchorZMarkerCodes.js,
                },
                {
                    title: '1.18 固定模型的大小不随地图缩放',
                    html: fixSizeOnZoomMarkerCodes.html,
                    css: fixSizeOnZoomMarkerCodes.css,
                    js: fixSizeOnZoomMarkerCodes.js,
                },
                {
                    title: '1.19 更新模型的ModelMatrix',
                    html: modelMatrixMarkerCodes.html,
                    css: modelMatrixMarkerCodes.css,
                    js: modelMatrixMarkerCodes.js,
                },
                {
                    title: '1.20 setAnimationTimeFrame',
                    html: setAnimationTimeFrameMarkerCodes.html,
                    css: setAnimationTimeFrameMarkerCodes.css,
                    js: setAnimationTimeFrameMarkerCodes.js,
                },
                {
                    title: '1.21 设置/获取属性',
                    html: propertyMarkerCodes.html,
                    css: propertyMarkerCodes.css,
                    js: propertyMarkerCodes.js,
                }
            ]
        },
        {
            title: "2. GLTFLayer示例",
            children: [
                {
                    title: '2.1 添加图层到地图上',
                    html: addToGltfLayerCodes.html,
                    css: addToGltfLayerCodes.css,
                    js: addToGltfLayerCodes.js,
                },
                {
                    title: '2.2 根据id查找gltfmarker',
                    html: getMarkerGLTFLayerCodes.html,
                    css: getMarkerGLTFLayerCodes.css,
                    js: getMarkerGLTFLayerCodes.js,
                },
                {
                    title: '2.3 移除某个gltfmarker',
                    html: removeMarkerGLTFLayerCodes.html,
                    css: removeMarkerGLTFLayerCodes.css,
                    js: removeMarkerGLTFLayerCodes.js,
                },
                {
                    title: '2.4 清空图层',
                    html: clearGLTFLayerCodes.html,
                    css: clearGLTFLayerCodes.css,
                    js: clearGLTFLayerCodes.js,
                },
                {
                    title: '2.5 图层的显示与隐藏',
                    html: showGLTFLayerCodes.html,
                    css: showGLTFLayerCodes.css,
                    js: showGLTFLayerCodes.js,
                },
                {
                    title: '2.6 通过json数据创建图层',
                    html: jsonGLTFLayerCodes.html,
                    css: jsonGLTFLayerCodes.css,
                    js: jsonGLTFLayerCodes.js,
                },
                {
                    title: '2.7 为图层设置条件样式',
                    html: styleGLTFLayerCodes.html,
                    css: styleGLTFLayerCodes.css,
                    js: styleGLTFLayerCodes.js,
                },
                {
                    title: '2.8 识别图层内的gltfmarker',
                    html: identifyGLTFLayerCodes.html,
                    css: identifyGLTFLayerCodes.css,
                    js: identifyGLTFLayerCodes.js,
                },
                {
                    title: '2.9 自定义着色器',
                    html: customShaderGLTFLayerCodes.html,
                    css: customShaderGLTFLayerCodes.css,
                    js: customShaderGLTFLayerCodes.js,
                },
                {
                    title: '2.10 多个GLTFLayer的融合绘制',
                    html: moreGLTFLayerCodes.html,
                    css: moreGLTFLayerCodes.css,
                    js: moreGLTFLayerCodes.js,
                },
                {
                    title: '2.11 根据属性条件筛选',
                    html: filterGLTFLayerCodes.html,
                    css: filterGLTFLayerCodes.css,
                    js: filterGLTFLayerCodes.js,
                },
                {
                    title: '2.12 模型载入完成事件',
                    html: modelloadGLTFLayerCodes.html,
                    css: modelloadGLTFLayerCodes.css,
                    js: modelloadGLTFLayerCodes.js,
                }
            ]
        },
        {
            title: "3. MultiGLTFMarker示例",
            children: [
                {
                    title: '3.1 添加MultiGLTFMarker',
                    html: addToMultiGLTFMarkerCodes.html,
                    css: addToMultiGLTFMarkerCodes.css,
                    js: addToMultiGLTFMarkerCodes.js,
                },
                {
                    title: '3.2 增加一个数据项',
                    html: additemMultiGLTFMarkerCodes.html,
                    css: additemMultiGLTFMarkerCodes.css,
                    js: additemMultiGLTFMarkerCodes.js,
                },
                {
                    title: '3.3 移除一个数据项',
                    html: removeitemMultiGLTFMarkerCodes.html,
                    css: removeitemMultiGLTFMarkerCodes.css,
                    js: removeitemMultiGLTFMarkerCodes.js,
                },
                {
                    title: '3.4 更新一个数据项',
                    html: updateitemMultiGLTFMarkerCodes.html,
                    css: updateitemMultiGLTFMarkerCodes.css,
                    js: updateitemMultiGLTFMarkerCodes.js,
                },
                {
                    title: '3.5 监听鼠标事件',
                    html: mouseeventMultiGLTFMarkerCodes.html,
                    css: mouseeventMultiGLTFMarkerCodes.css,
                    js: mouseeventMultiGLTFMarkerCodes.js,
                }
            ]
        },
        {
            title: "4. Analysis示例",
            children: [
                {
                    title: '4.1 可视域分析',
                    html: viewshedAnalysisCodes.html,
                    css: viewshedAnalysisCodes.css,
                    js: viewshedAnalysisCodes.js,
                },
                {
                    title: '4.2 水淹分析',
                    html: floodAnalysisCodes.html,
                    css: floodAnalysisCodes.css,
                    js: floodAnalysisCodes.js,
                },
                {
                    title: '4.3 天际线分析',
                    html: skylineAnalysisCodes.html,
                    css: skylineAnalysisCodes.css,
                    js: skylineAnalysisCodes.js,
                }
            ]
        }
    ],
};

export { gltfList };
