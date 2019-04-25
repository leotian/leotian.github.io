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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","53f5ff837073869b72bf671a4eda9d49"],["/archives/2017/03/index.html","bfa0b4e13848f827dca3031654a7a34a"],["/archives/2017/04/index.html","219dc9d3aedee9ffbc62baee6a753f5b"],["/archives/2017/05/index.html","40e19f6c6f16875f7549fe7715a91972"],["/archives/2017/07/index.html","975694efc4244a277ec41a5baad2de94"],["/archives/2017/08/index.html","6e5076ac3a07c08dbd21a9b59f888e2a"],["/archives/2017/10/index.html","6624ce4abf25705ee9a041cab688369f"],["/archives/2017/11/index.html","2a9b28b60f8506c2405336774c416ad8"],["/archives/2017/12/index.html","aa18e3540c8d001e283b74faca7bf68b"],["/archives/2017/index.html","191e855a2992356a5f6f774e3734e7da"],["/archives/2017/page/2/index.html","a434755e46384d20807bb8e1fc54481c"],["/archives/2017/page/3/index.html","5f8604e0dd152cea6132a541b5e4670a"],["/archives/2017/page/4/index.html","e89edb080682e2851d560b3a1e4fac3a"],["/archives/2018/02/index.html","2c906b34c70574e169d114eb400744b6"],["/archives/2018/03/index.html","ff1b12a05329fff58ad0812134d1cfd1"],["/archives/2018/05/index.html","c7d316da5b2ffaaed6dd2e74629cc46b"],["/archives/2018/10/index.html","fb141a1c668563448923c75601351d58"],["/archives/2018/11/index.html","72066af741ff43e6292d0b2658e6aa6d"],["/archives/2018/12/index.html","6b6b360f386e8ab7bda9199dfeda2a15"],["/archives/2018/index.html","37b45bf242c9918582fbfb6886199128"],["/archives/2018/page/2/index.html","f04c0c16651dae5ac831c4f46ee44692"],["/archives/2018/page/3/index.html","b011c71b9d554fdce8d8547935fad6d6"],["/archives/2018/page/4/index.html","e63e7172efa5d9167489d8bfe6a56b75"],["/archives/2019/01/index.html","c0726a2ae2dca09de3db4db7f79f5b9a"],["/archives/2019/02/index.html","d40766a49c16b3ed997c2f98ebfa804c"],["/archives/2019/03/index.html","4ca477cad56c7d6adbf5fc5e2530c555"],["/archives/2019/04/index.html","61bb22e108e1d547815bd9b61e481711"],["/archives/2019/index.html","b78ac5c2500018a46e823331bfdbc4ae"],["/archives/2019/page/2/index.html","f232bd22511d74fdb4043541de1f30c6"],["/archives/index.html","24ed8634b91c1ad20e489c6a37f58918"],["/archives/page/2/index.html","570eeeba8da93d5fbc81c6079062d6c1"],["/archives/page/3/index.html","52a4e54f170849c59186d40baf71f8f8"],["/archives/page/4/index.html","1c76f6ba30fe05c571f2931514be2c9f"],["/archives/page/5/index.html","319550836fd24283d5a6abd1135e31f2"],["/archives/page/6/index.html","11db7017883cdc2da3857fff74e99c43"],["/archives/page/7/index.html","65ff13cacdbb4e0163e171fbc11bc825"],["/archives/page/8/index.html","08ab384081917b6474e11442f79ef7bb"],["/archives/page/9/index.html","a1c4a1eb33f204b49a8f7e7efb4f38af"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","7839756a2181177db64ea1cd6761a83b"],["/categories/RxJs/index.html","0aebc991ba45d50910ef8a79ef8f7c0a"],["/categories/hexo/index.html","6679161e53975947d948315aaffbe65a"],["/categories/index.html","07b67222cd03e39e01f95bbb15d23731"],["/css/main.css","2596a8ac77648cbded555e5a34a0389b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","3da481bf8ddaa11a0f1bdc80384409c2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3ee543dc169414db1c58509265370f44"],["/page/3/index.html","d46fbbb3a25d894836c5efd9ca09e314"],["/page/4/index.html","e78caaa9c33cd8e835fa7317545001ac"],["/page/5/index.html","a553630a11d38557ded395db375345e9"],["/page/6/index.html","e85c7df739fa9fd67876386cbb7f0c3b"],["/page/7/index.html","84d72ae507f4c17ef7385a1c3fbdaf2c"],["/page/8/index.html","e046531b6fbe1f23a2b5c141e2babbb5"],["/page/9/index.html","beb9f2059c3340588e864ad2d7cf6662"],["/posts/12fd/index.html","fde620f498222369a906a05bc69bf677"],["/posts/1d4e/index.html","26a56721933be862f13d3df9fc8f9829"],["/posts/232a/index.html","e7a04ac273c6c31003156ef5e6d3cb58"],["/posts/2465/index.html","d6e782031dbfd11521b72e97ea3e645a"],["/posts/25df/index.html","129ca9077ac54a47e3f0cadf3334cc34"],["/posts/25f4/index.html","7b19ec0fd3e1781c805cd1fa6364d735"],["/posts/26fe/index.html","8839155717e165c5d3ab203d2f44de5e"],["/posts/289d/index.html","a14312ef37db1495d5c6754171859bda"],["/posts/2b83/index.html","86bbda65579c38bc5240c739d4405a70"],["/posts/3b3f/index.html","ab233074ff9410a77b8bd1a54578511e"],["/posts/3be7/index.html","89ec88e6ce1ebc6f3f9aeb53139c60c6"],["/posts/3d25/index.html","aa8e54dced8721aa600b7de0a5748521"],["/posts/435b/index.html","d81c3a9116ff713bb0200238494fc1a5"],["/posts/5389/index.html","f8e98ac7d76a3e7a466a23776011ba56"],["/posts/61f4/index.html","553191499a56371acb3e1af080ebc4f5"],["/posts/6a81/index.html","3a7422e832e4028c42f48995b6d14f57"],["/posts/7117/index.html","f99b97138e58c4b41c308808299d3169"],["/posts/72a3/index.html","a511537436719067c0112715f59f3664"],["/posts/7a8a/index.html","c580f3e1eb803e545091b169d113007c"],["/posts/7f0b/index.html","3059dc0499c9299fa279da673697e1d2"],["/posts/7ffc/index.html","22f58019f1f7d9c588492e16bb2b2ca3"],["/posts/80bb/index.html","ed0ae1b1e9e640e72f111507beb1a127"],["/posts/8e89/index.html","f6334a883912e4ef71fff16f74c88066"],["/posts/9295/index.html","42edf019fb9ae10b19fa6123b9cdc33e"],["/posts/a5bd/index.html","c6e36eb5d520e777595ec1fd8b9f8a1e"],["/posts/a5ff/index.html","c1f106909a76bdf00e408bdffc500f8b"],["/posts/a927/index.html","839b1e8987fa4be9d6abfb8b257bc8f5"],["/posts/aaba/index.html","a84acb5cbb6ef3e0449cc06cdf372e69"],["/posts/aadc/index.html","8e8d398864b855eb57e7b688a2b1d658"],["/posts/b2fd/index.html","2a7ed242fc5258cec948af1feffcf839"],["/posts/b5c3/index.html","486d25c78adf26409d4214b7a998aaf4"],["/posts/bb9f/index.html","0a8b5e2ea99f2954ab5a54742565d642"],["/posts/c769/index.html","e4e645f08c14fe541d3b3f76050da3ab"],["/posts/c92b/index.html","2282b5f7cc17450fbedd13ae7c9923ee"],["/posts/c953/index.html","6797e383d71e051c464f9fe283a9a45c"],["/posts/d0c9/index.html","59eeb905476a46e1995f1fec3e76b863"],["/posts/d267/index.html","1e80112d5476730f2eb8491bf4a5bdf1"],["/posts/db53/index.html","a16710d22adfdc88ebb19fe24a08bcb1"],["/posts/df50/index.html","9d7b62ea55280761590fe6c4049cd38e"],["/posts/e874/index.html","7e5edb2628dc0487a189b6084951d369"],["/posts/ee16/index.html","03ff4b6957a1ace38959db229053457f"],["/posts/f82c/index.html","56e61d3b4d6317d0b888e43427eca3e0"],["/tags/7-0版本/index.html","338d7fd25203f4cfea3af45f04f08ae5"],["/tags/JavaScript/index.html","12e7173087ba7e81595cf47bf78de2e1"],["/tags/MongoDB/index.html","e8635810b497aeae0519f878dafa6ca3"],["/tags/Nginx/index.html","3d6195a0cb69310a647d873a23042915"],["/tags/Node/index.html","bd9f6fad0ff51772cd376e56bc58c903"],["/tags/Node/page/2/index.html","2fd30526e33ca7ae5dd577cd2c445f2f"],["/tags/PWA/index.html","9a26ee54f5bda867a7ab85074340274e"],["/tags/RxJs/index.html","eb46db440692a54557972f77dba5b9d2"],["/tags/Tomcat/index.html","bffd0a3de004183e5064aaf3a4a2f711"],["/tags/abbrlink/index.html","9984a5e0f94c97cad507913b9e04a98f"],["/tags/autoprefixer/index.html","7ca2cc13cbfba77432aaf7be61ef8adc"],["/tags/babel/index.html","46905067d73861b77105d7784844443c"],["/tags/chromeApp/index.html","9ad03e6758ffd9aead9ebb49746f1ba2"],["/tags/css/index.html","b23cd9d05c2c5ba69fbd469ed121a084"],["/tags/docker/index.html","2608e526da9d9a99b2d73cce6aa9d52e"],["/tags/express/index.html","01e3b59166b2db78938f97499bd53eae"],["/tags/flex布局/index.html","3bbd4d6cac93b15d73970916e454ffce"],["/tags/fs/index.html","c8ad127dfd427326ac3f77cc23fde065"],["/tags/github/index.html","4164c289e4fabeab265f6bdea5d7f8d5"],["/tags/hexo/index.html","08cf4a14289934c200644aa0fe29276a"],["/tags/iconfont/index.html","ee927a09553932b2a4d50e2b4c2c24bb"],["/tags/iframe/index.html","1c9c9922e1c2bd513970ab58af3ec6ab"],["/tags/img/index.html","5ea51016d1b87fea323333038dc3553e"],["/tags/index.html","6481bdff94a30bf6ab56907f3b0d6267"],["/tags/ios/index.html","5b50a0716f7ecf6dc8b969d231719caa"],["/tags/java/index.html","40dc77b672bd35c18d3b79272205c202"],["/tags/jwt/index.html","62292e1403b21f13f49026edc9386f00"],["/tags/leancloud/index.html","69404bd94a9e802758f354452df41f08"],["/tags/logrotate/index.html","13a8d1a08adc1258e115ba9337953143"],["/tags/loop/index.html","812dacc5de73331b2a931f008c7307ed"],["/tags/mac/index.html","7f013ed276c61953bc4d2c4e9c5aa933"],["/tags/npm/index.html","43259274a92a2bc4cec39370237489e1"],["/tags/observable/index.html","56bed1587da3f3dfc60b66d705db1666"],["/tags/path/index.html","23b336fa7bfc9797ac68041ec674997f"],["/tags/polyfill/index.html","d4730520636c93a0f00b1cc48b02f4d3"],["/tags/postcss/index.html","c083da2b3651359121e60fcc867ee059"],["/tags/postman/index.html","51393166792ef8dd98993445593e2532"],["/tags/session-cookie/index.html","36807f6196a9adcae3725a5f8e179c80"],["/tags/session/index.html","20a5e65be6a222ebc8ffdb353d6d4904"],["/tags/shrinkwrap/index.html","226bf4929f1ae382b5a81071c207880b"],["/tags/this/index.html","375bca27659aad1440008219962cdd37"],["/tags/webpack/index.html","67af4cebc657ef3a45fa618629778752"],["/tags/—-ES2019-—-ECMAScript/index.html","f13d04aec02f155ab3b046c9a830ae7f"],["/tags/代理/index.html","845da97415a350dba225b2c1518cad19"],["/tags/代理服务器/index.html","4fb56ed23650327b0bf852e89790f47c"],["/tags/代码生成图片/index.html","93b7c4462b8e3c21ecc158134816ef63"],["/tags/入门/index.html","c0200e4288cbe24a4ad17708989dbb09"],["/tags/博客搭建/index.html","d22ce579d90cd4a4ede7a161f470e658"],["/tags/工具/index.html","c65742d1cda1f5bec50312ffa16740ef"],["/tags/异步/index.html","8c132f62b11262c15d0ea5d8cee6a167"],["/tags/循环/index.html","e51dab5cd39a715fefd0709d3753447e"],["/tags/按键符号/index.html","c259719530c799c8549218ed83c913b2"],["/tags/文档阅读/index.html","1488b5c8422bb74885eae27c59399675"],["/tags/服务/index.html","572d2258ad36d0f8d281258058eb5084"],["/tags/服务部署/index.html","9e23cd33362238b4cfaabd8b139ab899"],["/tags/杂文/index.html","a4328af0accd474d28115484677eb3d7"],["/tags/爬虫/index.html","60bfc7b380d3e00fad730153a233ce00"],["/tags/经典问题/index.html","c71e23cec879441f7e3d31166dd2dc51"],["/tags/编程基础/index.html","fc9e226fc22d2ba655ee1cc53f8a4102"],["/tags/编译器/index.html","fe00c8214194e1aef0df5af219cdfd5d"],["/tags/联表查询/index.html","4e8a421f19c868e89cb0834bba9fa166"],["/tags/路由/index.html","70d537e35d8b969b10e064ae69f7b14a"],["/tags/运维/index.html","1a76f0f2e86d4572f80cf8bbf034a162"]];
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







