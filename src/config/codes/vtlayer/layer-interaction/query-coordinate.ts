const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:query();">query</a>
</div>
<div class="info" id="info"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  background-color: #444444;
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
}

.info {
  position: absolute;
  top: 56px;
  right: 20px;
  min-height: 70px;
  max-width: 200px;
  font-size: 12px;
  line-height: 1.5;
  word-wrap:break-word;
  background: #efefef;
}`;

const jsCode = `const map = new maptalks.Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
  
const geo = new maptalks.GeoJSONVectorTileLayer("geo", {
  data: "/resources/geojson/area.geojson"
});

geo.on("dataload", e => {
  map.fitExtent(e.extent)
});

const style = {
  style: [
    {
      "filter": true,
      "renderPlugin": {
      "dataConfig": {
          "type": "fill"
        },
        "sceneConfig": {},
        "type": "fill"
      },
      "symbol": {
        "polygonBloom": false,
        "polygonFill": "#577570",
        "polygonOpacity": 1,
        "polygonPatternFile": null,
        "visible": true
      }
    },
    {
      "filter": true,
      "renderPlugin": {
        "dataConfig": {
          "type": "line"
        },
        "sceneConfig": {},
        "type": "line"
      },
      "symbol": {
        "lineBloom": false,
        "lineCap": "butt",
        "lineColor": "#d0d0d0",
        "lineDasharray": [0, 0, 0, 0],
        "lineDashColor": [1, 1, 1, 0],
        "lineDx": 0,
        "lineDy": 0,
        "lineGapWidth": 0,
        "lineJoin": "miter",
        "lineOpacity": 1,
        "linePatternAnimSpeed": 0,
        "linePatternFile": null,
        "lineStrokeWidth": 0,
        "lineStrokeColor": [0, 0, 0, 0],
        "lineJoinPatternMode": 0,
        "lineWidth": 2,
        "visible": true
      }
    }
  ]
};
geo.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer("group", [geo], {
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

function query() {
  const data = geo.identify([114.69, 30.78], { tolerance: 1 })
  const info = document.getElementById("info");
  info.innerHTML = JSON.stringify(data);
}`;

export const queryCoordinateCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
