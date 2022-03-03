const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:styleLayer();">set style</a></div>`;

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
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);
function styleLayer() {
    lineLayer.setStyle([
        {
            'filter': ['==', 'count', 100],
            'symbol': getSymbol('#1bbc9b')
        },
        {
            'filter': ['==', 'count', 200],
            'symbol': getSymbol('rgb(216,115,149)')
        },
        {
            'filter': ['==', 'count', 300],
            'symbol': getSymbol('rgb(135,196,240)')
        }
    ]);
}

for (let i = 0; i < 3; i++) {
    new maptalks.LineString([
        [-0.123049 + 0.02 * i, 51.503568],
        [-0.136049 + 0.02 * i, 51.503568]
    ], {
        'properties': {
        'count': (i + 1) * 100
        }
    }).addTo(lineLayer);
}

function getSymbol(color) {
    return [
      {
        'polygonFill': color,
        'polygonOpacity': 0.5,
        'lineColor': '#000',
        'lineWidth': 2
      },
      {
        'textName' : '{count}',
        'textSize' : 40,
        'textFill' : '#f00'
      }
    ];
}`;

export const setStyleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
