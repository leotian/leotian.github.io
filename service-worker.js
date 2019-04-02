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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","397ae8efa970d626bc283c5be652826f"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","ccd8ccfa38509dfdc900520b992f4e0b"],["/2017/05/28/Tomcat中三个重要的端口/index.html","c9060c656da5e75e333ed106ecc82318"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","5cceea123c92670f050be2b279934068"],["/2017/07/20/NodeJs文字转图片/index.html","7bc72f9cde6d7da6f6dcb63df9b64e26"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","194e2bcf942bcabfde635d39c83662fc"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","204d6d6234b957132aac3960ea464556"],["/2017/08/22/论如何阅读API文档/index.html","69ada2da641f639c00ef76c89b2e8516"],["/2017/10/19/使用express-session遇到的同步问题/index.html","88a638d76401aef51114152881ed8809"],["/2017/10/20/flex布局总结/index.html","79431abfaf21ce3ee72e02c2cc526094"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","5c242b722d04d113ce82967b673ec238"],["/2017/11/01/nginx配置静态资源/index.html","4a26e8c1f04ba97e60a83f4290eba0e1"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","691a73cd839a1c97cc90669ba05b9fb0"],["/2017/11/09/告别chromeApp版Postman/index.html","a5aed9d2ef522f2cbce1f790067d7543"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","cfa3b88cbecdea13eee7af078fb7ca22"],["/2017/12/12/比较JavaScript中的几种循环/index.html","30f2ea2be5d93dd2bf55fe355388f171"],["/2017/12/13/当循环遇上异步/index.html","f4c4e79f1fe59a7243fb84ac506b0740"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","6566183dca1b4052ed6cdf23f644ca73"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","c271137bc81539c58071b40fcb229fd4"],["/2017/12/28/PWA入门实践/index.html","9c891ee6d2e38b876c826e6c482b4bec"],["/2018/02/09/NodeJs的几种文件路径/index.html","068b2d5e1587b8adb081751d85040e65"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","a05a60509b00ecb8ed498803a55e6c14"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","351dabab12f52b56f58c853967fc799d"],["/2018/03/05/程序中的时间问题总结/index.html","025ada77db033b78eb824ae4bd1d4941"],["/2018/03/17/微信企业号加密方法分析/index.html","8023cb04157b1a42cf54d6acdf742640"],["/2018/05/31/JavaScript中的this全解析/index.html","b515f56d7b0bfcfac520d64fc09e92be"],["/2018/10/08/最近的一些思考/index.html","401bec666d58cdca3115714279248656"],["/2018/10/11/引用传递和值传递总结/index.html","cdf94fbe39af61c16525a9652c4dc25a"],["/2018/10/16/MongoDB联表查询/index.html","d58162699fc2c8848183c6afc91fb622"],["/2018/11/01/Babel第一讲/index.html","d4c2375d1876a5ef33b8aff7ea38c8d4"],["/2018/11/13/再谈Babel-polyfill/index.html","2ae198387ad2083556efb004eed719cf"],["/2018/11/14/升级Babel到7版本/index.html","353284b66a720bc8b16d4dc3564006e9"],["/2018/11/15/正确使用Babel（1）后端/index.html","86106a0f0329e7ac84b0f2f86f432034"],["/2018/12/04/NodeJs包与模块机制/index.html","ea960fb9180ae1cd7868ae24e5130d08"],["/2018/12/11/最近遇到的两个bug总结/index.html","d424c5ee34d136e625ba5fc0c89dc271"],["/2018/12/14/浅谈session管理/index.html","9f1651c392addd361aec908501f4dec7"],["/2019/01/04/使用logrotate进行日志管理/index.html","df44fa568ce249843baf609f94bdc83b"],["/2019/02/15/如何学习和实践ES201X/index.html","882c2f377dfd289e6434ae3bbfa42f3e"],["/2019/03/25/Rx学习—理解Observable（1）/index.html","60c2cb570d94384301f58ef61d0b6116"],["/2019/03/28/Rx学习—理解Observable（2）/index.html","3ee1aa5fc705ab9b74e3fb3e96b2b028"],["/2019/04/01/记一次网站代理配置/index.html","435a0f11911f065dd09138035a6912ad"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","8de2408f4539e954ec2fd92115de5e73"],["/archives/2017/03/index.html","c4833a76a439f57788deb9c2e35181ba"],["/archives/2017/04/index.html","02e300485411d52c2a0dd6697d040bbe"],["/archives/2017/05/index.html","ef3e947b4930787ff9a99c2ae5ba5354"],["/archives/2017/07/index.html","a4b28f6a03127e849d644198a35edaae"],["/archives/2017/08/index.html","ddf2d046e22149ce1bee61cad9d7ef07"],["/archives/2017/10/index.html","8e404e03afb2f69226d269387f7e806a"],["/archives/2017/11/index.html","8ed2d0fb9d050218cb38e1646b4b5842"],["/archives/2017/12/index.html","db9becd68fa26ec6482d7e6d47c62473"],["/archives/2017/index.html","58f88b27db7851100b8373c1f86d8efc"],["/archives/2017/page/2/index.html","228e130e68011d4723b365477a797a01"],["/archives/2017/page/3/index.html","8e330c03594866e7b81ddd4ef0885704"],["/archives/2017/page/4/index.html","39f67a2c018530e54a7c6f3c5c6dc2b8"],["/archives/2018/02/index.html","a9952e8472a7b670b746bde7e2ef9534"],["/archives/2018/03/index.html","407531b5979217a5c7c358931400a1a8"],["/archives/2018/05/index.html","27188cd1a5fd09b44cb571a9a96ab5de"],["/archives/2018/10/index.html","5c39a54eecbc4ec0c2a9eb9c6a8d637f"],["/archives/2018/11/index.html","bddaddfd8ad1dd65f37fa9e271edf931"],["/archives/2018/12/index.html","deeb3445be34a6bfa160a58344a32920"],["/archives/2018/index.html","21909c217befc96211eef26967d079c7"],["/archives/2018/page/2/index.html","6d5095065e9756093025dc9a155d5823"],["/archives/2018/page/3/index.html","4ba4e1e8832f52b89d34663790e2fd3c"],["/archives/2018/page/4/index.html","ef62919c2e076b1d4dc65328d0668f86"],["/archives/2019/01/index.html","6bcf61d74d8825265fc983a7d3ed597e"],["/archives/2019/02/index.html","45c8cd89d83c52f4fc149e0adfdc8b40"],["/archives/2019/03/index.html","f7d0695541156f0b846451073ef06080"],["/archives/2019/04/index.html","5848ea1eeef5325de746133974962c19"],["/archives/2019/index.html","ca81e04eda92d08184ee08f14dc82303"],["/archives/index.html","c575d31ed3114c02e6340ed302f4b4b6"],["/archives/page/2/index.html","b039cd84af3763a287d209b128f743b5"],["/archives/page/3/index.html","b8325c2deebd67b812573fb0e351a8af"],["/archives/page/4/index.html","64a74d34e9bbdcb64ba7742e55fddddb"],["/archives/page/5/index.html","bacd582789e3d1a7996fc93a47a704af"],["/archives/page/6/index.html","b86f019429487c303f9e17422e58833c"],["/archives/page/7/index.html","11a4464c151521458e059a5da389d7d6"],["/archives/page/8/index.html","97a743ffe904c40ef3b0226c87c382d8"],["/archives/page/9/index.html","cb9249b23e1f64a5fb5d5bd7fbf96d0b"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","45cb76b829d66d71dfc61decca1db831"],["/css/main.css","84b169ab22df5b5966565436ba7b65e2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","d3d25f3497bdcd09d721af35ab3ed309"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1fa76ada238a0621fb142f938125e9d5"],["/page/3/index.html","169ca662c5f92e6a551db5c6e3214d01"],["/page/4/index.html","09efaa0ea6ed5e2f35d2287445cd26d9"],["/page/5/index.html","0145234b093c02828baaaf2c0a7b1bac"],["/page/6/index.html","0a81abf2657e25aa07e758c9f7420d1b"],["/page/7/index.html","128aa37f012ff2b4060f3fddcf718047"],["/page/8/index.html","0ca928ab8497a2ff46749ab8f1d0aa19"],["/page/9/index.html","778f0a6a49341faad218a804db570e33"],["/tags/7-0版本/index.html","ac45c263f760b38df5b4d80d432b42b7"],["/tags/JavaScript/index.html","9aa7f731ea4c6070751bb4eb15bb0468"],["/tags/MongoDB/index.html","823f04ee1ffc7335dd7bfb7484c07789"],["/tags/Node/index.html","3c370875db36a70af147059c43787a4a"],["/tags/Node/page/2/index.html","d3a13acac72720b94830c37b1d614956"],["/tags/PWA/index.html","fcae10e3b40c13533d1484b26a739752"],["/tags/Rx/index.html","8ea1e4920254462a8efad027ccabd699"],["/tags/Tomcat/index.html","2ec8891d0c91c90edf8591d09c72be40"],["/tags/autoprefixer/index.html","84dda878d1ee9c8f537ab1a7f68d626f"],["/tags/babel/index.html","fe507369fb43349aa2153c84f5e2cccd"],["/tags/chromeApp/index.html","8856d5b44a848a7334a665990f49ed69"],["/tags/css/index.html","43011e452f0cf52d001015a803d4fb4f"],["/tags/docker/index.html","b218537205d7a6d2803a13de1a6044e7"],["/tags/express/index.html","05bfd162c91da6c288a4945fc0a94d83"],["/tags/flex布局/index.html","69250b8171203f577f619ab1e5ab96c0"],["/tags/fs/index.html","94fc55360029c1d5dd545120543a29de"],["/tags/github/index.html","10c420fe928cdb8e6275c8952b5ba770"],["/tags/hexo/index.html","ef7a7858ca22313fff74933e2e6eeb2a"],["/tags/iconfont/index.html","c92275c4e57bf19962a274d448396fdf"],["/tags/iframe/index.html","cea58bdf3b97224dc565d0d5dea69630"],["/tags/img/index.html","6dfc7502d140dcca9cecd48a129af104"],["/tags/index.html","ddf2969c0acdbeb1067ad7b3634a2c84"],["/tags/ios/index.html","4659240939b8665e46e0f4bac623342c"],["/tags/java/index.html","0d928761af6d2bad6ee1d18b52797b2d"],["/tags/jwt/index.html","34ba145f003181f6048a43eb8611f915"],["/tags/logrotate/index.html","2c4ff7f430871a0ce6b5218f44042e3f"],["/tags/loop/index.html","f3ea7a9e5a90624c25e9bc893b194cf7"],["/tags/mac/index.html","8dd1c6e141529c7bcfadfa4e739516ca"],["/tags/nginx/index.html","109006218264f0033470efe0edb91af2"],["/tags/npm/index.html","00609c3d801cb2044062dc26e8c9c84e"],["/tags/observable/index.html","10e008463e4dbfcf438d1f29339ca258"],["/tags/path/index.html","63a21f71984c11b3e2171d0a46c8f43e"],["/tags/polyfill/index.html","3a20e19b7e19a7c6102d333fcc3e7aff"],["/tags/postcss/index.html","f99fb1efc76e6ff4c29d6127961ecaa4"],["/tags/postman/index.html","f108c5c91d84af09c1cc506b5fe6577a"],["/tags/session-cookie/index.html","3e24b7b21f78c7553d042919c032ca9b"],["/tags/session/index.html","9e179eecf8cb019c69f14576ecb08d35"],["/tags/shrinkwrap/index.html","74943b5bab5378c0cada8e3f6a6eb98d"],["/tags/this/index.html","214867f53cafce2477f0fc421835f98b"],["/tags/webpack/index.html","3629d805ea71f109f9a238df78b99d04"],["/tags/—-ES2019-—-ECMAScript/index.html","c5bb3d15f5597d2a854f3522123e1bc0"],["/tags/代理/index.html","cd8350d827390e7cb5ff5ace9ab55848"],["/tags/代理服务器/index.html","293e92a14097da00ffb1e51723197680"],["/tags/代码生成图片/index.html","800767b7e68404765b5d73d25e9947bc"],["/tags/入门/index.html","1f026eb4d39c76ca746fff3da944f4b1"],["/tags/博客搭建/index.html","e13c5c7546e4b3696ab44fba184829fc"],["/tags/工具/index.html","aca94374f9bcf40cb77f1ee80701ebcc"],["/tags/异步/index.html","3e19ea4dff51aac1099ced61ff17faac"],["/tags/循环/index.html","6c886daee77f6b03da5108d1bfe741bb"],["/tags/按键符号/index.html","4c269eb95e97bd7d5c773ffbc2df4812"],["/tags/文档阅读/index.html","6558517a0b2453f0731333816f5da98f"],["/tags/服务/index.html","900eda1bb31bb770de8bfb6e6cba6135"],["/tags/服务部署/index.html","760fc6ea142f1077671e0be405a5547d"],["/tags/杂文/index.html","5e8d326684a70f1e04d4cf0307ea6f60"],["/tags/经典问题/index.html","06c0da96839e44f41c8da648a0e113b8"],["/tags/编程基础/index.html","12e4b3eca74e9aa7543f8d596cfc21a4"],["/tags/编译器/index.html","cc59021dc25931eb6d8ceb4ef1d7a67c"],["/tags/联表查询/index.html","a8356d57f16aefc2cc1fe0da1d44b444"],["/tags/路由/index.html","db4a759dba2c3d58760fd0c209f4c82e"],["/tags/运维/index.html","bcddfdba4f5a6add84208abb5c8dddc6"]];
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







