const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:get100();">Get Id of 100</a>
  <a href="javascript:get200();">Get Id of 200</a>
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
  center: [121.4954, 31.2385],
  zoom: 14,
});
  
const point = new maptalks.PointLayer('point');

const marker1 = new maptalks.Marker(
  [121.475542, 31.233812],
  {
    id: 100, 
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

point.addGeometry([marker1, marker2, marker3])

const groupLayer = new maptalks.GroupGLLayer("group", [point], {
  sceneConfig:{
    postProcess: {
      enable: true,
      antialias: {
        enable: true,
        taa: true,
        jitterRatio: 0.25,
      },
      ssr: {
        enable: true,
      },
      bloom: {
        enable: true,
        threshold: 0,
        factor: 1,
        radius: 0.02,
      },
      ssao: {
        enable: true,
        bias: 0.08,
        radius: 0.08,
        intensity: 1.5,
      },
      sharpen: {
        enable: false,
        factor: 0.2,
      },
      outline: {
        enable: true,
        outlineFactor: 0.3,
        highlightFactor: 0.2,
        outlineWidth: 1,
        outlineColor: [1, 1, 0],
      },
    },
    ground: {
      enable: true,
      renderPlugin: { type: "fill" },
      symbol: {
        polygonFill: [0.2666667, 0.2666667, 0.2666667, 1],
        polygonOpacity: 1,
      },
    },
  }
});
groupLayer.addTo(map);

function get100() {
  const marker =  point.getGeometryById(100);
  marker.updateSymbol({
    markerFill: '#f00'
  });
}

function get200() {
  const marker =  point.getGeometryById(200);
  marker.updateSymbol({
    markerFill: '#f00'
  });
}`;

export const getByIdCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
