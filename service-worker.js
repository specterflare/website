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
    "revision": "eed89102fc1b6d1b60bce89fec142490"
  },
  {
    "url": "assets/Browse-Dark.png",
    "revision": "f37141d4c71fa7ed6a96677eebbba868"
  },
  {
    "url": "assets/Browse-Light.png",
    "revision": "af36bd987afd8aeecc8283e7051fe57d"
  },
  {
    "url": "assets/css/0.styles.94ef0a57.css",
    "revision": "303f371d027383a6142d9a6fb3792c3d"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/img/MaterialIcons-Regular.a1adea65.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.24844af3.js",
    "revision": "b47aa83e28827266064972b647c57c44"
  },
  {
    "url": "assets/js/10.231882c0.js",
    "revision": "50e2a66aee5b408a9800ca58435c6830"
  },
  {
    "url": "assets/js/11.6d41db29.js",
    "revision": "c9489e45a30e0c96a0f8a2816301ed12"
  },
  {
    "url": "assets/js/12.25043f17.js",
    "revision": "b1d082ba88058ef41b3fedbc9506812f"
  },
  {
    "url": "assets/js/13.7aa6ea61.js",
    "revision": "da3254cb800295249303cad75fde88bc"
  },
  {
    "url": "assets/js/14.164cd3a6.js",
    "revision": "d5ab3b8632aeabed094ebec2881dc4ae"
  },
  {
    "url": "assets/js/15.e1b92e28.js",
    "revision": "4b8a77557e851fc54f546af4763bae0a"
  },
  {
    "url": "assets/js/16.dd2537c6.js",
    "revision": "b4935a52d26555c6c8d5894387172983"
  },
  {
    "url": "assets/js/17.81302009.js",
    "revision": "3afbe36983f898899c25cb2b116448cb"
  },
  {
    "url": "assets/js/18.74ec44f0.js",
    "revision": "019f2e11c29fca8f782fd655fbc3dbb4"
  },
  {
    "url": "assets/js/19.65528c2d.js",
    "revision": "8439e8ac1e8458b7a7a95e9d33ce40a1"
  },
  {
    "url": "assets/js/2.fcac035e.js",
    "revision": "6729a107d2dca0fbf0ef13e7b5e7930c"
  },
  {
    "url": "assets/js/20.d645eda5.js",
    "revision": "d2405f04a79d8957dd2d4c8a32fd7848"
  },
  {
    "url": "assets/js/21.6da62b40.js",
    "revision": "95f300cc4fa256bce813eaa7f4398141"
  },
  {
    "url": "assets/js/22.66393cc3.js",
    "revision": "1544db67296a87598350d678ea9274f3"
  },
  {
    "url": "assets/js/23.222db4e8.js",
    "revision": "8581587e0187fb72fdb80ba20eea7a89"
  },
  {
    "url": "assets/js/24.d7922934.js",
    "revision": "d3352c18bec907a948a5a714e2082496"
  },
  {
    "url": "assets/js/25.3677be3d.js",
    "revision": "5b8ac55e95477e86e829b6e020b4bd86"
  },
  {
    "url": "assets/js/26.50715798.js",
    "revision": "433b186fc5a288f62e93c7a79df13363"
  },
  {
    "url": "assets/js/27.cd593b27.js",
    "revision": "4d56c1c5bc2d617c543025d893bbe0de"
  },
  {
    "url": "assets/js/28.7df5b3ca.js",
    "revision": "a7d1e05cff3b9f1cc86de9e0a01a4847"
  },
  {
    "url": "assets/js/29.28be55d0.js",
    "revision": "c59df9f0d201e4bee0536b55943aab0c"
  },
  {
    "url": "assets/js/30.68809e60.js",
    "revision": "508c02f64b16f053ca19a79507a68892"
  },
  {
    "url": "assets/js/31.d21d3a3d.js",
    "revision": "809fd122471269dad06725df051f8987"
  },
  {
    "url": "assets/js/32.0fceca8c.js",
    "revision": "636742bfdb472333e7b52d30ead4e9af"
  },
  {
    "url": "assets/js/33.161440b0.js",
    "revision": "1a65523331d2df2ccdcc990b1ad029fd"
  },
  {
    "url": "assets/js/34.a6f98fa6.js",
    "revision": "ee1d763970819de29e4fd62cb4a420be"
  },
  {
    "url": "assets/js/35.3c1fe415.js",
    "revision": "1a9a38561ab35fffdc01b97b5b39e1aa"
  },
  {
    "url": "assets/js/36.b367bf76.js",
    "revision": "fdef2f80b6f773dc61fdcfed3286b5c9"
  },
  {
    "url": "assets/js/37.c2602a58.js",
    "revision": "1eb03eca510edf9045c325e4e33483eb"
  },
  {
    "url": "assets/js/38.bd9a5a04.js",
    "revision": "0d931476b9f2e3f7f0105bda85ee52d9"
  },
  {
    "url": "assets/js/39.340c67a0.js",
    "revision": "055a1cc4fc61b01d80a4a4688f629226"
  },
  {
    "url": "assets/js/40.82093af4.js",
    "revision": "67e66dc8e4f15cc7e113bffa9fc65ac8"
  },
  {
    "url": "assets/js/41.fb59091f.js",
    "revision": "8b080b73f95c537059ed93ce91ff39cd"
  },
  {
    "url": "assets/js/42.eceeb5a5.js",
    "revision": "18fb8c135129d04f2e7ce49a729a1be9"
  },
  {
    "url": "assets/js/5.f07d5083.js",
    "revision": "7913f3246d9faf770e94fd6ed3119e21"
  },
  {
    "url": "assets/js/6.99e6b5f8.js",
    "revision": "23a3589d93f9318f34d1539c6bf249bc"
  },
  {
    "url": "assets/js/7.80dc875d.js",
    "revision": "b95482da5ada94e3c8206aae9f5face8"
  },
  {
    "url": "assets/js/8.1753d6af.js",
    "revision": "ce6d552c4698f3790a9a2605b45baa44"
  },
  {
    "url": "assets/js/9.1fd131f9.js",
    "revision": "63a22851104d917462434ee65ca15d6e"
  },
  {
    "url": "assets/js/app.f7f7df1e.js",
    "revision": "0159053b256157570b9b65b06ddf1a80"
  },
  {
    "url": "assets/js/vendors~docsearch.830d3e9d.js",
    "revision": "cd6532aba436ec9f073e59ed61f320f7"
  },
  {
    "url": "assets/Library-Dark.png",
    "revision": "5c85f77ce2a7c6f37f8f98bab69e4c15"
  },
  {
    "url": "assets/Library-Light.png",
    "revision": "040387dbc173d69e3e5f56cb6d516df9"
  },
  {
    "url": "assets/Manga-Dark.png",
    "revision": "f30652a9b7b9ad14f5853b8699900f0a"
  },
  {
    "url": "assets/Manga-Light.png",
    "revision": "e25c95d779a68b080e5fc1c250fd7314"
  },
  {
    "url": "download/index.html",
    "revision": "83031472f7fe244141f4687465fc8062"
  },
  {
    "url": "extensions/index.html",
    "revision": "2fa45f2a3f6163d70966e22b1c724f0c"
  },
  {
    "url": "forks/index.html",
    "revision": "3b2514b912b543db40458441f62b54aa"
  },
  {
    "url": "forks/Neko/assets/banner.png",
    "revision": "31fc0fefde4a8cfe84adf24c2b5212ff"
  },
  {
    "url": "forks/Neko/assets/logo.png",
    "revision": "9e82e2bb234b4f3e22e0afc7266bf521"
  },
  {
    "url": "forks/Neko/index.html",
    "revision": "8acd3f1998e905f05383176eef77bde7"
  },
  {
    "url": "forks/TachiyomiAZ/assets/gunz.png",
    "revision": "7ba4f33a10b643f437c3fd8dadda110a"
  },
  {
    "url": "forks/TachiyomiAZ/assets/logo.png",
    "revision": "8c091950f3de1d0e81e69728db382d0d"
  },
  {
    "url": "forks/TachiyomiAZ/index.html",
    "revision": "727685d502a00c6a667ac141f9779423"
  },
  {
    "url": "forks/TachiyomiEH/assets/banner.png",
    "revision": "a2852ea02d260d0395d565b133a9de3c"
  },
  {
    "url": "forks/TachiyomiEH/assets/logo.png",
    "revision": "2d9809f2099cbed6378ad71b26258aff"
  },
  {
    "url": "forks/TachiyomiEH/index.html",
    "revision": "fe542fd0fb491131c4725a84ad9254dc"
  },
  {
    "url": "forks/TachiyomiJ2K/assets/banner.png",
    "revision": "df716f69ba60004b7cc03cf8d317a95d"
  },
  {
    "url": "forks/TachiyomiJ2K/assets/logo.png",
    "revision": "c758f9e913e15e23c7a5109784c4f280"
  },
  {
    "url": "forks/TachiyomiJ2K/index.html",
    "revision": "15d77b4b46d1022472afe47555b04a29"
  },
  {
    "url": "forks/TachiyomiSY/assets/banner.png",
    "revision": "d4d7465d14829ca4fa54ceea10150ef1"
  },
  {
    "url": "forks/TachiyomiSY/assets/logo.png",
    "revision": "2215e355257fa1fb6e95aa88a3833295"
  },
  {
    "url": "forks/TachiyomiSY/assets/logo.svg",
    "revision": "15a56823b7f78ce96bfff6da8e1d3755"
  },
  {
    "url": "forks/TachiyomiSY/index.html",
    "revision": "1f11189aeccb8ab8d9d821ee3bc69f1c"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "47c3e087fb6efb66a2c02f05a5165eb9"
  },
  {
    "url": "help/faq/assets/MangaDex-NoResults.png",
    "revision": "50d19b61bf2a1169dfaf00f68eb1f763"
  },
  {
    "url": "help/faq/assets/UnknownSources-Android10.png",
    "revision": "99799a8759fbd492d3c582ea0f5fff97"
  },
  {
    "url": "help/faq/assets/UnknownSources-Android7.png",
    "revision": "0fe1c5865a9d5e10b1b7ab0c04d98aa2"
  },
  {
    "url": "help/faq/index.html",
    "revision": "4fdc0731bc3b89795856d0292ccf129b"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "bd0dde1076df5deea0c75f8d2905abca"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "82174a88d8650fdd2885670d8f90e359"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "d24fc054e47fe60428a1f81fd1eb270b"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-Background-Black.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-Background-White.png",
    "revision": "4b425030809b32c951b8045746454d0b"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-CropBorder-With.png",
    "revision": "ce67a23f3fe437057ffff724ec2b329c"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-CropBorder-Without.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-FitHeight.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-FitScreen.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-FitWidth.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-OriginalSize.png",
    "revision": "fcbada5ec4c2bed02a66adda4c262257"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-SmartFit.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-Stretch.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-ZoomStartPos-Center.png",
    "revision": "bd94e1eb71e220f49c79ed6c9c02f87e"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-ZoomStartPos-Left.png",
    "revision": "dec5ff9cf376aeca7af59606b5e78f4a"
  },
  {
    "url": "help/guides/reader-settings/assets/Reader-ZoomStartPos-Right.png",
    "revision": "b59c83acde28d8a3903b09cbacf9dfe4"
  },
  {
    "url": "help/guides/reader-settings/index.html",
    "revision": "5af0addc02669054bad6027e5c291450"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "05ce823746b7ebdab843b066615b0984"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "56115355033fd24ac69b72dd449e4247"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "188cd8807fa001429d399c5f1891842c"
  },
  {
    "url": "help/index.html",
    "revision": "f7655e99d9be0c723eb683fd0ab01b8e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b1b40b3c083d63bb5b1797b27adf1524"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "342d4bacd45c5b7d8b6c20636e160044"
  },
  {
    "url": "icons/logo.png",
    "revision": "41e7681ddc5c815bf8490f44d51fa8b2"
  },
  {
    "url": "icons/logo.svg",
    "revision": "a2dae57c67a9bbb51367c1dbb4b4d1c2"
  },
  {
    "url": "index.html",
    "revision": "53296c2907e3828e0e5d524874d788be"
  },
  {
    "url": "scripts/remove_service_worker.js",
    "revision": "b5271fcb73441e9409dccc5ca45df5c8"
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
