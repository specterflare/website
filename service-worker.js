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
    "revision": "3ffa03a7080536ec8141ece143b43333"
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
    "url": "assets/css/0.styles.85bca261.css",
    "revision": "5bb0f304ea43c7bb5ce11dfea6832dbd"
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
    "url": "assets/js/1.843fd1ce.js",
    "revision": "64e78a1179830c3235bb376862ebc23d"
  },
  {
    "url": "assets/js/10.84205ca8.js",
    "revision": "a79caf38df719873dd34a6ee5700b04a"
  },
  {
    "url": "assets/js/11.3a6f5b5d.js",
    "revision": "17de15cd9f157c2599b47719b9b07dd9"
  },
  {
    "url": "assets/js/12.c0165f48.js",
    "revision": "6128ee7255442c5c93f68da54a929b33"
  },
  {
    "url": "assets/js/13.8eb7b5e9.js",
    "revision": "1cb7f9401f7982a6155384f028b2bcb0"
  },
  {
    "url": "assets/js/14.ec568df8.js",
    "revision": "532126580cf518671398d416be291377"
  },
  {
    "url": "assets/js/15.f437ddd8.js",
    "revision": "0b7ceda23db27d26a22970abfbc1499f"
  },
  {
    "url": "assets/js/16.b1af2b0c.js",
    "revision": "149ecbf0235ccd086358c99cc3a8f78e"
  },
  {
    "url": "assets/js/17.0d3098a4.js",
    "revision": "e3ec23c8752943030d4975994f9dd017"
  },
  {
    "url": "assets/js/18.efbea2ce.js",
    "revision": "d56d58d4794dea2d624253a0b380d2f5"
  },
  {
    "url": "assets/js/19.fae48cc1.js",
    "revision": "e81e264535bb200ad5ae95e904f487f2"
  },
  {
    "url": "assets/js/2.2af8b88c.js",
    "revision": "065ecc66bcc0d3e774c172bbf2180ef7"
  },
  {
    "url": "assets/js/20.7f23fd89.js",
    "revision": "c7117ec9537ef278b558405fa76b3ea0"
  },
  {
    "url": "assets/js/21.456dca1a.js",
    "revision": "6915e7141429fa4d6c73a6465e0417ca"
  },
  {
    "url": "assets/js/22.0a98000b.js",
    "revision": "c5b7f7f22e667db8f95d2db24e70ae9e"
  },
  {
    "url": "assets/js/23.eeff0099.js",
    "revision": "37735c56f361ec8fdf052f4d177b8b83"
  },
  {
    "url": "assets/js/24.58ae69ef.js",
    "revision": "3613e5cb9d0e417732547621bfa562c4"
  },
  {
    "url": "assets/js/25.2e670753.js",
    "revision": "eea31c346a3aa52218fe70388be08793"
  },
  {
    "url": "assets/js/26.f8b385ac.js",
    "revision": "a76f5bf6591eb8ad43e7c1e6dd43fae0"
  },
  {
    "url": "assets/js/27.7a1798e8.js",
    "revision": "7cb838a0f6fab28ddda3f35438e64fe0"
  },
  {
    "url": "assets/js/28.154128fe.js",
    "revision": "4753f9bfd7b95f588b059006a813f8ce"
  },
  {
    "url": "assets/js/29.8c5be4d2.js",
    "revision": "136be2b3f624259fb70f45c052d4246d"
  },
  {
    "url": "assets/js/3.c68732a9.js",
    "revision": "8070a87d9729f2427a2f3ca985f06b41"
  },
  {
    "url": "assets/js/30.8d73d69e.js",
    "revision": "28a02b4c043f49a254349a50b363bff8"
  },
  {
    "url": "assets/js/31.d1ffe396.js",
    "revision": "29cfe6e3a33a6616bfc762502402fad2"
  },
  {
    "url": "assets/js/32.d691ec41.js",
    "revision": "a13c304b98b55de18ddd55f7c03403e3"
  },
  {
    "url": "assets/js/33.3254275c.js",
    "revision": "a0b92c713083867a383e21efdfa3b663"
  },
  {
    "url": "assets/js/34.752a24c0.js",
    "revision": "1d6b574e22a81bc62595e511edd7bcc9"
  },
  {
    "url": "assets/js/35.62c1662d.js",
    "revision": "5624c6ad133092df54962085001bee90"
  },
  {
    "url": "assets/js/36.6d1248f5.js",
    "revision": "9f36cec1c2d8ff477fbe43de98fbffb3"
  },
  {
    "url": "assets/js/37.165ea9b4.js",
    "revision": "5fcfeb375d1b1180e52bb7af05bc9073"
  },
  {
    "url": "assets/js/38.cd80949b.js",
    "revision": "3c276901ff18335045d05b6d5c773997"
  },
  {
    "url": "assets/js/6.5ce8b5bd.js",
    "revision": "783a895a54d56d670942692642eb43e3"
  },
  {
    "url": "assets/js/7.ee0c20e3.js",
    "revision": "3214b98ffc57b3186731f82ca20f5c07"
  },
  {
    "url": "assets/js/8.a380121d.js",
    "revision": "6ca8652a837c57a7d76e7e11cdbd270b"
  },
  {
    "url": "assets/js/9.126f998f.js",
    "revision": "02fa7f998cc7a13f12dda366438a15e0"
  },
  {
    "url": "assets/js/app.b7a831ce.js",
    "revision": "e42bcc3b778c6ac6e7738538bdeb126b"
  },
  {
    "url": "assets/js/vendors~docsearch.7d13f0ad.js",
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
    "revision": "c7528f2c173abeb42674eb9d49bc9f56"
  },
  {
    "url": "forks/index.html",
    "revision": "035e56a93b80a7925a3590893794d9fe"
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
    "revision": "fe8155c7456287bf124fdf4ea6bb0d5c"
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
    "revision": "85a442f38a52c4582a02ff9cfbc5ea58"
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
    "revision": "90f909eda238da1f6ee8dc9b0bec6656"
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
    "revision": "e37a72696315062b7f3c1a15d41b2655"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "5f9ca3a2efe77e446bfc01783a663048"
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
    "revision": "e3e49f571365cf6dc2d5c6d6726bf0b9"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "40ed22c6db38390de8b2274098ac4c81"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "aefc1d907cfa419089c633e241d61ea4"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "af76a94833f2d0c9b1b0756263b3c7dd"
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
    "revision": "09f09b437e9ee62b2b8941c07739ceb0"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "46bd346b79ba0d9080f91f25592ae790"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "91b54943364622b2ad254b513ded38d3"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "a60bbce98f23671ad9b7ebdb73e8437c"
  },
  {
    "url": "help/index.html",
    "revision": "472db053f42d8536382deb534606ddbe"
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
    "revision": "00aa6f705b191de8cc2ceed3ae881c05"
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
