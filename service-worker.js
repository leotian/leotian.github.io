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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","750b81e55e41e0013208d989ce75b673"],["/archives/2017/03/index.html","591de831102bbf71ec776e1a6955aba0"],["/archives/2017/04/index.html","b053f7319fbfe14c3c30b46d8863fa83"],["/archives/2017/05/index.html","60e6913bfc7969fc93cbe6bb168a3411"],["/archives/2017/07/index.html","ab867400746b9f8579647ef786254c62"],["/archives/2017/08/index.html","ad1da684bcf546032482b10eb7ff1a5d"],["/archives/2017/10/index.html","df34ea2303ae553aea07593f98231d8e"],["/archives/2017/11/index.html","e46331d4b540855ef23f7484c7c13fa6"],["/archives/2017/12/index.html","259ac7b470c2b24f359adc1a8a7e4b21"],["/archives/2017/index.html","0eec3f8c66cb226ea16fe8c48ed8c095"],["/archives/2017/page/2/index.html","cb07079025457635e9eca92f1e6d326e"],["/archives/2017/page/3/index.html","a766c187058b6ee9d6e2cdf471270d05"],["/archives/2017/page/4/index.html","ab0f050eefb62ee85d190a443df4b573"],["/archives/2018/02/index.html","3792f9665993e9db0be947bea59ef667"],["/archives/2018/03/index.html","d7a598f1f7362084efdb309fe57b3ece"],["/archives/2018/05/index.html","f24a9bf79d3edae7c14c6d74d612b1a0"],["/archives/2018/10/index.html","9b6cd5c6a8e7a713eecfc6f6c9b70e83"],["/archives/2018/11/index.html","41f958307798a6dd136f76d0b1973ed9"],["/archives/2018/12/index.html","f38be67350adc25762b1a9d0f66066d4"],["/archives/2018/index.html","50c95a0b95f9331d3b8a8c025b2bea04"],["/archives/2018/page/2/index.html","0c8fb38433ca076629cd7a4ed96d8f9a"],["/archives/2018/page/3/index.html","f3556de8a7606feebdaf3a63f7589a65"],["/archives/2018/page/4/index.html","65b2673711e37b1e03627b2079081a90"],["/archives/2019/01/index.html","b8514cf2a647f7cd19f5e53d8d0f715f"],["/archives/2019/02/index.html","96d61f6bcb5ac0d012cb91f1ebaf9c7f"],["/archives/2019/03/index.html","abe8c314c32a9a63cc63cec009409e2e"],["/archives/2019/04/index.html","ce0c9609eb56084f869445da34f9ec2f"],["/archives/2019/index.html","a3ea49ae099a4dc07b7fc6a91ed2bc1c"],["/archives/2019/page/2/index.html","ac7da60fec97e5e52e1886b10c342416"],["/archives/index.html","2b043d6b9796d4d4dd6a550026b07d19"],["/archives/page/2/index.html","bd4edbeea964a61091ff362963d78ae7"],["/archives/page/3/index.html","5db6edfa74c499d689b5c285dd43182c"],["/archives/page/4/index.html","58505aaaf0c37b5f20ac5bdd940aec5e"],["/archives/page/5/index.html","d8c586f255a8a9cffd8fb83a68189eb7"],["/archives/page/6/index.html","e0ee61035a7120b6020b15bbde7e5510"],["/archives/page/7/index.html","c52a213997b79663a894f7b1ae302091"],["/archives/page/8/index.html","f339bd8cf90e4b83f53adf2da308eb61"],["/archives/page/9/index.html","7144be0f9dae1b6ae7831a11c9c5681b"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","a345eb424ef3cb82a00189540900bd7d"],["/categories/RxJs/index.html","e03f3fc386e29ee752cd30fc6d0c760e"],["/categories/docker/index.html","4f3c4aaa9717a0db8bc2cd2414b56586"],["/categories/hexo/index.html","7ba925756b80978af2116a9bcdbbf115"],["/categories/index.html","80b95a8b1a68083ffd24ea402ec6f9cb"],["/css/main.css","21dc40ae57210d389a8a2df316ef7371"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","8864fd06e33370e54f55ce1d1dd88d98"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c8b05cd5ad8f9549da402ccb34c15330"],["/page/3/index.html","480f71c30a9364accf6ef82237ae0e30"],["/page/4/index.html","4c23b2d020884d3655723fd0559238cd"],["/page/5/index.html","10dad7ff07cadf0f6ee8630ebc374f1c"],["/page/6/index.html","24804a1b268cb89230717fba8a39eb98"],["/page/7/index.html","3ffaaf1bd626c1feace198860e622171"],["/page/8/index.html","c7611f6e2bfa0477d3bed59cc9bd9f02"],["/page/9/index.html","9cd3cde5bddd7a1aa02f83d34cd265f7"],["/posts/12fd/index.html","9e936fa9b656eefb45406e25ac181d82"],["/posts/1d4e/index.html","3b773e4fce18ad2b9d3292de5ea6ef65"],["/posts/232a/index.html","6770d829689085e31ed774e1d2367c30"],["/posts/2465/index.html","52115c09837abf6e28f1958034d5d3cd"],["/posts/25df/index.html","ac8ee80730b3bd60ced59f2d554a791c"],["/posts/25f4/index.html","eff186772bee7bf771dbdb315c8198a8"],["/posts/26fe/index.html","4d2db17d4aedd82cd5667edf6ceed2ae"],["/posts/289d/index.html","74cec71e5537537c3368f31443b8f372"],["/posts/2b83/index.html","d8bdcbc372d93cd78ec863393063b837"],["/posts/3b3f/index.html","116a28811ca154afca17453faf8962c6"],["/posts/3be7/index.html","529cd75d83f50fb9c987b1aeffe34683"],["/posts/3d25/index.html","5bb5197d616e36287b45fb738d1022c7"],["/posts/435b/index.html","674bd09e358e1ededc35ce5cc5b7a416"],["/posts/52b0/index.html","15b4a0485baf81ea6fa13ed0f3c5c000"],["/posts/5389/index.html","1edba7874544d72b588a61beac647825"],["/posts/61f4/index.html","9e25547cce9ac30c765ae2cb96cf1090"],["/posts/6a81/index.html","8bd085ef9200c44ea1b77b79e43f3a77"],["/posts/7117/index.html","7fc8f6205354ead96970834df9ca6e56"],["/posts/72a3/index.html","1e3f5b22d63481f0662e565e5435a5fd"],["/posts/7a8a/index.html","f54246608fa073bb084a22f791e61874"],["/posts/7f0b/index.html","fc80f8ff1289096f2869051a5b2a04ae"],["/posts/7ffc/index.html","f8e4856096fc4001af00e65f86d5e5c0"],["/posts/80bb/index.html","db30e6f64ace766d7f7a8f0e25fff074"],["/posts/8e89/index.html","7c59d7d24689d89340ad085f95a680c9"],["/posts/9295/index.html","03cd8fe9777a1378f7bb2ceccf5f58ec"],["/posts/a5bd/index.html","cf1dfdabd6562642f0b9f89a804d40c2"],["/posts/a5ff/index.html","bb2512f74496ecad4b736cc14d394ac2"],["/posts/a927/index.html","902db0b64b1ad38fe16c2f9d01b26823"],["/posts/aaba/index.html","aa52acaefaf8b1f9526ad13d78364176"],["/posts/aadc/index.html","3be11ca4326beeaccc86eae781f5230b"],["/posts/b2fd/index.html","d79d0809417f05ca2e62aa5451c20558"],["/posts/b5c3/index.html","af4e80b54bc8c25b5482f546aa7b75cb"],["/posts/bb9f/index.html","1049f8b1752cf586f1f9bffe1a63703c"],["/posts/c769/index.html","590bd5f3dbffde7407427574167891eb"],["/posts/c92b/index.html","48379894566efc44169774b1f6d4c813"],["/posts/c953/index.html","6ba541d2d16bbbcc613a48b10f80f54c"],["/posts/d0c9/index.html","303b2abcd1d3ea38bb6347760edf78a2"],["/posts/d267/index.html","9383851fab24421930efb9464431805b"],["/posts/db53/index.html","1030501351b7f83bdf531ca2777bd7e0"],["/posts/df50/index.html","4a06ccfac1dfa7af6cdcebf8c42c4de0"],["/posts/e874/index.html","f7582410e73eda28731a74bf0c6d3bf8"],["/posts/ee16/index.html","1ac0f452e8fd1063fb5d15b2c378b42b"],["/posts/f37e/index.html","b371928d0d1779ae6cdbe9bd61d1de22"],["/posts/f82c/index.html","e18135feb847f08ad8f2706f4c8d40dd"],["/tags/7-0版本/index.html","9d08490e55c0023e952e0c4e01ca4ad0"],["/tags/CDN/index.html","96b3fbc3c82f30902ca2e9cf68f66e58"],["/tags/JavaScript/index.html","a94f3cc45a77f065c5ce39f688160bfc"],["/tags/MongoDB/index.html","89dfc4fb2b8c8298d1896d8922d353f4"],["/tags/Nginx/index.html","f65177ffaccbeb1dc624cbeb4d8118c2"],["/tags/Node/index.html","8430eb00d44b7098f7a7a7b41f2dd9f0"],["/tags/Node/page/2/index.html","7c7d606e542facace5293cb68e404714"],["/tags/PWA/index.html","092ea36c642b1bc8bab5755a65150a6c"],["/tags/RxJs/index.html","480a5d96dab894854a7e7e95b945c735"],["/tags/Tomcat/index.html","5229022abe057f23459663b2b78e5bd1"],["/tags/abbrlink/index.html","d46aee4d9fe77316dab8493f49de8ccb"],["/tags/autoprefixer/index.html","33f535606c4c480f2d769bee258f44c8"],["/tags/babel/index.html","16bb9600718cd5b39d4e3143e9eed896"],["/tags/chromeApp/index.html","66a95383962421fcb00ab963ae960dc2"],["/tags/css/index.html","087a9ce6f0fe83c391e2052d88545237"],["/tags/docker/index.html","0c7df56f9e5770d511c68bddadb6c678"],["/tags/express/index.html","68b9e2eb141ca1d31ba60d39dec5edba"],["/tags/flex布局/index.html","2dd74615e4ac44d6a6ac7c65833cd339"],["/tags/fs/index.html","951865d27b7c0a63b98134e6727efcf9"],["/tags/github/index.html","eab2f076ddebfc6de3c003e408903081"],["/tags/hexo/index.html","810be0ad30cb5d289ee897724bde8202"],["/tags/iconfont/index.html","1a15a25c916e8cabfa136e785e093006"],["/tags/iframe/index.html","37d1f26cf5ff0e1a74c1bc75edb85c56"],["/tags/img/index.html","09febea9cc4b8376d181425099c5e007"],["/tags/index.html","e65db643ecdead935286dfbc9970b3ab"],["/tags/ios/index.html","8b0a54e01c034ad47718da42fdf9ccb9"],["/tags/java/index.html","150a91146a91047a335daed9bd3d3a98"],["/tags/jwt/index.html","ecf4f5502bb49f1bf8873d5387e8df11"],["/tags/leancloud/index.html","05c8ee86818076847e1411d8ff4fdcff"],["/tags/logrotate/index.html","ff0bafde55b342cf361c6ac585f1bff3"],["/tags/loop/index.html","c92efd478aaa70ffe4f05cf7d499a007"],["/tags/mac/index.html","6082e40b310133dd1644b72e6dca7b48"],["/tags/npm/index.html","7e0686089d670889e5d4616f246bd889"],["/tags/observable/index.html","1f150f509b12199e775831f3e266ab9d"],["/tags/path/index.html","6416829af37e2c827fcead0e0a438a91"],["/tags/polyfill/index.html","0176b6925b39acc674ee1792c538a246"],["/tags/postcss/index.html","80732894d617b56bf17c0e250f8b9c34"],["/tags/postman/index.html","359bae818048d139184561ba0a777342"],["/tags/session-cookie/index.html","84370197cfa2b46ca77ba68f4d6e4885"],["/tags/session/index.html","b186712e89a89f75d26cfff87caaccd8"],["/tags/shrinkwrap/index.html","a99f7c4840ee5a65a33362c8189ac4c7"],["/tags/this/index.html","e2ec0746a632690f9df34873e9b4a9fe"],["/tags/webpack/index.html","258b6257253590ebe6d0162d901a5eab"],["/tags/—-ES2019-—-ECMAScript/index.html","e65e83c6acb90d12a367bdb1c871c20b"],["/tags/代理/index.html","3b6902112e92de68b779fe9b14b47291"],["/tags/代理服务器/index.html","9f867a797be1bd191167c55874d23eff"],["/tags/代码生成图片/index.html","8bf72adf2d22c8c7a4029c55cc00420c"],["/tags/入门/index.html","0f0d662339c89fd43edb96c92b28499a"],["/tags/博客搭建/index.html","571974f0b189f8b057d20a15a1c2b059"],["/tags/又拍云/index.html","fa70fd3ae48c72c21ec29428c0e62670"],["/tags/图床/index.html","4c5dbb54f7406161595859220b2136c1"],["/tags/工具/index.html","fcb457127dfd5c5fd0a33e9333199c71"],["/tags/异步/index.html","b053796f2b1fa5815f744f57aa462ac0"],["/tags/循环/index.html","4499de05da1895dd7729659ae44cba98"],["/tags/按键符号/index.html","d3abbd9fd90b1b9838d5ac4534152836"],["/tags/文档阅读/index.html","c89bbab81d0a61c54e91cdc584f2b55c"],["/tags/服务/index.html","2be97f564b4f1e31814a951fc77cad09"],["/tags/服务部署/index.html","4976e98626207af433dd16371b08f7bc"],["/tags/杂文/index.html","f3c5589bb3b2a0f3d2dc2dae6f698a72"],["/tags/爬虫/index.html","d0e33a05d4aca1d45a7161ece3f72362"],["/tags/经典问题/index.html","57ff7b28ff3b1ffaccb8924cfe8ccec7"],["/tags/编程基础/index.html","17adb44f6e79bf78f7366a2571fb513d"],["/tags/编译器/index.html","7ae0fb57ae2a86438f1596feebc677f9"],["/tags/联表查询/index.html","d11fb8b72de16fd6a37266d7c7f20439"],["/tags/路由/index.html","316bd468d8e604ee7e5937ffe4966a22"],["/tags/运维/index.html","d0c65b7716dadfe9700d84dcec826289"]];
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







