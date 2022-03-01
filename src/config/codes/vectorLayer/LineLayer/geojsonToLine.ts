const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container {
    width: 100%;
    height: 100%;
}`;

const jsCode = `
const map = new maptalks.Map('map', {
    center: [-0.113049, 51.498568],
    zoom: 14,
    baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a','b','c','d'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    })
});

const lineLayer = new maptalks.LineStringLayer('linelayer');

const json = {
    'type': 'Feature',
    'geometry': {
        'type': 'LineString',
        'coordinates': [[-0.131049, 51.498568],
        [-0.107049, 51.498568]]
    },
    'properties': {
        'name': 'LineString'
    }
};
const line = maptalks.GeoJSON.toGeometry(json).addTo(lineLayer);
line.updateSymbol({
    'lineColor' : '#f00',
    'lineWidth' : 5
});
  
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);`;

export const geojsonToLineCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
