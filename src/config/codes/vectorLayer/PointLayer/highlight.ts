const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
<a href="javascript:highlightAll();">highlight all</a>
<a href="javascript:highlightPart();">highlight id 10-15</a>
<a href="javascript:cancelhighlight();">cancel highlight</a>
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
  background: #34495e;
  line-height: 28px;
  color: #fff;
  z-index: 10;
  position: absolute;
  top: 20px;
  right: 20px
}

.pane a {
  display: block;
  color: #fff;
  text-align: left;
  padding: 0 10px;
  min-width: 28px;
  min-height: 28px;
  float: left
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-0.113049,51.49856],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const point = new maptalks.PointLayer('point', {
  collision: true
});

const center = map.getCenter();
const width = 0.055;
const height = 0.03;
const markers = [];

for (let i = 0; i <= 30; i++) {
  const x = center.x + (Math.random() - 0.5) * width;
  const y = center.y + (Math.random() - 0.5) * height;
  markers.push(new maptalks.Marker([x, y], {
    id: i,
    symbol: {
      markerType: 'ellipse',
      markerFill: '#0e595e',
      markerFillOpacity: 0.4,
      markerLineWidth: 2,
      markerLineColor: '#fff',
      markerWidth: 70,
      markerHeight: 70
    }
  }));
}

point.addGeometry(markers);

function highlightAll() {
  point.outlineAll();
}

function highlightPart() {
  point.outline([10, 11, 12, 13, 14, 15]);
}

function cancelhighlight() {
  point.cancelOutline();
}

function closeFading() {
  point.options.sceneConfig.fading = false
}

const groupLayer = new maptalks.GroupGLLayer('group', [point], {
  // 需要先开启后处理中的outline属性
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
      enable: false,
      renderPlugin: { type: 'fill' },
      symbol: {
        polygonFill: [0.54, 0.54, 0.54, 1],
        polygonOpacity: 1,
      },
    },
  }
});
groupLayer.addTo(map);`;

export const highlightCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
