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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","addf87482837958aaaeb136b211284c4"],["/archives/2017/03/index.html","456678ae06f0df5c440c9abc8d7f4383"],["/archives/2017/04/index.html","a38050f485fea7cb9678dc4b5e5b90fc"],["/archives/2017/05/index.html","ace55e469b80d361b57aa7a0392a3d99"],["/archives/2017/07/index.html","5a6e31acf553f1725621087ceec86b31"],["/archives/2017/08/index.html","6f5d1602c3ef6a809e275ba55d4ec577"],["/archives/2017/10/index.html","537d2bb10a9294c0f0f1c55f5ddeb63b"],["/archives/2017/11/index.html","c88253f4f7060b52a3e33d8846b334f4"],["/archives/2017/12/index.html","84c406737de9624c4127a3bedfd11f67"],["/archives/2017/index.html","c737478e8f447129537fc589ff419cff"],["/archives/2017/page/2/index.html","8addf4f6097bc6a80c5954195714c78f"],["/archives/2017/page/3/index.html","441fdbd544aafd8893748a0c54a6f332"],["/archives/2017/page/4/index.html","5b655bbab81cb49d374711ada1e6a0c5"],["/archives/2018/02/index.html","2204731383ba912493e6c9c68a685be5"],["/archives/2018/03/index.html","fb04c6e9117f4246ef9b2404e7d7fcaa"],["/archives/2018/05/index.html","1b42e50fa80ebf4d84893f7c44e2167a"],["/archives/2018/10/index.html","5f35cb93a1293a5253f02f49cb4c503c"],["/archives/2018/11/index.html","4089480a12dd047c8029a1b88b21e46e"],["/archives/2018/12/index.html","365ec55bac198c438db3f22b3308f65c"],["/archives/2018/index.html","619bbcc17a6f1a695eae2ac4d7696a1a"],["/archives/2018/page/2/index.html","f6c8aebaf13e0b81146a89b79eca0fba"],["/archives/2018/page/3/index.html","f11df768c7a1625d82387fd023b08ed1"],["/archives/2018/page/4/index.html","aac9589592dd5e8adaa168b9740507dc"],["/archives/2019/01/index.html","7ba6546914624c600ffe4407e8db4a23"],["/archives/2019/02/index.html","1da63879a47f84d2265ee4c798efd617"],["/archives/2019/03/index.html","00e83adeadacd32b6bb47dc7e119db2a"],["/archives/2019/04/index.html","1ffbff39e12d5c722718f9bf6609c47c"],["/archives/2019/index.html","9e06c4b7d1d1c86f58902fb70df6f8e5"],["/archives/2019/page/2/index.html","a113718b14a17717c96646e02f9b2a7c"],["/archives/index.html","0501d5a54656fac0e4ca15420f7296ec"],["/archives/page/2/index.html","2f81174a19d5dfaa62485f3f71ab7eb5"],["/archives/page/3/index.html","f0e4143cb1c0d1f306ec5beb986eea18"],["/archives/page/4/index.html","cf3a8b732f8fc8512c09e5ec3480daf2"],["/archives/page/5/index.html","3c7497510e4e98db862580c3b4c5fc64"],["/archives/page/6/index.html","c6b1847ea58b8a32227a9f904085a9d2"],["/archives/page/7/index.html","b7b836a86571e12704efb8d96a439703"],["/archives/page/8/index.html","20a5098a3a8636c2a2df3c323b676f5d"],["/archives/page/9/index.html","0652f47c560ad78d2e25d2935ed8baa3"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","e5cf58ad50f8266907ab45b522df9e30"],["/categories/RxJs/index.html","c2386ad496e0baa0d483dfa0abd121b5"],["/categories/docker/index.html","5c20fcd89fef020eb35baaf63f602675"],["/categories/hexo/index.html","fa7aec3d026ea46c5a3e7cd0048c594d"],["/categories/index.html","c9d83dc420d270db6f5d78b5de738de0"],["/css/main.css","c40b6e1018f7705ec795edaa97794daa"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","0b45a7aa55acf476bee73e60e4b7dccd"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8d98a826d44aa82d2513105eea93624f"],["/page/3/index.html","5d59b8c5ce2350c61396f11dfcb43d62"],["/page/4/index.html","1a3033f5b10f5a382d551462af3c0771"],["/page/5/index.html","4a5b9790ba547b8db84d31eecf50e563"],["/page/6/index.html","bd1f1dfeb31987ab8fea19968125a4ac"],["/page/7/index.html","e39b064bd43bf88d806ef5110accad8b"],["/page/8/index.html","e65a1669a2a7a62fee81cd76cfd32c10"],["/page/9/index.html","f62945e0f587005f5ab02572adce7063"],["/posts/12fd/index.html","655af30b539c7b46a4cfa51681291bb8"],["/posts/1d4e/index.html","9179cf0b4fcb7f0abdd4ec89192b3c38"],["/posts/232a/index.html","ea730dc03042f0bc85548505823e7a84"],["/posts/2465/index.html","6be5ee532aeb217eecbba2d4e6460cdf"],["/posts/25df/index.html","d05a6376b4bc323e4b6f1ac6596e600e"],["/posts/25f4/index.html","5d38309d3b10e2b7fc5b318e8fe3a2d5"],["/posts/26fe/index.html","1a32c42c6ab27ac036319ff4a9fe5c22"],["/posts/289d/index.html","3129e592cf4d535d552ca8d78bb540ae"],["/posts/2b83/index.html","ee29b55d03ba8fb64b6c47425be7d739"],["/posts/3b3f/index.html","6840d5f6a07c7736831347fcfb0b115d"],["/posts/3be7/index.html","21d50465f131fd1f7031d487989f4902"],["/posts/3d25/index.html","b2fbd9df4667542ce7a5c8f76c7f0bef"],["/posts/435b/index.html","4502c8592056fbd54dce09e831b57f0c"],["/posts/52b0/index.html","fcfedfc6d68981c979b1e73462af9087"],["/posts/5389/index.html","947d2a69bbd2ec557ee996aacafa9ebc"],["/posts/61f4/index.html","1421b7c4de782982b9e15de1bf9ce19c"],["/posts/6a81/index.html","28df57c11d783cbf9d1c816fefd19b3e"],["/posts/7117/index.html","1660d854d1b535daab821cdea22d70de"],["/posts/72a3/index.html","7838cb45714ae53e6b4d27c706970bdb"],["/posts/7a8a/index.html","dd336de50d43d8c3ad69ba8875b44392"],["/posts/7f0b/index.html","151839c785129e0d3f78ebfb8d238170"],["/posts/7ffc/index.html","faf720e729a3e74ceda6d67755b2b7cc"],["/posts/80bb/index.html","fff315adc9295bc7e6a65922c6105c1b"],["/posts/8e89/index.html","fdf066b7cf2481f7918d9f203a8982ef"],["/posts/9295/index.html","73d35c8c1b2abe6887e60c4f6a746e20"],["/posts/a5bd/index.html","74d2d53fffcb427401270f12e62516aa"],["/posts/a5ff/index.html","7874102411abff4fa29f30491ce85747"],["/posts/a927/index.html","e3df832c386458e8c2cc7918bb8a4fc3"],["/posts/aaba/index.html","a71519893f52c937e963a0c78638aa54"],["/posts/aadc/index.html","6d2f6d3e31456c77a32933be78c2e642"],["/posts/b2fd/index.html","a9670dd02c81eee348af4cdda7a62132"],["/posts/b5c3/index.html","4bb9b6a4c7eca9816494cb1974720bf5"],["/posts/bb9f/index.html","0c14d8bb62526a8722a549f0c4efe5a9"],["/posts/c769/index.html","c5fc47fc4b4a3dd25c93a5cba2a67820"],["/posts/c92b/index.html","28c5a88ad2cfeade4a03dc77f6d2eec3"],["/posts/c953/index.html","1856fa781b27a409ed33316ecbd7a8d4"],["/posts/d0c9/index.html","2d867e2df467600be5f89450b5243721"],["/posts/d267/index.html","147a7e8714229b461c52a5eec61d4a40"],["/posts/db53/index.html","af53533de485d8a983ce06e0bb98101f"],["/posts/df50/index.html","ef88db93bdcb227b3c19febada71dc06"],["/posts/e874/index.html","c4c2b7a403f481b7566768e42a055fc3"],["/posts/ee16/index.html","f514c253df758dd05cceebff7e97c193"],["/posts/f37e/index.html","96c1da7bce2b1502d839d367a2e51fb9"],["/posts/f82c/index.html","3cfd650f1881a5a59d28a98df4247c5d"],["/tags/7-0版本/index.html","710eeb45cd78cbc9975391baae8f084e"],["/tags/CDN/index.html","7832175298d863b305b72c992e341e97"],["/tags/JavaScript/index.html","016f8293d5e77e11ac802e17f6b83b9f"],["/tags/MongoDB/index.html","bac7047869c34d6c1d1bf27e79adde21"],["/tags/Nginx/index.html","2b25d5e2427b4f5113efb34b912336da"],["/tags/Node/index.html","094c278f3e022ec6f723e47390f97913"],["/tags/Node/page/2/index.html","fa52be363313013777fab262e6c04a4e"],["/tags/PWA/index.html","2c15aa38010a7e6e5fa5f2ca0650048c"],["/tags/RxJs/index.html","4cdf13ac72b0be8f47f7d053430c54b4"],["/tags/Tomcat/index.html","a6aa70fed586998bc5565274ca07c18a"],["/tags/abbrlink/index.html","9d3dfbdcefd6b22e623a7fc0d9d8263f"],["/tags/autoprefixer/index.html","b04cc00c7cd3e9cc289658290ad9d2eb"],["/tags/babel/index.html","2dda98fbfb7c317dc8acb4d8d3ed0e96"],["/tags/chromeApp/index.html","9c364f4d2920bff44d787570f926981e"],["/tags/css/index.html","853ba40180e24eea988c72fd96e56a24"],["/tags/docker/index.html","39110a4b6859d6b394cd173294cf09ea"],["/tags/express/index.html","ba2f781b9431b88ec06f0773b71f75c2"],["/tags/flex布局/index.html","e3e82a4a231147a4be3123b05e0c21e7"],["/tags/fs/index.html","0a6b73260073a9f425badca9ecb6bcf0"],["/tags/github/index.html","e0e6bc07b707f46c9350b3980953e58d"],["/tags/hexo/index.html","5be07685c378ecafb4db4efdf2cf3213"],["/tags/iconfont/index.html","a680e3df15a609ce6fd09ba3eda74550"],["/tags/iframe/index.html","7c2d89653a31ac0c40ca4524b8ab515f"],["/tags/img/index.html","03c8a1fae7442dff9d8d47e4289ee38c"],["/tags/index.html","5049518c29b12562f6c6c6ff87298a4d"],["/tags/ios/index.html","6a9944f5598364b84087dd879398b3f7"],["/tags/java/index.html","1850e9ca2f7b8c853c987020224179aa"],["/tags/jwt/index.html","26ec2d27b7f392e91a20162821d16c84"],["/tags/leancloud/index.html","80c0d8c7bbead5e058a377ead2c98585"],["/tags/logrotate/index.html","9c3003d451933c1e7642e8a20d974148"],["/tags/loop/index.html","47f79f4c651699e37688f51e88b92dc3"],["/tags/mac/index.html","bc09dd4e7b4aca836f6a78b678762eea"],["/tags/npm/index.html","f6a60b06e600ef2db680cb5048d4baf0"],["/tags/observable/index.html","56e63d0fbcdacaedbdf49cad435891d9"],["/tags/path/index.html","19b332f115b32dcfa7a4e68b28b93c56"],["/tags/polyfill/index.html","1a72e239ce2ed88e268cb40febe958ec"],["/tags/postcss/index.html","5c8fec6030859582cefb31336c24f92e"],["/tags/postman/index.html","cc9d7a70e7127e292e2db853bdd2310a"],["/tags/session-cookie/index.html","81f378cbba1315bed69f50a7c810624d"],["/tags/session/index.html","d40e533f39d4d3c1b5006b66a5bd5308"],["/tags/shrinkwrap/index.html","464cfddcf0b0927ca0bfd8249ede8693"],["/tags/this/index.html","79adbbb59e5a87a2da7c86791ce5e0c3"],["/tags/webpack/index.html","d6c37fc0b2b848387c78dd2ce54ecd4e"],["/tags/—-ES2019-—-ECMAScript/index.html","1a1bbacf806fd586881f3968c393490f"],["/tags/代理/index.html","50ccdbdc18b24cc00da9a45eef5baae7"],["/tags/代理服务器/index.html","6287d9692bfad2ff57b8548161b66f31"],["/tags/代码生成图片/index.html","81122b0d0dda39f492f819a47d3b5b81"],["/tags/入门/index.html","35e42ce7fb3adc27743d13780d46071e"],["/tags/包管理/index.html","7d4b41446de46351b13862fc2c498497"],["/tags/博客搭建/index.html","a8af837580a0f219b9a1c892a1266bde"],["/tags/又拍云/index.html","68c9e8651f23618e8883388b1d8c2f09"],["/tags/图床/index.html","ec10e7f976ed7ed57f38794929d95670"],["/tags/工具/index.html","4f803df67baf9beef392b86bdf11a061"],["/tags/异步/index.html","cb7fdbe726b18ec20f4c13e62757181b"],["/tags/循环/index.html","7ee0e12d3c547a1c53886a05114214df"],["/tags/按键符号/index.html","299566835b92f8840c67c25475669ec4"],["/tags/文档阅读/index.html","a0390beda76090d968049cbabab09260"],["/tags/服务/index.html","5837f4dc083f7e295a73466bd0c7dc24"],["/tags/服务部署/index.html","3b3bad458383068ded9e727db10aa71b"],["/tags/杂文/index.html","c47da04e839055a15a3d034d9e0322ce"],["/tags/模块/index.html","cca8d83c28968813e0746ccc3293d235"],["/tags/爬虫/index.html","3f323272c89505ba2a8ae987ba8a2984"],["/tags/经典问题/index.html","d67f63e656e43029c0e04d2ff278a185"],["/tags/编程基础/index.html","bedfad13ce90cba98f2bfbf7ca1800cb"],["/tags/编译器/index.html","14a07d85d4e1f727bc13e3ef6c49e727"],["/tags/联表查询/index.html","8ce2b0afd9b56a9c3eaa8efe0cc9b7f1"],["/tags/路由/index.html","72152f6ecd6dd5411c9d122dd415820f"],["/tags/运维/index.html","fb3770ae7a35d4e0e52308c39168858b"],["/前端数据管理与框架选择.html","46a7b00efb2a66ebf2334023fb5953de"],["/正则学习指南.html","d4841ab3c3b5f98089a0579634429a79"]];
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







