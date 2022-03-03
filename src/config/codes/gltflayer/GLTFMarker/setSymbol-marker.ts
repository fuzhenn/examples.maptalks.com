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
    this.setSymbol = false;
};
const options = new Config();
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: '/resources/gltf/alien/alien.glb',
    rotation: [0, 0, 0],
    scale: [2, 2, 2],
    uniforms: {
        'polygonFill': [0.8, 0.0, 0.0, 1.0]
    }
};
const newSymbol = {
    url: '/resources/gltf/Fox/Fox.gltf',
    rotation: [0, 0, 90],
    scale: [2, 2, 2],
    animation: true,
    loop: true,
    uniforms: {
        'polygonFill': [0.0, 0.8, 0.0, 1.0]
    }
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
}).addTo(gltfLayer);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

//symbol control
const symbolController = gui.add(options, 'setSymbol').name("set symbol");
symbolController.onChange(function (value) {
    if (value) {
        gltfMarker.setSymbol(newSymbol);
    } else {
        gltfMarker.setSymbol(symbol);
    }
});
`;

export const setSymbolMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
