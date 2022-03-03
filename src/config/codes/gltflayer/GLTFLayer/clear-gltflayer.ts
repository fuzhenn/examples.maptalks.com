import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>
<input type="button" id="clear" value="clear markers"></input>
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

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const markers = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const gltfmarker = new maptalks.GLTFMarker(position.add(i * 0.01 - 0.015, j * 0.01 - 0.015), {
            id: i + "_" + j,
            symbol: symbol
        });
        markers.push(gltfmarker);
    }
}

gltflayer.addGeometry(markers);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

document.getElementById("clear").onclick = function() {
    gltflayer.clear();
}
`;

export const clearGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
