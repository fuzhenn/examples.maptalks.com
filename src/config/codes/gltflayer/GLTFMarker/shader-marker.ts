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
    this.shaderList = 'pbr';
};
const options = new Config();
const url = '/resources/gltf/Duck/Duck.glb';
const symbol = {
    shader: options.shaderList,
    url: url
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
}).addTo(gltflayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
const shaderListControl = gui.add(options, 'shaderList', ['pbr', 'phong', 'wireframe']).name('shader list');
shaderListControl.onChange(function(value) {
    gltfmarker.setShader(value);
});
`;

export const shaderMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
