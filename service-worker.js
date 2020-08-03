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
    "revision": "eb59cde17c0e10047d873cb7481aa843"
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
    "url": "assets/css/0.styles.54872043.css",
    "revision": "5485657859166487b6e72fda7bf7c514"
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
    "url": "assets/js/1.8a509a34.js",
    "revision": "07479fa5a5d991708cf74b92589c8fe9"
  },
  {
    "url": "assets/js/10.c8421e78.js",
    "revision": "f371044c214efff1e479d22d9b232a11"
  },
  {
    "url": "assets/js/11.318f23c7.js",
    "revision": "2a4171a2f4d67edbdb4bad2b6842c71d"
  },
  {
    "url": "assets/js/12.189ee88b.js",
    "revision": "549eb86944170164b2d08407e2ce9dcc"
  },
  {
    "url": "assets/js/13.859c9d74.js",
    "revision": "b42980fd41a40ad3413e3b6e5cfab14b"
  },
  {
    "url": "assets/js/14.7c2e2fec.js",
    "revision": "47939be93eee0bb18912b68de9e355aa"
  },
  {
    "url": "assets/js/15.8067ea32.js",
    "revision": "3861b4b29f9e3cb598b9113dccd40f16"
  },
  {
    "url": "assets/js/16.8b95eea6.js",
    "revision": "6231b662a078944dc6dd879b68c205b1"
  },
  {
    "url": "assets/js/17.0a179958.js",
    "revision": "60d9acd725cc97e22d35a68442d74365"
  },
  {
    "url": "assets/js/18.d77e3356.js",
    "revision": "2be95c82ae7da770c814d09d42674fd2"
  },
  {
    "url": "assets/js/19.560214a8.js",
    "revision": "e535dabfaded307dac55f24117f4c641"
  },
  {
    "url": "assets/js/2.4ccc11f8.js",
    "revision": "3f0db90b2977ebeceabec41f87d1d319"
  },
  {
    "url": "assets/js/20.53c82693.js",
    "revision": "17c9c53dc4ffcc41ace336594e032fdd"
  },
  {
    "url": "assets/js/21.13e70931.js",
    "revision": "03de53a596b1d834e8fcf41f657e4895"
  },
  {
    "url": "assets/js/22.5708f317.js",
    "revision": "382a4646de2f3cf51ca4a5a26606617e"
  },
  {
    "url": "assets/js/23.0064f140.js",
    "revision": "8edc3851fd207fda3dc027e03db51026"
  },
  {
    "url": "assets/js/24.72ac4659.js",
    "revision": "d5bd7effcda1cae21845807d86f18113"
  },
  {
    "url": "assets/js/25.a94a06c6.js",
    "revision": "c29ceeb93296f6e8f5e2dc9ff6f27601"
  },
  {
    "url": "assets/js/26.e6d455a1.js",
    "revision": "e1f3b73fc86f89e35924cc77df59e37e"
  },
  {
    "url": "assets/js/27.5b8b07f1.js",
    "revision": "2ac7c603f4520e956918a4a734065b67"
  },
  {
    "url": "assets/js/28.3fa40002.js",
    "revision": "0790200f389dd8d4f3b35e1b5fd1c0e5"
  },
  {
    "url": "assets/js/29.f0cf6083.js",
    "revision": "335879a27e03391d11d2adbc12e1343d"
  },
  {
    "url": "assets/js/3.a52d262e.js",
    "revision": "de8add8fdf6cf65113b23ecdc52c32df"
  },
  {
    "url": "assets/js/30.f171f8ac.js",
    "revision": "d7e5ee5c8516b425577029ca4e58de16"
  },
  {
    "url": "assets/js/31.5365fd64.js",
    "revision": "230f26c660fafd6ac0f1cfb5c6196a0b"
  },
  {
    "url": "assets/js/32.4fb67e7f.js",
    "revision": "fed0601e08ec81a27c4cd97b250377bb"
  },
  {
    "url": "assets/js/33.ab445b0b.js",
    "revision": "98751e303ed02fc1bb5919e5c5c6c2e8"
  },
  {
    "url": "assets/js/34.8b233172.js",
    "revision": "1c1928171b370babeecbe27e6041f527"
  },
  {
    "url": "assets/js/35.34c1ab33.js",
    "revision": "df7aac15f17c80cf7a76a4fe41c5cb58"
  },
  {
    "url": "assets/js/36.9ddd921b.js",
    "revision": "6c5b89a23335c2c7c451c6b5d55cd0eb"
  },
  {
    "url": "assets/js/37.b051a945.js",
    "revision": "9dbce4e0f7c53d52e5224cf17bac4917"
  },
  {
    "url": "assets/js/38.b715f1d4.js",
    "revision": "eb7f1e767e6a2e0d0d9748e677dfd480"
  },
  {
    "url": "assets/js/39.a5e74520.js",
    "revision": "a5bd9e267b804fa7190916e793a3ae27"
  },
  {
    "url": "assets/js/40.ddfd236d.js",
    "revision": "723b549377a0ee7ae9dd0eda6c791504"
  },
  {
    "url": "assets/js/41.b7720351.js",
    "revision": "71f3199d58464233044a31b70181b02c"
  },
  {
    "url": "assets/js/42.ff315ed1.js",
    "revision": "f1d77d30c2420cc84d033c8641fcedbf"
  },
  {
    "url": "assets/js/43.723c5797.js",
    "revision": "798849e4703c2e7464b61dfb3a6a7e2d"
  },
  {
    "url": "assets/js/6.05558350.js",
    "revision": "41ff7476dfe285431d38ee3dca20f242"
  },
  {
    "url": "assets/js/7.1eaf0eb6.js",
    "revision": "65923a3898f0bb233894cebbedb19439"
  },
  {
    "url": "assets/js/8.285b741b.js",
    "revision": "fc75d740420bff3594a949014e62e3fe"
  },
  {
    "url": "assets/js/9.88b1b659.js",
    "revision": "6ac65d2391432f0cd49d3ea1116487b6"
  },
  {
    "url": "assets/js/app.3da7b55b.js",
    "revision": "e8e66a1514af163eb849d1172b6c5e90"
  },
  {
    "url": "assets/js/vendors~docsearch.acd69e73.js",
    "revision": "19424feb3de62ba75013041f912729af"
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
    "revision": "2b30ca8aa4eae3a8df7c678528a9c560"
  },
  {
    "url": "extensions/index.html",
    "revision": "0fc6706bf51b9a1feede580292665e86"
  },
  {
    "url": "forks/index.html",
    "revision": "99ef003ebdf96a53bef5ac2e52fd2d97"
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
    "revision": "9c3cd98c5f2f02282e59462d5b121499"
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
    "revision": "2af5c3a59e6535a563c48317df273f43"
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
    "revision": "9bcebf4742790f59b160635d51f5bbb2"
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
    "revision": "a0c49f4e762e861f52cd8becc83597d8"
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
    "revision": "4c3ed3ca8d775afeffb50a12fb263592"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "847e19c71f299782d562492b10e73ce5"
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
    "revision": "4d4051679eb7c3e35363056fc0a41f19"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "4b9166b33b719620a3a25a1ca08273f5"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "84cee14f867d19207c122d8f9e2f675c"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "37300de0eb04c51a749ae09b07cf82d8"
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
    "revision": "945194dfd3ece91d2bafbffd2844134e"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "69bfdf2f92b829382152786b9de5884b"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "21509a1ae8615eb94529ea8ef901d3d5"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "c8f3d0f794b79dbc3a33f290339b6ece"
  },
  {
    "url": "help/index.html",
    "revision": "a26e42c80c0a65e045f1f018d11ef31e"
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
    "revision": "1e4f22eccacf9896e34a7964bb60c9c1"
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
