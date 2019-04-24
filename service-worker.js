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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","48fb81b2e2757956a40d70e7f26494a7"],["/archives/2017/03/index.html","2aedc7c096d6ff6c848437bdb16dd3f8"],["/archives/2017/04/index.html","1c8b5a084d7b89f330459bfd1187363d"],["/archives/2017/05/index.html","5af6a657cc41d8574c1ea2f100c9f6d5"],["/archives/2017/07/index.html","75c90c2f972829622c86676594abb27c"],["/archives/2017/08/index.html","ce7eaad0270eef54c14d28c06ba07290"],["/archives/2017/10/index.html","67caef835184a7703720b2714e6e81c7"],["/archives/2017/11/index.html","94db43b3d06effacb4a486e173a67f03"],["/archives/2017/12/index.html","5bc8ed2783b842139d403b405b4d31fe"],["/archives/2017/index.html","a255fcc4c0e647b9daf570e4e0ce690c"],["/archives/2017/page/2/index.html","32fe94c2bfee5cdd0e83b2f04e52ca30"],["/archives/2017/page/3/index.html","062c4daed2146740e1a9b24bb9850a4a"],["/archives/2017/page/4/index.html","f5ff1d274d245bd14f91a490c84cb017"],["/archives/2018/02/index.html","1602974c8deab229e68f107048df9a85"],["/archives/2018/03/index.html","7c0dee7984285fb9118ff788ac1b247a"],["/archives/2018/05/index.html","97d8730a64b852161d7f5a50dbbdcf45"],["/archives/2018/10/index.html","a65351c886016ff3fdf1acdf3d4ef9f9"],["/archives/2018/11/index.html","ffbac17527aa57ec069605a280a317c9"],["/archives/2018/12/index.html","0e153e3177633083f37eabcba6781cb8"],["/archives/2018/index.html","4a0a4d6385733778a7863482adb24f84"],["/archives/2018/page/2/index.html","38e82f4a216eaa286372ea677950b50b"],["/archives/2018/page/3/index.html","066884f08fc27d2edefcde401d60041d"],["/archives/2018/page/4/index.html","6a605295f629f390262d5744e72f187a"],["/archives/2019/01/index.html","19e9d25b27d10fd098b303d5b9da66c5"],["/archives/2019/02/index.html","e87282268b86610f72cb066b0e32020f"],["/archives/2019/03/index.html","c3746644f4a6e3c6d41895f643e40ef8"],["/archives/2019/04/index.html","748d64ba9ed247fc01434a4fc12847e8"],["/archives/2019/index.html","a890dcdc8cfa41f8282255095ed871f9"],["/archives/2019/page/2/index.html","eb29c6befa21e30118187591a937b303"],["/archives/index.html","0ec5ed23fd46ddfaffa179c0e5f05e48"],["/archives/page/2/index.html","d95073734666acc61cc026210cfc54b3"],["/archives/page/3/index.html","22b5c241f4d3eb2e69f14690f25ccba2"],["/archives/page/4/index.html","07ec2709ce79f261be4f34a40047fc45"],["/archives/page/5/index.html","30bd18b038c8a1f44225e8c4b5c76f44"],["/archives/page/6/index.html","a3edb4657745447d81b545c0434a0ea9"],["/archives/page/7/index.html","0edb9dc290e95f560b48a8a29911201e"],["/archives/page/8/index.html","8b69b68e8ef805435aba10d73bcc0dcb"],["/archives/page/9/index.html","9e09c815cc722e00a3ff6e4cca2d97e7"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","eeaeb96d22e2763a4d1565687679c327"],["/categories/RxJs/index.html","cc85bebf2a725709338e5753f5192c6e"],["/categories/hexo/index.html","26b076a0331a3da3cfb071e29dd8627b"],["/categories/index.html","51709dcd6cd23c6743649ab1409877e7"],["/css/main.css","726dfa21a9b8072eeb3f2d21b2b9e417"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","71c11ce042348728f9163771937fd7f1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a92b36a311fc1819c23b9254caa2f56f"],["/page/3/index.html","e83c52cbbfce4c15541c259877e25652"],["/page/4/index.html","5a80f46ce37a68a3635aa4e1dbe345ac"],["/page/5/index.html","b7e1580610e9f59eb1a3ca6b2b526921"],["/page/6/index.html","f6b1e10b638abae270b74db54464cd2f"],["/page/7/index.html","492efd26e3f11e14052db63a0524e59b"],["/page/8/index.html","ac74b49ca3ac1a8f8d48db9bde084cbb"],["/page/9/index.html","aca53cdd66e6d18fb0b7f5ec68695855"],["/posts/12fd/index.html","799a2b04534459c59a6e92acd052d5be"],["/posts/1d4e/index.html","4a14c1484b6dabb440c2c366c66760a3"],["/posts/232a/index.html","c9f72a2f720ca1aa58f490f2fcfb1961"],["/posts/2465/index.html","04de058ad6ba35b5faaa66fdddeac99d"],["/posts/25df/index.html","b93948970a439d9983fdbea807c812f4"],["/posts/25f4/index.html","5b935964c0954af5cf3d21619c0dcf56"],["/posts/26fe/index.html","30753a3840d78ad4792d93b2ed10e887"],["/posts/289d/index.html","8a4daad6071c0c735a7e0da9e4b3bc9c"],["/posts/2b83/index.html","80e4afa5bfa5486420d06af11a8aaf90"],["/posts/3b3f/index.html","ffe023ec0dcf5deb5f90bb510d13de49"],["/posts/3be7/index.html","34a9fbef6e16d3decd0c6083003acb54"],["/posts/3d25/index.html","05aded9e367cabd4837b7fa715bd44b5"],["/posts/435b/index.html","0b1ce90596d44f79d7c9c4334e5f38b0"],["/posts/5389/index.html","7de0b149bcedb3660ef2c40bccc11654"],["/posts/61f4/index.html","ae1a09883f44aae81e09acbfbb08ead5"],["/posts/6a81/index.html","3c08b1219c098ba73d84bccc0983adaf"],["/posts/7117/index.html","b72d0d08eed9c43e69927f78476ae441"],["/posts/72a3/index.html","e2501fb72f19f3d2e0bfe5475589c33e"],["/posts/7a8a/index.html","2e2bfd4e0bc3f4debff4a22424539de9"],["/posts/7f0b/index.html","7344ad1fe6f1dd69565bec3820c770e2"],["/posts/7ffc/index.html","8e8e4abeef76a3b5b49a18ebad7e72f6"],["/posts/80bb/index.html","84d03bb20e67a0842826044e75952c9c"],["/posts/8e89/index.html","eb81a1186f3c89d78cbc4b8fe5ab7eb1"],["/posts/9295/index.html","8278d5e889261b311829ef51989089ed"],["/posts/9d8a/index.html","7ff845ff3c3d550c3fa56513f617d7ef"],["/posts/a5bd/index.html","c5fe202f921eb735e2320c2cec16dbfe"],["/posts/a5ff/index.html","c30c6bf9dae07713b6ecf14b770089d1"],["/posts/a927/index.html","98b3041ccd4ba06c3c9cbfc34ea4a69d"],["/posts/aaba/index.html","62b6900d8042ee23460f8afdd45b46b6"],["/posts/aadc/index.html","75fc1a22345a5c12f8a7a83f132be4c5"],["/posts/b2fd/index.html","53bf77298d095ce919c7d8350c9e7e34"],["/posts/b5c3/index.html","ac5047ccb5ad63df8c9fed860041a302"],["/posts/bb9f/index.html","b313ddb9a74c7984e4dc9f9c30b9b802"],["/posts/c769/index.html","3d6d5922bfba834594927ea9c05ca115"],["/posts/c92b/index.html","0da3ed529f33fa387d6d4a1d6ce9310a"],["/posts/c953/index.html","6e3434728dd54def5c72942a09b17811"],["/posts/d0c9/index.html","8d121a82add7b8ff37c89a43efa1dbad"],["/posts/d267/index.html","8865822c755d761fefb981b6f6bbf423"],["/posts/db53/index.html","207a1ec5187ebeff281a6aded8c3f6b8"],["/posts/df50/index.html","6f3e1c505298087079f322cd4cd96516"],["/posts/e874/index.html","6ead75b2cf32985831fd685d5862aacd"],["/posts/ee16/index.html","776ac7a0587d8ce8b9ab48820dab5cc4"],["/posts/f82c/index.html","2886e9487d4d3975fc5cb7b6733744a2"],["/tags/7-0版本/index.html","16e4f660792b685c32997b3425103b76"],["/tags/JavaScript/index.html","d36d8fd2caf5875c98d77c62263e9efe"],["/tags/MongoDB/index.html","d2a88595b0f5e856fa4532c8e9c2209c"],["/tags/Nginx/index.html","c293a6371274aafb154eda2efc6c0f34"],["/tags/Node/index.html","8b57c03d6cd3bf0b6491e461ffd7efd9"],["/tags/Node/page/2/index.html","42dce6f8a46cd53146b8dbf9f14bdd71"],["/tags/PWA/index.html","02767620b201b710cfd4827e2c1e4b9b"],["/tags/RxJs/index.html","93a293c37e4867e5506920f04f064a16"],["/tags/Tomcat/index.html","bcb1f142c5de8fa6cbc69a8641f9c2cc"],["/tags/abbrlink/index.html","f2407e446a7d1e063dd6066f5a9e61fe"],["/tags/autoprefixer/index.html","daca73da2c98a9a1ce427c0b01799803"],["/tags/babel/index.html","faa7e85f3180e54d7d8249b0ea1fc3c4"],["/tags/chromeApp/index.html","a21383f02aa76506ab1f400f750de99e"],["/tags/css/index.html","4337397f57f57744985a799b1d65bc7e"],["/tags/docker/index.html","c61033ff9aec4b83d0b03404e032e0c0"],["/tags/express/index.html","f6dcaee2b3af85a8884141a4cdb04cea"],["/tags/flex布局/index.html","c6c7e6cb78052f673f30283a47df3897"],["/tags/fs/index.html","3042f592840e8bf424b616e46dd59347"],["/tags/github/index.html","48dbe72e6a453009513dea676eac470a"],["/tags/hexo/index.html","577f3068c45b091b231a9ba5efd683d7"],["/tags/iconfont/index.html","a4b2bc5ac326e6b391f2d87e2df67223"],["/tags/iframe/index.html","61e5dde686cfb9134c2ad36073e6eee5"],["/tags/img/index.html","0d86a7bb96b00ad1e52512432294c6f8"],["/tags/index.html","029f2c9100d287515f3700376c4255e1"],["/tags/ios/index.html","ac5ab7ae1ff97d7ab6667011e219578c"],["/tags/java/index.html","96822124b7e986f2c5d15b5228c29ea0"],["/tags/jwt/index.html","1a9879f3fa8417b19c61fabcb5f35a5a"],["/tags/leancloud/index.html","365f4065d3f851d8b5104dd71e174f07"],["/tags/logrotate/index.html","66f7dcb1060baf7914b04283de8417ac"],["/tags/loop/index.html","e87dab89074c7827ed7dd634ff48f22f"],["/tags/mac/index.html","e4e6e63b712cda2f4a1d5d0e3fd43b24"],["/tags/npm/index.html","0b6300e8f601fad6fb99d03956554153"],["/tags/observable/index.html","0e29040540f985fe600f14181251600d"],["/tags/path/index.html","45160100d4c04eeec57811c7931e720e"],["/tags/polyfill/index.html","6c747aa6f863fd2d62313bd8dc1e29ad"],["/tags/postcss/index.html","95240b5038db36714ba9cf7bd68e9d63"],["/tags/postman/index.html","cdbceed6b390a63aa107df7554649800"],["/tags/session-cookie/index.html","849233611bc05a93bac7f1a22ba9b01f"],["/tags/session/index.html","caf37b6e3a71c223d5d5df18f80bc97c"],["/tags/shrinkwrap/index.html","247def61b23141a27f41e6d269367d3c"],["/tags/this/index.html","74a7006abd6a15dd9d74fca1fa39ac3a"],["/tags/webpack/index.html","c389e17daf6cc670711b45e2711c6a90"],["/tags/—-ES2019-—-ECMAScript/index.html","05cd846a3bad16914b0ae944687d3dee"],["/tags/代理/index.html","d28bc67b00394597e612d01e85eb4e15"],["/tags/代理服务器/index.html","297a7043189a61e5b4f146517136024a"],["/tags/代码生成图片/index.html","448f28171f9f770f566e37bbad3ab5a2"],["/tags/入门/index.html","2ddc7482f1a7f93c8d2b49a24d525f1b"],["/tags/博客搭建/index.html","7ba287c44cde41ffc719b37f126e8882"],["/tags/工具/index.html","096e3d048dceeefe0bed27adbfb984c4"],["/tags/异步/index.html","1cf9d9f47db45034e331bf31ed80cbe2"],["/tags/循环/index.html","8cd461b8d903bb17cc964997e894b4f0"],["/tags/按键符号/index.html","822c9fc5ff0218f74f3c56e5ce728bfb"],["/tags/文档阅读/index.html","4f04090a60a1ff5c1d2669b1d154f8f2"],["/tags/服务/index.html","5dc2a79a1eca3cb6f82e328047c6a0f1"],["/tags/服务部署/index.html","c17daf74a1dc068761ef2b5ad0d3ba82"],["/tags/杂文/index.html","7e71c7c76a4f798f0d8cb49f2f90dc88"],["/tags/爬虫/index.html","2aecea8307237cfdbbe78286bf2a1048"],["/tags/经典问题/index.html","cb6108f8138328b087e96d44feded280"],["/tags/编程基础/index.html","1f11be401328327ff069acfce0bd838e"],["/tags/编译器/index.html","82379ec07aa1a71541b7ab564f6b5b25"],["/tags/联表查询/index.html","036d34a5e85ef9143031a0cefc1eabc6"],["/tags/路由/index.html","908169e97c54c49a8d7f1885e8dc0865"],["/tags/运维/index.html","c694a5a49b390aa2a990d4116a47ba2b"]];
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







