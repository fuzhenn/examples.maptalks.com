const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:selectData();">Select >= 200</a>
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
  background: #444;
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
  center: [121.4954, 31.2385],
  zoom: 14,
});
  
const pointLayer = new maptalks.PointLayer('point');

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
      textFill: '#22be9e',
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
      textFill: '#22be9e',
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
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40,
      textDx: 40,
      textDy: -90,
    }
  }
);

pointLayer.addGeometry([marker1, marker2, marker3])

const groupLayer = new maptalks.GroupGLLayer("group", [pointLayer]);
groupLayer.addTo(map);;

function selectData() {
  pointLayer.filter(['>=', 'count', 200]).forEach((feature) => {
    feature.updateSymbol({
      markerFill: '#f00'
    });
  });
}`;

export const filterByPropertyCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
