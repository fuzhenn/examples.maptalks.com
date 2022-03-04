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
    this.polygonFill = [255, 255, 255],
    this.metallicFactor = 0;
    this.roughnessFactor = 0.4;
};
const options = new Config();
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url,
    shadow: true,
    scale: [2, 2, 2],
    uniforms: {
        polygonFill: [options.polygonFill[0] / 255, options.polygonFill[1] / 255, options.polygonFill[2] / 255, 1.0],
        metallicFactor: options.metallicFactor,
        roughnessFactor: options.roughnessFactor,
    }
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
    symbol
}).addTo(gltfLayer);

const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

//matrial control
const polygonFillController = gui.addColor(options, 'polygonFill');
polygonFillController.onChange(function (value) {
    gltfMarker.setUniform('polygonFill', [value[0] / 255, value[1] / 255, value[2] / 255, 1.0]);
});

const metallicFactorController = gui.add(options, 'metallicFactor', 0, 1);
metallicFactorController.onChange(function (value) {
    gltfMarker.setUniform('metallicFactor', value);
});

const roughnessFactorController = gui.add(options, 'roughnessFactor', 0, 1);
roughnessFactorController.onChange(function (value) {
    gltfMarker.setUniform('roughnessFactor', value);
});
`;

export const materialMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
