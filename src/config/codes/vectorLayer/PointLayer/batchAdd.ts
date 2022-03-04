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

const marker1 = new maptalks.Marker(
  [-0.131049, 51.498568],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
);

const marker2 = new maptalks.Marker(
  [-0.107049, 51.498568],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
);

const marker3 = new maptalks.Marker(
  [-0.107049, 51.493568],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
);

const marker4 = new maptalks.Marker(
  [-0.131049, 51.493568],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
);

pointLayer.addGeometry([marker1, marker2, marker3, marker4])

const groupLayer = new maptalks.GroupGLLayer("group", [pointLayer]);
groupLayer.addTo(map);`;

export const batchAddCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
