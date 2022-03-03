import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>
<div id="info"></div>
`;

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

#info {
    position: fixed;
    background-color: rgba(13, 13, 13, 0.5);
    padding: 10px 10px 10px 10px;
    font: 13px bold sans-serif;
    color: #fff;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 70px;
    overflow: hidden
  }
`;

const jsCode = `
${map}
${sceneConfig}
const url1 = '/resources/gltf/alien/alien.glb';
const url2 = '/resources/gltf/vibut_the_robot/scene.gltf';

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker1 = new maptalks.GLTFMarker(position, {
    symbol: {
        url: url1
    }
}).addTo(gltfLayer);

const gltfMarker2 = new maptalks.GLTFMarker(position.add(0.01, 0), {
    symbol: {
        url: url2,
        animation: true,
        loop: true
    }
}).addTo(gltfLayer);

gltfLayer.on('modelload', () => {
    document.getElementById('info').innerHTML = 'all gltf models has been loaded';
});
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
`;

export const modelloadGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
