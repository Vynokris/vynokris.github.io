'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "959c53d7de17a8ff780ae1f76e95b002",
"assets/FontManifest.json": "1617bba5eb4bc84c90207fb1b2b51c11",
"assets/fonts/Fractal/Fractal-Regular.otf": "554199b3ff13da6583ec9aed2053404c",
"assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf": "8658ffe39dbfa1c12436789a50212180",
"assets/fonts/JetBrainsMono/JetBrainsMono-Italic.ttf": "348ef43cb2b4be35e6489fd9a1261ce0",
"assets/fonts/JetBrainsMono/JetBrainsMono-Light.ttf": "5f68b90fb3ae2b26792475f2e92f966a",
"assets/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/fonts/JetBrainsMono/JetBrainsMono-Thin.ttf": "4abec0295db416a000ea0d1dcec54964",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/NotoSerif/NotoSerif-Bold.ttf": "cd68b227ac0046292ae4975cf76ad561",
"assets/fonts/NotoSerif/NotoSerif-Italic.ttf": "718cf13c7a5f059e8b51e0b42c7cbe65",
"assets/fonts/NotoSerif/NotoSerif-Regular.ttf": "ceeb2cf5944c44d51fd3e6b3733e3aa5",
"assets/icons/CustomIcons.ttf": "843f10faacf83645b84ef248b57d690f",
"assets/images/animationProgramming.gif": "96f4a21bf4f7db08f351e262130fb8ee",
"assets/images/bass.jpg": "b85eb434ed889f3e638cbe9902047a5b",
"assets/images/cannonWarfare.gif": "4e9ff6c0acdaf4386abeb89c886acc98",
"assets/images/dungeonEscapist.gif": "79d5e8166dcdcd06230c228934f44f1d",
"assets/images/fractalExplorer.png": "f834a589a4edf7a39b3c36405abb654e",
"assets/images/geostorm.gif": "3434fd180d1e5732556b5c5c2f811e1e",
"assets/images/guitar.png": "7f96b15da6537ca5d37433b2c884a250",
"assets/images/hiking.png": "caa16d990db9698648a8dd0e1cc4c804",
"assets/images/hungryNeko.png": "1eeca64bd8793408a5551f9874c4dc7a",
"assets/images/minestorm.gif": "d5684a4f660f728f4b31c6f46c26aa09",
"assets/images/myEngine.png": "39e84b7cd914f6f35ebf24a1b4e4bcb6",
"assets/images/platformer.png": "05881e37d5776c3bebf1f2225f36887d",
"assets/images/portfolioPhoto4k.png": "11ece717d18f726db00e92a7aa215514",
"assets/images/portraitPhoto.jpg": "d7362bdcbe881fe87e595e3d4147cd34",
"assets/images/projectsBackground.jpg": "15a7efad775004567ee20b2927b1317d",
"assets/images/projectsBackground.png": "7cb73b50d7700cf562b30e29d150226e",
"assets/images/rasterizer.gif": "e9de4364f6a4dcc2e3f0fb1d83c29ab7",
"assets/images/rubiksCube.gif": "8263b46ac0bf51681ebdeea8c4a007c6",
"assets/images/snowboard.png": "bb8aea1e5cf450bff797f1aa23b466cb",
"assets/images/trashDestroyer.png": "9ce36975319f78284706ea35d5b70c97",
"assets/images/wakeboard.png": "be017eb74d474f7a01f32be198b2e02f",
"assets/NOTICES": "a6cacfdd8f32675a7799304dc7467e99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c439ee2c34e3942430866d732d16f45",
"/": "7c439ee2c34e3942430866d732d16f45",
"main.dart.js": "e874bfb221fd64aae83a6a74d37c6799",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0d19e7e4d546bb5c7cb53ed237320aa7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
