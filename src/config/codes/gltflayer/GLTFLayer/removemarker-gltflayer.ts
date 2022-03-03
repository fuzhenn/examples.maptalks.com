import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>
<select id="marker-select" onchange="markerChange(this.value)">
  <option value ="0_1">0_1</option>
  <option value ="1_0">1_0</option>
  <option value="1_1">1_1</option>
  <option value="2_2">2_2</option>
</select>
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

select {
    float: right;
    position:absolute;
    right: 10px;
    top: 10px;
    width: 100px;
}
`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const markers = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const gltfMarker = new maptalks.GLTFMarker(position.add(i * 0.01 - 0.015, j * 0.01 - 0.015), {
            id: i + "_" + j,
            symbol: symbol
        });
        markers.push(gltfMarker);
    }
}

gltfLayer.addGeometry(markers);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

function markerChange(value) {
    const gltfMarker = gltfLayer.getGeometryById(value);
    if (gltfMarker) {
        gltfLayer.removeGeometry(gltfMarker);
    }
}
`;

export const removeMarkerGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
