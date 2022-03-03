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
//fit view
map.setCenter([-0.09119584357631538, 51.532773817207584]);
map.setZoom(15.864715607101017);
map.setPitch(80);
const url = '/resources/gltf/new_york_city._manhattan/scene.gltf';
const symbol = {
    url: url,
    scale: [5, 5, 5]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltfLayer.addGeometry(gltfMarker);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

const skylineAnalysis = new maptalksgl.SkylineAnalysis({
    lineColor: [1.0, 0.2, 0.0],
    lineWidth: 1
});
skylineAnalysis.addTo(groupgllayer);
`;

export const skylineAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
