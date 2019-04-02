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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","5fb5d2cd809a28808cdabb47f6557ea8"],["/2017/04/22/使用阿里的字体图标—iconfont/index.html","6c02cd2484b77823d32851f4bc9365ad"],["/2017/05/28/Tomcat中三个重要的端口/index.html","a75bf80f9c032df2ea4631d4cb50335d"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","9923ba3ba3b4e8379f3ba839f856ef4f"],["/2017/07/20/NodeJs文字转图片/index.html","7b99af1ebbe64cac8c7719893233df6b"],["/2017/07/29/npm使用总结（1）探究依赖树/index.html","7be7c25776f2650bcd217b00f24b6057"],["/2017/07/29/npm使用总结（2）探究版本锁/index.html","e4230de401ed4e9859ffcc3519ae7cc4"],["/2017/08/22/论如何阅读API文档/index.html","b43c3d656f0e7e903f0069a87d1405df"],["/2017/10/19/使用express-session遇到的同步问题/index.html","53d1c35404878ef928ef7be3d7108038"],["/2017/10/20/flex布局总结/index.html","ebfbfa8781c399a419e1a08213e5d95c"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","b39547a1c0d1024ba06a6639aa1f6a6f"],["/2017/11/01/nginx配置静态资源/index.html","0c3efb94bf0939a053119511cefd0dd4"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","caac49ca5d8ce112f83041100448eca5"],["/2017/11/09/告别chromeApp版Postman/index.html","6e313f52c6584cdaa596851b66ccfd1d"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","d351da00d2e2bf00b919dd1c1f89ef5a"],["/2017/12/12/比较JavaScript中的几种循环/index.html","4d4ca2b488538b7fb5cfb2ce78a8ecb7"],["/2017/12/13/当循环遇上异步/index.html","2f864d17570d5fc51ee3e78026456ea5"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","f997174d6b40d82130b15e575c2c0885"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","d6a7fd942d4a6d1c17393b1bfc70c485"],["/2017/12/28/PWA入门实践/index.html","64893c64ae287b3552dad833abc7e882"],["/2018/02/09/NodeJs的几种文件路径/index.html","147e0cb1a6b152ef2959b33b3c7ebb97"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","f5929b3aabda1f15efd04a4086a26735"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","9710b6e0c19699b1766b72454681276a"],["/2018/03/05/程序中的时间问题总结/index.html","0dc9f17471d8e2dce462f9b139b96ab7"],["/2018/03/17/微信企业号加密方法分析/index.html","39b3449c1814d85ffcffed3da4d3b330"],["/2018/05/31/JavaScript中的this全解析/index.html","1a66926995fe6cadb4b1b458ade6d104"],["/2018/10/08/最近的一些思考/index.html","c4f6e57fc40f41dd1e7d7371ccf33d0b"],["/2018/10/11/引用传递和值传递总结/index.html","4281b52dbe051930b018dc6612a992bd"],["/2018/10/16/MongoDB联表查询/index.html","bbf4719767a8c1426723a2eb220fa401"],["/2018/11/01/Babel第一讲/index.html","7b903512d544988f7220a8f1bc6d3119"],["/2018/11/13/再谈Babel-polyfill/index.html","46d9c230e8ee70e7f6d449fcf2a15f74"],["/2018/11/14/升级Babel到7版本/index.html","6a6caf0b59d5b7f626bcc71c4d583b0f"],["/2018/11/15/正确使用Babel（1）后端/index.html","af66a948de180b5c6a48f5f056071917"],["/2018/12/04/NodeJs包与模块机制/index.html","89b3ee73163be858dfface0508524207"],["/2018/12/11/最近遇到的两个bug总结/index.html","fcf3fc9e1e17606e0d75e53604899472"],["/2018/12/14/浅谈session管理/index.html","06eebc3483863addd9edad773d93a25d"],["/2019/01/04/使用logrotate进行日志管理/index.html","92915653628dfa121d86701f230f6f43"],["/2019/02/15/如何学习和实践ES201X/index.html","50c4ac48690d8f92beb22733c3a68f50"],["/2019/03/25/Rx学习—理解Observable（1）/index.html","d81edf6649cbdd17e45d8c9203464304"],["/2019/03/28/Rx学习—理解Observable（2）/index.html","32a0b3a817df14d1968dd12d5dba0cb8"],["/2019/04/01/记一次网站代理配置/index.html","b59856cfa144d201e996043462acc6c8"],["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","7e03a8a61888836eaf8c941b081d9764"],["/archives/2017/03/index.html","2b5d266a279363d676fa681b5be903fe"],["/archives/2017/04/index.html","e5912e759a5a636785e8102fe5f41fc0"],["/archives/2017/05/index.html","f3ffa052ed810be4087dfe46c563ac55"],["/archives/2017/07/index.html","17ccc38bcce33d458872f29e8241b0c8"],["/archives/2017/08/index.html","3351eb97209c5eee5255fbbd6f355365"],["/archives/2017/10/index.html","414ea425878f3b568ddae6815b1f9d30"],["/archives/2017/11/index.html","8b6ce459d3cc526b69adb4e06dbb2553"],["/archives/2017/12/index.html","3810b74b219d018c3fa36441783c8904"],["/archives/2017/index.html","318cba8e9e508ce5fac59f0d3816514d"],["/archives/2017/page/2/index.html","41c87fd8674a7dac44c3e5c80280b4e4"],["/archives/2017/page/3/index.html","8e68ea922c0804c84e3dca2db234271f"],["/archives/2017/page/4/index.html","929ffd815c4a86720e9853ec7293a095"],["/archives/2018/02/index.html","621395dee234466f8fe6792b6a2edbf5"],["/archives/2018/03/index.html","45018013184d99d38302fb4c63d863cc"],["/archives/2018/05/index.html","d13565053a3d03a14f6a8661dba89bee"],["/archives/2018/10/index.html","b768af12c4c28a03c88c4a86bbba77df"],["/archives/2018/11/index.html","44bbab33971ed8fb1e10dbdf68b2fc8d"],["/archives/2018/12/index.html","b96b4aa482aea40d669b16836125e8d7"],["/archives/2018/index.html","abd6c4a7591dbab771fd01fb45563862"],["/archives/2018/page/2/index.html","927a30e5dcf14fb4c9fa6ada6612746d"],["/archives/2018/page/3/index.html","cc75f2b04d2f0511e0f708b4af99dc12"],["/archives/2018/page/4/index.html","2495099d969423cc1bc231dd1b96c544"],["/archives/2019/01/index.html","80459bf37348548d96071b2982bb7072"],["/archives/2019/02/index.html","46d85e7a258af0bae30bdc1ca47ce9db"],["/archives/2019/03/index.html","69d5f37a10582289bf8c0cbf4a51b7a9"],["/archives/2019/04/index.html","5561c4bae6ac0549d23cd3b0052d4360"],["/archives/2019/index.html","447f68b42943cdcd3d325dc87304c634"],["/archives/index.html","58e7d709cdfc075c26bf318c02563ce4"],["/archives/page/2/index.html","e7e5f3e7f5c693549ae37462428f7215"],["/archives/page/3/index.html","5114ef05e3bd96173ddcb65a5e92392a"],["/archives/page/4/index.html","fea9d7c5b0c9a8d165ba61271baccced"],["/archives/page/5/index.html","9bdfd28d96ade521e9325840d2f2dc3a"],["/archives/page/6/index.html","aa08486da16dc167d1f6b040595dd201"],["/archives/page/7/index.html","0036e155e002f2751f2018e8a9ba21d9"],["/archives/page/8/index.html","4e412cf772d54846f85286dd7327ac88"],["/archives/page/9/index.html","9d67cb8bdb4637b683610905f086a4b0"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/index.html","d6ba8411034cbbedbeb796143ff25c8a"],["/css/main.css","3313f425e6a7a9a0ef97a5882a5855b4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","ed4df68fcf93ec8461fe9fe1bb3c38a8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8b822075d3080f78c18a03ceaf93972d"],["/page/3/index.html","2405d8211179829407e42777a9839086"],["/page/4/index.html","47544026d4d71ceab0dde855b7a65257"],["/page/5/index.html","e513466c1587139575659890906066b4"],["/page/6/index.html","c75df3df0e6259769cb55d7c684450f1"],["/page/7/index.html","e348c873d8595ba99eb1a49acee006a4"],["/page/8/index.html","a1524e2aad0a0707c1766d452bceb68e"],["/page/9/index.html","336ff2105d4a73d7b48754f554073d46"],["/tags/7-0版本/index.html","d0ac17dd133c5879a614f2248d5ee084"],["/tags/JavaScript/index.html","f2ec2744ffcc3e683fd0cdcd80b699a7"],["/tags/MongoDB/index.html","5985f60c8ec6df036f0ddf24ee1d767b"],["/tags/Node/index.html","dea72a51005744a0dcff3b607191d5b8"],["/tags/Node/page/2/index.html","53c4b0fe13790dd729233807a68c45da"],["/tags/PWA/index.html","2c9c3cf75dac1e5e9f01bad80f479e1f"],["/tags/Rx/index.html","b7955437d3f00c4adb9adcdf0ebc3acc"],["/tags/Tomcat/index.html","f08375debe63bf28db12b4272268a3b9"],["/tags/autoprefixer/index.html","d488bb68d4d0c447f85df901e434e561"],["/tags/babel/index.html","4d78e4d456282070de71fa65585a8f23"],["/tags/chromeApp/index.html","774d94744aed5c015a60aefe550ba35c"],["/tags/css/index.html","1c90eda77c57cfce13a465c11fc08f60"],["/tags/docker/index.html","c84935cf52acddeaaa57090811d88910"],["/tags/express/index.html","41dafd22eed788e1e84df6654e4a1125"],["/tags/flex布局/index.html","758a0becd1ad97083350581eefbd8b2c"],["/tags/fs/index.html","2533f11ce4a065a3a6ecd97327c734f8"],["/tags/github/index.html","e97f929c660823a01af6425e488ac4fc"],["/tags/hexo/index.html","4c776f6df2714b321ba141668d78e430"],["/tags/iconfont/index.html","7710db00ff97802adc3c09b0ee6ccc5e"],["/tags/iframe/index.html","078b9e85e405ec872d3dc62cc6341878"],["/tags/img/index.html","9bc9e238d59fa87c971078d44cd78a65"],["/tags/index.html","4f2a9da698bfd5e671749c2614d52099"],["/tags/ios/index.html","15d1c482650065da2477cad852c15871"],["/tags/java/index.html","fcccd567b1d4c98cccf34bdfe071f1dc"],["/tags/jwt/index.html","0470f301347c70125534d5700a2ca74c"],["/tags/logrotate/index.html","a7dbeadfd0c2b1f386c8905f1738f8de"],["/tags/loop/index.html","f0806a1b244316af958c64557d113425"],["/tags/mac/index.html","ae36d4ec32d1e8e7889d73a62024e87a"],["/tags/nginx/index.html","5b95e8a6831dbb290de4e3a2742aa0f3"],["/tags/npm/index.html","81a819dafa1386d4bfa835f8ef1d5844"],["/tags/observable/index.html","57cdfc0c1702937bb39c60b41f231ca3"],["/tags/path/index.html","3936efbe8d6867137f273347f4f979a3"],["/tags/polyfill/index.html","3f0605dd90d01a2771438640bb425159"],["/tags/postcss/index.html","b5a791b2cf3152acfe6c6e0d3a06408c"],["/tags/postman/index.html","e093fa417b65be32084aac2d75e68a02"],["/tags/session-cookie/index.html","3a52bae4e5835f7e416e865a8ae83f16"],["/tags/session/index.html","c61dea53018921c84e1276f897a0c717"],["/tags/shrinkwrap/index.html","6af66ca2deece878142e400344255b30"],["/tags/this/index.html","eb7e97df0865863cc6383b8216aa8eea"],["/tags/webpack/index.html","997396ba9c9667ba5433469362fedfe2"],["/tags/—-ES2019-—-ECMAScript/index.html","30d7949ab16e90d8bf8502019f9c11b5"],["/tags/代理/index.html","21cd943653af9f559f77e3bc06664926"],["/tags/代理服务器/index.html","a5e7dad6a299569315363f04f9af75e1"],["/tags/代码生成图片/index.html","35d16fcc9748a3bdbe38a6987bc5f9e6"],["/tags/入门/index.html","3c6c66d02f44b1f4130116bcac88e327"],["/tags/博客搭建/index.html","5cd35655b06015869c3838759f74c319"],["/tags/工具/index.html","9f8bc47d24bbe242f48a4d94fd491192"],["/tags/异步/index.html","45f4b3300e73e940dba412d81844a7bf"],["/tags/循环/index.html","4ead477b74852956d87334373132c957"],["/tags/按键符号/index.html","68e43018c826362bbae13b7fd71ff29b"],["/tags/文档阅读/index.html","ba9c4cea2054255bda97c4a2253426a2"],["/tags/服务/index.html","ecf20355f2004670c4b6f9394fed27d3"],["/tags/服务部署/index.html","0d7d9bffd2ffd614fd9633ffe80204ae"],["/tags/杂文/index.html","7ee76731762b58db8111a37e7056bd59"],["/tags/经典问题/index.html","0e2aa851c0423c8d11da4e1508d00017"],["/tags/编程基础/index.html","13aa4a4654a244a5e67ebb90f1a36537"],["/tags/编译器/index.html","a8f0f2b84a274f7c10d62e98dd68d5a2"],["/tags/联表查询/index.html","3c995ceb8e5e0dfcd40057cae554f0ed"],["/tags/路由/index.html","3297d5a0a80b3ae10809270ab7631a29"],["/tags/运维/index.html","7450a83da5ca384ee32471f7d588c561"]];
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







