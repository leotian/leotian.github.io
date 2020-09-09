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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","f4e36bb124fa8abf0a121f8064e15019"],["/archives/2017/03/index.html","076d73fe425c2f371f1d7a8a914738c4"],["/archives/2017/04/index.html","c12453ce971f0ca77a1175e15ec6e02b"],["/archives/2017/05/index.html","9c7225402ebd075cb8ef61941f8e3e04"],["/archives/2017/07/index.html","d5aff98023877265ee1956296024c83f"],["/archives/2017/08/index.html","35acc13443e40ef7455b1f8bda668ab6"],["/archives/2017/10/index.html","dfb0e44570ecbd71262fb6403437a9b8"],["/archives/2017/11/index.html","56e8d787df528ccf503481683a086109"],["/archives/2017/12/index.html","350e3f9b8127a6cdc8b04e8700dad7f8"],["/archives/2017/index.html","d87936f3df282186ee6f9e4b55fb9a67"],["/archives/2017/page/2/index.html","bd1404d0ee7ad0a7445618817745bd73"],["/archives/2017/page/3/index.html","c158fbc4b4cff04abf3355466ab7f078"],["/archives/2017/page/4/index.html","a41f49fe000b00be865a3234f9fe8d52"],["/archives/2018/02/index.html","4f4cb88c205c80d35c2c81a3e5bdd2b2"],["/archives/2018/03/index.html","324028c50a1bf8a68b993bc9ea9e7b74"],["/archives/2018/05/index.html","1cd29fe895961b87f9ce7b32e6695a0b"],["/archives/2018/10/index.html","1f6373bf44c995b554ad38686ac34908"],["/archives/2018/11/index.html","2592538886fc6dec42c0e4d9fafd57b5"],["/archives/2018/12/index.html","c5db44c81a5bef6908dfd66ebcca7435"],["/archives/2018/index.html","bbc18e23b3e8c5e7b15789bda1569e2f"],["/archives/2018/page/2/index.html","ea44a94c40871b4e5e54361ae6cb9a21"],["/archives/2018/page/3/index.html","75a0e617cde414b519dd59e5652a13a4"],["/archives/2018/page/4/index.html","2538d23251578b148451a6aae9bfd4f2"],["/archives/2019/01/index.html","29ca2a41806ae1d2f971ce0725a33507"],["/archives/2019/02/index.html","bf2596532f953f22928cb0435c19ce1c"],["/archives/2019/03/index.html","3ac1d8b58d38563db6d91c106935190f"],["/archives/2019/04/index.html","58c9c62cbad6675308f7e4683060f215"],["/archives/2019/08/index.html","5cfb093374cb16993e677808451610d3"],["/archives/2019/index.html","3d67d9fbd30d4288efd3037dfada8c3a"],["/archives/2019/page/2/index.html","0409b7d62d03150f786ddd841d61bef2"],["/archives/2020/07/index.html","99760663468e40c69dc9b81b050a96f1"],["/archives/2020/index.html","ab2007f425c5f8a84c9acb60c8e0b2b1"],["/archives/index.html","8837ad13c2e4318f4485b471b9c75f22"],["/archives/page/10/index.html","6fac03bb32d025928ffd98603a4ba78c"],["/archives/page/2/index.html","47d5338dd9f921b6355860a885af4a09"],["/archives/page/3/index.html","b06cc9a25594dac6c599861bb397314e"],["/archives/page/4/index.html","1b1b459640cce387e7966e3d7e02671f"],["/archives/page/5/index.html","93072c627cb79dc6eba27236c0e78ff4"],["/archives/page/6/index.html","666949148369b87714b27b73102d7965"],["/archives/page/7/index.html","de4114210c1448dda51a4b8bbf975850"],["/archives/page/8/index.html","fe290122b977136a3d9597244d2ae6e3"],["/archives/page/9/index.html","d66ad59ed774ab275a9f5084f3388dac"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","039944963e5a96e97621292272d8209c"],["/categories/RxJs/index.html","750f9a4d7b1a84b3487bca2fb4502b88"],["/categories/docker/index.html","1e4bae77faa7510c7e434af74f15fb43"],["/categories/hexo/index.html","00e793d0f7bde15a9a887e05f339146a"],["/categories/index.html","b435b959282b1e4b08f5f3138a8673bf"],["/css/main.css","7bd7204a05d9d9a397e78c52769c93f2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","c8b09f318b80b2ae00f736d589a0982d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","90a80b31eb16a37cb6d31e160a9002b7"],["/page/2/index.html","9f6a594b17ffe71863380af837f7dd18"],["/page/3/index.html","d6a4805965907b7b3679205a3fca11ea"],["/page/4/index.html","e02bfe2a5a1427b4a41b133301d759e5"],["/page/5/index.html","db944a9fd2064dc624625500f60c4e98"],["/page/6/index.html","c28981900652edcc6d035d11370a09aa"],["/page/7/index.html","836451bd083328c5e676ac3219b77257"],["/page/8/index.html","b6861abbf873532869dc37d20f802118"],["/page/9/index.html","5cc0d8bae3fd28b900e254e5f4bb30bf"],["/posts/12fd/index.html","0b628562e05d6cd84768147cf7f65ad9"],["/posts/1d4e/index.html","0e6405054be701c491662ce19e4b9bc8"],["/posts/232a/index.html","065fa72d67be05775aa6feff66e5d99b"],["/posts/2465/index.html","52f62b4b01b182db2a4e522606b8ba76"],["/posts/25df/index.html","dffe7591dd44a4566c87e3fb7acc48fe"],["/posts/25f4/index.html","d55f0041a2e4e8e5ab7f44a6143188d7"],["/posts/26fe/index.html","ec7e7af7f2159ace4920fc759ecd280a"],["/posts/289d/index.html","fcdd19e0922e7a746366b5c3828795ed"],["/posts/2b83/index.html","f237142daf67b5383c2e0f3200a03304"],["/posts/3b3f/index.html","36efd174227f1f2e4a3e00452135cb13"],["/posts/3be7/index.html","18612e86925b35949d16a6df0d94a8d6"],["/posts/3d25/index.html","af527158cc4a8bb8e3fe36f7efe452a9"],["/posts/435b/index.html","f7d623e28cfcbb510a7ec08bef7aec53"],["/posts/52b0/index.html","f66b52abfb21dc62a82024f95e145a15"],["/posts/5389/index.html","04fb611af56c854cbf591ed631c12cf3"],["/posts/61a1/index.html","27829b630a3a8259637c91a2e7dcef15"],["/posts/61f4/index.html","2c53f59e5d3ba5a00c21292e14aee615"],["/posts/6a81/index.html","5eba5349974e91613e963c52fde4d2fc"],["/posts/7117/index.html","c60426fb706aecbd39671c4dfc0d34d9"],["/posts/72a3/index.html","a1de754e4e7625593a35518cbb6c8f2b"],["/posts/7a8a/index.html","bee701772d3c98a0afcf6bb88c227efd"],["/posts/7f0b/index.html","7396ac02a47983af02f9f921c3009d9b"],["/posts/7ffc/index.html","718b45afa69b7949aab6b8c248f89b61"],["/posts/80bb/index.html","e1a9dda72e3dd3112de353607679e81e"],["/posts/82bb/index.html","cafac84d44a10e08d2fe7b677922f7a5"],["/posts/8e89/index.html","c98fdb0588d98a8b3613593b6e4cd65e"],["/posts/9295/index.html","6b0a3445fb8deb785c788394fe32aaed"],["/posts/a5bd/index.html","06570b26cafa16a4378d82ec83b532e7"],["/posts/a5ff/index.html","0d97e0e4ca199ccef99f854ce1e86e40"],["/posts/a927/index.html","3d02cc9f27f395697c802887d7c54aae"],["/posts/aaba/index.html","faf8b932a8e5436327fd15b7b18f62e3"],["/posts/aadc/index.html","aa303dc9d841a026792928b47e8a5668"],["/posts/b2fd/index.html","87c03eb946f54f261605ff2bdede3e9c"],["/posts/b5c3/index.html","7121d8bd8314a8b2a6554de23bd96fbb"],["/posts/bb9f/index.html","1894c9b1b3b00443fb086cf92ae67f2c"],["/posts/c769/index.html","d56a998f37dc32ed5389c92768c16d08"],["/posts/c92b/index.html","15e7a80650fa3f3a6aed1ee341d454c4"],["/posts/c953/index.html","387ddc6ebd7df9b6b09507a2086193a7"],["/posts/d0c9/index.html","09754fc74fb455b33b27d9a0d32893cd"],["/posts/d267/index.html","a682917de57959888cf30c69a4ffd6f7"],["/posts/db53/index.html","48f2ac20d927d52a48884856e7963a49"],["/posts/df50/index.html","10e08bf392303671b72e021acbcf0354"],["/posts/e874/index.html","f1927a16e00e9acdefde31018cbf8918"],["/posts/ee16/index.html","3c89785e304218113b359f9bbab33685"],["/posts/f37e/index.html","3b95cc8435e0c0b0eaf7d8510146c256"],["/posts/f5d4/index.html","6c20f33a8816da0e889f2c93adcfaaa2"],["/posts/f82c/index.html","0824f94743cd7e0cba9dd771f2059ec7"],["/tags/7-0版本/index.html","c3a6b9c19396130e5ee6a69fe3448f2f"],["/tags/CDN/index.html","03784ac6b3362e4139f59bebf5c7e31c"],["/tags/Context/index.html","d3d0bd93d0a1d50cbb9fe55ab011cf86"],["/tags/JavaScript/index.html","b83e53b39ef68c12106d92106624008b"],["/tags/MongoDB/index.html","b3971f0dd74ab347a5a23195087cbfaf"],["/tags/Nginx/index.html","ddc806a856db8412b1631d9eed5e4b4c"],["/tags/Node/index.html","7b6e814ce4bb8510171d37b1afe86e24"],["/tags/Node/page/2/index.html","053949a71c0c70459e272a41f86d0ff9"],["/tags/PWA/index.html","25ffa4b70085725d288591958ed40950"],["/tags/RxJs/index.html","0cbfbbe4c740c7d311060cff9e5ab171"],["/tags/Tomcat/index.html","ca77d4cdc406e5697acc66701d813a43"],["/tags/abbrlink/index.html","5b1f7865189fad7fc309edab94106621"],["/tags/autoprefixer/index.html","a74923cc05745aad12d5d72432537200"],["/tags/babel/index.html","93c95b8599d2dd1b33f1db175d3be9ec"],["/tags/chromeApp/index.html","6fb3eb91613874ce6990565ded8d4665"],["/tags/css/index.html","c54e00b13557f62038a16bb3d9e69aba"],["/tags/docker/index.html","1810fcb67843190e0f8778453295bf1a"],["/tags/express/index.html","cd583d23e90d72b716765b1c6c74e019"],["/tags/flex布局/index.html","5c5c12e5aa881e06473f53ad5bf47c9d"],["/tags/fs/index.html","58eb177125c769cfc53a306e32848a30"],["/tags/github/index.html","20fb76ae3ca41651ece1fd58945fab2b"],["/tags/hexo/index.html","17af719745cdf7fcaa0593059fac09e0"],["/tags/iconfont/index.html","2aa9339f93a58f13b60b40b7f850e68c"],["/tags/iframe/index.html","ad884aac6fc060466acef5ddc2e04434"],["/tags/img/index.html","fa39a09db4a7ac8ae862d60b04d697a8"],["/tags/index.html","70a7719432341bb3b699e98ad2596376"],["/tags/ios/index.html","4b2f14bece8011fd101cf16a60d4bb81"],["/tags/java/index.html","7f2073739b046e08e6a24f9a2414d3fb"],["/tags/jwt/index.html","4a161c05d15e9a495b1b0cbbb2cb008b"],["/tags/leancloud/index.html","9ee634e06cd004e5f373812205857555"],["/tags/logrotate/index.html","bc8d93445fbc40316847b62a8cb1348c"],["/tags/loop/index.html","6e6f6e69cb1e3fa6d5443b3d0e9fa1cd"],["/tags/mac/index.html","f17b1d9147d2687e6a87ff116313dcdd"],["/tags/npm/index.html","072841fffd761013f84b25d26bd1491a"],["/tags/observable/index.html","644101bf9773c135aa21d51a7154fc48"],["/tags/path/index.html","1ab66b0255692879c370023c0d498cc1"],["/tags/polyfill/index.html","a2fe624bc5cd9d0d064a6aa0dc57ed31"],["/tags/postcss/index.html","26858daf1d42882cd4a68bb0c7fcc542"],["/tags/postman/index.html","b667523c07e83a48e63491ababe1a8df"],["/tags/react/index.html","13cd8f2f97850f9dfcd027b81905a2b3"],["/tags/session-cookie/index.html","e11a4cf2256c5c681ec84fd8d605c0ac"],["/tags/session/index.html","a87570d6d35f19628b8b5eb7ab5f2aae"],["/tags/shrinkwrap/index.html","511f43af08021e920cd8ced3a6cbee04"],["/tags/this/index.html","3fbf5d4c90d40faaed44d5e61ce050c5"],["/tags/webpack/index.html","77a105d1f12ce07d6da31ca36ecf01f6"],["/tags/—-ES2019-—-ECMAScript/index.html","d74dd773348c7cb76b17804f95cfe0b6"],["/tags/代理/index.html","66d5cf6225ed897b309e6772540cfd2e"],["/tags/代理服务器/index.html","fd87cefcabc9a96b196ca9cfd0b60e49"],["/tags/代码生成图片/index.html","3bb68211a3b7176379d845e2a3e86338"],["/tags/入门/index.html","1939bce780a7251e2766148f5df59a0e"],["/tags/前端数据管理/index.html","7e126404b611f06624d3ab3586a1e646"],["/tags/包管理/index.html","e5ee44d06b43d4f4190c398ccd711516"],["/tags/博客搭建/index.html","013426959447738f1b5ca3799a5fd932"],["/tags/又拍云/index.html","98155f0c2bb1e2abd90e2128a93fc754"],["/tags/图床/index.html","3f7e20be456866e11202ed2b5bf7cf2b"],["/tags/工具/index.html","06487ea589d8b1ad828285b260d7df4a"],["/tags/异步/index.html","bae7302dce571c70e98961c6976c4bb1"],["/tags/循环/index.html","a70fd18c3699639010a80b40ee646771"],["/tags/按键符号/index.html","7f031afd2c87fa3f4b12bc52f02eb731"],["/tags/换电脑/index.html","ba3bd9b918e3c98445ec0e638f97f045"],["/tags/文档阅读/index.html","7cf6b5aa42b680ffc3e763c0d2a5d6fb"],["/tags/日常/index.html","f0def5cf86d145d9ac2a7f7c259d643b"],["/tags/服务/index.html","0005ceee202020eccd7dfd4b3daf72d0"],["/tags/服务部署/index.html","c233bfd2b61eecab0cbecdf3bb234974"],["/tags/杂文/index.html","2e9e06e0d0757afb422f3b589c5aad75"],["/tags/框架选择/index.html","9b37d22c2839707347bc87cd5efb1003"],["/tags/模块/index.html","339dffe87cc65ea4b92e7ead6e24419f"],["/tags/爬虫/index.html","748d5474ce0eb809fd6b0b040573b576"],["/tags/经典问题/index.html","abee6452b96d51203b26c166e6511434"],["/tags/编程基础/index.html","2b06709a36e4a81cac8aeaccdf0f2d91"],["/tags/编译器/index.html","9c79f3696f7f8b1f55882b2e3f2dd019"],["/tags/联表查询/index.html","b1026cb0d8d534e343890ab43d19a67c"],["/tags/路由/index.html","f40f0c55a3fa8f0edd6a3add3b8d5fe9"],["/tags/运维/index.html","40301ef0b85b5e1bc71da095e7609d7e"]];
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







