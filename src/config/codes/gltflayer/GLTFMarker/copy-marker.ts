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

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
}).addTo(gltflayer);
const copyOne = gltfmarker.copy().addTo(gltflayer);
copyOne.setCoordinates(position.add(0.01, 0));

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
`;

export const copyMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
