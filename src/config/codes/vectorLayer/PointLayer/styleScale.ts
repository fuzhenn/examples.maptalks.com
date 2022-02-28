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
  center: [-74.01912099912109, 40.71107610933129],
  zoom: 16,
});
  
const point = new maptalks.PointLayer('point', {
  styleScale: 4
});

const marker = new maptalks.Marker(
  [-74.00912099912109, 40.71107610933129],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#34495e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
).addTo(point);
  
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const styleScaleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
