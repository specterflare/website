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
    "revision": "a67616512d0cbbe06fecf1f8cbbc1738"
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
    "url": "assets/css/0.styles.2f669fac.css",
    "revision": "50ea22d978ce61f88dfadd75d3a7a5c6"
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
    "url": "assets/js/1.15a70344.js",
    "revision": "82df91b576cef5f0de7dcb5a9e572052"
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
    "url": "assets/js/14.d7ecd370.js",
    "revision": "0fb3aa5bc9852b79614541a40ff7c87c"
  },
  {
    "url": "assets/js/15.3330e73b.js",
    "revision": "011403324d615686b757bc5761aec6f9"
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
    "url": "assets/js/18.d0c1b09b.js",
    "revision": "c8375691a56b29b41087704fd419adfb"
  },
  {
    "url": "assets/js/19.df2912d0.js",
    "revision": "6139153ea6212391841fefac7734b135"
  },
  {
    "url": "assets/js/2.a7db4595.js",
    "revision": "9d4f56c31236be3d8126a614f14d7283"
  },
  {
    "url": "assets/js/20.d5d0be15.js",
    "revision": "de03c5cc74b083026594ee48e70ab65d"
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
    "url": "assets/js/27.84a491fb.js",
    "revision": "20da126f6be1eef55ee54b80ecb5bd25"
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
    "url": "assets/js/40.cc450118.js",
    "revision": "51bf4bce1dbc3fee617bf6bd3a318db0"
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
    "url": "assets/js/5.47f033a0.js",
    "revision": "ee032554bef099e98ae9dd282e95ed4a"
  },
  {
    "url": "assets/js/6.7fe90e25.js",
    "revision": "845cf170acc825c2c893df6adb1e816c"
  },
  {
    "url": "assets/js/7.8632f070.js",
    "revision": "2f69f7089fccef3ef848ab4ae09dd02e"
  },
  {
    "url": "assets/js/8.8ab881a0.js",
    "revision": "73779ec4cde14f74c86055f459908b20"
  },
  {
    "url": "assets/js/9.0e7586f7.js",
    "revision": "ddf425122f06a374600c7f1edd86f9ac"
  },
  {
    "url": "assets/js/app.90e37b22.js",
    "revision": "24c6df83e39beccaf611b68ab85533f0"
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
    "revision": "d2b6564841c1ab0c8940c55757d9d883"
  },
  {
    "url": "extensions/index.html",
    "revision": "d1848ccee0517c4a02b6a3505ea42405"
  },
  {
    "url": "forks/index.html",
    "revision": "c8f34c2738ad1fb647b0bbeacb625264"
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
    "revision": "5ebd236922b5c890ea1ce0d214e5a39c"
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
    "revision": "8d16b0112151c100853d8807f7ffef18"
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
    "revision": "6d532e544c36debff4063c9638f77ba8"
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
    "revision": "80d7a82919eb69a5969bc91742037a5b"
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
    "revision": "7b082ed2fe6ebb999da83f498d5ddb90"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "e88647cc6213e23554335bcc34aa574f"
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
    "revision": "e08dd3e692785305864bbbe5b54ec0ac"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "de766321857619ea81c07a4bd9a1113f"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "01c97c3d247ee65cf18a4c2bcf0db8b7"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "1e4cdf4ba050f67d907ccf7f8602b8b0"
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
    "revision": "165afce8649aaae5022087aa70f522b7"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "7629918b886b516df914b554f1690962"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "b529bb79407d4a5fb28d3e5fe69b49b8"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "c7a3f95be7d28c7d5237f9d62bd92452"
  },
  {
    "url": "help/index.html",
    "revision": "f2e372c7c2d8ea1da1f7100aa5ea7bab"
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
    "revision": "9f3ed97e07f1f250eb3d6fd0883cb5c7"
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
