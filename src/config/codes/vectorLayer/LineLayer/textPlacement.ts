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
    zoom: 12,
    baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a','b','c','d'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    })
});

const lineLayer = new maptalks.LineStringLayer('linelayer');
const line = new maptalks.LineString([
        map.getCenter().sub(0.1, 0),
        map.getCenter().add(0.1, 0),
        map.getCenter().add(0.1, -0.1)
    ], {
        symbol: {
            'textPlacement': 'line',
            'lineColor' : '#1bbc9b',
            'lineWidth' : 3,
            'markerFile': '/resources/images/marker.png'
        }
}).addTo(lineLayer);
  
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);
`;

export const textPlacementCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
