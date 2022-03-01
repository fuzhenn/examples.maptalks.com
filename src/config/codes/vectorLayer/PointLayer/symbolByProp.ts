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

const c = map.getCenter();
    
const point = new maptalks.PointLayer('point');

const symbol = {
  markerType: 'ellipse',
  markerFill: 'rgb(216,115,149)',
  markerFillOpacity: {
    property: 'heat',
    type: 'identity'
  },
  markerLineWidth: 0,
  markerLineOpacity: 1,
  markerWidth: 40,
  markerHeight: 40
};
  
const marker1 = new maptalks.Marker(
  c.sub(0.020, 0),
  {
    symbol: symbol,
    properties: {
      heat: 1
    }
  }
).addTo(point);

const marker2 = new maptalks.Marker(
  c.add(0.020, 0),
  {
    symbol: symbol,
    properties: {
      heat: 0.7
    }
  }
).addTo(point);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const symbolByPropCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
