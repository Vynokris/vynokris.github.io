'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5336e61f4fa36cb722a139b7d0e6b6e7",
".git/config": "665646edc677fd5a21b5bd0cb5dbf613",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "594f0d8999a1d4b9730b8c56561ee701",
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
".git/index": "a2435f947c485ab65ca8f1be0f87004b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df1339e23904784aba097f7f48e9236b",
".git/logs/refs/heads/master": "bb55b030d6126aa386355801076e648a",
".git/logs/refs/remotes/origin/master": "c3c9f7289e8145642515e3c80bcf7105",
".git/objects/00/10d8ef02e79a67524aa2f4666654dac858db3c": "f2819850034f5d1f7059badaf1169c29",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d4320094d2f50842cf56b461c575e0f3b32dd6": "5d55bf8102f65cafa9d79a025324099d",
".git/objects/01/dec8cfffb4f28128f125ee82b5956a171ae72e": "678f78c73ac84f977ac32ad43f43b9bb",
".git/objects/02/1c6093e21dfeed9236d7aa30a830e09e3c4818": "6445ed0ace96dc707c698e6901866189",
".git/objects/02/1d5e8470c2d08fbe5a33c7c9f15d5546ba0de7": "08ca329c68ae1eb69be4f507532e93f0",
".git/objects/02/9c526b56a5be6094be367c3d5239f55f41b32c": "f67b6861eee7086f80dc52b22f4d7884",
".git/objects/03/670377a07274b6b7e008e802dd13ad0566b999": "7cd51027752bcc4dd89be6b330d829f0",
".git/objects/04/364726421b10011159142bd0c157403af72453": "2ea249f0c896b863d2d8bb0f9fa2ea6f",
".git/objects/04/597bf7afaf54a04580840d542e2a84bf9bb65f": "93382cbf7cf13d5826ae1b01b6e5f041",
".git/objects/04/bafb41e30750a33f0439f9dd667593e74d2b5c": "5a84729777d05cd272ecadea9a0d8f6a",
".git/objects/05/4f944cb99de67b5ea2855443b3e696eb7868ea": "1e3851d7bcaad33b16577cd3aecc2124",
".git/objects/05/b7fe90d258caff36888dcbb10c8f8a1297bc56": "ef3e4c16208e05ae328b28b15ddf3c51",
".git/objects/05/f6824663642f192be811d1d1cc86ae1a2a73b2": "c6e9db73a4818baac2305ec57d5d6d2b",
".git/objects/06/75669d3f8b2add251508e1d4963b9f43b030da": "ab0e0282bac8a35d55849101fa9c72bb",
".git/objects/07/19512704c93e72e5687e84803b11e18a394e2a": "6ae44b36fa7e23b6b9b26de26c307c81",
".git/objects/07/19a6fde97cb5a34eed5617e4db8a5f68d6c314": "917e1b3e1c65ea8b0ab5856ece2068b4",
".git/objects/07/dbfc8064b9cb1493f553abed4efc52c57401d4": "3afd870e1213830c6510ab2f7f9d9739",
".git/objects/09/2e7df5ea4e6280b3722e9a43d6a74e01087c41": "4e91647633bff9b4a37666a77bbbe628",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "a816b8ea338778c010ffc2bf97cdce5f",
".git/objects/0c/bc4dc4192986895087e3940b69ac9103f8697c": "1ec4dd2583898cbfef9f0334f44982ce",
".git/objects/0e/cfb442e18ae84aae000a33314b9caf49f1ae1b": "d26d9e268bc4bb2deecf1d846e757093",
".git/objects/0f/25df11b6901caa5bde3a041cf7f9e622cf7608": "30952aaa8db40df3e5072d711176f4fa",
".git/objects/10/674f2602ca5c576bc75cd580528c52f0d57b94": "cc3d9424ce0ea83f629d14d1dcda421a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "3db61a28ddf5b372a0bb9c1aebee3548",
".git/objects/12/8800b5890cd1a51a31959b608e04b9893e3088": "a47c214096a9ed82ed75a8f6e0e2654b",
".git/objects/12/dceea74504c5499dad199c0c998d6d705eca65": "56248f376a48e501a2aaa616394e136a",
".git/objects/13/1ee98f53950db7b3418f5a87cbd056fe2ffaac": "06f49cfe9521cc62ff4e21ed3ff47e7c",
".git/objects/15/1e85754448d9a99b76f6ea65a2d67da93ab33a": "0b954a9241b6623d66aa546a76594954",
".git/objects/15/a87bb1bdfce9cd2d5d3d9b3b16b3b9d0325d43": "9d72c0622a44ab905764076374fc52d0",
".git/objects/15/f15a2a121f3544286a7ea5ba886c56552e99b5": "0fcfcd5a5a50d32400d7f8c030b62765",
".git/objects/16/0cf0f1af807437826264686bd8e9567b0af171": "fc387f75af4bbe92c6afd0b921ee26ea",
".git/objects/16/928bb6803c10422d9d908113af258b0c987bac": "7b8e4c59ddb61cc21109dacd2cd6be35",
".git/objects/16/fd5c99df0c7558332f74757569bb19643efa9e": "8c920a810a0b15a2bfe8d0f30a23dba4",
".git/objects/17/fa39bfd0970e46f92ddd1f6d761460b151d438": "d668de2d37a66c600b8ae61d2c0608a5",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "114b34e87e858dea9e03cdfec40d8ce3",
".git/objects/1a/88ba6725b2b2fbc1a3de5deb2986d869b53022": "52be940f58258e88ef13f29b152106a2",
".git/objects/1d/3866c2fa46b17ba3a874674dbc0e268efc85d8": "e2d5218025b6af83ae18e7cbf31876b3",
".git/objects/1e/8068be658b48873c21c33befecab48243db6ef": "6dda40bd8bf369a2cc96af91e9fd7428",
".git/objects/1f/25499616d56e474e6275cac40f825eda6c3167": "123a8fec5cadc7c8346596b3dce86c76",
".git/objects/1f/54ea1ceaf1e6bc116dc9cd001fbc896a4a7abe": "a863f96ad068ddfbed3c4c9c00f0acfc",
".git/objects/1f/a6fe8438923a12917c35cee0c176a091c1ee28": "12937703426e533b92a8f7b973fb60d2",
".git/objects/20/58b87a062e4bbfb58d5ca69cd4b2ea6df2dcfc": "e282e7c9c5796bf3ab7ba706650c3d00",
".git/objects/21/00b2fff543091b299dc625638c10ce37d0b5bc": "3382bda6edb3fc19f8aa3f5355fea32e",
".git/objects/21/4890874ec9157ee1883262bcfbf3e37a255af8": "491a54c201a7b387a18f1bbd943cc724",
".git/objects/23/232e2367b6c246825871c81221ee77d3c3e44b": "2a73d4e6303f561c664412391caffe7c",
".git/objects/23/7944fe762884b6d6b07ef436335df7c07c97a9": "ee12f1208d6cfda98906b9d2e6c205cd",
".git/objects/24/88f63bd96171ecf539e9199106e149dfd490ab": "e8d2d41ae5642987514c3bb4598d6d0a",
".git/objects/25/055f2628322d6126b8d76c7884d9a8f07168c3": "29be2573ebb95af6f90500c467bc5172",
".git/objects/26/adef6fc03fd57ebd8ce06c101ddd47daf88e06": "cc70bca5d153cb90dca400fe6fc123a5",
".git/objects/27/35460bd45c5f390e0691488c2b67b218eab4b9": "df845240b8079a40b3a783c3d2fa972b",
".git/objects/28/4c42e5772313a2dc84f989cf4ab748a77c8839": "8aaaf437111010d3c87e8b434f4dbb91",
".git/objects/29/a983f0ef8ddd122614bf1ce89590d72c5fc120": "52a32ca572e34f97ae5eba09c0544c64",
".git/objects/2a/50cbcbd62e815a0417c0bc05c1828ee8970af0": "943c9cc88961d7ea47a2237f02ee45f3",
".git/objects/2b/4cf9a2b421a866dd2a0f6aebb0f7d73163a970": "1bc16098ab6e4261ab0c12350c1f826c",
".git/objects/2e/138f67654edcdea9f1dd1544272489a5f42ad1": "8bc60672dff5b60be48229259b29dbb0",
".git/objects/2e/33ad09e2816e6a9cc9b109f17ed54c2fc2f1bf": "3a5513644ef512dc5f0542a503358d56",
".git/objects/2f/9a51a2de136a3e3855ba5930a567f41c508591": "e6a37352add23924e234449cae10ae30",
".git/objects/2f/a830474370e45790d526dc6d420faebf5a30e3": "aa8f8ca19f68ffef02923a22cd235736",
".git/objects/32/dc835c6032fad7516ab3b6ee69be37e1427861": "bdadd8e42b1291c23245e156b69aaa3f",
".git/objects/35/0e082bfe1da80d1e336b46e2d9c9bf440c82a1": "7f77f6319c2f448547e49e33f8753a35",
".git/objects/35/1c85ddc7bfa78e22313b552d7e25018f67da2c": "888a4f9febf0f266f5e43662e88cc76d",
".git/objects/35/6e3737581cb3542f2ba12cba47017f8ac70816": "2c62276ffa6d4922fc08c0f21cc5e73a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/36/4ba128e41db0d6d2670a122ac0be1e2a7610bd": "1ae0ef6ee0845100d7efe8e7d8f81452",
".git/objects/36/7e868a4fe57c0a0b4ef1ff8d35bfab48aa4e70": "5c9e638f3cd55098c6d1261fc405ddcf",
".git/objects/37/638938c9a17b0a434ceceb6c4a0312de2435d5": "87618306e5bf5c9b430928bfda6ec49c",
".git/objects/37/659c0b5c5e43ab87f2bee7b77969301ce392b7": "44129366ddc691c3867649558dae4f67",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "f6a1e3b656df3863b6998d73be3deeae",
".git/objects/38/b996b0adc7c6b45ae794578aa16786434f02ae": "59554771710dde7d9288580857e058cc",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "0bee62b5ac8e1b27df5738edfb8affab",
".git/objects/39/1cdce85017cf19026827bd48aab047270cda8d": "b53f14251c667c1df916e580e57d4b4d",
".git/objects/39/472ece5e0c884344f72493b9570f2b7ba6c823": "b729f306cb978720f237009982a2134f",
".git/objects/3b/7d2ab34d9c9876bdabcdbb54cadb87d884f5eb": "b134dc12047e9b08cbeda337f955f212",
".git/objects/3c/34417426970f6fccd39940b35e4c11ffd7e23f": "5f1103c1a55b7ad0831ffa6fdb1cde69",
".git/objects/3d/9dcc1211e228fdae2865905ea1ed3cbf4a0646": "2c13da8ed0ca24f466be1353674d1c93",
".git/objects/3d/ce08cf5c870f81c5a619866323c520adb19719": "9d985077e1109c4f019300187c39bb80",
".git/objects/3d/fd626a92f37c8cd78f96da6ab5e4345d7b99ba": "12e62d562a7cf90ded8420de43eb9f65",
".git/objects/3e/56499c0413c5ee265bf5c2345010365f980341": "fb9e8a988502345b0e06485ab0775a81",
".git/objects/3e/73b686ad0093483ba1495dacf761c7aac32983": "26c45c5e6a36b527d84f9f89a3719af7",
".git/objects/3f/f788673075a21c26850331ff66522f0c197a64": "8fef3ed6f37730a3db136eeeab6f9422",
".git/objects/40/6413e2cdf6a7b1eeb627844ed7cb60cd92e239": "94000eecc47a81173131f048b78699e5",
".git/objects/40/7c9e6af071cabbf64995a97700dd95c638b030": "48100573e5c8ca70205fee530bbe86d1",
".git/objects/41/353607744e11f8b7f963ae550a11f82bb85a0d": "cded599d0e2779f907566a222d395f59",
".git/objects/43/58ebddb7439fdb904eb94c26ca257a841687b0": "61865aa15eaabc2e21473a714783a5c0",
".git/objects/45/4fb7c0cd07eda9f3e8b101b696415eed5730c2": "31ea5a6e033ca3a7ff12dc421edf2e07",
".git/objects/46/de77668fcd933093ac6a7ab75283100e6fcea1": "4e93eed0c8137ad2a3a5ab5ae5e2bbc7",
".git/objects/47/425e1a29611d7aaf6eb91318da8bbaaa041e8a": "129666e2bb4f7735968979a4e7573806",
".git/objects/48/7bdbe23e59edf53ae933b7b10249d0e1e66f9b": "186d438c7c352ef1b8f3945019e9ea8e",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "02ff1c25a33d1347946d8ccd1885bf56",
".git/objects/49/f26579b589a005e042a84d502d917b99f26323": "b92dbc0d9f145248a315b0c86b4dc6d2",
".git/objects/4a/d74e7d59f9b7cdfd4910d9442d7d96dd438f39": "cfedcd5ff8ea54b2a3a420575271eb74",
".git/objects/4b/ca83dee497a8575fe8b31c3a97252fed33e5c8": "2d97910c75265f7af02b1c90811eea0a",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d1bd03faa2307e273558a266af9137e5",
".git/objects/4b/ce87d8e54544e001fd78b3328c8442f996a150": "a8789512aa1a44532b773dcf9207e43d",
".git/objects/4c/1fe97c6e3bc017d78c83432d1bf3d072f70efe": "c1229824f7d91407f822a8d312c9738e",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4e/42ffff397cc85dd4b831f9fdefa8a440fb55b5": "61709494feac1ffdc4cd1169ea403cdb",
".git/objects/4e/68e3f4d705442b6369167f06c702e4cf59108b": "96a2b8533c32d887356daca7c048650e",
".git/objects/50/e4ba67e3d0da8bcc9586c59086d8abcd515546": "cebb99509a44cc15526a3370725c7e17",
".git/objects/51/f35d35b528f3cb6d29b7ec28a6d9a0caa9fd6e": "006e765509c3c9d9f9eeff737c58b6b9",
".git/objects/52/0f1ef1657fbff7774d3599d353e7cddc861893": "83c6dcc0b9cf7f78eff1f6cd11705aa0",
".git/objects/52/bca11e2a70d35131cddcbb6fa4975f94a417e4": "a5a2d3f8e6c6b65f7985751e9cc176c2",
".git/objects/52/e9169f77ae7e326ef16e5d5467be5c2d9b230a": "3571463ba59318047664a17a4eeeb9dd",
".git/objects/53/336cf4d6de7638b0d9c30655b299eb19dee3d3": "d1bff31e13c865d10d14b4418c7a4a86",
".git/objects/54/34e4be417ff45a7dcd7b693c99d4d603cc970c": "2d2787f1d11ba17d956cbd6a8757f1bd",
".git/objects/54/84837ad81e1e7723deaf701685c7fb89dc6ce5": "3836fa27fb1239f12d96ea8e11aa7fb3",
".git/objects/54/9e1903a1237bede199292f9d0898cbc896d5b6": "01baa1d24e5d9155b9193ef0859f42fd",
".git/objects/55/4b09f2a787e93456bc4909a5ff160b80c0a83e": "9c0500d7e56867d1389e8a9cee95756f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "200a539a6db680f00ebda88e58ec57d8",
".git/objects/56/cf42bb4452383bc1eb345444c0567d4dd4efc0": "6bcf56ff1c8fea25f2ddbde44315b6ae",
".git/objects/58/17dc6fd2122e8dcc7f266314e53652b4df34e1": "3bb1b1cc4ebacd6ce7dbd3d4dc51f4d7",
".git/objects/5a/7760f4c6b4902b034e171c3a5bab4be1bd30a2": "4a4402593933269fa787b22d555e92b6",
".git/objects/5a/c0cc4997e54364dca08cb295e9f00162bd363e": "a38be3d4d1dae7c034ba3d0d1f5c55b1",
".git/objects/5a/c9b984e11954ee05b0d138c1a64533f865a4b6": "d0d1d97abbc0a011529925a74dd22357",
".git/objects/5a/f66b4d62ee022c68cc534f0b91b824f04d8462": "22a72f5b518751523332ddd46eb5eb32",
".git/objects/5b/06972bf76962ae386841d707e81002a831c179": "4d9a0c2a8e3165d7e9c3d383716fc72a",
".git/objects/5b/4e9b627141d9f65789a9add21e2390a9823967": "f6782a1128c695d53cbddaa9074edf3e",
".git/objects/5b/6030609d46c975e41e5c1f8b1f0f5f79b77560": "bd593e041b1ab09fb465e52f86bd466b",
".git/objects/5c/49e044d607d0f88ce2c7c42fb76b1517d9b6c1": "2e4e267c3dc2100e1f120c496bc7c3c6",
".git/objects/5c/d5e3e65560200bbcbad6acecdbc82a9adebbd2": "2066132c645f5e88fdf17c5893a6357f",
".git/objects/5e/56bd9991e3a4ba6e314bd27d1f541764b5b758": "6ccd13f3da8644417e214917e66741c0",
".git/objects/5f/a14033f44f699e803f2059f86a4ef0ced02525": "dfce9b8cd34e6c0d14ee8fbdd392da55",
".git/objects/5f/a3cb845084542b28fa45019dfd3c70bcf1e96c": "95368c89870f7958a87228b5a4fa9d65",
".git/objects/63/bae01a91bfbb86f8dd1464211404f6e0d9ba5f": "72ecb7d1c94fb325eb6ed04c1f4d2bec",
".git/objects/64/f40d2dbc6dcaa911917f192ffb2fff6a1c792c": "7899283670a0331fca3e886bd462a0b8",
".git/objects/65/5565ac010982fa410ec272133a62576f0a922d": "c1c807f7d17cef76f10c64ea3a0ddb12",
".git/objects/66/56d4eada0a3a70315a35820342e521077f8c5a": "48095a59145fe5052c767c5c2dc1791c",
".git/objects/68/0445a6e6c73cb0740c019f264be74eabf4b005": "3019d20d15fa28c65f05f7970d6d1200",
".git/objects/69/d80307783287b6c3e15288b93c441c9778f501": "1898ed3a7d08a697a2f8c7642a5c64be",
".git/objects/6a/2a01d11cc67a85b476b0536924e69cc9ba4a54": "fbf2f82130b10fac1212929fdbb655f8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "454a10f9082528f531c074c87e154f22",
".git/objects/6a/b970e8bdc77040bab8fbd9e4faf4298af72036": "f410579dc3e282237f45014672310007",
".git/objects/6b/8ec0b2618266c1c20cb1cddf8c730871e37802": "7be7c431938e47dbcd6bc8c2963edac8",
".git/objects/6c/78f04841cc3e048e81be2296e953b0a4711816": "62d27f22570362bd369c0a9bb829d374",
".git/objects/6d/5f12ca3656941ba65c5dc6f87ca1664f6f192e": "e60a7c737765e1ea97145565436fc355",
".git/objects/6e/7a20d92a85c7246ae53793f6489733e1681382": "0bd03b4717165eae37cc39b087a594ae",
".git/objects/6e/8b7f3ceaba19fba363450cf788c2f4c5597b75": "bb391b2857c6166587b08ff5beb8895e",
".git/objects/6f/96ebcef8984237f0985dc7b1fdc02c51028886": "1891f0d0d98e512a61489b67181d9776",
".git/objects/6f/f36318bff43878b93f1deb785d3a0ef1202138": "877c33ffc9fb696334d6718b04a45df5",
".git/objects/6f/f8189909638eb9b43d8d312a38d08aeb283ee9": "7de76c889ee643ec40724114b6630095",
".git/objects/70/051fd77d29b99dcb1bc96d3a5639409ebf99a5": "da0194a7d75cbd803deee3857e944dc9",
".git/objects/70/98638b86c8119091fb845a7eea34fe7a1a6ba7": "87ef9e399316bfac7fb4e26d012ca33e",
".git/objects/72/05b7cdfb1ed0f43727072cb29a4195f685d637": "1d6683fd356a0316aa992e7260cd0603",
".git/objects/72/5afdf086b271ddedf50865bf9542248487a040": "7314b2ebbfb2306fc87354b00bb04573",
".git/objects/72/97d8ab6507077a1835be68a318c7af1b3c811e": "8b7442a017a2a34540acb0b1b9150e58",
".git/objects/73/03d68fffcccb4bab5dd117b4e9ad275c54ce79": "d06539cfb472e3071fc2604a788872e3",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "3c8ba246dfaf5e6cdaaea434b3d04156",
".git/objects/73/c6a0c8a3b4caf23561fccc254313e2f028ec1c": "647957d754c19f0c19decae8074194de",
".git/objects/77/40874fbfbc422880ffd0b27cb03f398e0220f4": "1d4343c85381704462b112a1d05c2208",
".git/objects/78/d0119fa041648c9f64067c57a12f472ad4511f": "80e57146079fb1d3d1144a46b9b344d3",
".git/objects/7b/6e162b76fd166fc954f0915aa26afde4933ec8": "68d6095508b352641dc7858e1a701dc5",
".git/objects/7c/9a46ad16fdda7557d1bc0cf9f5343c7cb1f42c": "4a46cb0314052e5f0c51794d2ad3d554",
".git/objects/7c/b8e3780b64a135be6c2802a0c67d5b01adeb9f": "14b45305fdaf80131cdfb238d774631d",
".git/objects/7d/02af481afb7d2bb9a59020261f6532d74fbaa8": "e39a8e29844100e2f18f05940ed2c24d",
".git/objects/7d/8f8fac756445b732b7e809e970a971008b6491": "e6c52ba491d67fc8d746a56212cab3b7",
".git/objects/7d/be2ac6ba53eb0712c4d1985f0ab6570f20be49": "7cf7aafbc3792aac15f0e83505a8baa9",
".git/objects/7f/2e8b6a5dd937c589384226c0fb9004aaddbb52": "b03f2547079fb600c47cbcd012604083",
".git/objects/80/cecf5c4a8fc1495cb62decf84c8f7f2cd56f36": "19040612b187771f889593abc5a0a3f0",
".git/objects/81/1bee9b4232ce4faca7e39d69e534a2c3260f53": "cbb028d6fd281c10668edd0ae2a61b69",
".git/objects/81/4a074b8f2093f3e82d07aa6dab5492c023d6de": "3f1563fac226220d4911ce206054bf63",
".git/objects/81/97f580f68eacd96acdea1eefeaca6ec51933a7": "61a8d336db3e1b6e60c626201446160e",
".git/objects/82/c050231de51ed02aeaf2f433c33ce808539dd5": "ccacbfbbc7048640163ec0b424b9aa92",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "24a55a55a467d7195b6eb59c4f31d32d",
".git/objects/84/52a502b603958172b064f1b2fe106e84c35506": "96979b853b12d327f47f8c4d17cf09d4",
".git/objects/85/c52861ab294549165f84f32456c2126349f35a": "65fe806386c8ce5ae70f47819fb8e169",
".git/objects/85/ded5c53b02a9ba782c495a6960970157521e50": "989ddc4e2acf0bcffe32f59786181f87",
".git/objects/86/bac2aae8de6d6820279760af907ca80f785b02": "84ceecd18a36621471b2d0686a8cbefc",
".git/objects/88/4fa96d1871d531f036f0da80a50c4edc6c45a5": "547a0886027356fb960acf29db4975e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/2423b57219f18bf201616236a45d3fb72c85c6": "096713213620d6b131c297bcae6cc87e",
".git/objects/89/295dac114d1839f71c26e4bc8dccccc72237f6": "714e4e0ebbd55a6e8849a3abee71ec1b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/5cf7b7bcd838f3a4c4f1ea747150de49d1ef29": "01f0c27fef1e20d2dfc1f4f8616887e0",
".git/objects/8b/e767fe8e0791485f8e01bb0cf26c03fd764230": "f7161c70f7bca362896b2fb3597af369",
".git/objects/8c/87dac1679b116c797bd83e1ab308e9756c491d": "083ab782a4b49131c93724c7b1adbc57",
".git/objects/8c/93043de6454ad2d5575f0751150c6551d9c588": "d4b8f213c596cd030e71ba1a80fd1afb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "63242b0c4e2a03e33006e63cecaf7cdc",
".git/objects/8f/26b4b844a93fd1d52b52c9bc870b1e8d1e89ac": "03979817000d56eb0d9aa1d9d0fd953f",
".git/objects/8f/5a649341f7af980a4f39f579f8fba8084805b0": "ae4c806ad6e9076422ccf740ab39ed9b",
".git/objects/91/5a5dc6cef392cacada113b66002342acb1fe11": "7c630e4c75ff7bc11b6928d2cc5de001",
".git/objects/93/5b78294a3d824f549d8247731c269d234de1e1": "1ed981bbefb6d4de0c3b14dc5c9eb9c4",
".git/objects/93/7b43de506fdfcdcde8837563dfb77e32c1be54": "e4ab51c5bed5749c98cd9338ee6a292f",
".git/objects/93/c8b8acfc48978f06a1e03a34da59a1afac88b1": "c2e1cd6394321bb90371758a20b51357",
".git/objects/93/ddd88b4021169509c9f49ecc9faed90ffe77f8": "ed9065fc5e07e10984676dfb977721d4",
".git/objects/94/ac6c810b3634a54315d2acc63c1a4e4e1441ba": "be855ced673e79bd6c5e96239771dbbd",
".git/objects/94/cf7bded13b90fdee83529858a1f00b9bcdbfaa": "0a087cc18c625258f005a251ada094a4",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/9fe15982dc7d8808a207dba07f91f1a60a083c": "c7c93d2450b0dcf8398d9b589dd94762",
".git/objects/98/e63762ddf8420bbc1c951fbdf8e3327927adfb": "661ef4b860e5f15065d1a15eff05fb4e",
".git/objects/99/61962a675ace1bff615edf0451b62bd2629167": "1298511d448858db432da03c93f154e8",
".git/objects/9b/85ce14190b97dd8860065acdb3339d42783765": "a63e59033a7a0ae1d5a7252a66e61ded",
".git/objects/9c/cee07ec3cd22abbd8aa0463ee102be9deb907e": "6180d121184eacc79a8be5e98d942c64",
".git/objects/9d/4b35cc39bd571d740ce9ef4db43f787fbb7429": "0e9f2a3ad8c84a1a625fbfda3412168f",
".git/objects/9d/9b36c8f14df41e6d908968ebbbb347ca5f7867": "fc5c4d3c639d5496b2ae7c5a27d2f486",
".git/objects/9e/e53df4acb9371ecbd969cf09a99edb1e7568ec": "f2c92c7ba272da90dc91e4a389efa2fa",
".git/objects/a0/13a41ad3acbaea36fbe032882b1bd6abe694e9": "54c2573657a965844f7e54d64a16c884",
".git/objects/a0/e8799190e2ef378ac495623594fe547e4ef30e": "dd6408b0aa46e73bf15648e1bfc84274",
".git/objects/a1/b623f41ca3584d9a84196bb8a6ec70a38de5f7": "01c593760d04e0e7e85dc676b40cd9d3",
".git/objects/a2/8bbd9ede3485a8a008c9da60b5f6ed67e18b70": "f205d9eea0112ae1d3890e2dedcf58f8",
".git/objects/a3/6069e4a179a51f5c8b83af358315f9c1135b2e": "6e7af7e57ed3d0b252145b886af34707",
".git/objects/a4/1deba4b7dc1a84a7b909110f7ef29f8fcad19a": "ed1924579028319c52b837ed1ff7830b",
".git/objects/a5/5c57cb0b66b08a3f1d2b35b83e598512ff1269": "3038005e2de3a00663a8c8b6ef5fe098",
".git/objects/a5/dd19c2bc8161ee4b72fee49d7c4189f2c651b7": "e7b973eb88fe52a151e4c6d50d01480a",
".git/objects/a6/b91308630eb627038b4af73bc7ae24a288ea26": "dfca08818229f7d464977f6f813265ba",
".git/objects/a6/bad0c7c4c752641ed49d18a96112d4d3faac98": "ac665029638a09244d1cfd2ac56b94a6",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "ece6a0ff9a24a8f64dc6ea097b41ed92",
".git/objects/a8/fbdbe7970cd9172651f1510db73bd2cb558bea": "936730afe9371cf93af91f4ce0c190ae",
".git/objects/a9/06827afd8b0ee63296f96207c9669d86f595c4": "8d1bb142d185f1953daf60ce6f71e8e9",
".git/objects/a9/317d63516edd7c5f892ae570d3fc345d9e728e": "1d5974fbedeebf8bc5d3f7cb93c37037",
".git/objects/a9/f256c048066f9e336e75fd70ac0e77654682b8": "da791c18adc43ba1b8cf389a697c7120",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "a97b1067ce25e8f45f4f49a4a8117ed6",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "f2a97922222df8c897b1a0151f9288ad",
".git/objects/ad/917dbac0d64c2ad752c2bdabe8c2f24dc5ca4b": "707c49c5f9acefcec5d69d0cdb620864",
".git/objects/ad/9e175e585e7730ab02c19d8aab9b9c4be3d56b": "ec7c2263248870d2f4cf01159ccd68ab",
".git/objects/ad/ed938ef1860c266826634f07392ae768509bf4": "d9414e96ffce0555f8d9a1ae36a1dabd",
".git/objects/ae/83639068023f1e2cda8d48174a173c03bec799": "d64ca144a7161ba237279f08c6255fbe",
".git/objects/b0/4b9c9f0adf57b8edf4703470150e939ed8c5a6": "5b3091466a7764a70689273351a645a3",
".git/objects/b0/fc45f01f8564a63b14b2ccf5d15a1ed092cc2f": "8b6064e0b057149760791698254e1c38",
".git/objects/b1/5672f5d3df602e80c39952ebf82560e76413b9": "72674f8a4600133f9a759c11a10739a4",
".git/objects/b1/74dd276dbb1dfb0bad15cf26fe9b7d99023374": "fb9e6d4e2331f76676ac7cb0bade2a21",
".git/objects/b4/4d4f1a6455b4970229cd1eedbe3a4ebb89c9ed": "09f6097a194b0e169a1ecc71a245abf2",
".git/objects/b4/b2a693b67ba3e92d38805c7fd6c196e2a0f477": "55e035324ecbf95557dd21b0fc64c68c",
".git/objects/b4/f4f3b1b5ffa9f779f21c6819f5fd0e2c2eb931": "31178d170d14821124eeb5911373fef6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/6149b6f2b81753b68f54022ea05ef7235979df": "e962f8245d9e11979cdbeb2e7f091a3b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/5f95b120786bb97ac14f5e5b7c87a1fa38f9f7": "8c6f0a48a87e348b954f2d58274009f0",
".git/objects/bb/48dd47a268184f14a61829a9277e3a5e8945c2": "19c60de25875ff085fb7c75c95b5652a",
".git/objects/bb/6cf5eb5f21dfb888666beaed5361c6b83ec011": "dab0b21616a73cdb92db790927307f7e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/bb/ac8bf6b53cbf3a051aa11457a45f2944609c10": "edd3b11ee03ab37f576f24182e54848d",
".git/objects/bc/d48dfa775202ff2ccaea0c9c53473ffb2c21b5": "c69073a393a828b5ddb3803b6a7ac050",
".git/objects/be/3972382e4c1f84d13b3d4a31bb5776a606f03a": "a361051ecc4aea7700a4de03e55411fa",
".git/objects/be/b1e59796e7049524d290eec6c695dc5a45d775": "8272525679026df7eb462a92c4a32c44",
".git/objects/bf/3399020cc5633eb24a2d0e85a26b38daa3311d": "89c6a09847b78c2b053934e43d4fe451",
".git/objects/bf/78c2f55e47010f24cc98bb2ba4f04cf2bb30d7": "700fb580f60d4dc661a54951eb4a4353",
".git/objects/c0/8f5325c5e3e5e9acdca2bc38d08b320838d554": "3f8dc7c1b9f043e33e977add9e05cae1",
".git/objects/c1/678ac582f0054f95b93cb106ec0a7c6bfd1595": "d3248a34a223dd7634a7ee40d2c3c3cf",
".git/objects/c1/7c904d512d29924dd95fd680a4191f0a63c1bb": "eb5e4b0827fcd067a1236cb5d2696e9a",
".git/objects/c2/2a6f7df221bcc1ef88a0ac0637134359cb81d0": "d841ad51cde2a07a320c9f9f12f6f300",
".git/objects/c2/8a0d1e0d0b14f9641e12e23719b8c633009428": "3d0ed38b1a280a71f0102017e8a36347",
".git/objects/c3/2ba23bf563d4fa1137e9493056c3a29246c115": "2f6b4b1b72a44d0de0b5b4c9eee297bc",
".git/objects/c3/6b9136d5327b55db1c1b07c2688f01976e3d5e": "95714596aa27d064f6467570b07f4529",
".git/objects/c5/5d2fac83b9cf182afb0cd8df13529c5e334538": "298cd001ea3ebda28a8c15dada7c9aba",
".git/objects/c5/98edea4ed3c2cf44eca627757066053c26770c": "5b225eb0a3f7e3ffea17b68bd89ffe15",
".git/objects/c7/7ca4fb68277a6ca87f0952f3c211b4c8b2e0ff": "b91a32d6327419048865d28782943f40",
".git/objects/c8/3006bb46a0bb2c4bcab42e84c9fc81004bb2c4": "48038add19eb87e56ed315b1630ece05",
".git/objects/c8/eda009a4e0d17563eb8e8a391f29a8d9f5d64f": "e8631dc2e7f5b3ee5606c573b83da9c2",
".git/objects/c8/fc6949ed9981ec1ec45cb163741066be6de303": "c7667be9a94e30c5dff57e58eabe01d1",
".git/objects/c9/0b0e73e08a21c58cb7da64cdfd962087df6bff": "cdba6274e45ad0c6cd96c1b40fc78c04",
".git/objects/c9/53a34c5dae1715428bde9775c5d7ae4b5f629b": "d59818291ef3213024a817a3fe0ebea5",
".git/objects/c9/7f7d2b6914189d08ab45f03afe89945002b679": "89dc3924f5f49e5929a72c4d031876f7",
".git/objects/c9/cfd5a335e338c9b070e6eb506eb9dcd46e289c": "116a7722840127712835a5e15c12d663",
".git/objects/cb/781d0564c38a7a5ab61853ca2356266f294e06": "b4fe61b91510fbd1966a6cfc5e0c38a7",
".git/objects/cb/837da4855217062e5103ee7c81d5a1c2ce5ce7": "303066e11e458ea011040243ab0cbc16",
".git/objects/cb/c97ba5d06a3052d7bfc05ffbe4b2d68dfe6fc7": "6ca278558c426fa5f816d00ea2f61830",
".git/objects/cc/c9d6a5bc15ffbcce66f923bf3d7999c73ede84": "5e4f3c8ab7701e78ea64175b9512f370",
".git/objects/cc/eed0b3bd4c5a60f4e4c37b0b2d196e27937a4d": "60d532ff86751a801ece48c4e8fbb752",
".git/objects/cd/d5a4b66b4c2805d60f1938d9b4548926a378fe": "bfcc98b06fda8616f87507094286ca57",
".git/objects/cd/fbe794000f19738c7bf928698e2d5917d99b72": "157d1784f5583fe9cfb6e1627ec73be5",
".git/objects/ce/4ee90359a88994711a4575d28ca6f6e7600a3e": "75b0750b8bb562c2b57baf146bb308a9",
".git/objects/cf/c35d6407813e152a2134cbf4a7b590ce7a3ba9": "5d71fdd4853420270bef13e313bfbc87",
".git/objects/d0/74b4c8f812ea2c5c9aa456313ed4b2780ab08f": "e80c480631918a17cb27971ec8db81d0",
".git/objects/d2/2c32a09e30edbff0df4679d10cb1d7c0e95a3b": "c0938d106916953d8719f7c1ac6b5e42",
".git/objects/d2/7a3aaafcb8ec8f61de516b73f0959e408433eb": "44ab4684448d5fb29c555ce75f953c9d",
".git/objects/d2/87bf47b7097cd89d848c9a77b39e9c9c3d59a3": "5eeedc6c743362418ea42f4b1de48c23",
".git/objects/d3/29e9e589d34b9b57c39c513821c730af343177": "2c23ae031b85b898166d52333af7c4d6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d4/c3a4764f9085856c94731f8085363a941c9595": "b12d89b4e4164d7557a858fb77dbbb9e",
".git/objects/d5/523a97215f480b41cbdc693606d0e95eb416af": "f7477ed05acdcb2b52094d971d52a369",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "cd0cfce1afb98eb2962b819bf189bb1a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/cb956a601f44dad3fa833cad611220f0fc5456": "c77f83ff1b1a08e50eee51a46497fcb7",
".git/objects/d8/f498c482e8f0284bf4e46c6f29d2cf026d4c73": "9f57b23864d8ca620f4b72e802b04257",
".git/objects/da/4b87154a2d8538bea013f811147d56b471ecd8": "c572932f2f05d1eed5fa4773d092cf48",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "2190ab90e0656ba18e3b0171adbb765e",
".git/objects/dd/dab8d3779aa163efa8ec57d32775e0a9c55511": "7de44c589ebb0bb4bf2b593bf400472f",
".git/objects/de/e1aa29860082c8602b768e8aa06179ffee1c87": "44ba902fc6407187979004c421a7a768",
".git/objects/df/aeed65390ba097cb18e3ed19d65853db0c48ba": "341fb8ca6cc71dfb515767b035f35824",
".git/objects/df/f66cc50702c75abd025dcf49f62a4dcc2d72de": "7cffb58a37d138e5e0b6dec26da0a3c1",
".git/objects/e0/1dcbd18b484305d3a279b6a56a2ff6e965f229": "51a824ea798c510934aded9c9dbcfe4d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "d3f47cb94cbcc0b01e00546c19e98111",
".git/objects/e0/7a00077c39e5572eef71ec484f30822c25d803": "1138dba9b0a135c3b6d6ad871a5b3a47",
".git/objects/e1/2c1f0c9ce98f5ddb39270f6df627c996c9d0d6": "35fe893743423da80b71a8eea605a5fc",
".git/objects/e1/c75bd33a96849e586a79902c8960239b8fe628": "75f593486ae14a9c056e1cb0e2780991",
".git/objects/e1/e2a73b535f3c1897b20d58c996bb795e7fa9ae": "4d73b85a9c6ccf727a42e86cdf78e51c",
".git/objects/e2/efc369030b77b0b8611f3ae9ebfc0b51f7afe1": "e02a134a7cc0f3978f71a284b9f7aab8",
".git/objects/e2/f60b9476f86a0a40cab9299f855548f961e1b9": "ad7b9ab14d9c250c79fe1cd322edc453",
".git/objects/e3/e75463fac55ffdf26e9a71d45dc94372ef1407": "8dd309884e48e95a623fa4c1dc4f0d16",
".git/objects/e4/e9012e29d231d3c1fb2787d3e1ec1369fc726b": "4b361c997491ad49668abcb04f94d1a0",
".git/objects/e5/97546d5420d51c9bf440f3cd967ac81ed953be": "27a7af72b36e53914bf0a6ae6d471427",
".git/objects/e5/d631827cf1258b5912525e8f700126bb32488b": "7efa89f57e7aa3af09211c57b46646d0",
".git/objects/e6/47e71092a2b1c6b5dd512adff61d43c2a8aad0": "62b43c2356893bd2cb758f300c7e23d2",
".git/objects/e7/0607d1165758192e890ed24ed3962a6505e595": "40f73d4adced0fa4efdeb47a3561e928",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/b53fef18bdf999b09b2f0b3ad35ed641cab371": "82f6aed67060b181f4f24e7cec01a48c",
".git/objects/ea/31572694e5acedef87b2cf93f427b68e9710ba": "19422e9d3997823c6d820b8a67b91d05",
".git/objects/ea/57b7ba96267354e2050c59afc27d6ba5b8e3b8": "f76bb46cf7fb5d2345764c423357fd9a",
".git/objects/eb/2747248897c7d7e1a6f468f816d0f846e97324": "667797c01afae45f47ab91a18b627365",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/36860b3d9e05655335795cc7053741937ecbbe": "5580215bfbb14579b12e21d00a5a7d12",
".git/objects/ed/21e53b8c807d49efba81ecfbfde9cc126f3914": "3e6899e9d9ebd34f8002f0ea95c50805",
".git/objects/ed/362cca8125162a24361788b7da425c0016a164": "92c94f2d41840a0d62492a23d3082240",
".git/objects/ed/58f47fb111d788aed288e7afcf7a16aee15395": "0df0a3fc4d32554debe64cfbc2c5072e",
".git/objects/ef/15ebbe6b7929ab23495624b76629e47ede4ed8": "dad0522a6a3c87ff710bc86eec0dcdb7",
".git/objects/f1/1cde490552666103fc13f73decfabc777897e0": "71ca68d777164f34af2e8ad21e9729c4",
".git/objects/f1/88d1d4e2a0bd4be32dfe7edcd1e85d7c27b133": "43c907692f1a739aa2d776f3a9182d76",
".git/objects/f3/57768d6cde5115058ddf56cc7b4167a0f90c36": "272f23bc61b3794fab1b4288b822faf1",
".git/objects/f4/de87131baf1427a99139387ffceabfe9e244d2": "50ceb1a2a2124ef3570e9acc98cce786",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f5/c9ca7d1e531c1f9dc3e3ae9ec2b4137a9e912d": "5c3374248db87ab1fca94f61031c0f59",
".git/objects/f5/e6224fa71181851151e08c7f7023708877dfa4": "884a33ac5bd41af68e6ef822970da146",
".git/objects/f6/8920109b87608cf81f45ddb79875c5014037f3": "c5e251992e77f54d493c27500efa4bdf",
".git/objects/f6/9296706b232a7fef80ac9751eeae964646a7ba": "dfbcd9d00e54c0332974c4d9bcd7ff12",
".git/objects/f7/e198dab91185b5ffd17184377184950bf39e8a": "20408ab0c51ae8ce20892ad3743a75c7",
".git/objects/f9/2abe58511126ed25d70f57881fad2321228b6e": "5e93cfc51c62bcf8c1f0bcf151362df5",
".git/objects/fb/2ea58fdbb0e1871638771eef9408ee08f66f73": "d4ab839d6f23c6c4625329a684dd2ddd",
".git/objects/fb/b4b88e016c0f315f43cc0434592c758a52e3f8": "005c17bb99f1245a4296839b088a75ba",
".git/objects/fc/5d9396f259ee7e712d9f8d253b9129069043d9": "8b244c52df0970a1dff5c6c6b4d9b50b",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "beec33a20a19d6c9a511dc88932ab054",
".git/objects/fd/737dc67d3d9681cd3a9ec6fdeb088360aca2fa": "0431296deee32b848ed7a6f74a4563f5",
".git/objects/fd/d600f5dc08e63800ac61cc75e8c7236dfa6986": "4f1f272b943e7a61907b17393c8476a3",
".git/objects/fe/29d989340cbcfdec0da3ab6b0b0697cdc3dff9": "b5d02a9362438986fef05419b18480d2",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "d592583bcdeaba6e83d542f0b4d5d734",
".git/objects/fe/86479c795ab437c557b291ea5f97c3ade17052": "9d152157297a345ec05e0db61b2ddbda",
".git/objects/ff/7a3fabeea0efb97baf8707bb57b5322549e7da": "8fadb2d5b9ec87e5c4865b144a75329e",
".git/objects/ff/b6acf25a71e8bb235b44d358d83a959948004a": "bbe507ef574893fed5786b49f995a511",
".git/ORIG_HEAD": "f0898a0f390f5a3cbe17c4d4e9587d88",
".git/refs/heads/master": "4e22998e04507e5d8531c97afd70d943",
".git/refs/remotes/origin/master": "4e22998e04507e5d8531c97afd70d943",
"assets/AssetManifest.bin": "4416e9bbd682d98a7573a3c86ab7e13b",
"assets/AssetManifest.json": "eac82cac0ba293d82c2dc0be5cce5cdf",
"assets/FontManifest.json": "1617bba5eb4bc84c90207fb1b2b51c11",
"assets/fonts/Fractal/Fractal-Regular.otf": "554199b3ff13da6583ec9aed2053404c",
"assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf": "8658ffe39dbfa1c12436789a50212180",
"assets/fonts/JetBrainsMono/JetBrainsMono-Italic.ttf": "348ef43cb2b4be35e6489fd9a1261ce0",
"assets/fonts/JetBrainsMono/JetBrainsMono-Light.ttf": "5f68b90fb3ae2b26792475f2e92f966a",
"assets/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/fonts/JetBrainsMono/JetBrainsMono-Thin.ttf": "4abec0295db416a000ea0d1dcec54964",
"assets/fonts/MaterialIcons-Regular.otf": "a5cb83af87f04ccbb7efe58ca2dc2e28",
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
"assets/NOTICES": "6aa2e1c636f42f90ed2008e6e2e7aa44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
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
"index.html": "9a5553b163d0528c0873f6a2e7eb3a6d",
"/": "9a5553b163d0528c0873f6a2e7eb3a6d",
"main.dart.js": "35b9c10b9a61f68438dd7afbb2f15379",
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
