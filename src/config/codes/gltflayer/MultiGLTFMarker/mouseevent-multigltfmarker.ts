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
  height: 50px;
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
for (let i = -2; i < 3; i++) {
  for (let j = -2; j < 3; j++) {
    data.push({
      coordinates : position.add(i * 0.01 - 0.018, j * 0.01),
      translation : [0, 0, 0],
      scale : [1, 1, 1]
    });
  }
}
const gltfLayer = new maptalks.GLTFLayer('gltf');
const multiGLTFMarker = new maptalks.MultiGLTFMarker(data, {
  symbol: symbol
}).addTo(gltfLayer);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

document.getElementById('info').innerHTML = '请用鼠标悬停和点击模型。'

multiGLTFMarker.on('click', e => {
  document.getElementById('info').innerHTML = '点击模型的id:' + e.pickingId;
});
multiGLTFMarker.on('mousemove', e => {
  const index = e.target.getIndexByPickingId(e.pickingId);
  multiGLTFMarker.updateData(index, 'color', [0.0, 0.2, 0.8, 1.0]);
});
multiGLTFMarker.on('mouseleave', e => {
  const index = e.target.getIndexByPickingId(e.pickingId);
  multiGLTFMarker.updateData(index, 'color', [1.0, 0.0, 0.0, 1.0]);
});
`;

export const mouseeventMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
