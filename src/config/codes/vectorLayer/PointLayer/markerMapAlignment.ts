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
  
const marker1 = new maptalks.Marker(
  center.add(0.01, 0),
  {
    symbol: {
      textName: 'm4',
      textSize: 18,
      markerFile: '/resources/markers/m4.png',
      markerRotationAlignment: 'map',
      markerPitchAlignment: 'map',
      markerHeight: 80,
      markerWidth: 80,
    }
  }
).addTo(point);

const marker2 = new maptalks.Marker(
  center.add(-0.01, 0),
  {
    symbol: {
      textName: 'm5',
      textSize: 18,
      markerFile: '/resources/markers/m5.png',
      markerRotationAlignment: 'map',
      markerPitchAlignment: 'map',
      markerHeight: 80,
      markerWidth: 80,
    }
  }
).addTo(point);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const markerMapAlignmentCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
