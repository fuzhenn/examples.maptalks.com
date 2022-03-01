const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
<a href="javascript:openCollision();">open collision</a>
<a href="javascript:closeCollision();">close collision</a>
<a href="javascript:openFading();">open fading</a>
<a href="javascript:closeFading();">close fading</a>
</div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
}

.pane {
  background: #34495e;
  line-height: 28px;
  color: #fff;
  z-index: 10;
  position: absolute;
  top: 20px;
  right: 20px
}

.pane a {
  display: block;
  color: #fff;
  text-align: left;
  padding: 0 10px;
  min-width: 28px;
  min-height: 28px;
  float: left
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-0.113049,51.49856],
  zoom: 16,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const point = new maptalks.PointLayer('point', {
  collision: true
});

const center = map.getCenter();
const width = 0.055;
const height = 0.03;
const markers = [];

for (let i = 0; i <= 5000; i++) {
  const x = center.x + (Math.random() - 0.5) * width;
  const y = center.y + (Math.random() - 0.5) * height;
  markers.push(new maptalks.Marker([x, y], {
    symbol: {
      markerType: 'ellipse',
      markerFill: '#0e595e',
      markerFillOpacity: 0.8,
      markerLineWidth: 2,
      markerLineColor: '#fff',
      markerWidth: 20,
      markerHeight: 20
    }
  }));
}

point.addGeometry(markers);

function openCollision() {
    console.log(111)
  point.options.sceneConfig.collision = true;
  point.getRenderer().setToRedraw();
}

function closeCollision() {
  point.options.sceneConfig.collision = false
  point.getRenderer().setToRedraw();
}

function openFading() {
  point.options.sceneConfig.fading = true
}

function closeFading() {
  point.options.sceneConfig.fading = false
}

const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const collisionCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};