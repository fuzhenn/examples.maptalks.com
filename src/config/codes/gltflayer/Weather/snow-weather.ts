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
}
#map { width: 100%; height: 100%; background-color: black }
`;

const jsCode = `
${map}
${sceneConfig}
const gui = new dat.GUI({ width: 250 });
const Config = function () {
    this.snow = true;
};
const options = new Config();
const weather = {
    enable: options.weather,
    fog: {
        enable: true,
        start: 0.1,
        end: 100,
        color: [0.9, 0.9, 0.9]
    },
    snow: {
        enable: options.snow,
        snowGroundTexture: './resources/images/perlin.png'
    }
};
sceneConfig.weather = weather;

const url = '/resources/gltf/new_york_city._manhattan/scene.gltf';
const symbol = {
    url: url,
    shadow: true,
    scale: [5, 5, 5]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

var snowControl = gui.add(options, 'snow').name('enable snow');
snowControl.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.snow.enable = value;
    groupgllayer.setSceneConfig(sceneConfig);
});
`;

export const snowWeatherCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
