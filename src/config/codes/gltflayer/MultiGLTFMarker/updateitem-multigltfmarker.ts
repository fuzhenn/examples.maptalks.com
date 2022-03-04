import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:updateItem();">更新一个数据项</a></div>
`;

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
function updateItem() {
    multigltfmarker.updateData(0, 'scale', [2, 2, 2]);
}
`;

export const updateitemMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
