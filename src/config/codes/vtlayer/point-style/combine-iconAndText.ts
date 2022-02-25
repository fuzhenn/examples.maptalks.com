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
      filter : ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
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
      symbol: [
          {
            markerBloom: false,
            markerAllowOverlap: false,
            markerDx: 0,
            markerDy: 0,
            markerFile: 'resources/textures/figure.jpg',
            markerFill: [0.53, 0.77, 0.94, 1],
            markerFillOpacity: 1,
            markerHeight: 20,
            markerWidth: 20,
            markerHorizontalAlignment: 'middle',
            markerIgnorePlacement: false,
            markerLineColor: [0.2, 0.29, 0.39, 1],
            markerLineDasharray: [0, 0, 0, 0],
            markerLineOpacity: 1,
            markerLineWidth: 3,
            markerOpacity: 1,
            markerPitchAlignment: 'viewport',
            markerPlacement: 'point',
            markerRotationAlignment: 'viewport',
            markerSpacing: 0,
            markerType: 'ellipse',
            markerVerticalAlignment: 'middle',
          },
          {
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
            textName: 'maptalks',
            textOpacity: 1,
            textPitchAlignment: 'viewport',
            textPlacement: 'point',
            textRotation: 0,
            textRotationAlignment: 'viewport',
            textSize: 30,
            textSpacing: 250,
            textStyle: 'normal',
            textVerticalAlignment: 'middle',
            textWeight: 'normal',
            textWrapWidth: 240,
          }
      ]      
    }
  ]
};
vt.setStyle(style);

const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);`;

export const combineIconAndTextCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
