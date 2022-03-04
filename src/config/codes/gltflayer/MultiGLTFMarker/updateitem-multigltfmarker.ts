import { map, sceneConfig } from '../gltf-util';

const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:updateItem();">更新一个数据项</a></div>
`;

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
const position = map.getCenter();
const data = [];
for (let i = -3; i < 3; i++) {
    for (let j = -3; j < 3; j++) {
        data.push({
            coordinates : position.add(i * 0.01, j * 0.01),
            scale : [1, 1, 1],
            color: [1, 1, 1, 1]
        });
    }
}
const gltfLayer = new maptalks.GLTFLayer('gltf');
const multiGLTFMarker = new maptalks.MultiGLTFMarker(data, {
    symbol: symbol
}).addTo(gltfLayer);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
function updateItem() {
    multiGLTFMarker.updateData(0, 'scale', [2, 2, 2]);
}
`;

export const updateitemMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
