const htmlCode = `<div id="map" class="container" style="background-color: #444444"></div>`;

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
          markerType: 'ellipse',
          markerFill: '#1bbc9b',
          markerFillOpacity: 1,
          markerHeight: 21,
          markerWidth: 21
        }
      }
    ]
  };

  const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
    data: '/resources/geojson/area.geojson',
    style
  });

  geo.on('dataload', e => {
    map.fitExtent(e.extent)
  });
  
  const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
  groupLayer.addTo(map);`;

export const loadRemoteGeoDataCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
