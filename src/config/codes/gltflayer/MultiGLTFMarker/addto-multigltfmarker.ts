import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container {
    width: 100%;
    height: 100%;
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
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        data.push({
            coordinates : position.add(i * 0.01, j * 0.01),
            translation : [0, 0, 0],
            rotation : [0, 0, Math.random() * 90],
            scale : [1, 1, 1],
            // color : [i / 5 + 0.2, 0.1 + j / 5, 1.0 - (i + j) / 10, 0.9]
        });
    }
}
const gltflayer = new maptalks.GLTFLayer('gltf');
const groupgltfmarker = new maptalks.MultiGLTFMarker(data, {
    symbol: symbol
}).addTo(gltflayer);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
`;

export const addToMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
