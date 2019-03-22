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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","284dc6a560a0d3bf6537f3065adbbacf"],["/2017/04/22/使用阿里的字体图标——iconfont/index.html","dd8029b0a611f820dd259819907b94db"],["/2017/05/28/Tomcat中三个重要的端口/index.html","16b5baf4b427d777019449bde7da4331"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","448ef4bd1dd268a88f75698a54bd015f"],["/2017/07/20/NodeJs文字转图片/index.html","47eaeacbd58135d2676b047edb77b3b8"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","9f3b6baffa105078aa36341b02982371"],["/2017/07/29/npm使用总结（1）：探究依赖树/index.html","4eeb1d68e380136fd9883af81ee7cfa7"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","c793ba10abf1f663065c35e33b797aa2"],["/2017/07/29/npm使用总结（2）：探究版本锁/index.html","58870ad0a38f3efe370509de0eb21da3"],["/2017/08/22/论如何阅读API文档/index.html","687ee4154cf0b021631966edf6917892"],["/2017/10/19/使用express-session遇到的同步问题/index.html","949add2a2176fff32ae590f1fe6fe014"],["/2017/10/20/flex布局总结/index.html","6e1c9113260ca99854500027e2d0cfdf"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","65aec271a96be71b2bbbb9567861a660"],["/2017/11/01/nginx配置静态资源/index.html","12d8f7751204cdee9f87bdcec2f63f70"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","d815ec088b91c815dd19334bc761b194"],["/2017/11/09/告别chromeApp版Postman/index.html","8a20aabe6976bf627baa3a0e5a177417"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","3ddfa63a6b5da6446619f9b836ce0e52"],["/2017/12/12/比较JavaScript中的几种循环/index.html","7bad61331f265db96ea7949106fcd957"],["/2017/12/13/当循环遇上异步/index.html","683e6dc8f765dca7e49130adf2088905"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","a5c5e0d793c406001adc2a0f347c02ad"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","88881b6306e8fc8d7f0e18e0f1ade786"],["/2017/12/28/PWA入门实践/index.html","5d2fc00decd35f615dc1bdd402ccb75a"],["/2018/02/09/NodeJs的几种文件路径/index.html","9c329db87bd6b515ae86f17b10a731d1"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","419b71f6b57d71a3b3317cfe3e2a6f91"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","8b13ef25c5ada13d2075fc77e3bd4063"],["/2018/03/05/程序中的时间问题总结/index.html","04c6e0ae8d9a6fd9b798b21ebd6cb6f1"],["/2018/03/17/微信企业号加密方法分析/index.html","fb7c2fc3c9f19a76a3352ddc99fbfead"],["/2018/05/31/JavaScript中的this全解析/index.html","b48bf9731dc2a50c2ab8525cec560fd7"],["/2018/10/08/最近的一些思考/index.html","2a8892bbd71a901f94e5e245110d5325"],["/2018/10/11/引用传递和值传递总结/index.html","6000bdd9ec5246ec03f2b1c671abff8f"],["/2018/10/16/MongoDB联表查询/index.html","57103f7820956c9014fc6d395bfa1afe"],["/2018/11/01/Babel第一讲/index.html","00a35d767856722bdd9170fd2c5abc50"],["/2018/11/13/再谈Babel-polyfill/index.html","724be802acb4137424d3b39a58dc9d9f"],["/2018/11/14/升级Babel到7版本/index.html","f64e6c59e207401d0dfc6d7e89fbd2de"],["/2018/11/15/Babel极致优化/index.html","a6ef9f54a1a228477b728cb956855552"],["/2018/11/15/正确使用Babel（1）后端/index.html","005b76256779014c09242b28be1642fb"],["/2018/12/04/NodeJs包与模块机制/index.html","7c1c3720e7cbda77b5f578b0c543d6b1"],["/2018/12/11/最近遇到的两个bug总结/index.html","6d69137e0887ae87e697e678993f17c1"],["/2018/12/14/浅谈session管理/index.html","099cf810fc2b5e5516e5b1ea052c50a3"],["/2019/01/04/使用logrotate进行日志管理/index.html","c8fae65526bf20ce77e234ecc8818293"],["/2019/02/15/如何学习和实践ES201X/index.html","da7b24f93f2ee12c1047706b384bfb44"],["/404.html","638a58fc445fdc969627ed0bee28f742"],["/about/index.html","17e0fcb34f2293bd79d5b6e06a8ca455"],["/archives/2017/03/index.html","b3132f019082f2a7f567150fabd99b48"],["/archives/2017/04/index.html","456e1122d1c520dce417fe332369c131"],["/archives/2017/05/index.html","2e392af50620d32132650777529e8c5d"],["/archives/2017/07/index.html","31e48bab6df624018d9507975c5e420d"],["/archives/2017/08/index.html","1b961e9c99ce95d976b9d2f5eb7bf9e2"],["/archives/2017/10/index.html","73d252f6640ef9b41ae5b30b2a895602"],["/archives/2017/11/index.html","3070cd3175ed8b8bec9b1e004b691dc7"],["/archives/2017/12/index.html","2f24c5a23e04e23da82bafbb7082e3fe"],["/archives/2017/index.html","68d007897b9552330718c195d7f7b1a9"],["/archives/2017/page/2/index.html","22a7fdc4529ba2cbfe5a0ceea2752542"],["/archives/2017/page/3/index.html","5f8fe604b21f97a3affe4364db8b3795"],["/archives/2017/page/4/index.html","2520fb29b37321225207a0b77d8a66e2"],["/archives/2018/02/index.html","8cfcffbf65ae750740fd7707ac3de9eb"],["/archives/2018/03/index.html","c8e0e1d5ec0bf76ff8626e6bf5a29cbe"],["/archives/2018/05/index.html","06af1102a02aa169324e8e3133aafb17"],["/archives/2018/10/index.html","1b09f31b482d5d7e82c6b228e2ed1735"],["/archives/2018/11/index.html","7aa8a56d8521bf9d8fb28d2a6a438d06"],["/archives/2018/12/index.html","25350583df342bfa8ff65742cad2ce57"],["/archives/2018/index.html","4a7f8ea7afe4ce60d284fefed5970b68"],["/archives/2018/page/2/index.html","36dc79ed95fae2e6b208bc752ae7cc6a"],["/archives/2018/page/3/index.html","8e7e679a1a22d2474b6c9f7322570623"],["/archives/2018/page/4/index.html","cfb8f6a754706d37b6b0e8f439a6eb79"],["/archives/2019/01/index.html","db76a4fffbaa55da30c86421806ef62a"],["/archives/2019/02/index.html","994f5b5557015d27169615e2995e1e86"],["/archives/2019/index.html","a9b18f7f9bc090fde8031e9805ce0277"],["/archives/index.html","ad26470ab9fb252f09af3bc27c981384"],["/archives/page/2/index.html","d3178118cbbd0609481003a9c8b6afb5"],["/archives/page/3/index.html","52dc863838659e88cb44d84c731c5743"],["/archives/page/4/index.html","21bd9d54a13d12020be5ff6234610339"],["/archives/page/5/index.html","fa75b08afc38b06e3000a3c6e2967d25"],["/archives/page/6/index.html","0bebac2e89e2d09d32eec6f38c7336ac"],["/archives/page/7/index.html","aa23e0003b9dae4f3b6ade514efad5af"],["/archives/page/8/index.html","92093526e39d3ffbe9fb42e5a019a715"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","ceda2e5aee86bbb42fa5ea8ce189d3be"],["/css/main.css","7a0f8411398074b574ca78cc4310363f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","3ac4524114d96e82deb0da2be6a8c345"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","47483a535bd765a686f680d0bd11abce"],["/page/3/index.html","1565d65a934feddadfc08b068bc7fc43"],["/page/4/index.html","9ebd3520401ff8058edc1573f01d5f69"],["/page/5/index.html","be70d54299c707cb00d8fe3d885eeef5"],["/page/6/index.html","67ac8abaa595585a872b9ed961371965"],["/page/7/index.html","f8737fa3a9df8b4b617724139c9fe531"],["/page/8/index.html","6b63c699c3bf71e3d52fe59db0aedd90"],["/tags/7-0版本/index.html","1f41f3f92297c31dadb10a4e821e1198"],["/tags/JavaScript/index.html","680dd0525b13b7149df1f3262008ce6f"],["/tags/MongoDB/index.html","66600da5f2b14c1bae9d9509bae19c43"],["/tags/Node/index.html","7b40a5f5614989c894ab9f386b0a77fd"],["/tags/Node/page/2/index.html","e8dafe59b8fb20f749868c9d3a777d80"],["/tags/PWA/index.html","380ad8db42d30e8fe9d38d81a3e718b4"],["/tags/Tomcat/index.html","9394dd9bcef8d43e0ff8ab1dca0dedf6"],["/tags/autoprefixer/index.html","96df5010f3e1f35700c038bae0bf9c5c"],["/tags/babel/index.html","6118169aae37e843bbb05abadd8f466e"],["/tags/chromeApp/index.html","b416f3fc4c37d70310d34829e3877552"],["/tags/css/index.html","d8c6a5b1a493a83fa0f42786178f7893"],["/tags/docker/index.html","ecf75a0ad717e667f3e75f13286dfb61"],["/tags/express/index.html","ba01574ae8cc1564cbf96e5dff7418c3"],["/tags/flex布局/index.html","09de1cc39ada0b84c2f6706fa7dbc925"],["/tags/fs/index.html","c63d6c67ac73c3892b5daf89560c060b"],["/tags/github/index.html","dd05654a4ace018d65fee869a32f4d8e"],["/tags/hexo/index.html","a70a0dbc2235b39714659cb5b94db682"],["/tags/iconfont/index.html","c8593451e8313a78a5e285fcdc6e3ac9"],["/tags/iframe/index.html","0e908ad2a83b25ecfb4b514c10aca07b"],["/tags/img/index.html","6f0caa342eafc6b0b3d31dcc10b1ec07"],["/tags/index.html","ddfe01f81fd6f6ecf376c1e3535535c2"],["/tags/ios/index.html","9293c47c21af650a5fc20874f477d46c"],["/tags/java/index.html","5b43e76a141f2d81d5c8559434632a12"],["/tags/jwt/index.html","c13d8bb1ed76313092ab6aa0b273122c"],["/tags/logrotate/index.html","e52843aa08b50a737df8132d8348f1be"],["/tags/loop/index.html","ee361762ee6bbf5c47964b18a4c7b8ce"],["/tags/mac/index.html","979b9da8dacf51ad77ebc960a488e998"],["/tags/npm/index.html","b9429bbb7aa644e157decfdd1eb3e103"],["/tags/path/index.html","6b79b62762cf1d960f82b7970a522e04"],["/tags/polyfill/index.html","8ab4f16a83d5b2fbdac8f9d3d05608d3"],["/tags/postcss/index.html","7a75aad4ce34a6c82425e0a151968183"],["/tags/postman/index.html","5b851b6844fa1e9e94cf6e1e9c9aacad"],["/tags/session-cookie/index.html","cc31f39ba9531fd084500a167b160226"],["/tags/session/index.html","454c919e662142124cb9c75bc7615491"],["/tags/shrinkwrap/index.html","dc83146ec1261b742e984ec6a50e431c"],["/tags/this/index.html","4cbff5cfebf9d2c1b045866d9d8ace05"],["/tags/webpack/index.html","fb988d9b0e165462a7a6740e75cb4686"],["/tags/—-ES2019-—-ECMAScript/index.html","28b0a7d426f2110b3612f839bbc8465c"],["/tags/代理服务器/index.html","bb12c3af57d9b7c9b8642c92e77fbebc"],["/tags/代码生成图片/index.html","edcf49dee4b5e46334e1123570607a57"],["/tags/入门/index.html","a17bf3951ee6901fcab73497e88bf40b"],["/tags/博客搭建/index.html","6df1e50925d17e09a26881c983a8a734"],["/tags/工具/index.html","f17303924df29b395de8cb1b62080d0d"],["/tags/异步/index.html","442e47b84aa31515900b6631d3d5f60e"],["/tags/循环/index.html","5af77b7e1a9756410c508d2247900b3a"],["/tags/按键符号/index.html","19bcb2077d42b399975205e44c2a711f"],["/tags/文档阅读/index.html","e7fccef8b83618c9ed0266429a58df41"],["/tags/服务/index.html","a44afc01db67c57324ccbd75f6e9325c"],["/tags/服务部署/index.html","ecd5cf4ac8c932f8fcda5c5422df9d0f"],["/tags/杂文/index.html","be338a63119a5e63283ba3902194fcde"],["/tags/经典问题/index.html","f228459dff2c0d90f7c88c52fd1efbf9"],["/tags/编程基础/index.html","ad110eab46d79ff0b502a5082277538d"],["/tags/编译器/index.html","eab0147815247886f49966c561017fce"],["/tags/联表查询/index.html","6966b590c5ba33275a5d95e5e64878fd"],["/tags/运维/index.html","c6104a4df76bf49b32d4ad94b8b11cca"]];
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







