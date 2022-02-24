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
            "type": "LineString",
            "coordinates": [
              [
                -74.0120070560211,
                40.71407695132055
              ],
              [
                -74.00357419087828,
                40.708742027614875
              ],
              [
                -74.00357419087828,
                40.70960410216739
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
            type: 'line',
          },
          sceneConfig: {},
          type: 'line',
        },
        symbol: {
          lineBloom: false,
          lineCap: 'butt',
          lineColor: {
            type: 'identity',
            property: 'color',
            default: '#000'
          },
          lineDasharray: [0, 0, 0, 0],
          lineDashColor: [1, 1, 1, 0],
          lineDx: 0,
          lineDy: 0,
          lineGapWidth: 0,
          lineJoin: 'miter',
          lineOpacity: 1,
          linePatternAnimSpeed: 0,
          linePatternFile: null,
          lineStrokeWidth: 0,
          lineStrokeColor: [0, 0, 0, 0],
          lineJoinPatternMode: 0,
          lineWidth: {
            type: 'interval',
            stops: [[16, 2], [18, 20]]
          },
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
