const htmlCode = `<div id=map class=container></div>`;

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
  

  // 通过在featureStyle中把symbol.visible设为false，单独隐藏id为12的数据的面填充
  const style = {
    style: [
      {
        filter: true,
        renderPlugin: {
          dataConfig: {
            type: 'fill'
          },
          sceneConfig: {},
          type: 'fill'
        },
        symbol: {
          polygonFill: '#577570',
          polygonOpacity: 1
        }
      },
      {
        filter: true,
        renderPlugin: {
          dataConfig: {
            type: 'line'
          },
          sceneConfig: {},
          type: 'line'
        },
        symbol: {
          lineColor: '#d0d0d0',
          lineOpacity: 1,
          lineWidth: 2
        }
      }
    ],
    featureStyle: [
      {
        id: 12,
        style: [
          {
            renderPlugin: {
              dataConfig: {
                type: 'fill'
              },
              sceneConfig: {},
              type: 'fill'
            },
            symbol: {
              visible: false,
              polygonFill: '#577570'
            }
          },
          {
            renderPlugin: {
              dataConfig: {
                type: 'line'
              },
              sceneConfig: {},
              type: 'line'
            },
            symbol: {
              visible: true,
              lineColor: [1, 0, 0, 1],
              lineWidth: 2
            }
          },
        ]
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
  groupLayer.addTo(map);
`;

export const hideFeatureCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
