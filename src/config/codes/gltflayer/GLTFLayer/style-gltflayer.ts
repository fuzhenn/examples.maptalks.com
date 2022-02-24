import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>
<input type="button" id="style" value="set style"></input>
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

input {
    float: right;
    position:absolute;
    right: 10px;
    top: 10px;
    width: 80px;
}
`;

const jsCode = `
${map}
${sceneConfig}
const url1 = '/resources/gltf/Duck/Duck.glb';
const url2 = '/resources/gltf/cube-animation/cube.gltf';

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const markers = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const gltfmarker = new maptalks.GLTFMarker(position.add(i * 0.01 - 0.015, j * 0.01 - 0.015), {
            properties: {
                num: (i + j) * 0.1
            }
        });
        markers.push(gltfmarker);
    }
}

gltflayer.addGeometry(markers);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

const style = [{
    "filter": ["<", "num", 0.2],
    "symbol": {
        url: url1,
        animation: true,
        loop: true,
        uniforms: {
            'polygonFill': [0.2, 0.8, 0.0, 1.0]
        }
      },
      "uniqueName": "pyramid"
    },
    {
        filter: [">=", "num", 0.2],
        symbol: {
                url: url2
            },
        uniqueName: "duck"
    }
];

document.getElementById("style").onclick = function() {
    gltflayer.setStyle(style);
}
`;

export const styleGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
