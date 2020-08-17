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
    "revision": "f244852107fc262e62890a118d15637d"
  },
  {
    "url": "assets/Browse-Dark.png",
    "revision": "3d9b51200445046ac827ef717109a3ae"
  },
  {
    "url": "assets/Browse-Light.png",
    "revision": "3dd50cc9b3e6fb0e4aaed0eda161aace"
  },
  {
    "url": "assets/css/0.styles.d0298678.css",
    "revision": "24dfc42993948df0a4fea8c98f997694"
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
    "url": "assets/js/1.0226175d.js",
    "revision": "a63e36a58751d7c6fc4d53f2f31546ca"
  },
  {
    "url": "assets/js/10.e8145ead.js",
    "revision": "1bec4be31a43b4fe839edc4ae17db372"
  },
  {
    "url": "assets/js/11.d0dfb58c.js",
    "revision": "965b503fde1c2bac3f3a56bf769effb2"
  },
  {
    "url": "assets/js/12.c091d426.js",
    "revision": "1a34fe335e30b427186cacf361d47075"
  },
  {
    "url": "assets/js/13.43d49052.js",
    "revision": "a6b2bdc890017c80ab1da0d4f256d8fb"
  },
  {
    "url": "assets/js/14.6985f15a.js",
    "revision": "3414ee59568ef7a8a7b2ff86325f212f"
  },
  {
    "url": "assets/js/15.64aa26d9.js",
    "revision": "cc8beb5dd52d78aa3e27a16306e10d6a"
  },
  {
    "url": "assets/js/16.f60baa55.js",
    "revision": "a755d821b81a183098d06d2029fc6ece"
  },
  {
    "url": "assets/js/17.0acf3aac.js",
    "revision": "e4b2df60d79bcbda65a991ab5f60261a"
  },
  {
    "url": "assets/js/18.675e6913.js",
    "revision": "93d618e99e32c8cfa0392e605f90241a"
  },
  {
    "url": "assets/js/19.0c17f051.js",
    "revision": "082c6c83d83888e9acaa0e4fc2e12c03"
  },
  {
    "url": "assets/js/2.0162d185.js",
    "revision": "41d4862c111ba87cfb0412536f2b00cc"
  },
  {
    "url": "assets/js/20.1e9a2826.js",
    "revision": "cc3c172122f6730454f78818c93e17b2"
  },
  {
    "url": "assets/js/21.9b05f8da.js",
    "revision": "bda6fc94c6e6123537e8fe07e14bec72"
  },
  {
    "url": "assets/js/22.819e5ae6.js",
    "revision": "5c571c687b375860032998e2d3cbd31b"
  },
  {
    "url": "assets/js/23.9bbe0384.js",
    "revision": "80b10274ef03186599283417c5d6868b"
  },
  {
    "url": "assets/js/24.af376ac4.js",
    "revision": "b08707838bfde7aa25770633b7f4b5e6"
  },
  {
    "url": "assets/js/25.677acf14.js",
    "revision": "6c6a9f147bde62b1a788bd0ecabf21ea"
  },
  {
    "url": "assets/js/26.1d48d2d6.js",
    "revision": "0d96dfc8aec9e13530a9a6f9324d6472"
  },
  {
    "url": "assets/js/27.a090a9a2.js",
    "revision": "55b27de22bf9b249a45a94d0fcd682b6"
  },
  {
    "url": "assets/js/28.32341fa8.js",
    "revision": "d803553964e72215ddcafed50e665514"
  },
  {
    "url": "assets/js/29.77a325fc.js",
    "revision": "6691c013293e92e563686052795cc985"
  },
  {
    "url": "assets/js/30.f3b02660.js",
    "revision": "5fd7ec3378a620e344c08675154d3818"
  },
  {
    "url": "assets/js/31.c686a2af.js",
    "revision": "b07ed42f06736c94be86d5a9db17b2c3"
  },
  {
    "url": "assets/js/32.eefb905e.js",
    "revision": "c1bb291f894140d5cae47b9cc11f4729"
  },
  {
    "url": "assets/js/33.de100517.js",
    "revision": "42b2ded7aa077ea7aae19d7d9b1f245d"
  },
  {
    "url": "assets/js/34.ed09b841.js",
    "revision": "28e5e8c713ba869c1b64ffc994d9a51b"
  },
  {
    "url": "assets/js/35.0dfc6448.js",
    "revision": "5af52204df45be42a66386d14e75f347"
  },
  {
    "url": "assets/js/36.0cd373da.js",
    "revision": "b887df64067da42b1e95049211c8b0b7"
  },
  {
    "url": "assets/js/37.adc89349.js",
    "revision": "01343c3c17a23b1029966eca3773d1bd"
  },
  {
    "url": "assets/js/38.c57fc90e.js",
    "revision": "14bacf5d7cfdbeb4df686ba7a721e044"
  },
  {
    "url": "assets/js/39.cdc19ab3.js",
    "revision": "2fb03a5083fa23c1c20f918890ce24ba"
  },
  {
    "url": "assets/js/40.e513a609.js",
    "revision": "291e76180b60e9f32e08e40b3156bf92"
  },
  {
    "url": "assets/js/41.d1cfacb7.js",
    "revision": "d89e18990303a73c85f0b262276da692"
  },
  {
    "url": "assets/js/42.173e5859.js",
    "revision": "9164515cf481f7e0082d590a732fc308"
  },
  {
    "url": "assets/js/5.10f28023.js",
    "revision": "0bf9d123aae3547de1fb5eb093784174"
  },
  {
    "url": "assets/js/6.46133235.js",
    "revision": "213cab57d76f23d520383247d26c7446"
  },
  {
    "url": "assets/js/7.b5daea38.js",
    "revision": "a8022367bbdaf5fd96fb0fa11f179d22"
  },
  {
    "url": "assets/js/8.8d767a4e.js",
    "revision": "1555ece45667d28c59515ddc37489098"
  },
  {
    "url": "assets/js/9.a64958de.js",
    "revision": "917d8741b51516c27a3eb41f6468b622"
  },
  {
    "url": "assets/js/app.8e7d0545.js",
    "revision": "897a7ff270ce4e1eb3fbcc308a2e9816"
  },
  {
    "url": "assets/js/vendors~docsearch.50641cfa.js",
    "revision": "084b0c5f47b36ca69e6bb025388de143"
  },
  {
    "url": "assets/Library-Dark.png",
    "revision": "d165cf6c38c4c9a13116ec59150a5ad4"
  },
  {
    "url": "assets/Library-Light.png",
    "revision": "d5baa97be7bfe807ac732dc8b315d3aa"
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
    "revision": "013c56be690c34e552248a1679e42664"
  },
  {
    "url": "extensions/index.html",
    "revision": "dc282eb299a455cb31dd9b1c9a4edf08"
  },
  {
    "url": "forks/index.html",
    "revision": "ece99864753a91263c31b6e70acdbc55"
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
    "revision": "2f986fd5c5c6818f928389192adadaa2"
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
    "revision": "10d4ba38b2d11dc723cf1cf571aa8b35"
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
    "revision": "e826a321d1ffd3ba5ebb034a95fabfb5"
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
    "revision": "383e12404ffae86718a9cc65e97c9854"
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
    "revision": "ee8440733a2c0ee333b49f3465ad18a4"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "0fd24bcf13f0ffc2f2cc5bf5d134ff81"
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
    "revision": "9ec69a6eea4bd4a2f739e85fb4f597e4"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "5bd0d6966fba6172344cd1338290401c"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "649880b7974c29163b532f3062c0008e"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "69f43de7df415475caf740f3515aba2c"
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
    "revision": "302f59d04821ffd2ce0c817a2060e5bc"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "5dbf5e984a0c97f90f4af48b0c55e827"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "b8cc035b5d36c70e0675c6f36066f2d0"
  },
  {
    "url": "help/guides/troubleshooting-problems/assets/WebView-Open.jpg",
    "revision": "e5e9789ed47676086f567aab10fd668d"
  },
  {
    "url": "help/guides/troubleshooting-problems/index.html",
    "revision": "fa300c7241c4bb10757605daf2fbc87c"
  },
  {
    "url": "help/index.html",
    "revision": "ffd61f3a21624b3473c850fffa20f59e"
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
    "revision": "ed09cc68a812ab26a80d9375dd11ec80"
  },
  {
    "url": "scripts/remove_service_worker.js",
    "revision": "38265f789ddae51230b20c429a0bd6ae"
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
