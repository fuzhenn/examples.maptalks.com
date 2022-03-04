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
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: 'fill',
        },
        sceneConfig: {},
        type: 'fill',
      },
      symbol: {
        polygonBloom: false,
        polygonFill: [0.345, 0.345, 0.502, 1],
        polygonOpacity: 1,
        polygonPatternFile: null,
      },
    },
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
        textPlacement: 'point',
        textRotation: 0,
        textRotationAlignment: 'viewport',
        textSize: 15,
        textSpacing: 250,
        textStyle: 'normal',
        textVerticalAlignment: 'middle',
        textWeight: 'normal',
        textWrapWidth: 240,
      },
    },
  ]
};
vt.setStyle(style);

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const drawTextCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
