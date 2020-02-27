/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1210ebac26ac93b3a8c58cc23ea9080e"
  },
  {
    "url": "android/index.html",
    "revision": "3e7d8d0b44a863697d9d4fe27d1cd8e9"
  },
  {
    "url": "API/index.html",
    "revision": "d4725127349a3983a1220c77e3768282"
  },
  {
    "url": "API/POO.html",
    "revision": "3a5e92976170fbd7f3f4424c37e9f0df"
  },
  {
    "url": "assets/css/0.styles.a6923705.css",
    "revision": "6fa78ebf2c3c3fdf26c489097826e64b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4867bb17.js",
    "revision": "b5f74e66596952e04d726c900615c06c"
  },
  {
    "url": "assets/js/11.8ff0992d.js",
    "revision": "0b3db2500141a1f3a96fbe6f4ed1da2a"
  },
  {
    "url": "assets/js/12.0d967c39.js",
    "revision": "abe29f57d1d0bb707db1959ab5a277db"
  },
  {
    "url": "assets/js/13.1f8a4f5b.js",
    "revision": "f751ec6ade3e0b04d5b7a3b78c1c0ad6"
  },
  {
    "url": "assets/js/14.07081446.js",
    "revision": "70d036f8693ecf018e1c0fc5dc0bd26c"
  },
  {
    "url": "assets/js/2.06d98ce2.js",
    "revision": "409b07e7775cd499e18acc4e6bfe564c"
  },
  {
    "url": "assets/js/3.0b0ff37f.js",
    "revision": "4d59b9a62aaeb37455ae893525275b71"
  },
  {
    "url": "assets/js/4.798ff04f.js",
    "revision": "d1686dbff3f0323ed2a391ea245ca3d1"
  },
  {
    "url": "assets/js/5.2179962c.js",
    "revision": "17fa11b6d7ad0471d9f7bd0d8623dfba"
  },
  {
    "url": "assets/js/6.38a96785.js",
    "revision": "5a6bb62dc162aff8186f1996b2f5b214"
  },
  {
    "url": "assets/js/7.99b0f2bc.js",
    "revision": "ee96d35a6145c9b58f0c9e8907ec5488"
  },
  {
    "url": "assets/js/8.1655da9e.js",
    "revision": "4f04543f881c6bc89a852ee181dc01ee"
  },
  {
    "url": "assets/js/9.da7074a9.js",
    "revision": "f443dbeee80607eac6cad4dc1ffdca63"
  },
  {
    "url": "assets/js/app.71eeb32b.js",
    "revision": "849930b734bd2f19b1e4f6bd7cd627c2"
  },
  {
    "url": "index.html",
    "revision": "22642d91261969ab5bf0b814e5c2fe05"
  },
  {
    "url": "java/class.html",
    "revision": "078a98d4cd11202c76b704f1abc547b6"
  },
  {
    "url": "java/index.html",
    "revision": "9b8f87f2fcf3226691912e3f48c7dc46"
  },
  {
    "url": "logo.svg",
    "revision": "458558f010427e8b4c4ea1caa06100fa"
  },
  {
    "url": "UML/index.html",
    "revision": "a0cee8bd1e3244f5835516b0b3df34eb"
  },
  {
    "url": "UML/introduction.html",
    "revision": "1d0be5a7479486d17bb5ec15a8145b10"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
