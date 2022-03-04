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

const center = map.getCenter();
    
const pointLayer = new maptalks.PointLayer('point');
  
const marker = new maptalks.Marker(
  map.getCenter(),
  {
    symbol: [
      {
        markerType: 'ellipse',
        markerFill: '#fff',
        markerFillOpacity: 1,
        markerWidth: 20,
        markerHeight: 20,
        markerLineWidth: 0
      },
      {
        markerType: 'ellipse',
        markerFill: '#1bc8ff',
        markerFillOpacity: 0.9,
        markerWidth: 55,
        markerHeight: 55,
        markerLineWidth: 0
      },
      {
        markerType: 'ellipse',
        markerFill: '#0096cd',
        markerFillOpacity: 0.8,
        markerWidth: 91,
        markerHeight: 91,
        markerLineWidth: 0
      },
      {
        markerType: 'ellipse',
        markerFill: '#0096cd',
        markerFillOpacity: 0.3,
        markerWidth: 130,
        markerHeight: 130,
        markerLineWidth: 0
      },
      {
        markerType: 'ellipse',
        markerFill: '#0096cd',
        markerFillOpacity: 0.2,
        markerWidth: 172,
        markerHeight: 172,
        markerLineWidth: 0
      }
    ]
  }
).addTo(pointLayer);
    
const groupLayer = new maptalks.GroupGLLayer('group', [pointLayer]);
groupLayer.addTo(map);`;

export const compositeSymbolCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
