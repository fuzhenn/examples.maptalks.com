const htmlCode = `<div id="map" class="container"></div>
<div class="pane">click on circles to change color</div>`;

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

.pane {
  background: #34495e;
  line-height: 28px;
  color: #fff;
  z-index: 10;
  position: absolute;
  top: 20px;
  right: 20px
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

const center = map.getCenter();
const width = 0.055;
const height = 0.03;
const markers = [];

for (let i = 65; i <= 90; i++) {
  const x = center.x + (Math.random() - 0.5) * width;
  const y = center.y + (Math.random() - 0.5) * height;
  markers.push(new maptalks.Marker([x, y], {
    symbol: {
      textName: String.fromCharCode(i),
      textSize: 30,
      textFill: '#fff',
      markerType: 'ellipse',
      markerFill: '#0e595e',
      markerFillOpacity: 0.4,
      markerLineWidth: 2,
      markerLineColor: '#fff',
      markerWidth: 70,
      markerHeight: 70
    }
  }).on('click', (e) => {
    // update markerFill
    e.target.updateSymbol({
      markerFill: '#f00'
    });
  }));
}

point.addGeometry(markers);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const markerEventCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
