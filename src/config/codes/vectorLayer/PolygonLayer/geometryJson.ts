const htmlCode = `<div id="map" class="container"></div>
<div id="map1"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: calc(100% - 2px);
  height: calc(50% - 2px);
  float: left;
  border: 1px solid
}

#map1 {
  width: calc(100% - 2px);
  height: calc(50% - 2px);
  float: right;
  border: 1px solid
}`;

const jsCode = `const c = [-0.113049,51.498568];
const map = new maptalks.Map('map', {
  center: c,
  zoom: 13,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const map1 = new maptalks.Map('map1', {
  center: c,
  zoom: 13,
  baseLayer: new maptalks.TileLayer('base1', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
  
const layer = new maptalks.PolygonLayer('polygon');
  
const polygon = new maptalks.Polygon([
  [
    [-0.131049, 51.498568],
    [-0.107049, 51.498568],
    [-0.107049, 51.493568],
    [-0.131049, 51.493568],
    [-0.131049, 51.498568]
  ]
], {
  symbol: {
    polygonFill: 'rgb(135,196,240)',
    polygonOpacity: 1,
    lineColor: '#1bbc9b',
    lineWidth: 6
  }
}).addTo(layer);
  
const groupLayer = new maptalks.GroupGLLayer('group', [layer]);
groupLayer.addTo(map);

const layer1 = new maptalks.PolygonLayer('polygon1');
maptalks.Geometry.fromJSON(polygon.toJSON()).addTo(layer1);
const groupLayer1 = new maptalks.GroupGLLayer('group1', [layer1]);
groupLayer1.addTo(map1);`;

export const geometryJsonCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
