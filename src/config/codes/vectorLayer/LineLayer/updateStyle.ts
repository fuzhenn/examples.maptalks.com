const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:updateStyle();">Update style</a></div>`;

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

.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:20px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;

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
const line = new maptalks.LineString([
        [-0.131049, 51.498568],
        [-0.107049, 51.498568]
    ], {
        symbol: {
            'lineColor': '#1bbc9b',
            'lineWidth': 3
        }
}).addTo(lineLayer);
  
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);

function updateStyle() {
    line.updateSymbol({
        'lineColor': 'rgb(216,115,149)',
        'lineWidth': 4
    });
}
`;

export const updateStyleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
