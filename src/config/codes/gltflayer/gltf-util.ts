const map = `const map = new maptalks.Map('map', {
    center: [-0.113049,51.498568],
    zoom: 14,
    pitch: 75,
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
          direction: [-1, -1, -1]
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
            "threshold": 0,
            "factor": 1,
            "radius": 1
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
            "type": "fill"
        },
        "symbol": {
            "polygonFill": [
                0.3,
                0.3,
                0.3,
                0.8,
            ],
            "polygonOpacity": 0.8,
        }
    }
};`;

export { map, sceneConfig };