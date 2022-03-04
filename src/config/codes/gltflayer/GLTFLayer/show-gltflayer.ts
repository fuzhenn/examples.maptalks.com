import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>
<div class="pane"><a href="javascript:show();">显示图层</a></div>
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
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}
`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
};

const gltflayer1 = new maptalks.GLTFLayer('gltf1');
const gltflayer2 = new maptalks.GLTFLayer('gltf2');
const position = map.getCenter();
const gltfmarker1 = new maptalks.GLTFMarker(position, {
    symbol: symbol
}).addTo(gltflayer1);

const gltfmarker2 = new maptalks.GLTFMarker(position.add(0.01, 0), {
    symbol: symbol
}).addTo(gltflayer2);

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer1, gltflayer2], {sceneConfig}).addTo(map);

function show() {
    if (gltflayer1.isVisible()) {
        gltflayer1.hide();
    } else {
        gltflayer1.show();
    }
}
`;

export const showGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
