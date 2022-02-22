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
  
  const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
    data: '/resources/geojson/area.geojson'
  });

  geo.on('dataload', e => {
    map.fitExtent(e.extent)
  });
  
  const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
  groupLayer.addTo(map);`;

export const loadRemoteGeoDataCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
