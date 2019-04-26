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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","883d35950687844d0fdd0e3ea898158e"],["/archives/2017/03/index.html","15dee8c10653da23e109b76d65ae5607"],["/archives/2017/04/index.html","29865b03fa07b7d302babe043d037fa7"],["/archives/2017/05/index.html","7e5564e6a82b6d00963f1f5c386cb9ee"],["/archives/2017/07/index.html","e4fc53a6e13068da9a22f4f8e1cc2cc0"],["/archives/2017/08/index.html","7854de5c29ca4d4626b3a0818018b591"],["/archives/2017/10/index.html","0894c7d05aa0e1f758eb76f2052387ee"],["/archives/2017/11/index.html","9381b7fd2f57bfa5653bdb6aa95ce4b8"],["/archives/2017/12/index.html","f2d3a407e07575cbc3e6517673fd8c21"],["/archives/2017/index.html","baa31bcb3025595492ae5b6b71f35848"],["/archives/2017/page/2/index.html","c1eafefad1bdf5f00e1d4e3eda3bcf70"],["/archives/2017/page/3/index.html","59706ee7e9786450ebc366d4263d8735"],["/archives/2017/page/4/index.html","66563bc37ed0f5f75d35326b8323f159"],["/archives/2018/02/index.html","88bc3f10f7cfe769e2cadf1dde1e57c4"],["/archives/2018/03/index.html","2e46163d31888da04ae34e823705a34d"],["/archives/2018/05/index.html","c73c2e4d6615eb16a891fad96ffbeb1a"],["/archives/2018/10/index.html","7f9a52337e8f0dd81260f866fa02a6fb"],["/archives/2018/11/index.html","6ef372f73d19c0bd07fb22ecbb99c124"],["/archives/2018/12/index.html","64a4304c4ec9ab478dfd5eca6dedbb4e"],["/archives/2018/index.html","b7c0453fd5d720536729e04a6856612e"],["/archives/2018/page/2/index.html","45e35b5b26dda71b443f80db5d13be65"],["/archives/2018/page/3/index.html","9e0e36119f6858257b164aec5ec498de"],["/archives/2018/page/4/index.html","f414aa57dfc17b0f356f7f1133df2d25"],["/archives/2019/01/index.html","b774ff2810c878275d9b4a0639edf325"],["/archives/2019/02/index.html","c9f4acf3288b02d2598558c793213b4e"],["/archives/2019/03/index.html","8bcfa0e500226d5cdc745017d145906c"],["/archives/2019/04/index.html","8a0aa1b56c2f7da084563ea2abc865d9"],["/archives/2019/index.html","906f6ca6fb26798ee159452e600296c2"],["/archives/2019/page/2/index.html","49eca63615409031a097663b73bb7c3e"],["/archives/index.html","66469a489bdc18833a46daff4c459aa5"],["/archives/page/2/index.html","563727e50c15d1cc8be2fcb559c3a404"],["/archives/page/3/index.html","d95496d9bc75eed4782097a690f77b92"],["/archives/page/4/index.html","ecb25066ecf5916a39170cff3a6b775a"],["/archives/page/5/index.html","7622d308522e638b524481c085da84ee"],["/archives/page/6/index.html","454d0d4a948c1e4c73503c54cdabb8cb"],["/archives/page/7/index.html","6984f72aa0ce9553bbb0c3e69d9c362a"],["/archives/page/8/index.html","a2d3b49d640a055fbfa66719e37f0e04"],["/archives/page/9/index.html","380238a41362cdb8c820dac2d092b265"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","b94831cf22b4de7fc6feac63098c8a72"],["/categories/RxJs/index.html","832941c45f2443be9b6ff0c85abbe19a"],["/categories/hexo/index.html","922275485afd43e33e38697bee7a5da5"],["/categories/index.html","e2567d718e1e34b2ab618195c59a418c"],["/css/main.css","f1fb96c087bcd49b5157bc5d0fff08ee"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","9c8ef7f283b9593b4caf4b0fce033d15"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fe61e55b030a7e01aa1f6436391c0325"],["/page/3/index.html","83cceea26a95f41bc14bbf50f7746e3c"],["/page/4/index.html","db3cb88edbfa855eaf7316064607a5a3"],["/page/5/index.html","ba9022bd8f24aac81c84bd7dcdeb5750"],["/page/6/index.html","abfe03ac2f7f034dade541f439c2ab0d"],["/page/7/index.html","812c289ff33e7097b0acfe3fb575c043"],["/page/8/index.html","6bdf293190d92b30d30d227bd9b853ed"],["/page/9/index.html","740c12ed44d1336dcbc2c50c713f7e41"],["/posts/12fd/index.html","6680b4c8c2b04432b9c0ed7f4289bf0a"],["/posts/1d4e/index.html","1c76a541568c9f511853a31d33803cd3"],["/posts/232a/index.html","e0e5b31918f3f63024d4a43f99d37fce"],["/posts/2465/index.html","6bd2248681056a9db5b01b5f764945d3"],["/posts/25df/index.html","a8c6e91867f0cbd09ad4ec94d3474488"],["/posts/25f4/index.html","62826b75437f7e50337445be112b5846"],["/posts/26fe/index.html","fea6c8bb1c83c2152fef31493d9d25f8"],["/posts/289d/index.html","7d20f331c2cddcde75c78a1317e41ed6"],["/posts/2b83/index.html","378a61548c3e75815c6e0e01e5815d10"],["/posts/3b3f/index.html","a4c822ecaf08c61fc7515298bf78eb8c"],["/posts/3be7/index.html","352bd09fbc8c9bd4fb7db5f3f62fb1c7"],["/posts/3d25/index.html","789b66d4e574ce01992ddc039f003419"],["/posts/435b/index.html","12273bfb09609b977b4f6832f85f8a1f"],["/posts/5389/index.html","97321d1a6549d1a7b56535f21ddfa329"],["/posts/61f4/index.html","85103a916ce10b9e29676a51d5036d4b"],["/posts/6a81/index.html","6eeaea4c50c5b47a3dc6fa188d472dde"],["/posts/7117/index.html","2eb257a25a832e13735d7d15d388801a"],["/posts/72a3/index.html","be5ea77c0c320b3569f8e4924d3c004d"],["/posts/7a8a/index.html","d2abad5c6591d68000bf9fb98d9895a0"],["/posts/7f0b/index.html","7648ec1e57f7897068dbf06f3855f512"],["/posts/7ffc/index.html","3e6cd1a8e68c007e8546f7b0bd92c489"],["/posts/80bb/index.html","26c3058c82b1bd47fcf026beda6ebea4"],["/posts/8e89/index.html","25412e66074b267b38a20ad381c65d67"],["/posts/9295/index.html","7aed16c6c47db04fdd66cbcd62adc100"],["/posts/a5bd/index.html","c8f9c5d3d27dc1bfb01c810ddf569721"],["/posts/a5ff/index.html","f40f4e57343ead2b5575fc593d83a383"],["/posts/a927/index.html","4ad4f1428d668955b0326cc34719931e"],["/posts/aaba/index.html","0d8a9235a87b10579ecf8842e8db8723"],["/posts/aadc/index.html","f84b5a76537151b9c177332c0ca06411"],["/posts/b2fd/index.html","1fffc6d1fc98c95981e7e08f0d3bf6cd"],["/posts/b5c3/index.html","c978fddd790ccff7faa89bc602b33fa9"],["/posts/bb9f/index.html","f5d03b0becb4662de1dab83d2b12c98d"],["/posts/c769/index.html","f36218377352e4c5e962d1975a8ed089"],["/posts/c92b/index.html","ab180afa318fa302c6fa820729af20b5"],["/posts/c953/index.html","27aa51ea9cce60f26f0acd847b557b28"],["/posts/d0c9/index.html","e968f9e045743db2793ae372c56bacc0"],["/posts/d267/index.html","9846561367a4f3459a9d4091013a5402"],["/posts/db53/index.html","4262721e9a2c2b9ef95e9d2b00605560"],["/posts/df50/index.html","f0284dc38717159870073731a6fc1a7f"],["/posts/e874/index.html","b8de64d40353391b3f120f859106a5f1"],["/posts/ee16/index.html","338f3c90b220b3a376b51c887bd520c0"],["/posts/f82c/index.html","7000495b169ceb134513f61270ffdefe"],["/tags/7-0版本/index.html","b9676740f6fdb94fca350bacba9f6768"],["/tags/JavaScript/index.html","f725c9bb25d960637014c7b806ae02bd"],["/tags/MongoDB/index.html","d2f698be3b34661e1c3e66afe18d88fc"],["/tags/Nginx/index.html","9774e1e2f13298f836d6719aa8404811"],["/tags/Node/index.html","ed3aca0009857e03b1a01f2954778cb8"],["/tags/Node/page/2/index.html","2ba7de83a53ed5143d247c709c8fac9a"],["/tags/PWA/index.html","7420a92e3caa784311e68ef2b53881ed"],["/tags/RxJs/index.html","040b9f7ef4934c8e2390b2184759700b"],["/tags/Tomcat/index.html","3b8e228daf5c1c7e3402b271e417920d"],["/tags/abbrlink/index.html","4ee4d103c560758a7b7cdd950c64cf42"],["/tags/autoprefixer/index.html","37be17b3a7c00931f1fed531553bc018"],["/tags/babel/index.html","5fababb5035e2e705feaf6881f08c679"],["/tags/chromeApp/index.html","a0189f0ab0a4991ab999bf026372739d"],["/tags/css/index.html","0180d465da40b5a7f1c5887f6d7122b8"],["/tags/docker/index.html","49e3846e526b3bf8c41e7049d25f1159"],["/tags/express/index.html","b3ab6ebf7b40164b922a561a079cfc2d"],["/tags/flex布局/index.html","aa2576f071c8f4cd12f986a99d9b7a78"],["/tags/fs/index.html","fb2401342cf991251f71628ed313c458"],["/tags/github/index.html","cfcbb594808fbfc4cd021583bc056186"],["/tags/hexo/index.html","30e067a9cb9317011fff1552d269d739"],["/tags/iconfont/index.html","b691a90c270063d76e4194b9751cd367"],["/tags/iframe/index.html","fda09a65547a1f058c49a1c0975acba3"],["/tags/img/index.html","430d099593405cac33062170bc122545"],["/tags/index.html","3695fe21e780ac60fe38d859cfda247b"],["/tags/ios/index.html","b6cfa71e990b74ccf0376a32a3eda144"],["/tags/java/index.html","7a8df50e3f5cd6b074437b8f3316781b"],["/tags/jwt/index.html","2e703cef15137270fb59d40125c9f989"],["/tags/leancloud/index.html","8465e106c98b3ce088080210ae76c647"],["/tags/logrotate/index.html","669c3d3b4139ecd815e397cd7f402c7d"],["/tags/loop/index.html","d0d1485e3072c84fd9444fbe33e328db"],["/tags/mac/index.html","af55902dc30c42c59fbe52b1e2fa4a58"],["/tags/npm/index.html","9d7d716ae2a2369605fa0860f2e010d5"],["/tags/observable/index.html","dd908937ab34c88bd2cff9ddbafc6110"],["/tags/path/index.html","d4d2f2beed9451ed1da76e8e07668343"],["/tags/polyfill/index.html","737a8a2041e7330a360ca19ccccc5ea9"],["/tags/postcss/index.html","e0114bdac0022e473bc62d1aa7461f9a"],["/tags/postman/index.html","4177efd0327d194386c42cfd1284ba64"],["/tags/session-cookie/index.html","033309cb8f29476fcd570ac560fd2cf7"],["/tags/session/index.html","d592107f5d7d287954487d1f88df307f"],["/tags/shrinkwrap/index.html","c5807283064be11ffeb7feee1f6abe4b"],["/tags/this/index.html","556a8c7cffbf7a1ecfad5f6cf94122fb"],["/tags/webpack/index.html","ba2d2a6645e43a8f014d0a3faf2a2768"],["/tags/—-ES2019-—-ECMAScript/index.html","0018b2c733bf839da2994eae0fa6f91e"],["/tags/代理/index.html","0ef86bd85328515d2b5b4a6e0a6bbaeb"],["/tags/代理服务器/index.html","13efd984790eddcd2749312647cadf01"],["/tags/代码生成图片/index.html","95f0137fdd1d05c08b212a5a03521b30"],["/tags/入门/index.html","c7c4889ba201571936a16a4dd10cdc7f"],["/tags/博客搭建/index.html","4a443e2953ed28cc10ebdb259f2c677c"],["/tags/工具/index.html","e5b7c8e76a1240d8fcb132030d3e47af"],["/tags/异步/index.html","fcdc9de46d40360bcb4080693b6cad42"],["/tags/循环/index.html","7e0be74c746bb4ed55df24e8a51717e3"],["/tags/按键符号/index.html","aa90ea34261746025ebe97d7134c7d78"],["/tags/文档阅读/index.html","259c0e837f119c7261d57281a02eb574"],["/tags/服务/index.html","ca59e8653e180aa85a4bf1a0522f13e5"],["/tags/服务部署/index.html","b490fee99cfb1fedda2b48498add7665"],["/tags/杂文/index.html","cc895f9842c32e6acea16cae1e23a3fd"],["/tags/爬虫/index.html","ddf0212d85971f86e7da78b7f3ad8c72"],["/tags/经典问题/index.html","bdd9dc0c2ac529ff101d09e2eaf82fed"],["/tags/编程基础/index.html","1ef32d10e175488567b948e9ee975739"],["/tags/编译器/index.html","4d64e6d0cef577a0e643336a115d3ac8"],["/tags/联表查询/index.html","2a3788f7021f9b071864ae39fd6a89ac"],["/tags/路由/index.html","49b086e793d9bbf7ae68406a05352a6d"],["/tags/运维/index.html","f780cb038226465ccd8051bcd85c660c"]];
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







