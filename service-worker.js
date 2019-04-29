/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","2a7cb500ea2dc4fef032fe4cec7cdc93"],["/archives/2017/03/index.html","73855e7e8330ef67d5facd16f8e565d7"],["/archives/2017/04/index.html","a19407406890429d3c68d95baa98decb"],["/archives/2017/05/index.html","08d01f5182b483d09a0039f3f2cb9ec1"],["/archives/2017/07/index.html","cba5a757fdb0b5d2f3bda95e6190693b"],["/archives/2017/08/index.html","ef4dc2a0d6b99365216b43691dd5f601"],["/archives/2017/10/index.html","873190d32ccde54c58144c9ba17522cc"],["/archives/2017/11/index.html","43aa37168aec41ad48326fb2b717edee"],["/archives/2017/12/index.html","65fe995bdc18e6d7fb92bb0d5a7793a8"],["/archives/2017/index.html","8d338f5df15e08c6bd8d6583b934f5b7"],["/archives/2017/page/2/index.html","7a3bc109ef2b41fc6a3442c40d675886"],["/archives/2017/page/3/index.html","1b9aed7541469c33f058549eb06e0a96"],["/archives/2017/page/4/index.html","ceafc1548bf442d6797db61f3dadb0fa"],["/archives/2018/02/index.html","cb26fdd778bd5a196c1620a3388b3887"],["/archives/2018/03/index.html","ac13f4e687bd78403b1590026c50683b"],["/archives/2018/05/index.html","cd2ecba0c24e0d0c992f042254a7362d"],["/archives/2018/10/index.html","390730bc64deb8bffa4f01c4c2cca074"],["/archives/2018/11/index.html","2ebc5fba66e5933097548403e3778f3a"],["/archives/2018/12/index.html","1a4fe10b6ae561df57162cc8f2e6ffd8"],["/archives/2018/index.html","d073b3d106ce6c2d87fac41dfceaa3cd"],["/archives/2018/page/2/index.html","ed31dea672932605cb93eca1aad4d8bc"],["/archives/2018/page/3/index.html","6d86e051a91feb06653269f22868a48b"],["/archives/2018/page/4/index.html","b2d4eb80d462181b91d41f5d37790dbe"],["/archives/2019/01/index.html","da3ba83c846b2fe8a7c645e0ca3556e8"],["/archives/2019/02/index.html","0866cfef53dd5cb5bea543c572670b63"],["/archives/2019/03/index.html","d1e4de25213f20730c618182d0a454ac"],["/archives/2019/04/index.html","5f37317640a7510cd613f20c4eea5c9a"],["/archives/2019/index.html","f39a089ad0af484887e05bbf23b2431a"],["/archives/2019/page/2/index.html","dbcdda53af737c386a02cce1d3b236b8"],["/archives/index.html","06d0f1da6791462f412bb6d311027715"],["/archives/page/2/index.html","33f699310b01bbc32d5ce050d8e63359"],["/archives/page/3/index.html","43cf94c308e7cfeddf59cc799ad2165b"],["/archives/page/4/index.html","49f4136b816890b8dedd629f5e422687"],["/archives/page/5/index.html","9434cc0bb61e23bd694c3d6085b2a912"],["/archives/page/6/index.html","46c6e87a1f26f65017e92a96504b1cf8"],["/archives/page/7/index.html","cc9c428a820600951f386680c03f7956"],["/archives/page/8/index.html","258ac9d7b9e463ca94711b21f3df6ad2"],["/archives/page/9/index.html","43e984cb6f0f502f3aeb7b0bfbac296e"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","a63629d2ba0d5fdee7bd54bd0ec70484"],["/categories/RxJs/index.html","190d61fc69b6093a76af9da366a41f44"],["/categories/hexo/index.html","1edab9454b27c254bf0b446d0987e95a"],["/categories/index.html","086e60317e399a60be5ff43b5793b28f"],["/css/main.css","217df71497ea454c3aa274fa04e08479"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","3828ec41a412bf91980c63633415f168"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e43f99c2ae77c316b44da0f50955c0fb"],["/page/3/index.html","4ea7b95123fae01495626cf754d1c18e"],["/page/4/index.html","c16d5ca2cefd559f7ac32fe8a4e9a57f"],["/page/5/index.html","9e8988546082a1dbdbfcf8a2f9ec112a"],["/page/6/index.html","49da06232397b68fe79da9452d6aafe2"],["/page/7/index.html","3f5d597e062ca22d0df8409bec143e3b"],["/page/8/index.html","61b8f9ba2b745cee966c694e7710cb94"],["/page/9/index.html","dcb6f5af749a3dbd5ac1e89f8eff45d2"],["/posts/12fd/index.html","00809eef89a47b291d76a4b8444e7fc7"],["/posts/1d4e/index.html","bfdb3fa2e25f2ba34e32ff1ce54875d4"],["/posts/232a/index.html","37af7ca1612006bcacbb5ff0edcc05b5"],["/posts/2465/index.html","69d1b991f2642702af6846c1c97eba39"],["/posts/25df/index.html","eb0c45aa86ee78e0363a9b38fab3ec69"],["/posts/25f4/index.html","b56b34bd7d8f3d071c412d045454ed78"],["/posts/26fe/index.html","60009f4d54b837158b94af970b1a0358"],["/posts/289d/index.html","15e8475366135a948f28ebdcd36c3bd6"],["/posts/2b83/index.html","4db6130f1d67723cce08e999d98643a1"],["/posts/3b3f/index.html","de6c3350bb397966f1b731c00302a0e9"],["/posts/3be7/index.html","076abb3fcbfefac3830b464e1304006f"],["/posts/3d25/index.html","ce249dc3dce844ae6855ebf8f54d8416"],["/posts/435b/index.html","8841a459938be9701b79c0fa7156e248"],["/posts/5389/index.html","69d88a4d0fcd949e720761f9f4c8bf7c"],["/posts/61f4/index.html","a1a64f53b01866483ae313cf38562e73"],["/posts/6a81/index.html","2cb3b40b2bfc7eb533d96045e50ff251"],["/posts/7117/index.html","c566a377309326a36cdaad5d31ead86e"],["/posts/72a3/index.html","93817822823cad7990218297ac8554ff"],["/posts/7a8a/index.html","91dd2b5388f7a9b4fde6aaf3a65ea6b7"],["/posts/7f0b/index.html","e92251bec9d7f3114fc6bab6dc207510"],["/posts/7ffc/index.html","65c490bc30b2ec7f25f07f6fc4c085dc"],["/posts/80bb/index.html","8125d89a8ec7395e436cb179f354d16e"],["/posts/8e89/index.html","6e8a3bd9db800ca5a1e9871e6d3e138d"],["/posts/9295/index.html","d11a0e64791a33fcee641749f3b060cb"],["/posts/a5bd/index.html","0f5fa0e30cfdbba6ffbd4c94d22feb4c"],["/posts/a5ff/index.html","a4ea3a7dca54cd04e475922bc6c1cd85"],["/posts/a927/index.html","db211e54f3fabc9841cc85cca9821e84"],["/posts/aaba/index.html","1eb1d318ce9765779b69dc5f92c21c4f"],["/posts/aadc/index.html","989bc9ff4edcf7178e45df8337c5bcfe"],["/posts/b2fd/index.html","d699ba5235b2ad0bf5e5d66180948e7c"],["/posts/b5c3/index.html","25d68d4696aa65dc6c1f48783fc627ce"],["/posts/bb9f/index.html","978f1e8503fac57ec072e43f5da97d6d"],["/posts/c769/index.html","2e2ff3c64b27dd4cac7e5504f3121874"],["/posts/c92b/index.html","43a24dce965750a89187901b1acc6bfa"],["/posts/c953/index.html","5b165d268f9922ec4089a44af92619fd"],["/posts/d0c9/index.html","e7a8a19794ed3f887edc6df8670053cd"],["/posts/d267/index.html","757bdb0edbc5443ff3dd04cde81479c8"],["/posts/db53/index.html","88c7c5b8a590f4d916acef9dad75ab97"],["/posts/df50/index.html","dc2e1ff92224fc125a41f15947905652"],["/posts/e874/index.html","96d5d91d72aefda949b59adfef17f21c"],["/posts/ee16/index.html","6548a7b886ae086a56b9d6677ab267b5"],["/posts/f82c/index.html","4adab8139b70111e2ff4cb6b930a95ec"],["/tags/7-0版本/index.html","f53b9ec87faab5f38d9d24136e0a9205"],["/tags/JavaScript/index.html","4ecc016e5e15b5fb5153a2e0fe366438"],["/tags/MongoDB/index.html","c183d0c72f62d6c0b2fde3e2ad979b07"],["/tags/Nginx/index.html","e8e0fc58a4c7903568421c929aaea33a"],["/tags/Node/index.html","216f7b553c3822cb634e96ac58c2941a"],["/tags/Node/page/2/index.html","6af9eb63cd5bb1e00c74bf5652d7219d"],["/tags/PWA/index.html","fca1ffd22b25a1e7c8b3085359f21768"],["/tags/RxJs/index.html","357db1c71f0b1a75123edc85da9a6daf"],["/tags/Tomcat/index.html","735194bca4a0aabcf700161bbaba28eb"],["/tags/abbrlink/index.html","21a60fe57df2addd58bb0d4e1c2eb287"],["/tags/autoprefixer/index.html","2a9ff820323718cd85533728bfb9d642"],["/tags/babel/index.html","3dd2a7a6207a0b60c6399bbef194e5b2"],["/tags/chromeApp/index.html","fc2fa972bd46058f8c53b7c3733ed6c3"],["/tags/css/index.html","23efb496d0f45774fd0acb63444ae40c"],["/tags/docker/index.html","d62e693a8834179e5c0309db2b83d5bb"],["/tags/express/index.html","03c8f0233753086c21516af84a432106"],["/tags/flex布局/index.html","de0726f5ef84fb0fb11e629d05f1738e"],["/tags/fs/index.html","38b6f8f0cf81b252f4435ca36379bab4"],["/tags/github/index.html","6114b0bb3075c0c4d4f7743ebea05802"],["/tags/hexo/index.html","ba06da2ba3b269bc7a853c89389db902"],["/tags/iconfont/index.html","e3c2d597af350b1e3a13a9bdc9cdf1c3"],["/tags/iframe/index.html","23370121881c527baba7f81cda81bb12"],["/tags/img/index.html","3fb2c5fa438a08e5980432a19a9b402d"],["/tags/index.html","9df115ae2087817ad9906e0643b13ac4"],["/tags/ios/index.html","1e929852ae253d68f0f86c84f08cf995"],["/tags/java/index.html","abe03bcc05a7501af200c9e7a493959c"],["/tags/jwt/index.html","acc3cdb8af10c17b0dbe68116fa09ef2"],["/tags/leancloud/index.html","fd574d139c5635166fd632d016a290e7"],["/tags/logrotate/index.html","1df612ec4083ad02fbab1d919b774512"],["/tags/loop/index.html","76981666a3e1c4cea42a75ebbec130a2"],["/tags/mac/index.html","e79b9ad3d6a3691233526d1517c7a758"],["/tags/npm/index.html","df0c50534ac25fa4766892b6ec644c5d"],["/tags/observable/index.html","7d9f8c9c3b3b91194a0453323b3c460f"],["/tags/path/index.html","3b4610c22c4ba8b7313204202ef9d5a5"],["/tags/polyfill/index.html","994abfa476308695bde8106d5f6b45cf"],["/tags/postcss/index.html","89147c88ea081275c97741a5ec5b51bf"],["/tags/postman/index.html","ba2efa8c6e8414ddb142df25735aa995"],["/tags/session-cookie/index.html","25a02a5cccf1fb615efa8d923ae80b45"],["/tags/session/index.html","24e5b1914391d5303807665fd2dcee4e"],["/tags/shrinkwrap/index.html","41b36e1002bacdbadd42866f2109235a"],["/tags/this/index.html","5f15d97b55ff266ad6c9c0fd3d03ebfa"],["/tags/webpack/index.html","772d17a855b6721e560f2142bfc393e7"],["/tags/—-ES2019-—-ECMAScript/index.html","388b55561702af494bca695a68be2b24"],["/tags/代理/index.html","036275c322794191dcf52646e561ae42"],["/tags/代理服务器/index.html","43e3bff304336e5f089291563ebd2f0b"],["/tags/代码生成图片/index.html","833e83c87c1f86a3befb71d5b28d585a"],["/tags/入门/index.html","d81dca61c3d836596f8c37c62e5928bd"],["/tags/博客搭建/index.html","259c920f6d4317a66672ec25f71c4094"],["/tags/工具/index.html","1a19fcd869580d1a2eddbef105d2a536"],["/tags/异步/index.html","437a48681e646cae4aca5ba573081126"],["/tags/循环/index.html","deba7743ae7a3da617fcd4a6e91d98df"],["/tags/按键符号/index.html","668110799243a7a7a87530ae560e8e01"],["/tags/文档阅读/index.html","bc2f4f80a927cc49a50b719b83ded8b9"],["/tags/服务/index.html","146bab716a52d0b57f6001e6fb2193dc"],["/tags/服务部署/index.html","34a8c269b6feb029c01a2284cd8c84be"],["/tags/杂文/index.html","7d745364df4899411c8c0903caaf76bd"],["/tags/爬虫/index.html","0858386cb54b741c69b2ec45a4935b6e"],["/tags/经典问题/index.html","d7e181a8c0998bffd73719c60cebe575"],["/tags/编程基础/index.html","10828bf6ba1e92976ca10f91750fe0a6"],["/tags/编译器/index.html","eb00f3e102e6331480596e68bb7c2919"],["/tags/联表查询/index.html","1932f305601ba4989045990a146e0a43"],["/tags/路由/index.html","96034145e62edfc166fd58ed153d980b"],["/tags/运维/index.html","4982df0e6d2fd34d91068e5fa0d078c2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







