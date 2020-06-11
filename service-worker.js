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
    "revision": "abd43724b30dac09add4c28793584ff7"
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
    "url": "assets/css/0.styles.b66294a5.css",
    "revision": "6dc1162c25d808e20997cb228496ea57"
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
    "url": "assets/js/1.266c0dff.js",
    "revision": "64e78a1179830c3235bb376862ebc23d"
  },
  {
    "url": "assets/js/10.20f6efab.js",
    "revision": "a79caf38df719873dd34a6ee5700b04a"
  },
  {
    "url": "assets/js/11.117b1329.js",
    "revision": "17de15cd9f157c2599b47719b9b07dd9"
  },
  {
    "url": "assets/js/12.8da9b9e5.js",
    "revision": "6128ee7255442c5c93f68da54a929b33"
  },
  {
    "url": "assets/js/13.5eabae31.js",
    "revision": "1cb7f9401f7982a6155384f028b2bcb0"
  },
  {
    "url": "assets/js/14.01ef8fb0.js",
    "revision": "532126580cf518671398d416be291377"
  },
  {
    "url": "assets/js/15.3402cc30.js",
    "revision": "0b7ceda23db27d26a22970abfbc1499f"
  },
  {
    "url": "assets/js/16.f3057049.js",
    "revision": "149ecbf0235ccd086358c99cc3a8f78e"
  },
  {
    "url": "assets/js/17.45b7109d.js",
    "revision": "e3ec23c8752943030d4975994f9dd017"
  },
  {
    "url": "assets/js/18.590938cb.js",
    "revision": "d56d58d4794dea2d624253a0b380d2f5"
  },
  {
    "url": "assets/js/19.b321b6b9.js",
    "revision": "e81e264535bb200ad5ae95e904f487f2"
  },
  {
    "url": "assets/js/2.eb537b50.js",
    "revision": "6de313af285b80ddc84cefe6a3ff4873"
  },
  {
    "url": "assets/js/20.bf6d07e4.js",
    "revision": "c7117ec9537ef278b558405fa76b3ea0"
  },
  {
    "url": "assets/js/21.27706c35.js",
    "revision": "6915e7141429fa4d6c73a6465e0417ca"
  },
  {
    "url": "assets/js/22.222ed013.js",
    "revision": "c5b7f7f22e667db8f95d2db24e70ae9e"
  },
  {
    "url": "assets/js/23.3d223179.js",
    "revision": "37735c56f361ec8fdf052f4d177b8b83"
  },
  {
    "url": "assets/js/24.d4392872.js",
    "revision": "3613e5cb9d0e417732547621bfa562c4"
  },
  {
    "url": "assets/js/25.809252f4.js",
    "revision": "eea31c346a3aa52218fe70388be08793"
  },
  {
    "url": "assets/js/26.93ef6523.js",
    "revision": "a76f5bf6591eb8ad43e7c1e6dd43fae0"
  },
  {
    "url": "assets/js/27.c3ab84ad.js",
    "revision": "7cb838a0f6fab28ddda3f35438e64fe0"
  },
  {
    "url": "assets/js/28.801d3684.js",
    "revision": "4753f9bfd7b95f588b059006a813f8ce"
  },
  {
    "url": "assets/js/29.8ec5d393.js",
    "revision": "136be2b3f624259fb70f45c052d4246d"
  },
  {
    "url": "assets/js/3.5c394af8.js",
    "revision": "8070a87d9729f2427a2f3ca985f06b41"
  },
  {
    "url": "assets/js/30.b440e56e.js",
    "revision": "28a02b4c043f49a254349a50b363bff8"
  },
  {
    "url": "assets/js/31.ea863495.js",
    "revision": "29cfe6e3a33a6616bfc762502402fad2"
  },
  {
    "url": "assets/js/32.84d70b04.js",
    "revision": "a13c304b98b55de18ddd55f7c03403e3"
  },
  {
    "url": "assets/js/33.7af19dc7.js",
    "revision": "a0b92c713083867a383e21efdfa3b663"
  },
  {
    "url": "assets/js/34.2eaa3193.js",
    "revision": "a925222b0b68d32381bb20d45a64efce"
  },
  {
    "url": "assets/js/35.56f92688.js",
    "revision": "7acd9461b63dc4a5de5ee277029db60a"
  },
  {
    "url": "assets/js/36.01eac675.js",
    "revision": "e4c9d5f54dda6a3372e0bd1e737f36fe"
  },
  {
    "url": "assets/js/37.4b009f0c.js",
    "revision": "17d3b3e32f2a12bde3568078a86136a5"
  },
  {
    "url": "assets/js/38.b17e9aeb.js",
    "revision": "3c276901ff18335045d05b6d5c773997"
  },
  {
    "url": "assets/js/6.dd2e6a06.js",
    "revision": "783a895a54d56d670942692642eb43e3"
  },
  {
    "url": "assets/js/7.954a30c0.js",
    "revision": "3214b98ffc57b3186731f82ca20f5c07"
  },
  {
    "url": "assets/js/8.318640b9.js",
    "revision": "6ca8652a837c57a7d76e7e11cdbd270b"
  },
  {
    "url": "assets/js/9.b80e0e79.js",
    "revision": "02fa7f998cc7a13f12dda366438a15e0"
  },
  {
    "url": "assets/js/app.0c925482.js",
    "revision": "cb5571f47c1836cad62dcaf9418bb9b9"
  },
  {
    "url": "assets/js/vendors~docsearch.7e59632f.js",
    "revision": "b36beefebd7fa88a50f69eb70c7194a3"
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
    "url": "extensions/index.html",
    "revision": "413a440737bd6e7aa232725cbc9aee8e"
  },
  {
    "url": "forks/index.html",
    "revision": "93df9088dc408eca7fda934f0fee99f4"
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
    "revision": "3be52e849a2d25e6ed251569964ab2af"
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
    "revision": "18231f3976648def566ffd52c1427e76"
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
    "revision": "1292a873653381752b6cfba537a50a42"
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
    "revision": "d87ed0eac807ef51fbc6b23055b26e27"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "b25acb3c9730a5090b16cf1337866284"
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
    "revision": "b8986df935eca46bcdb089c22f5e320f"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "f6c35e2a0c0bf2aafe0f6551b58ad7e1"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "ada8f9b1fc9bd04492d1e1a9f94a0b8e"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "91a2ca0c37d095e39f7ca9aabeb52822"
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
    "revision": "cd9eec9f232e654656d0d3001ef7ca7a"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "ab80861a439225b0d03c774d523bec70"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "20770062c959b0fdb1bf162a247d8b3c"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "d411253bad47d43303c1fa329506439b"
  },
  {
    "url": "help/index.html",
    "revision": "a65444ac8f989d35eedc6ef473f8dfea"
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
    "revision": "a25ac7b0446bd9bc745ef76a5256fe93"
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
