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
const gui = new dat.GUI({ width: 250 });
const Config = function () {
  this.outline = false;
};
const options = new Config();
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  url: url,
  shadow: true,
  scale: [2, 2, 2]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol
}).addTo(gltfLayer);

const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

//outline control
const outlineController = gui.add(options, 'outline');
outlineController.onChange(function (value) {
  if (value) {
    gltfMarker.outline();
  } else {
    gltfMarker.cancelOutline();
  }
});
`;

export const outlineMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
