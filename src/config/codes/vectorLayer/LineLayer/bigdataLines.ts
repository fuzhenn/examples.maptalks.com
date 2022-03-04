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
const map = new maptalks.Map('map', {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const extent = map.getExtent();
const longitudExtent = extent.xmax - extent.xmin;
const latitudeExtent = extent.ymax - extent.ymin;
const count = 10000;
const lineLayer = new maptalks.LineStringLayer('linelayer');
for (let i = 0; i < count; i++) {
  const coords = generateCoordinates(Math.ceil(Math.random() * 20) + 2);
  const line = new maptalks.LineString(coords, {
    symbol: {
      'lineColor' : '#1bbc9b',
      'lineWidth' : 3
    }
  }).addTo(lineLayer);
}

function generateCoordinates(length) {
  const coords = [];
  for (let i = 0; i < length; i++) {
    coords.push([extent.xmin + longitudExtent * Math.random(), extent.ymin + latitudeExtent * Math.random()]);
  }
  return coords;
}
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);
`;

export const bigdataLinesCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
