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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","ef283588b280b503aebe180885b91d05"],["/archives/2017/03/index.html","2a64122eefde7a99be04c73c4c45766b"],["/archives/2017/04/index.html","27166cbf4d17cbf865aa39c027014a1c"],["/archives/2017/05/index.html","e751871f44bd8b8f04fe762ba4c53dbd"],["/archives/2017/07/index.html","177b9805f1ef1244ee789a4a69fa4e8e"],["/archives/2017/08/index.html","3a7381e67a5c819ac6f50743900c1ecb"],["/archives/2017/10/index.html","4c2d5103d6ca5123732044f36b1f6bff"],["/archives/2017/11/index.html","04d23f1736e6e575a98fd9f0b5cad342"],["/archives/2017/12/index.html","22f1cabd7ce475255feb01152e04a7f6"],["/archives/2017/index.html","96ebcb9b2c79838bed3137652ae08a71"],["/archives/2017/page/2/index.html","a788dd24f272b50b6543cb9aa367682e"],["/archives/2017/page/3/index.html","c6d07e3d8c4c1924b2bef51d74a586e1"],["/archives/2017/page/4/index.html","b99f67049e70946522dcdbc5430175d9"],["/archives/2018/02/index.html","bf892751d6fd6f2cdaa0c4d6e18a4981"],["/archives/2018/03/index.html","a0412355315b3f08822fb883c743efbe"],["/archives/2018/05/index.html","6d844f637af97365224bee7d552a4337"],["/archives/2018/10/index.html","8c4113e299afc1c376c3f66ced653008"],["/archives/2018/11/index.html","7b3116361ae82fd96fa3beaec29feea5"],["/archives/2018/12/index.html","2a04336de465106e80756dfd8942e5ad"],["/archives/2018/index.html","713dc0da7f6cf1da54b77da66d5b2fce"],["/archives/2018/page/2/index.html","7a7a7d57f6fdb336d7946942426ea5b2"],["/archives/2018/page/3/index.html","3a14c233c39e2b3b0d2da00766e0a70b"],["/archives/2018/page/4/index.html","03f61ea7a3d1a47a95e644fb3566e51f"],["/archives/2019/01/index.html","2d5525c023cddc2efa5edbed395bbc0c"],["/archives/2019/02/index.html","0149fe03b36e3786428b6560111fe77e"],["/archives/2019/03/index.html","78158b9a240c84d9ffc8afc0ed04e268"],["/archives/2019/04/index.html","3a4c9fdb1152d66e29cdd94f4aca7a50"],["/archives/2019/index.html","b170b622ff34988ffcf6f718f9d28870"],["/archives/2019/page/2/index.html","5d3010b2370074d839640195c2f2e652"],["/archives/index.html","f73413a85a0adafb07dc50f45a6b45e1"],["/archives/page/2/index.html","5ae45e1dbf3a1543c58fdac0d8b37a76"],["/archives/page/3/index.html","9a66d7cce7abeeff73ac6cb330c8f99e"],["/archives/page/4/index.html","5ff40eada5ae1cac29d9f0aa2bbbac57"],["/archives/page/5/index.html","1e83a2946cba2bacbfa85ae83711e2d7"],["/archives/page/6/index.html","fbd3a1602075bd901057219a85c5055c"],["/archives/page/7/index.html","883e5f76dba0d85e3e7fce10a4dd3a60"],["/archives/page/8/index.html","0fac9246ba0ae13291219f9bf8a0ef79"],["/archives/page/9/index.html","f79855c2ee4cff6750718644dd43cda5"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","ccbd5f08a140843fae5c0f3b9107dc77"],["/categories/RxJs/index.html","f417ccca4d286751b52ddc884218fdc4"],["/categories/hexo/index.html","1cac176dc3311d7e7d39a9d8c9a32fd3"],["/categories/index.html","434d64c7822532705a04bd3c4b052c05"],["/css/main.css","5a5265af81bdf504899f5f03a306654f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","4888c15f68409eb3560d6ee441424f2c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ce159744dfdc17cc8d4c9c7522ff023a"],["/page/3/index.html","f59e4318f1b5449bf08d087eb0337e05"],["/page/4/index.html","7e8e59fea852f3fe51db33c41bacd614"],["/page/5/index.html","e8255c9a6176d6ba68286803f8b909de"],["/page/6/index.html","d665d896be7472eef23e1db8b6dddde2"],["/page/7/index.html","e29b2c5ff6c74649f29beb2e68877e2e"],["/page/8/index.html","ea5fa49d9cd09629ab5880f6ffc408f6"],["/page/9/index.html","82abdc5cb951b747e84d42f2d762a6ff"],["/posts/12fd/index.html","f929d47558615963b3da5c9fe56aec28"],["/posts/1d4e/index.html","bf2d81e11c4623c2b2c7b1b1598608cc"],["/posts/232a/index.html","86c6b357f784189d50bc4431e1dd0135"],["/posts/2465/index.html","926331651a0939d96a32000929dec82f"],["/posts/25df/index.html","7624a8d5c46adf9d674d4597fa19a916"],["/posts/25f4/index.html","c72bddd08585add5e5424aa9e8441a4d"],["/posts/26fe/index.html","5a40ddaa603ce2b82452f6c2d2210f78"],["/posts/289d/index.html","7756977ce7f70343efe9b572e0da9a31"],["/posts/2b83/index.html","745f43bee89cdf9b2ea953cc0c473104"],["/posts/3b3f/index.html","7e7976e9492e69198a1a72cfe235856c"],["/posts/3be7/index.html","614ee16b89f80ef5c762804cbae73d95"],["/posts/3d25/index.html","e73f3d444c4e16013e7089a2244889cc"],["/posts/435b/index.html","c065e3d0f1ec0eec2f17f63ea70d5a01"],["/posts/5389/index.html","c3765c6876409245e6498241c5dfa131"],["/posts/61f4/index.html","8af1f97f09ace1056e1f9d950e668141"],["/posts/6a81/index.html","901a13b4c23cc86c556050f8d0350efa"],["/posts/7117/index.html","5be77a3ca0c977d3894825351f75e406"],["/posts/72a3/index.html","affa4abb02b2f6e5bbc3d92ba5ae3698"],["/posts/7a8a/index.html","eea290e3f9d27b1e2d144cacb96a1d22"],["/posts/7f0b/index.html","2f7611bc878315dce3aac202b3835285"],["/posts/7ffc/index.html","ad2c83776d5b2dc6a556ef5c788669e0"],["/posts/80bb/index.html","45f02252a4e854b1079fa62ccb4f411c"],["/posts/8e89/index.html","5bc9cd9af573af08a6351ad236088e3b"],["/posts/9295/index.html","de7d2afbc893e71a9f6433d049e1e232"],["/posts/a5bd/index.html","2f394a435b58f04e4518c97d18e2c5da"],["/posts/a5ff/index.html","38fec517de073460bb78e7d008b0465b"],["/posts/a927/index.html","f93edf7e0ebfe49fbd4fcc66780e3860"],["/posts/aaba/index.html","9a0b9fbb588ab9ed3db7858695cc1cbc"],["/posts/aadc/index.html","fc9c8f24f5f07f8f3ced131176246465"],["/posts/b2fd/index.html","5e96294ad322e2afae1f02c7a3c1698e"],["/posts/b5c3/index.html","906a1e0fdbb2224645bc6c8120151117"],["/posts/bb9f/index.html","fa6107a3e985de19ec27c4b768d849af"],["/posts/c769/index.html","de46770b99680c7e31d532508348a1f8"],["/posts/c92b/index.html","91234ce227029beab060dec2d5adb682"],["/posts/c953/index.html","e64e69a395995574bdf062040dbfacd8"],["/posts/d0c9/index.html","a1fe06a30deceffcdfac54236f2fb62a"],["/posts/d267/index.html","63e2f199c805fbd630800083a9797053"],["/posts/db53/index.html","5b5f6bb481d7870a7358d97f4e0b9454"],["/posts/df50/index.html","bd02af336800b75a4bbb8cc6315af7b8"],["/posts/e874/index.html","2f2d6142b8d3565381731aa0d3d2bba3"],["/posts/ee16/index.html","934a2f744d86f36c24f076ac759710af"],["/posts/f82c/index.html","114d03bcd22059f6c0a4136ef0ea7a01"],["/tags/7-0版本/index.html","108c60396c5e3c162b963f98ea2d4a98"],["/tags/JavaScript/index.html","ff8327fdf8ce0019c0a320f73821c565"],["/tags/MongoDB/index.html","a7914c3f051d19f5852244c8dd3ab817"],["/tags/Nginx/index.html","3e1bf77de45212218ce140155de10604"],["/tags/Node/index.html","8f0a27412bcd18d6ebd6eb24ed1d0f31"],["/tags/Node/page/2/index.html","8c5273afe09e7db42ffcb4e4e523117f"],["/tags/PWA/index.html","4d43298b4d538957d55b15aec52ab0c0"],["/tags/RxJs/index.html","68ff7e456a368f3391f52ec2307acad3"],["/tags/Tomcat/index.html","8655e73eb5360cdd3dc4c808e1981105"],["/tags/abbrlink/index.html","05fd116de7c036a598db550d57e9d87c"],["/tags/autoprefixer/index.html","5ca5ec122cb6adb392c18822a41bdc26"],["/tags/babel/index.html","aed08316911c3cf41d5e2280fd1e421d"],["/tags/chromeApp/index.html","36ac8f265be37d328a168e1968d617b3"],["/tags/css/index.html","ec66558e6913c9c2c76054ee1a111130"],["/tags/docker/index.html","4b587cb1ad2faa40722f698c44139477"],["/tags/express/index.html","28b3dc6a90b5cb708faf315047a59ef9"],["/tags/flex布局/index.html","97741702b5bf4f7837ea1b65968baa37"],["/tags/fs/index.html","9f4622d3e3f0f432af4259e5c38b279e"],["/tags/github/index.html","75dedbd29061b5ed62c9dfe89f4518ec"],["/tags/hexo/index.html","0c94b7cc10792da01eb195677877d5de"],["/tags/iconfont/index.html","98dfce198d693cdca8c92b0efc07effa"],["/tags/iframe/index.html","36b917da278e4c999c6e7c65f8056cc6"],["/tags/img/index.html","064cecc06af70ee320115939aecb1fb0"],["/tags/index.html","c227cfa486c5bac27fb8e4107dc226dc"],["/tags/ios/index.html","7e172b32529a251c3e2631e4f808f063"],["/tags/java/index.html","ac5511b1a7a6a28ad858253052b9dd02"],["/tags/jwt/index.html","e6594c9847e474eb6b2efa95db47054f"],["/tags/leancloud/index.html","50f11bf4ed3d02b0175f370d43a1155d"],["/tags/logrotate/index.html","71e83ac66bdbcce1fb668b0adb434a33"],["/tags/loop/index.html","d88b1b1c21f68f74532631875a14e2ee"],["/tags/mac/index.html","be63289663a18fbb185f367a59d54c52"],["/tags/npm/index.html","5aaebb44e86e9554824fcd06edd9402c"],["/tags/observable/index.html","9962eb23a4831f35a670db891292fbe2"],["/tags/path/index.html","aa6c7ed1b6db8b6483444e7221bfc6c4"],["/tags/polyfill/index.html","f562807f7fc54abcdd701dd4e75855e0"],["/tags/postcss/index.html","c11e09234730a4b6c6d237680961d5cc"],["/tags/postman/index.html","c41110dc7edd6e2cf5156f69569429c7"],["/tags/session-cookie/index.html","ac05bb539f6e3430d4358aa883528d50"],["/tags/session/index.html","475800e243725f2d261e4442e238346e"],["/tags/shrinkwrap/index.html","808f9cf9bd7d32024fae7366ef779242"],["/tags/this/index.html","d4a3d0e742cd5afa089561f857822bc0"],["/tags/webpack/index.html","01c91b9f82a0df7698efad7d0e686efe"],["/tags/—-ES2019-—-ECMAScript/index.html","b021bf0c2a9e9f42c19da1540562a290"],["/tags/代理/index.html","5298fd8a102ac22dd36db98accfb7cf9"],["/tags/代理服务器/index.html","5af49fb8ee0776b7e492edd629b57938"],["/tags/代码生成图片/index.html","00a7e26ce81bc098a8bb691c708fccc9"],["/tags/入门/index.html","a7602d71ec0931bc993535a0ea24c362"],["/tags/博客搭建/index.html","513f45ea88df1754aa7ac37e5ca4c3da"],["/tags/工具/index.html","2e22b80a38db061216437c35a153e1b3"],["/tags/异步/index.html","d8b740ee0a4950da942ff4aa520818a2"],["/tags/循环/index.html","83a5486c723355fb3612de1e24cecf05"],["/tags/按键符号/index.html","446748a9e65e7fa55df109fe71c30841"],["/tags/文档阅读/index.html","8e497c352c1a019c7d4a268fcfbbd333"],["/tags/服务/index.html","2e69383cc15520315b47526602a17286"],["/tags/服务部署/index.html","5cdebdd07f2de658bef3c462f8148a04"],["/tags/杂文/index.html","b08d028dab4a71de514b538c322a986f"],["/tags/爬虫/index.html","8ec168915dcad521a42af69197a45aa0"],["/tags/经典问题/index.html","2874f51d7bfddef04fb9fab399914491"],["/tags/编程基础/index.html","2b39f1492a97ec3f86c39e249907b8de"],["/tags/编译器/index.html","06a1c2f797907f88c213162747cecc07"],["/tags/联表查询/index.html","0639be596dd5eaf30340b945093bf3db"],["/tags/路由/index.html","52337631348a7d71d78ca5492f873894"],["/tags/运维/index.html","8bb0422b8897732bb849a8315b6f9b66"]];
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







