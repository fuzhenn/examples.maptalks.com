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
const url = '/resources/gltf/Duck/Duck.glb';
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

let selectedOne = null;

function markerChange(value) {
    if (selectedOne) {
        selectedOne.setUniform('polygonFill', [1, 1, 1, 1]);  
    }
    const gltfmarker = gltflayer.getGeometryById(value);
    if (gltfmarker) {
        gltfmarker.setUniform('polygonFill', [0.6, 0, 0, 1]);
        selectedOne = gltfmarker;
    }
}
`;

export const getMarkerGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
