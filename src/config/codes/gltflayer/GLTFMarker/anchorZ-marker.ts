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
    this.anchorZ = 'bottom';
};
const options = new Config();
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url,
    anchorZ: options.anchorZ,
    scale: [2, 2, 2]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol
}).addTo(gltflayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

//anchorZ control
const anchorZController = gui.add(options, 'anchorZ', ['top', 'center', 'bottom']).name('anchor position');
anchorZController.onChange(function (value) {
    gltfmarker.setAnchorZ(value);
});
`;

export const anchorZMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
