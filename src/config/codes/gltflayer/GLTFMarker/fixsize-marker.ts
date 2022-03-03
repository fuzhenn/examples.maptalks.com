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
    this.fixSizeOnZoom = false;
};
const options = new Config();
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url,
    fixSizeOnZoom: options.fixSizeOnZoom,
    scale: [2, 2, 2]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol
}).addTo(gltflayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

//fixSizeOnZoom control
const fixSizeOnZoomController = gui.add(options, 'fixSizeOnZoom');
fixSizeOnZoomController.onChange(function (value) {
    if (value) {
        gltfmarker.setFixSizeOnZoom(map.getZoom());
    } else {
        gltfmarker.cancelFixSize();
    }
});
`;

export const fixSizeOnZoomMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
