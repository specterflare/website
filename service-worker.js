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
    "revision": "1e1500fa05c6c9ff9ddb711c7ce0bec7"
  },
  {
    "url": "assets/css/0.styles.713e41ff.css",
    "revision": "4c36926f8af8bfd90a2875b5f7b931e0"
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
    "url": "assets/js/1.2eb822c6.js",
    "revision": "323e98eefba15498a6cc7de17a163371"
  },
  {
    "url": "assets/js/10.9e15dac2.js",
    "revision": "64f94eb235ddfb952175fc0968a8957b"
  },
  {
    "url": "assets/js/11.6fc7f0f2.js",
    "revision": "ad3242b3987188cc8e175a333979e509"
  },
  {
    "url": "assets/js/12.99084780.js",
    "revision": "9c0dddaa5be347b15de59c8b5fe04bfe"
  },
  {
    "url": "assets/js/13.c4a2fbea.js",
    "revision": "6838ede6dad07ffe8195dbded9febcad"
  },
  {
    "url": "assets/js/14.53604f58.js",
    "revision": "e48012d7b73ab302a5d598b44a7be9bc"
  },
  {
    "url": "assets/js/15.e7cad4e6.js",
    "revision": "41ca7bb8104bf007645eae543979c83f"
  },
  {
    "url": "assets/js/16.c4d97cb8.js",
    "revision": "ca19781bcfaba6cae78a50f42fb04336"
  },
  {
    "url": "assets/js/17.59169cbb.js",
    "revision": "193d96d4ac1f17a8b011a0b90ff3ef2f"
  },
  {
    "url": "assets/js/18.3d3be909.js",
    "revision": "b9a3410a6f0908e8961e765bc71fde67"
  },
  {
    "url": "assets/js/19.004628af.js",
    "revision": "9619ad14c6f4067b69468ff2a0dfa2e8"
  },
  {
    "url": "assets/js/2.9bbd498d.js",
    "revision": "bbe9187e6da1233d810df4eb20fdf60e"
  },
  {
    "url": "assets/js/20.adaeb01c.js",
    "revision": "b5f723c5a05b67de6d15e66d979c1666"
  },
  {
    "url": "assets/js/21.51928838.js",
    "revision": "f353a0e5946b824228ca8f197f28cf16"
  },
  {
    "url": "assets/js/22.223a4745.js",
    "revision": "fdd535cf735cccad68d44c4bb068e6b6"
  },
  {
    "url": "assets/js/23.f8a6db85.js",
    "revision": "797533dbbfb350459ab28099c7807bc4"
  },
  {
    "url": "assets/js/24.975be2fd.js",
    "revision": "acaf65f83c1cc00448fbae47d3e0e667"
  },
  {
    "url": "assets/js/25.02248401.js",
    "revision": "620b72e239e30bc66b076903322aac1d"
  },
  {
    "url": "assets/js/26.470039fc.js",
    "revision": "308209c930e90e33fff6fd996a253908"
  },
  {
    "url": "assets/js/27.02ea880e.js",
    "revision": "a5ba13883c5e63f6fa41b39c74bb469e"
  },
  {
    "url": "assets/js/28.927f1b4f.js",
    "revision": "be43422adc1f959f46aee92aed92774b"
  },
  {
    "url": "assets/js/29.33e69e8d.js",
    "revision": "f07f52d599cfdc2b4c6d6d87485b0644"
  },
  {
    "url": "assets/js/3.983e123a.js",
    "revision": "3ae2984dfedc35235dcc39c575ed5c14"
  },
  {
    "url": "assets/js/30.3510ba01.js",
    "revision": "afc925e5deaab2abd87b153320cd63c0"
  },
  {
    "url": "assets/js/31.9b8ec3df.js",
    "revision": "38ad0c2febab023f6e866dbe42e33f84"
  },
  {
    "url": "assets/js/32.1825ce2d.js",
    "revision": "734c8dad0be4684b973a037ff644831b"
  },
  {
    "url": "assets/js/33.fd96db9c.js",
    "revision": "e096de3b5b33cc528c4f43529e9e2a5b"
  },
  {
    "url": "assets/js/34.fc44a984.js",
    "revision": "efbad514d7a55dbb8dd40c3c301491c1"
  },
  {
    "url": "assets/js/35.d263ca15.js",
    "revision": "36c2bfd75c4ad390a54d60e84eb815a6"
  },
  {
    "url": "assets/js/36.a2c9e27e.js",
    "revision": "9fb720bb410becd3ff6a5e4926fb23fb"
  },
  {
    "url": "assets/js/37.e80bc895.js",
    "revision": "45d1112ef25e682449391f2d9ae2faf9"
  },
  {
    "url": "assets/js/38.a973b3c9.js",
    "revision": "2b9353d61bd9bfac59c61d5fc2b72ab4"
  },
  {
    "url": "assets/js/39.cc5041f6.js",
    "revision": "0e4dccfceccba77943e51306b19725a6"
  },
  {
    "url": "assets/js/40.2a5de494.js",
    "revision": "085ce11ce2e1e3e977d39939d61fb1cd"
  },
  {
    "url": "assets/js/41.b0640363.js",
    "revision": "295ee967885eaafc6be662d2b9fa8540"
  },
  {
    "url": "assets/js/42.f8f5f1f6.js",
    "revision": "c83f0455b980ea54db7a4d83d80c0b3f"
  },
  {
    "url": "assets/js/43.03c5db7a.js",
    "revision": "f5d2a3bb31ac76970c6cd54b647d8507"
  },
  {
    "url": "assets/js/44.9b38d255.js",
    "revision": "0337195621d888051505fd017b94dabc"
  },
  {
    "url": "assets/js/45.b260b2ec.js",
    "revision": "5a51e28882645f6e7e187c0cce73eea3"
  },
  {
    "url": "assets/js/6.1804bf24.js",
    "revision": "f140a940e3c8b6f3f0b02bf137c216fb"
  },
  {
    "url": "assets/js/7.9ac210bb.js",
    "revision": "87e91f2b2e150ba494c55f8e78ae5b90"
  },
  {
    "url": "assets/js/8.2a0dd026.js",
    "revision": "879019fa79ccb93b95fc6e1a4b99fb8b"
  },
  {
    "url": "assets/js/9.2af7c487.js",
    "revision": "6c6865f37f197666035c97e728193fda"
  },
  {
    "url": "assets/js/app.ed1ae5ed.js",
    "revision": "eed2edaa04f24db04346dbd4489c2b04"
  },
  {
    "url": "assets/js/vendors~docsearch.107600ff.js",
    "revision": "b2e2ca9205dc179da515540272f76fbe"
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
    "revision": "cd134989fc9f176c1e2801ba70fdee80"
  },
  {
    "url": "forks/index.html",
    "revision": "088aa760d26bc915bddb33f8960a3e54"
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
    "revision": "0b7a521ee98290195193dd208d09bb4b"
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
    "revision": "f530dae74d66400e2d5cdd645cae7bb4"
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
    "revision": "961c477af06d0c05add6a3ad435df02f"
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
    "revision": "7106f3984fae12e8a9caf4eb0b68452d"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "eaa92b8556a9ebfce3de3076d1144d83"
  },
  {
    "url": "help/faq/index.html",
    "revision": "649a2ea283470b25eb9dc07336026389"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "49438020aa7b4b4a4161779ba668f411"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "d61e87ee22ec5963f2fbd329395b74ff"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "6622a509c597b8958b2dfd27fa5ad45a"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "dd48edc77c525949d1eefa5cec3c852c"
  },
  {
    "url": "help/guides/settings/advanced/index.html",
    "revision": "9042fb6ee1f5c99649511f93f443b4ec"
  },
  {
    "url": "help/guides/settings/backup/index.html",
    "revision": "83add940e35e084fa3162c46800c4b02"
  },
  {
    "url": "help/guides/settings/downloads/index.html",
    "revision": "45d3fa03e7a1099c174ef420044b030f"
  },
  {
    "url": "help/guides/settings/general/index.html",
    "revision": "0d0f41472c87711c8c780793fcd282e8"
  },
  {
    "url": "help/guides/settings/index.html",
    "revision": "3ec5f2eb798e5ea83a366d7054778791"
  },
  {
    "url": "help/guides/settings/reader/index.html",
    "revision": "caec3b9eadf78decfbcc0f4968495ea5"
  },
  {
    "url": "help/guides/settings/tracking/index.html",
    "revision": "08a90289d1ff6fa9e4b8bfb9327bb436"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "fe0ed61916f178c62f36e6fcf8fc0f07"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "47fd44bb14dd99550cfcdf6b852b07d1"
  },
  {
    "url": "help/index.html",
    "revision": "7d663dde58145df911ba6a51d3b8eec2"
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
    "revision": "c9c458885c745b4e461e88808d21f227"
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
