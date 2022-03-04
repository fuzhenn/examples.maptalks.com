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
  zoomControl: true,
});

// 只在16级上显示

const style = {
  style: [
    {
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
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
        visible: {
          type:'categorical',
          default: false,
          stops: [[16, true]]
        },
        markerType: 'ellipse',
        markerHeight: 20,
        markerWidth: 20,
        markerFill: [0.53, 0.77, 0.94, 1],        
        markerLineColor: [0.2, 0.29, 0.39, 1],
        markerLineWidth: 3
      }      
    }
  ]
};

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
  style
});


const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);`;

export const displayAtLevelCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
