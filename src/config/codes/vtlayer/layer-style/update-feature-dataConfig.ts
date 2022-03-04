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

const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
  data: '/resources/geojson/area.geojson'
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
          type: 'fill'
        },
        type: 'fill'
      },
      symbol: {
        polygonFill: [0.345, 0.345, 0.502, 1]
      }
    },
    {
      filter: true,
      renderPlugin: {
        dataConfig: {
          type: 'line'
        },
        type: 'line'
      },
      symbol: {
        lineColor: [0.73, 0.73, 0.73, 1],
        lineWidth: 2,
        visible: true
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
            polygonBloom: false,
            polygonFill: [
              0.9725490196078431, 0.1568627450980392,
              0.403921568627451, 1
            ],
            polygonOpacity: 1,
            polygonPatternFile: null,
            visible: true
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
            lineColor: [0.73, 0.73, 0.73, 1],
            lineOpacity: 1,
            lineWidth: 2
          }
        }
      ]
    }
  ]
};
geo.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
groupLayer.addTo(map);
geo.updateFeatureDataConfig(0, 0, { foo: 1 })`;

export const updateFeatureDataConfigCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
