import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div id="map1"></div>
`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container{height:50%;width:100%;}
#map1{height:50%;width:100%;}`;

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
  symbol: symbol
}).addTo(gltfLayer);

const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

const map1 = new maptalks.Map('map1', {
  center: [-0.113049,51.498568],
  zoom: 14,
  pitch: 75,
  bearing: 180,
  lights: {
    ambient: {
      resource: {
        url: './resources/hdr/env.hdr'
      },
      color: [1, 1, 1],
      exposure: 2
    },
    directional: {
      color: [1, 1, 1],
      lightColorIntensity: 5000,
      direction: [-1, -1, -1]
    }
  },
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
const json = gltfLayer.toJSON();
      
const layer = maptalks.GLTFLayer.fromJSON(json);
const groupGLLayer1 = new maptalks.GroupGLLayer('gl', [layer], {sceneConfig}).addTo(map1);
`;

export const jsonGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
