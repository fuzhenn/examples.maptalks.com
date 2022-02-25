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
      filter: ['all', ['==', '$layer', 'water'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: 'fill',
        },
        sceneConfig: {},
        type: 'water',
      },
      symbol: {
        ssr: true,
        texWaveNormal: '/resources/textures/texWaveNormal.png',
        texWavePerturbation: '/resources/textures/texWavePerturbation.png',
        waterBaseColor: [0.1451, 0.2588, 0.4863, 1],
        contrast: 1,
        hsv: [0, 0, 0],
        uvScale: 3,
        animation: true,
        waterSpeed: 1,
        waterDirection: 0,
      },
    },
    {
      filter: ['all', ['==', '$layer', 'water'], ['==', '$type', 'Polygon']],
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
          textName: 'maptalks',
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
    },
    {
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: '3d-extrusion',
          uv: true,
          tangent: true,
          altitudeProperty: 'height',
          minHeightProperty: 'min_height',
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
          baseColorFactor: [0.53, 0.73, 0.48, 1],
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

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {
    // 需要先开启后处理中的ssr属性
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

export const drawTextCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
