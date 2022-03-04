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
  
const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const style = {
  style: [
    {
      filter : [
        'all',
        ['==', '$layer', 'internal-road'],
        ['==', '$type', 'LineString'],
      ],
      renderPlugin: {
        dataConfig: {
          type: 'line',
        },
        sceneConfig: {},
        type: 'line',
      },
      symbol: {
        lineBloom: true, // true:开启泛光 false:关闭泛光
        lineColor: [0.73, 0.73, 0.73, 1],
        lineOpacity: 1,
        lineWidth: 3
      },
    }
  ]
};
vt.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [vt], {
    // 需要先开启后处理中的bloom属性
  sceneConfig:{
    postProcess: {
      enable: true,
      bloom: {
        enable: true,
        threshold: 0,
        factor: 1,
        radius: 0.02,
      }
    }
  }
});
groupLayer.addTo(map);`;

export const lineBloomCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
