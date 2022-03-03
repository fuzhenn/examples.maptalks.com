import { map, sceneConfig } from '../gltflayer/gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
<a href="javascript:startEdit();">start edit</a>
<a href="javascript:endEdit();">end edit</a>
</div>
<script type="text/javascript" src="https://unpkg.com/@maptalks/video-layer/dist/maptalks.video.js"></script>
`;

const cssCode = `html,
body {
    margin: 0px;
    height: 100%;
    width: 100%;
}

.container {
    width: 100%;
    height: 100%;
}

.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:40px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;

const jsCode = `
${map}
${sceneConfig}
map.setCenter([111.74424, 30.425457967790365]);
map.setZoom(13);
const ratio = (48 / 27) * 0.01;
const videoSurface = new maptalks.VideoSurface([[111.73424 - ratio , 30.435457967790365, 1],[111.75424 + ratio, 30.435457967790365, 1],[111.75424 + ratio, 30.415457967790365, 1],[111.73424 - ratio, 30.415457967790365, 1]], {
    url: '/resources/videos/test1.mp4',
    opacity: 1
});
const videoLayer = new maptalks.VideoLayer('video');
videoSurface.addTo(videoLayer);

const groupgllayer = new maptalks.GroupGLLayer('gl', [videoLayer], {sceneConfig}).addTo(map);

function startEdit() {
    videoSurface.startEdit();
}

function endEdit() {
    videoSurface.endEdit();
}`;

export const editVideoLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
