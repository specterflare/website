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
    "revision": "4f9cbdd88f5c2951992eb9a9dc17c6a9"
  },
  {
    "url": "assets/css/0.styles.4898cce8.css",
    "revision": "8e48894b0ceb2ac6712641e5208ee116"
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
    "url": "assets/js/1.8c941a64.js",
    "revision": "3255ea5cc51062857e3856f15dc97bb1"
  },
  {
    "url": "assets/js/10.b6abca81.js",
    "revision": "5c67dbaca8a4b5652d613bdbc8a56290"
  },
  {
    "url": "assets/js/11.ace17ac5.js",
    "revision": "d341ec154b607d3e672833e79157d58a"
  },
  {
    "url": "assets/js/12.b54afd0f.js",
    "revision": "a6f0919d92eb61b901a2db513a3b3b7b"
  },
  {
    "url": "assets/js/13.f8956626.js",
    "revision": "9e2cadb6b78b2b3b932ef4778f4a5ea8"
  },
  {
    "url": "assets/js/14.7b3a1933.js",
    "revision": "3f5385a7af16c3cfd4b8e0b59eaf41d4"
  },
  {
    "url": "assets/js/15.df7f36f9.js",
    "revision": "d7ca2bd087184dea2ba506314af7b76f"
  },
  {
    "url": "assets/js/16.e027e2f6.js",
    "revision": "efe121cc35dc07d39678d36197a79c82"
  },
  {
    "url": "assets/js/17.8257d5e2.js",
    "revision": "2fafad4545a69312b188362f65dcc88b"
  },
  {
    "url": "assets/js/18.a2b2b8c7.js",
    "revision": "9be8263c21ad55cf2e450395da54f41e"
  },
  {
    "url": "assets/js/19.f825ad9e.js",
    "revision": "cb9d13a20ae80195de512a44ed7a3936"
  },
  {
    "url": "assets/js/20.20a2d762.js",
    "revision": "d47319f19d1de6317a1a03fe027da88e"
  },
  {
    "url": "assets/js/21.d4b42cc9.js",
    "revision": "69f36a54b2a5eec1713960e46931da57"
  },
  {
    "url": "assets/js/22.dbaa2c25.js",
    "revision": "36b11ca04692beedd4349e2fa2633ee3"
  },
  {
    "url": "assets/js/23.0f9c93db.js",
    "revision": "168b8352441bea0abf2fb9045733d1d1"
  },
  {
    "url": "assets/js/24.9862c0cd.js",
    "revision": "41986426de0172caf793800b2f211968"
  },
  {
    "url": "assets/js/25.09e79d53.js",
    "revision": "ffad1718a89aa7de121082215b1a575b"
  },
  {
    "url": "assets/js/26.ce430b13.js",
    "revision": "b85d7cbb1f674f3304b2fba2508ddb4f"
  },
  {
    "url": "assets/js/27.9b065fbb.js",
    "revision": "65ca987a56206537d725e962704075ec"
  },
  {
    "url": "assets/js/28.cf68c15e.js",
    "revision": "952a7ff9226e03cff82ce865efbfef61"
  },
  {
    "url": "assets/js/29.b5f67fc3.js",
    "revision": "29271c5a64cedc5b9ef4cfa68cc4ab9b"
  },
  {
    "url": "assets/js/30.d97bd38b.js",
    "revision": "d8bbc5b8a9681b76fb5d2e04da6b3382"
  },
  {
    "url": "assets/js/31.3892af6a.js",
    "revision": "a082f31a4cedaba1e1162ad88e8d1753"
  },
  {
    "url": "assets/js/32.9317fd47.js",
    "revision": "5fd4e1f8d49a2c87876c72c106b7931a"
  },
  {
    "url": "assets/js/33.b8702220.js",
    "revision": "cb63418439025757117a91c49b97eda1"
  },
  {
    "url": "assets/js/34.3524bf2b.js",
    "revision": "b55c12d454f6213986ff125d27ffe15b"
  },
  {
    "url": "assets/js/35.86932905.js",
    "revision": "2c09e7c4df94d3f90c835cbe00143f44"
  },
  {
    "url": "assets/js/36.4364f1ed.js",
    "revision": "789cbcf35472a1b7be40f8381ee71759"
  },
  {
    "url": "assets/js/37.e88a16c9.js",
    "revision": "41b77fb29778568319160c38d8bcf106"
  },
  {
    "url": "assets/js/38.c8dd7386.js",
    "revision": "6858e0824e7d9a1f7cdedf17d4c75832"
  },
  {
    "url": "assets/js/39.011eacc0.js",
    "revision": "5d194b3b367ce294bdfc7cdb668f640d"
  },
  {
    "url": "assets/js/4.1bcc924c.js",
    "revision": "608187c8e8350527463bb1a9c8a41a1b"
  },
  {
    "url": "assets/js/40.553f94d4.js",
    "revision": "2d21a21df14eba71014d833038022d42"
  },
  {
    "url": "assets/js/41.2acb372c.js",
    "revision": "45cb7d15cc23872b9c85390146800bbf"
  },
  {
    "url": "assets/js/42.5513c4c1.js",
    "revision": "8c4a2adccb463d3e92a4cbc93ac27925"
  },
  {
    "url": "assets/js/43.ff9505be.js",
    "revision": "18d63904e4c95106863e3c388568eef7"
  },
  {
    "url": "assets/js/5.a8f1c867.js",
    "revision": "f9b2744dc6bb7715874d917a5331cc53"
  },
  {
    "url": "assets/js/6.9d93345e.js",
    "revision": "75f2978b93792b0267008b1e82cedea1"
  },
  {
    "url": "assets/js/7.f452614f.js",
    "revision": "30dd1185892e050c97088a9f1822929e"
  },
  {
    "url": "assets/js/8.c1567b79.js",
    "revision": "cd3b4e37d25fb9fbea11fa3d611b179e"
  },
  {
    "url": "assets/js/9.f5f8515a.js",
    "revision": "f73a11b9484ae60eca51dac37199593b"
  },
  {
    "url": "assets/js/app.3fff2116.js",
    "revision": "b365f3a183c9edbd27c5125d2075edfa"
  },
  {
    "url": "assets/js/vendors~docsearch.088ef177.js",
    "revision": "3ef29beee4639233b2a44f1de87cea9e"
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
    "url": "assets/media/fork-AZ-icon.png",
    "revision": "8c091950f3de1d0e81e69728db382d0d"
  },
  {
    "url": "assets/media/fork-AZ-symbol.png",
    "revision": "7ba4f33a10b643f437c3fd8dadda110a"
  },
  {
    "url": "assets/media/fork-EH-banner.png",
    "revision": "a2852ea02d260d0395d565b133a9de3c"
  },
  {
    "url": "assets/media/fork-EH-icon.png",
    "revision": "2d9809f2099cbed6378ad71b26258aff"
  },
  {
    "url": "assets/media/fork-J2K-banner.png",
    "revision": "df716f69ba60004b7cc03cf8d317a95d"
  },
  {
    "url": "assets/media/fork-J2K-icon.png",
    "revision": "c758f9e913e15e23c7a5109784c4f280"
  },
  {
    "url": "assets/media/fork-Neko-banner.png",
    "revision": "31fc0fefde4a8cfe84adf24c2b5212ff"
  },
  {
    "url": "assets/media/fork-Neko-icon.png",
    "revision": "9e82e2bb234b4f3e22e0afc7266bf521"
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
    "revision": "a5e8fd4b0f5ae890d96073b27506c2ba"
  },
  {
    "url": "forks/index.html",
    "revision": "6f452154672fccf84e3ce19ae5636388"
  },
  {
    "url": "forks/Neko/index.html",
    "revision": "68a704d87741cd021ad6335e0d05a722"
  },
  {
    "url": "forks/TachiyomiAZ/index.html",
    "revision": "ba096948310bf28dd0d4adaf7678979c"
  },
  {
    "url": "forks/TachiyomiEH/index.html",
    "revision": "31efd52e4f138ce80f884d842c090883"
  },
  {
    "url": "forks/TachiyomiJ2K/index.html",
    "revision": "cd1d8cca28784badd547f0cd84de2598"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "01f2862fe049a5fa85d845d55f8b6de2"
  },
  {
    "url": "help/faq/index.html",
    "revision": "f088c4a41c3ba39059feb6824c621016"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "29746348e35d31ec49cb5411dc8285fc"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "2f9688bcb660f14021c978e661c11e05"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "dec3e1189a957b0e0fff853a283bccc4"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "145a1db6648f2a59471bdab03c7bae20"
  },
  {
    "url": "help/guides/settings/about/index.html",
    "revision": "2949f5d2aeb86f6a080934b62915e880"
  },
  {
    "url": "help/guides/settings/advanced/index.html",
    "revision": "949dcb39f2d6bbe812e7ab3855c414d8"
  },
  {
    "url": "help/guides/settings/backup/index.html",
    "revision": "fde4fe75defa83aca0c0e62046959c28"
  },
  {
    "url": "help/guides/settings/downloads/index.html",
    "revision": "58fa26d63d415b898fdde28d9612737d"
  },
  {
    "url": "help/guides/settings/general/index.html",
    "revision": "1cad30f479970a9f70e02f609745b51d"
  },
  {
    "url": "help/guides/settings/index.html",
    "revision": "1f145fcad7edeff7d9224fdb746881f3"
  },
  {
    "url": "help/guides/settings/reader/index.html",
    "revision": "f35115fadc7f0e7286353bfeaa765d19"
  },
  {
    "url": "help/guides/settings/tracking/index.html",
    "revision": "9e332523e09ec4d001db960f120a99cf"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "7daed9e8620a13333896785a1c57aff8"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "cbd3206aee93ee219406161eac1c3efa"
  },
  {
    "url": "help/index.html",
    "revision": "6e7515a67f17645a6cfee66be8080ef8"
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
    "revision": "7f47c89969642244c9a8292f16048700"
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
