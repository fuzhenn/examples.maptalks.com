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
    this.weather = false;
    this.fog = false;
    this.fogStart = 0.1;
    this.fogEnd = 100;
    this.fogColor = [0.9 * 255, 0.9 * 255, 0.9 * 255];
    this.baseMap = false;
};
map.getBaseLayer().hide();
const options = new Config();
const weather = {
    enable: options.weather,
    fog: {
        enable: options.fog,
        start: options.fogStart,
        end: options.fogEnd,
        color: [0.9, 0.9, 0.9]
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

const weatherControl = gui.add(options, 'weather').name('enable weather');
weatherControl.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.enable = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const fogControl = gui.add(options, 'fog').name('enable fog');
fogControl.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.fog.enable = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const startControl = gui.add(options, 'fogStart', 0.1, 10).name('start diatance');
startControl.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.fog.start = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const endControl = gui.add(options, 'fogEnd', 2.0, 100).name('end distance');
endControl.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.fog.end = value;
    groupgllayer.setSceneConfig(sceneConfig);
});

const fogColorController = gui.addColor(options, 'fogColor').name('fog color');
fogColorController.onChange(function (value) {
    const sceneConfig = groupgllayer.getSceneConfig();
    sceneConfig.weather.fog.color = getColor(value);
    groupgllayer.setSceneConfig(sceneConfig);
});

const baseMapController = gui.add(options, 'baseMap').name('show baseMap');
baseMapController.onChange(function (value) {
    const baseMap = map.getBaseLayer();
    if (value) {
        baseMap.show();
    } else {
        baseMap.hide();
    }
});

function getColor(rgb) {
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
}
`;

export const fogWeatherCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
