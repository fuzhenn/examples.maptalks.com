import { map, sceneConfig } from '../gltf-util';

const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:addItem();">add an item</a></div>
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
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        data.push({
            coordinates : position.add(i * 0.01, j * 0.01),
            scale : [1, 1, 1],
            color: [1, 1, 1, 1]
        });
    }
}
const gltflayer = new maptalks.GLTFLayer('gltf');
const multigltfmarker = new maptalks.MultiGLTFMarker(data, {
    symbol: symbol
}).addTo(gltflayer);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
function addItem() {
    multigltfmarker.addData({
        coordinates : position.add(-0.02, 0.01),
        translation : [0, 0, 0],
        rotation : [0, 0, 0],
        scale : [2, 2, 2],
        color : [1.0, 0.4, 0.3, 1.0]
    });
}
`;

export const additemMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
