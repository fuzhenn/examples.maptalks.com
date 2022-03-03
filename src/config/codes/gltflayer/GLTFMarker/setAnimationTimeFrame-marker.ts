import { map, sceneConfig } from '../gltf-util';

const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:setAnimationTimeFrame();">对于动画模型根据指定的时间戳, 获取模型node上的矩阵</a></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
}

.pane {
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 25px;
  z-index: 10;
}
  
.pane a {
  display: block;
  float: left;
  text-align: left;
  margin-left: 6px;
  padding: 0 10px;
  min-width: 28px;
  min-height: 25px;
  color: #000;
  text-decoration: none;
  background: #efefef;
  border: 1px solid #000;
}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/vibut_the_robot/scene.gltf';
const symbol = {
    url: url,
    animation: true,
    loop: true
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
    alert(nodeMatrix);
}
`;

export const setAnimationTimeFrameMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
