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
const url = '/resources/gltf/Duck/Duck.glb';
const symbol = {
    url: url
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
}).addTo(gltflayer);

gltfmarker.setInfoWindow({
    'title': 'GLTFMarker InfoWindow',
    'content': 'Click on marker to open.',
    'dy': -20,
    'dx': 15
});
  
gltfmarker.openInfoWindow();
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
`;

export const infowindowMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
