import { map, sceneConfig } from '../gltflayer/gltf-util';
const htmlCode = `<div id="map" class="container"></div>
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
}`;

const mapCode = map
    .replace('bearing: 180', 'bearing: 0')
    .replace('pitch: 75', 'pitch: 0')
    .replace('zoom: 14', 'zoom: 14')
    .replace('center: [-0.113049,51.498568]', 'center: [111.74424, 30.425457967790365]');

const sceneConfigCode = sceneConfig.replace('bloom: { enable: true },', 'bloom: { enable: false },');

const jsCode = `
${mapCode}
const gui = new dat.GUI({ width: 250 });
const videoMap = {
  test1: '/resources/videos/test1.mp4',
  test2: '/resources/videos/test2.mp4'
}
const Config = function () {
  this.videoList = 'test1';
  this.opacity = 1;
  this.show = true;
};
const options = new Config();
const ratio = (48 / 27) * 0.01;
const videoSurface = new maptalks.VideoSurface([
  [111.73424 - ratio , 30.435457967790365, 1],
  [111.75424 + ratio, 30.435457967790365, 1],
  [111.75424 + ratio, 30.415457967790365, 1],
  [111.73424 - ratio, 30.415457967790365, 1]
], {
  url: videoMap[options.videoList],
  opacity: options.opacity
});
const videoLayer = new maptalks.VideoLayer('video');
videoSurface.addTo(videoLayer);

${sceneConfigCode}
const groupGLLayer = new maptalks.GroupGLLayer('gl', [videoLayer], {sceneConfig}).addTo(map);

const videoListControl = gui.add(options, 'videoList', ['test1', 'test2']).name('video list');
videoListControl.onFinishChange(function(value) {
  const url = videoMap[value];
  videoSurface.setVideo(url);
});

const opacityControl = gui.add(options, 'opacity', 0, 1).name('video opacity');
opacityControl.onChange(function(value) {
  videoSurface.setOpacity(value);
});

const showControl = gui.add(options, 'show').name('video show');
showControl.onChange(function(value) {
  if (value) {
    videoSurface.show();
  } else {
    videoSurface.hide();
  }
});
`;

export const setVideoLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
