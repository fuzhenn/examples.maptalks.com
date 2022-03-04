import { map, sceneConfig } from '../gltflayer/gltf-util';
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
    this.waterHeight = 5;
    this.waterColor = [0.1 * 255, 0.5 * 255, 0.6 * 255];
};
const options = new Config();
const url = '/resources/gltf/new_york_city._manhattan/scene.gltf';
const symbol = {
    url: url,
    scale: [5, 5, 5]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

const floodAnalysis = new maptalksgl.FloodAnalysis({
    waterHeight: options.waterHeight,
    waterColor: [0.1, 0.5, 0.6]
});
floodAnalysis.addTo(groupgllayer);

const waterHeightController = gui.add(options, 'waterHeight', 0, 20);
waterHeightController.onChange(function (value) {
    floodAnalysis.update('waterHeight', value);
});
const waterColorController = gui.addColor(options, 'waterColor');
waterColorController.onChange(function (value) {
    floodAnalysis.update('waterColor', [value[0] / 255, value[1] / 255, value[2] / 255]);
});
`;

export const floodAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
