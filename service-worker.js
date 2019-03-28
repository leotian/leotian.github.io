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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","fec0f9796a62887eda78f41a78e7c2fc"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","f0233c1d2a7767d4e406d39271eee373"],["/2017/04/22/使用阿里的字体图标——iconfont/index.html","0f8c096ade66927d2ccdd6d8b2936dd5"],["/2017/05/28/Tomcat中三个重要的端口/index.html","edae36ddbed0f72377b60f42b5882dfb"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","bba2e022637b65e4ea00bc58405b0463"],["/2017/07/20/NodeJs文字转图片/index.html","6015945d728fa7c5595b074d4315bed9"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","5d7277b68294998db56bded31f63414f"],["/2017/07/29/npm使用总结（1）：探究依赖树/index.html","4eeb1d68e380136fd9883af81ee7cfa7"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","4825d247d87fb1fa05da6d91b4593381"],["/2017/07/29/npm使用总结（2）：探究版本锁/index.html","58870ad0a38f3efe370509de0eb21da3"],["/2017/08/22/论如何阅读API文档/index.html","c0df30481d4364f81a14e500201bdd1a"],["/2017/10/19/使用express-session遇到的同步问题/index.html","794005740bd0aad5ab878b21afc32adc"],["/2017/10/20/flex布局总结/index.html","e33aed9dc89cd8273e68dff30277e7e4"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","8ac6eaeb97745d0e93371dc61c630611"],["/2017/11/01/nginx配置静态资源/index.html","bf81ff0eadaf48f45d1ab2bce70cdbde"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","617283939ee00c2cc1c8669dffd51735"],["/2017/11/09/告别chromeApp版Postman/index.html","dcd8f28d2fdb87b1418402f3de435780"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","bce8da6f88d418343168418b7d7386ff"],["/2017/12/12/比较JavaScript中的几种循环/index.html","b99f8ff77ec9dd6e934beaf5ab21d2e7"],["/2017/12/13/当循环遇上异步/index.html","76b0711c6af51f5ee851fa920b71158f"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","40bbb7ba1f89974a085625067bc29747"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","e6b489ddbc3defcb2cbd11b42aaea382"],["/2017/12/28/PWA入门实践/index.html","348e9b29af5623dac1e1c4f26985ade8"],["/2018/02/09/NodeJs的几种文件路径/index.html","c5b7286087b68c1c68ad794ae289f321"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","3ac9e94a66be7376d002dd60490460ce"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","acb35d46661590480eaec97763eec77f"],["/2018/03/05/程序中的时间问题总结/index.html","43d24d2411ee3a4573d9779caf8a0bd0"],["/2018/03/17/微信企业号加密方法分析/index.html","792e30e765144a3faec831bb93b80cf2"],["/2018/05/31/JavaScript中的this全解析/index.html","b798d5d240051cb825c558515c7026f3"],["/2018/10/08/最近的一些思考/index.html","5613cac20c31e2303010b3b25de29e11"],["/2018/10/11/引用传递和值传递总结/index.html","47465db62b6b110b3acb581c8867ea15"],["/2018/10/16/MongoDB联表查询/index.html","2655e5f027e7f0cbcf325b95459bcc76"],["/2018/11/01/Babel第一讲/index.html","4f7f1842b706ae3648054eec084afa5c"],["/2018/11/13/再谈Babel-polyfill/index.html","f56cd6e84005488db10eb8a274c248d3"],["/2018/11/14/升级Babel到7版本/index.html","71990950a378737526de05f416f61fa8"],["/2018/11/15/Babel极致优化/index.html","a6ef9f54a1a228477b728cb956855552"],["/2018/11/15/正确使用Babel（1）后端/index.html","f32bf4041b4b7a5fc60a1b0b1e994d1e"],["/2018/12/04/NodeJs包与模块机制/index.html","43a808734b8b5db9b05452433ab8c12d"],["/2018/12/11/最近遇到的两个bug总结/index.html","71f7661a98264cdc198162c1d3e72c5e"],["/2018/12/14/浅谈session管理/index.html","918ed650dd9da82ba648ae65a866c10f"],["/2019/01/04/使用logrotate进行日志管理/index.html","e756dad4a035877530fe5efc78c80615"],["/2019/02/15/如何学习和实践ES201X/index.html","ed6cedc9e5ab9fe1d2dd6def53b33c0e"],["/2019/03/25/Rx学习—理解observable（1）/index.html","8b69708434330de84e8d62287729e931"],["/2019/03/28/Rx学习—理解observable（2）/index.html","718715d8975d7a7e146db685410aab83"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","afcb3fd1ca5911145877d180dd3e7307"],["/archives/2017/03/index.html","b129c734647285a2bdaf8664487b3cb1"],["/archives/2017/04/index.html","1988ac464e489d8a56a2030ffea1a029"],["/archives/2017/05/index.html","3c8b2a8a5af76075bcccd8913a681fad"],["/archives/2017/07/index.html","d9d564226571e0c70ea14fd3003057af"],["/archives/2017/08/index.html","153b967140752d1be2902a9ebfd89a33"],["/archives/2017/10/index.html","48393b16d40bf00bfb0d110cdcfe6100"],["/archives/2017/11/index.html","18a9190fbfff606229e7e8e7732d630b"],["/archives/2017/12/index.html","ba7838907e04e14505ff5f4e6fc08fa4"],["/archives/2017/index.html","a89e48a8f5247403e3581e1eade76f5f"],["/archives/2017/page/2/index.html","98275bddc200168a8142571149af4bd9"],["/archives/2017/page/3/index.html","259bf60c273f7a18c8c4bed0789c5bda"],["/archives/2017/page/4/index.html","5f32c8ed8ae5514e57a189e31e7e00d4"],["/archives/2018/02/index.html","a89910232b9c483c20f116e9676a4957"],["/archives/2018/03/index.html","4ca9b3b5e9a7315bb2d2fc27b2bedcb6"],["/archives/2018/05/index.html","1fdc06e6c2f1ee30883c5c2562c3ba44"],["/archives/2018/10/index.html","3e99a2ae2c167abcb2b3bf43c0202902"],["/archives/2018/11/index.html","b945cd7b29d33454c67b9fd7975bfbcd"],["/archives/2018/12/index.html","7c328e816f135e1aaf820a611c063dc2"],["/archives/2018/index.html","36fe9eec4a20a23a74daf0be6806ccd8"],["/archives/2018/page/2/index.html","3223ebb3d11e68c9d69423cade8be614"],["/archives/2018/page/3/index.html","d81f66c3661765bca31190ead73842f9"],["/archives/2018/page/4/index.html","946d26b5bfb63f5b49a860041476a2bd"],["/archives/2019/01/index.html","5fd23f2dc2a3c9f13b079321cdd27b3b"],["/archives/2019/02/index.html","1a12829a7e3307c965a8994cf2fcb1c5"],["/archives/2019/03/index.html","ca0c9d8c48082169592f980df5659910"],["/archives/2019/index.html","a16fa7724f6768e767ef81a53db55024"],["/archives/index.html","5b6e225b33f94008921d6087cab59cbd"],["/archives/page/2/index.html","ddbbd975cccc310de3cdf546d5fc0d48"],["/archives/page/3/index.html","78a3d6639f93a49f8eb80f80a9ad0590"],["/archives/page/4/index.html","1f550b2a954774baba99b98db1956a44"],["/archives/page/5/index.html","b164484617bb13ffa199d5237a19bfbb"],["/archives/page/6/index.html","16193b6de45986278d0e63bc2f576ae9"],["/archives/page/7/index.html","d0624e4327da0e9759f4a277836c7117"],["/archives/page/8/index.html","e677af353bc790f6579960fb4abbb412"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","00bec4855ae0c4f5a3fab08654daa22e"],["/css/main.css","6afa31f33aebe33a49db13b85e56406d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","9f1e76f7e3ccb54c55ebf6717af0d4b9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d522fde22f1d78ca913f38998225ed68"],["/page/3/index.html","07d14d8c5c33802ac2c8695c1b13f134"],["/page/4/index.html","ce1bc676bf178fb203614f810d70a655"],["/page/5/index.html","3437598a02fc7789d8566f1a8663a1b3"],["/page/6/index.html","963f3bd1ac83e3d1a24f55e14e480f7a"],["/page/7/index.html","5c87ff629f3fcd96900044cb55247653"],["/page/8/index.html","6fc176470ae9ac978020bb0e26d87921"],["/tags/7-0版本/index.html","288cbe56570b99d5841d1e6691600b52"],["/tags/JavaScript/index.html","d847ac65bc844806e7b6f59a2789ec6d"],["/tags/MongoDB/index.html","ffd658e9ada1d5669a17d5f80fffb845"],["/tags/Node/index.html","177193ddd03065190d214d52d53d3a66"],["/tags/Node/page/2/index.html","2d385d46844348168bb7be43e8a888cd"],["/tags/PWA/index.html","e9ddf51e67b6401669cbbe38a40ec761"],["/tags/Rx/index.html","c425f64e17aded7535a0c73514061780"],["/tags/Tomcat/index.html","789e921dd13bcf02916f119762413652"],["/tags/autoprefixer/index.html","cb63b9341a2b28288c5c01ed435f40b9"],["/tags/babel/index.html","fd1e3118c07d25d91c12d7428cf325c4"],["/tags/chromeApp/index.html","adf8bb20fddaa615ff939d2df1c4b8c4"],["/tags/css/index.html","9363e24ffb304fa7483bdd99c5b03ec2"],["/tags/docker/index.html","4965632cfd02334f2915613ab1201938"],["/tags/express/index.html","328d42652e55200106f11e87445a8225"],["/tags/flex布局/index.html","30b8b86832a8de03a03b5d20c7e4c036"],["/tags/fs/index.html","7635ca7d78c62b52130803b05161d765"],["/tags/github/index.html","bc30b43367a06e10fcf8f6be6e6d40a7"],["/tags/hexo/index.html","3bffbf865c1a1db81d431c26d7746076"],["/tags/iconfont/index.html","57ee83eccdfa83c22e890b8027ad8494"],["/tags/iframe/index.html","06a81e699715c8f8a30f5d266a0453fe"],["/tags/img/index.html","0ebaa9b884c5c0aa5949cb47b6396f5e"],["/tags/index.html","2770aa6fddd6cd91c6d6b44983887abe"],["/tags/ios/index.html","07a9aaef77bd1561db4c76321d846087"],["/tags/java/index.html","3dd3a8a18aa4c4f30662d810a3b4148d"],["/tags/jwt/index.html","a8889ff8720f9063ae087bb3e60d352f"],["/tags/logrotate/index.html","c8f5998fcd687e98b28960ac120d4541"],["/tags/loop/index.html","d85c6e9882b54ccfa3b792abb42837cc"],["/tags/mac/index.html","40dfd705cb912081dfd767f321fbd73f"],["/tags/npm/index.html","78afd67bb9daa32087bcc92a67aad88d"],["/tags/observable/index.html","3455b938d9a4bacc4a5b84a7758d51b8"],["/tags/path/index.html","8249f62de9416686ab57a34c3ab21d92"],["/tags/polyfill/index.html","83b558e80d97dd31350c40df0e16ab86"],["/tags/postcss/index.html","387e7f8be4c179e83f676d364060752e"],["/tags/postman/index.html","c8366fc7b9255be28b54afad64b601e4"],["/tags/session-cookie/index.html","6e91b371329b7cb32e4ebfbbc7d6c6a8"],["/tags/session/index.html","232c08affa6454c650bcc4a3bf4bb0bb"],["/tags/shrinkwrap/index.html","7061f7c4de0a4ec0d5cd3b30ab313065"],["/tags/this/index.html","ca380d3e1beaa293a574bcdc3eb2803d"],["/tags/webpack/index.html","9a4b864f264b539ffb21c484074e6478"],["/tags/—-ES2019-—-ECMAScript/index.html","7a48a0869a68fa34630d3042acf5ba2e"],["/tags/代理服务器/index.html","3fef348323b74b3251d67ca74b0f3121"],["/tags/代码生成图片/index.html","6a26e77be34d0d6d773b4bd3a57442b1"],["/tags/入门/index.html","f37a92d63e7f6ecdb8378ed5fb857667"],["/tags/博客搭建/index.html","b845512f3e5282dddff739b2d242f1f4"],["/tags/工具/index.html","5fd475a82a60c089fd597d6d4ff5a491"],["/tags/异步/index.html","2451d9b33a9e9740e6096608dc71ae7f"],["/tags/循环/index.html","15e4bd87c225c021b47a348ccf1523d2"],["/tags/按键符号/index.html","f4b0ee44faba9931cab17929dd7c476f"],["/tags/文档阅读/index.html","24e936d99b4b53d6b30f258682deaaf8"],["/tags/服务/index.html","e6c00003673f0d5c14ec5e73e403055f"],["/tags/服务部署/index.html","2b305b62cc67cc35b6c1a03022d9929b"],["/tags/杂文/index.html","f7e6a5d6df1e547387befed1a025c215"],["/tags/经典问题/index.html","fb1f4d51e0c51e1464a13e6ddde3a2b0"],["/tags/编程基础/index.html","407d453fe0417b38c53697ce867d3c74"],["/tags/编译器/index.html","55c982e15c59e0ac6f427d6905e723e7"],["/tags/联表查询/index.html","609f617e7a04afe984566891bb876c66"],["/tags/运维/index.html","ec4bdc4b7b1c56f32d678d80a67df3f6"]];
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







