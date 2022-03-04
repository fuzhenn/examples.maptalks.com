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
        dataConfig: {
          type: 'line',
        },
        sceneConfig: {},
        type: 'line',
      },
      symbol: {
        lineBloom: true, // true:开启泛光 false:关闭泛光
        lineCap: 'butt',
        lineColor: [0.73, 0.73, 0.73, 1],
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
        lineWidth: 10,
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
      antialias: {
        enable: true,
        taa: true,
        jitterRatio: 0.25,
      },
      ssr: {
        enable: true,
      },
      bloom: {
        enable: true,
        threshold: 0,
        factor: 1,
        radius: 0.02,
      },
      ssao: {
        enable: true,
        bias: 0.08,
        radius: 0.08,
        intensity: 1.5,
      },
      sharpen: {
        enable: false,
        factor: 0.2,
      },
      outline: {
        enable: true,
        outlineFactor: 0.3,
        highlightFactor: 0.2,
        outlineWidth: 1,
        outlineColor: [1, 1, 0],
      },
    },
    ground: {
      enable: true,
      renderPlugin: { type: 'fill' },
      symbol: {
        polygonFill: [0.54, 0.54, 0.54, 1],
        polygonOpacity: 1,
      },
    },
  }
});
groupLayer.addTo(map);`;

export const lineBloomCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
