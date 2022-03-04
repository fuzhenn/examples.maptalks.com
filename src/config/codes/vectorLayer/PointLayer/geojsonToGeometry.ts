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
  
const pointLayer = new maptalks.PointLayer('point');

const json = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-0.113049,51.49856]
  },
  properties: {
    name: 'point marker'
  }
};

const marker = maptalks.GeoJSON.toGeometry(json).addTo(pointLayer);

marker.setSymbol({
  textFaceName: 'sans-serif',
  textName: 'MapTalks',
  textFill: '#34495e',
  textSize: 40
})
  
const groupLayer = new maptalks.GroupGLLayer('group', [pointLayer]);
groupLayer.addTo(map);`;

export const geojsonToGeometryCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
