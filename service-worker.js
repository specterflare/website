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
    "revision": "1c5737aa8092782b66aab2dc7845102f"
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
    "url": "assets/css/0.styles.e7a6394b.css",
    "revision": "2cda0d3d7661d4482dae3cc67c97fe43"
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
    "url": "assets/js/1.e8d9ef39.js",
    "revision": "86f3641bc3d1521447b899939912e4da"
  },
  {
    "url": "assets/js/10.d4bca19f.js",
    "revision": "c3e5d2a6263f19aac3c7d6d4bee5ff37"
  },
  {
    "url": "assets/js/11.28427bd4.js",
    "revision": "bdd66c7aa7a22b4eb381f9a2c8eea656"
  },
  {
    "url": "assets/js/12.a230a3f8.js",
    "revision": "c49a7bc011390df68dc736c5e53553d1"
  },
  {
    "url": "assets/js/13.9d1237ab.js",
    "revision": "292afb8e62bd78e12d774de69f6661dd"
  },
  {
    "url": "assets/js/14.01aa904e.js",
    "revision": "40dd96fa31ddc2924372f980375433be"
  },
  {
    "url": "assets/js/15.a14dbf94.js",
    "revision": "da511e1df33f5c3e0e6a2ccdd4329a7e"
  },
  {
    "url": "assets/js/16.15e98086.js",
    "revision": "dd3aaad29ef3812b919a1e888dc65d64"
  },
  {
    "url": "assets/js/17.531a5006.js",
    "revision": "05beb6891575370cc7a72a64872a4a88"
  },
  {
    "url": "assets/js/18.5e822421.js",
    "revision": "bc4886ea91b82de07752cccd9f2203e5"
  },
  {
    "url": "assets/js/19.613aabe5.js",
    "revision": "1f7fe321f259d4d8db526362533b2d70"
  },
  {
    "url": "assets/js/2.f81599b9.js",
    "revision": "f015185417ccd6ac0ea4fe1bffa27f09"
  },
  {
    "url": "assets/js/20.db4d238e.js",
    "revision": "0b4ae3ecb80e19e96a21ffdf3047596f"
  },
  {
    "url": "assets/js/21.883a4ec4.js",
    "revision": "0f1dc8479ec32597f4117edd6ea95981"
  },
  {
    "url": "assets/js/22.2c0bfdef.js",
    "revision": "a2e574875d3a5429ba1f121e58ca5130"
  },
  {
    "url": "assets/js/23.df5ae0b3.js",
    "revision": "7e6d2fbab675fcd121340b351fa767cc"
  },
  {
    "url": "assets/js/24.758e1100.js",
    "revision": "b88f12f79d9f0fa8ad927c8af51af599"
  },
  {
    "url": "assets/js/25.d9413f15.js",
    "revision": "c233c90db9d66fcec5082d7f5f8a42a0"
  },
  {
    "url": "assets/js/26.b6273577.js",
    "revision": "f3471eee6088287488ed0fe7375decb0"
  },
  {
    "url": "assets/js/27.33149d4f.js",
    "revision": "af463318cff418788dadaf92adb44c8f"
  },
  {
    "url": "assets/js/28.89618d21.js",
    "revision": "395049df9b74b9fe020448e191bf470b"
  },
  {
    "url": "assets/js/29.ff64ba1a.js",
    "revision": "589144887c5fc0020c848a0b34ce098c"
  },
  {
    "url": "assets/js/3.f6df2e9a.js",
    "revision": "4886c55bfd8ddfa826f84f37aac5676f"
  },
  {
    "url": "assets/js/30.5e9af42f.js",
    "revision": "90cb1466369736272c512c7e32f79cab"
  },
  {
    "url": "assets/js/31.6e975d17.js",
    "revision": "7dc4866ac82f836cb1a43c69625beb1b"
  },
  {
    "url": "assets/js/32.7b4fed8c.js",
    "revision": "15cbd8f056b17fbba155425313fb7aca"
  },
  {
    "url": "assets/js/33.5b8b8424.js",
    "revision": "a024c29ee0c407e2d43b58fcd1fc640b"
  },
  {
    "url": "assets/js/34.501d19fd.js",
    "revision": "8fc34b29fc2cee9d664a159d8e8819bd"
  },
  {
    "url": "assets/js/35.2b95632c.js",
    "revision": "090b7f302c1073268bccd3909608f1b2"
  },
  {
    "url": "assets/js/36.5d8090f5.js",
    "revision": "4aaa8bdc3212b04700067f1d38a8580a"
  },
  {
    "url": "assets/js/37.71d11a1a.js",
    "revision": "57aa97308a2ffca8f828b7a63ea3d871"
  },
  {
    "url": "assets/js/38.87ddb079.js",
    "revision": "02a85084704a1b3d99680dd1087ebcbd"
  },
  {
    "url": "assets/js/39.2523484d.js",
    "revision": "e37c550b789536c6328624ff861a7fcf"
  },
  {
    "url": "assets/js/40.66799851.js",
    "revision": "e43245cff1e33c5493d6786cd262feb4"
  },
  {
    "url": "assets/js/41.61887120.js",
    "revision": "ddc8cb2a427dc435b503a813951b5364"
  },
  {
    "url": "assets/js/42.cc5f907d.js",
    "revision": "ef68abaca4ec79917d182fba1f8e51f6"
  },
  {
    "url": "assets/js/43.2eec81cb.js",
    "revision": "34bcc908a52303ebc65944be06925a4b"
  },
  {
    "url": "assets/js/44.36c91fe4.js",
    "revision": "59f8822adc1c350d5256d85a1840fed3"
  },
  {
    "url": "assets/js/6.ce047e44.js",
    "revision": "9164e770f42283e5f7c9abd15706d5f6"
  },
  {
    "url": "assets/js/7.b0bc47c4.js",
    "revision": "a7fbe55d173b2f18166862289d5bad19"
  },
  {
    "url": "assets/js/8.18cd507f.js",
    "revision": "47a33aac0cec957c392118fa467c70a6"
  },
  {
    "url": "assets/js/9.19069e81.js",
    "revision": "03a2407d02a7c4b092a3c09b6f0b252d"
  },
  {
    "url": "assets/js/app.a7cba139.js",
    "revision": "2f581f90b2002952d713fdd8e1611e48"
  },
  {
    "url": "assets/js/vendors~docsearch.2c0050e7.js",
    "revision": "c9fc6878010f0147f3a1baaca07a5b04"
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
    "url": "assets/media/amoled-theme.png",
    "revision": "30ba3c49ced5ecb20b456396bd8ecbca"
  },
  {
    "url": "assets/media/backgroundcolorblack.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/backgroundcolorwhite.png",
    "revision": "4b425030809b32c951b8045746454d0b"
  },
  {
    "url": "assets/media/browse.png",
    "revision": "44cbfa49d9e001c3da50f808e02e4fa0"
  },
  {
    "url": "assets/media/dark-blue.png",
    "revision": "0ea4bf6d4325cb8379b272e5d0a9509e"
  },
  {
    "url": "assets/media/dark-theme.png",
    "revision": "7f791df794a6f4e0f5f7e3d1d87eab68"
  },
  {
    "url": "assets/media/fitheight.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "assets/media/fitscreen.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/fitwidth.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/installprompt.png",
    "revision": "bfdadee9baf2fb675d5bfdc957a1d6d1"
  },
  {
    "url": "assets/media/logo.svg",
    "revision": "a2dae57c67a9bbb51367c1dbb4b4d1c2"
  },
  {
    "url": "assets/media/main-theme.png",
    "revision": "4b07a2eae22080b43694a6c277fd7e36"
  },
  {
    "url": "assets/media/manga.png",
    "revision": "c58cabeea0a6c069a3e967682e8cc56c"
  },
  {
    "url": "assets/media/my-library.png",
    "revision": "7c45ee4c38e9848be71908787866a130"
  },
  {
    "url": "assets/media/openinwebview.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "assets/media/originalsize.png",
    "revision": "fcbada5ec4c2bed02a66adda4c262257"
  },
  {
    "url": "assets/media/screens.png",
    "revision": "f2bf5afde6b5e0b4892e08702c226c95"
  },
  {
    "url": "assets/media/smartfit.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/stretch.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "assets/media/tachiyomi.png",
    "revision": "d3b1c6ef8010d4233a683398f1d8f688"
  },
  {
    "url": "assets/media/video-guide-backup-create.png",
    "revision": "e261b9f0b36b540d2e9292d8372c2f74"
  },
  {
    "url": "assets/media/video-guide-backup-restore.png",
    "revision": "6aa61033c54c017194aebef7986223ae"
  },
  {
    "url": "assets/media/video-guide-category-add-to.png",
    "revision": "ffba1a489f161e60d59c83d9b1ccda69"
  },
  {
    "url": "assets/media/video-guide-category-create.png",
    "revision": "e793139d4f53e417afed2dd0dabfae9a"
  },
  {
    "url": "assets/media/video-guide-category-delete.png",
    "revision": "c96dacc5b76b83d3bf6c14bc691ad626"
  },
  {
    "url": "assets/media/video-guide-category-edit.png",
    "revision": "826feca07bc18e89642c1f4e119a7bdb"
  },
  {
    "url": "assets/media/video-guide-category-remove-from.png",
    "revision": "385fff55b7b1b5390c7426cc82b0a30d"
  },
  {
    "url": "assets/media/video-guide-category-reorder.png",
    "revision": "fc0f9acba1da0039c072214933d3750e"
  },
  {
    "url": "assets/media/video-guide-extension-install.png",
    "revision": "ccb88b522e405e5868ba7d5941f3c407"
  },
  {
    "url": "assets/media/video-guide-library-add-to.png",
    "revision": "77ed753f8524f1066797065137fa3492"
  },
  {
    "url": "assets/media/video-guide-mangadex-no-results.png",
    "revision": "50d19b61bf2a1169dfaf00f68eb1f763"
  },
  {
    "url": "assets/media/video-guide-unknownsources-android10.png",
    "revision": "99799a8759fbd492d3c582ea0f5fff97"
  },
  {
    "url": "assets/media/video-guide-unknownsources-android711.png",
    "revision": "0fe1c5865a9d5e10b1b7ab0c04d98aa2"
  },
  {
    "url": "assets/media/withcropborder.png",
    "revision": "ce67a23f3fe437057ffff724ec2b329c"
  },
  {
    "url": "assets/media/withoutcropborder.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/zoomstartpositioncenter.png",
    "revision": "bd94e1eb71e220f49c79ed6c9c02f87e"
  },
  {
    "url": "assets/media/zoomstartpositionleft.png",
    "revision": "dec5ff9cf376aeca7af59606b5e78f4a"
  },
  {
    "url": "assets/media/zoomstartpositionright.png",
    "revision": "b59c83acde28d8a3903b09cbacf9dfe4"
  },
  {
    "url": "extensions/index.html",
    "revision": "9be88db8940b64df28c2b12546d0277d"
  },
  {
    "url": "forks/index.html",
    "revision": "0ee564f88107da6ede911e971456790c"
  },
  {
    "url": "forks/Neko/img/banner.png",
    "revision": "31fc0fefde4a8cfe84adf24c2b5212ff"
  },
  {
    "url": "forks/Neko/img/logo.png",
    "revision": "9e82e2bb234b4f3e22e0afc7266bf521"
  },
  {
    "url": "forks/Neko/index.html",
    "revision": "1a4f9d55645167a89d5ad9b61f0a71df"
  },
  {
    "url": "forks/TachiyomiAZ/img/gunz.png",
    "revision": "7ba4f33a10b643f437c3fd8dadda110a"
  },
  {
    "url": "forks/TachiyomiAZ/img/logo.png",
    "revision": "8c091950f3de1d0e81e69728db382d0d"
  },
  {
    "url": "forks/TachiyomiAZ/index.html",
    "revision": "88a69408f67e4c679f73946beb3569b8"
  },
  {
    "url": "forks/TachiyomiEH/img/banner.png",
    "revision": "a2852ea02d260d0395d565b133a9de3c"
  },
  {
    "url": "forks/TachiyomiEH/img/logo.png",
    "revision": "2d9809f2099cbed6378ad71b26258aff"
  },
  {
    "url": "forks/TachiyomiEH/index.html",
    "revision": "32f22bccc6145d5d57298fcff5ff808d"
  },
  {
    "url": "forks/TachiyomiJ2K/img/banner.png",
    "revision": "df716f69ba60004b7cc03cf8d317a95d"
  },
  {
    "url": "forks/TachiyomiJ2K/img/logo.png",
    "revision": "c758f9e913e15e23c7a5109784c4f280"
  },
  {
    "url": "forks/TachiyomiJ2K/index.html",
    "revision": "ed753d886dfeae04bae49069dc28e99f"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "660d83006146e0b8c0daa9155373987f"
  },
  {
    "url": "help/faq/index.html",
    "revision": "2862ed203107997fb16c9ff621fa9aa9"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "be80c849dba2ab5e68ab5934423836d3"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "04dc30e2921f4bb6077041b34201af53"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "c79db0aa1024eace675c4695c0603542"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "507b56ab95ace3eab42368247d94113f"
  },
  {
    "url": "help/guides/settings/advanced/index.html",
    "revision": "f301fe3c0b7f81c488dae6f333bf32e9"
  },
  {
    "url": "help/guides/settings/backup/index.html",
    "revision": "ccff53172376f060b9c3690e1859bd22"
  },
  {
    "url": "help/guides/settings/downloads/index.html",
    "revision": "9769836d0f8b69ca022345c6308624a3"
  },
  {
    "url": "help/guides/settings/general/index.html",
    "revision": "d37873d4a5f3018fb0fc3843287d5022"
  },
  {
    "url": "help/guides/settings/index.html",
    "revision": "d2771e4d679d59dd377d16e8e7b45d28"
  },
  {
    "url": "help/guides/settings/reader/index.html",
    "revision": "5aae18aa5e0d989f0c46879e04f1fcf0"
  },
  {
    "url": "help/guides/settings/tracking/index.html",
    "revision": "5bd1bfff8de9725222a52cea42c915c8"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "0c32ded963f836bd5bdd30cb064acb7e"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "2ae7ad1ba3c925e615091ceec219a67d"
  },
  {
    "url": "help/index.html",
    "revision": "eee526cb73093b40020bf10c0f858a61"
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
    "url": "icons/apple-touch-icon.png",
    "revision": "8f9a714cf6b2e3cac0e1f7e3ca55d994"
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
    "url": "icons/mstile-144x144.png",
    "revision": "ee47ab65d26fa83805df182739a4643d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "e0e665fe4583ca6ac69407dc43ece19c"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "e43e9a7c2fed38e9f6c21ef02ce7d348"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "89ab29f5ac6993e4adce1e2e951bcb0e"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "56cde027ca042089023d7b5f197c530f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "bb10e5b732c607440ec1319a1fe6c65d"
  },
  {
    "url": "index.html",
    "revision": "4b1c76dca20dfda17719cf4c8cea48a2"
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
