const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
<a href="javascript:hightlight();">高亮所有矢量线</a>
<a href="javascript:cancelHightlight();">取消高亮</a>
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
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 25px;
  z-index: 10;
}
  
.pane a {
  display: block;
  float: left;
  text-align: left;
  margin-left: 6px;
  padding: 0 10px;
  min-width: 28px;
  min-height: 25px;
  color: #000;
  text-decoration: none;
  background: #efefef;
  border: 1px solid #000;
}`;

const jsCode = `
const map = new maptalks.Map('map', {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const lineLayer = new maptalks.LineStringLayer('linelayer');
const lines = [];
for (let i = 0; i < 3; i++) {
  const line = new maptalks.LineString([
    [-0.123049 + 0.02 * i, 51.503568],
    [-0.136049 + 0.02 * i, 51.503568]
  ], {
    'symbol': {
      'lineColor': '#1bbc9b',
      'lineWidth': 3
    }
  }).addTo(lineLayer);
  line.on('mouseenter', function (e) {
    e.target.updateSymbol({
      'lineColor': '#f00',
      'lineWidth': 5
    });
  }).on('mouseout', function (e) {
    e.target.updateSymbol({
      'lineColor': '#1bbc9b',
      'lineWidth': 3
    });
  });
  lines.push(line);
}

function hightlight() {
  lines.forEach(function(line) {
    line.updateSymbol({
      'lineColor': '#f00',
      lineWidth: 5
    });
  });
}

function cancelHightlight() {
  lines.forEach(function(line) {
    line.updateSymbol({
      'lineColor': '#1bbc9b',
      lineWidth: 3
    });
  });
}
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);
`;

export const hightLightLineCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
