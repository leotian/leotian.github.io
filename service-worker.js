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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","dfbcb857169aae528d1fefab970f36b8"],["/archives/2017/03/index.html","788bf77a064779b23ace6835900deeaf"],["/archives/2017/04/index.html","d6e9e6b561d7cf439ef18f4a20e12f8a"],["/archives/2017/05/index.html","f5109b82855172eb088a33e91dbdf7e3"],["/archives/2017/07/index.html","88852ef33cfa961055042c6bdf04885f"],["/archives/2017/08/index.html","627255d63539d7c81ee00e7d2b0da5d7"],["/archives/2017/10/index.html","dce5820042b20517e1ca3f4ae352417d"],["/archives/2017/11/index.html","dff7afdf318ed260ccec991ffe9bed8e"],["/archives/2017/12/index.html","40403e8d961e230077dce0f770fe7096"],["/archives/2017/index.html","f64dc7801d3a0eb29266ae00b89ba15d"],["/archives/2017/page/2/index.html","7fb8f974d60170ffcafc96da3fe82716"],["/archives/2017/page/3/index.html","49af933b049fdf8392adca1440a31922"],["/archives/2017/page/4/index.html","415ce31639fb6c6d336da6c1de747932"],["/archives/2018/02/index.html","64e503efacbdb571d5a0d488b7af9941"],["/archives/2018/03/index.html","5e7caa91e08e9abfb38014e8af02b6ed"],["/archives/2018/05/index.html","5eecff7564067b2b2dd2f7a847616aed"],["/archives/2018/10/index.html","1d74045aa93ff398744641d2acffecab"],["/archives/2018/11/index.html","78017eabc3087b7fcebc775cb63be7db"],["/archives/2018/12/index.html","42df1710cfbc08df0aafeb4686260aca"],["/archives/2018/index.html","03d5bca27ebadd8596afde48ecb5321a"],["/archives/2018/page/2/index.html","a1c14adb6726adf0e5e6d5657cc10a06"],["/archives/2018/page/3/index.html","c90b662055469f5c948bd148f9737c1b"],["/archives/2018/page/4/index.html","bd8c00188446938b1ef5a8e87fc2dd72"],["/archives/2019/01/index.html","6116001dd7bddbe05d37afd512e7cb25"],["/archives/2019/02/index.html","704ef5fc9f662c66e49bbef11bf124f2"],["/archives/2019/03/index.html","d6496f170265f09007112438bb74d23d"],["/archives/2019/04/index.html","030ead410258023ca6bbc0a22125fb8d"],["/archives/2019/index.html","73d500bae8029f3d1c40815f3279cb20"],["/archives/2019/page/2/index.html","2d4a24e1176020ad1daaca2eab9fdae6"],["/archives/index.html","96a873ee1ccfe277e4ffba74e4b27809"],["/archives/page/2/index.html","44161565acb36697a7e471bca181f5e6"],["/archives/page/3/index.html","83534f7f1e6303ce0096b7e583e1c227"],["/archives/page/4/index.html","e80ac60dcccb0249d772f67319244fb4"],["/archives/page/5/index.html","965c930645c163b06d1c6044685b8bdc"],["/archives/page/6/index.html","75b1544b27b3e629642bb604f0b66094"],["/archives/page/7/index.html","7a7791813d83b0cd5e720e4d115b7707"],["/archives/page/8/index.html","30af69d855b89055537f751a26141dde"],["/archives/page/9/index.html","2780b13ca947bd8f6a8c5baa2751219b"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","a4e0958970e1603fda10da912f3ba908"],["/categories/RxJs/index.html","9d1022d420fddc43c1649c17f656bc79"],["/categories/hexo/index.html","2a5107581a5adb59ed2cca7b8835fe98"],["/categories/index.html","81a5eda89edc52931805f78c5efb679f"],["/css/main.css","7a992acccb504cea7a0865c1fe558696"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","703eb779e3910552736f0cbbae6c25f9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6d797cb43164c2c5feeac7ff8cd68f2e"],["/page/3/index.html","22a8340321cbd03da5e6a26876d7956f"],["/page/4/index.html","df62ddd7d0f81df3cea37f5f7c2d9c91"],["/page/5/index.html","eecd154c887e9e37c321de40d7e16c07"],["/page/6/index.html","bd6e1d1e96c565dc19dce32ce3708fb8"],["/page/7/index.html","f19170b50ec765a3c387af299c7950e6"],["/page/8/index.html","c1bf2649c4404368ab29609fc14ba7a7"],["/page/9/index.html","cf58ccb0a0a5050d0d45bfdec5a29ef8"],["/posts/12fd/index.html","029f26adcaaedc47f7447a22a9892c03"],["/posts/1d4e/index.html","1008c6d0aa3d345114c038d890a93660"],["/posts/232a/index.html","d4bd537b761b78677d50f02e2b09fdd2"],["/posts/2465/index.html","6092d4218472ef1b14d7e54cad73cc47"],["/posts/25df/index.html","2dd08cca578286adaa127e77866e217e"],["/posts/25f4/index.html","f104449704db33c19bfefac737be4a17"],["/posts/26fe/index.html","9314b585b1d18e015c21a7cd8ea8e02c"],["/posts/289d/index.html","cbb1719f13da833c7a2ad71d6aa08224"],["/posts/2b83/index.html","f484e43ff31ecf77bb755747c470bae5"],["/posts/3b3f/index.html","364ae2c8d5f80d6d174aa09793b95b1a"],["/posts/3be7/index.html","d5d6bc98004e6526f923033af91f97a3"],["/posts/3d25/index.html","62232c7ba13d36cbbb84e0ff0d790b41"],["/posts/435b/index.html","4ee14e776830c844f9596d56c0b47e33"],["/posts/5389/index.html","502a47d5cdf02d17ba57fa60d7931c35"],["/posts/61f4/index.html","2e0e19af453e5a1a738414d916d34547"],["/posts/6a81/index.html","6f430ff53fe30e0de67e511aba893e41"],["/posts/7117/index.html","015c8adf3218ea130b19c1a43865ee06"],["/posts/72a3/index.html","481373054a75ca46771d11efdd3aa330"],["/posts/7a8a/index.html","58b7a12382dbcc3c71b1294078a63efb"],["/posts/7f0b/index.html","fe0a3091d9b7b514d2a9c76b7503f1ae"],["/posts/7ffc/index.html","4c4d7fdc4304792863c1d22290913b53"],["/posts/80bb/index.html","3ed6efae5c77c71c9d8e9ca7626aa3a6"],["/posts/8e89/index.html","89ffb6d719204f95489b3c6e04f93497"],["/posts/9295/index.html","e9dc0c64139b271e8fab32c0a2ddaa4e"],["/posts/a5bd/index.html","9100732efb7c26e131bf0681a2c8f58f"],["/posts/a5ff/index.html","591ef2cc5bdc297506c48e26d6bb3933"],["/posts/a927/index.html","c27e3ee55e8bf0b41ba0328cafafa4c3"],["/posts/aaba/index.html","1f561a6d8eed236ea94b0708f025cc29"],["/posts/aadc/index.html","397e99edff59e7d44810a1b0362d627a"],["/posts/b2fd/index.html","08c7d16f6adb8fb0e3d5b40b046f145c"],["/posts/b5c3/index.html","ce0376354ffdd65744087dce0158c1de"],["/posts/bb9f/index.html","b01bd2e02a45616fcb75dc00d67b74a6"],["/posts/c769/index.html","b25b0efa9a0dd0f1f78507d9a1d89bfd"],["/posts/c92b/index.html","45c0c8431787a8f4a444932a66fb20d1"],["/posts/c953/index.html","c5e39f8d75d82185a68a6fbcb4eac62d"],["/posts/d0c9/index.html","9051939bfdb87cfe3a7d074edf7cd05b"],["/posts/d267/index.html","f9adb997326ebdb31d25d6a2c93b28a6"],["/posts/db53/index.html","c7d5829259d45054510edd143957d018"],["/posts/df50/index.html","d7619cf56dd2d63d510a8121c4d10d94"],["/posts/e874/index.html","b2e5740b298fa108097fec8bd57dda63"],["/posts/ee16/index.html","9d54f81578b8c2afdd2db5f01a2c0214"],["/posts/f82c/index.html","e617987d5558adff3ee1908a494b6a36"],["/tags/7-0版本/index.html","c4514dc8645af8e38cbb5d022270af8f"],["/tags/JavaScript/index.html","f29d44864fc0c7fd0a4305f5dde9a82d"],["/tags/MongoDB/index.html","b5a15b370a25b16c468a10f3e23d6cc0"],["/tags/Nginx/index.html","12686f3c5b8b957efd2fa184e208ed2b"],["/tags/Node/index.html","88a2b58895dd15e2d33564a745b6b563"],["/tags/Node/page/2/index.html","272ec6d006171968f1ff01efbad4e61a"],["/tags/PWA/index.html","575578a4f9b60488a53a7bb73d61f15c"],["/tags/RxJs/index.html","3435496ab9d12393a797326d00e92bd2"],["/tags/Tomcat/index.html","6190cca912639aa77afa449420bae0fa"],["/tags/abbrlink/index.html","b3af4faf8a0efe14f5cc02cca69c369c"],["/tags/autoprefixer/index.html","63682d81a88e14ed6daa567cfea874a2"],["/tags/babel/index.html","fc8789abfa3b36b7892ef48c0eacd1c3"],["/tags/chromeApp/index.html","5e77aa2dad8c707e5f0353e0ab30f389"],["/tags/css/index.html","9f6ae84e0fbf0ea1081a93f9818fe137"],["/tags/docker/index.html","4c92114f39d1a52f51a0bce0a7588246"],["/tags/express/index.html","b6c3169072ed69a0836e2206725ec96c"],["/tags/flex布局/index.html","5f9488b8754e1fa2e69d0a36cdf06468"],["/tags/fs/index.html","c8d562eedd43d9ef474786e8c9765c3a"],["/tags/github/index.html","ca0fe60012fd317b44688fde72467df8"],["/tags/hexo/index.html","09bc933874ea51cc408519718aa5a9fc"],["/tags/iconfont/index.html","c15385f6aa76a40c39c51cc112d3a8c3"],["/tags/iframe/index.html","6a2ad0671f3dfcc11ee0ad243d37bac2"],["/tags/img/index.html","028dd7250adead6d55cfec852bf45a99"],["/tags/index.html","64979e0768094ed91707ea65e928572a"],["/tags/ios/index.html","ef5ba24b85a0bb0346f5edfdc4f47fb3"],["/tags/java/index.html","658a6117ced6e44317845fa44fe39b2f"],["/tags/jwt/index.html","e0dda332d10c64e66fd116fadc3b7270"],["/tags/leancloud/index.html","a56cafbacc21ae9bbb6fe3c8fd3aba18"],["/tags/logrotate/index.html","bd7718b202d6eabd9db757d084b5a489"],["/tags/loop/index.html","ab628d26a56648b35346de2d3dc397ed"],["/tags/mac/index.html","926cde09faef58318226ba9964f77b15"],["/tags/npm/index.html","09211e3c7dd2020ac33865c324481e08"],["/tags/observable/index.html","e4e28eab22d6c2bada16e99fd745fa96"],["/tags/path/index.html","7f869f01c68e29116eb1a35ea2eb98e4"],["/tags/polyfill/index.html","2877fc8f00aa6bade2f9e8357373366d"],["/tags/postcss/index.html","f9001c72122b5456887810d1068c509b"],["/tags/postman/index.html","2b9e9db0ec9c0b45de009c920e40dc31"],["/tags/session-cookie/index.html","991cf54e3f570b24dff4f582a76d4cc3"],["/tags/session/index.html","20f7587eb153fdb67718d64e9267651a"],["/tags/shrinkwrap/index.html","d4840bd1a1a7b431e61418767fc9d567"],["/tags/this/index.html","046bf2f1fa2b7ac51233bf1a14c52825"],["/tags/webpack/index.html","9bf119e17239736d47c386ae0368c125"],["/tags/—-ES2019-—-ECMAScript/index.html","4b2967d17dc21592c9fdd0f9c8dc762b"],["/tags/代理/index.html","8c97931a14a9871c34c0c4e8950e2fe4"],["/tags/代理服务器/index.html","c3a60e984657debc2dcfd0ef0ae43c87"],["/tags/代码生成图片/index.html","59146d396ecf558bbee5ecc2ec1549dd"],["/tags/入门/index.html","9d05671e52cde2d8cc0a2b14f7e791ac"],["/tags/博客搭建/index.html","828ab073605c7e0bd608f1da201a2997"],["/tags/工具/index.html","18201d444903ddab6902281c033b6dbb"],["/tags/异步/index.html","3450abb5a2b46304edb4064ca39fde51"],["/tags/循环/index.html","adad2de0e6117faa4c8e7241797a4ac9"],["/tags/按键符号/index.html","acff7252828dcdf5be5286ce8ee8154e"],["/tags/文档阅读/index.html","2bdf8c070bb3f58e65038e2411295c47"],["/tags/服务/index.html","6cd4204554277edef6fc58424e561637"],["/tags/服务部署/index.html","9ef31e6bc571a8ca34d6fa0e185c5997"],["/tags/杂文/index.html","1c7988f1ef3f1b2026eed37fc1bac5c7"],["/tags/爬虫/index.html","4ad3b1d59b386e1380f4b8e4d206233f"],["/tags/经典问题/index.html","b596f67b62f261e241747f13b08fb345"],["/tags/编程基础/index.html","b8396154e3e5be4a9c9ad83bbdf3fb10"],["/tags/编译器/index.html","2767a92c0677530da8377ef2e23b3293"],["/tags/联表查询/index.html","c422f9d861de47c3baefedc612b42204"],["/tags/路由/index.html","6a8f3576ba788575298bc6e1e98e4800"],["/tags/运维/index.html","5d35f7c7281e439a191e4c64e3593fc2"]];
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







