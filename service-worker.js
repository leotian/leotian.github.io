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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","dfbb10e962c009927389f8e42d3b88f5"],["/2017/04/22/使用阿里的字体图标——iconfont/index.html","0f8c096ade66927d2ccdd6d8b2936dd5"],["/2017/05/28/Tomcat中三个重要的端口/index.html","d8950610988360518394b6fc1572d6bb"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","1f5045b1eaf105b0ecd870077af57593"],["/2017/07/20/NodeJs文字转图片/index.html","e7cdb18667213a61994b847d2007086d"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","fe58e8ff36b505a5ff544ac3e2c6016c"],["/2017/07/29/npm使用总结（1）：探究依赖树/index.html","4eeb1d68e380136fd9883af81ee7cfa7"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","dbeea65da31c8b8a09c6db330e032c01"],["/2017/07/29/npm使用总结（2）：探究版本锁/index.html","58870ad0a38f3efe370509de0eb21da3"],["/2017/08/22/论如何阅读API文档/index.html","ff150bfc3a2e2bceb300818bd718f58c"],["/2017/10/19/使用express-session遇到的同步问题/index.html","113ed8e81f21bc419fc11cd8560bde82"],["/2017/10/20/flex布局总结/index.html","5a8e7ec1f23ebfb1e9a1d48438dfeae4"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","c64ac92a43d977b5ff231a6cb0fdd887"],["/2017/11/01/nginx配置静态资源/index.html","7433436e50a8a7af7f90a4032ca4589a"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","d32bd283bf6a483d03e0046ea3869654"],["/2017/11/09/告别chromeApp版Postman/index.html","486b1ef533c9a0da504b6d5ab4c9a09f"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","19a7512e79a84b137cf53bd48dfbf886"],["/2017/12/12/比较JavaScript中的几种循环/index.html","668d42f86bc4ef69b828aa737a9aa018"],["/2017/12/13/当循环遇上异步/index.html","047cebd3aaf9fdd2350afcb4600434e1"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","d4d58d984a5f011b0b5a7e6baca69926"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","733cc812a042087403f75290a535630d"],["/2017/12/28/PWA入门实践/index.html","799ae2e1f74fd40953fe75a60c4d9edb"],["/2018/02/09/NodeJs的几种文件路径/index.html","ef2bb91a5bd4e9be7a2d21c88c68e897"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","b68f059f79d640fc862e28796ee4a9b5"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","cfaeb706c61fc1e9e609cac86918a56c"],["/2018/03/05/程序中的时间问题总结/index.html","9ab019f25a813e69c6bb500acf93121c"],["/2018/03/17/微信企业号加密方法分析/index.html","8a8ed08cf6f0ecdb4819403ea3f968b2"],["/2018/05/31/JavaScript中的this全解析/index.html","4ef2b09e2f5ef9e5789e47b264aabf48"],["/2018/10/08/最近的一些思考/index.html","6d282445dbd3832d06065e29d9a82329"],["/2018/10/11/引用传递和值传递总结/index.html","95ee522829ed1ba3b202cdd9fa7ee508"],["/2018/10/16/MongoDB联表查询/index.html","de1e06f2b90703257c93f97e8814c07a"],["/2018/11/01/Babel第一讲/index.html","4272c2645c62500d053f969645b2df9a"],["/2018/11/13/再谈Babel-polyfill/index.html","efe3c8f198b91082287ee8a1ba0025e6"],["/2018/11/14/升级Babel到7版本/index.html","dde9ab5bf1e7b0d8c49ac041c4218106"],["/2018/11/15/Babel极致优化/index.html","a6ef9f54a1a228477b728cb956855552"],["/2018/11/15/正确使用Babel（1）后端/index.html","2b0df888d92abf4b09f0dfe8afef4729"],["/2018/12/04/NodeJs包与模块机制/index.html","5d0d5ec8be5cd169156d0de9784d7084"],["/2018/12/11/最近遇到的两个bug总结/index.html","b72e669e0f9037f853bbf082e577c56f"],["/2018/12/14/浅谈session管理/index.html","6f7c5437834bce976ae5d08d16c7c476"],["/2019/01/04/使用logrotate进行日志管理/index.html","21fcba5ac3b6d7c252d468698609b3b8"],["/2019/02/15/如何学习和实践ES201X/index.html","25c0cf6776fea5ba7da5169ffeb5e0c9"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","5dde0a21c8dc968e57562dedf72f6ef3"],["/archives/2017/03/index.html","95476ce4b2a36abee1551e753bca2335"],["/archives/2017/04/index.html","5a1e67fbbe3035d3de57ca662c2f8300"],["/archives/2017/05/index.html","d7e6b92c6a2d1b3e490607ae0a73486a"],["/archives/2017/07/index.html","0ec3ef5f527fdc42084b3ecfb9a15d36"],["/archives/2017/08/index.html","4728aa7070633d8451acfed95307c009"],["/archives/2017/10/index.html","30a26ba5c0b373037b1c9af83c935e6b"],["/archives/2017/11/index.html","5e826e3368a5652d070d013cfcb1939c"],["/archives/2017/12/index.html","a3e506fed7c1e5487aa2bee4de92ed5d"],["/archives/2017/index.html","e42453c1a480922deb67224f7db523a8"],["/archives/2017/page/2/index.html","9dfb8f9512e62074be3f860a790c78c2"],["/archives/2017/page/3/index.html","48ac5895cdc117ef43b2eeca823505a5"],["/archives/2017/page/4/index.html","c6bf73dfef95012a8778540a251207eb"],["/archives/2018/02/index.html","836ad42b849c79dc04072a0f880c131b"],["/archives/2018/03/index.html","37fbee87d23dcc235577885d40c413a8"],["/archives/2018/05/index.html","7fc57b8458f17113943c249a1eb2b35c"],["/archives/2018/10/index.html","dc5517fae1412bd52b2d32399f69e596"],["/archives/2018/11/index.html","fbee25cd5c6ca1313ad6e92fc8754b80"],["/archives/2018/12/index.html","1fd0e1683bed25ea9c4baa2adfee2d81"],["/archives/2018/index.html","fa70138909a8cb201af7f2a2a1ce9644"],["/archives/2018/page/2/index.html","2dc77ccc190c8b7f10c3b976ec478ac3"],["/archives/2018/page/3/index.html","0345070be6e442e76b24100cf3b4348b"],["/archives/2018/page/4/index.html","ed10a4d14ea228a31337e2cfd4dc3048"],["/archives/2019/01/index.html","ba270c26c3872c2ce2ee7a39c9fbda09"],["/archives/2019/02/index.html","994a49c28deb0d0c90d1bb1486ce3402"],["/archives/2019/index.html","b9ef4e966a004730104712fc7adfff85"],["/archives/index.html","23301dcd4cb835b5c4f6f0df3eb95322"],["/archives/page/2/index.html","5f57783bace1f65588da06881dc1331c"],["/archives/page/3/index.html","666affdb6e34156894ef3d7e16306811"],["/archives/page/4/index.html","6a0531c18f04bd68403dbe03371955a9"],["/archives/page/5/index.html","f4e99ef92de3b28281c4c07f695efc1e"],["/archives/page/6/index.html","554d65caff32755182502ebf304ce2f9"],["/archives/page/7/index.html","20b8e370e9cb0575d7c51a87caa9a5f0"],["/archives/page/8/index.html","891b6d9dc850ee557f3bafc054c79dd9"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","f6b781db59deeb9ee2cd0bb6e36972c4"],["/css/main.css","224b0d3fbeb83c869ffda75c992237c0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","82403a63e96fd76a118a0daf897d2c9b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f1dca3b2ec85a0a19c44a3f6a57f9a16"],["/page/3/index.html","b56dbb0982ff5c6bbab5a238c3e44126"],["/page/4/index.html","c8cf025638be033f5f235e61153627d2"],["/page/5/index.html","7be8684f1efa93cee033bc4951f9224b"],["/page/6/index.html","e37f9db2fd40f09ec9463ce1d6209a08"],["/page/7/index.html","a12a13c4cbef35cedb67bebb677002be"],["/page/8/index.html","644d79838cd749b0fcccb9d923eb00f4"],["/tags/7-0版本/index.html","765bc5d80b2ad6aa019c10d2e12488cb"],["/tags/JavaScript/index.html","bee3bf30ec29ecb096a4184cd52d9278"],["/tags/MongoDB/index.html","54acf0e160d15b803ac46dd5c401277d"],["/tags/Node/index.html","39b09571530c49d88e5eef4dcfd06474"],["/tags/Node/page/2/index.html","0a30095e97a041dd798c1e7885ec764e"],["/tags/PWA/index.html","540e04bc6f79b8609ad930c4d29c69a1"],["/tags/Tomcat/index.html","e6b0085020f7d790816979aeef19e54e"],["/tags/autoprefixer/index.html","489f6b12cfacabfc246a667fcc1147da"],["/tags/babel/index.html","c10bbf59155250c4003b8ebcbe3060b5"],["/tags/chromeApp/index.html","0152612ba1603b5da4bf53881da2c489"],["/tags/css/index.html","6855d578dec5593db60f4b125c536aea"],["/tags/docker/index.html","3c8d98264fe8ec99ef766fa1c470fda4"],["/tags/express/index.html","b466464959333d0b5164e8e00c680d77"],["/tags/flex布局/index.html","57de252b3b453a3b1c1cc1122302b872"],["/tags/fs/index.html","863ca5901ebeaf14934f2d53ca17eba4"],["/tags/github/index.html","4ded0f68544d1c2999f066c48ae608a9"],["/tags/hexo/index.html","b8f97d66065fdb57cc98eba0f55f4a5a"],["/tags/iconfont/index.html","df1219e642c723164c8dfe329b5e001f"],["/tags/iframe/index.html","5a3fab0808c078209a10ea17653ad8fa"],["/tags/img/index.html","ebed0f0d0cd85782f3b32a2122821ae2"],["/tags/index.html","f32741da449859ecabb88170eb2d3916"],["/tags/ios/index.html","fb6e37fe6917febd4e8dad3591d3b7d9"],["/tags/java/index.html","5a9646c6ac87329f06a283883145818b"],["/tags/jwt/index.html","5946fe02ae9988c9ec5c67d62b8e142b"],["/tags/logrotate/index.html","a7b1ce0b3456e85dcce2eed955cfc5f1"],["/tags/loop/index.html","dcb8494fb649637d008b67a6f7e65967"],["/tags/mac/index.html","0d224473cb61129aff0f5f80e4f64eaa"],["/tags/npm/index.html","1d10e5bb87693a0121dfe02075ed2530"],["/tags/path/index.html","2324de41a8294b11d84bab3fb2d810a9"],["/tags/polyfill/index.html","b0843b2c0caa667a1ef5063f8358723c"],["/tags/postcss/index.html","9671abc34ac26eb8530aaa01db3f8418"],["/tags/postman/index.html","5a56469fa888a6d12fab2de24100e546"],["/tags/session-cookie/index.html","8a7af1c185d58acc7d35f154538951bb"],["/tags/session/index.html","5fa461c5ef028b1cfc4a35e9d831f8b4"],["/tags/shrinkwrap/index.html","61c02c03232ea7f44f928b3fcb84a578"],["/tags/this/index.html","65ed2071c9b5f4844e62076bf11588b0"],["/tags/webpack/index.html","36c2feadcc85f56876b346a0f1d4b643"],["/tags/—-ES2019-—-ECMAScript/index.html","6aed6fa0dd9384bea02887e673d05e0a"],["/tags/代理服务器/index.html","e98b479c231f499301208ed0fb71d9ab"],["/tags/代码生成图片/index.html","e5ea9eb7f8c8952d04eb201f88c6a3fc"],["/tags/入门/index.html","90b1cd773869960675c44a769e2b4cd1"],["/tags/博客搭建/index.html","801dbb223a48bf2b5a0fa34a73ad02bd"],["/tags/工具/index.html","786bcd368893330bd62342dfd880b2b3"],["/tags/异步/index.html","a3f00d56de3fa95c7071eb93b275cd61"],["/tags/循环/index.html","86c20e8e7c6e120070461de3efa5fb08"],["/tags/按键符号/index.html","6c5cb037b833cc70347606081f1855d3"],["/tags/文档阅读/index.html","f828b478afeca73b979f7fc4b1385bab"],["/tags/服务/index.html","b986d0ff165855bb692d57c0d97bb7d6"],["/tags/服务部署/index.html","93487fd897bf75aefe996958e8bfaf41"],["/tags/杂文/index.html","da69ffbc3dc8aa183f3fe4bb8f092630"],["/tags/经典问题/index.html","e7b92d20d62e2cceab15c43d6b9c467c"],["/tags/编程基础/index.html","a9f34844c1e934664697f3b2471f57c6"],["/tags/编译器/index.html","4b656ce12d1acfbeb4004aa639c23c9b"],["/tags/联表查询/index.html","2eb86365fd792ab0aed9e9ba6221d0db"],["/tags/运维/index.html","9c833e9989e272208c3cd0fe30fa7837"]];
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







