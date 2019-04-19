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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","3d93663fe677722026b0615b0e913f35"],["/archives/2017/03/index.html","0585d6231c87f141224289e89d9710c2"],["/archives/2017/04/index.html","4ee9a6cb1e78d4edf113988362064543"],["/archives/2017/05/index.html","5a399544f96367eac0201e3d74530adf"],["/archives/2017/07/index.html","238f8a95c7c442589c3a8e90a4eb4fa8"],["/archives/2017/08/index.html","5f731f00c6dbb70b1086358c638d39d2"],["/archives/2017/10/index.html","cfe877cbdbb85ff4c4d1106f4f0f463a"],["/archives/2017/11/index.html","68ab6495e876dfa9b9646f8f81a1bd75"],["/archives/2017/12/index.html","1f559d65e2966370ad82654ba53ef428"],["/archives/2017/index.html","8866328bd06a4699ba6b9e892bac2831"],["/archives/2017/page/2/index.html","6aa9fd284f934a81e0a186497b0c1efa"],["/archives/2017/page/3/index.html","ad8f237888d1939ad47aec29233ec186"],["/archives/2017/page/4/index.html","7799a74aa0f812311344d95ffd297890"],["/archives/2018/02/index.html","78e0c99b40234b8a1ec0d018b54c5ee6"],["/archives/2018/03/index.html","627a5a55a0e92f14997001dc2ea0e6c8"],["/archives/2018/05/index.html","c4380d71d99ddacd88c5b8059379a1f2"],["/archives/2018/10/index.html","072e6ce797b6ce1cb94940807129c92e"],["/archives/2018/11/index.html","4ebc09205d5a8e00f887020f5229503a"],["/archives/2018/12/index.html","3c7140c987dd704f6251f90e61fb7ef5"],["/archives/2018/index.html","a64d28e843cf9e98d7f4f8254cc12fe3"],["/archives/2018/page/2/index.html","7ca19d7d9c80fd0a7a011bbe171b13cf"],["/archives/2018/page/3/index.html","be5df42bd4ca267595f7a82bc3c5ad70"],["/archives/2018/page/4/index.html","142420d7602a316585a0aeada4e76225"],["/archives/2019/01/index.html","7a6e2e899bdad61c6883ef49d80aa082"],["/archives/2019/02/index.html","90869d807f0f8fc4085ad6212521996e"],["/archives/2019/03/index.html","36a4238a1a8dd89371ba624f8aeb29a3"],["/archives/2019/04/index.html","8c58c1291d05b52878d6403ee92add5d"],["/archives/2019/index.html","3777c8e9fb63b8924d88635f4f8f388d"],["/archives/index.html","c72e59770f3e3f09e93a0a006b262adb"],["/archives/page/2/index.html","27fa3c646c6f1b88acacf77df5af0fa2"],["/archives/page/3/index.html","1a22b98ffee2b0bba5baae3229ec3fb7"],["/archives/page/4/index.html","e7c12d627f192d52ef3ac3034436dffc"],["/archives/page/5/index.html","0e58cc102eef6211c6b4ca099b541daa"],["/archives/page/6/index.html","e484f40e4c2021a80921c60f67ae6ff5"],["/archives/page/7/index.html","27b81b4c30fa854af467f7592fd0ac3c"],["/archives/page/8/index.html","dd3e299858401444ebc998b51dc61e28"],["/archives/page/9/index.html","1b4212a2bee0e2bb8e8d338b6766dd8f"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","e14da4f6c60ca398d4029a4064af7bad"],["/categories/index.html","0e0c28a1e966440b7c7efe146df8b025"],["/css/main.css","7675936d9ae931895bc3847c7c69a913"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","2fca80f1da1f8fd6c14f605f281bf643"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4e6a6858cd8f9c67886f233ca387a455"],["/page/3/index.html","0394041143b1862c96f7eacd63733292"],["/page/4/index.html","f015aae3483300ef3988f691b7242ed2"],["/page/5/index.html","38776d904bf281c56eeab1b5cb3669cc"],["/page/6/index.html","e6b5c0c52d96bf373ddb6f0ad2ec66c3"],["/page/7/index.html","25487dbd0719ec166871834c97aea945"],["/page/8/index.html","037f38b9650cca79d49c4bc6f8755b47"],["/page/9/index.html","ef0c2e9b342fd543575a4491ef4e5852"],["/posts/12fd/index.html","b243f7d5be44ffbbd9d1d335f16d685e"],["/posts/1d4e/index.html","71d13072b24c06f4f50da312bd6d2041"],["/posts/232a/index.html","088d4dd06fb91aac71c91a65f3707ffe"],["/posts/2465/index.html","4cc75606ef56e19d8736be53464b0a5c"],["/posts/25df/index.html","4abad800328a789f0aff8c8610441844"],["/posts/25f4/index.html","e36c1342f679ad79bd2cb4a5b502bf91"],["/posts/26fe/index.html","c719dfd81fca11d0f1fbe4cd969d92e2"],["/posts/289d/index.html","0654d8025f2a65dbca18d614dc8161db"],["/posts/2b83/index.html","ad494e79087442d2103e60919b715eed"],["/posts/3b3f/index.html","750a59b58896793be7740e221853bef2"],["/posts/3be7/index.html","e4522c74ff87ee80b9f1ae02ad28e694"],["/posts/3d25/index.html","b4a9f272a49a0b50107b3c51780e0b39"],["/posts/435b/index.html","b4173e3b7b404089a7830ea513c8a255"],["/posts/61f4/index.html","edb79852cc1fed0a19f6f657f202a523"],["/posts/6a81/index.html","9097d1b4ea7caff19979364e07d1d6e2"],["/posts/7117/index.html","9940290cfa5fc9c9ec0e7fa255dd0e8f"],["/posts/72a3/index.html","0281d825bacf45cd7737992a4025c21a"],["/posts/7a8a/index.html","bcaf275028515d9bed2be401522120d1"],["/posts/7f0b/index.html","0a40d19897bacbb6f6c106d090be8299"],["/posts/7ffc/index.html","c8fb7050ef7b1b2199eaa9e6d6f5e122"],["/posts/80bb/index.html","0e90fec05c73b5b325066be0110fecda"],["/posts/8e89/index.html","5bcda4a49d7374080f93c5bafe1adb79"],["/posts/9295/index.html","9c2a7e4fa912453a1564649e6f6de506"],["/posts/a5bd/index.html","111788f5da18df90eacdfc964b2804eb"],["/posts/a5ff/index.html","1b5b115ae2514a4366a7a780055c19d0"],["/posts/a927/index.html","3286a40aa784bdd3d02386dc60a9372c"],["/posts/aaba/index.html","3f5d854bc297e771fa7427c96949bfad"],["/posts/aadc/index.html","d11e4111c1f41626e12e2b8373e22f31"],["/posts/b2fd/index.html","baf3da8c66fe6f146d14b63898360f40"],["/posts/b5c3/index.html","c1e2a36aa743a3f4caaa96702552c8ee"],["/posts/bb9f/index.html","c73c38069ef379cda0c1254cdf61b9e9"],["/posts/c769/index.html","c3e306337d05dcca58d3765c938f8467"],["/posts/c92b/index.html","f584ab1c8b6ee44971d9fe14224c6e4d"],["/posts/c953/index.html","f1c2dc56ca9a1ad2a93923529b27314d"],["/posts/d0c9/index.html","059b12eeb3d1edef4abe0dcc2f2763f8"],["/posts/d267/index.html","629e7801d2ea5d736d38e40833d2fefa"],["/posts/db53/index.html","d2d80344336227b0db08243e7eb3a52a"],["/posts/df50/index.html","9d73d6a65aa3aca9ccebb1d356397b0a"],["/posts/e874/index.html","eef432606849edbc1fd7226f1ea626c6"],["/posts/ee16/index.html","b43029109f1bb8c3aafd33ddd31dc7b0"],["/posts/f82c/index.html","411a5ff84cce09312482c52b59804b67"],["/tags/7-0版本/index.html","39d3897f4910a2e9dcc85781f2c37234"],["/tags/JavaScript/index.html","15f2d1499df012fbc84a6b3de762d1ca"],["/tags/MongoDB/index.html","1ed1a7678e9e53190d95f33a9540d406"],["/tags/Nginx/index.html","e9c7482ab757a5289778ac222e09f2ad"],["/tags/Node/index.html","d559e73f720ce40d24c671e88ae4327c"],["/tags/Node/page/2/index.html","6841cfff4c3ce2ee687aacd4c6c71782"],["/tags/PWA/index.html","479cb850cb63736b6de0627b45907a8e"],["/tags/Rx/index.html","a21c62fa147026455455818d3e2762c1"],["/tags/Tomcat/index.html","c98bb09e32b575e5c018458acc058de3"],["/tags/autoprefixer/index.html","1bb2b64ca616ab08d5782e2a30c32a2d"],["/tags/babel/index.html","6157472d421461d960095e9d069a722e"],["/tags/chromeApp/index.html","16bf2e98c0ef86ffeebcfa450a63ce62"],["/tags/css/index.html","6ed661fc45e853a2f23e897e4ad9841b"],["/tags/docker/index.html","eedfdf789390eace2b0385472bf94f7c"],["/tags/express/index.html","38a49cfaedc560bf2adf408f48022c9e"],["/tags/flex布局/index.html","e23d7cf4fbb5ba9286460b2b0b95676e"],["/tags/fs/index.html","ea7077a58a3ebb8bad9004ea4060dc05"],["/tags/github/index.html","6320a83891b2fcd6f3f4de3a6eab484f"],["/tags/hexo/index.html","7b5508615da1e6f8ec504001d4c3951a"],["/tags/iconfont/index.html","0e471f7798aefe6e293b95a0710c51fa"],["/tags/iframe/index.html","1d5428c17bfc0b88cf117c98c9eb06a3"],["/tags/img/index.html","38a880c4696d558583da2951151260f1"],["/tags/index.html","ddc0e133c812e0217264732d73710be1"],["/tags/ios/index.html","59503a32a9f53c9aa9da1ad1c4119d77"],["/tags/java/index.html","8ca6b512c10afbcfa07459fd17e4c801"],["/tags/jwt/index.html","968e116801b73badc7204e1845649aa7"],["/tags/logrotate/index.html","26d017136351f558647a2c77b1aac1f8"],["/tags/loop/index.html","bf9ec5acffb76ab2afd83bc78ce05658"],["/tags/mac/index.html","0f783e5ee5c8abff053ab70f67a3a858"],["/tags/npm/index.html","e2acf88177c0750e2df96e40a8fae665"],["/tags/observable/index.html","4ce7f8c2a9d607407f222f3cf449e66f"],["/tags/path/index.html","c169b9d7870e426fb1b54b43810754fe"],["/tags/polyfill/index.html","5c30e658f68aaaf0fbe174115f67893a"],["/tags/postcss/index.html","b7961ab7215f29e1b5bcc53b6a8f6fe6"],["/tags/postman/index.html","55007c8a59b4a6c6f0817486e1fffce8"],["/tags/session-cookie/index.html","7eca2b0225b9bdfbb6eb51c4f5edf7a2"],["/tags/session/index.html","b5e5965b640e41efacba52cac5b1414b"],["/tags/shrinkwrap/index.html","68c693a927a0b60f75fb19bf2df85c01"],["/tags/this/index.html","b440af84ddc6bdd5f033c8ac96e92e42"],["/tags/webpack/index.html","19407bb045a7b5782085c2a6e4a36367"],["/tags/—-ES2019-—-ECMAScript/index.html","1c2c4a91d7a1412fa7655655fb6ff7d3"],["/tags/代理/index.html","9e166357ac6054d5bf6699ab2cf3d658"],["/tags/代理服务器/index.html","15a7c0ff4ea362c2a3d4b2099e20446a"],["/tags/代码生成图片/index.html","e6f67b468cae779d4599450d7d1e2486"],["/tags/入门/index.html","514cb29445f50623333fedfea86c67b6"],["/tags/博客搭建/index.html","163016cc59aad340bbcda7e1b1bdd653"],["/tags/工具/index.html","57d001b4dacf4b67f458246977bd2709"],["/tags/异步/index.html","40198c94208445e6d593560c9e9e0d08"],["/tags/循环/index.html","514cdacc3207cc4a461070c362929745"],["/tags/按键符号/index.html","55fc1144c7ee38cf65cba7bb8d0b9c4e"],["/tags/文档阅读/index.html","354fe8458baf697d5fee4fecd076c574"],["/tags/服务/index.html","763565617b972de5287aec3fc16ba991"],["/tags/服务部署/index.html","803cc6850f1e6e8d5b748d86c5b3fbfc"],["/tags/杂文/index.html","da16b27317e7c30f182de5ae3484ccac"],["/tags/经典问题/index.html","79675a9d0229adeb801280d0342fbbe0"],["/tags/编程基础/index.html","2af8acf5c6eac13b99f95fded029e0c7"],["/tags/编译器/index.html","c5993b1ef1e13b6387f101c348c7a609"],["/tags/联表查询/index.html","2513773dd86f3e88d403fc18eadbe149"],["/tags/路由/index.html","780fa31b5aacfedafeb0752c0460fa2a"],["/tags/运维/index.html","da2a4874a78b4770cd4c6d4639e754a1"]];
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







