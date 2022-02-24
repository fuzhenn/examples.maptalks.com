import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl@0.66.0/dist/maptalksgl.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gltf-layer/dist/maptalks.gltf.js"></script>
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
}`;

const jsCode = `
${map}
${sceneConfig}
const gui = new dat.GUI({ width: 250 });
const Config = function () {
    this.verticalAngle = 60;
    this.horizonalAngle = 30;
};
const options = new Config();
map.setCenter([0, 0]);
const url = '/resources/gltf/new_york_city._manhattan/scene.gltf';
const symbol = {
    url: url,
    scale: [5, 5, 5]
};

const gltflayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfmarker = new maptalks.GLTFMarker(position, {
    symbol: symbol
});

gltflayer.addGeometry(gltfmarker);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);

const eyePos = [0.02, 0, 0];
const lookPoint = [0, 0, 0];
const verticalAngle = options.verticalAngle;
const horizonAngle = options.horizonalAngle;
const viewshedAnalysis = new maptalksgl.ViewshedAnalysis({
    eyePos,
    lookPoint,
    verticalAngle,
    horizonAngle
});
viewshedAnalysis.addTo(groupgllayer);

const verticalAngleController = gui.add(options, 'verticalAngle', 0, 90);
verticalAngleController.onChange(function (value) {
    viewshedAnalysis.update('verticalAngle', value);
    updateHelpLines(value, options.horizonalAngle);
});
const horizonalAngleController = gui.add(options, 'horizonalAngle', 0, 90);
horizonalAngleController.onChange(function (value) {
    viewshedAnalysis.update('horizonAngle', value);
    updateHelpLines(options.verticalAngle, value);
});

updateHelpLines(options.verticalAngle, options.horizonalAngle);

function updateHelpLines(verticalAngle, horizonalAngle) {
    let vLayer = map.getLayer('vLayer');
    if (!vLayer) {
        vLayer = new maptalks.VectorLayer('vLayer', { enableAltitude : true }).addTo(map)
    }
    vLayer.clear();
    const dHorizon = Math.tan(Math.PI * horizonalAngle / 360) * 0.02;
    const left = [0, -dHorizon], right = [0, dHorizon];
    const symbol = {
        'lineColor' : '#1bbc9b',
        'lineDasharray' : [10, 5, 5],
        'lineWidth' : 2
    };
    const height = 1200 * Math.tan(Math.PI * verticalAngle / 360);
    const leftup = new maptalks.LineString([[0.02, 0], left],{
        symbol,
        properties : {
            'altitude' : [0, height]
        },
    }).addTo(vLayer);
    const rightup = new maptalks.LineString([[0.02, 0], right],{
        symbol,
        properties : {
            'altitude' : [0, height]
        },
    }).addTo(vLayer);

    const leftbottom = new maptalks.LineString([[0.02, 0], left],{
        symbol,
        properties : {
            'altitude' : [0, -height]
        },
    }).addTo(vLayer);
    const rightbottom = new maptalks.LineString([[0.02, 0], right],{
        symbol,
        properties : {
            'altitude' : [0, -height]
        },
    }).addTo(vLayer);

    const kuang = new maptalks.LineString([left, right, right, left, left],{
        symbol,
        properties : {
            'altitude' : [height, height, -height, -height, height]
        },
    }).addTo(vLayer);
    const centerMarker = new maptalks.Marker(eyePos, {
        symbol: {
            markerFile: '/resources/images/eye.png',
            markerWidth: 32,
            markerHeight: 32
        }
    }).addTo(vLayer);
}
`;

export const viewshedAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
