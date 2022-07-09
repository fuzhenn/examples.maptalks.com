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
}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  url: url,
  scale: [2, 2, 2]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
});

gltfLayer.addGeometry(gltfMarker);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

const transformControl = new maptalks.TransformControl();
transformControl.addTo(map);
transformControl.on('transforming', e => {
  const target = transformControl.getTransformTarget();
  target.setTRS(e.translate, e.rotation, e.scale);
});

transformControl.on('transformend', e => {
  document.getElementById('info').innerHTML = '操控模型完成事件';
});

map.on('dom:click', e => {
  const identifyData = e.coordinate ? groupGLLayer.identify(e.coordinate, { layers: [gltfLayer], orderByCamera: true })[0] : groupGLLayer.identifyAtPoint(e.containerPoint, { layers: [gltfLayer], orderByCamera: true})[0];
  const target = identifyData && identifyData.data;
  if (target) {
    transformControl.enable();
    transformControl.transform(target);
  } else {
    transformControl.disable();
  }
});
`;

export const addTranformControlCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
