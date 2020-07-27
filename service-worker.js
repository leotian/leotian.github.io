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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","cbb40cbd1252657b90a17151d70f125b"],["/archives/2017/03/index.html","8dcab0c4c7c5d2750be9b56e6fe6ebfe"],["/archives/2017/04/index.html","c0ca585a344d6502e58fba36681b1efd"],["/archives/2017/05/index.html","56910e1c0fcde9c76a56791dd5103226"],["/archives/2017/07/index.html","fd729da1014c2c1bacc7bd894b816407"],["/archives/2017/08/index.html","f13b08773dcec8f543929767efe5581c"],["/archives/2017/10/index.html","9a410bdc12ff539e21ae86c653ed4878"],["/archives/2017/11/index.html","cc535c7e467b0cf19b2b3645e90bab1e"],["/archives/2017/12/index.html","f3d426ead0be3dee762ee44886df11af"],["/archives/2017/index.html","79cc606b9b3dec0c7889ceab1419ab1e"],["/archives/2017/page/2/index.html","d35728998d24a98611c23ebbc5761dfa"],["/archives/2017/page/3/index.html","dd120c3fff8f4c6df410d50f84bace39"],["/archives/2017/page/4/index.html","f67fe723dc827a7a23c841b7c456c8f3"],["/archives/2018/02/index.html","cf71c3963c937e7af31584741a48dd1e"],["/archives/2018/03/index.html","5f87d33d59dc724edaf73e5d8e623f6e"],["/archives/2018/05/index.html","b64909efb4a69f9343393a9684a9ff65"],["/archives/2018/10/index.html","db9278500481db9c1c0af5f60066f59f"],["/archives/2018/11/index.html","94aaefa8f4065e0644e52bdefa52f616"],["/archives/2018/12/index.html","4b860cf6525f02283c598a7992c9abba"],["/archives/2018/index.html","87a20f053f9e807d2870f0c40529d974"],["/archives/2018/page/2/index.html","63043afc5f83729644c2a28c17e7038a"],["/archives/2018/page/3/index.html","ceaefbd14b90901d62b15e7807e6ef79"],["/archives/2018/page/4/index.html","566236c00694e28691998ae8efba88dc"],["/archives/2019/01/index.html","8587c8c822e02acf08ce0618cfe00b83"],["/archives/2019/02/index.html","d3e5bad1fba2513e2aa3e202e4e1a427"],["/archives/2019/03/index.html","2f7b43e9151a1dec4e87a8567a4e4e7f"],["/archives/2019/04/index.html","934ba840c9e9bb2ec057a285d9011f68"],["/archives/2019/08/index.html","1e40bb789c00ff097816014e0cb1e2e0"],["/archives/2019/index.html","b34f5043caae292e53782689c8cbdad7"],["/archives/2019/page/2/index.html","9132fac88527bebc9309382eb6a0e93b"],["/archives/2020/07/index.html","a1512e2d0a93e0c90c6d88fb88a45332"],["/archives/2020/index.html","67d547a894bc2024ba2b90f56e0388f0"],["/archives/index.html","5cf83d90363468efbf697389d5eda3e0"],["/archives/page/10/index.html","8ead8119c4922f68c2ebfcc3d19f105f"],["/archives/page/2/index.html","8b4f7b4b8202c60c8ba546129bfadb2f"],["/archives/page/3/index.html","900b18a0c78502b1493de7a3f5c9b698"],["/archives/page/4/index.html","0860130dd178449747e7e301e9934bdc"],["/archives/page/5/index.html","251f5ac2164abba1ab710fcf0a6f909a"],["/archives/page/6/index.html","222a362f71fbcb5af4391211a2e42b34"],["/archives/page/7/index.html","e78dfa113befe7b1d4cc59eaf972b74c"],["/archives/page/8/index.html","86e393bb0b385a0ab55dc7abc7051bb4"],["/archives/page/9/index.html","71d719f5e0c4a845c1cfee59f640510f"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","31f714efa5a751c3ab77aa9e806eb050"],["/categories/RxJs/index.html","ef687297e4b2a6412bff9f066c2ae3d7"],["/categories/docker/index.html","dd6cae692cf6242c87822c9bfcf5103d"],["/categories/hexo/index.html","06b02c717ae7b12db5361960930673f0"],["/categories/index.html","32970ee9c65bf0821f7bd70c6c76e4b2"],["/css/main.css","0a7564177f19726209e731221027ef63"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","bc6a5e3ae4f1dfb94000809bab243a2f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","2f9ce51a1f2c6573eefe4b382f87f613"],["/page/2/index.html","415045ff7bd1555be407d51c6a813d04"],["/page/3/index.html","3df22da7d29270dde24f34cac0606199"],["/page/4/index.html","f6769c1ea95118b8d321b2a6aaa9fbdb"],["/page/5/index.html","418c2c606b4965c75b0bbcacc5af0fbd"],["/page/6/index.html","46bab4b9b70e2435422031e1f332bc01"],["/page/7/index.html","92b1ff281c6cd1fd18cdf7061bfd8d62"],["/page/8/index.html","1c3b133ba1443f04a3db1da5c3b111b8"],["/page/9/index.html","703b8166e5c551efdd1f7ee4d483a871"],["/posts/12fd/index.html","8b2e4522af3e4f03275572030f6e3f64"],["/posts/1d4e/index.html","37cc36798c1ac316127b7c40a024cb71"],["/posts/232a/index.html","22be9d9219d2985bedcd9dc7b5bb7600"],["/posts/2465/index.html","2a3eb30d2426ed98aba3f9bed8ab3dad"],["/posts/25df/index.html","f203d46b27fd89eecde1f05124ef1e72"],["/posts/25f4/index.html","bee1f8252ff0daa4deb94978512719a0"],["/posts/26fe/index.html","15056214ebeadb1e4c270058903e51cd"],["/posts/289d/index.html","efe1c17757f660e417e36a291c7232ac"],["/posts/2b83/index.html","a94de908c6c3b4abc58f3d11de5fed6e"],["/posts/3a50/index.html","0f55a5efecb7315cd68d6c188ee19351"],["/posts/3b3f/index.html","5b513751bba94097844df4d7c19e0563"],["/posts/3be7/index.html","017e824b1d1a6b89240a90106f6f2010"],["/posts/3d25/index.html","3b492a0da26e8939b3d0e3fac65da573"],["/posts/435b/index.html","34a1118ae71f1ee6e4f1ee294fc99e79"],["/posts/52b0/index.html","9297f0e45b4a1fa8dfe7c9dbfc3ee85e"],["/posts/5389/index.html","b323be5498a4433c53662bb23ce1f734"],["/posts/61a1/index.html","03e564fe8118d4a37d01737adb2a9b9b"],["/posts/61f4/index.html","93379e187dda061b696187e9ac8d99c4"],["/posts/6a81/index.html","123a397f9f6c548fe7fcb48b7687e746"],["/posts/7117/index.html","536e2a27ef9168a6907b7a09abb2bd8c"],["/posts/72a3/index.html","f9998c38a9cd5f065a910fff7c2cf3dd"],["/posts/7a8a/index.html","af68ddaa111817010991bff8676a736c"],["/posts/7f0b/index.html","1c43b4c0cd57668e6cb2d28857c5cedf"],["/posts/7ffc/index.html","1d8a73660474a98010427b9b5109a457"],["/posts/80bb/index.html","b8a6a95ba3c691af4303bf3ed0be3356"],["/posts/82bb/index.html","52cb372b7545fa85109655cc1a4a4900"],["/posts/8e89/index.html","d87731fd9675703f45ce9c6f9377d76c"],["/posts/9295/index.html","b4fc1f1ee596483e745acda2b57f350d"],["/posts/a5bd/index.html","43430b323af0aeb975b117191da95d0b"],["/posts/a5ff/index.html","fd56427949ddc5ce4f75231cabe9e498"],["/posts/a927/index.html","322b547f6f80a9f676f6437bf5b66975"],["/posts/aaba/index.html","0fb64b84bd02ca2fd3a3fb09229e2ad8"],["/posts/aadc/index.html","7983be3fbdb305de4677b4fb4d3815ab"],["/posts/b2fd/index.html","1624c61aa9709d5b6d889ab187c1ee6a"],["/posts/b5c3/index.html","0fddef893ec93e58ba91f27436c0844e"],["/posts/bb9f/index.html","2a028352e9b693169b51992b35ba1839"],["/posts/c769/index.html","04a2057889cc5e40e533e566b0f498a3"],["/posts/c92b/index.html","cde355d4e87f8249c04ff8aa29920bee"],["/posts/c953/index.html","de410ebdcbe6cd63b46241ce54f9b1b2"],["/posts/d0c9/index.html","90141b587f5079b8dfa99d5170773905"],["/posts/d267/index.html","ac22381405cd12a1c401f90303bcb219"],["/posts/db53/index.html","8ec4e3641b3b1f4ff6564490f9cc200c"],["/posts/df50/index.html","c8a7020048e72571c4120ec781dc70d8"],["/posts/e874/index.html","d6c46c623b4d834d9f2fa1366a0b55ef"],["/posts/ee16/index.html","34301dc00efa052edb5cb50ba8efa2b6"],["/posts/f37e/index.html","43746b5a99742d7e3c9042cb05a51d96"],["/posts/f5d4/index.html","5c44c1c634d4cfa69547157df8319e94"],["/posts/f82c/index.html","550fff34928d944b48f091d19cd1b201"],["/tags/7-0版本/index.html","bb19c5f077c42d416cf5ec180fc5e985"],["/tags/CDN/index.html","80e8e50af00b2d57960c843f08026052"],["/tags/Context/index.html","ebdceb4bcec9e1376a16f65405aca360"],["/tags/JavaScript/index.html","5bd35f6f96d53a1a4498b85632e1dd57"],["/tags/MongoDB/index.html","c3d9bd8ca863dde5a711a0951d20e010"],["/tags/Nginx/index.html","eb5b3f111a11e96f1d6b77aa1362f535"],["/tags/Node/index.html","4151bfdd0209c57c9f62a9ad1639d91b"],["/tags/Node/page/2/index.html","e6dd762651637ac01c9f16e522d00b68"],["/tags/PWA/index.html","4a5bd68709214fad1e09eda131514356"],["/tags/RxJs/index.html","2781cf5537012360efb56bd423c6f2f3"],["/tags/Tomcat/index.html","0911a52d47ec71a3214ef579402be453"],["/tags/abbrlink/index.html","bd83dd993f729a02962acf0a2d0f8b22"],["/tags/autoprefixer/index.html","8744bdf2091d658c8f4e3ffad04758c9"],["/tags/babel/index.html","c673369cceaaf2da103fda95bc9ba5c0"],["/tags/chromeApp/index.html","0952fa9b305bb9c9a7c131183c01dd53"],["/tags/css/index.html","91c478a5f768743ab50461d3c3137d3a"],["/tags/docker/index.html","d4b1de33d5754624b7fc27ed1e1d0712"],["/tags/eventloop/index.html","4b569de11b16bd1d78e7de644e11dd3e"],["/tags/express/index.html","5892ff8482b6cfcb8c6c69aceaf472d1"],["/tags/flex布局/index.html","3bbb1235fb0d5dfae713a2e4d6ed1b5f"],["/tags/fs/index.html","56751c174a11321366b0a60d68cb1dd4"],["/tags/github/index.html","a2d6c2647c50e50c0d7165323dbb2fef"],["/tags/hexo/index.html","c342d87360cd331752e186d1e2104f81"],["/tags/iconfont/index.html","143cb5223416229e3ce0f6c7f769e578"],["/tags/iframe/index.html","a3e9213090dc4ddc112387dabd8d528b"],["/tags/img/index.html","ebc0625c4f60f4686c1814ef3153f52c"],["/tags/index.html","59d45517c515308a2e8e22aa0d1099c8"],["/tags/ios/index.html","3651e51e3416e7bd23cdbc71903fb843"],["/tags/java/index.html","b2056a9c28080cd1a1616de76c354f05"],["/tags/jwt/index.html","1f501dc0ce7a07ae9064f6efb51bd072"],["/tags/leancloud/index.html","17042f25f2a9ad947340e9b11927aeae"],["/tags/logrotate/index.html","6c592638f3fb86bbd91788030f456d7a"],["/tags/loop/index.html","4e1616fe096db59ab9fc2f61e8be2921"],["/tags/mac/index.html","2d1556d00be0416b85781b6e34cfeb7d"],["/tags/npm/index.html","984b29a48022403259f304e2df05e067"],["/tags/observable/index.html","106d735a53f19c8f9881f90ace8b753c"],["/tags/path/index.html","655e9e0eb59dffd183225687ceff7a3b"],["/tags/polyfill/index.html","f8d14c898f5a7c4ddbfef569612c76bc"],["/tags/postcss/index.html","f3f8db79dd6ae9c729aaacb372ae16d4"],["/tags/postman/index.html","681719f08a8e15084071039b952145c4"],["/tags/react/index.html","26b973dfb660879d52fcd755a99200a3"],["/tags/session-cookie/index.html","746bdb2b13500d47cccc3db0adc96b7a"],["/tags/session/index.html","daee86d73bcd432770cf0ec0f7d49683"],["/tags/shrinkwrap/index.html","f2a686763c8e4a321ae3a415017278f8"],["/tags/this/index.html","a7b0f31dd238b3eb4f97402b41535ecb"],["/tags/webpack/index.html","9505af628ccd197cf13b60c807d895d1"],["/tags/—-ES2019-—-ECMAScript/index.html","eff91d671b3a3101b7b0352266a049eb"],["/tags/事件循环机制/index.html","65ba044cd2e6216eb1ba49630b73c654"],["/tags/代理/index.html","decfce7b058ebdecc9bfa17bf1d6be7a"],["/tags/代理服务器/index.html","a4e7a4c529cc797e1aa9d47663c1d63c"],["/tags/代码生成图片/index.html","ed5dd288537affea35d798963a49255a"],["/tags/入门/index.html","da71f6f5f1ec6c85e7432f5fa7dfed7c"],["/tags/前端数据管理/index.html","ed20b8df0c9f29bc4dea82767d93b0b3"],["/tags/包管理/index.html","ab8a4e1ddeb452de1befd510f75e8587"],["/tags/博客搭建/index.html","2ec36eff2cebf1c155dcf86d87276450"],["/tags/又拍云/index.html","868d88af7e98861bbc7f221333a20fe6"],["/tags/图床/index.html","d5555d763a7923db1de3d51e562a0a38"],["/tags/工具/index.html","306812e407811d55b9cc6e4f5f995676"],["/tags/异步/index.html","c7979d01e7dd3da530bb1fd2e6078254"],["/tags/循环/index.html","ab82f336c3deb7466d85beff055d9bde"],["/tags/按键符号/index.html","f95ffcbcb7a09c4e2614577003441ddb"],["/tags/换电脑/index.html","0834e06087f21f13b7e401c6754abd95"],["/tags/文档阅读/index.html","3d8f2e6e0c952e95034d4d59cac91f41"],["/tags/日常/index.html","ff33effdbb61b4ef95356e76c09f06a8"],["/tags/服务/index.html","60845da53d4b6adf83859b81cb3ba1b3"],["/tags/服务部署/index.html","40dffdf57434bb51b17346905485abce"],["/tags/杂文/index.html","b05d1a04c7f8c3b87b34eb66357f0f0c"],["/tags/框架选择/index.html","043139c040da37267b68327fb10e48a4"],["/tags/模块/index.html","5e92c57343a4f959f98716fa18f3dc3d"],["/tags/浏览器/index.html","c9d834c897755e6342a2589b7ccd252a"],["/tags/爬虫/index.html","c907c0737ce7364bf51460923e63e078"],["/tags/经典问题/index.html","bb89a67eaa7a20e0c46a66eb57f6aecf"],["/tags/编程基础/index.html","dc5993546eda18e5bfcdf244fb7abc6c"],["/tags/编译器/index.html","a1989395d3cacabbd90904511ede43c1"],["/tags/联表查询/index.html","272d36da2600c04bce15c79759e51e55"],["/tags/路由/index.html","ebd519e3c4d396311d5a918b78ef438d"],["/tags/运维/index.html","be46c8d97f6fb807a33e5fa2a579ffa5"]];
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







