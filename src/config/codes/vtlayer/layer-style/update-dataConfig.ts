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
          type: '3d-extrusion',
          uv: true,
          tangent: true,
          altitudeProperty: null,
          minHeightProperty: null,
          altitudeScale: 1,
          defaultAltitude: 10,
          topThickness: 0,
          top: true,
          side: true,
        },
        sceneConfig: {},
        type: 'lit',
      },
      symbol: {
        bloom: false,
        ssr: false,
        polygonOpacity: 1,
        material: {
          baseColorTexture: null,
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
        }
      },
    }
  ]
};
vt.setStyle(style);

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);

vt.updateDataConfig(0, {
  altitudeProperty: 'height',
})`;

export const updateDataConfigCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
