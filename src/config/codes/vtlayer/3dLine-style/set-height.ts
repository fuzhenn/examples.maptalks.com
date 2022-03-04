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
        type: 'lit',
        dataConfig: {
          type: 'line-extrusion',
          altitudeProperty: 'height', // 通过数据里面的属性字段设置高度
          minHeightProperty: null,
          altitudeScale: 1,
          defaultAltitude: 80,// 设置默认高度
          topThickness: 0,
          top: true,
          side: true,
        },
        sceneConfig: {
          animation: null,
          animationDuration: 800,
        },
      },
      symbol: {
        bloom: false,
        ssr: false,
        lineWidth: 20,
        lineOpacity: 1,
        material: {
          baseColorFactor: [1, 1, 1, 1]
        },
      },
    }
  ]
};
vt.setStyle(style);
  
const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const setHeightCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
