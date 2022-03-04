const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  background-color: #444444;
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
          icon: "pie"
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
            type: 'point',
          },
          sceneConfig: {
            collision: true,
            fading: true,
            depthFunc: 'always',
          },
          type: 'icon',
        },
        symbol: {
          visible: true,
          markerBloom: false,
          markerAllowOverlap: false,
          markerDx: 0,
          markerDy: 0,
          markerFile: null,
          markerFill: [0.53, 0.77, 0.94, 1],
          markerFillOpacity: 1,
          markerHeight: 20,
          markerWidth: 20,
          markerHorizontalAlignment: 'middle',
          markerIgnorePlacement: false,
          markerLineColor: [0.2, 0.29, 0.39, 1],
          markerLineDasharray: [0, 0, 0, 0],
          markerLineOpacity: 1,
          markerLineWidth: 3,
          markerOpacity: 1,
          markerPitchAlignment: 'viewport',
          markerPlacement: 'point',
          markerRotationAlignment: 'viewport',
          markerSpacing: 0,
          markerType: {
            type: 'identity',
            property: 'icon',
            default: 'ellipse',
          },
          markerVerticalAlignment: 'middle',
        } 
    }
  ]
};
geo.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
groupLayer.addTo(map);`;

export const readIconCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
