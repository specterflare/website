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
    "revision": "d4d8f64c641f9f690c67220ad8595008"
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
    "url": "assets/css/0.styles.94ef0a57.css",
    "revision": "303f371d027383a6142d9a6fb3792c3d"
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
    "url": "assets/js/1.24844af3.js",
    "revision": "b47aa83e28827266064972b647c57c44"
  },
  {
    "url": "assets/js/10.231882c0.js",
    "revision": "50e2a66aee5b408a9800ca58435c6830"
  },
  {
    "url": "assets/js/11.6d41db29.js",
    "revision": "c9489e45a30e0c96a0f8a2816301ed12"
  },
  {
    "url": "assets/js/12.25043f17.js",
    "revision": "b1d082ba88058ef41b3fedbc9506812f"
  },
  {
    "url": "assets/js/13.7aa6ea61.js",
    "revision": "da3254cb800295249303cad75fde88bc"
  },
  {
    "url": "assets/js/14.164cd3a6.js",
    "revision": "d5ab3b8632aeabed094ebec2881dc4ae"
  },
  {
    "url": "assets/js/15.e1b92e28.js",
    "revision": "4b8a77557e851fc54f546af4763bae0a"
  },
  {
    "url": "assets/js/16.dd2537c6.js",
    "revision": "b4935a52d26555c6c8d5894387172983"
  },
  {
    "url": "assets/js/17.81302009.js",
    "revision": "3afbe36983f898899c25cb2b116448cb"
  },
  {
    "url": "assets/js/18.74ec44f0.js",
    "revision": "019f2e11c29fca8f782fd655fbc3dbb4"
  },
  {
    "url": "assets/js/19.65528c2d.js",
    "revision": "8439e8ac1e8458b7a7a95e9d33ce40a1"
  },
  {
    "url": "assets/js/2.fcac035e.js",
    "revision": "6729a107d2dca0fbf0ef13e7b5e7930c"
  },
  {
    "url": "assets/js/20.d645eda5.js",
    "revision": "d2405f04a79d8957dd2d4c8a32fd7848"
  },
  {
    "url": "assets/js/21.6da62b40.js",
    "revision": "95f300cc4fa256bce813eaa7f4398141"
  },
  {
    "url": "assets/js/22.66393cc3.js",
    "revision": "1544db67296a87598350d678ea9274f3"
  },
  {
    "url": "assets/js/23.222db4e8.js",
    "revision": "8581587e0187fb72fdb80ba20eea7a89"
  },
  {
    "url": "assets/js/24.d7922934.js",
    "revision": "d3352c18bec907a948a5a714e2082496"
  },
  {
    "url": "assets/js/25.11282f7a.js",
    "revision": "5131051c1b8cb01174a2cc10c84d531a"
  },
  {
    "url": "assets/js/26.1485b739.js",
    "revision": "348cf9e5c97d73fa252db2cf9772d370"
  },
  {
    "url": "assets/js/27.cd593b27.js",
    "revision": "4d56c1c5bc2d617c543025d893bbe0de"
  },
  {
    "url": "assets/js/28.7df5b3ca.js",
    "revision": "a7d1e05cff3b9f1cc86de9e0a01a4847"
  },
  {
    "url": "assets/js/29.28be55d0.js",
    "revision": "c59df9f0d201e4bee0536b55943aab0c"
  },
  {
    "url": "assets/js/30.68809e60.js",
    "revision": "508c02f64b16f053ca19a79507a68892"
  },
  {
    "url": "assets/js/31.d21d3a3d.js",
    "revision": "809fd122471269dad06725df051f8987"
  },
  {
    "url": "assets/js/32.0fceca8c.js",
    "revision": "636742bfdb472333e7b52d30ead4e9af"
  },
  {
    "url": "assets/js/33.161440b0.js",
    "revision": "1a65523331d2df2ccdcc990b1ad029fd"
  },
  {
    "url": "assets/js/34.a6f98fa6.js",
    "revision": "ee1d763970819de29e4fd62cb4a420be"
  },
  {
    "url": "assets/js/35.3c1fe415.js",
    "revision": "1a9a38561ab35fffdc01b97b5b39e1aa"
  },
  {
    "url": "assets/js/36.b367bf76.js",
    "revision": "fdef2f80b6f773dc61fdcfed3286b5c9"
  },
  {
    "url": "assets/js/37.c2602a58.js",
    "revision": "1eb03eca510edf9045c325e4e33483eb"
  },
  {
    "url": "assets/js/38.bd9a5a04.js",
    "revision": "0d931476b9f2e3f7f0105bda85ee52d9"
  },
  {
    "url": "assets/js/39.340c67a0.js",
    "revision": "055a1cc4fc61b01d80a4a4688f629226"
  },
  {
    "url": "assets/js/40.82093af4.js",
    "revision": "67e66dc8e4f15cc7e113bffa9fc65ac8"
  },
  {
    "url": "assets/js/41.fb59091f.js",
    "revision": "8b080b73f95c537059ed93ce91ff39cd"
  },
  {
    "url": "assets/js/42.eceeb5a5.js",
    "revision": "18fb8c135129d04f2e7ce49a729a1be9"
  },
  {
    "url": "assets/js/5.f07d5083.js",
    "revision": "7913f3246d9faf770e94fd6ed3119e21"
  },
  {
    "url": "assets/js/6.99e6b5f8.js",
    "revision": "23a3589d93f9318f34d1539c6bf249bc"
  },
  {
    "url": "assets/js/7.80dc875d.js",
    "revision": "b95482da5ada94e3c8206aae9f5face8"
  },
  {
    "url": "assets/js/8.1753d6af.js",
    "revision": "ce6d552c4698f3790a9a2605b45baa44"
  },
  {
    "url": "assets/js/9.1fd131f9.js",
    "revision": "63a22851104d917462434ee65ca15d6e"
  },
  {
    "url": "assets/js/app.092cfe1e.js",
    "revision": "f4ba960a0e5bdffade350ea15b356fb2"
  },
  {
    "url": "assets/js/vendors~docsearch.830d3e9d.js",
    "revision": "cd6532aba436ec9f073e59ed61f320f7"
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
    "revision": "9c4bf934e251c7a8a69088d5e932addf"
  },
  {
    "url": "extensions/index.html",
    "revision": "6c2c3d77ee14030239db80f0c93d1015"
  },
  {
    "url": "forks/index.html",
    "revision": "a71b5de534655836f78b4ecb054d13bf"
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
    "revision": "ab1edee94ec1cd8460539437551e48b3"
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
    "revision": "8cef6d02b0637b31aa57e19148d23ac8"
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
    "revision": "fa721cc9f7333ec22a3699054059a355"
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
    "revision": "2b423a9316be76f70bcbae549abb806f"
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
    "revision": "dd304eb3deb724f2d638dcf16a26fc75"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "b1f2b64de6ba82d6978ea8e9b205edb5"
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
    "revision": "6222e0f227bf6a8d3e19a4b5162cbe9e"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "066230454f2308052cc798e6338fe39a"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "84070bb1af9c00b12427ad1d8fb9a27d"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "9b8034847d0afe4e09bbf22af07ffe88"
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
    "revision": "a1754a9a48c5a6dbbc2c2b24aa8a91fe"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "d32ce76de8bf95ea4de7aa8c98a106f5"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "5a957cbc5287f16cfd8b5d906e3d33ae"
  },
  {
    "url": "help/guides/source-problems/assets/WebView-Open.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "913f416bfa7587bfe70419212b180693"
  },
  {
    "url": "help/index.html",
    "revision": "d63f8803c60e15c14c97f60d677cabc1"
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
    "revision": "30a5b299d4cef83a290a62ecec3b9b9b"
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
