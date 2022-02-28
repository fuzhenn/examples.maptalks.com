const htmlCode = `<div class="content">
  <button id="showBtn">显示图层</button>
  <button id="hideBtn">隐藏图层</button>
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
      textName: 'Layer is shown.',
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

const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
showBtn.addEventListener("click", () => {
  point.show()
});
hideBtn.addEventListener("click", () => {
  point.hide()
})`;

export const toggleVisibleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
