'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4525b14e1aae2fb56512a54b1e064a2e",
".git/config": "665646edc677fd5a21b5bd0cb5dbf613",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "836bcbd633221b39812ec86e1dae25d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f63e011c68cee562fd2446026ff30c5",
".git/logs/refs/heads/master": "9f63e011c68cee562fd2446026ff30c5",
".git/logs/refs/remotes/origin/HEAD": "c8a906d5b824cabcccb321e6c7c33efc",
".git/logs/refs/remotes/origin/master": "6532b450063ddd31bc8ec9fc2935931f",
".git/objects/04/364726421b10011159142bd0c157403af72453": "2ea249f0c896b863d2d8bb0f9fa2ea6f",
".git/objects/05/4f944cb99de67b5ea2855443b3e696eb7868ea": "1e3851d7bcaad33b16577cd3aecc2124",
".git/objects/05/f6824663642f192be811d1d1cc86ae1a2a73b2": "c6e9db73a4818baac2305ec57d5d6d2b",
".git/objects/06/75669d3f8b2add251508e1d4963b9f43b030da": "ab0e0282bac8a35d55849101fa9c72bb",
".git/objects/16/0cf0f1af807437826264686bd8e9567b0af171": "fc387f75af4bbe92c6afd0b921ee26ea",
".git/objects/20/58b87a062e4bbfb58d5ca69cd4b2ea6df2dcfc": "e282e7c9c5796bf3ab7ba706650c3d00",
".git/objects/23/232e2367b6c246825871c81221ee77d3c3e44b": "2a73d4e6303f561c664412391caffe7c",
".git/objects/25/055f2628322d6126b8d76c7884d9a8f07168c3": "29be2573ebb95af6f90500c467bc5172",
".git/objects/35/6e3737581cb3542f2ba12cba47017f8ac70816": "2c62276ffa6d4922fc08c0f21cc5e73a",
".git/objects/4b/ce87d8e54544e001fd78b3328c8442f996a150": "a8789512aa1a44532b773dcf9207e43d",
".git/objects/4e/68e3f4d705442b6369167f06c702e4cf59108b": "96a2b8533c32d887356daca7c048650e",
".git/objects/50/14e9e904254cf1179feb06b2fda0346a53e705": "59ee9b5751db4d5d115bfebc16bee37d",
".git/objects/58/17dc6fd2122e8dcc7f266314e53652b4df34e1": "3bb1b1cc4ebacd6ce7dbd3d4dc51f4d7",
".git/objects/6a/b970e8bdc77040bab8fbd9e4faf4298af72036": "f410579dc3e282237f45014672310007",
".git/objects/78/d0119fa041648c9f64067c57a12f472ad4511f": "80e57146079fb1d3d1144a46b9b344d3",
".git/objects/a6/b91308630eb627038b4af73bc7ae24a288ea26": "dfca08818229f7d464977f6f813265ba",
".git/objects/a7/1d7b7e8c55f9b747b170d1abb4363505c290f7": "938d57f3043b7980103531c35500eb13",
".git/objects/a8/fbdbe7970cd9172651f1510db73bd2cb558bea": "936730afe9371cf93af91f4ce0c190ae",
".git/objects/b4/f4f3b1b5ffa9f779f21c6819f5fd0e2c2eb931": "31178d170d14821124eeb5911373fef6",
".git/objects/bb/6cf5eb5f21dfb888666beaed5361c6b83ec011": "dab0b21616a73cdb92db790927307f7e",
".git/objects/be/1d023391294fd20136a1eaa114db4169065d58": "fb58b7db6d373703d14ef80b9c8928bd",
".git/objects/be/b1e59796e7049524d290eec6c695dc5a45d775": "8272525679026df7eb462a92c4a32c44",
".git/objects/c3/6b9136d5327b55db1c1b07c2688f01976e3d5e": "95714596aa27d064f6467570b07f4529",
".git/objects/c9/0b0e73e08a21c58cb7da64cdfd962087df6bff": "cdba6274e45ad0c6cd96c1b40fc78c04",
".git/objects/c9/7f7d2b6914189d08ab45f03afe89945002b679": "89dc3924f5f49e5929a72c4d031876f7",
".git/objects/pack/pack-18d0404a97db807e939ffcd2315752a39f2894b9.idx": "c1f59d5ae7286ca155bb33ccf3b90021",
".git/objects/pack/pack-18d0404a97db807e939ffcd2315752a39f2894b9.pack": "b48260c6bf8c7477e5fe8f025f5195ac",
".git/objects/pack/pack-18d0404a97db807e939ffcd2315752a39f2894b9.rev": "cc9bbcde5819cff0e28c7de24a8395ab",
".git/ORIG_HEAD": "c54d54a014bcc2b44854aa55ac8b3fe0",
".git/packed-refs": "54805b1d50cda447f6be785d42dda35a",
".git/refs/heads/master": "d1263400a1bfc4a8adabab4d8527249b",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d1263400a1bfc4a8adabab4d8527249b",
"assets/AssetManifest.bin": "5d8597b1cf287b243bd1c08940f78a59",
"assets/AssetManifest.json": "befb10bf3cb8115eb4d2f59f0c0297c3",
"assets/FontManifest.json": "1617bba5eb4bc84c90207fb1b2b51c11",
"assets/fonts/Fractal/Fractal-Regular.otf": "554199b3ff13da6583ec9aed2053404c",
"assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf": "8658ffe39dbfa1c12436789a50212180",
"assets/fonts/JetBrainsMono/JetBrainsMono-Italic.ttf": "348ef43cb2b4be35e6489fd9a1261ce0",
"assets/fonts/JetBrainsMono/JetBrainsMono-Light.ttf": "5f68b90fb3ae2b26792475f2e92f966a",
"assets/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/fonts/JetBrainsMono/JetBrainsMono-Thin.ttf": "4abec0295db416a000ea0d1dcec54964",
"assets/fonts/MaterialIcons-Regular.otf": "337a0eee29fd32eacf32f25fecd9df80",
"assets/fonts/NotoSerif/NotoSerif-Bold.ttf": "cd68b227ac0046292ae4975cf76ad561",
"assets/fonts/NotoSerif/NotoSerif-Italic.ttf": "718cf13c7a5f059e8b51e0b42c7cbe65",
"assets/fonts/NotoSerif/NotoSerif-Regular.ttf": "ceeb2cf5944c44d51fd3e6b3733e3aa5",
"assets/icons/CustomIcons.ttf": "eea46386fa4d694adc48c24fa361928b",
"assets/images/animationProgramming.gif": "96f4a21bf4f7db08f351e262130fb8ee",
"assets/images/backgroundTile0.png": "834a4af50905e3a6cb6aef4a0e5b35cd",
"assets/images/backgroundTile1.png": "883438d157c4c6ad296d75bae92e3020",
"assets/images/backgroundTile2.png": "1489af0252130dbec9587c26123d4738",
"assets/images/backgroundTile3.png": "1fcd696ce0c26fa2b96f9f0ebd0dd781",
"assets/images/bass.jpg": "adebaa4423ce5010e571b2cb77919695",
"assets/images/cannonWarfare.gif": "4e9ff6c0acdaf4386abeb89c886acc98",
"assets/images/dungeonEscapist.gif": "79d5e8166dcdcd06230c228934f44f1d",
"assets/images/fractalExplorer.png": "f834a589a4edf7a39b3c36405abb654e",
"assets/images/geostorm.gif": "3434fd180d1e5732556b5c5c2f811e1e",
"assets/images/glEngine.png": "39e84b7cd914f6f35ebf24a1b4e4bcb6",
"assets/images/guitar.png": "7d5be345edb21a84cd6c341923f241a0",
"assets/images/hiking.png": "ed62f91b5534a52f829d152dd611f20b",
"assets/images/hungryNeko.png": "1eeca64bd8793408a5551f9874c4dc7a",
"assets/images/minestorm.gif": "d5684a4f660f728f4b31c6f46c26aa09",
"assets/images/myEngine.png": "39e84b7cd914f6f35ebf24a1b4e4bcb6",
"assets/images/platformer.png": "05881e37d5776c3bebf1f2225f36887d",
"assets/images/portfolioPhoto.png": "93394fb305a8fee94083b3e9bcf5951a",
"assets/images/portfolioPhoto2.png": "a483b55255e00bbbc526745f73ad72f0",
"assets/images/portfolioPhoto3.png": "845a4cbe17918db104d23f5bf9605ec7",
"assets/images/portraitPhoto.png": "b147688e2037c4d2978b7ec8694ba95f",
"assets/images/projectsBackground.jpg": "15a7efad775004567ee20b2927b1317d",
"assets/images/projectsBackground.png": "7cb73b50d7700cf562b30e29d150226e",
"assets/images/rasterizer.gif": "e9de4364f6a4dcc2e3f0fb1d83c29ab7",
"assets/images/rubiksCube.gif": "8263b46ac0bf51681ebdeea8c4a007c6",
"assets/images/snowboard.png": "e78bfb70b0727b933ce81bc8cc684989",
"assets/images/trashDestroyer.png": "9ce36975319f78284706ea35d5b70c97",
"assets/images/treeBound.png": "46cec0be851898a69b83c210c4be246c",
"assets/images/vulkanEngine.png": "d9f77769d723ec73129b69bc970edd5a",
"assets/images/wakeboard.png": "835dc3a711f87c7a88be3aafe4a07288",
"assets/NOTICES": "9bcfb1dd140497695b6b61f97d3a9896",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "b292613e9e4d75dadf308c2bbcb1bc1a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "129e1c3a9553f005a8c7f3e123e9ac75",
"/": "129e1c3a9553f005a8c7f3e123e9ac75",
"main.dart.js": "2e9dd86c27de27e416f15eaddfaaff02",
"manifest.json": "ac856e757cb1a78ea4a56df14dbf6b7a",
"version.json": "0d19e7e4d546bb5c7cb53ed237320aa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
