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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","d1671d7a0be759eea2e821761e4c6226"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","276ad76b919b4ab4969f4746b04d2e71"],["/2017/05/28/Tomcat中三个重要的端口/index.html","13d7b9e180d23ba0ed86ee651bd491c2"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","1bda1c46960ec03ea0fb1b06d2f3dc06"],["/2017/07/20/NodeJs文字转图片/index.html","750d4bd42988b9d576ca2e51d54294b3"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","6281344aa32e95e17db9e49bac2aa553"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","5404fdb8266fb904a278565ee7e9639e"],["/2017/08/22/论如何阅读API文档/index.html","0156d1034118cfb12a120b7863568918"],["/2017/10/19/使用express-session遇到的同步问题/index.html","771b6109a5c86e2ec8e5820910ce635e"],["/2017/10/20/flex布局总结/index.html","96008edf512a7475d5f9839bff7b9a0b"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","7c45ccc0f6ee7ed4ba1e6ff3bf046963"],["/2017/11/01/Nginx常用配置/index.html","5dc143ecf9317b104da60ac5c14b253f"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","9637663cacb0fa2ac9ed6727387118a9"],["/2017/11/09/告别chromeApp版Postman/index.html","92e59f289f28a3fce22a01e7e76441ad"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","52aaa8a21319423374dc46f1a3969627"],["/2017/12/12/比较JavaScript中的几种循环/index.html","ba1f996be8df80858fd2c6fa945fc6d0"],["/2017/12/13/当循环遇上异步/index.html","2795d1467be75807b6f7c4c5337971b0"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","99edd529442906f0bb56d2b3ab15b2d9"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","2cf6483e7b493de171c3e61c3ec0e47d"],["/2017/12/28/PWA入门实践/index.html","9cc15b29b4dad916c894e8c732e3e43e"],["/2018/02/09/NodeJs的几种文件路径/index.html","186875e51a48a9a64a4875e694404ba6"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","70593f47106bf88d30c63719a3a4b717"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","00026690c34205c59b0f3bcc2781e96f"],["/2018/03/05/程序中的时间问题总结/index.html","7a7e4b132c820acce20c4333305940d5"],["/2018/03/17/微信企业号加密方法分析/index.html","3ef2df1753229935dd5cb70c1da3a753"],["/2018/05/31/JavaScript中的this全解析/index.html","8f24f84e786592e750b63af969062f9d"],["/2018/10/08/最近的一些思考/index.html","e9becab6c8468b5378dcc483e9340a1e"],["/2018/10/11/引用传递和值传递总结/index.html","0b4bb240156ecc4f6414db578f0d81a5"],["/2018/10/16/MongoDB联表查询/index.html","fd4375a1399fb947365b85703beac4b5"],["/2018/11/01/Babel第一讲/index.html","236361b39b1ff10060ec8ac859cdde99"],["/2018/11/13/再谈Babel-polyfill/index.html","f55c1baacffe65eb073c71269f800a9a"],["/2018/11/14/升级Babel到7版本/index.html","f36f3cd38644004722976c71bfb2e9a6"],["/2018/11/15/正确使用Babel（1）后端/index.html","fb012304fa1117d006ca23b4dc52b7e7"],["/2018/12/04/NodeJs包与模块机制/index.html","d28b2de425ac8aa05cb3321b727a517b"],["/2018/12/11/最近遇到的两个bug总结/index.html","28f858417b4b1ff38382fd68cdb20fa5"],["/2018/12/14/浅谈session管理/index.html","4f0eaaf9a0ebbccafd402859d9dc8a48"],["/2019/01/04/使用logrotate进行日志管理/index.html","41ebb9a05f5a42e729d0294f3de25a1d"],["/2019/02/15/如何学习和实践ES201X/index.html","9fc6c3ae6bd176bb095cd016a5c2d10d"],["/2019/03/25/Rx学习—理解Observable（1）/index.html","f07de24bc8ae9413c6c257899fe59d86"],["/2019/03/28/Rx学习—理解Observable（2）/index.html","1624b7889dc76f39bd5ec6206ee13139"],["/2019/04/01/记一次网站代理配置/index.html","22edac01bded18b18be3e440c89e12d9"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","74bf58665fc27d67990015b10fbefddc"],["/archives/2017/03/index.html","8247b0833d1e7ea727d4e1ca2507976b"],["/archives/2017/04/index.html","b5cab347dca50f9ce72683ea94d63df4"],["/archives/2017/05/index.html","6abf3087b4dd3416fe94907bff202cd6"],["/archives/2017/07/index.html","7287099fc2213616b5aec9805ef057c9"],["/archives/2017/08/index.html","34dd400bca83b771d51b83b9e88bc338"],["/archives/2017/10/index.html","d187167f9789efdb2fc13ee6117abcbf"],["/archives/2017/11/index.html","99fddcd02c3a671d1b55e9407bffaf26"],["/archives/2017/12/index.html","040e2145b66f3133eab0fbcf56dc3c0a"],["/archives/2017/index.html","3bca0c2ce0084814a3beb93eaec8cbff"],["/archives/2017/page/2/index.html","308d3668c6aa92a19e74d231b50c60e9"],["/archives/2017/page/3/index.html","5cf82eb59e9a91311c339fd3e3dd26d2"],["/archives/2017/page/4/index.html","8077b852e464afb15bd462a79402f39b"],["/archives/2018/02/index.html","2e1a25c58581ca6c074469a324bbfa3f"],["/archives/2018/03/index.html","3f84456a4f4299dfc23eb557b2fc7c40"],["/archives/2018/05/index.html","ab0db0715c886b8db6d658e3a0cf3eeb"],["/archives/2018/10/index.html","472b3f94a227d8940602a3538ea0fe02"],["/archives/2018/11/index.html","9d097d0b17b7e6eb91f17e5d94ce10e2"],["/archives/2018/12/index.html","e1194e7f5ebc11ba44b45e027c9dc094"],["/archives/2018/index.html","95283983dc0a3e6d8e7b31fa3d78cd10"],["/archives/2018/page/2/index.html","3c5168f0fa168db47d8affdf932e7578"],["/archives/2018/page/3/index.html","e9b1117ed2f22aaaf7f4a62076302d05"],["/archives/2018/page/4/index.html","6f89a7b2d7046168c218109ccbeaf56e"],["/archives/2019/01/index.html","c887b06d336dd88ead09062faba0f25d"],["/archives/2019/02/index.html","90d4f204dfd78a02d1a8d01c703cf5ce"],["/archives/2019/03/index.html","755b73ed1de949bcdc708f7430577872"],["/archives/2019/04/index.html","4cb4306d560a707742521cf9a44a7219"],["/archives/2019/index.html","454aba10ff602e9235314b856ebf87c6"],["/archives/index.html","8ca9e493f97724a21c143fa1227be88f"],["/archives/page/2/index.html","8ac860c8f2cedb5cbe33223684c359cb"],["/archives/page/3/index.html","c3bee29bcf154772d68ca7c19203622f"],["/archives/page/4/index.html","6a96102f4dc05723a18e57f2da53791c"],["/archives/page/5/index.html","fd2c57ed8c9cbe87106cd2a9b5a0d36d"],["/archives/page/6/index.html","18a773eb83fb648499fe6a31d7349d8b"],["/archives/page/7/index.html","d54e89cec5e75d2dd88b7f6a01937725"],["/archives/page/8/index.html","1689f24ba28c395b28c180f8a9463052"],["/archives/page/9/index.html","ea62a45ec37d2aa3ac427f8d5d7eedf1"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","10ebe40b95c0bbd0f2415388d7b7791c"],["/css/main.css","e65a1c4888e15923023eea9d0f5799e4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","cbe96e22f13f4060282b638a8489c925"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b89073899e242f294eb62fc82ad8b964"],["/page/3/index.html","78d5db4e8cbc8b656d462a67fb8fe04a"],["/page/4/index.html","0045c38f3157709adc85d21d81ffa318"],["/page/5/index.html","9c41a698426e717494d6eae4eaabdd55"],["/page/6/index.html","8201a084bdb9ab0e2ca179166b31a51a"],["/page/7/index.html","44401769301d50847e1a8329901078aa"],["/page/8/index.html","f41cb3fb00a71fc31882725054668aaa"],["/page/9/index.html","0d2d6217f31abe6e5b6efca9bdff6dce"],["/tags/7-0版本/index.html","6b5577ebc21dece1124dee4eee86cae7"],["/tags/JavaScript/index.html","2497311fa8a3e5c072bf86cf501e13f4"],["/tags/MongoDB/index.html","a1cc6d6045a9bddd51a3edfbd5459b86"],["/tags/Node/index.html","16be0d1c2c6f81f92ffd1a044893c612"],["/tags/Node/page/2/index.html","e66154599c84f7cbab5728c61b85d03f"],["/tags/PWA/index.html","126a21938da287ef109066d3539dde09"],["/tags/Rx/index.html","cd29c3ba32648a0a3ba8e8b4cf590e5b"],["/tags/Tomcat/index.html","139a66c9634f54c536d16cc1152d66e3"],["/tags/autoprefixer/index.html","1ed716c86740a2a033e9df2be09490a7"],["/tags/babel/index.html","bdcbe2327ae774a0483821794afde501"],["/tags/chromeApp/index.html","f03676d3a85c38afbe47148064115303"],["/tags/css/index.html","6d367985250184a6a374db5863b3e6eb"],["/tags/docker/index.html","a6c00cc461ed61a10d361710bb7ba34b"],["/tags/express/index.html","35c6786902cb01ae1969f1f83ad27bda"],["/tags/flex布局/index.html","63ebe414fbe28f34b6c687a11dfd42ab"],["/tags/fs/index.html","6a10558e7e1a64f0f9412fc9c51feed1"],["/tags/github/index.html","29ea090faf938fe3799ea55b01de4a79"],["/tags/hexo/index.html","7384b479ecbf36b3426e79e44c1f7c08"],["/tags/iconfont/index.html","4770410eef0fcac3ed9fc6628efcd3f5"],["/tags/iframe/index.html","7857fd35b6d7c9992685269a9176885b"],["/tags/img/index.html","a863fc641228c51f804abeff373207a4"],["/tags/index.html","84d6f360cfd9d06c310f4a9821f5effc"],["/tags/ios/index.html","25b9326cc85a16020f76fad4a4baeed7"],["/tags/java/index.html","9c6164626baa307b7e6e7ff02718da1a"],["/tags/jwt/index.html","c64f82a98284b9064d8c9af2bd64005f"],["/tags/logrotate/index.html","10634f0698f0fffca6a707709b919d77"],["/tags/loop/index.html","96377c30a38cfe9813772c2745177f9f"],["/tags/mac/index.html","eb0314855a56fb18215b0bb9dcd698a0"],["/tags/nginx/index.html","d5026b69345be6f2a53b42ae3f5b1906"],["/tags/npm/index.html","e0d8b1a4a222947ae2d9d50d06efa177"],["/tags/observable/index.html","5db675d8c021911ca8549ebf97fe9c46"],["/tags/path/index.html","ea03429b15daa79305aec80d1da64c30"],["/tags/polyfill/index.html","146a59ef990f2ec100ad27a2bcdfae39"],["/tags/postcss/index.html","c8d3638d35951df2ac289eedb005c747"],["/tags/postman/index.html","962f3092d1188274e1f4023d72a83212"],["/tags/session-cookie/index.html","bdd20186aeb9cdc8e96223311f0b8d8c"],["/tags/session/index.html","6e7fff75f1baddb0bb76fba551bdffe2"],["/tags/shrinkwrap/index.html","cce680054bab755f78cc52d2eb312e9e"],["/tags/this/index.html","a386469fa0d6d634dc128bf5d7e5d2b5"],["/tags/webpack/index.html","3af551fa22a441a5ef2aebb0637f634c"],["/tags/—-ES2019-—-ECMAScript/index.html","b91f3857ab4e46be189a347908c65d68"],["/tags/代理/index.html","3904ea5c8ee386a6560b75b391ee822d"],["/tags/代理服务器/index.html","de0e1918040c2fc2962ea957f7373e74"],["/tags/代码生成图片/index.html","8848921ca7a9774eeb29285860346368"],["/tags/入门/index.html","12c243279d1473253cea9c9601682ecf"],["/tags/博客搭建/index.html","5205e609d34b8230d856d486cd26abb1"],["/tags/工具/index.html","5bc113f2f71a001adcba430ecf997245"],["/tags/异步/index.html","0d50aef3b307fd1cd74aef9defb952a7"],["/tags/循环/index.html","54e423fb0fe1c8e0a9cf0a066a7aeb39"],["/tags/按键符号/index.html","ec7fe89de4acde63315757d78689f4a6"],["/tags/文档阅读/index.html","71354c3659061c65873c9cefe3b06e61"],["/tags/服务/index.html","2a334633d3b36ff84770a0383cca5eb3"],["/tags/服务部署/index.html","5a5c96904a5c13fa22cf1b0e604cfb24"],["/tags/杂文/index.html","ec3851a407bd6664f633feaca0bf463b"],["/tags/经典问题/index.html","2b521aab36c4df05aaf51298394a678e"],["/tags/编程基础/index.html","7dc34815585f0fae3ecf1ff13c75dceb"],["/tags/编译器/index.html","a25f80ef06c074451cd22bd7eed5f479"],["/tags/联表查询/index.html","f13b0a11bd9538175c83c08ab673d818"],["/tags/路由/index.html","003bf472a842f8ff5ea62b0f63c6b5bb"],["/tags/运维/index.html","83344eac65fd3bc2c55fe08bfbdbe24b"]];
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







