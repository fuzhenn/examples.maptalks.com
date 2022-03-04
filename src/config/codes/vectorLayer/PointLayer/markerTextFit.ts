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
      name: 'MapTalks'
    },
    symbol: {
      markerType: 'square',
      markerFill: 'rgb(135,196,240)',
      markerFillOpacity: '0.9',
      markerDy: 2,
      markerVerticalAlignment: 'middle',
      markerHorizontalAlignment: 'middle',
      markerTextFit: 'both',
      markerTextFitPadding: [0, 0, 0, 0],
      textName: "{name}",
      textSize: 20
    }
  }
).addTo(point);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const markerTextFitCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
