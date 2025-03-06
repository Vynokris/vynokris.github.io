'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f7fe5cf7052320e2a16cacae62cc52c7",
".git/config": "665646edc677fd5a21b5bd0cb5dbf613",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "55bc9273598bd372c13efd0ffa537b18",
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
".git/index": "010455b4e33db388a87835f1feabc079",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e978e18aaa70de58d360b4209956c3ea",
".git/logs/refs/heads/master": "e978e18aaa70de58d360b4209956c3ea",
".git/logs/refs/remotes/origin/HEAD": "c8a906d5b824cabcccb321e6c7c33efc",
".git/logs/refs/remotes/origin/master": "d5e76852bbc1d1a95cc8465ff3e5824e",
".git/objects/01/0b2ac7ad865ea6049f895eead366a4b214cf70": "f85e3e9f339133dc1910f8e08d237ecf",
".git/objects/04/364726421b10011159142bd0c157403af72453": "2ea249f0c896b863d2d8bb0f9fa2ea6f",
".git/objects/04/c48648a947c13826800e2d8a2a304469647821": "e4f3684f0e68ca69cb4157f9c81f709f",
".git/objects/05/4f944cb99de67b5ea2855443b3e696eb7868ea": "1e3851d7bcaad33b16577cd3aecc2124",
".git/objects/05/f6824663642f192be811d1d1cc86ae1a2a73b2": "c6e9db73a4818baac2305ec57d5d6d2b",
".git/objects/06/75669d3f8b2add251508e1d4963b9f43b030da": "ab0e0282bac8a35d55849101fa9c72bb",
".git/objects/0e/cfb442e18ae84aae000a33314b9caf49f1ae1b": "d26d9e268bc4bb2deecf1d846e757093",
".git/objects/0f/b81b2669e086485a8b727647212651a8ec3dc4": "d322df2b7d38653d12b0945d80050b81",
".git/objects/12/8800b5890cd1a51a31959b608e04b9893e3088": "a47c214096a9ed82ed75a8f6e0e2654b",
".git/objects/13/1ee98f53950db7b3418f5a87cbd056fe2ffaac": "06f49cfe9521cc62ff4e21ed3ff47e7c",
".git/objects/14/cbf95bf940cc8dada77991cb1cb1c10aa7e991": "4b68b8bb8752f2d6cae0f3a623824b3e",
".git/objects/16/0cf0f1af807437826264686bd8e9567b0af171": "fc387f75af4bbe92c6afd0b921ee26ea",
".git/objects/17/e73349a46e2e02b755262cc6c49a39d46d18c4": "49e59151f3e53cfa79421257c3af97b9",
".git/objects/18/a6ef06a00d00bacc90e0a68d774964ae24be27": "df0d02e2d42dac0cfaf74b6d8d1433ec",
".git/objects/18/cfb50659a67d0f6602b58133b5ad6de8b0e9d9": "c29e37ddaf0dea6eb88f7529faec6bfd",
".git/objects/1b/795e952b68a8b26f8db4985205d4773ebe202c": "bc7785a8510d1cecff3a07b9b891d233",
".git/objects/1c/b75e9c5f2f9cf4cb6d980d9d228d0cc6db6be0": "b686213b52e0c179384b1012e2744e4f",
".git/objects/1d/2044efec58bf5eccd93033135ef87691469a87": "42819d94cc1280e0d05ac3beced774f5",
".git/objects/1e/e531d50ae88a203edc8d52ff063d4c8ebc933f": "ba152e12d11bf29160dc44cee383ab26",
".git/objects/1f/54ea1ceaf1e6bc116dc9cd001fbc896a4a7abe": "a863f96ad068ddfbed3c4c9c00f0acfc",
".git/objects/20/4332f497c72cc2301bdd0ee22599a4f94252a0": "b7837d69cd6a5dc349e60b0f08e59427",
".git/objects/20/58b87a062e4bbfb58d5ca69cd4b2ea6df2dcfc": "e282e7c9c5796bf3ab7ba706650c3d00",
".git/objects/23/232e2367b6c246825871c81221ee77d3c3e44b": "2a73d4e6303f561c664412391caffe7c",
".git/objects/25/055f2628322d6126b8d76c7884d9a8f07168c3": "29be2573ebb95af6f90500c467bc5172",
".git/objects/27/35460bd45c5f390e0691488c2b67b218eab4b9": "df845240b8079a40b3a783c3d2fa972b",
".git/objects/2c/af88ee6dbfb782adb487bf194fbd801a78a961": "aab2cd7b17f694d17c20da611eccd164",
".git/objects/2e/33ad09e2816e6a9cc9b109f17ed54c2fc2f1bf": "3a5513644ef512dc5f0542a503358d56",
".git/objects/35/6e3737581cb3542f2ba12cba47017f8ac70816": "2c62276ffa6d4922fc08c0f21cc5e73a",
".git/objects/3a/bc3065cc548afc883882c72fa79f59ab921553": "3740555e617cb85ec001206ad8b87a01",
".git/objects/3b/b75e11b735d5dcc993339535e044b89b9dde45": "dbcc774a3752434513eadde94f2415b8",
".git/objects/45/109fed8d7a6ae5a32a98de1ba2c57d0fe6153f": "dab1fc392899453e35af889eb36e1a2e",
".git/objects/47/91186319bed2c4cbc5c54881c9d230399fd1cf": "fcc43bec7c5ae3e4b4143b7cf121f68f",
".git/objects/4a/0c98ff598da1b56b582c14dda31dec3d2d55d5": "2a4e25b15011c1f8e1f6231cc8fda739",
".git/objects/4b/ce87d8e54544e001fd78b3328c8442f996a150": "a8789512aa1a44532b773dcf9207e43d",
".git/objects/4b/d7e00bbe8da75b5c854c83c2d2f10563e46e26": "18431d75b5346fbddcca2213db405cfd",
".git/objects/4e/42ffff397cc85dd4b831f9fdefa8a440fb55b5": "61709494feac1ffdc4cd1169ea403cdb",
".git/objects/4e/68e3f4d705442b6369167f06c702e4cf59108b": "96a2b8533c32d887356daca7c048650e",
".git/objects/50/14e9e904254cf1179feb06b2fda0346a53e705": "59ee9b5751db4d5d115bfebc16bee37d",
".git/objects/50/fb4bddaa6a4c2e55de9d79f66c37c398c409d3": "7278ecc7022e936ed7a8102cc7ed3ef9",
".git/objects/52/e9169f77ae7e326ef16e5d5467be5c2d9b230a": "3571463ba59318047664a17a4eeeb9dd",
".git/objects/58/17dc6fd2122e8dcc7f266314e53652b4df34e1": "3bb1b1cc4ebacd6ce7dbd3d4dc51f4d7",
".git/objects/5a/7760f4c6b4902b034e171c3a5bab4be1bd30a2": "4a4402593933269fa787b22d555e92b6",
".git/objects/5a/a07c078ad22be3937e97266be26230c39d97c6": "03d512acd7e99f05e2448f00ecf00471",
".git/objects/5c/d5e3e65560200bbcbad6acecdbc82a9adebbd2": "2066132c645f5e88fdf17c5893a6357f",
".git/objects/5d/67221b886a77548647d7ba2148b76595207fca": "637e91af9741032ba53fea31f568e221",
".git/objects/5e/185bf1040205379d64fd62f4838c003a8a775d": "ede6062a0af535ae472f727396293094",
".git/objects/5e/56bd9991e3a4ba6e314bd27d1f541764b5b758": "6ccd13f3da8644417e214917e66741c0",
".git/objects/60/37a2b6357147e707147e5efb347bd4840a81a6": "068423f27559b35ba6b8edf2a0a5c036",
".git/objects/63/c0455fb828826976b524f49a52a4819974b5ea": "8fd8b378eb10b03d0bf10f66a59d6e02",
".git/objects/64/86226f695ad88ab5cbe2096cb26b46cdeb69cd": "e8d29407dde3c7eda04e1f02ffe62433",
".git/objects/66/4459b354a5c9b86f6750ecd45482f3732b67de": "0130cf831d1a81bfd7c5f232fd4b91f3",
".git/objects/6a/b970e8bdc77040bab8fbd9e4faf4298af72036": "f410579dc3e282237f45014672310007",
".git/objects/6c/c264eaf9a9c1f3231a09ed435d68d426efb592": "a37135bc81d27d512d8ef2bd33757574",
".git/objects/6e/8b7f3ceaba19fba363450cf788c2f4c5597b75": "bb391b2857c6166587b08ff5beb8895e",
".git/objects/70/4fde51a71e5c4225a4d79094aa49d93d8d97df": "b0f688a6c6c66cc056c96665c3735dcf",
".git/objects/71/5833f98bbb84e7a3121b47bf3f2d7972b7d402": "8476bd3cbbd046b2019a1af6a6d23222",
".git/objects/77/40874fbfbc422880ffd0b27cb03f398e0220f4": "1d4343c85381704462b112a1d05c2208",
".git/objects/77/c033b2e85840ccb6d729f98b9827183b0ac6c9": "47ff3cd813723d418f1a187dba157037",
".git/objects/78/d0119fa041648c9f64067c57a12f472ad4511f": "80e57146079fb1d3d1144a46b9b344d3",
".git/objects/79/0647c099532344bcc77ffbef0ecfd8fd0fc5f8": "8f8abcf0ed40dce1f8ccd7cc88c2220c",
".git/objects/7a/d2f3e884af4e2206c6112c921114bdebcbbb4d": "09cff9581702362363a6609670a86ee2",
".git/objects/7d/a96d09deeeae9bd6ccf642bee3bd00b836c239": "79755f85e726103ad49d1157188e08df",
".git/objects/7e/f6480dfa37ac76ce8a6d9cb68ccdd4248baedb": "41bb4501472bbb0e1c8302d7590253c7",
".git/objects/7f/9261128cd569e95b0c7cc06c021e2a9645891a": "274ff8c4ae31ce9bcf04dfff0885e197",
".git/objects/85/3eb49fcb2887e4f249a0465856fb3ca6c99e66": "7af9e57d60fedda3218a5359ec645f9e",
".git/objects/85/ded5c53b02a9ba782c495a6960970157521e50": "989ddc4e2acf0bcffe32f59786181f87",
".git/objects/86/bac2aae8de6d6820279760af907ca80f785b02": "84ceecd18a36621471b2d0686a8cbefc",
".git/objects/88/8110b0c18ba81f394cefffe5ece869064adcd2": "4856777e3cb01ef1cc0dffe1b5b8a5d3",
".git/objects/88/9d683535fc10ebd0821756d397d617ac9b5f08": "6a6398bef9d7d5bf35d27460584b9a4d",
".git/objects/89/3cc8c6d191b88936143343d10f7ef410d3ce27": "12303f811f6e63c0280b4184a40c52f8",
".git/objects/8a/66ce487c8b629d769e366a39c65518cc6c87a9": "23d2467efd1e990bdfa60da45d0a4e7d",
".git/objects/90/279b0ea30788841fedb71589a8964c19008efb": "efd2a1d0aca4ca2be5802b5fcd015007",
".git/objects/92/76d305b40ba98b6cc847d7583e0586ebf8783f": "75afb6a479ef76290abaf3e0c5340f00",
".git/objects/92/91293588196c76e97142b979161653dc27eb21": "f114c362e3889ca6603b227082574708",
".git/objects/96/434536d36617251d5230f187dcc6ccf9bcf7d4": "16d226cda4be518b67256342f0ea7eef",
".git/objects/a0/13a41ad3acbaea36fbe032882b1bd6abe694e9": "54c2573657a965844f7e54d64a16c884",
".git/objects/a3/6069e4a179a51f5c8b83af358315f9c1135b2e": "6e7af7e57ed3d0b252145b886af34707",
".git/objects/a3/f0ca53fbd3a8a83bd32b8f0369301df02c9bc9": "614de06c7ba11a27335fca61b791f942",
".git/objects/a6/b91308630eb627038b4af73bc7ae24a288ea26": "dfca08818229f7d464977f6f813265ba",
".git/objects/a7/1d7b7e8c55f9b747b170d1abb4363505c290f7": "938d57f3043b7980103531c35500eb13",
".git/objects/a8/fbdbe7970cd9172651f1510db73bd2cb558bea": "936730afe9371cf93af91f4ce0c190ae",
".git/objects/b1/5672f5d3df602e80c39952ebf82560e76413b9": "72674f8a4600133f9a759c11a10739a4",
".git/objects/b4/b2a693b67ba3e92d38805c7fd6c196e2a0f477": "55e035324ecbf95557dd21b0fc64c68c",
".git/objects/b4/f4f3b1b5ffa9f779f21c6819f5fd0e2c2eb931": "31178d170d14821124eeb5911373fef6",
".git/objects/ba/1010099b4362f8c8a7f943a22c03de8a4004f6": "fce54515281bd45670c6d5165045f6a2",
".git/objects/bb/6cf5eb5f21dfb888666beaed5361c6b83ec011": "dab0b21616a73cdb92db790927307f7e",
".git/objects/bb/82d0ead1360c79f76f0a25bb4bc5b8b2ff7882": "a319043c7b2076deab84bfe718f307f4",
".git/objects/be/1d023391294fd20136a1eaa114db4169065d58": "fb58b7db6d373703d14ef80b9c8928bd",
".git/objects/be/b1e59796e7049524d290eec6c695dc5a45d775": "8272525679026df7eb462a92c4a32c44",
".git/objects/c2/7842d5f7ea0af70e40787a96e3770bc080a53a": "4de1de3cefe038fec154d45b9d2474cc",
".git/objects/c3/6b9136d5327b55db1c1b07c2688f01976e3d5e": "95714596aa27d064f6467570b07f4529",
".git/objects/c3/cc826f985b32cbe96fc4913a3e02a3927a5a6c": "cfec77a8d03ff50b0f4beed2f78543aa",
".git/objects/c6/d1109c2bfa1ccb919eb5bc436b1cfe123df35e": "4a753fc07d032585871b71c3305faabb",
".git/objects/c7/7ca4fb68277a6ca87f0952f3c211b4c8b2e0ff": "b91a32d6327419048865d28782943f40",
".git/objects/c9/0b0e73e08a21c58cb7da64cdfd962087df6bff": "cdba6274e45ad0c6cd96c1b40fc78c04",
".git/objects/c9/7f7d2b6914189d08ab45f03afe89945002b679": "89dc3924f5f49e5929a72c4d031876f7",
".git/objects/ca/302475ac5c0928e397be12ed700ff69ae8c574": "affe049c3f62431a02f9e146f3f668fd",
".git/objects/cb/781d0564c38a7a5ab61853ca2356266f294e06": "b4fe61b91510fbd1966a6cfc5e0c38a7",
".git/objects/d0/74b4c8f812ea2c5c9aa456313ed4b2780ab08f": "e80c480631918a17cb27971ec8db81d0",
".git/objects/d2/2c32a09e30edbff0df4679d10cb1d7c0e95a3b": "c0938d106916953d8719f7c1ac6b5e42",
".git/objects/d5/435cd8048edfe2ddfb13fe7f2b854676c7b8e0": "c7f3a8b4a5a822bca25aeb732db2ac8f",
".git/objects/d7/10edcc17a985103bdbec9959138dfd24f54840": "73e4b4ec758bdd633c4fa0874ea593bc",
".git/objects/d7/ace4b77a8246c7491886cc79f4d5f0ab9089f0": "e2622aab5a76941ef7658743c7982e63",
".git/objects/d7/cd026e3766dd91d35abae0319f24169eea9678": "6d9b6ae858a9798c6164d4415a219bfd",
".git/objects/d8/f498c482e8f0284bf4e46c6f29d2cf026d4c73": "9f57b23864d8ca620f4b72e802b04257",
".git/objects/dd/fc8c4efa4bd44244e4d9b26ce75b127c152194": "b684c3bb879f52ec223f9ed6ddcb53f6",
".git/objects/df/41f4000473a89697942d4cdae3e4f3ee66f9e8": "ebad58ffef3889abd92ab81fe629b998",
".git/objects/ea/31572694e5acedef87b2cf93f427b68e9710ba": "19422e9d3997823c6d820b8a67b91d05",
".git/objects/eb/128d26786909987ea04a9fd85db55c33bcdc6b": "7d71e46dd2052f606123f7595124ae6e",
".git/objects/f1/ed2059eaf372442477b66219c14870d5474db7": "7a3ce593cc6e950a9405703266ccee31",
".git/objects/f3/57768d6cde5115058ddf56cc7b4167a0f90c36": "272f23bc61b3794fab1b4288b822faf1",
".git/objects/f8/3509a3ba5d1571e011b31d17cd738730f089d9": "1282d825a8897d78382ceb6a3bf5f1d7",
".git/objects/fb/2ea58fdbb0e1871638771eef9408ee08f66f73": "d4ab839d6f23c6c4625329a684dd2ddd",
".git/objects/fb/eaf70fc6eb8781b35c25ea2e4d3f257494e4c4": "05953408b4905f047a7d83751ed2c0f7",
".git/objects/fb/fda87f9052cf26168082d80550bcba2951b634": "653ff0a116e3cab930be9e21f010b88b",
".git/objects/fd/d80f8a61ecc4268af2787cbaca9618e1d7aec2": "f22acdc974b5408b64fac59ab69eded5",
".git/objects/pack/pack-18d0404a97db807e939ffcd2315752a39f2894b9.idx": "c1f59d5ae7286ca155bb33ccf3b90021",
".git/objects/pack/pack-18d0404a97db807e939ffcd2315752a39f2894b9.pack": "b48260c6bf8c7477e5fe8f025f5195ac",
".git/objects/pack/pack-18d0404a97db807e939ffcd2315752a39f2894b9.rev": "cc9bbcde5819cff0e28c7de24a8395ab",
".git/ORIG_HEAD": "40c6ba396d7f9899c9a1d4b99992196d",
".git/packed-refs": "54805b1d50cda447f6be785d42dda35a",
".git/refs/heads/master": "082c64ad6b69f09c2045fd11d4627089",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "082c64ad6b69f09c2045fd11d4627089",
"assets/AssetManifest.bin": "19ffda6ed70eb28853f6394086a9e390",
"assets/AssetManifest.json": "229b771a57be4d86801f91ede6c5ab4c",
"assets/FontManifest.json": "1617bba5eb4bc84c90207fb1b2b51c11",
"assets/fonts/Fractal/Fractal-Regular.otf": "554199b3ff13da6583ec9aed2053404c",
"assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf": "8658ffe39dbfa1c12436789a50212180",
"assets/fonts/JetBrainsMono/JetBrainsMono-Italic.ttf": "348ef43cb2b4be35e6489fd9a1261ce0",
"assets/fonts/JetBrainsMono/JetBrainsMono-Light.ttf": "5f68b90fb3ae2b26792475f2e92f966a",
"assets/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/fonts/JetBrainsMono/JetBrainsMono-Thin.ttf": "4abec0295db416a000ea0d1dcec54964",
"assets/fonts/MaterialIcons-Regular.otf": "bdd1448913987952519cb49eb8d5c96a",
"assets/fonts/NotoSerif/NotoSerif-Bold.ttf": "cd68b227ac0046292ae4975cf76ad561",
"assets/fonts/NotoSerif/NotoSerif-Italic.ttf": "718cf13c7a5f059e8b51e0b42c7cbe65",
"assets/fonts/NotoSerif/NotoSerif-Regular.ttf": "ceeb2cf5944c44d51fd3e6b3733e3aa5",
"assets/icons/CustomIcons.ttf": "47f87b1b7947751c1ca9f308dc5eeb5e",
"assets/images/backgroundTile.jpg": "9a7cf7e7b3a7c11cdc14d41566b9b723",
"assets/images/hobbies/bass.jpg": "adebaa4423ce5010e571b2cb77919695",
"assets/images/hobbies/guitar.jpg": "0f0f4d24f651f264e49b1eb195f27759",
"assets/images/hobbies/hiking.jpg": "d0104d1bedbad5bdeeee58fee503ec8e",
"assets/images/hobbies/snowboard.jpg": "1648bbc53ce495ec84ee19d1a9c795c9",
"assets/images/hobbies/wakeboard.jpg": "2825aa266c6be34dda7189862a5c9024",
"assets/images/jobs/arianeGroup.jpg": "b7d2887526bef2c3af2f937e7484fb51",
"assets/images/jobs/popcornEditor.jpg": "29481e4afb615b4e17bad4db1b390165",
"assets/images/jobs/popcornFX.jpg": "ef8c6be77dcdefde5a04ad2a69df13b5",
"assets/images/jobs/trypFPV.jpg": "8f3506e64954a3329fd2536485c716e8",
"assets/images/jobs/undeadBattery.jpg": "8ca35b2058b9a758563d5e4be53e49e9",
"assets/images/jobs/VAST.jpg": "c7039f5edd4bd118a459f2f793d119f3",
"assets/images/myEngine.png": "39e84b7cd914f6f35ebf24a1b4e4bcb6",
"assets/images/portfolioPhoto.jpg": "bd9e39f8150388e39f6bfad77f5152a8",
"assets/images/portraitPhoto.jpg": "28da0bda10824d02d4997e0ce0bec94a",
"assets/images/projects/animationProgramming.gif": "f3df2d17433c46e27cd662aa5fb45d1c",
"assets/images/projects/animationProgramming.jpg": "e32f563ee3ffb92391164973c4a17628",
"assets/images/projects/asteroidsAI.gif": "4c3d826bd7f9fdb870821203e935d0a4",
"assets/images/projects/asteroidsAI.jpg": "73b7fec248cd38ff1e20192bf8633125",
"assets/images/projects/cannonWarfare.gif": "ed4e3098d7cb735dc898e2bf5bc741d7",
"assets/images/projects/cannonWarfare.jpg": "cc2592053a0dc11ad102ab6cab54fc66",
"assets/images/projects/dungeonEscapist.gif": "6d793fc3b3615f1f402784bfc8ff9d0b",
"assets/images/projects/dungeonEscapist.jpg": "48938bcc42876758f93547012f72f25d",
"assets/images/projects/fractalExplorer.gif": "0375f93fd5a0551a58f55556f7a9c12c",
"assets/images/projects/fractalExplorer.jpg": "01353ac66ae935c3c7ecefce034b8f3f",
"assets/images/projects/geostorm.gif": "6639a8021c3a93141f4aa1bd26420367",
"assets/images/projects/geostorm.jpg": "6daa18cd9842ee641d8e6067d7cb1eac",
"assets/images/projects/glEngine.gif": "db6d85d83135473440bd109c1cac2b07",
"assets/images/projects/glEngine.jpg": "25cad31572dd65d514fb21b7a06e0856",
"assets/images/projects/hungryNeko.jpg": "8ac8a9ae2df5d238bece60aeadfd564e",
"assets/images/projects/hungryNeko1.jpg": "45bb0231c1a20fef65dc240b21d6e514",
"assets/images/projects/kokopelli.gif": "93280594d010bd79f40c891c15430dca",
"assets/images/projects/kokopelli.jpg": "f70b3a64d28be297ed84383deeb67849",
"assets/images/projects/platformer.gif": "fd2424f82f24f8ea3506e68365980d14",
"assets/images/projects/platformer.jpg": "d4413f75db63dd4df4fa0498b5618e57",
"assets/images/projects/rasterizer.gif": "9b3e72e83d0561380a935653b7fc8d23",
"assets/images/projects/rasterizer.jpg": "cd412793a1f20a49bd07726cf567aec8",
"assets/images/projects/rts.gif": "b1f034bfa515aa5d8bcc1baeb5ef9872",
"assets/images/projects/rts.jpg": "c477189f7707a6c3d31d5a7665f84833",
"assets/images/projects/streakOut.jpg": "6104d6d28c57e8714f80bdf73ea1775d",
"assets/images/projects/streakOut1.jpg": "624785d5041c8fe945f91b776502c539",
"assets/images/projects/techArt.gif": "192eabf5b34cae09c966fcecd3fefa09",
"assets/images/projects/techArt.jpg": "3bd7180ea871b25d471c59af78cba556",
"assets/images/projects/treeBound.gif": "e051332788354e27791a96414ae1d56f",
"assets/images/projects/treeBound.jpg": "f8d73f14c8de732f5dcf63ed5c01fff5",
"assets/images/projects/vulkanEngine.gif": "ae3c08d76535346b329b5c6c840f79a3",
"assets/images/projects/vulkanEngine.jpg": "3e067f5d921f4575a5af348b7787a41e",
"assets/NOTICES": "e0082f30955f7b9d722411b3ea9d2fa5",
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
"index.html": "963888153e6b7d6e4071fd88dbb8d751",
"/": "963888153e6b7d6e4071fd88dbb8d751",
"main.dart.js": "ca71186e563417544c42df4ab3b52ba6",
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
