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

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

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
        textName: 'MapTalks',
        textOpacity: 1,
        textPitchAlignment: 'viewport',
        textPlacement: 'point', // 可被改成line
        textRotation: 0,
        textRotationAlignment: 'viewport',
        textSize: {
          stops: [[16, 15], [18, 60]]
        },
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

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const textScaleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
