import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div id="info"></div>`;

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

#info {
    position: fixed;
    background-color: rgba(13, 13, 13, 0.5);
    padding: 10px 10px 10px 10px;
    font: 13px bold sans-serif;
    color: #fff;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 70px;
    overflow: hidden
  }
`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
};
const position = map.getCenter();
const data = [];
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        data.push({
            coordinates : position.add(i * 0.01, j * 0.01),
            translation : [0, 0, 0],
            rotation : [0, 0, Math.random() * 90],
            scale : [1, 1, 1]
        });
    }
}
const gltflayer = new maptalks.GLTFLayer('gltf');
const multigltfmarker = new maptalks.MultiGLTFMarker(data, {
    symbol: symbol
}).addTo(gltflayer);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

multigltfmarker.on('click', e => {
    document.getElementById('info').innerHTML = 'clicked picking id:' + e.pickingId;
});
multigltfmarker.on('mousemove', e => {
    const index = e.target.getIndexByPickingId(e.pickingId);
    multigltfmarker.updateData(index, 'color', [0.0, 0.2, 0.8, 1.0]);
});
multigltfmarker.on('mouseleave', e => {
    const index = e.target.getIndexByPickingId(e.pickingId);
    multigltfmarker.updateData(index, 'color', [1.0, 0.0, 0.0, 1.0]);
});
`;

export const mouseeventMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
