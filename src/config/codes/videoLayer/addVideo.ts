import { map, sceneConfig } from '../gltflayer/gltf-util';

const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
<a href="javascript:play();">播放</a>
<a href="javascript:pause();">停止</a>
<a href="javascript:audio();">声音</a>
</div>
<script type="text/javascript" src="https://npm.elemecdn.com/@maptalks/video-layer/dist/maptalks.video.js"></script>
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

const mapCode = map
  .replace('bearing: 180', 'bearing: 0')
  .replace('pitch: 80', 'pitch: 0')
  .replace('zoom: 14', 'zoom: 14')
  .replace('center: [-0.113049,51.498568]', 'center: [111.74424, 30.425457967790365]');

const sceneConfigCode = sceneConfig.replace('bloom: { enable: true },', 'bloom: { enable: false },');

const jsCode = `
${mapCode}
const ratio = (48 / 27) * 0.01;
const videoSurface = new maptalks.VideoSurface([
  [111.73424 - ratio, 30.435457967790365, 1],
  [111.75424 + ratio, 30.435457967790365, 1],
  [111.75424 + ratio, 30.415457967790365, 1],
  [111.73424 - ratio, 30.415457967790365, 1]
], {
  url: '/resources/videos/test1.mp4',
  opacity: 1
});
const videoLayer = new maptalks.VideoLayer('video');
videoSurface.addTo(videoLayer);

${sceneConfigCode}

const groupGLLayer = new maptalks.GroupGLLayer('gl', [videoLayer], {sceneConfig}).addTo(map);

function play() {
  videoSurface.play();
}

function pause() {
  videoSurface.pause();
}

let audioNumber = 0;
function audio() {
  if (audioNumber % 2) {
    videoSurface.setAudio(true);
  } else {
    videoSurface.setAudio(false);
  }
  audioNumber++;
}
`;

export const addVideoLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
