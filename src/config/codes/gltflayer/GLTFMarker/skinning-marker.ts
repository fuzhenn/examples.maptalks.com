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
    this.animation = true;
    this.loop = true;
};
const options = new Config();
const url = '/resources/gltf/vibut_the_robot/scene.gltf';
const symbol = {
    url: url,
    shadow: true,
    animation: options.animation,
    loop: options.loop,
    scale: [2, 2, 2],
    rotation: [0, 0, 180]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol
}).addTo(gltflayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

//animation control
const animationController = gui.add(options, 'animation');
animationController.onChange(function (value) {
    gltfmarker.setAnimation(value);
});
const loopController = gui.add(options, 'loop');
loopController.onChange(function (value) {
    gltfmarker.setAnimationLoop(value);
});
`;

export const skinningMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
