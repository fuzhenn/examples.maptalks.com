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
        type: 'lit',
        dataConfig: {
          type: 'line-extrusion',
          uv: true,
          tangent: true,
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
        bloom: false,
        ssr: false,
        lineWidth: 20,
        lineOpacity: 1,
        material: {
          baseColorTexture: '/resources/textures/figure.jpg',
          baseColorFactor: [1, 1, 1, 1],
          hsv: [0, 0, 0],
          baseColorIntensity: 1,
          contrast: 1,
          outputSRGB: 1,
          metallicRoughnessTexture: null,
          roughnessFactor: 1,
          metallicFactor: 1,
          normalTexture: null,
          noiseTexture: null,
          uvScale: [1, 1],
          uvOffset: [0, 0],
          uvRotation: 0,
          uvOffsetAnim: [0, 0],
          normalMapFactor: 1,
          normalMapFlipY: 0,
          bumpTexture: null,
          bumpScale: 0.02,
          clearCoatThickness: 5,
          clearCoatFactor: 0,
          clearCoatIor: 1.4,
          clearCoatRoughnessFactor: 0.04,
          occlusionTexture: null,
          emissiveTexture: null,
          emissiveFactor: [0, 0, 0],
          emitColorFactor: 1,
          emitMultiplicative: 0,
        },
      },
    }
  ]
};
vt.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);`;

export const setTextureCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
