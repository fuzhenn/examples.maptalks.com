const htmlCode = `
<script type="text/javascript" src="https://npm.elemecdn.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
<div id="map" class="container"></div>
`;

const cssCode = `
html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  background-color: #444444;
  width: 100%;
  height: 100%;
}
`;

const jsCode = `
// 数据版权属于 dvgis.cn
const map = new maptalks.Map("map", {
  center : [120.54632697304714, 27.593883052408984],
  zoom: 18,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const layer = new maptalks.Geo3DTilesLayer('3dtiles', {        
  services : [
      {
          url: 'http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json',
          ambientLight : [1, 1, 1],
          maximumScreenSpaceError: 1.0,
          pointOpacity: 0.5,
          pointSize: 3,
          heightOffset: -400
      },
  ]
});

layer.once('loadtileset', e => {
    const extent = layer.getExtent(e.index);
    map.fitExtent(extent, 0, { animation: false });
});

const sceneConfig = {
  ground: {
      enable: true,
      renderPlugin: {
          type: 'fill'
      },
      symbol: {
          polygonFill: [0, 0, 0, 1],
          polygonOpacity: 1
      }
  },
  postProcess: {
      enable: true,
      antialias: {
          enable: true
      }
  }
}
const groupLayer = new maptalks.GroupGLLayer('g', [layer], { sceneConfig }).addTo(map);
`;

export const photographyCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
