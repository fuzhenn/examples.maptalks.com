/*!
 * @maptalks/terrain v0.1.0
 * LICENSE : UNLICENSED
 * (c) 2016-2022 maptalks.org
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("maptalks"),require("@maptalks/gl")):"function"==typeof define&&define.amd?define(["exports","maptalks","@maptalks/gl"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).maptalks=t.maptalks||{},t.maptalks,t.maptalksgl)}(this,(function(t,e,r){"use strict";function n(t){if(t&&t.t)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}})),e.default=t,Object.freeze(e)}var i=n(e),s=n(r);const a='function(r){var t="undefined"!=typeof Float32Array?Float32Array:Array;function e(){var r=new t(3);return t!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r}function i(r,e,i){var n=new t(3);return n[0]=r,n[1]=e,n[2]=i,n}function n(){var r=new t(4);return t!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r[3]=1,r}e(),function(){var r,e=(r=new t(4),t!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r)}();var s;e(),i(1,0,0),i(0,1,0),n(),n(),s=new t(9),t!=Float32Array&&(s[1]=0,s[2]=0,s[3]=0,s[5]=0,s[6]=0,s[7]=0),s[0]=1,s[4]=1,s[8]=1;\n/*!\n   * @maptalks/gltf-loader v0.25.9\n   * LICENSE : UNLICENSED\n   * (c) 2016-2022 maptalks.org\n   */\nlet a=0;!function(r){r[0]=0,r[1]=0,r[2]=0,r[3]=1}([]),"undefined"!=typeof TextDecoder&&new TextDecoder("utf-8");const o={get:function(r,t={}){t||(t={});const e=new AbortController,i=e.signal,n=function(r){for(let t=1;t<arguments.length;t++){const e=arguments[t];for(const t in e)r[t]=e[t]}return r}({},t);n.signal=i,n.method||(n.method="GET");const s=fetch(r,n).then((r=>{const e=this.U(r,t.responseType);return e.message?e:e.then((e=>"arraybuffer"===t.responseType?{data:e,cacheControl:r.headers.get("Cache-Control"),expires:r.headers.get("Expires"),contentType:r.headers.get("Content-Type")}:e)).catch((r=>{if(!r.code||r.code!==DOMException.ABORT_ERR)throw r}))})).catch((r=>{if(!r.code||r.code!==DOMException.ABORT_ERR)throw r}));return s.xhr=e,s},U:(r,t)=>200!==r.status?{status:r.status,statusText:r.statusText,message:`incorrect http request with status code(${r.status}): ${r.statusText}`}:"arraybuffer"===t?r.arrayBuffer():"json"===t?r.json():r.text(),getArrayBuffer:(r,t={})=>(t||(t={}),t.responseType="arraybuffer",o.get(r,t)),getJSON:function(r,t={}){return t&&t.jsonp?o.jsonp(r):((t=t||{}).responseType="json",o.get(r,t))},jsonp:function(r){const t="_maptalks_jsonp_"+a++;r.match(/\\?/)?r+="&callback="+t:r+="?callback="+t;let e=document.createElement("script");return e.type="text/javascript",e.src=r,new Promise((r=>{window[t]=function(i){document.getElementsByTagName("head")[0].removeChild(e),e=null,delete window[t],r(i)},document.getElementsByTagName("head")[0].appendChild(e)}))}};if("undefined"!=typeof TextDecoder&&new TextDecoder("utf-8"),"undefined"!=typeof OffscreenCanvas){let r;try{r=new OffscreenCanvas(2,2).getContext("2d")}catch(r){}}"undefined"!=typeof document&&document.createElement("canvas"),function(){function r(r){throw r}var t=void 0,e=!0,i=this;function n(r,e){var n,s=r.split("."),a=i;!(s[0]in a)&&a.execScript&&a.execScript("var "+s[0]);for(;s.length&&(n=s.shift());)s.length||e===t?a=a[n]?a[n]:a[n]={}:a[n]=e}var s="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView;function a(t,e){this.index="number"==typeof e?e:0,this.i=0,this.buffer=t instanceof(s?Uint8Array:Array)?t:new(s?Uint8Array:Array)(32768),2*this.buffer.length<=this.index&&r(Error("invalid index")),this.buffer.length<=this.index&&this.f()}a.prototype.f=function(){var r,t=this.buffer,e=t.length,i=new(s?Uint8Array:Array)(e<<1);if(s)i.set(t);else for(r=0;r<e;++r)i[r]=t[r];return this.buffer=i},a.prototype.d=function(r,t,e){var i,n=this.buffer,s=this.index,a=this.i,o=n[s];if(e&&1<t&&(r=8<t?(l[255&r]<<24|l[r>>>8&255]<<16|l[r>>>16&255]<<8|l[r>>>24&255])>>32-t:l[r]>>8-t),8>t+a)o=o<<t|r,a+=t;else for(i=0;i<t;++i)o=o<<1|r>>t-i-1&1,8==++a&&(a=0,n[s++]=l[o],o=0,s===n.length&&(n=this.f()));n[s]=o,this.buffer=n,this.i=a,this.index=s},a.prototype.finish=function(){var r,t=this.buffer,e=this.index;return 0<this.i&&(t[e]<<=8-this.i,t[e]=l[t[e]],e++),s?r=t.subarray(0,e):(t.length=e,r=t),r};var o,c=new(s?Uint8Array:Array)(256);for(o=0;256>o;++o){for(var f=u=o,h=7,u=u>>>1;u;u>>>=1)f<<=1,f|=1&u,--h;c[o]=(f<<h&255)>>>0}var l=c;function y(r){this.buffer=new(s?Uint16Array:Array)(2*r),this.length=0}function d(r){var t,e,i,n,a,o,c,f,h,u,l=r.length,y=0,d=Number.POSITIVE_INFINITY;for(f=0;f<l;++f)r[f]>y&&(y=r[f]),r[f]<d&&(d=r[f]);for(t=1<<y,e=new(s?Uint32Array:Array)(t),i=1,n=0,a=2;i<=y;){for(f=0;f<l;++f)if(r[f]===i){for(o=0,c=n,h=0;h<i;++h)o=o<<1|1&c,c>>=1;for(u=i<<16|f,h=o;h<t;h+=a)e[h]=u;++n}++i,n<<=1,a<<=1}return[e,y,d]}function A(r,t){this.h=p,this.w=0,this.input=s&&r instanceof Array?new Uint8Array(r):r,this.b=0,t&&(t.lazy&&(this.w=t.lazy),"number"==typeof t.compressionType&&(this.h=t.compressionType),t.outputBuffer&&(this.a=s&&t.outputBuffer instanceof Array?new Uint8Array(t.outputBuffer):t.outputBuffer),"number"==typeof t.outputIndex&&(this.b=t.outputIndex)),this.a||(this.a=new(s?Uint8Array:Array)(32768))}y.prototype.getParent=function(r){return 2*((r-2)/4|0)},y.prototype.push=function(r,t){var e,i,n,s=this.buffer;for(e=this.length,s[this.length++]=t,s[this.length++]=r;0<e&&(i=this.getParent(e),s[e]>s[i]);)n=s[e],s[e]=s[i],s[i]=n,n=s[e+1],s[e+1]=s[i+1],s[i+1]=n,e=i;return this.length},y.prototype.pop=function(){var r,t,e,i,n,s=this.buffer;for(t=s[0],r=s[1],this.length-=2,s[0]=s[this.length],s[1]=s[this.length+1],n=0;!((i=2*n+2)>=this.length)&&(i+2<this.length&&s[i+2]>s[i]&&(i+=2),s[i]>s[n]);)e=s[n],s[n]=s[i],s[i]=e,e=s[n+1],s[n+1]=s[i+1],s[i+1]=e,n=i;return{index:r,value:t,length:this.length}};var w,p=2,b={NONE:0,r:1,k:p,N:3},v=[];for(w=0;288>w;w++)switch(e){case 143>=w:v.push([w+48,8]);break;case 255>=w:v.push([w-144+400,9]);break;case 279>=w:v.push([w-256+0,7]);break;case 287>=w:v.push([w-280+192,8]);break;default:r("invalid literal: "+w)}function k(r,t){this.length=r,this.G=t}A.prototype.j=function(){var i,n,o,c,f=this.input;switch(this.h){case 0:for(o=0,c=f.length;o<c;){var h,u,l,y=n=s?f.subarray(o,o+65535):f.slice(o,o+65535),d=(o+=n.length)===c,A=t,w=t,b=this.a,k=this.b;if(s){for(b=new Uint8Array(this.a.buffer);b.length<=k+y.length+5;)b=new Uint8Array(b.length<<1);b.set(this.a)}if(h=d?1:0,b[k++]=0|h,l=65536+~(u=y.length)&65535,b[k++]=255&u,b[k++]=u>>>8&255,b[k++]=255&l,b[k++]=l>>>8&255,s)b.set(y,k),k+=y.length,b=b.subarray(0,k);else{for(A=0,w=y.length;A<w;++A)b[k++]=y[A];b.length=k}this.b=k,this.a=b}break;case 1:var U=new a(s?new Uint8Array(this.a.buffer):this.a,this.b);U.d(1,1,e),U.d(1,2,e);var m,E,D,z=g(this,f);for(m=0,E=z.length;m<E;m++)if(D=z[m],a.prototype.d.apply(U,v[D]),256<D)U.d(z[++m],z[++m],e),U.d(z[++m],5),U.d(z[++m],z[++m],e);else if(256===D)break;this.a=U.finish(),this.b=this.a.length;break;case p:var F,M,C,O,j,q,N,I,_,Z,$,B,L,V,P,S=new a(s?new Uint8Array(this.a.buffer):this.a,this.b),G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],H=Array(19);for(F=p,S.d(1,1,e),S.d(F,2,e),M=g(this,f),N=T(q=x(this.L,15)),_=T(I=x(this.K,7)),C=286;257<C&&0===q[C-1];C--);for(O=30;1<O&&0===I[O-1];O--);var Y,J,K,R,X,Q,W=C,rr=O,tr=new(s?Uint32Array:Array)(W+rr),er=new(s?Uint32Array:Array)(316),ir=new(s?Uint8Array:Array)(19);for(Y=J=0;Y<W;Y++)tr[J++]=q[Y];for(Y=0;Y<rr;Y++)tr[J++]=I[Y];if(!s)for(Y=0,R=ir.length;Y<R;++Y)ir[Y]=0;for(Y=X=0,R=tr.length;Y<R;Y+=J){for(J=1;Y+J<R&&tr[Y+J]===tr[Y];++J);if(K=J,0===tr[Y])if(3>K)for(;0<K--;)er[X++]=0,ir[0]++;else for(;0<K;)(Q=138>K?K:138)>K-3&&Q<K&&(Q=K-3),10>=Q?(er[X++]=17,er[X++]=Q-3,ir[17]++):(er[X++]=18,er[X++]=Q-11,ir[18]++),K-=Q;else if(er[X++]=tr[Y],ir[tr[Y]]++,3>--K)for(;0<K--;)er[X++]=tr[Y],ir[tr[Y]]++;else for(;0<K;)(Q=6>K?K:6)>K-3&&Q<K&&(Q=K-3),er[X++]=16,er[X++]=Q-3,ir[16]++,K-=Q}for(i=s?er.subarray(0,X):er.slice(0,X),Z=x(ir,7),V=0;19>V;V++)H[V]=Z[G[V]];for(j=19;4<j&&0===H[j-1];j--);for($=T(Z),S.d(C-257,5,e),S.d(O-1,5,e),S.d(j-4,4,e),V=0;V<j;V++)S.d(H[V],3,e);for(V=0,P=i.length;V<P;V++)if(B=i[V],S.d($[B],Z[B],e),16<=B){switch(V++,B){case 16:L=2;break;case 17:L=3;break;case 18:L=7;break;default:r("invalid code: "+B)}S.d(i[V],L,e)}var nr,sr,ar,or,cr,fr,hr,ur,lr=[N,q],yr=[_,I];for(cr=lr[0],fr=lr[1],hr=yr[0],ur=yr[1],nr=0,sr=M.length;nr<sr;++nr)if(ar=M[nr],S.d(cr[ar],fr[ar],e),256<ar)S.d(M[++nr],M[++nr],e),or=M[++nr],S.d(hr[or],ur[or],e),S.d(M[++nr],M[++nr],e);else if(256===ar)break;this.a=S.finish(),this.b=this.a.length;break;default:r("invalid compression type")}return this.a};var U=function(){function t(t){switch(e){case 3===t:return[257,t-3,0];case 4===t:return[258,t-4,0];case 5===t:return[259,t-5,0];case 6===t:return[260,t-6,0];case 7===t:return[261,t-7,0];case 8===t:return[262,t-8,0];case 9===t:return[263,t-9,0];case 10===t:return[264,t-10,0];case 12>=t:return[265,t-11,1];case 14>=t:return[266,t-13,1];case 16>=t:return[267,t-15,1];case 18>=t:return[268,t-17,1];case 22>=t:return[269,t-19,2];case 26>=t:return[270,t-23,2];case 30>=t:return[271,t-27,2];case 34>=t:return[272,t-31,2];case 42>=t:return[273,t-35,3];case 50>=t:return[274,t-43,3];case 58>=t:return[275,t-51,3];case 66>=t:return[276,t-59,3];case 82>=t:return[277,t-67,4];case 98>=t:return[278,t-83,4];case 114>=t:return[279,t-99,4];case 130>=t:return[280,t-115,4];case 162>=t:return[281,t-131,5];case 194>=t:return[282,t-163,5];case 226>=t:return[283,t-195,5];case 257>=t:return[284,t-227,5];case 258===t:return[285,t-258,0];default:r("invalid length: "+t)}}var i,n,s=[];for(i=3;258>=i;i++)n=t(i),s[i]=n[2]<<24|n[1]<<16|n[0];return s}(),m=s?new Uint32Array(U):U;function g(i,n){function a(t,i){var n,s,a,o,c=t.G,f=[],h=0;switch(n=m[t.length],f[h++]=65535&n,f[h++]=n>>16&255,f[h++]=n>>24,e){case 1===c:s=[0,c-1,0];break;case 2===c:s=[1,c-2,0];break;case 3===c:s=[2,c-3,0];break;case 4===c:s=[3,c-4,0];break;case 6>=c:s=[4,c-5,1];break;case 8>=c:s=[5,c-7,1];break;case 12>=c:s=[6,c-9,2];break;case 16>=c:s=[7,c-13,2];break;case 24>=c:s=[8,c-17,3];break;case 32>=c:s=[9,c-25,3];break;case 48>=c:s=[10,c-33,4];break;case 64>=c:s=[11,c-49,4];break;case 96>=c:s=[12,c-65,5];break;case 128>=c:s=[13,c-97,5];break;case 192>=c:s=[14,c-129,6];break;case 256>=c:s=[15,c-193,6];break;case 384>=c:s=[16,c-257,7];break;case 512>=c:s=[17,c-385,7];break;case 768>=c:s=[18,c-513,8];break;case 1024>=c:s=[19,c-769,8];break;case 1536>=c:s=[20,c-1025,9];break;case 2048>=c:s=[21,c-1537,9];break;case 3072>=c:s=[22,c-2049,10];break;case 4096>=c:s=[23,c-3073,10];break;case 6144>=c:s=[24,c-4097,11];break;case 8192>=c:s=[25,c-6145,11];break;case 12288>=c:s=[26,c-8193,12];break;case 16384>=c:s=[27,c-12289,12];break;case 24576>=c:s=[28,c-16385,13];break;case 32768>=c:s=[29,c-24577,13];break;default:r("invalid distance")}for(n=s,f[h++]=n[0],f[h++]=n[1],f[h++]=n[2],a=0,o=f.length;a<o;++a)p[b++]=f[a];k[f[0]]++,U[f[3]]++,v=t.length+i-1,d=null}var o,c,f,h,u,l,y,d,A,w={},p=s?new Uint16Array(2*n.length):[],b=0,v=0,k=new(s?Uint32Array:Array)(286),U=new(s?Uint32Array:Array)(30),g=i.w;if(!s){for(f=0;285>=f;)k[f++]=0;for(f=0;29>=f;)U[f++]=0}for(k[256]=1,o=0,c=n.length;o<c;++o){for(f=u=0,h=3;f<h&&o+f!==c;++f)u=u<<8|n[o+f];if(w[u]===t&&(w[u]=[]),l=w[u],!(0<v--)){for(;0<l.length&&32768<o-l[0];)l.shift();if(o+3>=c){for(d&&a(d,-1),f=0,h=c-o;f<h;++f)A=n[o+f],p[b++]=A,++k[A];break}0<l.length?(y=E(n,o,l),d?d.length<y.length?(A=n[o-1],p[b++]=A,++k[A],a(y,0)):a(d,-1):y.length<g?d=y:a(y,0)):d?a(d,-1):(A=n[o],p[b++]=A,++k[A])}l.push(o)}return p[b++]=256,k[256]++,i.L=k,i.K=U,s?p.subarray(0,b):p}function E(r,t,e){var i,n,s,a,o,c,f=0,h=r.length;a=0,c=e.length;r:for(;a<c;a++){if(i=e[c-a-1],s=3,3<f){for(o=f;3<o;o--)if(r[i+o-1]!==r[t+o-1])continue r;s=f}for(;258>s&&t+s<h&&r[i+s]===r[t+s];)++s;if(s>f&&(n=i,f=s),258===s)break}return new k(f,t-n)}function x(r,t){var e,i,n,a,o,c=r.length,f=new y(572),h=new(s?Uint8Array:Array)(c);if(!s)for(a=0;a<c;a++)h[a]=0;for(a=0;a<c;++a)0<r[a]&&f.push(a,r[a]);if(e=Array(f.length/2),i=new(s?Uint32Array:Array)(f.length/2),1===e.length)return h[f.pop().index]=1,h;for(a=0,o=f.length/2;a<o;++a)e[a]=f.pop(),i[a]=e[a].value;for(n=function(r,t,e){function i(r){var e=d[r][A[r]];e===t?(i(r+1),i(r+1)):--l[e],++A[r]}var n,a,o,c,f,h=new(s?Uint16Array:Array)(e),u=new(s?Uint8Array:Array)(e),l=new(s?Uint8Array:Array)(t),y=Array(e),d=Array(e),A=Array(e),w=(1<<e)-t,p=1<<e-1;for(h[e-1]=t,a=0;a<e;++a)w<p?u[a]=0:(u[a]=1,w-=p),w<<=1,h[e-2-a]=(h[e-1-a]/2|0)+t;for(h[0]=u[0],y[0]=Array(h[0]),d[0]=Array(h[0]),a=1;a<e;++a)h[a]>2*h[a-1]+u[a]&&(h[a]=2*h[a-1]+u[a]),y[a]=Array(h[a]),d[a]=Array(h[a]);for(n=0;n<t;++n)l[n]=e;for(o=0;o<h[e-1];++o)y[e-1][o]=r[o],d[e-1][o]=o;for(n=0;n<e;++n)A[n]=0;for(1===u[e-1]&&(--l[0],++A[e-1]),a=e-2;0<=a;--a){for(c=n=0,f=A[a+1],o=0;o<h[a];o++)(c=y[a+1][f]+y[a+1][f+1])>r[n]?(y[a][o]=c,d[a][o]=t,f+=2):(y[a][o]=r[n],d[a][o]=n,++n);A[a]=0,1===u[a]&&i(a)}return l}(i,i.length,t),a=0,o=e.length;a<o;++a)h[e[a].index]=n[a];return h}function T(r){var t,e,i,n,a=new(s?Uint16Array:Array)(r.length),o=[],c=[],f=0;for(t=0,e=r.length;t<e;t++)o[r[t]]=1+(0|o[r[t]]);for(t=1,e=16;t<=e;t++)c[t]=f,f+=0|o[t],f<<=1;for(t=0,e=r.length;t<e;t++)for(f=c[r[t]],c[r[t]]+=1,i=a[t]=0,n=r[t];i<n;i++)a[t]=a[t]<<1|1&f,f>>>=1;return a}function D(t,e){switch(this.l=[],this.m=32768,this.e=this.g=this.c=this.q=0,this.input=s?new Uint8Array(t):t,this.s=!1,this.n=F,this.B=!1,!e&&(e={})||(e.index&&(this.c=e.index),e.bufferSize&&(this.m=e.bufferSize),e.bufferType&&(this.n=e.bufferType),e.resize&&(this.B=e.resize)),this.n){case z:this.b=32768,this.a=new(s?Uint8Array:Array)(32768+this.m+258);break;case F:this.b=0,this.a=new(s?Uint8Array:Array)(this.m),this.f=this.J,this.t=this.H,this.o=this.I;break;default:r(Error("invalid inflate mode"))}}var z=0,F=1,M={D:z,C:F};D.prototype.p=function(){for(;!this.s;){var i=K(this,3);switch(1&i&&(this.s=e),i>>>=1){case 0:var n=this.input,a=this.c,o=this.a,c=this.b,f=n.length,h=t,u=o.length,l=t;switch(this.e=this.g=0,a+1>=f&&r(Error("invalid uncompressed block header: LEN")),h=n[a++]|n[a++]<<8,a+1>=f&&r(Error("invalid uncompressed block header: NLEN")),h===~(n[a++]|n[a++]<<8)&&r(Error("invalid uncompressed block header: length verify")),a+h>n.length&&r(Error("input buffer is broken")),this.n){case z:for(;c+h>o.length;){if(h-=l=u-c,s)o.set(n.subarray(a,a+l),c),c+=l,a+=l;else for(;l--;)o[c++]=n[a++];this.b=c,o=this.f(),c=this.b}break;case F:for(;c+h>o.length;)o=this.f({v:2});break;default:r(Error("invalid inflate mode"))}if(s)o.set(n.subarray(a,a+h),c),c+=h,a+=h;else for(;h--;)o[c++]=n[a++];this.c=a,this.b=c,this.a=o;break;case 1:this.o(H,J);break;case 2:var y,A,w,p,b=K(this,5)+257,v=K(this,5)+1,k=K(this,4)+4,U=new(s?Uint8Array:Array)(q.length),m=t,g=t,E=t,x=t,T=t;for(T=0;T<k;++T)U[q[T]]=K(this,3);if(!s)for(T=k,k=U.length;T<k;++T)U[q[T]]=0;for(y=d(U),m=new(s?Uint8Array:Array)(b+v),T=0,p=b+v;T<p;)switch(g=R(this,y),g){case 16:for(x=3+K(this,2);x--;)m[T++]=E;break;case 17:for(x=3+K(this,3);x--;)m[T++]=0;E=0;break;case 18:for(x=11+K(this,7);x--;)m[T++]=0;E=0;break;default:E=m[T++]=g}A=d(s?m.subarray(0,b):m.slice(0,b)),w=d(s?m.subarray(b):m.slice(b)),this.o(A,w);break;default:r(Error("unknown BTYPE: "+i))}}return this.t()};var C,O,j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],q=s?new Uint16Array(j):j,N=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],I=s?new Uint16Array(N):N,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Z=s?new Uint8Array(_):_,$=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],B=s?new Uint16Array($):$,L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],V=s?new Uint8Array(L):L,P=new(s?Uint8Array:Array)(288);for(C=0,O=P.length;C<O;++C)P[C]=143>=C?8:255>=C?9:279>=C?7:8;var S,G,H=d(P),Y=new(s?Uint8Array:Array)(30);for(S=0,G=Y.length;S<G;++S)Y[S]=5;var J=d(Y);function K(t,e){for(var i,n=t.g,s=t.e,a=t.input,o=t.c,c=a.length;s<e;)o>=c&&r(Error("input buffer is broken")),n|=a[o++]<<s,s+=8;return i=n&(1<<e)-1,t.g=n>>>e,t.e=s-e,t.c=o,i}function R(t,e){for(var i,n,s=t.g,a=t.e,o=t.input,c=t.c,f=o.length,h=e[0],u=e[1];a<u&&!(c>=f);)s|=o[c++]<<a,a+=8;return(n=(i=h[s&(1<<u)-1])>>>16)>a&&r(Error("invalid code length: "+n)),t.g=s>>n,t.e=a-n,t.c=c,65535&i}function X(r){if("string"==typeof r){var t,e,i=r.split("");for(t=0,e=i.length;t<e;t++)i[t]=(255&i[t].charCodeAt(0))>>>0;r=i}for(var n,s=1,a=0,o=r.length,c=0;0<o;){o-=n=1024<o?1024:o;do{a+=s+=r[c++]}while(--n);s%=65521,a%=65521}return(a<<16|s)>>>0}function Q(t,e){var i,n;if(this.input=t,this.c=0,!e&&(e={})||(e.index&&(this.c=e.index),e.verify&&(this.M=e.verify)),i=t[this.c++],n=t[this.c++],(15&i)===W)this.method=W;else r(Error("unsupported compression method"));0!=((i<<8)+n)%31&&r(Error("invalid fcheck flag:"+((i<<8)+n)%31)),32&n&&r(Error("fdict flag is not supported")),this.A=new D(t,{index:this.c,bufferSize:e.bufferSize,bufferType:e.bufferType,resize:e.resize})}D.prototype.o=function(r,t){var e=this.a,i=this.b;this.u=r;for(var n,s,a,o,c=e.length-258;256!==(n=R(this,r));)if(256>n)i>=c&&(this.b=i,e=this.f(),i=this.b),e[i++]=n;else for(o=I[s=n-257],0<Z[s]&&(o+=K(this,Z[s])),n=R(this,t),a=B[n],0<V[n]&&(a+=K(this,V[n])),i>=c&&(this.b=i,e=this.f(),i=this.b);o--;)e[i]=e[i++-a];for(;8<=this.e;)this.e-=8,this.c--;this.b=i},D.prototype.I=function(r,t){var e=this.a,i=this.b;this.u=r;for(var n,s,a,o,c=e.length;256!==(n=R(this,r));)if(256>n)i>=c&&(c=(e=this.f()).length),e[i++]=n;else for(o=I[s=n-257],0<Z[s]&&(o+=K(this,Z[s])),n=R(this,t),a=B[n],0<V[n]&&(a+=K(this,V[n])),i+o>c&&(c=(e=this.f()).length);o--;)e[i]=e[i++-a];for(;8<=this.e;)this.e-=8,this.c--;this.b=i},D.prototype.f=function(){var r,t,e=new(s?Uint8Array:Array)(this.b-32768),i=this.b-32768,n=this.a;if(s)e.set(n.subarray(32768,e.length));else for(r=0,t=e.length;r<t;++r)e[r]=n[r+32768];if(this.l.push(e),this.q+=e.length,s)n.set(n.subarray(i,i+32768));else for(r=0;32768>r;++r)n[r]=n[i+r];return this.b=32768,n},D.prototype.J=function(r){var t,e,i,n=this.input.length/this.c+1|0,a=this.input,o=this.a;return r&&("number"==typeof r.v&&(n=r.v),"number"==typeof r.F&&(n+=r.F)),2>n?e=(i=(a.length-this.c)/this.u[2]/2*258|0)<o.length?o.length+i:o.length<<1:e=o.length*n,s?(t=new Uint8Array(e)).set(o):t=o,this.a=t},D.prototype.t=function(){var r,t,e,i,n,a=0,o=this.a,c=this.l,f=new(s?Uint8Array:Array)(this.q+(this.b-32768));if(0===c.length)return s?this.a.subarray(32768,this.b):this.a.slice(32768,this.b);for(t=0,e=c.length;t<e;++t)for(i=0,n=(r=c[t]).length;i<n;++i)f[a++]=r[i];for(t=32768,e=this.b;t<e;++t)f[a++]=o[t];return this.l=[],this.buffer=f},D.prototype.H=function(){var r,t=this.b;return s?this.B?(r=new Uint8Array(t)).set(this.a.subarray(0,t)):r=this.a.subarray(0,t):(this.a.length>t&&(this.a.length=t),r=this.a),this.buffer=r},Q.prototype.p=function(){var t,e=this.input;return t=this.A.p(),this.c=this.A.c,this.M&&((e[this.c++]<<24|e[this.c++]<<16|e[this.c++]<<8|e[this.c++])>>>0!==X(t)&&r(Error("invalid adler-32 checksum"))),t};var W=8;function rr(r,t){this.input=r,this.a=new(s?Uint8Array:Array)(32768),this.h=tr.k;var e,i={};for(e in!t&&(t={})||"number"!=typeof t.compressionType||(this.h=t.compressionType),t)i[e]=t[e];i.outputBuffer=this.a,this.z=new A(this.input,i)}var tr=b;function er(r,t){var e,i,s,a;if(Object.keys)e=Object.keys(t);else for(i in e=[],s=0,t)e[s++]=i;for(s=0,a=e.length;s<a;++s)n(r+"."+(i=e[s]),t[i])}rr.prototype.j=function(){var t,e,i,n,a,o,c,f=0;if(c=this.a,(t=W)===W)e=Math.LOG2E*Math.log(32768)-8;else r(Error("invalid compression method"));if(i=e<<4|t,c[f++]=i,t===W)switch(this.h){case tr.NONE:a=0;break;case tr.r:a=1;break;case tr.k:a=2;break;default:r(Error("unsupported compression type"))}else r(Error("invalid compression method"));return n=a<<6|0,c[f++]=n|31-(256*i+n)%31,o=X(this.input),this.z.b=f,f=(c=this.z.j()).length,s&&((c=new Uint8Array(c.buffer)).length<=f+4&&(this.a=new Uint8Array(c.length+4),this.a.set(c),c=this.a),c=c.subarray(0,f+4)),c[f++]=o>>24&255,c[f++]=o>>16&255,c[f++]=o>>8&255,c[f++]=255&o,c},n("Zlib.Inflate",Q),n("Zlib.Inflate.prototype.decompress",Q.prototype.p),er("Zlib.Inflate.BufferType",{ADAPTIVE:M.C,BLOCK:M.D}),n("Zlib.Deflate",rr),n("Zlib.Deflate.compress",(function(r,t){return new rr(r,t).j()})),n("Zlib.Deflate.prototype.compress",rr.prototype.j),er("Zlib.Deflate.CompressionType",{NONE:tr.NONE,FIXED:tr.r,DYNAMIC:tr.k})}.call(self);class c{constructor(r=257){this.gridSize=r;const t=r-1;if(t&t-1)throw new Error(`Expected grid size to be 2^n+1, got ${r}.`);this.numTriangles=t*t*2-2,this.numParentTriangles=this.numTriangles-t*t,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(4*this.numTriangles);for(let r=0;r<this.numTriangles;r++){let e=r+2,i=0,n=0,s=0,a=0,o=0,c=0;for(1&e?s=a=o=t:i=n=c=t;(e>>=1)>1;){const r=i+s>>1,t=n+a>>1;1&e?(s=i,a=n,i=o,n=c):(i=s,n=a,s=o,a=c),o=r,c=t}const f=4*r;this.coords[f+0]=i,this.coords[f+1]=n,this.coords[f+2]=s,this.coords[f+3]=a}}createTile(r){return new f(r,this)}}class f{constructor(r,t){const e=t.gridSize;if(r.length!==e*e)throw new Error(`Expected terrain data of length ${e*e} (${e} x ${e}), got ${r.length}.`);this.terrain=r,this.martini=t,this.errors=new Float32Array(r.length),this.update()}update(){const{numTriangles:r,numParentTriangles:t,coords:e,gridSize:i}=this.martini,{terrain:n,errors:s}=this;for(let a=r-1;a>=0;a--){const r=4*a,o=e[r+0],c=e[r+1],f=e[r+2],h=e[r+3],u=o+f>>1,l=c+h>>1,y=u+l-c,d=l+o-u,A=(n[c*i+o]+n[h*i+f])/2,w=l*i+u,p=Math.abs(A-n[w]);if(s[w]=Math.max(s[w],p),a<t){const r=(c+d>>1)*i+(o+y>>1),t=(h+d>>1)*i+(f+y>>1);s[w]=Math.max(s[w],s[r],s[t])}}}getMesh(r=0){const{gridSize:t,indices:e}=this.martini,{errors:i}=this;let n=0,s=0;const a=t-1;function o(a,c,f,h,u,l){const y=a+f>>1,d=c+h>>1;Math.abs(a-u)+Math.abs(c-l)>1&&i[d*t+y]>r?(o(u,l,a,c,y,d),o(f,h,u,l,y,d)):(e[c*t+a]=e[c*t+a]||++n,e[h*t+f]=e[h*t+f]||++n,e[l*t+u]=e[l*t+u]||++n,s++)}e.fill(0),o(0,0,a,a,a,0),o(a,a,0,0,0,a);const c=new Uint16Array(2*n),f=new Uint32Array(3*s);let h=0;function u(n,s,a,o,l,y){const d=n+a>>1,A=s+o>>1;if(Math.abs(n-l)+Math.abs(s-y)>1&&i[A*t+d]>r)u(l,y,n,s,d,A),u(a,o,l,y,d,A);else{const r=e[s*t+n]-1,i=e[o*t+a]-1,u=e[y*t+l]-1;c[2*r]=n,c[2*r+1]=s,c[2*i]=a,c[2*i+1]=o,c[2*u]=l,c[2*u+1]=y,f[h++]=r,f[h++]=i,f[h++]=u}}return u(0,0,a,a,a,0),u(a,a,0,0,0,a),{vertices:c,triangles:f}}}let h;const u=new OffscreenCanvas(514,514),l=u.getContext("2d"),y=64,d=64,A=3,w=-1e3,p=1,b=.001,v=256,k=4,U=.1,m=.05,g={"cesium_request_token":{"Accept":"application/json,*/*;q=0.01","Accept-Encoding":"gzip, deflate, br"},"tianditu":{"Accept-Encoding":"gzip, deflate, br"},"cesium":{"Accept-Encoding":"gzip, deflate, br","Accept":"application/vnd.quantized-mesh,application/octet-stream;q=0.9,*/*;q=0.01"},"mapbox":{"Accept":"image/webp,*/*"}},E=32767;let x=null;function T(r,t){const e=new DataView(r),i=new Uint8Array(e.byteLength);let n=0;for(;n<e.byteLength;)i[n]=e.getUint8(n,!0),n++;const s=function(r){if(r.length<1e3)return;const t=new Zlib.Inflate(r);return t?t.decompress():void 0}(i),a=function(r){const t=r,e=y,i=d,n=new Uint8Array(e*i*k);let s,a,o,c,f;for(let r=0;r<i;r++)for(let h=0;h<e;h++){c=parseInt(149*r/(i-1)),f=parseInt(149*h/(e-1)),a=2*(150*c+f),s=t[a]+256*t[a+1],(s>1e4||s<-2e3)&&(s=0),o=4*(r*e+h);const u=(s+1e3)/b,l=v;n[o]=u/(l*l),n[o+1]=(u-n[o]*l*l)/l,n[o+2]=u-n[o]*l*l-n[o+1]*l,n[o+3]=255}return n}(s),o=function(r,t){const e=y,i=d,n=e+1,s=i+1,a=A,o=w,c=p,f=b,h=v,u=U,l=new Float32Array(n*s);let k=0;for(let t=0;t<n;t++){const n=t>=i?i-1:t;for(let t=0;t<s;t++){let i=0;const s=n*(4*e)+4*(t>=e?e-1:t);for(let t=0;t<a;t++)i=i*h+r[s+t];i=(i*f+o)*c,i-=u,l[k]=i,k++}}return l}(a);return M(o,y+1)}function D(r){return r>>1^-(1&r)}function z(r,t){let e=0;const i=3*Float64Array.BYTES_PER_ELEMENT,n=4*Float64Array.BYTES_PER_ELEMENT,s=3*Uint16Array.BYTES_PER_ELEMENT;let a=Uint16Array.BYTES_PER_ELEMENT;const o=new DataView(r);e+=i;const c=o.getFloat32(e,!0);e+=Float32Array.BYTES_PER_ELEMENT;const f=o.getFloat32(e,!0);e+=Float32Array.BYTES_PER_ELEMENT,e+=n,e+=i;const h=o.getUint32(e,!0);e+=Uint32Array.BYTES_PER_ELEMENT;const u=new Uint16Array(r,e,3*h);e+=h*s,h>65536&&(a=Uint32Array.BYTES_PER_ELEMENT);!function(r,t,e){const i=r.length;let n=0,s=0,a=0;for(let o=0;o<i;++o)n+=D(r[o]),s+=D(t[o]),r[o]=n,t[o]=s,e&&(a+=D(e[o]),e[o]=a)}(u.subarray(0,h),u.subarray(h,2*h),u.subarray(2*h,3*h)),e%a!=0&&(e+=a-e%a);const l=o.getUint32(e,!0);e+=Uint32Array.BYTES_PER_ELEMENT;const y=h>65536?new Uint32Array(r,e,3*l):new Uint16Array(r,e,3*l);let d=0;const A=y.length;for(let r=0;r<A;++r){const t=y[r];y[r]=d-t,0===t&&++d}const w={minimumHeight:c,maximumHeight:f,quantizedVertices:u,indices:y}.quantizedVertices,p=w.length/3,b=w.subarray(0,p),v=w.subarray(p,2*p),k=w.subarray(2*p,3*p),U=[],m=[];for(let r=0;r<p;++r){const e=b[r],i=v[r],n=e/E,s=i/E,a=(g=c,x=f,(1-(T=k[r]/E))*g+T*x);m.push(n),m.push(1-s),U.push(256*n),U.push(256*-(1-s)),U.push(a*t)}var g,x,T;return{positions:U,texcoords:m,triangles:y}}function F(r,t,e,i){let n=g[e];"cesium"===e&&(n={"Accept-Encoding":"gzip, deflate, br","Accept":"application/vnd.quantized-mesh,application/octet-stream;q=0.9,*/*;q=0.01","Authorization":"Bearer "+x}),function(r,t,e){const i={method:"GET",referrer:e,headers:t};return o.getArrayBuffer(r,i)}(r,n,origin).then((r=>{if(r.message)self.postMessage({callback:i,error:r});else{const n=r.data;let s=null;"tianditu"===e?s=T(n):"cesium"===e?s=z(n,t):"mapbox"===e&&(s=function(r){const t=new self.Blob([new Uint8Array(r)],{type:"image/png"});return self.createImageBitmap(t)}(n)),s.then?s.then((e=>{const n=function(r,t){u.width=r.width,u.height=r.height,l.drawImage(r,0,0,r.width,r.height);const e=y+1,i=l.getImageData(0,0,520,520).data,n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let s=0;s<e;s++){const a=r+s*e;let o=0;const c=8;let f=0;for(let t=0;t<c;t++)for(let n=0;n<c;n++){const a=r*c+t+(s*c+n)*e*c,h=i[4*a],u=i[4*a+1],l=i[4*a+2];0===i[4*a+3]?f+=1:o+=.1*(256*h*256+256*u+l)-1e4}o/=c*c-f,n[a]=o*t}const s=M(n,e);return l.clearRect(0,0,u.width,u.height),s}(e,t);self.postMessage({callback:i,data:n},r.transferables)})):self.postMessage({callback:i,data:s},r.transferables)}})).catch((r=>{self.postMessage({callback:i,error:r})}))}function M(r,t){const e=new c(t).createTile(r).getMesh(.1),{triangles:i,vertices:n}=e,s=[],a=[],o=m;for(let e=0;e<n.length/2;e++){const i=n[2*e],c=n[2*e+1];s.push(i*(4+o)),s.push(-c*(4+o)),s.push(r[c*t+i]),a.push(i/y),a.push(c/d)}return{positions:s,texcoords:a,triangles:i}}r.onmessage=function(r){const t=r.data,e=t.url;"addLayer"===t.command||"removeLayer"===t.command?(h=r.workerId,self.postMessage({type:"<response>",actorId:t.actorId,workerId:h,params:"ok"})):e&&function(r){const t=r.data,e=r.callback,{url:i,origin:n,exaggeration:s,type:a,accessToken:o}=t;if("tianditu"===a)F(i,s,a,e);else if("cesium"===a){const r="https://api.cesium.com/v1/assets/1/endpoint?access_token="+o;x?F(i,s,a,e):fetch(r,{responseType:"json",method:"GET",referrer:n,headers:{Accept:"application/json,*/*;q=0.01","Accept-Encoding":"gzip, deflate, br"}}).then((r=>r.json())).then((r=>{x=r.accessToken,F(i,s,a,e)}))}else"mapbox"===a&&F(i,s,a,e)}(r)},Object.defineProperty(r,"T",{value:!0})}';class o extends i.worker.Actor{constructor(t,e){super(t),this.mapId=e}fetchTerrain(t,e,r){const n={url:t,origin:location.origin,exaggeration:e.exaggeration,type:e.type,accessToken:e.accessToken};this.send(n,null,((t,e)=>{t?r(t):r(t,e)}))}addLayer(t,e,r){const n={actorId:this.actorId,mapId:this.mapId,layerId:t,command:"addLayer",params:{options:e}};this.broadcast(n,null,r)}removeLayer(t,e,r){const n={mapId:this.mapId,layerId:t,command:"removeLayer"};this.broadcast(n,null,r)}}const h=new i.Point(0,0),c=[0,0,0],f=new Array(16),l=function(t,e,r,n){const i=new Int16Array(12),s=t,a=t+r,o=e,h=e-n;return i[0]=s,i[1]=o,i[2]=0,i[3]=s,i[4]=h,i[5]=0,i[6]=a,i[7]=o,i[8]=0,i[9]=a,i[10]=h,i[11]=0,i}(0,0,256,256),u=new r.reshader.Geometry({POSITION:l,TEXCOORD_0:[0,0,0,1,1,0,1,1]},[3,1,0,0,2,3],0,{primitive:"triangles",positionAttribute:"POSITION",uv0Attribute:"TEXCOORD_0"});class d extends i.renderer.TileLayerCanvasRenderer{constructor(t){super(t),this.terrainCache={}}isDrawable(){return!0}drawTile(t,e,r){const n=this.getMap();if(!t||!n||!e)return;const i=t.i=t.i||n.getGLScale(t.z),s=t.extent2d.xmax-t.extent2d.xmin,a=t.extent2d.ymax-t.extent2d.ymin,{extent2d:o,offset:c}=t,f=h.set(o.xmin-c[0],t.extent2d.ymax-c[1]),l=f.x*i,u=f.y*i,d=this.getTileOpacity(e);let p=null;this.layer.options.debug&&(p=this.getDebugInfo(t.id)),this.drawTerrain(e,t,l,u,s,a,i,d,p,r),d<1?this.setToRedraw():this.setCanvasUpdated()}drawTerrain(t,e,n,i,s,a,o,h,l,u){c[0]=n||0,c[1]=i||0;const d=r.mat4.identity(f);r.mat4.translate(d,d,c),r.mat4.scale(d,d,[o,o,1]),t.texture||(t.texture=this.regl.texture(t)),t.material||(t.material=new r.reshader.Material({u_image:t.texture})),t.material.set("u_opacity",h),t.material.set("u_debug_line",l||0);const p=new r.reshader.Scene([]);if(t.terrainMesh)p.setMeshes([t.terrainMesh]);else if(!t.terrainMesh){const n=`terrain_${this.layer.getId()}_${e.x}_${e.y}_${e.z}`,i=this.terrainCache[n]&&this.terrainCache[n].data;if(i){const s=new r.reshader.Geometry({POSITION:i.positions,TEXCOORD_0:i.texcoords},i.triangles,0,{primitive:"triangles",positionAttribute:"POSITION",uv0Attribute:"TEXCOORD_0"}),a=new r.reshader.Mesh(s,t.material);a.localTransform=r.mat4.copy([],d),this.terrainCache[n].extent2d=e.extent2d,this.terrainCache[n].terrainMesh=a,a.setUniform("uPickingId",1);const o=a.getDefines();o.HAS_PICKING_ID=2,a.setDefines(o),t.terrainMesh=a,p.setMeshes([t.terrainMesh])}else this.o(t,p,r.mat4.copy([],d))}this.h=!0;const y=u&&u.renderTarget&&u.renderTarget.fbo;this.renderer.render(this.l,this.u,p,y)}o(t,e,n){t.tileMesh?e.setMeshes([t.tileMesh]):t.tileMesh||(t.tileMesh=new r.reshader.Mesh(u,t.material),t.tileMesh.localTransform=n,e.setMeshes([t.tileMesh]))}loadTile(t){if(this.workerConn){const e=this.layer.options.type,r=`terrain_${this.layer.getId()}_${t.x}_${t.y}_${t.z}`;if(!this.terrainCache[r]){let n,i,s;if("cesium"===e){n=t.x,s=t.z-1;i=(1<<s)-t.y-1}else n=t.x,i=t.y,s=t.z;let a=this.layer.getTerrainUrl(n,i,s);if("mapbox"===e){a+=".webp?sku="+this.p()+"&access_token="+this.layer.options.accessToken}else"cesium"===e&&(a+="?extensions=octvertexnormals-watermask-metadata&v=1.2.0");this.workerConn.fetchTerrain(a,this.layer.options,((t,e)=>{if(t&&console.warn(t),this.terrainCache[r]={},e.positions)for(let t=2;t<e.positions.length;t+=3)e.positions[t]=this.g(e.positions[t]);this.terrainCache[r].data=e,this.setToRedraw()}))}}return super.loadTile(t)}m(t,e){const r=this.layer.getMap().getZoom(),n=`terrain_${this.layer.getId()}_${t.x}_${t.y}_${Math.round(r)}`,i=this.terrainCache[n];if(i){const t=i.extent2d,r=e.x-t.xmin,n=e.y-t.ymin,{A:s,B:a,C:o}=this.v(i.data,r,n),h=this.layer.options.exaggeration||1;return 50*(s[2]+a[2]+o[2])/(3*h)}console.warn("terrain data has not been loaded")}k(t,e,r={}){if(!this._)return null;const n=this.layer.getMap(),s=this.canvas.gl&&this.canvas.gl.wrap;if(this.h||s){const t=this.T(),e=i.Util.extend({},this.u);this._.render(t,e,!0),this.h=!1}const{meshId:a,pickingId:o,point:h}=this._.pick(t,e,r.tolerance||3,{"projViewMatrix":n.projViewMatrix},{viewMatrix:n.viewMatrix,projMatrix:n.projMatrix,returnPoint:!0});return{meshId:a,pickingId:o,point:h}}g(t){const e=this.layer.getMap();if(!e)return null;return e.altitudeToPoint(t,e.getGLRes())}v(t,e,r){const n=t.positions,i=t.triangles,s=[e,r];for(let t=0;t<i.length/3;t++){const e=i[3*t],r=i[3*t+1],a=i[3*t+2],o=[n[3*e],-n[3*e+1],n[3*e+2]],h=[n[3*r],-n[3*r+1],n[3*r+2]],c=[n[3*a],-n[3*a+1],n[3*a+2]],f=this.U(o[0],o[1],h[0],h[1],c[0],c[1]);if(!(this.U(s[0],s[1],o[0],o[1],c[0],c[1])+this.U(s[0],s[1],o[0],o[1],h[0],h[1])+this.U(s[0],s[1],h[0],h[1],c[0],c[1])-f>1e-4))return o[1]=-o[1],h[1]=-h[1],c[1]=-c[1],{A:o,B:h,C:c}}}U(t,e,r,n,i,s){return.5*Math.abs(t*n+r*s+i*e-t*s-r*e-i*n)}p(){let t="";for(let e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return["1","01",t].join("")}deleteTile(t){super.deleteTile(t),t&&t.image&&(t.image.tileMesh&&t.image.tileMesh.dispose(),t.image.terrainMesh&&t.image.terrainMesh.dispose(),t.image.material&&t.image.material.dispose());const e=t.info,r=`terrain_${this.layer.getId()}_${e.x}_${e.y}_${e.z}`;delete this.terrainCache[r],delete t.image}getAnalysisMeshes(){return this.T()}T(){const t=this.layer.getTiles().tileGrids[0].tiles,e=[];for(let r=0;r<t.length;r++){const n=`terrain_${`${this.layer.getId()}_${t[r].idx}_${t[r].idy}_${t[r].z}`}`;if(this.terrainCache[n]){const t=this.terrainCache[n].terrainMesh;t&&e.push(t)}}return e}onAdd(){super.onAdd(),this.prepareWorker()}onRemove(){this.workerConn&&(this.workerConn.removeLayer(this.layer.getId(),(t=>{if(t)throw t})),this.workerConn.remove(),delete this.workerConn),super.onRemove()}remove(){for(const t in this.terrainCache){const e=this.terrainCache[t].terrainMesh;e&&(e.material&&e.material.dispose(),e.geometry.dispose(),e.dispose())}this.l&&this.l.dispose(),this._&&this._.dispose(),super.remove()}prepareWorker(){const t=this.layer.getMap();this.workerConn||(this.workerConn=new o("@maptalks/terrain",t.id));const e=this.workerConn;if(!e.isActive())return;const r=this.layer.options||{},n=this.layer.getId();e.addLayer(n,r,(t=>{if(t)throw t;this.layer&&(this.ready=!0,this.layer.fire("workerready"))}))}clearCanvas(){this.canvas&&(this.regl.clear({color:[0,0,0,0],depth:1,stencil:0}),super.clearCanvas())}loadTileImage(t,e){const r=this.layer.options.crossOrigin;t.crossOrigin=null!==r?r:"",t.src=e}createContext(){const t=this.layer,e=this.canvas.gl&&this.canvas.gl.wrap;if(e)this.gl=this.canvas.gl.wrap(),this.regl=this.canvas.gl.regl;else{const e=t.options.glOptions||{alpha:!0,depth:!0,stencil:!0};this.glOptions=e,this.gl=this.gl||this.M(this.canvas,e),this.regl=r.createREGL({gl:this.gl,optionalExtensions:["ANGLE_instanced_arrays","OES_element_index_uint","OES_standard_derivatives","OES_vertex_array_object","OES_texture_half_float","OES_texture_half_float_linear","OES_texture_float","OES_texture_float_linear","WEBGL_depth_texture","EXT_shader_texture_lod","WEBGL_compressed_texture_s3tc"]})}e&&(this.canvas.pickingFBO=this.canvas.pickingFBO||this.regl.framebuffer(this.canvas.width,this.canvas.height)),this.pickingFBO=this.canvas.pickingFBO||this.regl.framebuffer(this.canvas.width,this.canvas.height),this.renderer=new r.reshader.Renderer(this.regl);const n=t.getMap();this.u={"projViewMatrix":n.projViewMatrix},this.l=new r.reshader.MeshShader({vert:"attribute vec3 aPosition;\n\nattribute vec2 aTexCoord;\n\nuniform mat4 projViewMatrix;\n\nuniform mat4 modelMatrix;\n\nuniform float picking;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\n    gl_Position = projViewMatrix * modelMatrix * vec4(aPosition, 1.0);\n\n    v_texCoord = aTexCoord;\n\n}\n\n",frag:"precision mediump float;\n\nuniform sampler2D u_image;\n\nuniform float u_opacity;\n\nuniform float u_debug_line;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\n    if (u_debug_line == 1.) {\n\n        gl_FragColor = vec4(0., 1., 0., 1.);\n\n    } else {\n\n        gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;\n\n    }\n\n}\n\n",uniforms:[],extraCommandProps:{viewport:{x:0,y:0,width:()=>this.canvas?this.canvas.width:1,height:()=>this.canvas?this.canvas.height:1}}}),this._=new r.reshader.FBORayPicking(this.renderer,{vert:"attribute vec3 aPosition;\nuniform mat4 projViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\n#include <fbo_picking_vert>\n#include <get_output>\nvoid main()\n{\n    mat4 localPositionMatrix = getPositionMatrix();\n    gl_Position = projViewMatrix * modelMatrix * localPositionMatrix * getPosition(aPosition);\n    fbo_picking_setData(gl_Position.w, true);\n}\n",uniforms:[{name:"projViewModelMatrix",type:"function",fn:function(t,e){return r.mat4.multiply([],e.projViewMatrix,e.modelMatrix)}}]},this.pickingFBO)}resizeCanvas(t){super.resizeCanvas(t),this.pickingFBO&&this.pickingFBO.resize(this.canvas.width,this.canvas.height)}M(t,e){const r=["webgl","experimental-webgl"];let n=null;for(let i=0;i<r.length;++i){try{n=t.getContext(r[i],e)}catch(t){}if(n)break}return n}}const p=/\{ *([\w_]+) *\}/g;class y extends i.TileLayer{queryAltitide(t){const e=this.getMap(),r=this.getSpatialReference(),n=Math.round(e.getZoom()),i=r.getResolution(n),s=this.options.repeatWorld,a=this.O(),o=e.getProjection().projectCoords(t),h=a.getTileIndex(o,i,s),c=this.getRenderer();if(c){const r=e.coordinateToPoint(t);return c.m(h,r)}}getTerrainUrl(t,e,r){const n=this.options.terrainUrlTemplate;let s="";if(this.options.subdomains){const r=this.options.subdomains;if(i.Util.isArrayHasData(r)){let n=(t+e)%r.length;n<0&&(n=0),s=r[n]}}if(i.Util.isFunction(n))return n(t,e,r,s);const a={"x":t,"y":e,"z":r,"s":s};return this.options.token&&(a.token=this.options.token),n.replace(p,(function(t,e){let r=a[e];if(void 0===r)throw new Error("No value provided for variable "+t);return"function"==typeof r&&(r=r(a)),r}))}getAnalysisMeshes(){const t=this.getRenderer();if(t)return t.getAnalysisMeshes()}identifyAtPoint(t,e){const r=this.getMap();if(!r)return[];const n=r.getDevicePixelRatio(),s=t.x*n,a=t.y*n,o=this.k(s,a,e),h=o&&o.point;if(h){const t=r.pointAtResToCoordinate(new i.Point(h[0],h[1]),r.getGLRes()),e=r.pointToAltitude(h[2],r.getGLRes());return[{point:new i.Coordinate(t.x,t.y,e)}]}return[]}k(t,e,r){const n=this.getRenderer();return n?n.k(t,e,r):null}}if(y.mergeOptions({"forceRenderOnMoving":!0,"forceRenderOnZooming":!0,"forceRenderOnRotating":!0,"opacity":1,"exaggeration":1,"renderer":"gl"}),y.registerJSONType("TerrainLayer"),y.registerRenderer("gl",d),s.transcoders){const t=i.Map.VERSION;if(t.indexOf("1.0.0-beta")>=0||t.indexOf("1.0.0-alpha")>=0){const t=s.transcoders.inject(a);i.registerWorkerAdapter("@maptalks/terrain",t)}else i.registerWorkerAdapter("@maptalks/terrain",(function(){return s.transcoders.inject(a)}))}else i.registerWorkerAdapter("@maptalks/terrain",a);t.TerrainLayer=y,Object.defineProperty(t,"t",{value:!0}),"undefined"!=typeof console&&console.log("@maptalks/terrain v0.1.0")}));
