import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>`;

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

const glsl = `const vert = \`
attribute vec3 aPosition;
uniform mat4 positionMatrix;
uniform mat4 projViewMatrix;
uniform mat4 modelMatrix;
uniform vec3 color;
varying vec3 vColor;

#include <get_output>
void main()
{
  mat4 localPositionMatrix = getPositionMatrix();
  vec4 localVertex = getPosition(aPosition);
  vec4 position = localPositionMatrix * localVertex;
  gl_Position = projViewMatrix * modelMatrix * position;
  vColor = color;
}
\`;

const frag = \`
precision mediump float;
varying vec3 vColor;
void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
\`;`;

const jsCode = `
${map}
${sceneConfig}
${glsl}
const config =  {
  vert: vert,
  frag: frag,
  uniforms : [
    'projViewMatrix',
    'color'
  ],
  positionAttribute : 'POSITION'
};
maptalks.GLTFLayer.registerShader('customShader', 'MeshShader', config);

const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  shader: "customShader",
  url: url,
  uniforms: {
    'color': [0.0, 1.0, 0.3]
  }
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
}).addTo(gltfLayer);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
`;

export const customShaderGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
