const htmlCode = `<div class="content">
  <button id="addBtn">添加图层</button>
  <button id="removeBtn">移除图层</button>
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

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
addBtn.addEventListener("click", () => {
  if (groupLayer.getLayers().length === 0) {
    groupLayer.addLayer(point);
  }
});
removeBtn.addEventListener("click", () => {
  groupLayer.removeLayer(point);
})`;

export const addAndRemoveCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
