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
const url = '/resources/gltf/Duck/Duck.glb';
const symbol = {
    url: url
};

const position = map.getCenter();
const glowlayer = new maptalks.GlowMarkerLayer('glow');
new maptalks.GlowMarker(position, {
    symbol : {
        animation: true,
        bloom: false,
        rotation: [90, 0, 0],
        uniforms: {
            'radius' : 1.0,
            'color' : [1.0, 0.0, 0.0],
            'speed' : 5.0
        }
    }
}).addTo(glowlayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [glowlayer], {sceneConfig}).addTo(map);
`;

export const glowMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};