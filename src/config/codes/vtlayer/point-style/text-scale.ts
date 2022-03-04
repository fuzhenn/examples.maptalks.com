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
  zoom: 17,
  zoomControl: true,
});

//缩放地图，文字大小随级别放大缩小

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
        type: 'text',
      },
      symbol: {
        textFaceName: 'Microsoft YaHei,sans-serif',
        textFill: [0, 0, 0, 1],
        textHaloFill: [1, 1, 1, 1],
        textHaloOpacity: 1,
        textHaloRadius: 1,
        textName: 'MapTalks',
        textSize: {
          stops: [[16, 15], [18, 60]]
        }
      },     
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

export const textScaleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
