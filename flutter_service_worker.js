'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "38fb3b64645bf4592947e4734bff8e22",
".git/config": "665646edc677fd5a21b5bd0cb5dbf613",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "5160ce52590d46c7655671addf62031a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8187bf250a82a0ff2f26ea0d5c36d42c",
".git/logs/refs/heads/master": "8187bf250a82a0ff2f26ea0d5c36d42c",
".git/logs/refs/remotes/origin/master": "09d01ae1b97d4e0e7f2be4aa11f42707",
".git/objects/00/10d8ef02e79a67524aa2f4666654dac858db3c": "f2819850034f5d1f7059badaf1169c29",
".git/objects/01/dec8cfffb4f28128f125ee82b5956a171ae72e": "678f78c73ac84f977ac32ad43f43b9bb",
".git/objects/02/1c6093e21dfeed9236d7aa30a830e09e3c4818": "6445ed0ace96dc707c698e6901866189",
".git/objects/02/9c526b56a5be6094be367c3d5239f55f41b32c": "f67b6861eee7086f80dc52b22f4d7884",
".git/objects/03/670377a07274b6b7e008e802dd13ad0566b999": "7cd51027752bcc4dd89be6b330d829f0",
".git/objects/04/597bf7afaf54a04580840d542e2a84bf9bb65f": "93382cbf7cf13d5826ae1b01b6e5f041",
".git/objects/04/bafb41e30750a33f0439f9dd667593e74d2b5c": "5a84729777d05cd272ecadea9a0d8f6a",
".git/objects/05/b7fe90d258caff36888dcbb10c8f8a1297bc56": "ef3e4c16208e05ae328b28b15ddf3c51",
".git/objects/07/19512704c93e72e5687e84803b11e18a394e2a": "6ae44b36fa7e23b6b9b26de26c307c81",
".git/objects/0c/bc4dc4192986895087e3940b69ac9103f8697c": "1ec4dd2583898cbfef9f0334f44982ce",
".git/objects/0f/25df11b6901caa5bde3a041cf7f9e622cf7608": "30952aaa8db40df3e5072d711176f4fa",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "3db61a28ddf5b372a0bb9c1aebee3548",
".git/objects/15/f15a2a121f3544286a7ea5ba886c56552e99b5": "0fcfcd5a5a50d32400d7f8c030b62765",
".git/objects/16/fd5c99df0c7558332f74757569bb19643efa9e": "8c920a810a0b15a2bfe8d0f30a23dba4",
".git/objects/17/fa39bfd0970e46f92ddd1f6d761460b151d438": "d668de2d37a66c600b8ae61d2c0608a5",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "114b34e87e858dea9e03cdfec40d8ce3",
".git/objects/1e/8068be658b48873c21c33befecab48243db6ef": "6dda40bd8bf369a2cc96af91e9fd7428",
".git/objects/21/4890874ec9157ee1883262bcfbf3e37a255af8": "491a54c201a7b387a18f1bbd943cc724",
".git/objects/23/7944fe762884b6d6b07ef436335df7c07c97a9": "ee12f1208d6cfda98906b9d2e6c205cd",
".git/objects/26/adef6fc03fd57ebd8ce06c101ddd47daf88e06": "cc70bca5d153cb90dca400fe6fc123a5",
".git/objects/28/4c42e5772313a2dc84f989cf4ab748a77c8839": "8aaaf437111010d3c87e8b434f4dbb91",
".git/objects/2a/50cbcbd62e815a0417c0bc05c1828ee8970af0": "943c9cc88961d7ea47a2237f02ee45f3",
".git/objects/2e/138f67654edcdea9f1dd1544272489a5f42ad1": "8bc60672dff5b60be48229259b29dbb0",
".git/objects/2f/a830474370e45790d526dc6d420faebf5a30e3": "aa8f8ca19f68ffef02923a22cd235736",
".git/objects/32/dc835c6032fad7516ab3b6ee69be37e1427861": "bdadd8e42b1291c23245e156b69aaa3f",
".git/objects/35/0e082bfe1da80d1e336b46e2d9c9bf440c82a1": "7f77f6319c2f448547e49e33f8753a35",
".git/objects/37/659c0b5c5e43ab87f2bee7b77969301ce392b7": "44129366ddc691c3867649558dae4f67",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "f6a1e3b656df3863b6998d73be3deeae",
".git/objects/38/b996b0adc7c6b45ae794578aa16786434f02ae": "59554771710dde7d9288580857e058cc",
".git/objects/39/472ece5e0c884344f72493b9570f2b7ba6c823": "b729f306cb978720f237009982a2134f",
".git/objects/3b/7d2ab34d9c9876bdabcdbb54cadb87d884f5eb": "b134dc12047e9b08cbeda337f955f212",
".git/objects/3c/34417426970f6fccd39940b35e4c11ffd7e23f": "5f1103c1a55b7ad0831ffa6fdb1cde69",
".git/objects/3d/9dcc1211e228fdae2865905ea1ed3cbf4a0646": "2c13da8ed0ca24f466be1353674d1c93",
".git/objects/3d/ce08cf5c870f81c5a619866323c520adb19719": "9d985077e1109c4f019300187c39bb80",
".git/objects/3d/fd626a92f37c8cd78f96da6ab5e4345d7b99ba": "12e62d562a7cf90ded8420de43eb9f65",
".git/objects/40/7c9e6af071cabbf64995a97700dd95c638b030": "48100573e5c8ca70205fee530bbe86d1",
".git/objects/48/7bdbe23e59edf53ae933b7b10249d0e1e66f9b": "186d438c7c352ef1b8f3945019e9ea8e",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "02ff1c25a33d1347946d8ccd1885bf56",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d1bd03faa2307e273558a266af9137e5",
".git/objects/53/336cf4d6de7638b0d9c30655b299eb19dee3d3": "d1bff31e13c865d10d14b4418c7a4a86",
".git/objects/54/34e4be417ff45a7dcd7b693c99d4d603cc970c": "2d2787f1d11ba17d956cbd6a8757f1bd",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "200a539a6db680f00ebda88e58ec57d8",
".git/objects/56/cf42bb4452383bc1eb345444c0567d4dd4efc0": "6bcf56ff1c8fea25f2ddbde44315b6ae",
".git/objects/5b/06972bf76962ae386841d707e81002a831c179": "4d9a0c2a8e3165d7e9c3d383716fc72a",
".git/objects/5b/6030609d46c975e41e5c1f8b1f0f5f79b77560": "bd593e041b1ab09fb465e52f86bd466b",
".git/objects/66/56d4eada0a3a70315a35820342e521077f8c5a": "48095a59145fe5052c767c5c2dc1791c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "454a10f9082528f531c074c87e154f22",
".git/objects/6c/78f04841cc3e048e81be2296e953b0a4711816": "62d27f22570362bd369c0a9bb829d374",
".git/objects/6d/5f12ca3656941ba65c5dc6f87ca1664f6f192e": "e60a7c737765e1ea97145565436fc355",
".git/objects/6e/7a20d92a85c7246ae53793f6489733e1681382": "0bd03b4717165eae37cc39b087a594ae",
".git/objects/6f/96ebcef8984237f0985dc7b1fdc02c51028886": "1891f0d0d98e512a61489b67181d9776",
".git/objects/6f/f36318bff43878b93f1deb785d3a0ef1202138": "877c33ffc9fb696334d6718b04a45df5",
".git/objects/70/051fd77d29b99dcb1bc96d3a5639409ebf99a5": "da0194a7d75cbd803deee3857e944dc9",
".git/objects/70/98638b86c8119091fb845a7eea34fe7a1a6ba7": "87ef9e399316bfac7fb4e26d012ca33e",
".git/objects/72/05b7cdfb1ed0f43727072cb29a4195f685d637": "1d6683fd356a0316aa992e7260cd0603",
".git/objects/72/5afdf086b271ddedf50865bf9542248487a040": "7314b2ebbfb2306fc87354b00bb04573",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "3c8ba246dfaf5e6cdaaea434b3d04156",
".git/objects/7c/9a46ad16fdda7557d1bc0cf9f5343c7cb1f42c": "4a46cb0314052e5f0c51794d2ad3d554",
".git/objects/7d/8f8fac756445b732b7e809e970a971008b6491": "e6c52ba491d67fc8d746a56212cab3b7",
".git/objects/7d/be2ac6ba53eb0712c4d1985f0ab6570f20be49": "7cf7aafbc3792aac15f0e83505a8baa9",
".git/objects/7f/2e8b6a5dd937c589384226c0fb9004aaddbb52": "b03f2547079fb600c47cbcd012604083",
".git/objects/81/4a074b8f2093f3e82d07aa6dab5492c023d6de": "3f1563fac226220d4911ce206054bf63",
".git/objects/88/4fa96d1871d531f036f0da80a50c4edc6c45a5": "547a0886027356fb960acf29db4975e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/2423b57219f18bf201616236a45d3fb72c85c6": "096713213620d6b131c297bcae6cc87e",
".git/objects/89/295dac114d1839f71c26e4bc8dccccc72237f6": "714e4e0ebbd55a6e8849a3abee71ec1b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/93043de6454ad2d5575f0751150c6551d9c588": "d4b8f213c596cd030e71ba1a80fd1afb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "63242b0c4e2a03e33006e63cecaf7cdc",
".git/objects/93/ddd88b4021169509c9f49ecc9faed90ffe77f8": "ed9065fc5e07e10984676dfb977721d4",
".git/objects/94/cf7bded13b90fdee83529858a1f00b9bcdbfaa": "0a087cc18c625258f005a251ada094a4",
".git/objects/a2/8bbd9ede3485a8a008c9da60b5f6ed67e18b70": "f205d9eea0112ae1d3890e2dedcf58f8",
".git/objects/a5/dd19c2bc8161ee4b72fee49d7c4189f2c651b7": "e7b973eb88fe52a151e4c6d50d01480a",
".git/objects/a9/06827afd8b0ee63296f96207c9669d86f595c4": "8d1bb142d185f1953daf60ce6f71e8e9",
".git/objects/a9/f256c048066f9e336e75fd70ac0e77654682b8": "da791c18adc43ba1b8cf389a697c7120",
".git/objects/ad/ed938ef1860c266826634f07392ae768509bf4": "d9414e96ffce0555f8d9a1ae36a1dabd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bb/48dd47a268184f14a61829a9277e3a5e8945c2": "19c60de25875ff085fb7c75c95b5652a",
".git/objects/bb/ac8bf6b53cbf3a051aa11457a45f2944609c10": "edd3b11ee03ab37f576f24182e54848d",
".git/objects/bc/d48dfa775202ff2ccaea0c9c53473ffb2c21b5": "c69073a393a828b5ddb3803b6a7ac050",
".git/objects/bf/78c2f55e47010f24cc98bb2ba4f04cf2bb30d7": "700fb580f60d4dc661a54951eb4a4353",
".git/objects/c2/2a6f7df221bcc1ef88a0ac0637134359cb81d0": "d841ad51cde2a07a320c9f9f12f6f300",
".git/objects/c2/8a0d1e0d0b14f9641e12e23719b8c633009428": "3d0ed38b1a280a71f0102017e8a36347",
".git/objects/c5/5d2fac83b9cf182afb0cd8df13529c5e334538": "298cd001ea3ebda28a8c15dada7c9aba",
".git/objects/c5/98edea4ed3c2cf44eca627757066053c26770c": "5b225eb0a3f7e3ffea17b68bd89ffe15",
".git/objects/c8/3006bb46a0bb2c4bcab42e84c9fc81004bb2c4": "48038add19eb87e56ed315b1630ece05",
".git/objects/c8/eda009a4e0d17563eb8e8a391f29a8d9f5d64f": "e8631dc2e7f5b3ee5606c573b83da9c2",
".git/objects/c8/fc6949ed9981ec1ec45cb163741066be6de303": "c7667be9a94e30c5dff57e58eabe01d1",
".git/objects/c9/53a34c5dae1715428bde9775c5d7ae4b5f629b": "d59818291ef3213024a817a3fe0ebea5",
".git/objects/cb/c97ba5d06a3052d7bfc05ffbe4b2d68dfe6fc7": "6ca278558c426fa5f816d00ea2f61830",
".git/objects/cc/c9d6a5bc15ffbcce66f923bf3d7999c73ede84": "5e4f3c8ab7701e78ea64175b9512f370",
".git/objects/cd/d5a4b66b4c2805d60f1938d9b4548926a378fe": "bfcc98b06fda8616f87507094286ca57",
".git/objects/ce/4ee90359a88994711a4575d28ca6f6e7600a3e": "75b0750b8bb562c2b57baf146bb308a9",
".git/objects/cf/c35d6407813e152a2134cbf4a7b590ce7a3ba9": "5d71fdd4853420270bef13e313bfbc87",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/de/e1aa29860082c8602b768e8aa06179ffee1c87": "44ba902fc6407187979004c421a7a768",
".git/objects/df/f66cc50702c75abd025dcf49f62a4dcc2d72de": "7cffb58a37d138e5e0b6dec26da0a3c1",
".git/objects/e1/c75bd33a96849e586a79902c8960239b8fe628": "75f593486ae14a9c056e1cb0e2780991",
".git/objects/e1/e2a73b535f3c1897b20d58c996bb795e7fa9ae": "4d73b85a9c6ccf727a42e86cdf78e51c",
".git/objects/e2/efc369030b77b0b8611f3ae9ebfc0b51f7afe1": "e02a134a7cc0f3978f71a284b9f7aab8",
".git/objects/e2/f60b9476f86a0a40cab9299f855548f961e1b9": "ad7b9ab14d9c250c79fe1cd322edc453",
".git/objects/e3/e75463fac55ffdf26e9a71d45dc94372ef1407": "8dd309884e48e95a623fa4c1dc4f0d16",
".git/objects/e4/e9012e29d231d3c1fb2787d3e1ec1369fc726b": "4b361c997491ad49668abcb04f94d1a0",
".git/objects/ea/57b7ba96267354e2050c59afc27d6ba5b8e3b8": "f76bb46cf7fb5d2345764c423357fd9a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ed/21e53b8c807d49efba81ecfbfde9cc126f3914": "3e6899e9d9ebd34f8002f0ea95c50805",
".git/objects/f1/1cde490552666103fc13f73decfabc777897e0": "71ca68d777164f34af2e8ad21e9729c4",
".git/objects/f5/c9ca7d1e531c1f9dc3e3ae9ec2b4137a9e912d": "5c3374248db87ab1fca94f61031c0f59",
".git/objects/f6/9296706b232a7fef80ac9751eeae964646a7ba": "dfbcd9d00e54c0332974c4d9bcd7ff12",
".git/objects/f9/2abe58511126ed25d70f57881fad2321228b6e": "5e93cfc51c62bcf8c1f0bcf151362df5",
".git/objects/fd/737dc67d3d9681cd3a9ec6fdeb088360aca2fa": "0431296deee32b848ed7a6f74a4563f5",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "d592583bcdeaba6e83d542f0b4d5d734",
".git/objects/fe/86479c795ab437c557b291ea5f97c3ade17052": "9d152157297a345ec05e0db61b2ddbda",
".git/ORIG_HEAD": "9176a9168f9cb87f4b2f6bb4843c5ced",
".git/refs/heads/master": "2f65979078aa260e93c7b15c0a6c2aa6",
".git/refs/remotes/origin/master": "2f65979078aa260e93c7b15c0a6c2aa6",
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
"index.html": "bdb74ee1c4125d5aff424229181ea363",
"/": "bdb74ee1c4125d5aff424229181ea363",
"main.dart.js": "5bb8a4c30623dfae786b2a7bf0810af7",
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
