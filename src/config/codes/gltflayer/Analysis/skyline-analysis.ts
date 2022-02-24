import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl@0.66.0/dist/maptalksgl.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gltf-layer/dist/maptalks.gltf.js"></script>
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
map.setCenter([0, 0]);
const url = '/resources/gltf/new_york_city._manhattan/scene.gltf';
const symbol = {
    url: url,
    scale: [5, 5, 5]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

const skylineAnalysis = new maptalksgl.SkylineAnalysis({
    lineColor: [1.0, 0.2, 0.0],
    lineWidth: 1.8
});
skylineAnalysis.addTo(groupgllayer);
`;

export const skylineAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
