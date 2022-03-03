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
        markerBloom: false,
        markerAllowOverlap: false,
        markerDx: 0,
        markerDy: 0,
        markerFile: null,
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
    }
  ]
};
vt.setStyle(style);

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);

vt.updateSceneConfig(0, {
  collision: false
})`;

export const updateSceneConfigCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
