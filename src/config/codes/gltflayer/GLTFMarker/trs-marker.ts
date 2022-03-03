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
    this.translationX = 0;
    this.translationY = 0;
    this.translationZ = 0;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.scaleX = 2;
    this.scaleY = 2;
    this.scaleZ = 2;
};
const options = new Config();
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url,
    shadow: true,
    translation: [options.translationX, options.translationY, options.translationZ],
    rotation: [options.rotationX, options.rotationY, options.rotationZ],
    scale: [options.scaleX, options.scaleY, options.scaleZ]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol
}).addTo(gltflayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

const translation = gui.addFolder('translation');
translation.open();
const transControllerX = translation.add(options, 'translationX', -10, 10);
transControllerX.onChange(function (value) {
    gltfmarker.setTranslation([value, transControllerY.getValue(), transControllerZ.getValue()]);
});
const transControllerY = translation.add(options, 'translationY', -10, 10);
transControllerY.onChange(function (value) {
    gltfmarker.setTranslation([transControllerX.getValue(), value, transControllerZ.getValue()]);
});
const transControllerZ = translation.add(options, 'translationZ', -10, 10);
transControllerZ.onChange(function (value) {
    gltfmarker.setTranslation([transControllerX.getValue(), transControllerY.getValue(), value]);
});

const rotation = gui.addFolder('rotation');
rotation.open();
const rotationControllerAxisX = rotation.add(options, 'rotationX', -90, 90);
rotationControllerAxisX.onChange(function (value) {
    gltfmarker.setRotation([rotationControllerAxisX.getValue(), rotationControllerAxisY.getValue(), rotationControllerAxisZ.getValue()]);
});
const rotationControllerAxisY = rotation.add(options, 'rotationY', -90, 90);
rotationControllerAxisY.onChange(function (value) {
    gltfmarker.setRotation([rotationControllerAxisX.getValue(), rotationControllerAxisY.getValue(), rotationControllerAxisZ.getValue()]);
});
const rotationControllerAxisZ = rotation.add(options, 'rotationZ', -90, 90);
rotationControllerAxisZ.onChange(function (value) {
    gltfmarker.setRotation([rotationControllerAxisX.getValue(), rotationControllerAxisY.getValue(), rotationControllerAxisZ.getValue()]);
});

const scale = gui.addFolder('scale');
scale.open();
const scaleControllerX = scale.add(options, 'scaleX', 0.1, 20);
scaleControllerX.onChange(function (value) {
    gltfmarker.setScale([value, scaleControllerY.getValue(), scaleControllerZ.getValue()]);
});
const scaleControllerY = scale.add(options, 'scaleY', 0.1, 20);
scaleControllerY.onChange(function (value) {
    gltfmarker.setScale([scaleControllerX.getValue(), value, scaleControllerZ.getValue()]);
});
const scaleControllerZ = scale.add(options, 'scaleZ', 0.1, 20);
scaleControllerZ.onChange(function (value) {
    gltfmarker.setScale([scaleControllerX.getValue(), scaleControllerY.getValue(), value]);
});
`;

export const trsMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
