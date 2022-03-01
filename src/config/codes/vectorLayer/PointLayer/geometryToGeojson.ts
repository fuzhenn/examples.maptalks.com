const htmlCode = `<div id="map" class="container"></div>
<div id="info">`;

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

#info {
  position: fixed;
  background-color: rgba(13, 13, 13, 0.5);
  padding: 10px 10px 10px 10px;
  font: 13px bold sans-serif;
  color: #fff;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 70px;
  overflow: hidden
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
  
const point = new maptalks.PointLayer('point');

const marker = new maptalks.Marker([-0.113049,51.498568], {
  properties: {
    name: 'point marker'
  }
}).addTo(point);

marker.setSymbol({
  textFaceName: 'sans-serif',
  textName: 'MapTalks',
  textFill: '#34495e',
  textSize: 40
})

document.getElementById('info').innerHTML = JSON.stringify(marker.toGeoJSON());
  
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const geometryToGeojsonCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
