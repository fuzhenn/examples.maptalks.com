const htmlCode = `<div id=map class=container></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const defaultVtStyleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
