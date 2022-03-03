import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:setModelMatrix();">更新模型的ModelMatrix</a></div>`;

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
.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:40px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url,
    scale: [2, 2, 2]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

function setModelMatrix() {
    const translation = [10, 10, 0];
    const rotation = [0, 0, 0, 1];
    const scale= [1, 1, 1];
    const matrix = maptalksgl.mat4.fromRotationTranslationScale([], rotation, translation, scale);
    gltfmarker.setModelMatrix(matrix);
}
`;

export const modelMatrixMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
