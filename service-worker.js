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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","812ed76138b7975baca8f3eb8183e77f"],["/archives/2017/03/index.html","4a52da8ac60c74e1544939367e948036"],["/archives/2017/04/index.html","0c4556d065349d13771ca4680d6e8d5f"],["/archives/2017/05/index.html","bf1e49124815d47822b8bb77e9aca46c"],["/archives/2017/07/index.html","e7cf01129027ce17756efd280ecfb579"],["/archives/2017/08/index.html","5cd69e6fc9fc7e1d556f358022c3c34b"],["/archives/2017/10/index.html","821760f33572f1a2df23d527026371aa"],["/archives/2017/11/index.html","0582604ea1b98379dc16eb5b30317a39"],["/archives/2017/12/index.html","053c9cd2fa041d5d37a92c7739a3663d"],["/archives/2017/index.html","ad45eb2441f038ec702d738535c2943d"],["/archives/2017/page/2/index.html","7961a0d439cbbe9704026784b04fa7d2"],["/archives/2017/page/3/index.html","04e6c9a7839b9b52781052ab17c6a982"],["/archives/2017/page/4/index.html","b859dc39b810d1a47f1265521924157d"],["/archives/2018/02/index.html","228a791bbf38e1bb7ad34634102df9b5"],["/archives/2018/03/index.html","bad36cb6b0fd52b5b82d9f2231eb24fd"],["/archives/2018/05/index.html","89910d0b444d2c34a3d8fd7a925c9702"],["/archives/2018/10/index.html","990bf6896fcb325278b4b78d17aed200"],["/archives/2018/11/index.html","74478aefcbe5fb4347dde7767b2b6681"],["/archives/2018/12/index.html","1442f54612dd3eb353cc84ff47db3a0e"],["/archives/2018/index.html","962d15e294cb3fa3d9df811a8fb6bbd7"],["/archives/2018/page/2/index.html","9a57c6b10b44bad194bf981794d33793"],["/archives/2018/page/3/index.html","2ef028bc525374113037682e0eab889e"],["/archives/2018/page/4/index.html","0e77fc47521b7b90ac0cf0ad0e943745"],["/archives/2019/01/index.html","c80e807cbcde221a5508b5476a821a5e"],["/archives/2019/02/index.html","f029374bb7d403cf648c8cf9c0561b59"],["/archives/2019/03/index.html","0541e6982830c68cef633b1c5c49816f"],["/archives/2019/04/index.html","51f12482ff4d20637f76497da8cdb715"],["/archives/2019/08/index.html","01da86afaccc406870f6ee69c5096b51"],["/archives/2019/index.html","61a0acad2c816aa39a3fe81115d81080"],["/archives/2019/page/2/index.html","6adb6bdaa435470f50bf1c57050cb5ad"],["/archives/2020/07/index.html","9f15599f57af5790c41d92b301f5af3a"],["/archives/2020/index.html","2b5f3d466695e5eddb4e194c3e51ba62"],["/archives/index.html","34135742e23830ff61d93cda3162beb3"],["/archives/page/10/index.html","a8c70c0f432ef95194b8d9637f55539e"],["/archives/page/2/index.html","66105019662dba5300bfa5d185804c89"],["/archives/page/3/index.html","73c18772f009b429884efe573b45056b"],["/archives/page/4/index.html","e0450fbcc97919c465d7ef9311d70d31"],["/archives/page/5/index.html","8638a7ce21968fe233d0669359a4b859"],["/archives/page/6/index.html","c0251db70da54dc3b0d496a7b4d6f9f1"],["/archives/page/7/index.html","7cebba05dd1139c8c25eeb5fa4adee84"],["/archives/page/8/index.html","efa713877a1d9029fb8088104d275f52"],["/archives/page/9/index.html","8b0ac2932ba984201428828679c834c2"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","c57663fdd85de285f0257588d28d046c"],["/categories/RxJs/index.html","63e83059d29abd5100e71fc813d6446d"],["/categories/docker/index.html","44bfa3462ce7c1c371a0633065978a85"],["/categories/hexo/index.html","c4686ae55f4511bdb3b6d07de4b3902a"],["/categories/index.html","ecd0f6bbf81b2603276273d00dc66d1a"],["/css/main.css","3b32dfe2f8ca8584ae8d75acbda1ee16"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","02f6a1106623fa0f087fe6dfc8a885a2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","88d5cc83c4c46b5620f59532dc27c338"],["/page/2/index.html","f43943407a56a9655555bfcf3f32f8f2"],["/page/3/index.html","20bfee4ac81976a43b0fd776d9d84913"],["/page/4/index.html","88520810127f4bd418a30e5aef45cc0b"],["/page/5/index.html","3cf5c8b2b117003a753114e5ed7d9095"],["/page/6/index.html","aac87e27d01c3beb9e0858c3ee683c32"],["/page/7/index.html","acee1a2a581dadb203aa42f0a7cfe697"],["/page/8/index.html","8562a1b742e38c6813e459d50a1e20d9"],["/page/9/index.html","6a9963e4731d0491d169ce0cffd8695b"],["/posts/12fd/index.html","03e8375549086ed653e2bb909529758e"],["/posts/1d4e/index.html","37086e87fd5a784d5959e7495460846e"],["/posts/232a/index.html","640d8084b9bcd75c6abefc3f8262d44c"],["/posts/2465/index.html","f8d060dc3dc227648aa4eb72c03e34cf"],["/posts/25df/index.html","4188b97bceceb2284f29e67d72f1baeb"],["/posts/25f4/index.html","fcba7b3087347e0dde7775849d71aee9"],["/posts/26fe/index.html","c6553b94b163050f66e7743af3190e4d"],["/posts/289d/index.html","a0820a1db9e4c25a09e07d8b859f3f3e"],["/posts/2b83/index.html","aaf096d155f710fad1bab375e7760efc"],["/posts/3b3f/index.html","3d3c2533edd009e1edc166cc47352abb"],["/posts/3be7/index.html","89e369b588a19b8af4ec9993f168a0c4"],["/posts/3d25/index.html","c2dc3c7ad454d81a94d0310d0284b553"],["/posts/435b/index.html","648c6461b0c6fb74591ebbd05298fd55"],["/posts/52b0/index.html","a9388642629d4f66f0b99d75f2cb3db2"],["/posts/5389/index.html","a8a1c94397419706f8de248be6260c7a"],["/posts/61a1/index.html","0e3f8e436356e6378b23702b45997594"],["/posts/61f4/index.html","0a0e48ebacf686f7fa40dc3a9c1ba3e1"],["/posts/6a81/index.html","8363d52e9cebe714262e106aee17cc36"],["/posts/7117/index.html","76261f2b5d78d9ff1bfc89a2329c37be"],["/posts/72a3/index.html","1c1d3eb0cbef55ae58675976ca28be72"],["/posts/7a8a/index.html","6c33993ee470d55eec5cdee618cc472f"],["/posts/7f0b/index.html","564139a0eb5d808b4d655a0cc0764f90"],["/posts/7ffc/index.html","1058044000696e47c1a10669f00920b5"],["/posts/80bb/index.html","8aa4c15526e497c65d71c9207265efc3"],["/posts/82bb/index.html","6de1ee83a8d774c65cd511c23f0342e0"],["/posts/8e89/index.html","40364e8db5b9b6ae0a628ded8923f453"],["/posts/9295/index.html","c28e3cdaf6772e9f71e871e374a887ae"],["/posts/a5bd/index.html","062f332efce901f9914259703db3213d"],["/posts/a5ff/index.html","a805b42092ec4e037f313736b73a20d9"],["/posts/a927/index.html","3b3c2b09fd1dc71373b250a2e55e054d"],["/posts/aaba/index.html","9ffcd76c2497f64e7041229350496db9"],["/posts/aadc/index.html","3124ac9e93331fa527eb4e25ea3aa0c8"],["/posts/b2fd/index.html","268a25d3cbd185f19b89ee8c1c40309e"],["/posts/b5c3/index.html","b1dd0946033b74e2895e2511dfd9a906"],["/posts/bb9f/index.html","90a9ca706b323536299cf2bb0529adf5"],["/posts/c769/index.html","c2664d2c53858cc590fa72918245fda9"],["/posts/c92b/index.html","f9d605ddbb4b42fa1e93ca27e5084165"],["/posts/c953/index.html","f83baf4b8bb2ba2305720083dea52bb6"],["/posts/d0c9/index.html","3fcb2f48199a5e776102d1954f8e159f"],["/posts/d267/index.html","36a38f688790991b35ffdfe484b297db"],["/posts/db53/index.html","9531d28b5b65b7510ddfc18db5298a0a"],["/posts/df50/index.html","cb06501c22d3b59baf8b8bf54a1aaa68"],["/posts/e874/index.html","60c4ed92f46ee69af66d97fda158dd8c"],["/posts/ee16/index.html","4ac3fa4ca4b7fb0814f34b7e13012f3d"],["/posts/f37e/index.html","80c81a05a5a3d76d2ebfcdf5f62826f3"],["/posts/f5d4/index.html","e00e55b5dbc57e9d09f1b388fc72d58e"],["/posts/f82c/index.html","9eaecf84e7ac3c9568de5fe3c4acfd11"],["/tags/7-0版本/index.html","e7bd99711d895a598ea7f38f2dede966"],["/tags/CDN/index.html","95cda317fdf46bb58bcce40cf037eabe"],["/tags/Context/index.html","af27e967ec7b2357154433a441acd396"],["/tags/JavaScript/index.html","b61cfd7e21154c6f1fdc5afe784578d7"],["/tags/MongoDB/index.html","030ef4e5cc4039b0128855c660047ddb"],["/tags/Nginx/index.html","799ba1887d10867a144e7dab1c839c89"],["/tags/Node/index.html","3469d92dba3f85dfc39f1c662a15b7c9"],["/tags/Node/page/2/index.html","2f0391def4e1e7ace54d783562fde4ea"],["/tags/PWA/index.html","95154b63e4dbd22fd552fb143aff8866"],["/tags/RxJs/index.html","ac014165b9aba44a568896cc6fe53f13"],["/tags/Tomcat/index.html","5f2ab00bf0e9fa2c7dacf73050913ee1"],["/tags/abbrlink/index.html","0b3a547a3761bb882c1fe622e9436415"],["/tags/autoprefixer/index.html","783d0fae0ae3750ebd12c2108389d314"],["/tags/babel/index.html","1ef90b256dfcb003a597cccd73c3a3e7"],["/tags/chromeApp/index.html","9ac0b3ea51b8eb0621a8d037ace1145d"],["/tags/css/index.html","5e812ad759a29f59b8c13277926ea4cf"],["/tags/docker/index.html","c18c3c68e1408dea78e92b7a9159a884"],["/tags/express/index.html","ad7846e241f3a8e6ac28b92130ca5043"],["/tags/flex布局/index.html","6d5bae327fea34b9aa92ffb43e129bda"],["/tags/fs/index.html","6680ad7d763eb628588f11b100941ead"],["/tags/github/index.html","c777ed995852abf33fde776428cb4908"],["/tags/hexo/index.html","6e050c459642f7595ddb663079150d5a"],["/tags/iconfont/index.html","848549c7aa1f727bf685bd14a98eafd8"],["/tags/iframe/index.html","f5ac184f08939226d14283941d50b516"],["/tags/img/index.html","ca94384a6a9b942b8709b0c50b049316"],["/tags/index.html","d08241f0a5dfc46fcd0b74827815ec95"],["/tags/ios/index.html","a452a3b38b04da7f3a3e117e4324af0a"],["/tags/java/index.html","ec6fb4f2f0d3f154833675b907f45c95"],["/tags/jwt/index.html","75bcd258043465e488068482088620bc"],["/tags/leancloud/index.html","342f8b3c3a68a331779163736b72d745"],["/tags/logrotate/index.html","629a5f8bc2a80b0242b56f262ccd0c4a"],["/tags/loop/index.html","fe75075f056b0cb8c048febca483c154"],["/tags/mac/index.html","369776f69c6a029d47026800e6570a1e"],["/tags/npm/index.html","af71f499a7ac40489ee47daf3ea80d78"],["/tags/observable/index.html","ff0810fae164de10991e42effab4d108"],["/tags/path/index.html","6fb82f698bff0265ec2f1d3d9975be9c"],["/tags/polyfill/index.html","66159f1988d6eb770ad65c7fd3b39bb9"],["/tags/postcss/index.html","f5ccaf8f83820ceb3d316297fe7b07e1"],["/tags/postman/index.html","a07c517a5e7f48e917987e09cdc139c1"],["/tags/react/index.html","75f16fb40e62660ee192ea8f3903f0e9"],["/tags/session-cookie/index.html","ba52487cb724ad7b4444b43f1af92ca8"],["/tags/session/index.html","e733f60b16157c856c863515742c8300"],["/tags/shrinkwrap/index.html","87291befac6b4be1eabce263896767b9"],["/tags/this/index.html","bc569b7ac9d9e7f60f0f5616f6685e15"],["/tags/webpack/index.html","e003912ce6943a510f2ab077d240fde1"],["/tags/—-ES2019-—-ECMAScript/index.html","c0a3dab2617d1c7884f6e69601a0eb61"],["/tags/代理/index.html","5daafd2ac0036ce612b9997b51e50e64"],["/tags/代理服务器/index.html","f0321c3683cede89634ce07a2d507362"],["/tags/代码生成图片/index.html","683b2704cc71ac040780bb6e8ab0e3f0"],["/tags/入门/index.html","6212a911879bd3db3952c810f51e7442"],["/tags/前端数据管理/index.html","77723275009d28c785a94a7233c4cacd"],["/tags/包管理/index.html","b5dbc8b60b957757a7477d326d885702"],["/tags/博客搭建/index.html","27c79ae0a290a2d8be500090b168e38b"],["/tags/又拍云/index.html","6ce520c38315409b78c753fb8ba06c7f"],["/tags/图床/index.html","02e771ebf50bb25f067e980077980e47"],["/tags/工具/index.html","ad3195cf4f35b3d8bf2360a60e7393a0"],["/tags/异步/index.html","8fb0013767a903831dfad60fa103a284"],["/tags/循环/index.html","249b34650985e8a6b46c222bff2e0fc9"],["/tags/按键符号/index.html","78fd53f7c0e95f3e68a9c3aaa3a56845"],["/tags/换电脑/index.html","498aff2a7da8c1833b0338f86c0c3fbf"],["/tags/文档阅读/index.html","7a2732ee19d262e542e6ea6c680f80e0"],["/tags/日常/index.html","62beedf50cbad3a977a57338638b5a53"],["/tags/服务/index.html","8ad10c557cd61a7ada13729289cb321c"],["/tags/服务部署/index.html","c30954f34170a2a7abd50b753d689a08"],["/tags/杂文/index.html","1ee875963ca820761da8ce8c58d95384"],["/tags/框架选择/index.html","113a4bf5f23c17d304f7ac7cdb866961"],["/tags/模块/index.html","c2edfdf91028da895df6dda2829c154b"],["/tags/爬虫/index.html","cd4ddcb08e8e420e20e1fbcf974991e4"],["/tags/经典问题/index.html","7485c2b7e84acc6226f8e33bf4a8740d"],["/tags/编程基础/index.html","bd5a790836bdaf700327697c5149afc6"],["/tags/编译器/index.html","853c33dbfe9b337d5d05b3823b28b9e7"],["/tags/联表查询/index.html","dd87109f22e422dc138c958520541c65"],["/tags/路由/index.html","a0b5d4638f62249e2295bf0af8305a0a"],["/tags/运维/index.html","0540a9547a9e7dca8519139825f7ce4f"]];
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







