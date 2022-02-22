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

const jsCode = `var map = new maptalks.Map('map', {
    center: [-0.113049,51.498568],
    zoom: 14,
    pitch: 75,
    baseLayer: new maptalks.TileLayer('base', {
      urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      subdomains: ['a','b','c','d'],
      attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    })
  });
  var url = '/resource/gltf/Duck/Duck.glb';
  var symbol = {
    url: url,
    rotation: [90, 0, 0],
    uniforms: {
      'baseColorFactor': [0.8, 0.0, 0.0, 1.0]
    }
  };
  
  var gltflayer = new maptalks.GLTFLayer('gltf').addTo(map);
  var position = map.getCenter();
  new maptalks.GLTFMarker(position, {
    symbol: symbol
  }).addTo(gltflayer);`;

export const addToGltfLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};