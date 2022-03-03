const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container {
  width: 100%;
  height: 100%;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-0.113049,51.498568],
  zoom: 14,
  pitch: 75,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      subdomains: ['a','b','c','d'],
      attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
const url = '/resource/gltf/alien/alien.glb';
const symbol = {
  url: url,
  rotation: [90, 0, 0],
  uniforms: {
    'baseColorFactor': [0.8, 0.0, 0.0, 1.0]
  }
};

const gltflayer = new maptalks.GLTFLayer('gltf').addTo(map);
const position = map.getCenter();
const markers = [];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const gltfmarker = new maptalks.GLTFMarker(position.add(i * 0.01 - 0.015, j * 0.01 - 0.015), {
      symbol: symbol
    });
    markers.push(gltfmarker);
  }
}

gltflayer.addMarker(markers);

setTimeout(() => {
  gltflayer.clear();
}, 2000);`;

export const clearLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
