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
    
const point = new maptalks.PointLayer('point');
  
const marker = new maptalks.Marker(
  [-0.113049, 51.49856],
  {
    properties: {
      name: 'Hello MapTalks'
    },
    symbol: [
      {
        markerFile: 'resources/markers/3.png',
        markerTextFit: true,
        markerTextFitPadding: [0, 0, 0, 0]
      },
      {
        textFaceName: 'sans-serif',
        textName: '{name}',
        textSize: 20,
        textDy: 24
      }
    ]
  }
).addTo(point);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const markerTextFitCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
