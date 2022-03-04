const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  background-color: #444444,
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
          altitudeProperty: null,
          minHeightProperty: null,
          altitudeScale: 1,
          defaultAltitude: 40,
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
        lineWidth: 20,
        lineOpacity: 1,
        material: {
          baseColorTexture: '/resources/textures/figure.jpg',
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

export const setTextureCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
