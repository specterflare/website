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
    "revision": "ab3c46f0ee66a2bf94a8a2a315120765"
  },
  {
    "url": "assets/css/0.styles.5e8881a8.css",
    "revision": "8da96eee670988ed6b1607a801562ea2"
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
    "url": "assets/js/1.b9c2b460.js",
    "revision": "5eaf93464bbdd242bd21e95ce98f573b"
  },
  {
    "url": "assets/js/10.1103f0a9.js",
    "revision": "e70f88966b43f4fb0d8133a4b67287b0"
  },
  {
    "url": "assets/js/11.63dfef95.js",
    "revision": "cd0b1ca19f26e80210f58e261dffbea3"
  },
  {
    "url": "assets/js/12.ded82e36.js",
    "revision": "d2de0444f1d182b850cdbcfc3a6a05e8"
  },
  {
    "url": "assets/js/13.43a54e52.js",
    "revision": "0442b4e057553b65a3c654f7840e2d63"
  },
  {
    "url": "assets/js/14.53122900.js",
    "revision": "00964cc571fb7f4535bbb0367ead7328"
  },
  {
    "url": "assets/js/15.62a09e2c.js",
    "revision": "a903a3868ac9cc3bf51eef11b37cc0df"
  },
  {
    "url": "assets/js/16.35575307.js",
    "revision": "958bff0a6fa4a8b00164b47cb152b2f5"
  },
  {
    "url": "assets/js/17.5f09e415.js",
    "revision": "d3013327fb484d8dce3576c2640840b3"
  },
  {
    "url": "assets/js/18.0138afd3.js",
    "revision": "f392d2320a4fc898ea4dc5e2e8f32f95"
  },
  {
    "url": "assets/js/19.b342879d.js",
    "revision": "fe4c8a1e3f3a9f308ef3adf129b67e1b"
  },
  {
    "url": "assets/js/2.afb328fc.js",
    "revision": "9a16cf411388b182535bb11ad7b29918"
  },
  {
    "url": "assets/js/20.1ea14bbb.js",
    "revision": "408e39e0e1c4a450fd1effd5e3ca224b"
  },
  {
    "url": "assets/js/21.76b3baae.js",
    "revision": "8804597036bc837c2659de81c86178d9"
  },
  {
    "url": "assets/js/22.87235285.js",
    "revision": "180bb9e1e340ec594febc32bfe48568c"
  },
  {
    "url": "assets/js/23.89d88717.js",
    "revision": "67505cee6f9f2e91deed4724a9d32367"
  },
  {
    "url": "assets/js/24.1ae39b82.js",
    "revision": "6a39cce506b561e0a450e030bd62554b"
  },
  {
    "url": "assets/js/25.23939221.js",
    "revision": "bb872cd403895a58a3fbfbd2e737ee9b"
  },
  {
    "url": "assets/js/26.d4e11550.js",
    "revision": "79917c86b00b6ceb2499d51e76ebe85f"
  },
  {
    "url": "assets/js/27.9abcb242.js",
    "revision": "130cc3398e91656828201487bc4ff064"
  },
  {
    "url": "assets/js/28.bfba4623.js",
    "revision": "04c67c6760df46dc59b53ac6a4f50c14"
  },
  {
    "url": "assets/js/29.31192138.js",
    "revision": "01a91c2d514c51a331064ee31ae1650c"
  },
  {
    "url": "assets/js/3.8abd9d98.js",
    "revision": "56ba03d37180cc1a9cb5fd0665ec744a"
  },
  {
    "url": "assets/js/30.7ae21475.js",
    "revision": "12bca2cac84d05ad5da1303a83f7f97e"
  },
  {
    "url": "assets/js/31.39f12682.js",
    "revision": "f762e9555fa1962bb21551a825015235"
  },
  {
    "url": "assets/js/32.e7a51678.js",
    "revision": "e3532f721cc90c61f086d3ac984a71c9"
  },
  {
    "url": "assets/js/33.ed9e9de4.js",
    "revision": "f048a9dd58230ccad863017413163d23"
  },
  {
    "url": "assets/js/34.a4090428.js",
    "revision": "919fa647425890cc8098e5759525c2e1"
  },
  {
    "url": "assets/js/35.11162b6a.js",
    "revision": "dcaf2dee40e2d69e67b51131713cf19e"
  },
  {
    "url": "assets/js/36.eb098b6c.js",
    "revision": "87c2592bbe3244805386ed9167446854"
  },
  {
    "url": "assets/js/37.d4042836.js",
    "revision": "f310fc535a1de4f969caacfb332bb2bc"
  },
  {
    "url": "assets/js/38.6d1b04e0.js",
    "revision": "6901d0c480e475cdcb877e42f93d1c18"
  },
  {
    "url": "assets/js/39.0d852c4c.js",
    "revision": "adcb8380043d4810c3d378eefdffae6f"
  },
  {
    "url": "assets/js/40.6200d645.js",
    "revision": "a7de7271ab3134ab199ac29f1447c394"
  },
  {
    "url": "assets/js/41.81303394.js",
    "revision": "17160824db8a8b73a5bc36c19cf18ddc"
  },
  {
    "url": "assets/js/42.f096c586.js",
    "revision": "12610c1016daf618df630480b72f718c"
  },
  {
    "url": "assets/js/43.fadc887a.js",
    "revision": "105a50c964f7332db04c3671d087125c"
  },
  {
    "url": "assets/js/44.8957fe3c.js",
    "revision": "4df48dd9ff2dfacbc7ed40264bbdf5d8"
  },
  {
    "url": "assets/js/6.b05f6b2c.js",
    "revision": "1c10256124ff24a43f3acb5db72da635"
  },
  {
    "url": "assets/js/7.5c2d7caf.js",
    "revision": "8c99d5ef9d22a54917485901cb4a1afe"
  },
  {
    "url": "assets/js/8.40dacd50.js",
    "revision": "e25d6088775fe7a896e9808a1355ee8f"
  },
  {
    "url": "assets/js/9.48c64646.js",
    "revision": "0a32bea2c8739ed1887a324db967a801"
  },
  {
    "url": "assets/js/app.12ff504a.js",
    "revision": "5036f5830e3e59f0ff2b983666b9873b"
  },
  {
    "url": "assets/js/vendors~docsearch.f7b5bbc8.js",
    "revision": "94cd365d968458b020eb27bbbf140af1"
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
    "revision": "039b80ebd48541889cdf22a104fb9bd3"
  },
  {
    "url": "forks/index.html",
    "revision": "edbbe68880dff98a70bb2e5688660ad2"
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
    "revision": "a59f9d2c1ce5bea0a0543e3f03883390"
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
    "revision": "f101f11a4527784ebe309edc124b2475"
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
    "revision": "498d8400ac971252931879994dac4ab1"
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
    "revision": "032f39cd001ccf7a5c8ce003f78800b4"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "c297b3c65368ba9b5a060cc5ed6c4c1c"
  },
  {
    "url": "help/faq/index.html",
    "revision": "f5cdf5730878cebb49d1acefe94fc9cb"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "b275c68e51f997dd83f8fda048f1ae9c"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "ed7177707c201863694c6daf71176d36"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "3ebb0402dd5d6070ef441857562a9864"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "ca8055d6a386599ee947900fdbadf725"
  },
  {
    "url": "help/guides/settings/advanced/index.html",
    "revision": "e4af9ba5d14bf835006862dce6586c9f"
  },
  {
    "url": "help/guides/settings/backup/index.html",
    "revision": "69d1c0a6deff41c4b65a6e1ee66aed2a"
  },
  {
    "url": "help/guides/settings/downloads/index.html",
    "revision": "cab756f0b3f9a101f5c0b57b70d9a270"
  },
  {
    "url": "help/guides/settings/general/index.html",
    "revision": "039dd75f763d73ed9bfdcbc4189ea753"
  },
  {
    "url": "help/guides/settings/index.html",
    "revision": "26ce3574a78e595d71833f3913b3bacc"
  },
  {
    "url": "help/guides/settings/reader/index.html",
    "revision": "c298ca9ad697719c6df43603ae5f1e90"
  },
  {
    "url": "help/guides/settings/tracking/index.html",
    "revision": "717ded095571cdefe6bc84743c0538e6"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "f13b6e4078de2f49f40453a3e329e438"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "6c7327ae8656802ec3faa5405af61640"
  },
  {
    "url": "help/index.html",
    "revision": "1ace96031dbc6e890e604758ad9d8d60"
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
    "revision": "7577dfd066c1a0f4d1b4754545bf819e"
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
