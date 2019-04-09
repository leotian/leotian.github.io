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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","3d93663fe677722026b0615b0e913f35"],["/archives/2017/03/index.html","95ab38a2bebfc1c031d0c5c69dd03d9b"],["/archives/2017/04/index.html","5458d3c06f876392133c12b52e558a6a"],["/archives/2017/05/index.html","dd8fccc5ee0fc11c9ac9ef4a20cbdd61"],["/archives/2017/07/index.html","6334742dc59fdd1fa962906f367c9ff8"],["/archives/2017/08/index.html","cfe100fedf0728289e69efe5b605b858"],["/archives/2017/10/index.html","1e335153c36b58d09dbb991d1a9a3ef5"],["/archives/2017/11/index.html","68d0a930cef2d7be3f8175cc0578771b"],["/archives/2017/12/index.html","034740422091d3b96bc707875bd6446e"],["/archives/2017/index.html","2605f7b0636c95e5df78c40b54ee32ba"],["/archives/2017/page/2/index.html","45ffedc747dbb5d2d5be90ae881309a2"],["/archives/2017/page/3/index.html","8c8afb9955ba436dc683cff9c609ffaf"],["/archives/2017/page/4/index.html","bbca910d2d1d7cead8cf63253cebb058"],["/archives/2018/02/index.html","636b236c3e9f3507396b95607957f0b7"],["/archives/2018/03/index.html","f50eb31397bac36625b65233597ad26f"],["/archives/2018/05/index.html","01ff261b5909bab3fd1bbac8b95c2253"],["/archives/2018/10/index.html","7f1e69f29901632226636c64715c1bc2"],["/archives/2018/11/index.html","92dbcd1fb35a29cf166dabfd3ac53936"],["/archives/2018/12/index.html","07719f7f1842305815c146efb8e1e3b6"],["/archives/2018/index.html","29943e38d78fd488eec4c0566bcdaa1d"],["/archives/2018/page/2/index.html","b032479dce9e3a9f0c50fbeba21914e3"],["/archives/2018/page/3/index.html","2603d343013222d126db80167b21b5a6"],["/archives/2018/page/4/index.html","ee3bb5ac3a1a8a26182953e21687fa87"],["/archives/2019/01/index.html","96f4abe654c8b2f206c5e11cbb30eb8a"],["/archives/2019/02/index.html","44c21935f4451b4ec6e696307011bf4b"],["/archives/2019/03/index.html","0f5bb3ad26e0be84bec03fe783e7a5ff"],["/archives/2019/04/index.html","c0469cca1c7a24f033545e620da20fd8"],["/archives/2019/index.html","9e8d5309b4367df0da46d30380a0fcee"],["/archives/index.html","b86a39484bd4e42aa117c13f8acb0921"],["/archives/page/2/index.html","116f7b2905bfae27c2ef91fd92b0d976"],["/archives/page/3/index.html","9ab676018eeff84bc8b10288e01e8154"],["/archives/page/4/index.html","892e910a25c7508271330aa2971aca85"],["/archives/page/5/index.html","9365296ee631c0900c97d98b435f5d10"],["/archives/page/6/index.html","32b47c4deb0a7da48dff6995cd75c874"],["/archives/page/7/index.html","ca9348f9faa95dd155dbd21e79ef331b"],["/archives/page/8/index.html","75b8109c1377dabda8995c149672b267"],["/archives/page/9/index.html","7ac4226d71e3d2ea99f3e39d3ee55c77"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","bd840b247e3f51caf6d8226c4813a79f"],["/categories/index.html","0e0c28a1e966440b7c7efe146df8b025"],["/css/main.css","a099dc00a0296e8e54a2c2d66d9ebe03"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","37f061df90448eabc58ceb31c4f8cec3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6592e90e843b6a00f867c868d4939512"],["/page/3/index.html","e927b5913bdf5fc7b9a8d7b0708dcb66"],["/page/4/index.html","10cff42129f852e702dd13a4e12f8da6"],["/page/5/index.html","09299dd89adcd8896f59acb042c24677"],["/page/6/index.html","2679711969b7cab7f1421b7f421181e2"],["/page/7/index.html","91340a683979f8bdffab0bcdb9a6686d"],["/page/8/index.html","a68756cf9d75d3b874709d9508975aa6"],["/page/9/index.html","5e0cbcb65ede9ee55ba5a3e86388279f"],["/posts/12fd.html","78bed9a5915ccdd62bb00da252fcc79d"],["/posts/1d4e.html","43e26689ce1665106667537242333751"],["/posts/232a.html","b550ef55394fbc8e3aa603fe2bc9ec5b"],["/posts/2465.html","736d9a6283c6a409e54aaedefd31a4ca"],["/posts/25df.html","cbcecabe2fc4f84ab6ab07ea267902dc"],["/posts/25f4.html","6a870ef004bd91446e8d0d440909e99c"],["/posts/26fe.html","dca3da33721fe0c673fc5fab7ad7bb3a"],["/posts/289d.html","cdf35b92cbe4f3fe1e74db8d91075eb9"],["/posts/2b83.html","3586f3ac2f07eef9f1903b71959a0154"],["/posts/3b3f.html","540bf48bd7df6739bedd21e9712eed6d"],["/posts/3be7.html","413470fa6e4278d03cadbf9205784f79"],["/posts/3d25.html","3530819a744cf6fb6ddc83c83806569a"],["/posts/435b.html","2ba3f48c7047753a54a1a08a19ef7ce4"],["/posts/61f4.html","6a7def966108376878b72561b555fb4a"],["/posts/6a81.html","64455fc5c9cdf27deb5e29aca4574bb0"],["/posts/7117.html","bb54456b3f45a427b5ed58f42beaf15b"],["/posts/72a3.html","cf3328911c202f5f9e6980c5ca111b16"],["/posts/7a8a.html","9ef75e3b0970725f0b39ffb6c9a28178"],["/posts/7f0b.html","d9ccf3f81dc10b15dd4d7864eb4b6079"],["/posts/7ffc.html","cbe13f19d974089118f24e9451b4f1d5"],["/posts/80bb.html","4564a7bf95eb18d205e37521d34bd42b"],["/posts/8e89.html","6f707820d3a6a611ebe2c3fcf228214e"],["/posts/9295.html","e89d39f2c330a733b62375dda9f38994"],["/posts/a5bd.html","73a844880fa4009aca5226f27f429cc7"],["/posts/a5ff.html","69b6b455c7e204e8ac8aa20186a586da"],["/posts/a927.html","c739f5227b5d985b623afb981a19e63a"],["/posts/aaba.html","28f23e4535e43eb1d0ec58693e3f0468"],["/posts/aadc.html","8aa66e94f81f477903d384dc99329220"],["/posts/b2fd.html","e081c600d37749d1b4a37ad24a1c318f"],["/posts/b5c3.html","c8a3d3700a20d979eac976359b17efc1"],["/posts/bb9f.html","77fce373b2af2bd101fc1f9dcf78b350"],["/posts/c769.html","6ff5912cfef4b7f88a7531f304975a3d"],["/posts/c92b.html","3ad4f53197afc9c837d356bde1eab123"],["/posts/c953.html","edb2f62b1039035932e69e740e906ffb"],["/posts/d0c9.html","7d74cebc7787cb2ce5a631830054647e"],["/posts/d267.html","3727e6648f623f1a6ac4cee6202b5929"],["/posts/db53.html","19ee55336dc4722c46b10297535c6cfc"],["/posts/df50.html","8b7861db57679953c434ef5240626731"],["/posts/e874.html","476d7d318e31855d82b2561fa47fd8b6"],["/posts/ee16.html","83574eb1f7e533d23f649893562030c3"],["/posts/f82c.html","8e0547beccf8000d91ae228422bf309b"],["/tags/7-0版本/index.html","053d5d9d8538febeaf323755216f38c6"],["/tags/JavaScript/index.html","c02a4c79047aec8820db27ba76d42579"],["/tags/MongoDB/index.html","139e9b1892f1044331ed14d970e27d43"],["/tags/Nginx/index.html","1a49b4dfbc97d42815b9be5232f8c30e"],["/tags/Node/index.html","6cd6a1434061896d75da21ddd033a9e1"],["/tags/Node/page/2/index.html","12d52f653e14bffeebc4b5c22c9d97ab"],["/tags/PWA/index.html","72816e1ce8ac3b6f4c992914299701f9"],["/tags/Rx/index.html","764fe1fe74d0e8271cc4859fdd0460dc"],["/tags/Tomcat/index.html","90318e89640b21360f00a5f3bf553c7d"],["/tags/autoprefixer/index.html","4a50fd57ac9a6f892ebc395bce24fd75"],["/tags/babel/index.html","fe70a427e089711eae89c2da57471ada"],["/tags/chromeApp/index.html","ae0830ba5f1590df4ef5bbd090319e0b"],["/tags/css/index.html","156e431d205a03ccb8c5ce738543d319"],["/tags/docker/index.html","e47d7367102c54fa0ca07bf384976612"],["/tags/express/index.html","5337980ff22f2c29b99100f462417254"],["/tags/flex布局/index.html","f53a193c7c372fe21853e20c99d9a86a"],["/tags/fs/index.html","9962507de69fa86fdd0244f4667ac759"],["/tags/github/index.html","bf3d84bdbb45cbdfbfbef9024772eaad"],["/tags/hexo/index.html","4e2e394e963807035dc0ca0f15574f24"],["/tags/iconfont/index.html","40f1420534f46b444b9407689e73e248"],["/tags/iframe/index.html","c4545f00b26a6ae2e7a08fc271452d4f"],["/tags/img/index.html","9744f51e5060fc7a348cbda9356e6ece"],["/tags/index.html","ddc0e133c812e0217264732d73710be1"],["/tags/ios/index.html","912f0cfd916a8f6d30fd9ff0dbb75e70"],["/tags/java/index.html","c0560b0f132bcb3fb3021fd2c1c47d9d"],["/tags/jwt/index.html","b805c08e3e1c1dff040e60550d0b38e3"],["/tags/logrotate/index.html","81524ef16ff2ec3257ff46437fb19169"],["/tags/loop/index.html","d559a0fef89cfa22fa3c21ce819ffebb"],["/tags/mac/index.html","927f41af60275005176b7a50e4f22cdc"],["/tags/npm/index.html","644432aba72b40a8f84fbdb53fedd67e"],["/tags/observable/index.html","ddfb479bffaf028960fbe408538aac8e"],["/tags/path/index.html","33b30390645848e73eec468d716ee947"],["/tags/polyfill/index.html","7b6a0725109d6aab1271f586995f9878"],["/tags/postcss/index.html","e0b20ca899f05a405b4703525c56b6fa"],["/tags/postman/index.html","6dbed62ac78f43489e762e37ecdf0d3b"],["/tags/session-cookie/index.html","8c5915a8a12c74a7ed90d186cadb45a1"],["/tags/session/index.html","461d4f07e154f2c87f3c1b34d08e3001"],["/tags/shrinkwrap/index.html","0a71b55b462888fe7118fcba2d3b5724"],["/tags/this/index.html","6c8a419327f57ae43a3673a363eed2af"],["/tags/webpack/index.html","888f3db543bacd8a2008426a449b6883"],["/tags/—-ES2019-—-ECMAScript/index.html","0b86e320f87fff78679c3853ce73a808"],["/tags/代理/index.html","abe800a71cdb3752061fe97f1fd38e72"],["/tags/代理服务器/index.html","501389c052469bae705690dbec5ec0fd"],["/tags/代码生成图片/index.html","588c6640699b0b76e0b8542dc006d346"],["/tags/入门/index.html","4d7e9621ed65bfa71042d5748a75295b"],["/tags/博客搭建/index.html","57c832171cc50391693a11f367c066e1"],["/tags/工具/index.html","41db59d36e607d07937715b6e0621edd"],["/tags/异步/index.html","2aaac050734c7323eccd3b31ef489b9f"],["/tags/循环/index.html","1b1df20dc4200711ec624b2400d48a40"],["/tags/按键符号/index.html","fa631c74508c895367740c95762bba8f"],["/tags/文档阅读/index.html","2724b5f5268d40f68b10a3fc9ddd7762"],["/tags/服务/index.html","7575805a498a8ceb56cb653190c48e00"],["/tags/服务部署/index.html","143a5330457822d495eb5ccf829bb20c"],["/tags/杂文/index.html","ae7238c9e1f75ca8759d307d1f7a55a7"],["/tags/经典问题/index.html","68ad46ee6d21c8e33c5dcda0cdd5c062"],["/tags/编程基础/index.html","6e8ca6f0069b58795f22c492966c75af"],["/tags/编译器/index.html","1dfa6a45d0357c99ce79f75d93ec0681"],["/tags/联表查询/index.html","510433079e01a3c2b4639b1f3935d5d7"],["/tags/路由/index.html","348b30f6adfcad600976311a8741ec39"],["/tags/运维/index.html","1585965d110682cda6094e640ed9a6a2"]];
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







