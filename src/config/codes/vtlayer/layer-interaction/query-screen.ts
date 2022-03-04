const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:query();">query</a>
</div>
<div class="info" id="info"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
}

.pane {
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 25px;
  z-index: 10;
}
  
.pane a {
  display: block;
  float: left;
  text-align: left;
  margin-left: 6px;
  padding: 0 10px;
  min-width: 28px;
  min-height: 25px;
  color: #000;
  text-decoration: none;
  background: #efefef;
  border: 1px solid #000;
}

.info {
  position: absolute;
  top: 56px;
  right: 20px;
  min-height: 40px;
  max-width: 200px;
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  background: #efefef;
}`;

const jsCode = `const map = new maptalks.Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
  
const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);;

function query() {
  const data = vt.identifyAtPoint([364, 430], { tolerance: 2 })
  const info = document.getElementById("info");
  if (data.length === 0) {
    info.innerHTML = "No Data";
  } else {
    info.innerHTML = JSON.stringify(data);
  }
}`;

export const queryScreenCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
