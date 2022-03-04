const htmlCode = `<div id="map" class="container"></div>`;

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
}`;

const jsCode = `const map = new maptalks.Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 18,
  zoomControl: true,
});

const style = {
  style: [
    {
      filter : ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]],
      renderPlugin: {
        dataConfig: {
          type: "point",
        },
        sceneConfig: {
          collision: true,
          fading: true,
          depthFunc: "always",
        },
        type: "icon",
      },
      symbol: [
        {
          markerType: "ellipse",
          // 通过function-type 动态改变markerHeight和markerWidth
          // 关于function-type的详细信息可以参考： http://doc.maptalks.com/docs/style/filter/function-type/
          markerHeight: {
            stops: [[16, 20], [18, 40]]
          },
          markerWidth: {
            stops: [[16, 20], [18, 40]]
          },
          markerFill: [0.53, 0.77, 0.94, 1],
          markerLineColor: [0.2, 0.29, 0.39, 1],
          markerLineWidth: 3
        }
      ]      
    }
  ]
};

const vt = new maptalks.VectorTileLayer("vt", {
  urlTemplate: "http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt",
  spatialReference: "preset-vt-3857",
  style
});

const groupLayer = new maptalks.GroupGLLayer("group", [vt]);
groupLayer.addTo(map);`;

export const iconScaleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
