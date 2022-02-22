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
    data: {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [120.1862434, 30.31784858]
          },
          "properties": {}
        },
        {
          "type": "Feature",
          "geometry": { "type": "Point", "coordinates": [120.194314, 30.34644838] },
          "properties": {}
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [120.1911453, 30.33728535]
          },
          "properties": {}
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [120.1924787, 30.32657846]
          },
          "properties": {}
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [120.1723801, 30.27646996]
          },
          "properties": {}
        }
      ]
    }
  });

  geo.on('dataload', e => {
    map.fitExtent(e.extent)
  });
  
  const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
  groupLayer.addTo(map);`;

export const loadLocalGeoDataCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
