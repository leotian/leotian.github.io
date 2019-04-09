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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","3d93663fe677722026b0615b0e913f35"],["/archives/2017/03/index.html","1dd4331a71d6b11c55be83dafc6066ac"],["/archives/2017/04/index.html","c51f7c247158217c3afb3ceea781d89b"],["/archives/2017/05/index.html","26fad4c8608620a583233019d9d0d77e"],["/archives/2017/07/index.html","0dc0eeb8e457a6d4c973c39030d96d7c"],["/archives/2017/08/index.html","42ea17daa2006a0191c8cab61930dae0"],["/archives/2017/10/index.html","ab1eeb115068d43b8a7e3cd9caa5b5d2"],["/archives/2017/11/index.html","81a6d264ffeb2c7dc0225d69e8aaa993"],["/archives/2017/12/index.html","ffca3617cdc27dbd616c80493ce7396d"],["/archives/2017/index.html","6d356b087d744d62884a98a5d67815e3"],["/archives/2017/page/2/index.html","9db913996fce6236a3a8ae175d077233"],["/archives/2017/page/3/index.html","244d123137b1ba9de8f3b9e91b053b7d"],["/archives/2017/page/4/index.html","48b5636802efe2b3bf82cbb2b0581487"],["/archives/2018/02/index.html","774df6fe3f164b34dee82a383ab13134"],["/archives/2018/03/index.html","ae2a1d4d8b5f62bc544b28efabc595bd"],["/archives/2018/05/index.html","bdf429313cba2b7429e6907014b551ba"],["/archives/2018/10/index.html","2a46dedc3fcdb9f19145a0c7eb0a3497"],["/archives/2018/11/index.html","0c90b85aa99d28f9a69a4192a074a7d0"],["/archives/2018/12/index.html","6e5f08d8462e9e148d3e5f8e33d072a8"],["/archives/2018/index.html","bcd3e7e8a984976b1b21e45a258e93c0"],["/archives/2018/page/2/index.html","2fff8ccd84871103a18852dec299cb51"],["/archives/2018/page/3/index.html","e14d0102e563f7cb38f63e966b5a8370"],["/archives/2018/page/4/index.html","675708caa4250aadd06ea3304682b675"],["/archives/2019/01/index.html","7f3ba3248c93346aacb7872f5e62e951"],["/archives/2019/02/index.html","44fc29b292b98acf35caaf277c8dcdaa"],["/archives/2019/03/index.html","54cb372c666c395311d313589bb3338f"],["/archives/2019/04/index.html","9d9698427c60e7eab38de296c642d64f"],["/archives/2019/index.html","73c8f503c3a6e62b2e8a58a8c22077ba"],["/archives/index.html","526d254ca4b17d6aeb316a9a2f65791d"],["/archives/page/2/index.html","b14ed3f42650ff1423d83a2ce7db4187"],["/archives/page/3/index.html","6fa671d3d0bcc3b4b0e39efb33879f06"],["/archives/page/4/index.html","13b0d8c06d6e043c2676f96c793df3cf"],["/archives/page/5/index.html","9094620356bce2865f6a8d2fbeac9420"],["/archives/page/6/index.html","140c038af9c651ea9449fd223e6acad0"],["/archives/page/7/index.html","5e64887a840a4eb79fdba0a8938e4078"],["/archives/page/8/index.html","3e1a6aa9639a394437107fdc63f85ee7"],["/archives/page/9/index.html","4721c07176e898a3aaafb76dc03cf467"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","dbe6e44b1d21d415a6a79e147dc8fd79"],["/categories/index.html","0e0c28a1e966440b7c7efe146df8b025"],["/css/main.css","465ed8d668308cc0d8a05c7ea4e029c4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","d4f599382dcfa452b55ad5b66fbc1a75"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e6c1713fc08814222275455ee9484a02"],["/page/3/index.html","09a710e056c17c26c623366515b65a93"],["/page/4/index.html","5382715d310c75fa4178a0d618574b48"],["/page/5/index.html","9b70d808df57406e9083c928f4d1a050"],["/page/6/index.html","0605480fba51128498b673a83876fb88"],["/page/7/index.html","9303c1a3e51a8a78c5725243a4d89498"],["/page/8/index.html","ffdbb7a48bf918ee33cdb87086f44487"],["/page/9/index.html","a68cb9a28ccb9eeb010840a17feca2ce"],["/tags/7-0版本/index.html","26a20cc65d8c9b2c79f9810af04dd0da"],["/tags/JavaScript/index.html","7abb6e5c6691d6dc29eac0154ce3563a"],["/tags/MongoDB/index.html","6d72534e7a9d22702f7c5437efb8fb77"],["/tags/Nginx/index.html","ab1a0e9c647c1133947c840fecd5bf61"],["/tags/Node/index.html","29d37f8279ceec821227c2671bc89e0c"],["/tags/Node/page/2/index.html","44808f098ef44ebfc5eb2d0c51677726"],["/tags/PWA/index.html","c7ffed989d81cc3235995400390827ca"],["/tags/Rx/index.html","cc4a8e2766e38370a4bf2a9550b3db22"],["/tags/Tomcat/index.html","4381d2a11de5a6edb205f9c2f596d072"],["/tags/autoprefixer/index.html","eb09826db44297a14fc18d3af978e1e4"],["/tags/babel/index.html","ba814e1759ed132af0ba5e604899bcea"],["/tags/chromeApp/index.html","1a54332cb8ba14c28c4e5c17097d5cc6"],["/tags/css/index.html","93dfa7cc4b70ea7069a176ec6955698f"],["/tags/docker/index.html","48b67d55c700bee31c5d353a54394073"],["/tags/express/index.html","3dc6fc47905a89ff3383b7ee82ac36bf"],["/tags/flex布局/index.html","bc5b83fc085516d0b67b2cb5a65897fa"],["/tags/fs/index.html","2b74791f8b671ddde660ad5e694d2cbc"],["/tags/github/index.html","dc731e9db35c0c07fc7167b0e73c09b8"],["/tags/hexo/index.html","4e6b983453f5c56d272560ef7f87d7da"],["/tags/iconfont/index.html","06166f8ac299246756845535b423d787"],["/tags/iframe/index.html","9f1855b2160ee162d958c231903acde2"],["/tags/img/index.html","8253bb909fb3f4959296130799d807d2"],["/tags/index.html","ddc0e133c812e0217264732d73710be1"],["/tags/ios/index.html","e3b93046d429ec4494e8d21074023217"],["/tags/java/index.html","a49e6b367ae4b6cfe3387d4632b9e2b3"],["/tags/jwt/index.html","634985cb9135312a851c782fca4c29ec"],["/tags/logrotate/index.html","0cfb7c5edef9fa0df5bb94acd017c129"],["/tags/loop/index.html","c888f5e59b52fba7ca1df5193bcd7e8e"],["/tags/mac/index.html","b4020ab8d33aca10970c41056830c6c0"],["/tags/npm/index.html","0366656c8c8fb44b28072fe1726ddda0"],["/tags/observable/index.html","c7d61993e3ca78a0f09a1a514b430ddb"],["/tags/path/index.html","4a1ca721387a193607750ed53172962f"],["/tags/polyfill/index.html","0fb6b326b73a3ee334713a58858fd1b3"],["/tags/postcss/index.html","73b3b4fd27b3a03a6d615c5c4ab4089b"],["/tags/postman/index.html","486c032450511bd37d9f565437a23e2f"],["/tags/session-cookie/index.html","0711f06d3367541982e44d816525a8e4"],["/tags/session/index.html","19726ccb17cd6fc56a4966d36a742205"],["/tags/shrinkwrap/index.html","26a861e6bb4b0551c06895690e658dff"],["/tags/this/index.html","e3162ec85e6b86faf6e8a28346ebbd0c"],["/tags/webpack/index.html","f1177289f4ccb38e3def5da104021348"],["/tags/—-ES2019-—-ECMAScript/index.html","a3bfcf7bce969d0a33dd4230946e907a"],["/tags/代理/index.html","9436acd060bd28c691d61825eb5641be"],["/tags/代理服务器/index.html","23119b226d1e45708421befaae1565e4"],["/tags/代码生成图片/index.html","d3ef6cf85d5ae2e8609b30a28351fcbc"],["/tags/入门/index.html","cc930b78f367f0131f17bd13b9d825b8"],["/tags/博客搭建/index.html","5ec9422cf3b1be9c8ebef23bbf5eb159"],["/tags/工具/index.html","125668840c2fe035a2d9f94a865c75a0"],["/tags/异步/index.html","4301547b54453c5f683f43bad586097b"],["/tags/循环/index.html","cf34a29469f1b3d820f633fe58e2cd35"],["/tags/按键符号/index.html","ad228f63f537f866a25cc42a9fba15d1"],["/tags/文档阅读/index.html","163eefb4d33d09e666e5678caac3d17e"],["/tags/服务/index.html","f46427b652b4bbc460a7d7d9796bfc40"],["/tags/服务部署/index.html","1f5b57618f1393e7d814ee685122ee8d"],["/tags/杂文/index.html","fb38ea4267d5dded57281cfec36f836d"],["/tags/经典问题/index.html","8763451062f6ee1a84cc62aa982f1672"],["/tags/编程基础/index.html","2cce940015b9713f7268a14306bce380"],["/tags/编译器/index.html","be26fe3fd888ef0e088a1663b813b046"],["/tags/联表查询/index.html","a133bff407f190a1819278e3d83028e1"],["/tags/路由/index.html","664dcd9bd3f12bc731519aecba8ca3be"],["/tags/运维/index.html","64c09d801d69266cb335873f65d27454"]];
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







