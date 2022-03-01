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
    symbol: {
      textFaceName: 'sans-serif',
      textName: '{name}',
      textSize: 40,
      textFill: '#34495e',
      textHaloFill: '#fff',
      textHaloRadius: 5,
      textRotation: 60 // text rotation in degree, clock-wise
    }
  }
).addTo(point);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const rotateTextCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
