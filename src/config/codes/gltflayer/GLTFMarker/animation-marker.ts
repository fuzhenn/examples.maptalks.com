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
    this.animationList = 'Survey';
};
const options = new Config();
const url = '/resources/gltf/Fox/Fox.gltf';
const symbol = {
    url: url,
    shadow: true,
    animation: options.animation,
    animationName: options.animationList, //first animation default
    loop: options.loop,
    scale: [2, 2, 2]
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
const animationListControl = gui.add(options, 'animationList', ['Survey', 'Walk', 'Run']).name('animation list');
animationListControl.onChange(function(value) {
    gltfmarker.setCurrentAnimation(value);
});
`;

export const animationMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
