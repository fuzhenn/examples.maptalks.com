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
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
const options = {
    'items'  : [
            {item: 'item1', click: function () { alert('Click item1'); }},
        '-',
            {item: 'item2', click: function () { alert('Click item2'); }}
    ]
};
gltfmarker.on('load', () => {
    gltfmarker.setMenu(options).openMenu();
});
`;

export const menuMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
