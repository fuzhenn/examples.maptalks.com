const map = `const map = new maptalks.Map('map', {
    center: [-74.01930247561234, 40.708597936066184],
    zoom: 17.739089451843377,
    "bearing": -173.3999999999985,
    "pitch": 80,
    lights: {
        ambient: {
            resource: {
                url: './resources/hdr/env.hdr'
            },
            color: [1, 1, 1],
            exposure: 2
      },
      directional: {
          color: [1, 1, 1],
          lightColorIntensity: 5000,
          direction: [1, -0.4, -1]
      }
    },
    baseLayer: new maptalks.TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a','b','c','d'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    })
});
`;

const sceneConfig = `const sceneConfig = {
    "environment": {
        "enable": true,
        "mode": 0,
        "level": 0,
        "brightness": 0
    },
    "shadow": {
        "type": "esm",
        "enable": true,
        "quality": "high",
        "opacity": 0.5,
        "color": [
            0,
            0,
            0
        ],
        "blurOffset": 1
    },
    "postProcess": {
            "enable": true,
            "antialias": {
                "enable": true,
                "taa": true,
                "jitterRatio": 0.25
            },
            "ssr": {
                "enable": true
            },
            "bloom": {
                "enable": true,
                "threshold": 0.1,
                "factor": 0.5,
                "radius": 0.3
            },
            "ssao": {
                "enable": true,
                "bias": 0.08,
                "radius": 0.08,
                "intensity": 1.5
            },
            "sharpen": {
                "enable": false,
                "factor": 0.2
            },
            "outline": {
                "enable": true,
                "outlineFactor": 0.5,
                "highlightFactor": 0.5,
                "outlineWidth": 2,
                "outlineColor": [
                    0,
                    0,
                    1
                ]
            }
        },
        "ground": {
            "enable": true,
            "renderPlugin": {
              "type": "lit"
            },
            "symbol": {
              "polygonFill": [
                0.54,
                0.54,
                0.54,
                1
              ],
              "polygonOpacity": 1,
              "ssr": false,
              "material": {
                "baseColorTexture": null,
                "baseColorFactor": [
                  0.4823529411764706,
                  0.4823529411764706,
                  0.4823529411764706,
                  1
                ],
                "hsv": [
                  0,
                  0,
                  -0.532
                ],
                "baseColorIntensity": 1,
                "contrast": 1,
                "outputSRGB": 1,
                "metallicRoughnessTexture": null,
                "roughnessFactor": 0.22,
                "metallicFactor": 0.58,
                "normalTexture": null,
                "uvScale": [
                  1,
                  1
                ],
                "uvOffset": [
                  0,
                  0
                ],
                "uvRotation": 0,
                "uvOffsetAnim": [
                  0,
                  0
                ],
                "normalMapFactor": 1,
                "normalMapFlipY": 0,
                "clearCoatThickness": 5,
                "clearCoatFactor": 0,
                "clearCoatIor": 1.4,
                "clearCoatRoughnessFactor": 0.04,
                "occlusionTexture": null,
                "emissiveTexture": null,
                "emissiveFactor": [
                  0,
                  0,
                  0
                ],
                "emitColorFactor": 1,
                "emitMultiplicative": 0,
                "bumpTexture": null,
                "albedoPBRFactor": 3.24,
                "outputLinear": 0,
                "clearCoatF0": 0.04,
                "emitColor": [
                  1,
                  1,
                  1
                ],
                "bumpScale": 0.02
              }
            },
            "extras": {
              "currentMaterial": "59bd64ef-4685-45d3-b993-5aaa417d3207"
            }
        }
};`;

export { map, sceneConfig };