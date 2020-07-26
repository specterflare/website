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
    "revision": "b73eddbc104e28e3e05500e3ffb3f97e"
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
    "url": "assets/css/0.styles.de14a5db.css",
    "revision": "178a198f92a805098b9ef2821730e2e0"
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
    "url": "assets/js/1.fc9961d4.js",
    "revision": "b1e70b3cb335f1ba35a230fff6ee3287"
  },
  {
    "url": "assets/js/10.97453906.js",
    "revision": "13894357c9180e25ba7e638b6d979afd"
  },
  {
    "url": "assets/js/11.8ee6a6b3.js",
    "revision": "b23da0146e0f42c29688e56da70736cd"
  },
  {
    "url": "assets/js/12.b07ef0f9.js",
    "revision": "6c4cc9e02fdaffff5a090663800625f0"
  },
  {
    "url": "assets/js/13.c0472979.js",
    "revision": "24f173e34b8d0edfa712ddc95124bf76"
  },
  {
    "url": "assets/js/14.eb2f1504.js",
    "revision": "a8f75354d983ef228c21b36fed3b991d"
  },
  {
    "url": "assets/js/15.38c8fb4f.js",
    "revision": "7d7ef0464132e81da91f87da24b40b3d"
  },
  {
    "url": "assets/js/16.c7afd00a.js",
    "revision": "8a4946290b9207d575d44880a9bd554a"
  },
  {
    "url": "assets/js/17.9363d625.js",
    "revision": "4655e1d524e7cf8ffbbabf994cd42bab"
  },
  {
    "url": "assets/js/18.f79207b4.js",
    "revision": "e924f4d0e880d8ba90e6cec712b61070"
  },
  {
    "url": "assets/js/19.d8c12d22.js",
    "revision": "e79335dca93e869d9cad0544246fd49e"
  },
  {
    "url": "assets/js/2.5709d973.js",
    "revision": "28f68f1037e98ea95499ebb9f468c237"
  },
  {
    "url": "assets/js/20.3b5b0586.js",
    "revision": "324cecddc79ae78c2d965e3601a6e326"
  },
  {
    "url": "assets/js/21.3eb0a0f0.js",
    "revision": "bb9ef739c88af5163162ff7f805f4a4d"
  },
  {
    "url": "assets/js/22.5df3e8b1.js",
    "revision": "9cac683cbbfd522c86a82764afa8fb1b"
  },
  {
    "url": "assets/js/23.97cec405.js",
    "revision": "984d4d0558c0c99b07330276f03616a5"
  },
  {
    "url": "assets/js/24.18e619f2.js",
    "revision": "af2aabc891cdc254833249ed9be4f43b"
  },
  {
    "url": "assets/js/25.acf1d67b.js",
    "revision": "dfeb90ea5102e165ab14b4a76c28d4aa"
  },
  {
    "url": "assets/js/26.8ae5c57a.js",
    "revision": "cd348532a7b1db78e189c9d9221b29b5"
  },
  {
    "url": "assets/js/27.0c41a2dd.js",
    "revision": "47d5f5e0e58f6d300f6a8cb30412b6b9"
  },
  {
    "url": "assets/js/28.792210cf.js",
    "revision": "9414626565f84dc156eea864c43bae1a"
  },
  {
    "url": "assets/js/29.f1b2b6c0.js",
    "revision": "0edd5b5224fe21bae025a7cb94e026aa"
  },
  {
    "url": "assets/js/3.1c07a6d0.js",
    "revision": "e46e5a45ed4e92d6673c718da1b7a109"
  },
  {
    "url": "assets/js/30.7819e281.js",
    "revision": "bf12e100c3893433d529563ad700d760"
  },
  {
    "url": "assets/js/31.c3686e03.js",
    "revision": "3625c8a0b95ef479cd25dd87183c433b"
  },
  {
    "url": "assets/js/32.2a5260f1.js",
    "revision": "0c1ef14261dfaa07df90ecc4a8c886c8"
  },
  {
    "url": "assets/js/33.066e1956.js",
    "revision": "11b08ff7fd178f2840ea264bcc995939"
  },
  {
    "url": "assets/js/34.3127f023.js",
    "revision": "2d52219eaaf9a7aae99cd3c86b594ea6"
  },
  {
    "url": "assets/js/35.e5a1bf8e.js",
    "revision": "4c9f14445799597c6098426fe420b2c4"
  },
  {
    "url": "assets/js/36.2071c1a4.js",
    "revision": "392695fc6e1da5b2b6748a24da5429f9"
  },
  {
    "url": "assets/js/37.0c105ce3.js",
    "revision": "d087bf334308846a43b7edf2acc92b0e"
  },
  {
    "url": "assets/js/38.aba91a72.js",
    "revision": "9c84a2dc3dc9ef3f07eedfa20a1c62da"
  },
  {
    "url": "assets/js/39.6d8faac9.js",
    "revision": "2380dc21df6b80239803b45db66cb4c9"
  },
  {
    "url": "assets/js/40.0c5e2877.js",
    "revision": "6e2d7354a93f6afe811dc50380fb8b54"
  },
  {
    "url": "assets/js/41.83c8b726.js",
    "revision": "aa59425c4e0a58aed8e3877239cd3993"
  },
  {
    "url": "assets/js/42.0775995a.js",
    "revision": "1b148bcb9740e66e751316ff71550f7b"
  },
  {
    "url": "assets/js/6.862c41e3.js",
    "revision": "88733e631b64f238b68da9f3f1c5cce8"
  },
  {
    "url": "assets/js/7.319ef728.js",
    "revision": "8dd934452da900fd91f76f2fe01e5c0c"
  },
  {
    "url": "assets/js/8.d693b2b7.js",
    "revision": "afc1eb8b8d0514dc53ae0c35a4b9c5ef"
  },
  {
    "url": "assets/js/9.676ac7ee.js",
    "revision": "bec36d752e7dcfb832e097d39197687b"
  },
  {
    "url": "assets/js/app.aaaddaa7.js",
    "revision": "622e786c9ea0979c4593a4e00c64a1f5"
  },
  {
    "url": "assets/js/vendors~docsearch.914dbb97.js",
    "revision": "edfff651b9aa836a40ae6a42229a2de8"
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
    "revision": "067554c4000f107083d6b7dc7f421160"
  },
  {
    "url": "extensions/index.html",
    "revision": "52ce4e062765533626b789321f541178"
  },
  {
    "url": "forks/index.html",
    "revision": "14b9d83c7b509567541a73983e1bb17d"
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
    "revision": "11ad3597bad9c57941643f3e64b6e748"
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
    "revision": "a007c365120a73342ba65a20ac929486"
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
    "revision": "718db3d5b54402dd6d10386778325265"
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
    "revision": "3c038175f8fe3bfac0101df613389f68"
  },
  {
    "url": "forks/TachiyomiSY/assets/banner.png",
    "revision": "507d5932b6464bfdde5e9525d9422eb3"
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
    "revision": "229d3d1af62b5dc3156ac2761464d7eb"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "cd5cd8e517ae8f662ce98a387b169fbf"
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
    "revision": "2218f9c961c056f40d2f06ae757ad2ac"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "404261f2b5292cf81ce5746a6ffcb8c9"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "a1ece800a75d4207d5c22d76b1208538"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "13da5849957cde95047030361b10f353"
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
    "revision": "c6843d216d2ab7f24cc0d6e52aee8c7f"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "113f9914512598aabfb23c20729cc645"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "f23a7fccb342492481643f30a417da93"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "abd7f6f63f7bc41116122a9f08f607c6"
  },
  {
    "url": "help/index.html",
    "revision": "ca49e983d8e547855f0af5d45ead9c81"
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
    "revision": "758acd2dbac06195ad1962be8e81b68a"
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
