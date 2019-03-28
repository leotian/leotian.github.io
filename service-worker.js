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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","5eead654da181094c510da0db688b4c0"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","32fac678ef980ad932af566e05af84ba"],["/2017/04/22/使用阿里的字体图标——iconfont/index.html","0f8c096ade66927d2ccdd6d8b2936dd5"],["/2017/05/28/Tomcat中三个重要的端口/index.html","406ca38ba57d714b02e0b34a40965ae4"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","a5e00d48043091ecc03ec650196e2372"],["/2017/07/20/NodeJs文字转图片/index.html","d585690b509cb9b6773458a134bf14fb"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","15de6751aae8d3b45434e9be1f839e65"],["/2017/07/29/npm使用总结（1）：探究依赖树/index.html","4eeb1d68e380136fd9883af81ee7cfa7"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","31eea59115406d607263fb04d7d790f1"],["/2017/07/29/npm使用总结（2）：探究版本锁/index.html","58870ad0a38f3efe370509de0eb21da3"],["/2017/08/22/论如何阅读API文档/index.html","117ad7d29b9e450bb2bd37b2b5fb38f6"],["/2017/10/19/使用express-session遇到的同步问题/index.html","6fbe0ab1d1594b29d89527d00db2605e"],["/2017/10/20/flex布局总结/index.html","15b96e5afe0db6ea911aa91ff92a8775"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","17d82aa515caf4850a9910366d800c31"],["/2017/11/01/nginx配置静态资源/index.html","aecef88b2f60330fc2c170b1cd515ea8"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","b31234882f5dad87f4719322c5a75e21"],["/2017/11/09/告别chromeApp版Postman/index.html","af0967adceae3725dcf57d0cd487ac37"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","9f1c74b86afd9dca2d5d9e6d342f3e71"],["/2017/12/12/比较JavaScript中的几种循环/index.html","3956bc7129cae2a8197831c9628b14ec"],["/2017/12/13/当循环遇上异步/index.html","3de2651779aa928299272d617f5f4de7"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","f83835a4769eb9b35d09fc002cf2ae76"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","91a6bc66cf9c6678da397bed88434f1d"],["/2017/12/28/PWA入门实践/index.html","0fa0ffb97deaf134217b027f788a9e19"],["/2018/02/09/NodeJs的几种文件路径/index.html","e14f8f08215fe00b6d9940e428a5d170"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","1e83167d6a74d78c54336e254034cdcd"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","ef7c140f18d023bb3ee9e616f11bb633"],["/2018/03/05/程序中的时间问题总结/index.html","dbf3e5400ab5680835ecec3ced78911f"],["/2018/03/17/微信企业号加密方法分析/index.html","74804a246e4be8536e857e58905e2d5f"],["/2018/05/31/JavaScript中的this全解析/index.html","f1d183eef0e3aac616fec8b39e79ef7b"],["/2018/10/08/最近的一些思考/index.html","6964f0c3af7dc54c9f838b6ae9de79a2"],["/2018/10/11/引用传递和值传递总结/index.html","c9915bb76fa0e57d96953d9e55161655"],["/2018/10/16/MongoDB联表查询/index.html","7a1b2fb08d50f82a725948cd3b7e79f7"],["/2018/11/01/Babel第一讲/index.html","7563a7234da78db01afb38d3a1f9b23c"],["/2018/11/13/再谈Babel-polyfill/index.html","3d6baf08a6fccd91b02d995582b72ad7"],["/2018/11/14/升级Babel到7版本/index.html","24d50b871dd6a14ba6a7d8dacdb6bcdf"],["/2018/11/15/Babel极致优化/index.html","a6ef9f54a1a228477b728cb956855552"],["/2018/11/15/正确使用Babel（1）后端/index.html","76b66c05a103880066edc564f6db857a"],["/2018/12/04/NodeJs包与模块机制/index.html","38dc0ab680dac0d34273f644a3459168"],["/2018/12/11/最近遇到的两个bug总结/index.html","c881a305446dd127263e75208ad30a0f"],["/2018/12/14/浅谈session管理/index.html","b09c31d715d9aa9bc264e3bf1af3ecd7"],["/2019/01/04/使用logrotate进行日志管理/index.html","7ae15ebe0af07a48de63883695daf264"],["/2019/02/15/如何学习和实践ES201X/index.html","c293ed1c700b6b28596c6b9c19cd59f3"],["/2019/03/25/Rx学习—理解observable（1）/index.html","55ec14988d61871f3f7e00fda1fef1e1"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","8d0fe1e704320225771de23e6b0e4ba2"],["/archives/2017/03/index.html","8c2b64ce1cf51090ea77b32fdcda7407"],["/archives/2017/04/index.html","54aff5c2ce7a910a77c18b03a50f55a5"],["/archives/2017/05/index.html","f8d0d610e021a27f0d45b1581217d130"],["/archives/2017/07/index.html","c183b45c9c3ace0a742e767f018f6cda"],["/archives/2017/08/index.html","f8c26bc9587856f67d4c6b4124b967af"],["/archives/2017/10/index.html","60e54655126ae93f702175691e5320ca"],["/archives/2017/11/index.html","b37fefdbb6335bd326eaf82547655898"],["/archives/2017/12/index.html","e0f92457a2448287be654e2881041cbf"],["/archives/2017/index.html","5dc38762a31a758e7d6938aa30bf96cb"],["/archives/2017/page/2/index.html","aa9d7eb948e2dddcb3ea01f2bdfd40f1"],["/archives/2017/page/3/index.html","416cd864248c27fc1f4a6f4713f24552"],["/archives/2017/page/4/index.html","c3521911099ab3426684877b4bea3257"],["/archives/2018/02/index.html","b0ee30b8f7d970516e1543d266644090"],["/archives/2018/03/index.html","48c6d177725aa40bfde05de2fde89580"],["/archives/2018/05/index.html","26f0f908226faea078de7c7fdd2e7552"],["/archives/2018/10/index.html","eee208efdc57b06860904411aaae766a"],["/archives/2018/11/index.html","271d098f89b38b971d019ddc9e67362c"],["/archives/2018/12/index.html","98346d1a49abf878c82bc1f6e6e326c2"],["/archives/2018/index.html","f02fde5bd150deca416cde73f0a8c916"],["/archives/2018/page/2/index.html","bea129e830337a2ab6e5d2b170694c6d"],["/archives/2018/page/3/index.html","13f21937033b400759e8fb28bfa161a8"],["/archives/2018/page/4/index.html","ad10abedf1bfe9cf002f5a79ee381e3f"],["/archives/2019/01/index.html","42b97d534ba32e619a223efa455efc56"],["/archives/2019/02/index.html","6d00c47c7c4fa23419f92e009657b7c9"],["/archives/2019/03/index.html","85364b2be393a2f6ab5cd4cc1aa7c3e9"],["/archives/2019/index.html","a2f1f4f8112037cb7baec13a209b4478"],["/archives/index.html","51a3041a629ef4e87bc33c2e56c641dd"],["/archives/page/2/index.html","cf4ba0f554c4ba48fdb7283ce796b20f"],["/archives/page/3/index.html","bfbbb019b5fb22b0eea4ac0c9d26490d"],["/archives/page/4/index.html","723f217f8584acaa6510befb26fc3964"],["/archives/page/5/index.html","d2d2579296d7cf078d90cf3cef0c4feb"],["/archives/page/6/index.html","23a53d4d458c4785ec8315d0fd225a47"],["/archives/page/7/index.html","c8d73adca44f299dd1e740ee0fa7b11b"],["/archives/page/8/index.html","8a1fce1eeaba8a1e8cc2ee00a49c2215"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","f80ba08a331e35e024cac5d708f57635"],["/css/main.css","3cee93999e04a91d8b7d34736e7e9a1b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","c2aac1111af0984b6592dbe139f1d3f2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","984ac303af0d9c35431912b1c824532d"],["/page/3/index.html","1bd1a07df371283feec93a7fdc499489"],["/page/4/index.html","caee88a51cd43d7f28fbb4bbc459e2fe"],["/page/5/index.html","6ed370c598612cde09a5f95b060431a2"],["/page/6/index.html","fe3a24a8f6261d342224e6afe82a2c5b"],["/page/7/index.html","71e6a3d3800309b9537aaa15d657a7ee"],["/page/8/index.html","88d3894c57e9a1122233ea8d38ae874b"],["/tags/7-0版本/index.html","d114b0e01a4cf153d16fee95a23ca750"],["/tags/JavaScript/index.html","f12e5745adbfe4b033b32cb42345c0ba"],["/tags/MongoDB/index.html","075da1701efc3796ce17970d677d41bd"],["/tags/Node/index.html","2943b3a530618436a82f5bc09439d02b"],["/tags/Node/page/2/index.html","525d4639374c190fa9c1ea8e2e4dec70"],["/tags/PWA/index.html","86bd04db897698fa8fb8c5ab72d4cc03"],["/tags/Rx/index.html","e9d79968135c08fb4f64fb7beea3de61"],["/tags/Tomcat/index.html","3d486f4fa1b6ecdd30d88e39e550d4ea"],["/tags/autoprefixer/index.html","593a2a08dce30a6c1ee24889ad7d9386"],["/tags/babel/index.html","ba17df0f2b80f80f5cda895c36f1650a"],["/tags/chromeApp/index.html","e567413b059037cc4e3e1bc958830b0a"],["/tags/css/index.html","eecc18f0b82d0fa8937be5b6eb702e93"],["/tags/docker/index.html","99f5b103e907da0cb887943e780dac01"],["/tags/express/index.html","6ca80e1330f02cd00a43f6c64eb5633e"],["/tags/flex布局/index.html","39aa8c1c0049c038853304d255951ec4"],["/tags/fs/index.html","88a2e414b6158cc18a18783e17e95c75"],["/tags/github/index.html","9226126ad2ca9b8a56d112e6dad60946"],["/tags/hexo/index.html","af55df6403f1249003428b23277b6546"],["/tags/iconfont/index.html","147941ff6173c908f36065d32e85cee7"],["/tags/iframe/index.html","ef337522b8048a3707b6ea003ded5c69"],["/tags/img/index.html","301da015d574bfed7c19b15a216e222c"],["/tags/index.html","bd1143ffabe199a5f367930c8d8abd14"],["/tags/ios/index.html","9bad6e04006c4de3b098c3cbd6abe665"],["/tags/java/index.html","1824e4621031ecee060b9d206b357deb"],["/tags/jwt/index.html","52ef12505026bccd52e365e48784b93b"],["/tags/logrotate/index.html","d425e98d027dcd929be85124bbe75fe3"],["/tags/loop/index.html","17b555ee3ea5923a90b9785576b24d43"],["/tags/mac/index.html","307f088c2217f44a04be4214f824158d"],["/tags/npm/index.html","90a561ed6f277f6819a69d361cadd91c"],["/tags/observable/index.html","0a8550615f714c072f5f3ed1f3591fbf"],["/tags/path/index.html","91d272cddf48774c7aec27ecebb6984c"],["/tags/polyfill/index.html","7ea97ebfcfce7d317bd993761b07925b"],["/tags/postcss/index.html","e5a53bf74827522f5aae34e30c4aa6ea"],["/tags/postman/index.html","bf6692c3d6162f32d0bcddc295e67baa"],["/tags/session-cookie/index.html","9e37bad2f98d66361956cb1d47134580"],["/tags/session/index.html","e4f7cb81f02e7dc6689f92140e9addbf"],["/tags/shrinkwrap/index.html","8136115c1bee97c587f83aa9121ee765"],["/tags/this/index.html","e95503046d05b2461074edc7bbe8b037"],["/tags/webpack/index.html","1049569b3432ac9551a4c041e87d4a1c"],["/tags/—-ES2019-—-ECMAScript/index.html","85029b2c46d5aa9d10ed5b83a50368da"],["/tags/代理服务器/index.html","fecbb4ffc1dbdc20bbff2f48bf0ad8df"],["/tags/代码生成图片/index.html","6454e4a97a99c52136dcbfcbd2ab6b33"],["/tags/入门/index.html","3fa6d20551d5e97e599617322075dc30"],["/tags/博客搭建/index.html","daa93594b7d642fdf5d399351ac728d7"],["/tags/工具/index.html","7c14a2bf83bd28cc5654cd200f2c6765"],["/tags/异步/index.html","b8e8bf8a2104e1ebd91dbad881bf6155"],["/tags/循环/index.html","2187ed71f1c692365e12bf57455d4b90"],["/tags/按键符号/index.html","64457c4f1806744cd748ba589c6c6fd4"],["/tags/文档阅读/index.html","4ce072948f0babc7cedf92781bc87ac2"],["/tags/服务/index.html","113b8a521f6ccb66b8dfc0e30fa556de"],["/tags/服务部署/index.html","e6ff94cdcc749ce38bd6de20575579d5"],["/tags/杂文/index.html","8c238705abb8972da55a1cf1a460c9bc"],["/tags/经典问题/index.html","5d7f75bf05b092d98cf89f18d6be0a16"],["/tags/编程基础/index.html","78123d3ede028c3c4aa9cd36923fc1bd"],["/tags/编译器/index.html","342cca3e1b655f7584845d278c6ce8ca"],["/tags/联表查询/index.html","8de50315edfdac66723d96d5ce264a0a"],["/tags/运维/index.html","83da2754901f0400bb97e33facd0962c"]];
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







