import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div id="mask" class="overlay">loading.....</div>
<script type="text/javascript" src="https://npm.elemecdn.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
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

.overlay {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align:center;
  line-height:1000px;
  font-size: 10em;
  font-color: #ffffff;
}

`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/car/car-draco.gltf';
const symbol = {
  url: url,
  scale: [6, 6, 6]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
});

gltfMarker.on('load', () => {
  document.body.removeChild(document.getElementById('mask'));
});

gltfLayer.addGeometry(gltfMarker);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
`;

export const addDracoMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
