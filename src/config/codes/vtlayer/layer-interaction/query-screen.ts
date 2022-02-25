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
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
  
const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
  data: '/resources/geojson/area.geojson'
});

geo.on('dataload', e => {
  map.fitExtent(e.extent)
});

const style = {
  style: [
    {
      "filter": true,
      "renderPlugin": {
      "dataConfig": {
          "type": "fill"
        },
        "sceneConfig": {},
        "type": "fill"
      },
      "symbol": {
        "polygonBloom": false,
        "polygonFill": 'rgb(135,196,240)',
        "polygonOpacity": 1,
        "polygonPatternFile": null,
        "visible": true
      }
    },
    {
      "filter": true,
      "renderPlugin": {
        "dataConfig": {
          "type": "line"
        },
        "sceneConfig": {},
        "type": "line"
      },
      "symbol": {
        "lineBloom": false,
        "lineCap": "butt",
        "lineColor": '#34495e',
        "lineDasharray": [0, 0, 0, 0],
        "lineDashColor": [1, 1, 1, 0],
        "lineDx": 0,
        "lineDy": 0,
        "lineGapWidth": 0,
        "lineJoin": "miter",
        "lineOpacity": 1,
        "linePatternAnimSpeed": 0,
        "linePatternFile": null,
        "lineStrokeWidth": 0,
        "lineStrokeColor": [0, 0, 0, 0],
        "lineJoinPatternMode": 0,
        "lineWidth": 2,
        "visible": true
      }
    }
  ]
};
geo.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
groupLayer.addTo(map);

const data = geo.identifyAtPoint([364, 430], { tolerance: 2 })
console.log(data)`;

export const queryScreenCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
