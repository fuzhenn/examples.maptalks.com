const htmlCode = `<div id="map" class="container"></div>
<div id="info">`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container {
    width: 100%;
    height: 100%;
}
#info{position:fixed;background-color:rgba(13, 13, 13, 0.5);padding:10px 10px 10px 10px;font:13px bold sans-serif;color:#fff;left:0px;top:0px;width:100%;height:70px;overflow:hidden}`;

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

const lineLayer = new maptalks.LineStringLayer('linelayer').addTo(map);
const line = new maptalks.LineString([
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.107049, 51.483568]
    ], {
        symbol: {
            'lineColor' : '#1bbc9b',
            'lineWidth' : 3
        }
}).addTo(lineLayer);
  
document.getElementById('info').innerHTML = JSON.stringify(line.toGeoJSON());
`;

export const lineToGeoJSONCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
