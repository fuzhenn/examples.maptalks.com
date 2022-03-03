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
    url: url,
    scale: [2, 2, 2]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

gltfmarker.setProperties({
    num: 100,
    value: 1
});

gltfmarker.on('click', e => {
    const marker = e.target;
    properties = marker.getProperties();
    document.getElementById('info').innerHTML = JSON.stringify(properties);
});
`;

export const propertyMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
