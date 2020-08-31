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
    "revision": "cdaf4737edfbdb254e1526229df01604"
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
    "url": "assets/css/0.styles.327427e6.css",
    "revision": "bd79e4e93fdb0064032cbe034f94676c"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
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
    "url": "assets/js/1.743aa313.js",
    "revision": "ce095e3a0632a3b72a07e47457a566cf"
  },
  {
    "url": "assets/js/10.c879d74a.js",
    "revision": "48946529eac314a3e29337c910971820"
  },
  {
    "url": "assets/js/11.99eae314.js",
    "revision": "085867396507ec2fd77855f8b37cf387"
  },
  {
    "url": "assets/js/12.3f2fc784.js",
    "revision": "246ce7773b24daf218d7e724e7b78aeb"
  },
  {
    "url": "assets/js/13.3910b0a4.js",
    "revision": "ee6c90f1fdb86ad3256bba3bfeabceb2"
  },
  {
    "url": "assets/js/14.6a682e6d.js",
    "revision": "b4f91fa9d82672afc113741ac5234797"
  },
  {
    "url": "assets/js/15.42fde324.js",
    "revision": "0ca940245a5fab22e65ae89f5c844ea6"
  },
  {
    "url": "assets/js/16.094c86f3.js",
    "revision": "8fbc807e3aaf3b50b949abb52a1cc19a"
  },
  {
    "url": "assets/js/17.1254a7e4.js",
    "revision": "e7f93b9cbe1b0a2d359c77150fbb0ee0"
  },
  {
    "url": "assets/js/18.5a6990c4.js",
    "revision": "4ab57f11a2412328ecc67c6e4e29b305"
  },
  {
    "url": "assets/js/19.491e15be.js",
    "revision": "e81cd232c380421f3a2a5c4e4268726e"
  },
  {
    "url": "assets/js/2.f664d0d8.js",
    "revision": "2d35629b9f89c096fa6efbe0ad081405"
  },
  {
    "url": "assets/js/20.aa04ef27.js",
    "revision": "96bfd334f5b6201abf3a36b988416a5d"
  },
  {
    "url": "assets/js/21.77543004.js",
    "revision": "d05e829adee47dfb3c434610deb44b5a"
  },
  {
    "url": "assets/js/22.5f8c3a9d.js",
    "revision": "16f18934bf75c260708d047da1022e59"
  },
  {
    "url": "assets/js/23.7314e00b.js",
    "revision": "46ad2cb12f83ef3036518daa8a235690"
  },
  {
    "url": "assets/js/24.7a6c5cef.js",
    "revision": "d3a9a67e2601610ac0cd11dea45f18f0"
  },
  {
    "url": "assets/js/25.8f617691.js",
    "revision": "856224cc1b0a2f3213c9f5fc6195b2e7"
  },
  {
    "url": "assets/js/26.c6bdd74b.js",
    "revision": "fe9349e6b52226e5d3cc0935e2718c84"
  },
  {
    "url": "assets/js/27.05aa04b3.js",
    "revision": "f92e0331071aa4a0f6f2d29ccde4dec5"
  },
  {
    "url": "assets/js/28.fb2759b1.js",
    "revision": "84b92afdb9f40ba60f0f232b5a1af31c"
  },
  {
    "url": "assets/js/29.cfb8655c.js",
    "revision": "4b81cc49a4b131095cbc4c07def712b3"
  },
  {
    "url": "assets/js/30.e9b9c3fb.js",
    "revision": "840f5efeae58551e258111a96518b10b"
  },
  {
    "url": "assets/js/31.277d644f.js",
    "revision": "613bf3f6426f3ed7d6b9112a3b4d3381"
  },
  {
    "url": "assets/js/32.909cfccf.js",
    "revision": "7d47a23858468f21322a73455a9d9f39"
  },
  {
    "url": "assets/js/33.05fc49ae.js",
    "revision": "1abe7f914274ec1a1a0018841f3c2dac"
  },
  {
    "url": "assets/js/34.f83d12bf.js",
    "revision": "62d06ee67d897ba7976a1500bfdbfd49"
  },
  {
    "url": "assets/js/35.c4219b9a.js",
    "revision": "c7149454905d49a1e7072c5ad4f955a1"
  },
  {
    "url": "assets/js/36.ef702514.js",
    "revision": "fcf8c9bdd4a9548f2de0f030b02685ce"
  },
  {
    "url": "assets/js/37.1bc3ebcc.js",
    "revision": "a0803130833b59cbf1108532e49053c9"
  },
  {
    "url": "assets/js/38.d05f1a1c.js",
    "revision": "ee29fa1d23ac37a46eaab3ef031ffab5"
  },
  {
    "url": "assets/js/39.d5c5e441.js",
    "revision": "02ca8cafcf61d5e9e1b3e94aec419c18"
  },
  {
    "url": "assets/js/40.2247c283.js",
    "revision": "fd451974286fe557745dd2ad1b06b01a"
  },
  {
    "url": "assets/js/41.35c36091.js",
    "revision": "fb5da65c7decd45c75218fe4ab7b03ad"
  },
  {
    "url": "assets/js/42.1c9a0639.js",
    "revision": "2c719c420e2668b8574caf477ab5cbba"
  },
  {
    "url": "assets/js/43.31496323.js",
    "revision": "cc90a6dd5eb9776be42fbf55365f264f"
  },
  {
    "url": "assets/js/44.053dfaf4.js",
    "revision": "8b7a4e51ed44caa35417f6d41edd989c"
  },
  {
    "url": "assets/js/45.3ad9abbe.js",
    "revision": "5a85c618736cda0cd8362f498cfb89d0"
  },
  {
    "url": "assets/js/5.4624ab9c.js",
    "revision": "29adf152d61fa3988a72f1dfd32103ce"
  },
  {
    "url": "assets/js/6.5ce83693.js",
    "revision": "7fead94e22972fd4807028563bef85dd"
  },
  {
    "url": "assets/js/7.0afd13ae.js",
    "revision": "c5e7210a2d4bda606658bf24eb63372e"
  },
  {
    "url": "assets/js/8.411eef3a.js",
    "revision": "a45833b5a6ead557330cfcefc318c66e"
  },
  {
    "url": "assets/js/9.aa014b5d.js",
    "revision": "89b5805bf00557ea666b7c8fe824ca27"
  },
  {
    "url": "assets/js/app.ea259e9b.js",
    "revision": "7b1c8d18a87e27e9d2874ddb69992470"
  },
  {
    "url": "assets/js/vendors~docsearch.397f6fa9.js",
    "revision": "47143e915a93f87f5109860c7c9776a2"
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
    "revision": "e8ef6650ab4253130ee16bc28c596f85"
  },
  {
    "url": "extensions/index.html",
    "revision": "4dd27d6500e18f823741e019183421eb"
  },
  {
    "url": "forks/index.html",
    "revision": "39d07aa58c5e0174aabe4cd7eed37d49"
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
    "revision": "5f26404db411e204b0329549ea174d9b"
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
    "revision": "e1289a16044fcb8bff13bdb1fb988a76"
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
    "revision": "135c5d92cb1020e24a9e10e4c697509e"
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
    "revision": "37a25214d89fcc49767a60a643b2ec8f"
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
    "revision": "1f833fae3388e9a1ab56753e75f73e4c"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "26296c4e237dd63d25f7ff27ea3a3b0a"
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
    "revision": "2a77a129d1da19aafcf81de331ee514c"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "e333a6397707e8d80d2ba6deea891913"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "5975f150f27482866a2f1112835a63c5"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "cfcedd8fbb60bf484b5dc463a72d8b42"
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
    "revision": "f8f47d8c78545407cd3f84b55529c097"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "1214ae449ce59762f8eed8eb732728f1"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "5d8dda388c19ed42ffd8bcf8f3122adc"
  },
  {
    "url": "help/guides/troubleshooting-problems/assets/WebView-Open.jpg",
    "revision": "e5e9789ed47676086f567aab10fd668d"
  },
  {
    "url": "help/guides/troubleshooting-problems/index.html",
    "revision": "0c26a80644d681bcd62acc3ff5ee70a4"
  },
  {
    "url": "help/index.html",
    "revision": "ca69bf4265136b1d082e5e2e4b1040dd"
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
    "revision": "2dc83ce8f65e08e7e6e34b869e4805b9"
  },
  {
    "url": "sandbox/element-ui/index.html",
    "revision": "3c4810cfd0157ba52be1e9c430b50a20"
  },
  {
    "url": "sandbox/index.html",
    "revision": "e9d49445718c06a2d60078faf732318f"
  },
  {
    "url": "sandbox/style-guide/index.html",
    "revision": "296383bbe9ab2c9879082cd590437405"
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
