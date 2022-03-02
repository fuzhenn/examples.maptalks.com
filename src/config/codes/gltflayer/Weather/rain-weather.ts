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
    this.rainTexture = 'rain1';
    this.windDirectionX = 0;
    this.windDirectionY = 0;
};
const textureMap = {
    rain1: './resources/images/rain1.png',
    rain2: './resources/images/rain2.png'
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
        density: 2000,
        windDirectionX: options.windDirectionX,
        windDirectionY: options.windDirectionY,
        rainTexture: textureMap.rain1
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


const rainTextureListControl = gui.add(options, 'rainTexture', ['rain1', 'rain2']).name('rain texture list'); 
rainTextureListControl.onChange(function(value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.rain.rainTexture = textureMap[value];
    console.log(sceneConfig.weather.rain);
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
