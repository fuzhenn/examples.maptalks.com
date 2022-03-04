const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:setStyle();">set style</a>
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
  center: [-0.123049, 51.494568],
  zoom: 14,
});
  
const point = new maptalks.PointLayer('point');
point.setStyle([
  {
    filter: true,
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
])

const marker = new maptalks.MultiPoint(
  [
    [-0.131049, 51.498568],
    [-0.107049, 51.498568],
    [-0.107049, 51.493568],
    [-0.131049, 51.493568],
    [-0.131049, 51.498568]
  ]
).addTo(point);
  
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

function setStyle() {
  point.setStyle([
    {
      filter: true,
      symbol: {
        textName: 'Style',
        textFill: '#f00',
        textSize: 40
      }
    }
  ]);
}`;

export const setStyleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
