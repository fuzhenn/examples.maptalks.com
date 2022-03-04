import { map, sceneConfig } from '../gltflayer/gltf-util';
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
    lineWidth: 1.8
});
skylineAnalysis.addTo(groupGLLayer);

//fit view
map.setCenter(new maptalks.Coordinate([-0.11739548087734875,51.517852054879285]));
map.setZoom(16.15933208319987);
`;
export const skylineAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
