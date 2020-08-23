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
    "revision": "fcdc011fd42d9df3b61955c99718e7a5"
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
    "url": "assets/css/0.styles.8321d7f9.css",
    "revision": "6eb1c219a12a17e48e2616a7f0329a39"
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
    "url": "assets/js/1.0d94405a.js",
    "revision": "cb725153069cd03f07dbe55c4aef48a7"
  },
  {
    "url": "assets/js/10.6c726d6d.js",
    "revision": "48946529eac314a3e29337c910971820"
  },
  {
    "url": "assets/js/11.7c457109.js",
    "revision": "067b29964868d45fe723980d2dad38e6"
  },
  {
    "url": "assets/js/12.74c155f3.js",
    "revision": "246ce7773b24daf218d7e724e7b78aeb"
  },
  {
    "url": "assets/js/13.bf425594.js",
    "revision": "ee6c90f1fdb86ad3256bba3bfeabceb2"
  },
  {
    "url": "assets/js/14.0bfc7327.js",
    "revision": "b4f91fa9d82672afc113741ac5234797"
  },
  {
    "url": "assets/js/15.07f386a2.js",
    "revision": "0ca940245a5fab22e65ae89f5c844ea6"
  },
  {
    "url": "assets/js/16.583bfbcd.js",
    "revision": "8fbc807e3aaf3b50b949abb52a1cc19a"
  },
  {
    "url": "assets/js/17.cd64f28f.js",
    "revision": "e7f93b9cbe1b0a2d359c77150fbb0ee0"
  },
  {
    "url": "assets/js/18.edfe87b7.js",
    "revision": "4ab57f11a2412328ecc67c6e4e29b305"
  },
  {
    "url": "assets/js/19.0e887a93.js",
    "revision": "e81cd232c380421f3a2a5c4e4268726e"
  },
  {
    "url": "assets/js/2.80a69807.js",
    "revision": "2d35629b9f89c096fa6efbe0ad081405"
  },
  {
    "url": "assets/js/20.b31669ea.js",
    "revision": "96bfd334f5b6201abf3a36b988416a5d"
  },
  {
    "url": "assets/js/21.3122d7f4.js",
    "revision": "d05e829adee47dfb3c434610deb44b5a"
  },
  {
    "url": "assets/js/22.323eb650.js",
    "revision": "16f18934bf75c260708d047da1022e59"
  },
  {
    "url": "assets/js/23.8cf08140.js",
    "revision": "46ad2cb12f83ef3036518daa8a235690"
  },
  {
    "url": "assets/js/24.9be877b9.js",
    "revision": "d3a9a67e2601610ac0cd11dea45f18f0"
  },
  {
    "url": "assets/js/25.00e2f7c1.js",
    "revision": "856224cc1b0a2f3213c9f5fc6195b2e7"
  },
  {
    "url": "assets/js/26.39393120.js",
    "revision": "fe9349e6b52226e5d3cc0935e2718c84"
  },
  {
    "url": "assets/js/27.4168768e.js",
    "revision": "f92e0331071aa4a0f6f2d29ccde4dec5"
  },
  {
    "url": "assets/js/28.4f00b2d6.js",
    "revision": "84b92afdb9f40ba60f0f232b5a1af31c"
  },
  {
    "url": "assets/js/29.a1eca9d4.js",
    "revision": "4b81cc49a4b131095cbc4c07def712b3"
  },
  {
    "url": "assets/js/30.7eeea038.js",
    "revision": "840f5efeae58551e258111a96518b10b"
  },
  {
    "url": "assets/js/31.03314cda.js",
    "revision": "613bf3f6426f3ed7d6b9112a3b4d3381"
  },
  {
    "url": "assets/js/32.be0fc773.js",
    "revision": "7d47a23858468f21322a73455a9d9f39"
  },
  {
    "url": "assets/js/33.1c593f35.js",
    "revision": "40382a3d12d2a4fa3c5e93471e2fb6fe"
  },
  {
    "url": "assets/js/34.fa164003.js",
    "revision": "62d06ee67d897ba7976a1500bfdbfd49"
  },
  {
    "url": "assets/js/35.6abcf282.js",
    "revision": "c7149454905d49a1e7072c5ad4f955a1"
  },
  {
    "url": "assets/js/36.ec590f51.js",
    "revision": "fcf8c9bdd4a9548f2de0f030b02685ce"
  },
  {
    "url": "assets/js/37.0bda0b93.js",
    "revision": "a0803130833b59cbf1108532e49053c9"
  },
  {
    "url": "assets/js/38.783802b5.js",
    "revision": "ee29fa1d23ac37a46eaab3ef031ffab5"
  },
  {
    "url": "assets/js/39.53a3d5e4.js",
    "revision": "02ca8cafcf61d5e9e1b3e94aec419c18"
  },
  {
    "url": "assets/js/40.f1bc8ae1.js",
    "revision": "b4003265998ad7488082bf3e9a25edfb"
  },
  {
    "url": "assets/js/41.fc7abee1.js",
    "revision": "27b59f5d3e8cfc21f606d02cccfecdf5"
  },
  {
    "url": "assets/js/42.713523d4.js",
    "revision": "67d7f1e6478f343f893512a49c137f3a"
  },
  {
    "url": "assets/js/43.a59f1b89.js",
    "revision": "df4eff25f60fc81db04e4d7f309a7921"
  },
  {
    "url": "assets/js/44.d95d5633.js",
    "revision": "45fac0067582190810c26dd9d4e8fe2f"
  },
  {
    "url": "assets/js/5.688a595e.js",
    "revision": "29adf152d61fa3988a72f1dfd32103ce"
  },
  {
    "url": "assets/js/6.adb173dd.js",
    "revision": "7fead94e22972fd4807028563bef85dd"
  },
  {
    "url": "assets/js/7.f07f1d45.js",
    "revision": "c5e7210a2d4bda606658bf24eb63372e"
  },
  {
    "url": "assets/js/8.411eef3a.js",
    "revision": "a45833b5a6ead557330cfcefc318c66e"
  },
  {
    "url": "assets/js/9.244a0c1c.js",
    "revision": "89b5805bf00557ea666b7c8fe824ca27"
  },
  {
    "url": "assets/js/app.216c9ea9.js",
    "revision": "a41a5da173f4a658050e1928fc0be4d2"
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
    "revision": "db786abc0292f7c40edeb36117a14078"
  },
  {
    "url": "extensions/index.html",
    "revision": "b871aced64b2cd3b1fb9590bdf23d351"
  },
  {
    "url": "forks/index.html",
    "revision": "ecfd39a3b2ca8f7553a7282591d56681"
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
    "revision": "8b3ead90b947767fa82ee938fdf66470"
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
    "revision": "0789c1dbf1215282e6e5145442c8ba78"
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
    "revision": "0878f2f65cdbc35ffc9b2e34f45e9f2a"
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
    "revision": "6c0ff85e097aa375ac42a0978ab833fc"
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
    "revision": "41e2d77c76fe83d9cc9f6ed6f3354aa9"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "cc7afaabc999d8a0e42a7b9c2e4b417e"
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
    "revision": "71b5ea838357743cc26c3ed51373c23f"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "0e1cd681e16894929d48d572aab6d51d"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "7c99edbc7a10a7c2bafb518c6526abb0"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "90955a6154dea9f7b149ca0df061b439"
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
    "revision": "412aa16632553ff7949314989cfe8a45"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "5af6d9340e104ba13f145b6e4549ae38"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "72aa69034cd9ea3699dfcdc116b68dc1"
  },
  {
    "url": "help/guides/troubleshooting-problems/assets/WebView-Open.jpg",
    "revision": "e5e9789ed47676086f567aab10fd668d"
  },
  {
    "url": "help/guides/troubleshooting-problems/index.html",
    "revision": "033abd62459369ffde305c0451de110e"
  },
  {
    "url": "help/index.html",
    "revision": "1ac07e52f3465651733b65cf95cd40c8"
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
    "revision": "1757c9a3b6feebac4f911e84052a46b8"
  },
  {
    "url": "sandbox/element-ui/index.html",
    "revision": "0f4d49693c41e2b5d43e7a53de250275"
  },
  {
    "url": "sandbox/index.html",
    "revision": "747c3edcc7658b367b4e2e5d39e29880"
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
