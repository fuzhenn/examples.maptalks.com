const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:styleLayer();">Set style to layer</a></div>`;

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
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
    
const layer = new maptalks.PolygonLayer('polygon').setStyle({
  filter: ['count', '>=', 0],
  symbol: getSymbol('#747474')
});

// set style to layer
function styleLayer() {
  layer.setStyle([
    {
      filter: ['==', 'count', 100],
      symbol: getSymbol('#1bbc9b')
    },
    {
      filter: ['==', 'count', 200],
      symbol: getSymbol('rgb(216,115,149)')
    },
    {
      filter: ['==', 'count', 300],
      symbol: getSymbol('rgb(135,196,240)')
    }
  ]);
}

// prepare data
for (let i = 0; i < 3; i++) {
  new maptalks.Polygon([
    [-0.123049 + 0.02 * i, 51.503568],
    [-0.136049 + 0.02 * i, 51.503568],
    [-0.136049 + 0.02 * i, 51.488568],
    [-0.123049 + 0.02 * i, 51.488568]
  ], {
      properties: {
        count: (i + 1) * 100
      }
  }).addTo(layer);
}
    
const groupLayer = new maptalks.GroupGLLayer('group', [layer]);
groupLayer.addTo(map);

function getSymbol(color) {
  return [
    {
      polygonFill: color,
      polygonOpacity: 0.5,
      lineColor: '#000',
      lineWidth: 2
    },
    {
      textName: '{count}',
      textSize: 40,
      textFill: '#fff'
      }
  ];
}

// only update rectangle's polygonFill
function updateFill() {
  polygon.updateSymbol({
    polygonFill: 'rgb(216,115,149)'
  });
}`;

export const layerStyleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
