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

  // 颜色值记录在color属性中
  const data = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-74.0120070560211, 40.71407695132055], [-74.00357419087828, 40.708742027614875]
          ]
        },
        "properties": {
          color: "#ff0000"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-74.0220070560211, 40.71407695132055], [-74.01357419087828, 40.708742027614875]
          ]
        },
        "properties": {
          color: "#00ff00"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-74.0320070560211, 40.71407695132055], [-74.02357419087828, 40.708742027614875]
          ]
        },
        "properties": {
          color: "#0000ff"
        }
      },
    ]
  };
  
  const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
    data
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
          lineColor: {
            type: 'identity',
            property: 'color',
            default: '#000'
          },
          lineWidth: 4
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
