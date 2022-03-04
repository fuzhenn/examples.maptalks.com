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
const center = new maptalks.Coordinate([-74.01012099912109, 40.70907610933129])

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://116.63.251.32:8080/tile/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
  offset : function (z) {
    const center = map.getCenter();
    const c = maptalks.CRSTransform.transform(center.toArray(), 'WGS84', 'GCJ02');
    const offset = map.coordToPoint(center, z)._sub(map.coordToPoint(new maptalks.Coordinate(c), z));
    return offset._round().toArray();
  }
});

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const convertCoordinateCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
