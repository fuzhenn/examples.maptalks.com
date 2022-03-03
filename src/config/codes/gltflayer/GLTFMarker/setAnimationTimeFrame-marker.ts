import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div id="info"></div>
<div class="pane"><a href="javascript:setAnimationTimeFrame();">对于动画模型根据指定的时间戳, 获取模型node上的矩阵</a></div>`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container {
    width: 100%;
    height: 100%;
}
#info {
    position: fixed;
    background-color: rgba(13, 13, 13, 0.5);
    padding: 10px 10px 10px 10px;
    font: 13px bold sans-serif;
    color: #fff;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 70px;
    overflow: hidden
}
.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:40px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/vibut_the_robot/scene.gltf';
const symbol = {
    url: url,
    animation: true,
    loop: true,
    scale: [2, 2, 2],
    rotation: [0, 0, 180]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

function setAnimationTimeFrame() {
    gltfmarker.setAnimationTimeframe(1000);//ms
    const renderer = gltflayer.getRenderer();
    const meshes = renderer.getMarkerMeshes(gltfmarker);
    const nodeMatrix = meshes[0].nodeMatrix;
    document.getElementById('info').innerHTML = '[' + nodeMatrix + ']';
}
`;

export const setAnimationTimeFrameMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
