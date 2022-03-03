import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>
<input type="button" id="showhide" value="show layer"></input>
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

input {
    float: right;
    position:absolute;
    right: 10px;
    top: 10px;
    width: 80px;
}
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

document.getElementById("showhide").onclick = function() {
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
