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
  background: #444;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-0.113049, 51.498568],
  zoom: 14,
});
  
const pointLayer = new maptalks.PointLayer('point');

const marker = new maptalks.MultiPoint(
  [
    [-0.131049, 51.498568],
    [-0.107049, 51.498568],
    [-0.107049, 51.493568],
    [-0.131049, 51.493568],
    [-0.131049, 51.498568]
  ],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
).addTo(pointLayer);
  
const groupLayer = new maptalks.GroupGLLayer("group", [pointLayer]);
groupLayer.addTo(map);`;

export const addMultiPointCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
