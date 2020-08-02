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
    "revision": "ead101821a1ea67c4894359423c49940"
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
    "url": "assets/css/0.styles.e00071b7.css",
    "revision": "0cb0381a55fda116eeeb8540bc5dc77a"
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
    "url": "assets/js/1.c71ebadb.js",
    "revision": "16bf279aa2b0f593d0153818dc664376"
  },
  {
    "url": "assets/js/10.ef997eaa.js",
    "revision": "c0ac44016f771e16943d6c2f9c68100e"
  },
  {
    "url": "assets/js/11.cf9eee5d.js",
    "revision": "fcda29731cfc6be081db8cf4f05b7a5d"
  },
  {
    "url": "assets/js/12.b07ed9c5.js",
    "revision": "9265958b3cd14efc4a86761cb99fe001"
  },
  {
    "url": "assets/js/13.2d6f1c3d.js",
    "revision": "5c35c65a3da623cc502b80a9dd9155e0"
  },
  {
    "url": "assets/js/14.46d2f330.js",
    "revision": "9ad2ca1a24d2655c9ec7171abaeb806c"
  },
  {
    "url": "assets/js/15.1c32f0ae.js",
    "revision": "04d8db1c36f00db7ad2f23614723953a"
  },
  {
    "url": "assets/js/16.5a6624de.js",
    "revision": "3404932fbb136ba753abe57db1eae194"
  },
  {
    "url": "assets/js/17.d9f633c9.js",
    "revision": "e415e9b842833525e84a4c17f8dee99c"
  },
  {
    "url": "assets/js/18.2b590d5a.js",
    "revision": "ddc1204e9d5dea64f428413f829cfec2"
  },
  {
    "url": "assets/js/19.54f51c60.js",
    "revision": "6c730dc9a5c34405359417a42e6f2e65"
  },
  {
    "url": "assets/js/2.bf40ab86.js",
    "revision": "50bb3691f0296736002e09182db58f07"
  },
  {
    "url": "assets/js/20.619aeb15.js",
    "revision": "8d5300953b9a794b9f769cf944e15035"
  },
  {
    "url": "assets/js/21.264e2db5.js",
    "revision": "1f25bb9dadd8089b03f7e3bcdda5a9bb"
  },
  {
    "url": "assets/js/22.15b7bfb2.js",
    "revision": "eafd1b68ccae290db5a9088f1270e84c"
  },
  {
    "url": "assets/js/23.fdde1685.js",
    "revision": "d3d2a1349ccc9bc2ffa91483def503b6"
  },
  {
    "url": "assets/js/24.fc7d31af.js",
    "revision": "7c3c3cbc70cef80365ebb339ea51d2c7"
  },
  {
    "url": "assets/js/25.7ec78ff7.js",
    "revision": "2acf3c5b38cbbb22378127b7ce12fb25"
  },
  {
    "url": "assets/js/26.848164d8.js",
    "revision": "5477e4296113557b343fb758c684515a"
  },
  {
    "url": "assets/js/27.a9adbfa2.js",
    "revision": "7ec4eee0bcc0b3363374f161b2e30967"
  },
  {
    "url": "assets/js/28.7ec8a73b.js",
    "revision": "abd284a994941a8590b767f8c991b8bb"
  },
  {
    "url": "assets/js/29.2fa4080d.js",
    "revision": "c79a0060ed31cca73f2b709df30281d3"
  },
  {
    "url": "assets/js/3.66084c40.js",
    "revision": "e4fd4adb6f1cd4f51c5f964030db7bfa"
  },
  {
    "url": "assets/js/30.08899821.js",
    "revision": "d59492f7145d0758617c50d6a3314deb"
  },
  {
    "url": "assets/js/31.a9304c89.js",
    "revision": "d85d037209d9dee87be4794f5b44533e"
  },
  {
    "url": "assets/js/32.c7c3d6fa.js",
    "revision": "71313378bea7d34e1dd5786581b2b069"
  },
  {
    "url": "assets/js/33.866986eb.js",
    "revision": "9b67f218057b6dbea2a9502db1ced0fd"
  },
  {
    "url": "assets/js/34.f620bd87.js",
    "revision": "59b236d6876a538878a7240c2007de86"
  },
  {
    "url": "assets/js/35.6c045d0f.js",
    "revision": "7fd402f059fe80d615b9570953fcb47e"
  },
  {
    "url": "assets/js/36.3df6d826.js",
    "revision": "5050fbc108f9517f83f585ddc64f23a0"
  },
  {
    "url": "assets/js/37.fbb6cd62.js",
    "revision": "37d451011e38ff99a6503671baa412d7"
  },
  {
    "url": "assets/js/38.c745154e.js",
    "revision": "6d9833df521282d2beb0befa295c11b8"
  },
  {
    "url": "assets/js/39.a3dfc1fc.js",
    "revision": "33f5d78525fbe5481d9acf8153f0a4ef"
  },
  {
    "url": "assets/js/40.02c942c1.js",
    "revision": "25eb1ec4fe950c8e4870cd20890ac022"
  },
  {
    "url": "assets/js/41.c3c39289.js",
    "revision": "5ff45ea194192131202e26b8c060a460"
  },
  {
    "url": "assets/js/42.27c8670b.js",
    "revision": "c9f30a65d484a7f07db40afcf3b8ffe2"
  },
  {
    "url": "assets/js/6.74c5e2cd.js",
    "revision": "53406de094e2904ffff683c78bb06fbd"
  },
  {
    "url": "assets/js/7.bb70d47c.js",
    "revision": "3086c7fcd46ec505f3c92b449476ec2a"
  },
  {
    "url": "assets/js/8.0d453526.js",
    "revision": "0f92be1ae2043193c47d88f30f8fe621"
  },
  {
    "url": "assets/js/9.45de3995.js",
    "revision": "96a64fb648163f728e87aa8c9b70836b"
  },
  {
    "url": "assets/js/app.e553e256.js",
    "revision": "9111dd5508c1d5ddbece2048ccbe0623"
  },
  {
    "url": "assets/js/vendors~docsearch.812ba90b.js",
    "revision": "b4a7e25fe325adbe3d2713c3d755b81d"
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
    "revision": "ab19e2dfa1e2b865636c8908d6c93d93"
  },
  {
    "url": "extensions/index.html",
    "revision": "f1b7d184577187e133caeddf33323ed1"
  },
  {
    "url": "forks/index.html",
    "revision": "eac312b10cdb5b254a7626c5e60418ee"
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
    "revision": "ea49e31466ae0b951492d2908879c64d"
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
    "revision": "ea9cdae1e4e30832403c6b92e8e7fbc8"
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
    "revision": "692535e7b0bd321343d208a159c18236"
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
    "revision": "4042cd57ac36980915d20a6fd528aad2"
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
    "revision": "ebb2911cf5cd06ac78ad1030b371d79a"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "dee80f3ee6f8372dcf0b0fafe1525d25"
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
    "revision": "b831b365b7ffb6c1bffa35a2089a96a5"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "9efc55c4529291d92c0870f04b2b6add"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "5d2c5831b694c6510624ac02f76bdf34"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "2382b924d492fe1112c01e493df1635f"
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
    "revision": "5c8600da6e54a38a886f87d3e9609e26"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "512e40ec4ef3c1ee2b11e1a27b2a1772"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "2bd44ef0a06e5dca4e49daa5303ff66d"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "de6ccfd029fc509e7515b78988a6e6a9"
  },
  {
    "url": "help/index.html",
    "revision": "b12286d13ab2ae92aaff72ad0caae19f"
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
    "revision": "c533019015c780e58a73b2d8551bee81"
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
