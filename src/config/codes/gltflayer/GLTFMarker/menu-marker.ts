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

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol,
  scale: [2, 2, 2]
});

gltfLayer.addGeometry(gltfMarker);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
const options = {
  'items': [
    {item:'item1', click:function () {  document.getElementById('info').innerHTML = 'Click item1'; }},
'-',
    {item:'item2', click:function () {  document.getElementById('info').innerHTML = 'Click item2'; }}
  ]
};
gltfMarker.on('load', () => {
  gltfMarker.setMenu(options).openMenu();
});
`;

export const menuMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
