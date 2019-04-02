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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","8210b7c558bc4518bd20ac07f279cc46"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","1fc6729af653779a4d8878eb1dadbf5d"],["/2017/05/28/Tomcat中三个重要的端口/index.html","281d23def7d0bc5c77583576abbfc982"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","4afa0f3e29cfd12df8e1812d3498dac5"],["/2017/07/20/NodeJs文字转图片/index.html","096e617463d1284f1a3bee2b4efbf49a"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","b85c70602d6fff4da24f20018acc088c"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","8d7fd57f77f9c676b1ae9d8fcdda14e2"],["/2017/08/22/论如何阅读API文档/index.html","7bb78ae5e2754586549197daebaddc6a"],["/2017/10/19/使用express-session遇到的同步问题/index.html","9b309c4f00559b73d3c6303ab2cec65a"],["/2017/10/20/flex布局总结/index.html","fe115f0f8d5dc440fcb51cac6338a465"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","13e3e7c422bcd74721cc9883a3a37be6"],["/2017/11/01/nginx配置静态资源/index.html","e68f6a7e6ae940b03ffd34363adf994a"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","5e456f92038046039ad08bbfd40b8fcb"],["/2017/11/09/告别chromeApp版Postman/index.html","0f8f7e0f40ab13af9adbcad35dd47cd1"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","9835c379c15cde49f10321f319bd43fc"],["/2017/12/12/比较JavaScript中的几种循环/index.html","1c6e1091e98c816766d65d18aa8f7e3a"],["/2017/12/13/当循环遇上异步/index.html","96a4a081218f140c2d2f8a44ea1ed79e"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","22b2f539870e2e993c23eaf58e5ff983"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","a95e5b6f5bd313c6a2941a5cacefa02f"],["/2017/12/28/PWA入门实践/index.html","ec5be55511655e4def99782365da9007"],["/2018/02/09/NodeJs的几种文件路径/index.html","72689f737fa991756cd3f4f6c1f35405"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","2f32248a47a7af93bb43dca5af78e684"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","192a71dab6329ea4a860672d481c9338"],["/2018/03/05/程序中的时间问题总结/index.html","00d6e56500e590c93cac753e3873ee2b"],["/2018/03/17/微信企业号加密方法分析/index.html","8a0ad7cf02abc70433b41b8703f4f724"],["/2018/05/31/JavaScript中的this全解析/index.html","fe4aeec752cd2cf7e04ed0f00bc063ba"],["/2018/10/08/最近的一些思考/index.html","ffc45afecca5d30a06f13e0478ee79e6"],["/2018/10/11/引用传递和值传递总结/index.html","649c9eefa25307f22b14a79a2ba898d1"],["/2018/10/16/MongoDB联表查询/index.html","805f10a23ef234ca36ab5ce483d07df0"],["/2018/11/01/Babel第一讲/index.html","c6fcad8a553030eebb5e48f87d56ca83"],["/2018/11/13/再谈Babel-polyfill/index.html","b8ce76fbcd24ce5a62f1f1c3b824a721"],["/2018/11/14/升级Babel到7版本/index.html","dd9cba42bb457d3784bd03c0d501ba5f"],["/2018/11/15/正确使用Babel（1）后端/index.html","cfc1ab1eab7f27a744c99c7d022b8cdd"],["/2018/12/04/NodeJs包与模块机制/index.html","8d8f51108b4493596b1c15f1a440676f"],["/2018/12/11/最近遇到的两个bug总结/index.html","5a9acaa84b16e1d778f913a49fa3f1be"],["/2018/12/14/浅谈session管理/index.html","1066f5d96e97c6c2b1c901bc23cb9b98"],["/2019/01/04/使用logrotate进行日志管理/index.html","206b9bff340295f9b4c0f8a488410a63"],["/2019/02/15/如何学习和实践ES201X/index.html","27370d95dde3498f138015308df1cf43"],["/2019/03/25/Rx学习—理解Observable（1）/index.html","5b4ee92d27f019566b647ac5170b0153"],["/2019/03/28/Rx学习—理解Observable（2）/index.html","64646926149f64da359d808a4723715f"],["/2019/04/01/记一次网站代理配置/index.html","9292da43f545b83d3ec6d085d18d043e"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","1f37e63d71db45ef2ebd8ac139cf2f62"],["/archives/2017/03/index.html","ffab34504c71a1c2fb3b1809fd06d894"],["/archives/2017/04/index.html","717950159262c6caca124b7788c7156c"],["/archives/2017/05/index.html","67b5d5f7916dcb8be10ac1a19023ec1a"],["/archives/2017/07/index.html","32eb87c9ba070c1e849cf275f029dec7"],["/archives/2017/08/index.html","dcd7a38b62bd83c26b6205795850f0ac"],["/archives/2017/10/index.html","7a4e941eb8f2b8ae8f0830ff493b52c5"],["/archives/2017/11/index.html","230f64dfdaf31052ed28344a02cba0b8"],["/archives/2017/12/index.html","0cdb8a880082a37851f979306d3fea76"],["/archives/2017/index.html","24b5743ab68a4a7609e205fdb4675688"],["/archives/2017/page/2/index.html","15269c0040554a11908cd993d1ad3ce3"],["/archives/2017/page/3/index.html","b6a6ce754e58450ee5360244223b44f7"],["/archives/2017/page/4/index.html","7ca335cacc7f7b47428902b3e871a9f1"],["/archives/2018/02/index.html","544ae67ea6024a27b721523c51362fae"],["/archives/2018/03/index.html","c9989cda849838dcfce1a3c37fdf2a39"],["/archives/2018/05/index.html","13313cb8f2a95e4994198f39618b213a"],["/archives/2018/10/index.html","66b55a986bcaf202552d7acd9bde47dd"],["/archives/2018/11/index.html","f9f647e5ea33f4ee9f2f357dbb3a6768"],["/archives/2018/12/index.html","37cdfc1f04bce7574b036708fffa45cc"],["/archives/2018/index.html","90fac4d9f3dbbb82cc6e863df0d5b742"],["/archives/2018/page/2/index.html","602f146b5c62cb733f39c620f5c0c770"],["/archives/2018/page/3/index.html","cfdbc2d5f2e2cfce747cd78687a9056b"],["/archives/2018/page/4/index.html","d41ad9393cf6cbe082958f8b3536bb74"],["/archives/2019/01/index.html","17dd9cc1cba6bad94a65e1c7080c5ef6"],["/archives/2019/02/index.html","d2effbdc2c33760e2c2b24ea4969fe31"],["/archives/2019/03/index.html","c34e1a223486c63b893286b7f6011dab"],["/archives/2019/04/index.html","bf4837b2a753264dc6f579133b643d5f"],["/archives/2019/index.html","242fa263b5be090b484f019be01ab041"],["/archives/index.html","232d450a278ac811d73d7b3546e109a8"],["/archives/page/2/index.html","4c34c7843b82d1207f34ce0e138d00e1"],["/archives/page/3/index.html","cc9c7fc4f8af1c37dedc06f3a7bbc47c"],["/archives/page/4/index.html","c575c6030c05ea4fc385e214e972fede"],["/archives/page/5/index.html","e0986488857106085f198e1eaf49741d"],["/archives/page/6/index.html","99401e6eee08972b5fd9a8d76d4794cf"],["/archives/page/7/index.html","4cd1986b348caf13031618e707c84c3c"],["/archives/page/8/index.html","1bba87810891b0ed8f9dbef542027fa6"],["/archives/page/9/index.html","a4da1c1381579bee69b43c7688a9bf15"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","2b451f2a15a1408d21bfced7f04b2e9a"],["/css/main.css","00964c81d1ce91cdfcc5fd4d77185ed7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","864605a56fec91ab4fbfa28f293dc515"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0ba2780b05110de703e1e7bba934b38a"],["/page/3/index.html","d2e136f662bdfbe0abea3d97949e427c"],["/page/4/index.html","97b00a80a6d404f6cc38ee779721d538"],["/page/5/index.html","34a3421073eb82dd268fc19cf6676e28"],["/page/6/index.html","ae4b15a9c39f2548c5d6c3d87c81188d"],["/page/7/index.html","c2da97fc0c4e3ee44c272d6f75ca5776"],["/page/8/index.html","9c7a2c456cc0dfa1f4d1e392839b3901"],["/page/9/index.html","e40edccff401c2c735cd063de2be081c"],["/tags/7-0版本/index.html","1d687a464f886cb75361f6134151bd28"],["/tags/JavaScript/index.html","eb1117a70e357284d53cd9735c059989"],["/tags/MongoDB/index.html","5108e2715a6178173fb07e5676052415"],["/tags/Node/index.html","84880bbde0e8e54fd059d295ea7e6009"],["/tags/Node/page/2/index.html","668a584ccb5b470c9043846a89a66eee"],["/tags/PWA/index.html","98b994e7d5b31d77b9241fe72b83a38e"],["/tags/Rx/index.html","8aab9e36e9a1925f001f387274aaa9e9"],["/tags/Tomcat/index.html","81d5964bb301eeb18c115dd3efecc0d9"],["/tags/autoprefixer/index.html","d649dffd03c9f2709ca78ded2baebfca"],["/tags/babel/index.html","a4ccfa4a6676839561bcf1fd4727b1bc"],["/tags/chromeApp/index.html","97c9c77b9ade2f458c3490c4fcff54e5"],["/tags/css/index.html","fb9e8797a56eca6dc38c94eaf08ce40e"],["/tags/docker/index.html","017496fef05f35ec890bd2e9cb4f0b45"],["/tags/express/index.html","07eb87daa2aabffca967f7da6a18436a"],["/tags/flex布局/index.html","b40f14da0af828bbfd69a408d0e8ac05"],["/tags/fs/index.html","4174426f99908668a1c282980c8dc7c1"],["/tags/github/index.html","5f059d6d08560d4cf2c3e80f33c01ecf"],["/tags/hexo/index.html","3ee8f85dfa13b3d581fee8f8c1cffe75"],["/tags/iconfont/index.html","4c1caac8bffdd6cb69b596257c339d0a"],["/tags/iframe/index.html","196a6dc8af67114a239aa653cec3da51"],["/tags/img/index.html","da4e106b66b5376f35fcf8028e630a36"],["/tags/index.html","2f36c48b7b1887d3260b22aaa46aa84f"],["/tags/ios/index.html","a6ab2ec21e775f882caf5aa5cc51f1a7"],["/tags/java/index.html","68c052cb866389a102fe2e117c8fdcd1"],["/tags/jwt/index.html","aafb7e719f9e0db241eab425bc1ddb3f"],["/tags/logrotate/index.html","d740c0a5b72e6dcb43c765f56b668261"],["/tags/loop/index.html","557286eb95f909fd30530ad2bc4222e9"],["/tags/mac/index.html","d4ec26ff898a968f1e70c3b35b4163d4"],["/tags/nginx/index.html","f01599d23612c94923456524256d4a44"],["/tags/npm/index.html","e2936406869ec2631be77bb1957c2809"],["/tags/observable/index.html","11b558ab7dccadec0e74d53cf10aeefd"],["/tags/path/index.html","b238b8cc79a11a380bc43a4cbce55714"],["/tags/polyfill/index.html","987511bcacbeef50c87ad36e59c33f2d"],["/tags/postcss/index.html","4d21745494d80a4f96ef0f4ef2b76ab5"],["/tags/postman/index.html","74e53c16231791796ee633d6080afad3"],["/tags/session-cookie/index.html","2e31a698b5a740d16d9940c60bee6a05"],["/tags/session/index.html","19a57f8fc4d00ad60ddc991ee1429ec1"],["/tags/shrinkwrap/index.html","96e91606b6e47972fb411bc2e00d046a"],["/tags/this/index.html","7508443650ccf12c6ac972c0a68c7af7"],["/tags/webpack/index.html","778d8a2d277a3f5581b530c13a0868c2"],["/tags/—-ES2019-—-ECMAScript/index.html","786195c99bc379e359c08f245da591f8"],["/tags/代理/index.html","3f6ec5d2c4eb83b40b1f7aa0f9be7ac7"],["/tags/代理服务器/index.html","cb41a8c1ffbdbdbd0021b1931f901cb2"],["/tags/代码生成图片/index.html","7bb154ba6ece4883c4953df6b4d47e60"],["/tags/入门/index.html","f39b870c428e0bc1306ac642deb3b210"],["/tags/博客搭建/index.html","84fc411c7a55b97ce769b6789e812cd2"],["/tags/工具/index.html","07ef7e9f2320272839b2fb71c86548af"],["/tags/异步/index.html","f567f8541fc66d8af861b497abc30305"],["/tags/循环/index.html","2bbf42a8a7ca550ab910cfbc5d07ed9b"],["/tags/按键符号/index.html","8a40d79ec9243f6334abba4b39438e74"],["/tags/文档阅读/index.html","64d7c63a18215df42ddce4af9e558509"],["/tags/服务/index.html","c4836d283a9e56b673926b7f255554f1"],["/tags/服务部署/index.html","cf4a29edd0cd3c2ab94e86d636745993"],["/tags/杂文/index.html","80ebcbefe0ac032ca76555bd47de0867"],["/tags/经典问题/index.html","80f119539f6791f3998c7628cab6cb23"],["/tags/编程基础/index.html","b11a160a4081834634b0d5da2fae2865"],["/tags/编译器/index.html","202f57fbb465cdaa932a953ce453a14c"],["/tags/联表查询/index.html","1c545dbe8e9d7d361ef172df42d44783"],["/tags/路由/index.html","e183469f75bc804942433a83aa564e0e"],["/tags/运维/index.html","68bc14f0f121a803ffd8392afa1260ba"]];
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







