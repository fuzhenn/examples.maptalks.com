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
  }`;

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
}).addTo(gltflayer);

gltfmarker.on('click', e => {
    document.getElementById('info').innerHTML = 'click event';
});
gltfmarker.on('mousemove', e => {
    map.setCursor('url(/resources/images/cursor.png) 9 0, auto');
    gltfmarker.setUniform('polygonFill', [0.0, 0.8, 0.0, 1.0]);
});
gltfmarker.on('mouseleave', e => {
    map.resetCursor();
    gltfmarker.setUniform('polygonFill', [1, 1, 1, 1.0]);
});

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
`;

export const mouseeventMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
