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

var precacheConfig = [["/2017/03/24/使用hexo搭建个人博客/index.html","14ad1eaa9f2b984766502075476e5f05"],["/2017/04/22/使用阿里的字体图标——iconfont/index.html","40bd3f74a8a05edd886ab30c73fe8f03"],["/2017/05/28/Tomcat中三个重要的端口/index.html","e0c31fe2c42a367d852295d50a2e55db"],["/2017/05/29/网站的logo图片用img标签还是背景图片/index.html","3f58b18bf1d0acf865cedd958b8bb5dd"],["/2017/07/20/NodeJs文字转图片/index.html","fa6c3807a18e336491458fec704d6756"],["/2017/07/29/npm使用总结（1）：探究依赖树/index.html","4eeb1d68e380136fd9883af81ee7cfa7"],["/2017/07/29/npm使用总结（2）：探究版本锁/index.html","a010d331746b91446cc59b357451d18d"],["/2017/08/22/论如何阅读API文档/index.html","0f1be1cffb47f0b3c875a75cd84c97d6"],["/2017/10/19/使用express-session遇到的同步问题/index.html","cd186a4a4fee8401e84b110223b47c05"],["/2017/10/20/flex布局总结/index.html","782e1dc5da6e3357e934f2e75b9718d8"],["/2017/10/25/使用Skeleton-Screen优化首屏加载/index.html","38c9c43dfd69991c015bcf1e2344f289"],["/2017/11/01/nginx配置静态资源/index.html","3dc31427cdb2afd2f538dfd75bb97227"],["/2017/11/09/使用mac时需要熟记的一些按键符号/index.html","b868d5cb515cc79061f39e2b76ea5f60"],["/2017/11/09/告别chromeApp版Postman/index.html","46ad7a971c67ff0b77cbcf0a842942db"],["/2017/11/29/NodeJs删除非空文件夹的三种方法/index.html","763c4f4335f188aa79dc3377ac5a220c"],["/2017/12/12/比较JavaScript中的几种循环/index.html","a50d9edac3d7dd0c18ba152ecd1f98a3"],["/2017/12/13/当循环遇上异步/index.html","2cfb16b8eaf89cc129d793f285cbcd66"],["/2017/12/21/使用docker部署服务和一些注意事项/index.html","7472f02221ec19dd17f5804f4aa28b00"],["/2017/12/22/使用NodeJs实现代理服务器/index.html","045764cc659ea8cc3cbcb9139fb8ce02"],["/2017/12/28/PWA入门实践/index.html","ad904c774113d6c904688a54fefabbed"],["/2018/02/09/NodeJs的几种文件路径/index.html","a79e1847eef865dc96da6b0fb5c93af5"],["/2018/02/23/ios下使用iframe遇到的问题/index.html","dc86bc8b5f91248494197197213dd470"],["/2018/02/23/从使用autoprefixer遇到的一个小问题说起/index.html","1f9a02519524fa436d6ba899311bcb33"],["/2018/03/05/程序中的时间问题总结/index.html","a6d6bb6e431dcbefa4dbc8bf570b5daf"],["/2018/03/17/微信企业号加密方法分析/index.html","e3d047996e756ab9103a5f7cafb23386"],["/2018/05/31/JavaScript中的this全解析/index.html","6c9fef4eb713732f930d1fc5bbc6303b"],["/2018/10/08/最近的一些思考/index.html","61648bf0334a8ab137141b172dd71734"],["/2018/10/11/引用传递和值传递总结/index.html","df21ed93173794b0964c35780da26850"],["/2018/10/16/MongoDB联表查询/index.html","21fbb7ab11ea623ecf51dcfd80d62b3c"],["/2018/11/01/Babel第一讲/index.html","7830dd08410be8416d218ab7a23a55b1"],["/2018/11/01/升级Babel到7版本/index.html","8cb39bd96bc84f476771737ad799fd96"],["/2018/11/13/再谈babel-polyfill/index.html","bef6c997a6881f743eae158aa5101cd9"],["/2018/11/14/升级Babel到7版本/index.html","36999f2f093f334768bb86b3192dd9f5"],["/2018/11/15/Babel极致优化/index.html","383131099411ade17b5a10daf719e629"],["/404.html","638a58fc445fdc969627ed0bee28f742"],["/about/index.html","6d5f53c34b1fc9f7a077db23d7f725a2"],["/archives/2017/03/index.html","668a27794022694f12dc1767d4e5faee"],["/archives/2017/04/index.html","b4ef986eb9ea9f7c7ec88343fb79c3c8"],["/archives/2017/05/index.html","49ea7307bd6cb14517702ac63718126c"],["/archives/2017/07/index.html","5c1ace9278db436e44a87b9c53a32d47"],["/archives/2017/08/index.html","73a9486bab0ddcade6830fbf3b13d315"],["/archives/2017/10/index.html","95c946974fe0291c9362e4fba2af212a"],["/archives/2017/11/index.html","fde4315efdc2ed505ef704888efecf00"],["/archives/2017/12/index.html","8f227b511b7d1f3cb43331cb6581632d"],["/archives/2017/index.html","f7e1e8dffee6b065402bf071427ed8d4"],["/archives/2017/page/2/index.html","4a3fe5925465cc9f4d2920e50d748499"],["/archives/2017/page/3/index.html","96c8d6e3cb0b0fc5efafe7e993e09404"],["/archives/2017/page/4/index.html","098b4296a9a98786b262620aa9ece725"],["/archives/2018/02/index.html","c1eb464d3f047dadece4713b01f87ded"],["/archives/2018/03/index.html","2cf1311e2dc6502e970f28be8b18d29b"],["/archives/2018/05/index.html","99de0a768695045f75742eab40ac9485"],["/archives/2018/10/index.html","eeeaf2a5d77277929f6e07f853d210fb"],["/archives/2018/11/index.html","7258e69bf146a90b76a9dd25a84240dc"],["/archives/2018/index.html","409145f9eaa2a0553e8f4449fa66f937"],["/archives/2018/page/2/index.html","b5b862318d4242530dffc4ac47a30726"],["/archives/2018/page/3/index.html","834a5c3a193a9f0f27dbd679aa6a86e3"],["/archives/index.html","46f5bf9eacc4d9f4fbd94e20bcc24458"],["/archives/page/2/index.html","c4f56526eb80a680d81817d8c23043ea"],["/archives/page/3/index.html","989c01201ffcc94cabc5b86b65bdf6dd"],["/archives/page/4/index.html","bda423cce8ff0e2a4896dd2dc1b3e1d8"],["/archives/page/5/index.html","240ae95fa20696402bfb0bfb9643411d"],["/archives/page/6/index.html","5a6674ae729882a0542c9bf57da00fdc"],["/archives/page/7/index.html","352c7e09ca88df4921c60859cb5b1a10"],["/assets/algolia/algoliasearch.js","e12353469af755601c55c04d0fdf7704"],["/assets/algolia/algoliasearch.min.js","43bce911fc0d5e2bd4959b0c2690c2ff"],["/assets/algolia/algoliasearchLite.js","11b1f2489c561b5780e5d4158a14be7b"],["/assets/algolia/algoliasearchLite.min.js","321ff9a84a005b082c3e79b15838b08b"],["/categories/index.html","02850bfd101edb147f9578344c7dd1a7"],["/css/main.css","f6dcac11e40131d33011b8c9db8f5050"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","4e5d7c37db7bd0fd41ca7fd1db0ce49f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","da7bcaee74246d9f78cb4a2ff3ea0595"],["/page/3/index.html","35c24afdd4831f019f25e084ed2e83b9"],["/page/4/index.html","8fd73c1afe3e4dca6967028308412c53"],["/page/5/index.html","4493cf8dca850041aaea48a37c977f1a"],["/page/6/index.html","d5369053f4dcb5b2263037bf2baa36de"],["/page/7/index.html","5e8dd7837d771e9076852b85dc70cb96"],["/tags/7-0版本/index.html","2bba6c77840637c5fe77324f77efa67b"],["/tags/JavaScript/index.html","f60f0758682863a633960b3b56d0d64b"],["/tags/MongoDB/index.html","b50a4d22211599d2cc783811fe3513fa"],["/tags/Node/index.html","7f7b06e78e5071253c36dcfcc2aa009a"],["/tags/Node/page/2/index.html","2ae5cb851d167a0af55bc73d7532452e"],["/tags/PWA/index.html","116df19689bc117410439ae15311d3dc"],["/tags/Tomcat/index.html","d3219668390065771bac725e8d910a50"],["/tags/autoprefixer/index.html","b463395fa4e14ebe039717f5eed30f94"],["/tags/babel/index.html","a00324c397a66551671b885c893490fd"],["/tags/chromeApp/index.html","2fb940584a9bf27d9aaf1bb04d487d86"],["/tags/css/index.html","b34c15185deb26c5562a1453b0b40806"],["/tags/docker/index.html","b3c4ab9ee0dcf30a1ea4d3e189a1e8a5"],["/tags/express/index.html","7353bb5c96e09fc02c87f084a965f5a6"],["/tags/flex布局/index.html","fb765ce63079c3c3bc72214206ca5e97"],["/tags/fs/index.html","4ce7ab0a4579a1c32fd19c5f89df6b07"],["/tags/github/index.html","4e1354493c3723bb394da933b6466bc0"],["/tags/hexo/index.html","5e62cefd11a240d630551fa3ce1fe32c"],["/tags/iconfont/index.html","02732a5ef2335c0f81261163f99ae432"],["/tags/iframe/index.html","2d0939f2db6bd84e27cd265c429294dd"],["/tags/img/index.html","42c599794a6037d09454f9bdbd07188d"],["/tags/index.html","1c8eb296ad22eff4dc6154f68a4368ed"],["/tags/ios/index.html","7200c8760c5f07f4167b80d15283bf8e"],["/tags/java/index.html","c5c4660d9deee7a82406193edfebd564"],["/tags/loop/index.html","77537fffdb8e8d075df1b41dafda732b"],["/tags/mac/index.html","9af0233e99013cbc1099bdfd3cefc0c7"],["/tags/npm/index.html","d5926551addc830c4428ad43cc7ccb06"],["/tags/path/index.html","3b67dc2b8ee2eb26f557d5963f053665"],["/tags/polyfill/index.html","2c34b22eaaf4d42a8284000dfe2cbe2b"],["/tags/postcss/index.html","f0df6c732e5dc6520852553e61a4c3e6"],["/tags/postman/index.html","d6f93f1115968a196db1b2affae1b796"],["/tags/session/index.html","94f89d50ab85d327b020d2c7674ea0e8"],["/tags/shrinkwrap/index.html","a2a6dc8d801d4aeb2e7aaae7ab4bc986"],["/tags/this/index.html","6694de6e30f8ccd00c9c138da6a78c4c"],["/tags/webpack/index.html","b3a3d90eb22499b282d78575d5937e2d"],["/tags/代理服务器/index.html","bfbd5b133d3fb84cc5e0bb46f5e8ae6d"],["/tags/代码生成图片/index.html","41331b140415530f090bb561dbba924b"],["/tags/入门/index.html","d30898b33775b3f302904b41f28183e7"],["/tags/博客搭建/index.html","fd5b76437f0fde61bbcf5a7ade40ec3c"],["/tags/工具/index.html","644e0f4fe542c7d3aafb9dba737c21bb"],["/tags/异步/index.html","ea864e3133469589ec17903adbb6df0f"],["/tags/循环/index.html","8972ab7ead4f6a19f52f4a229b5a1290"],["/tags/按键符号/index.html","00ecb1a697868139ba69722ac2685e65"],["/tags/文档阅读/index.html","eb4ef6707e1684f0bb6a3f4f1c326c05"],["/tags/服务部署/index.html","43576be3aa6652ee2189d9a0254c4ae6"],["/tags/杂文/index.html","75e2cfe59d977ab4246e4eb1152add5b"],["/tags/经典问题/index.html","d2a9f074b2ccd5b9994027f5e92348ed"],["/tags/编程基础/index.html","beaddbb1c3eea228dcd76e59bf006753"],["/tags/编译器/index.html","af101e59bb3a3f94e828bba41046a35c"],["/tags/联表查询/index.html","f87b274f87ef9f9d29f9cd53100d4f20"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







