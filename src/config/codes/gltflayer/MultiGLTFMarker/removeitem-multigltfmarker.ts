import { map, sceneConfig } from '../gltf-util';

const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:removeItem();">remove an item</a></div>
`;

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

<<<<<<< HEAD
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
=======
.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:40px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;
>>>>>>> 81162d1095be158d65538c573b8c3981fa6fa904

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
    url: url
};
const position = map.getCenter();
const data = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        data.push({
            coordinates : position.add(i * 0.01, j * 0.01),
            scale : [1, 1, 1],
            color: [1, 1, 1, 1]
        });
    }
}
const gltflayer = new maptalks.GLTFLayer('gltf');
const multigltfmarker = new maptalks.MultiGLTFMarker(data, {
    symbol: symbol
}).addTo(gltflayer);
const groupgllayer = new maptalks.GroupGLLayer('gl', [gltflayer], {sceneConfig}).addTo(map);
function removeItem() {
    const index = 1;
    multigltfmarker.removeData(index);
}
`;

export const removeitemMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
