import { map, sceneConfig } from '../gltf-util';

const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:setModelMatrix();">更新模型的ModelMatrix</a></div>`;

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
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
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
    const scale= [2, 2, 2];
    const matrix = maptalksgl.mat4.fromRotationTranslationScale([], rotation, translation, scale);
    gltfmarker.setModelMatrix(matrix);
}
`;

export const modelMatrixMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
