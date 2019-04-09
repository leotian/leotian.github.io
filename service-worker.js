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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","3d93663fe677722026b0615b0e913f35"],["/archives/2017/03/index.html","89a76fbf64421eed10a9d160276881ab"],["/archives/2017/04/index.html","2c4fd2c46fb7b8020825e0d0aec4b4b0"],["/archives/2017/05/index.html","ebf1342bd307f3aebac797c3016fdf1f"],["/archives/2017/07/index.html","9fbea5954a17bc069d5ec8b4c4124121"],["/archives/2017/08/index.html","48264f5d7132f56fab12faaef69f98fd"],["/archives/2017/10/index.html","f823bda74bdf24413c7b6d53189b7cba"],["/archives/2017/11/index.html","409003e00ffbef68b399d5bba226de60"],["/archives/2017/12/index.html","5c48bf02fcdcaf0bd896ea3f05672fba"],["/archives/2017/index.html","2d77c5af71b6f22de3db95e265d15235"],["/archives/2017/page/2/index.html","57fc40a399723648891e5e0110f4f292"],["/archives/2017/page/3/index.html","6b53115d06ed36fd3d451cd45aceb545"],["/archives/2017/page/4/index.html","7142f71fa8b1fbf7e0439cb3eebf297c"],["/archives/2018/02/index.html","552b255fd07cec349869a41c6a33880f"],["/archives/2018/03/index.html","718101b6b0c7c9e40c46bd105ec7c0eb"],["/archives/2018/05/index.html","fd5304d12e9af37ac945151a40bfb098"],["/archives/2018/10/index.html","defb1b61de441ca6edcb4e820f45db1e"],["/archives/2018/11/index.html","2868a60ca0f863f9f1fb106b6d8af8f3"],["/archives/2018/12/index.html","1476da95540267883908e784d29acc87"],["/archives/2018/index.html","08c3e3703ee69f4fb7a625dbb832cede"],["/archives/2018/page/2/index.html","c9faeece683c33bffe6c2e7a8c4d642b"],["/archives/2018/page/3/index.html","64865de7c2572a676042ff0374b471dd"],["/archives/2018/page/4/index.html","b0cf11d3e4aa50c1430cf9b6e84b4b4e"],["/archives/2019/01/index.html","7a488cae0e3bb5c82a9593d1ddfd79de"],["/archives/2019/02/index.html","11dbbb94c36fd6dbcf31b487ecb02730"],["/archives/2019/03/index.html","fc626bdd63c6fc715a6f213f3b8d4860"],["/archives/2019/04/index.html","53bd0274a0e7f1bd5017e30b135d8009"],["/archives/2019/index.html","eaaebd2e029b1419c2e5c06e13ad6254"],["/archives/index.html","c4b2622eefb0e9872a6494660e097737"],["/archives/page/2/index.html","03d75856a3364412bd31eab0423608ce"],["/archives/page/3/index.html","0bb9d3206e6977ad65b6ceeb89e324a8"],["/archives/page/4/index.html","7466bb7e4d40148dffd8095c823d52a2"],["/archives/page/5/index.html","10c4599b53522cefe47999ca67a25ea6"],["/archives/page/6/index.html","58f265482856c37966a4b67b0e251cc0"],["/archives/page/7/index.html","cc5701dc30a7a4369dbbe967e6bb47a7"],["/archives/page/8/index.html","5f5ab56beb0718992820ffc0c1745edb"],["/archives/page/9/index.html","8ad4c8e04856cc8e49eb0a9ae9c02855"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","4530b335cff254d07a6c55e849c93abc"],["/categories/index.html","0e0c28a1e966440b7c7efe146df8b025"],["/css/main.css","11cb7e302e8e54cd187085d9e6b37011"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","2b065ead511b1ae32681be8e6f4b5771"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c83424ad4901e6971549ae4c1806fa22"],["/page/3/index.html","d554893ea689a91ff7c8959548d5126a"],["/page/4/index.html","92e063f1c21112ae0ab5456363421f6d"],["/page/5/index.html","5881a9fc2f4badbee4c811b8c267aa69"],["/page/6/index.html","f494d13294c4645f9cb8c6b0713b8a29"],["/page/7/index.html","13cc34db92a35ae68883eac6eda5eb4a"],["/page/8/index.html","7914e38206602782ccb18203d9c24694"],["/page/9/index.html","e2043b62401e8839ba90ed84da58d20e"],["/post/cju9rpfwa0002zx5ovktg6kc0/index.html","507ecc35469cf058d98971c7a398b2d2"],["/post/cju9rpfwh0004zx5okcvj6d9e/index.html","1d372c6cb7bc0172b505c72bd956cde8"],["/post/cju9rpfwo0007zx5ob358p2uk/index.html","467ded25ce7ec9509a1c966a8e78a310"],["/post/cju9rpfwp0008zx5oszxqapgu/index.html","cd0d08dd4343524e0080948a273b8c03"],["/post/cju9rpfwr0009zx5offjwc79y/index.html","788936c4ae7053de858b88caae6ace4d"],["/post/cju9rpfwu000bzx5o4z9i73en/index.html","143798b21332c95d9ea324bef9cdf0ce"],["/post/cju9rpfww000czx5o0v9f0fjs/index.html","2ed5d8c411935d02f9a51a4a0716a7b7"],["/post/cju9rpfx0000ezx5oaiq8lxkf/index.html","19815e13af5191076e5c6128e9ce9db9"],["/post/cju9rpfx1000gzx5oyj87r5r5/index.html","79130575986f35ebf1d3d8c4f864dbd4"],["/post/cju9rpfx4000jzx5o708r7ocw/index.html","8dbefc4054dab1e8be921e4c9b0f275e"],["/post/cju9rpfx5000kzx5oa3ia34qr/index.html","b9125a67b214ae75134380ee933807f8"],["/post/cju9rpfx7000mzx5oz4qna0ta/index.html","f9d66ffae8c266dfbf71874813251956"],["/post/cju9rpfxa000ozx5o3dgabtm9/index.html","8ca913dd55044b65853b327e0e1e8492"],["/post/cju9rpfxb000qzx5ou7h8zdoe/index.html","81ff47bb2e439482814a3b3a22d0b7ac"],["/post/cju9rpfxc000szx5ohyc990q3/index.html","c6ba983bb2b0498f1eda48c6040d4fc1"],["/post/cju9rpfxd000tzx5oxkpzv5z2/index.html","9333e66dbb0f0ee4eeaaf34401cb6f93"],["/post/cju9rpfxh000vzx5oxrwn3z19/index.html","bfa2fc950a97657f5406b04460712cfa"],["/post/cju9rpfxj000xzx5o5bayumjc/index.html","3e2f81a03b1c28c21f319f97bba1c316"],["/post/cju9rpfxl0010zx5oe6m3p3kd/index.html","349e9fda2cf28fe0beb427733abe940c"],["/post/cju9rpfxm0011zx5oxjbfgo3o/index.html","8045b2556027f9511ea990a7a36f291a"],["/post/cju9rpfxo0013zx5o2nqfntlx/index.html","a7b83f6b03aa4617c17ab2817fd7e301"],["/post/cju9rpfxp0015zx5o7k5bbzlk/index.html","5244f14036aada2861b32fcb6a4fa60a"],["/post/cju9rpfxq0018zx5odmay4iv7/index.html","c6f68dd152c2102c549c09bc1a4bba93"],["/post/cju9rpfxr0019zx5optw7ssvd/index.html","d69e82945ae1f8d3602608ab62c16c0c"],["/post/cju9rpfxs001azx5of7h1q0xa/index.html","4fd92d3f3cb9eb25f992d9c45df58707"],["/post/cju9rpfxu001dzx5oxs1o3ljq/index.html","1099c8c8083e742b137db797faf944db"],["/post/cju9rpfxw001fzx5o7r531czy/index.html","14f51dc55a89a75c27a45bad407e9d37"],["/post/cju9rpfxy001hzx5o21cct29a/index.html","7563e28143c66e2509efe787bb348b7e"],["/post/cju9rpfy0001izx5o3gmw427k/index.html","ed1d85ff941644d7e83a7c04fd31448d"],["/post/cju9rpfy2001kzx5ooz54cl0w/index.html","c061fff5331c995cff77481642b24536"],["/post/cju9rpfy4001lzx5o3cgail42/index.html","c77345f8ed401ab2bf62d65f54cca7aa"],["/post/cju9rpfy7001ozx5ort54n3x4/index.html","fa710d619f7f32618cc32a54d0d580b3"],["/post/cju9rpg1c004dzx5oolbcfo66/index.html","10aaa3bc34f58ade31e75bf48cf94aed"],["/post/cju9rpg1e004ezx5ontvqjxir/index.html","232c22351798720f0ed8b0125c23f33e"],["/post/cju9rpg1g004gzx5oh66313fq/index.html","b013341f5057e84ef483c4e24e8307e8"],["/post/cju9rpg1i004izx5obmpuxkef/index.html","b019fcec07a1d0fb80846a44fcdbc8b6"],["/post/cju9rpg1l004kzx5oesxg31cd/index.html","552184520a2318b48a47c04b6d7324cb"],["/post/cju9rpg1m004nzx5objefiyqv/index.html","b295dcaf6bcfe62d0180a81dddc96ddf"],["/post/cju9rpg1o004pzx5oyl58ezrb/index.html","ba51ffddf4d072e29d9581f56755e1e6"],["/post/cju9rpg3d0057zx5os6ra7297/index.html","c6db7c3b32863532a21af86b6084b11d"],["/post/cju9rpg3e0058zx5oye0jbivw/index.html","e54fc65150031a4f095318b5b4a41952"],["/tags/7-0版本/index.html","f032ebfae19e7efb2fa1e59577aa8a2e"],["/tags/JavaScript/index.html","d47c874b37265d10a1a7a5227291ee65"],["/tags/MongoDB/index.html","56560916736b8d8730e1f49ed56e6e82"],["/tags/Nginx/index.html","4fa477fba5af2679c487bd44a5076448"],["/tags/Node/index.html","251bc25a4c41b2741d439f755e20a412"],["/tags/Node/page/2/index.html","1185122c363d5a2d07f5462b9a5215da"],["/tags/PWA/index.html","003440f566e87463a2b7aecd4e9d9694"],["/tags/Rx/index.html","8c0fbd8085c1007a7d30ab3263812dcb"],["/tags/Tomcat/index.html","c4bb2d0bce490b3947f2a5ec02b506f7"],["/tags/autoprefixer/index.html","3779e21d8dea20cf4052de98eee193a0"],["/tags/babel/index.html","db73a05cc4c7a62f5d4ff57ba7719ff0"],["/tags/chromeApp/index.html","46b150273c03df30e8466020c0fdaab6"],["/tags/css/index.html","e05f43779240f92631dc04401537cc10"],["/tags/docker/index.html","031eb9d575c9fb03327712dda2be4fe8"],["/tags/express/index.html","1dc413d7d7de247ad3762ce16156ad57"],["/tags/flex布局/index.html","c38e0a94b4134060c94b185c88d4df6c"],["/tags/fs/index.html","6b653ace6f716042ec7d2e6b1d86cc8a"],["/tags/github/index.html","2a8d2bca7f7c37f1f37d1b0040486912"],["/tags/hexo/index.html","95f7cffedfd87331cb127ab775ae1a4c"],["/tags/iconfont/index.html","bcbfc23128e0ec1dfc179b4be4a84bd7"],["/tags/iframe/index.html","8b09c6c5db21ff74fca44375409c3e8f"],["/tags/img/index.html","0104ccf51e0b54676b770d638cd357eb"],["/tags/index.html","ddc0e133c812e0217264732d73710be1"],["/tags/ios/index.html","fc298dbc76150117cf0f57f3b9a8a671"],["/tags/java/index.html","0c6be7d1a5cdd7a24163fa493435edfc"],["/tags/jwt/index.html","995e3cbbf75ce98e839fa39c057ec143"],["/tags/logrotate/index.html","d327bda4fdf9bbd0180b51cc1c593291"],["/tags/loop/index.html","e7df3aaa215999abce790ddb178cfd97"],["/tags/mac/index.html","32990a65d11e2e1f25ac50e1f791a83b"],["/tags/npm/index.html","e8f00427771787eb6f872db788756c9b"],["/tags/observable/index.html","758ea340198bd124b0934b74fbabfb00"],["/tags/path/index.html","6f3d8c5274104cf0ed74318c35d0c684"],["/tags/polyfill/index.html","bcf191b50de8ebbc9315826d1453f4a3"],["/tags/postcss/index.html","6d9cb9bc0245585addcb9bd1a13765ac"],["/tags/postman/index.html","b823213f4bbf9b53dc115968579a6555"],["/tags/session-cookie/index.html","ae0316b39eeae3a2ef87516bf4d58a54"],["/tags/session/index.html","e0907e856f747dc68eea202be22b75e6"],["/tags/shrinkwrap/index.html","dfb75baf43e86f50bc62f5ae98f98450"],["/tags/this/index.html","c211dcd131e3b7e997316b361c9e81d3"],["/tags/webpack/index.html","b2f5327ce615984f491d04675aa2f8f3"],["/tags/—-ES2019-—-ECMAScript/index.html","4e491eb5cc9b6cec8dedadf9c47f8ea9"],["/tags/代理/index.html","9588461aba739958fa9f221c8fc43845"],["/tags/代理服务器/index.html","656ffe8b1de0ce0fe39abebb1f68f404"],["/tags/代码生成图片/index.html","3aaf6de7b016f45d6d451ea4ca38e94d"],["/tags/入门/index.html","5656fb055e15d84582a2b5356a733dc1"],["/tags/博客搭建/index.html","62eba2d31a48a84495a22b28b4305531"],["/tags/工具/index.html","48a49fd7857815a66c5b486349cd15c6"],["/tags/异步/index.html","d8b4be59dfdcf5d91f57c0b6f1d53e87"],["/tags/循环/index.html","e1a07b0f39ab1d95d86c7ab18843d978"],["/tags/按键符号/index.html","7cbd11e33cd51ea47e932a95da334414"],["/tags/文档阅读/index.html","c029d945f49091e43df61662572e64d6"],["/tags/服务/index.html","1b4a12b8af3fa486fecea405f6868997"],["/tags/服务部署/index.html","4bf7d3c69ccd9202ffbaec0159c1792e"],["/tags/杂文/index.html","829d8e01b9564bd17a76a0292ff1b480"],["/tags/经典问题/index.html","f26c6ea24ebcb2561ee15317420be002"],["/tags/编程基础/index.html","22f68d7e80614f12cb85548fdcc2da91"],["/tags/编译器/index.html","fb71dc1589b9ebe5b1ac427ab48f42ba"],["/tags/联表查询/index.html","c988b0d80b0da42a0d58aa24c93823a8"],["/tags/路由/index.html","3336927e5da340240939ae7df95984b4"],["/tags/运维/index.html","bfca8c7e952c91d88e38d9898d23f371"]];
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







