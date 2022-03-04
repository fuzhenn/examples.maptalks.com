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
  url: url,
  scale: [2, 2, 2]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
});

gltfLayer.addGeometry(gltfMarker);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
`;

export const addMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
