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

`function convert(data) {
    return {
      type: "FeatureCollection",
      features: [
        { type: "Feature", geometry: data.geometry, properties: data.properties }
      ]
    };
  }`;

const jsCode = `const map = new maptalks.Map('map', {
    center: [-74.00912099912109, 40.71107610933129],
    zoom: 16,
  });
  
  const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
    data: {
      "properties": {
      "adcode": "110000",
      "name": "北京市",
      "center": [116.405285, 39.904989],
      "centroid": [116.41995, 40.18994],
      "childrenNum": 16,
      "level": "province",
      "parent": { "adcode": 100000 },
      "subFeatureIndex": 0,
      "acroutes": [100000]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [116.405285, 39.904989]
      }
    },
    convertFn: function convert(data) {
      return {
        type: "FeatureCollection",
        features: [
          { type: "Feature", geometry: data.geometry, properties: data.properties }
        ]
      };
    }
  });

  geo.on('dataload', e => {
    map.fitExtent(e.extent)
  });
  
  const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
  groupLayer.addTo(map);`;

export const convertedGeoDataCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
