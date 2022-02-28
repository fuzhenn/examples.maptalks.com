const htmlCode = `<div class="content">
  <button id="selectBtn">Select >= 200</button>
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
  center: [121.4954, 31.2385],
  zoom: 14,
});
  
const point = new maptalks.PointLayer('point');

const marker1 = new maptalks.Marker(
  [121.475542, 31.233812],
  {
    id: 100,
    properties: {
      count: 100
    },
    symbol: {
      markerFill: '#747474',
      markerFillOpacity: 0.5,
      markerType: 'ellipse',
      markerWidth: 200,
      markerHeight: 200,
      textFaceName: 'sans-serif',
      textName: '100',
      textFill: '#34495e',
      textHorizontalAlignment: 'right',
      textSize: 40,
      textDx: 40,
      textDy: -90,
    }
  }
);

const marker2 = new maptalks.Marker(
  [121.495542, 31.233812],
  {
    id: 200,
    properties: {
      count: 200
    },
    symbol: {
      markerFill: '#747474',
      markerFillOpacity: 0.5,
      markerType: 'ellipse',
      markerWidth: 200,
      markerHeight: 200,
      textFaceName: 'sans-serif',
      textName: '200',
      textFill: '#34495e',
      textHorizontalAlignment: 'right',
      textSize: 40,
      textDx: 40,
      textDy: -90,
    }
  }
);

const marker3 = new maptalks.Marker(
  [121.515542, 31.233812],
  {  
    id: 300,
    properties: {
      count: 300
    },
    symbol: {
      markerFill: '#747474',
      markerFillOpacity: 0.5,
      markerType: 'ellipse',
      markerWidth: 200,
      markerHeight: 200,
      textFaceName: 'sans-serif',
      textName: '300',
      textFill: '#34495e',
      textHorizontalAlignment: 'right',
      textSize: 40,
      textDx: 40,
      textDy: -90,
    }
  }
);

point.addGeometry([marker1, marker2, marker3])

const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);

const selectBtn = document.getElementById("selectBtn");
selectBtn.addEventListener("click", () => {
  point.filter(['>=', 'count', 200]).forEach((feature) => {
    feature.updateSymbol({
      markerFill: '#f00'
    });
  });
});`;

export const filterByPropertyCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};