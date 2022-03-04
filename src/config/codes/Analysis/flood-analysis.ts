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
  this.waterHeight = 10;
  this.waterColor = [0.1 * 255, 0.5 * 255, 0.6 * 255];
};
const options = new Config();
const url = '/resources/gltf/new_york_city._manhattan/scene.gltf';
const symbol = {
  url: url,
  scale: [15, 15, 15]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
});

gltfLayer.addGeometry(gltfMarker);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

const floodAnalysis = new maptalksgl.FloodAnalysis({
  waterHeight: options.waterHeight,
  waterColor: [0.1, 0.5, 0.6]
});
floodAnalysis.addTo(groupGLLayer);

const waterHeightController = gui.add(options, 'waterHeight', 0, 20);
waterHeightController.onChange(function (value) {
  floodAnalysis.update('waterHeight', value);
});
const waterColorController = gui.addColor(options, 'waterColor');
waterColorController.onChange(function (value) {
  floodAnalysis.update('waterColor', [value[0] / 255, value[1] / 255, value[2] / 255]);
});

map.setCenter(new maptalks.Coordinate([-0.12791737312272744,51.52082639594201]));
`;
export const floodAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
