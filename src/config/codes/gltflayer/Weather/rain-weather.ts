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
    this.weather = true;
    this.rain = false;
    this.rainDensity = 2000;
    this.windDirectionX = 0;
    this.windDirectionY = 0;
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
    rain: {
        enable: options.rain,
        density: options.rainDensity,
        windDirectionX: options.windDirectionX,
        windDirectionY: options.windDirectionY,
        rainTexture: './resources/images/rain.png'
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

const rainControl = gui.add(options, 'rain').name('enable rain');
rainControl.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.rain.enable = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const rainDensityController = gui.add(options, "rainDensity", 500, 10000).name('rain density');
rainDensityController.onFinishChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.rain.density = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const windDirectionXController = gui.add(options, "windDirectionX", -30, 30).name('x direction');
windDirectionXController.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.rain.windDirectionX = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const windDirectionYController = gui.add(options, "windDirectionY", -30, 30).name('y direction');
windDirectionYController.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.rain.windDirectionY = value;
    groupgllayer.setSceneConfig(sceneConfig);
});
`;

export const rainWeatherCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
