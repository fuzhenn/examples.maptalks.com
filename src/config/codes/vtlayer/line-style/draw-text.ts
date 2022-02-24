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
  urlTemplate: 'http://116.63.251.32:8080/tile/planet-single/{z}/{x}/{y}.mvt',
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
        lineBloom: false,
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
    },
    {
      filter : [
        'all',
        ['==', '$layer', 'internal-road'],
        ['==', '$type', 'LineString'],
      ],
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
        textBloom: false,
        textAllowOverlap: false,
        textDx: 0,
        textDy: 0,
        textFaceName: 'Microsoft YaHei,sans-serif',
        textFill: [0, 0, 0, 1],
        textHaloFill: [1, 1, 1, 1],
        textHaloOpacity: 1,
        textHaloRadius: 0,
        textHorizontalAlignment: 'middle',
        textIgnorePlacement: false,
        textName: '{name}',
        textOpacity: 1,
        textPitchAlignment: 'viewport',
        textPlacement: 'point', //可被改成line
        textRotation: 0,
        textRotationAlignment: 'viewport',
        textSize: 30,
        textSpacing: 250,
        textStyle: 'normal',
        textVerticalAlignment: 'middle',
        textWeight: 'normal',
        textWrapWidth: 240,
      },
    }
  ]
};
vt.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);`;

export const drawTextCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
