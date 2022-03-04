const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:addLayer();">添加图层</a>
  <a href="javascript:removeLayer();">移除图层</a>
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
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
  
const point = new maptalks.PointLayer('point');

const marker = new maptalks.Marker(
  map.getCenter(),
  {
    symbol: {
      textName: 'Layer is added.',
      textWeight: 'bold',
      textSize: 50,
      textFill: '#1bbc9b',
      textHaloFill: '#fff',
      textHaloRadius: 5
    }
  }
).addTo(point);
  
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);

function addLayer() {
  if (groupLayer.getLayers().length === 0) {
    groupLayer.addLayer(point);
  }
}

function removeLayer() {
  groupLayer.removeLayer(point);
}`;

export const addAndRemoveCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
