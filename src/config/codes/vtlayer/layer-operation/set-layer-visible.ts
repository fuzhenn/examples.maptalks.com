const htmlCode = `<div class="content">
  <button id="showBtn">显示</button>
  <button id="hideBtn">隐藏</button>
  <div id="map" class="container"></div>
</div>`;

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

.content {
  width: 100%;
  height: 100%;
}
`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://116.63.251.32:8080/tile/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);

const showBtn = document.getElementById("showBtn")
const hideBtn = document.getElementById("hideBtn")
showBtn.addEventListener("click", () => {
  vt.show()
})
hideBtn.addEventListener("click", () => {
  vt.hide()
})`;

export const setLayerVisibleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
