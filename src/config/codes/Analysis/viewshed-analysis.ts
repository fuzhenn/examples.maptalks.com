import { map, sceneConfig } from '../gltflayer/gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/3dtiles/dist/maptalks.3dtiles.js"></script>
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
const mapCode = map
  .replace('bearing: 180', 'bearing: 90')
  .replace('pitch: 80', 'pitch: 24.8');
const jsCode = `
${mapCode}
${sceneConfig}
const gui = new dat.GUI({ width: 250 });
var Config = function () {
  this.enableAnalysis = true;
  this.verticalAngle = 30;
  this.horizontalAngle = 30;
  this.visibleColor = [0, 255, 0];
  this.invisibleColor = [30, 30, 200];
  this.lookPointHeight = 0;
  this.eyePosHeight = 0;
};
var options = new Config();
const thrDTileslayer = new maptalks.Geo3DTilesLayer('3d-tiles', {
  //maxGPUMemory: 128,
  services : [
      {
          url: 'http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json',
          ambientLight : [1, 1, 1],
          maximumScreenSpaceError: 1.0,
          pointOpacity: 0.5,
          pointSize: 3,
          heightOffset: -400
      }
  ]
});
let viewshedAnalysis = null;
const groupgllayer = new maptalks.GroupGLLayer('gl', [thrDTileslayer], {sceneConfig}).addTo(map);
const vLayer = new maptalks.VectorLayer('helper').addTo(map);
thrDTileslayer.once('loadtileset', e => {
  const extent = thrDTileslayer.getExtent(e.index);
  map.fitExtent(extent, 0, { animation: false });
  const coordinate = map.getCenter();
  const lookPoint = [coordinate.x, coordinate.y, 0];
  const eyePos = [coordinate.x + 0.003, coordinate.y, options.lookPointHeight];
  const eyeMarker = new maptalks.Marker([eyePos[0], eyePos[1]], {
    symbol: {
      markerFile: '/resources/images/eye.png',
      markerWidth: 32,
      markerHeight: 32
    },
    draggable: true
  }).addTo(vLayer);
  const lookPointMarker = new maptalks.Marker([lookPoint[0], lookPoint[1]], {
    draggable: true
  }).addTo(vLayer);
  lookPointMarker.setInfoWindow({
    'title'     : '提示',
    'content'   : '拖动视点'
  });
  lookPointMarker.openInfoWindow();
  const verticalAngle = options.verticalAngle;
  const horizontalAngle = options.horizontalAngle;
  viewshedAnalysis = new maptalksgl.ViewshedAnalysis({
    lookPoint,
    eyePos,
    invisibleColor: getColor(options.invisibleColor).concat(1.0),
    verticalAngle,
    horizontalAngle
  });
  viewshedAnalysis.addTo(groupgllayer);

  lookPointMarker.on('dragging', e => {
    lookPointMarker.removeInfoWindow();
    viewshedAnalysis.update('lookPoint', [e.coordinate.x, e.coordinate.y, 0]);
  });
  eyeMarker.on('dragging', e => {
    viewshedAnalysis.update('eyePos', [e.coordinate.x, e.coordinate.y, 0]);
  });
});

function getColor(rgb) {
  return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
}
initGUI();

function initGUI() {
  const enableAnalysisControl = gui.add(options, 'enableAnalysis').name('开启可视域分析');
  enableAnalysisControl.onChange(function (value) {
      if (value) {
          vLayer.show();
          viewshedAnalysis.enable();
      } else {
          vLayer.hide();
          viewshedAnalysis.disable();
      }
  });

  const verticalAngleControl = gui.add(options, 'verticalAngle', 0, 90);
  verticalAngleControl.onChange(function (value) {
      viewshedAnalysis.update('verticalAngle', value);
  });
  const horizontalAngleControl = gui.add(options, 'horizontalAngle', 0, 90);
  horizontalAngleControl.onChange(function (value) {
      viewshedAnalysis.update('horizontalAngle', value);
  });
  const visibleColorControl = gui.addColor(options, 'visibleColor').name('可视区颜色');
  visibleColorControl.onChange(function (value) {
      viewshedAnalysis.update('visibleColor', getColor(value).concat(1));
  });
  const invisibleColorControl = gui.addColor(options, 'invisibleColor').name('不可视区颜色');
  invisibleColorControl.onChange(function (value) {
      viewshedAnalysis.update('invisibleColor', getColor(value).concat(1));
  });
}
`;

export const viewshedAnalysisCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
