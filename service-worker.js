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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","c40e75bbd1e2dfdc533bd33e63fd8500"],["/archives/2017/03/index.html","8c7533b7aab4b2dda649d868786ac2b2"],["/archives/2017/04/index.html","b9ca6c5d68ae46ffc11003eb1b106558"],["/archives/2017/05/index.html","d2899945f946e1848a7ea713c51f21c5"],["/archives/2017/07/index.html","521cb2cf663309f656d4e9d6e45a1a1f"],["/archives/2017/08/index.html","3eb73925ba0145aca4495ce0a68a1e19"],["/archives/2017/10/index.html","8d4de69af5057b65684647fe7798995d"],["/archives/2017/11/index.html","b9ce87949d63f8cd95262116747c2762"],["/archives/2017/12/index.html","a2d1990f6d270f9fd2e4f0c6d783a263"],["/archives/2017/index.html","7aa452cbda84a7e0aada045555359193"],["/archives/2017/page/2/index.html","833490ab444488848f8006d8232ee67f"],["/archives/2017/page/3/index.html","59dbebdc633ca3dfcf8b6f05f2dfc2f7"],["/archives/2017/page/4/index.html","bd1bdd22442744f72a9e593eeb25ba03"],["/archives/2018/02/index.html","0cd184031740a152674463fe82b12afa"],["/archives/2018/03/index.html","94c000f6fe03b4945c378fc260564e25"],["/archives/2018/05/index.html","3b9d97d6bcfd92cf5f3e4a0d177b938f"],["/archives/2018/10/index.html","0f35c94cea1c489952216058e8d185b0"],["/archives/2018/11/index.html","2edcd8387caa23c1de3960baf0ded593"],["/archives/2018/12/index.html","b72e1e5203355eafd125d38f20a9dc53"],["/archives/2018/index.html","a55f7a81936c980a4344432ed9ab7514"],["/archives/2018/page/2/index.html","653eabbfc49f30c5adf57d5f2314a23e"],["/archives/2018/page/3/index.html","c38197f37a0ce0021ff5d110dfb8d00c"],["/archives/2018/page/4/index.html","e1b6511b1409d4f71cb081e9f9b5eb6f"],["/archives/2019/01/index.html","c92ff5ff0f9dd20adaba4b154750d551"],["/archives/2019/02/index.html","d377c4dc8776126532cc7ea3c3acb050"],["/archives/2019/03/index.html","5e48ad8b530d10e685f59810c9bb76f1"],["/archives/2019/04/index.html","b8b155cc420d33fb0945d3d2fae3a0a8"],["/archives/2019/index.html","f6e0e996a7bd5c707e6b088bed973097"],["/archives/2019/page/2/index.html","f2463aa37d5ee2aa0efe16401c7e9e37"],["/archives/index.html","0829eae87a56522155a4de70f5768db5"],["/archives/page/2/index.html","21e25a1835de9e6268a06afd6f416599"],["/archives/page/3/index.html","01a58da03fa6882940d9b18a0422c3e4"],["/archives/page/4/index.html","cc9919c54d4efa9208e2c1d1948764cd"],["/archives/page/5/index.html","38bdbe08f2be92cfbe83367212634e88"],["/archives/page/6/index.html","4cd1ac617afeb0c5c266bb8aab871fd3"],["/archives/page/7/index.html","06c5e87ceb8a0c3e9a12a2312cec36ca"],["/archives/page/8/index.html","f078b634a3931dba8feea370fc250a2b"],["/archives/page/9/index.html","1efe5e8543f6575812ca027a883a50c6"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","9c9bf5f60afe126a1e300d4ab64f791a"],["/categories/RxJs/index.html","2e2f70b0d6449f8f0f8bd1ae671cc28a"],["/categories/hexo/index.html","9d676ba45995f98de7857bbdcd4b0899"],["/categories/index.html","274869d7bb301b12a6521fae7e268986"],["/css/main.css","46795f959377b2338358596ebd5d66d3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","671656d2fe3ab7045a2dd5f44823a5a0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","591d275872a5f8e3a1e683677c4c30b7"],["/page/3/index.html","fabcecf76eb01e3e8fec7698c65aafc9"],["/page/4/index.html","a0aad5e84fa224143cd1d221d1731dfe"],["/page/5/index.html","f6634ce8c6fd8e1bf31061f621026b9e"],["/page/6/index.html","dfd03eea5bc67f718add92a7267005a3"],["/page/7/index.html","e6e3d91916fb39c4203174c25c667e02"],["/page/8/index.html","c911438a64295958f78ec79fc204a6a5"],["/page/9/index.html","24149fd8e70564ce6dc1bd37137087d7"],["/posts/12fd/index.html","a300ccf2083e59e11df439db737b1f99"],["/posts/1d4e/index.html","f9e1f9e7f0d14494b6301384cbf8c771"],["/posts/232a/index.html","cca96f193c58657f3d744adbe501b46e"],["/posts/2465/index.html","46c8e66e763518d68d8b0ecb57123fcd"],["/posts/25df/index.html","039b2a95f6b4862aa6799bdb94385b20"],["/posts/25f4/index.html","9faa1c505f5010ecb8676a44a7488318"],["/posts/26fe/index.html","06936ca71f23c1e6d483778659f37590"],["/posts/289d/index.html","88cdbf921fe537145a3d7d33f1680bc0"],["/posts/2b83/index.html","6410d0560fb5cfc1cfa6da69c6b7d4f8"],["/posts/3b3f/index.html","8f99f6533f464d5cbd243babf6022a70"],["/posts/3be7/index.html","1f7058f684300009ee96e2b1b7d13fc1"],["/posts/3d25/index.html","ed75390f86d0fc68fd94ec902e69f393"],["/posts/435b/index.html","19cb0af6c04591810491872e7690c9db"],["/posts/5389/index.html","d1306264f7c592121f36fc8503780744"],["/posts/61f4/index.html","ee73d512e0bd7859709f82672762577e"],["/posts/6a81/index.html","0b4eeec0201b7607f005218ddc063e8a"],["/posts/7117/index.html","712b63a7d5e292db17e69f9c55e70b72"],["/posts/72a3/index.html","0349106770e886d236292f86cc75af56"],["/posts/7a8a/index.html","fb84a961c678d15abbfa9b316dd76c8a"],["/posts/7f0b/index.html","8f4a1b8f1a60cae03b2e5b77f5c1faba"],["/posts/7ffc/index.html","d59d5c365612c2b655c65653d400011d"],["/posts/80bb/index.html","e417c77be9e5babc64e3b6489601de72"],["/posts/8e89/index.html","4b5101e0fa6c32b32a15e716c409e5d6"],["/posts/9295/index.html","050e3700c39756dc1eddda1935c4fbd7"],["/posts/a5bd/index.html","8b2c0759f05fdcdbda9a56012f010f92"],["/posts/a5ff/index.html","a4b0dba7e0ec95de93f8b23ddb2bd72e"],["/posts/a927/index.html","9f19c68fe4c76dbeb8897c0272f79e0b"],["/posts/aaba/index.html","65ef1c49baf63e0306dd2123fdfaf811"],["/posts/aadc/index.html","b1df1a6fadb09f0ffe8a492881084d71"],["/posts/b2fd/index.html","a5bb6510ffde55b6dab6d8a4e0177c57"],["/posts/b5c3/index.html","4a6339b804f11566e63eb92438a3200a"],["/posts/bb9f/index.html","c364d7c7b597b85da5690ee55efccf70"],["/posts/c769/index.html","7d39e4a3153b37ac21dc354bf70b46b8"],["/posts/c92b/index.html","b6933c36bd1a2d628e12f0b6ce727a09"],["/posts/c953/index.html","38b5e06099cbcde05f90ab0fb14a8432"],["/posts/d0c9/index.html","34efb02faf8116e50b5ee4f555663d14"],["/posts/d267/index.html","df3c138dd4cd2c77abed8875a1710e17"],["/posts/db53/index.html","f41124abae6bdbbc9e27d08ceaa2af58"],["/posts/df50/index.html","96f02f32b76428746c0831e065aa8207"],["/posts/e874/index.html","048187f650248637e660675911a313e4"],["/posts/ee16/index.html","5795574a0fdcc7cb7ec0d2c2303c46b9"],["/posts/f37e/index.html","9adbd6477a569654031adc97bcf429b8"],["/posts/f82c/index.html","219da2a218002e21e3c3b0bdd487da44"],["/tags/7-0版本/index.html","672b92f55f4a34350851afca333662da"],["/tags/CDN/index.html","1c09803af13c5924f861ffc4b0ec54e2"],["/tags/JavaScript/index.html","530c42b8e686f294648f01c92560763a"],["/tags/MongoDB/index.html","3965782b7a1f9bf55b8d9ef05c12ddbd"],["/tags/Nginx/index.html","99768773429b8181799564d17c965a3e"],["/tags/Node/index.html","98b0c7b767387dfaef4451f59ed07be9"],["/tags/Node/page/2/index.html","14ac10be7900418359867df556fe6b59"],["/tags/PWA/index.html","f2e30442b4fd1cdae23c2a05b6371aad"],["/tags/RxJs/index.html","b82fdb966474e908633fb54db967a443"],["/tags/Tomcat/index.html","993b49e2220b86e999bd9b7cc3e958a1"],["/tags/abbrlink/index.html","7bf8d2f09246d9fa8b9d5c5fab1ffe9d"],["/tags/autoprefixer/index.html","3e6b4c95755f9941de74db9399a7d466"],["/tags/babel/index.html","3e092cce9810eb679c3711188b692b4f"],["/tags/chromeApp/index.html","c160c9af09c18077a0e5cd7de378b2c2"],["/tags/css/index.html","dc29914ee18a3e24bd39834053aa9185"],["/tags/docker/index.html","d0bd1e8cb6c3fa3bdfd9e0330f566345"],["/tags/express/index.html","b80e71e35cbd37b5272c00df4be07747"],["/tags/flex布局/index.html","63f7e5af05c50e9f4c6313fc9abec87f"],["/tags/fs/index.html","b34519aef25ee079e9aaf12e36d0474c"],["/tags/github/index.html","a8cd49fb09f23f705890776d4db9f1c6"],["/tags/hexo/index.html","5a9cded611bec7cf8ebdc26e4cd3a540"],["/tags/iconfont/index.html","4d8f72a27aae5c263f2c8f32030a3b88"],["/tags/iframe/index.html","53af21230cfdd575c5ce7c613e208508"],["/tags/img/index.html","62a0ab1abc939b253efcb6582947d027"],["/tags/index.html","22e9a42ed4e73abf937d331a32c8e2fb"],["/tags/ios/index.html","0da9fce44cafa045a01f4187b08d63f4"],["/tags/java/index.html","1938e1786e14c4761f6756f0c2209c07"],["/tags/jwt/index.html","94a6b8948e3331c471ad734cf8031f3d"],["/tags/leancloud/index.html","cd177fcefa877d20c31d063d19110901"],["/tags/logrotate/index.html","5c629691d0ca378179a2d321fea9b23e"],["/tags/loop/index.html","41ad847993e07ce3a10dd0e021d93ec0"],["/tags/mac/index.html","67b1e74322d59f1acf6d81da90efd00b"],["/tags/npm/index.html","9590dd87c47d24f70fa313471bd4afad"],["/tags/observable/index.html","af98d9f75565f8f67c3ea26a164155b4"],["/tags/path/index.html","b6350d0c90a24ff095153dd2a8bc956a"],["/tags/polyfill/index.html","a05cfc27e8e5ce8f69c4c0016761da5c"],["/tags/postcss/index.html","e366e5993ef1256f2c0734cae816f320"],["/tags/postman/index.html","8c80d0a015d6da5cf77a4d327e78201c"],["/tags/session-cookie/index.html","371e04d0253df43d7f0fc09c4da87408"],["/tags/session/index.html","84a216ff85a539a90f8dcc036ba7d4d9"],["/tags/shrinkwrap/index.html","888435f6bdb1f8ee8202014b8c5556e8"],["/tags/this/index.html","5db4e33bb7c6648f7f5dcc8892d4f196"],["/tags/webpack/index.html","8b245642ed264ba3c1b2db0c1227b475"],["/tags/—-ES2019-—-ECMAScript/index.html","7c605eefd96d8cd48ec70e87529a9f3b"],["/tags/代理/index.html","472157f252fdd4a36643e556559c0a0e"],["/tags/代理服务器/index.html","92229b2c990c0ba5a167fd70ec02ea6a"],["/tags/代码生成图片/index.html","2402f30dbb1cf4b655df30234f7a1cdc"],["/tags/入门/index.html","4369eb8dc408cbbc48d7857a6c6407fa"],["/tags/博客搭建/index.html","c657eb5ee62a73aa6ce12b24f68f004b"],["/tags/又拍云/index.html","5b292a4c243fcda123cd574b8f97fb31"],["/tags/图床/index.html","410b61fb822aa4ec9c0db18aad8c2755"],["/tags/工具/index.html","d128b91795c8904fbab46b662ec7a610"],["/tags/异步/index.html","0b501b61d24e92420764c1c3ac5f8a4a"],["/tags/循环/index.html","757523f1fa9d18a7012151da62433150"],["/tags/按键符号/index.html","795f52434a829db9c276146555ae2f8a"],["/tags/文档阅读/index.html","e92f6b77d04faab526820c65f6ac7444"],["/tags/服务/index.html","77227702f0eb902e5b23f6d59d94e97f"],["/tags/服务部署/index.html","400ee70b27199ea89b24b8d7a7f3e654"],["/tags/杂文/index.html","cac6133464c41cdb061cee46d02bf9b1"],["/tags/爬虫/index.html","5611636590f84a25b39305f6b12d9cce"],["/tags/经典问题/index.html","e5fb36adf994e347bc7d73ebd37540de"],["/tags/编程基础/index.html","266e0417463e383bcdd42e844ad698f9"],["/tags/编译器/index.html","1ae7464f19de2e19ee5d38111450be6a"],["/tags/联表查询/index.html","fda62a0a09f7f6a2267ef860183c457f"],["/tags/路由/index.html","802087889525b2bdbf1356fd60a3a778"],["/tags/运维/index.html","5a2d5a50d8d645a24a73ce8b4dad86f7"]];
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







