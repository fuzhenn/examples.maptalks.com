import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transform-control/dist/transform-control.js"></script>`;

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
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

const transformControl = new maptalks.TransformControl();
transformControl.addTo(map);
transformControl.on('transforming', e => {
    const target = transformControl.getTransformTarget();
    target.setTRS(e.translate, e.rotation, e.scale);
});

transformControl.on('transformend', e => {
    console.log('transform end');
});

map.on('dom:click', e => {
    const identifyData = e.coordinate ? groupgllayer.identify(e.coordinate, { layers: [gltflayer], orderByCamera: true })[0] : groupgllayer.identifyAtPoint(e.containerPoint, { layers: [gltflayer], orderByCamera: true})[0];
    const target = identifyData && identifyData.data;
    console.log(target);
    if (target) {
        transformControl.enable();
        transformControl.transform(target);
    } else {
        transformControl.disable();
    }
});
`;

export const addTranformControlCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
