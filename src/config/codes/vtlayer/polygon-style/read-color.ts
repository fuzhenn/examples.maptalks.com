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
  data: {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -74.01138478352965,
                40.71511786220489
              ],
              [
                -74.01046210362853,
                40.70690398234356
              ],
              [
                -74.00097781255187,
                40.71147460291118
              ],
              [
                -74.01138478352965,
                40.71511786220489
              ]
            ]
          ]
        },
        "properties": {
          color: "#FF1493"
        }
      },
    ]
  }
});

geo.on('dataload', e => {
  map.fitExtent(e.extent)
});

const style = {
  style: [
    {
      filter: true,
      renderPlugin: {
        dataConfig: {
          type: 'fill',
        },
        sceneConfig: {},
        type: 'fill',
      },
      symbol: {
        polygonBloom: true,
        polygonFill: {
          type: 'identity',
          property: 'color',
          default: '#000'
        },
        polygonOpacity: 1,
        polygonPatternFile: null,
      },
    }
  ]
};
geo.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
groupLayer.addTo(map);`;

export const readColorCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
