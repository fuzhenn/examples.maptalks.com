import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
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
}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/car/car-draco.gltf';
const symbol = {
    url: url,
    scale: [2, 2, 2]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
`;

export const addDracoMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
