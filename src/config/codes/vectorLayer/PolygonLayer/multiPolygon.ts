const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
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
    
const layer = new maptalks.PolygonLayer('polygon');
  
const multiPolygon = new maptalks.MultiPolygon([
  [[[-0.131049, 51.503568], [-0.107049, 51.503568], [-0.107049, 51.501568], [-0.131049, 51.501568]]],
  [[[-0.131049, 51.498568], [-0.107049, 51.498568], [-0.107049, 51.496568], [-0.131049, 51.496568]]],
  [[[-0.131049, 51.493568], [-0.107049, 51.493568], [-0.107049, 51.491568], [-0.131049, 51.491568]]]
], {
  visible : true,
  editable : true,
  cursor : 'pointer',
  shadowBlur : 0,
  shadowColor : 'black',
  draggable : false,
  dragShadow : false, // display a shadow during dragging
  drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
  symbol: {
    lineColor: '#34495e',
    lineWidth: 2,
    polygonFill: 'rgb(135,196,240)',
    polygonOpacity: 0.6
    }
  }).addTo(layer);
    
const groupLayer = new maptalks.GroupGLLayer('group', [layer]);
groupLayer.addTo(map);`;

export const multiPolygonCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
