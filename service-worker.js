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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","1994d0364faac41d51fd723953242c87"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","7f453c52444817f3bdb3ff742bd12240"],["/2017/05/28/Tomcat中三个重要的端口/index.html","d998d18f7b70ae92d7a1e68a4de3e17d"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","6bf48d786bcaf1b01966e69cfc18a8e0"],["/2017/07/20/NodeJs文字转图片/index.html","a41a29b377bc52936b7df7fbe2778750"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","ee282b072baee30de98a5cd1a4ade899"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","0a7b94940e4361855da4b6793254f6c4"],["/2017/08/22/论如何阅读API文档/index.html","cd36b5891daf61f15758ca593995c791"],["/2017/10/19/使用express-session遇到的同步问题/index.html","1b68df4e2fd856ccf378a85fdc9ab744"],["/2017/10/20/flex布局总结/index.html","333bc5c1ef5b98752a2655b197c6b58a"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","4bfc5d919fe86b2abdccc9dd6688f6f2"],["/2017/11/01/nginx配置静态资源/index.html","7b37130e443120d6e15c2f6fb0a6254c"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","34878968ffaec17ebbdb757ad2a5ab56"],["/2017/11/09/告别chromeApp版Postman/index.html","489c0dd551a7b8acdfed3a3a0bc1d18e"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","b76f30085c1a0355b9542a1525d057cc"],["/2017/12/12/比较JavaScript中的几种循环/index.html","eb260b77f8ec8a733a12dc848ad2d293"],["/2017/12/13/当循环遇上异步/index.html","2381443206c4cd5e6506b23be57ac601"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","bf635f68bce3968d6a479e9c49f32de4"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","94adc93333ef24bc148c319b7b1f8ba1"],["/2017/12/28/PWA入门实践/index.html","54ee9434e4c0c162a1fbca5b6bea87d9"],["/2018/02/09/NodeJs的几种文件路径/index.html","35c5e0eefd208c7998dda7f6062c8c32"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","ea1b0f0dee1f33217bb3a54f32272bc8"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","fc74e9757b9e04fb2a8830b9dc5f2bd9"],["/2018/03/05/程序中的时间问题总结/index.html","97c7429c2597fb27d882a0ab6ec5b967"],["/2018/03/17/微信企业号加密方法分析/index.html","6106454da4831c9cdd771e5e8f5679f1"],["/2018/05/31/JavaScript中的this全解析/index.html","7be63b74ef03a89fd4da6ba811bd8e29"],["/2018/10/08/最近的一些思考/index.html","659df74d11f0b41cfd818e09a71db83e"],["/2018/10/11/引用传递和值传递总结/index.html","fc47e69acf5bc4076bac29972cbdffb7"],["/2018/10/16/MongoDB联表查询/index.html","cc4eba9cc97afa8ab37639ae4bf81ac0"],["/2018/11/01/Babel第一讲/index.html","745bf374073cfdf6f4482d1f8e4f3174"],["/2018/11/13/再谈Babel-polyfill/index.html","602eff726a0003efba766217e252bd51"],["/2018/11/14/升级Babel到7版本/index.html","7e9f87eb90f2688085cb030d9ca1fb22"],["/2018/11/15/正确使用Babel（1）后端/index.html","225bcd817ab25914f6646f7fc937caee"],["/2018/12/04/NodeJs包与模块机制/index.html","8513b0f86c2e662913a065f850dadede"],["/2018/12/11/最近遇到的两个bug总结/index.html","a0a46bab5f7e6e08d381c5a6006a00ef"],["/2018/12/14/浅谈session管理/index.html","a147a1bc0e30ca75ef1ab080e412b8c7"],["/2019/01/04/使用logrotate进行日志管理/index.html","9610c78cc304e4a7601890da2c09c384"],["/2019/02/15/如何学习和实践ES201X/index.html","685dc1f493282b055432407ee0080d75"],["/2019/03/25/Rx学习—理解Observable（1）/index.html","035fd114f1d092b6e6b9ceb34d330b80"],["/2019/03/28/Rx学习—理解Observable（2）/index.html","9d2c4d1ff93d9045f44948f4937bd49e"],["/2019/04/01/记一次网站代理配置/index.html","ed93d42d16643c0b9c73decf36134e21"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","e265445dcfa6b4363cd55a42197892cd"],["/archives/2017/03/index.html","abab303863b795404abff468dddfc30d"],["/archives/2017/04/index.html","1e3af0f97ea760c68ef55120b74550d3"],["/archives/2017/05/index.html","31e05bf7e044fc225d14973b558701fa"],["/archives/2017/07/index.html","1c35d7313be8cb8db0f36f211cb51801"],["/archives/2017/08/index.html","d22ffb67a71baeeda52a7edcfb6ec788"],["/archives/2017/10/index.html","49aafef240f5e7e2a110cc98827ab77a"],["/archives/2017/11/index.html","eea39a442c2ad76b980b8f51fda571e8"],["/archives/2017/12/index.html","f8e73d5724e0c6b641cf31acfee3bcd1"],["/archives/2017/index.html","b3c9e24164d57c57fa3dd75ef67ea0d0"],["/archives/2017/page/2/index.html","a88b3cd591e5073d759a99f0b9f2ad2b"],["/archives/2017/page/3/index.html","95dd97be410e60156b27221bb7bb2bfd"],["/archives/2017/page/4/index.html","6da30b3de2ba10e99104349ea13ae109"],["/archives/2018/02/index.html","5e2409ec9e5d803a0026079b75630ec1"],["/archives/2018/03/index.html","b12d15e587bd6d7eb31513c955f1b612"],["/archives/2018/05/index.html","4244875d9ae4e8fd118f59d0eb8d4e1d"],["/archives/2018/10/index.html","709fd3768fe52da3c2d46daf0b984cf9"],["/archives/2018/11/index.html","59fdd3bdb5fa10d1611b68ed9abe1931"],["/archives/2018/12/index.html","eb4d31e68ae8c1fa94f825038d6ddedb"],["/archives/2018/index.html","e5d037b00685b9a66d4169caa8294af2"],["/archives/2018/page/2/index.html","36dbe236e3c30803f9e90da44a350bc0"],["/archives/2018/page/3/index.html","dc47c987cbdf76be0337eebf55c5c390"],["/archives/2018/page/4/index.html","811d856c9f5bffec05c87827e93be6c9"],["/archives/2019/01/index.html","64d92b4e9f48bf7660d530114a69e339"],["/archives/2019/02/index.html","a84be300aceb0d6811d4355a129f3d72"],["/archives/2019/03/index.html","ba7bfcc2cef41d54e36d3443f60c2ba6"],["/archives/2019/04/index.html","cab06bbfe6d49503569ab74e99dc841e"],["/archives/2019/index.html","f5cfcf131737b6c212cb20c5e226703b"],["/archives/index.html","572412828e740075e1b446292155684f"],["/archives/page/2/index.html","9b886811ee2a703b810a044da0518757"],["/archives/page/3/index.html","a9632082a8c92e2a610c79b0e8300d4d"],["/archives/page/4/index.html","1b25c7ce18b9abc3122112a302ebf4f8"],["/archives/page/5/index.html","1ebcd0ccdf77eb891a32926c9a1d1498"],["/archives/page/6/index.html","a7aadaaef2c070c417aba5a00117ae78"],["/archives/page/7/index.html","48062673c571644e89ff8765190d83ea"],["/archives/page/8/index.html","edd26378b59e1dd56b0b9736a9973761"],["/archives/page/9/index.html","859ad14099bcf6ca8521249003b9b542"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","8f6dc8474bab1efaf79494d6c065cbdc"],["/css/main.css","1a86a184c461d03103e9c178b29b1abd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","b74d2f4b9232d6254318480cabb10ef8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ed35049e75b03b94187a873fd5387c0f"],["/page/3/index.html","3c7196d957ac20004f8a8a67c73c481c"],["/page/4/index.html","f032293a19c2857e54340516ea4efaf4"],["/page/5/index.html","9e11c38728ddd3cd001d6353bb1cffc7"],["/page/6/index.html","1fe9611e41ef7dcdef4a1b038928f848"],["/page/7/index.html","068e2665f86476ff34334f105669c2c1"],["/page/8/index.html","aebdeb5f44a68b7d5121e284342f3d89"],["/page/9/index.html","2b47f4225ad17521f735a91a1d26b682"],["/tags/7-0版本/index.html","41de3b1f9f0214d8ef7cc4075a4193a3"],["/tags/JavaScript/index.html","c9d079a610899ecea41dc08752412e1a"],["/tags/MongoDB/index.html","ef3563ce14cb41e932b7d6d904cc15f2"],["/tags/Node/index.html","3130e60e0e564a050e2373bb4c27251d"],["/tags/Node/page/2/index.html","75f11d6043e2fae3fa7f55f9ea179d85"],["/tags/PWA/index.html","8c5b8c4b37985d7209fea753147be5c8"],["/tags/Rx/index.html","dd7404e362878b3bfc608d2987dc73c5"],["/tags/Tomcat/index.html","0c9c282ce4bff78ec367bfed1440c53c"],["/tags/autoprefixer/index.html","7b7c511472584b4dac32a34e28df0f94"],["/tags/babel/index.html","02199cc565f0435b2177b889cdcac2fd"],["/tags/chromeApp/index.html","90bf5ff18621e7fcd40e384c3ab36385"],["/tags/css/index.html","5c3799d432b514bdad0abb6d22a2d163"],["/tags/docker/index.html","95c8a93edb211001a700ac5a073be69d"],["/tags/express/index.html","3f968bf2b2a7898f9436243edbc01782"],["/tags/flex布局/index.html","488f0ebd1eb46f2c15e29e3730f2eef3"],["/tags/fs/index.html","e7ba601277d8c5aec58eac4045486783"],["/tags/github/index.html","820446b55c93819ab09483569db78c8e"],["/tags/hexo/index.html","1a4dbef402029d1437032af017f1b1fa"],["/tags/iconfont/index.html","a7c2ea9af10bbd17f6d7fe5b0e773c2e"],["/tags/iframe/index.html","417ae79e225e586fd6f4d8acd394ae31"],["/tags/img/index.html","523442613a1500c6f49f6d86cea49b0c"],["/tags/index.html","2ca8d89da52a7330eac9100d869cd20a"],["/tags/ios/index.html","c81b4d0ff61f8c9df0e86d886efd5e59"],["/tags/java/index.html","015dfbc033e7712306c776fafd53c8cb"],["/tags/jwt/index.html","dafde9347e3ff9d54b8506a272ca6a8d"],["/tags/logrotate/index.html","b2d4a6877450a39b445a3835e2f656b0"],["/tags/loop/index.html","bac4c303852a58c67b99bb9c4769c03f"],["/tags/mac/index.html","301df02a35f2e04faf2c9584af085988"],["/tags/nginx/index.html","d8b2a1500e395231bb1e34f9ff04e7dd"],["/tags/npm/index.html","1522e071f6d6ce3edc95ce9356aaa7e3"],["/tags/observable/index.html","b35d893d6e42f4c6b32e55a300af0dfb"],["/tags/path/index.html","cefb3e5a860f38a1b7b4ac2e9fca9103"],["/tags/polyfill/index.html","049c188b260118f868ae8cba2092ea9c"],["/tags/postcss/index.html","b6e0e6288f027b32230a7e19959e1653"],["/tags/postman/index.html","c5ba0c0c13be26a11090a8add3218f33"],["/tags/session-cookie/index.html","6f3b593b67fb6fb5d4d5bc73bedb4b15"],["/tags/session/index.html","3346addf95c47455daba4a6189aabc9b"],["/tags/shrinkwrap/index.html","fec603d9494f3b30ef318ca326c13c54"],["/tags/this/index.html","8b4d0c7a1b63aff086cee9e90eafaf81"],["/tags/webpack/index.html","561af1ea2eb59205778d825f6f6cfa1a"],["/tags/—-ES2019-—-ECMAScript/index.html","7fa97c8d57c98180da749be3942d2dc4"],["/tags/代理/index.html","ad1f39432f86aee28bcdd8836c5b2151"],["/tags/代理服务器/index.html","dcd54459c8d8ccaad372dd11f2e6e0e0"],["/tags/代码生成图片/index.html","8c6df28f543b8c187fd500801f13b582"],["/tags/入门/index.html","2b3075da5c579cbe4ce550ba7860b635"],["/tags/博客搭建/index.html","077654581a8d9b4e8808700f7d41725e"],["/tags/工具/index.html","1bf3849edffcc10ad33473176d43d485"],["/tags/异步/index.html","386f9375cf17d57288217da9de4b8444"],["/tags/循环/index.html","ffb6696c02b0e593eccba7db88ed51ee"],["/tags/按键符号/index.html","f50b9eb77b0560da0f513a3abd0ff6ce"],["/tags/文档阅读/index.html","f565c7dcd52804261be3965315d37d2a"],["/tags/服务/index.html","b3118b6f35a80bd9f4866e6a4f0387c6"],["/tags/服务部署/index.html","983b69ebbc75c880783229dd36f3e350"],["/tags/杂文/index.html","a4f64081e38ff48831236525a4a34386"],["/tags/经典问题/index.html","2d0a3259edbee3986dc4d6ca364f83cd"],["/tags/编程基础/index.html","3f062df5c1ee43e69da2f2c05e793c24"],["/tags/编译器/index.html","e4ae8ed1c496ffa88e8f8a5f0bf98a18"],["/tags/联表查询/index.html","ee3f379f8ab0803bb6e174eee6e16007"],["/tags/路由/index.html","6d2b24c29cf49c2f0692135b88c5ed04"],["/tags/运维/index.html","e12cbaafb3d887908755fe554d109c8f"]];
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







