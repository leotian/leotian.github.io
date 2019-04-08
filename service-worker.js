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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","3d93663fe677722026b0615b0e913f35"],["/archives/2017/03/index.html","9dcbf94cbd7f68c02dc2ab6363fb0704"],["/archives/2017/04/index.html","9f0e481d0189fdec6152a558ec2d6bd3"],["/archives/2017/05/index.html","6cf0f12b9c631355c721a4e372b4f27a"],["/archives/2017/07/index.html","29507dad67fbd658a9baea8401e2d355"],["/archives/2017/08/index.html","14bc3ad106dfa35215711df8d8b7800a"],["/archives/2017/10/index.html","6853c6d7f0841acacdabec583a148805"],["/archives/2017/11/index.html","b3b1bdbd95c102b1c8af7f0c8ed5b856"],["/archives/2017/12/index.html","f5e041fc67742ea6f3732e26849a855b"],["/archives/2017/index.html","9cb59b658d41f9de9f532108eab46e4e"],["/archives/2017/page/2/index.html","3311a5764aa4817053efa068d29e18d1"],["/archives/2017/page/3/index.html","ac24b02d648d46469116b9454c26f670"],["/archives/2017/page/4/index.html","2727f585bdd66b677c279c8d3f568af9"],["/archives/2018/02/index.html","b22b0d64948018cbf3b900f26b3b267d"],["/archives/2018/03/index.html","fc3238f193e3d84dcb53ca43a85daddb"],["/archives/2018/05/index.html","9905c76af7011768a1230bb40f621ef8"],["/archives/2018/10/index.html","8f52e139049ecc52387e565b8ec498db"],["/archives/2018/11/index.html","a02c3612deed02018839548717e29795"],["/archives/2018/12/index.html","d29e9de7768eeb329691c1705f654f78"],["/archives/2018/index.html","77689b701eac64b746d172607bc7258a"],["/archives/2018/page/2/index.html","2e1617caa197406bf299ddb022522444"],["/archives/2018/page/3/index.html","4929168e56e54e09bb1070c3669d1141"],["/archives/2018/page/4/index.html","1615514a4872b75785eaeedae3c4ef15"],["/archives/2019/01/index.html","f18923a3752dbd277773ea5d78a836bf"],["/archives/2019/02/index.html","2c0d32df93d4b69388f8d2b1d8c7f7cb"],["/archives/2019/03/index.html","23c006f8422f7911cda06512004e11a6"],["/archives/2019/04/index.html","96193afbc9da77979b944925031bd85d"],["/archives/2019/index.html","fdd3cac412079782f4c32112f416afc0"],["/archives/index.html","aec566daae6ff57d53582d48912839fd"],["/archives/page/2/index.html","49910c26f35ebdcabd538ff94ae86643"],["/archives/page/3/index.html","b299aaed170363a42df11cd53da4cefc"],["/archives/page/4/index.html","9396d69256cf910cee7f218240a04483"],["/archives/page/5/index.html","0c47a153025236b56e28e00811627dd3"],["/archives/page/6/index.html","ffdea708b3f71654766f710df42f7e23"],["/archives/page/7/index.html","38e3fc022bdcf699726f2bf40093dd38"],["/archives/page/8/index.html","2c8db27a5a0432452d0a9f64867c37be"],["/archives/page/9/index.html","77fb8dd478dd537b46a9d8cc781160cd"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","fe3696e6edd9dd76432e62f6f1aa6515"],["/categories/index.html","0e0c28a1e966440b7c7efe146df8b025"],["/css/main.css","9f5ccf5ba640630ecc94801cd66fab52"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","aeba7b4c3bab66f11448c83cc8a11047"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bc4a44ecdbd9a43d49749979cef794ed"],["/page/3/index.html","0b5e5bb88b48d7eb360fbe56651d2958"],["/page/4/index.html","53532dac4ad002a4645c8266556b894e"],["/page/5/index.html","7475496d023ff5bf210ef124e0e7359b"],["/page/6/index.html","3f1ea1a339550f38a4d0e579dd2b76db"],["/page/7/index.html","c34e9878183a2d27281c9347e9c6a005"],["/page/8/index.html","350f1bb2f68550297f63c6a8ba4699f1"],["/page/9/index.html","1dd680dc1a851fd6aaba008951c2fb7c"],["/post/cju8j3nae0001rw5o9xnuant3/index.html","187ef950881736b4fc2ed4011db66a6c"],["/post/cju8j3nan0002rw5oislk1ve7/index.html","3cfb83802408292dae8b01f0ad9c9f3c"],["/post/cju8j3nay0004rw5o8wvlyc4l/index.html","ff021b203475a9d207612114cd596631"],["/post/cju8j3nb00005rw5oaz0u8qce/index.html","3969ef0077b862088fd41e954925fec6"],["/post/cju8j3nb40006rw5op9hkkjqw/index.html","7861f696990494211348c63f14d79e2b"],["/post/cju8j3nb80008rw5oiy40b08p/index.html","449e4264622f380a446cdce829ce00e1"],["/post/cju8j3nbb0009rw5ojfw2jv0c/index.html","ac571447e96a93f2c29ddba2c20ab09d"],["/post/cju8j3nbf000brw5o71ysqbqh/index.html","42575970dc7eb7ee0b75bbf7dfc65d46"],["/post/cju8j3nbj000drw5oermi5wm4/index.html","97ef72cc6a3fcba913471400dd369768"],["/post/cju8j3nbn000grw5oir7c7hkj/index.html","4d3ba2d8f268259399ee77992d9bb39f"],["/post/cju8j3nbq000hrw5oqk2x3wxx/index.html","99de6fb47339ed5dc01a23b9d1d668c1"],["/post/cju8j3nbt000jrw5o6ottybgw/index.html","847497d61d66319036303ffadb4bf7c7"],["/post/cju8j3nbw000lrw5onxxfryz3/index.html","fad1b085edfb22c471e6a71f8323e438"],["/post/cju8j3nby000nrw5ortom6jn0/index.html","c338d4abd4052e9d556e884ffe329a10"],["/post/cju8j3nc2000prw5o14t7h2nr/index.html","6da46487bebb67e7855831734b5fb8dc"],["/post/cju8j3nc6000qrw5o2k1hg5w0/index.html","fef3430f4fba49cd2f732e86355a8b7c"],["/post/cju8j3nce000srw5oocuqrsoc/index.html","aa48ed6d40496c477832e7f9a10838ed"],["/post/cju8j3ncg000urw5otjwyprec/index.html","36179640ac699fbe658993cd64c3dfe0"],["/post/cju8j3nci000xrw5ovyffoz1t/index.html","5e458c029b43ad553d276ab7901586c5"],["/post/cju8j3ncj000yrw5ofxvym37t/index.html","8aadc25a030dd911a680b1c1804cc2e4"],["/post/cju8j3ncm0010rw5ou1u1ckl3/index.html","ca7b30d2bca85e6b4c44e218d60067d3"],["/post/cju8j3ncp0012rw5oubaief90/index.html","91f1e03633f6d0b9313456c943b5d1f9"],["/post/cju8j3ncr0015rw5o1l015kgx/index.html","9330918800cd34485e5bf0b0d1982779"],["/post/cju8j3nct0016rw5o6x768wwy/index.html","51b664e44e75caf8da39209308632080"],["/post/cju8j3ncv0017rw5odr13sdg6/index.html","11ae2db1c3bcda8af505785cd0bdbc7e"],["/post/cju8j3ng20039rw5omd56khvy/index.html","73c66355b806411adec24e38db04f549"],["/post/cju8j3nh5003brw5ozcpyt4ub/index.html","348c46811755e1345921fa327278575b"],["/post/cju8j3nh9003erw5odrbh1xi8/index.html","62582e0ba8b5c6ddd81da81b799a8af3"],["/post/cju8j3nhf003grw5ow07exlp0/index.html","386124de042b676688a74be1d5e5141a"],["/post/cju8j3nhi003irw5o712vcrqi/index.html","8fa47d07aec237befda916ce281cb596"],["/post/cju8j3nhm003lrw5og4inp5dz/index.html","962d2f79d57d01f601fc45b52088f6a0"],["/post/cju8j3nhq003mrw5okzc95lnq/index.html","33e888693a804313467063cdea606f86"],["/post/cju8j3nhv003orw5o0y0xpaf7/index.html","c996cc61daff82ffdc6d57ff4a9cc3b7"],["/post/cju8j3ni3003rrw5op8qrpktj/index.html","ecf115954eb78d8c108ce5544f6296cb"],["/post/cju8j3ni6003urw5o09ytuv08/index.html","b9d12f0ebc7c3d3824dad53c5d47fcc9"],["/post/cju8j3ni8003vrw5oz2bjts52/index.html","0b21d800311d3f7c13aceb405f91cf03"],["/post/cju8j3nie003xrw5oy1evde36/index.html","6eb3876f20c736ba5f277b4d95386e95"],["/post/cju8j3nij003yrw5ofry1at0j/index.html","23a291d3c79ff6816fe16a2f43633be7"],["/post/cju8j3nqy0054rw5o9uuoqgnz/index.html","d96e9c649a44d3dae52391c146cec7bd"],["/post/cju8j3nr10055rw5otj29m25q/index.html","4150a8c3d52a5cb11e9c624552e51a53"],["/post/cju8j3nr70057rw5ohidl29o6/index.html","0dd5fbade6832ee5e963561be60b2f8a"],["/tags/7-0版本/index.html","72ed191d10568ae6a55d4cef403a699f"],["/tags/JavaScript/index.html","02880793cf26f3abbd308c7bef6ed214"],["/tags/MongoDB/index.html","6a0b2841ccac95d3cb40ca975f1aaeb6"],["/tags/Nginx/index.html","c1a71892c301786c236c1dd8a95dc7a5"],["/tags/Node/index.html","b30d6b46879b99ce6dc6778b8c79011b"],["/tags/Node/page/2/index.html","0f8df5f8aed543883e6eae08e7929881"],["/tags/PWA/index.html","78523e9f35bdd3aacd134bbb1a6b6edc"],["/tags/Rx/index.html","591b2faa32befd0b501f7937e615a6c3"],["/tags/Tomcat/index.html","7141c11428eba691882504b580806c6a"],["/tags/autoprefixer/index.html","90675e6b8603ffee63140364a495f0de"],["/tags/babel/index.html","32ad86ad86404e0864acd0afde66da93"],["/tags/chromeApp/index.html","82e1e97bd3aa7d16fd3f05ea597bbf34"],["/tags/css/index.html","f811336e5a95bb06c9670e7827457415"],["/tags/docker/index.html","65b392191681006f07e1fe3fdc4c89fc"],["/tags/express/index.html","feb50ae419c1c8fe3774bf172359d3a7"],["/tags/flex布局/index.html","b6fb6c1f455682fa5b1772812717ed93"],["/tags/fs/index.html","1abd6e832b042c858e87e4eb4a4df7b5"],["/tags/github/index.html","2ec77171daf34c448f9246a2aa011b75"],["/tags/hexo/index.html","79607efc3ecc3d49a3a0c139b8e26dc9"],["/tags/iconfont/index.html","ed72b943191a89fbd81ae38c9d0c3b26"],["/tags/iframe/index.html","64b2e97feb4d9073548b525b835d8e1d"],["/tags/img/index.html","770c51b51469074eccebd7a85cb6be64"],["/tags/index.html","ddc0e133c812e0217264732d73710be1"],["/tags/ios/index.html","eef5815c0bcd1aee45d318466573f778"],["/tags/java/index.html","18993bd2586f63c5b56e6fb73707d972"],["/tags/jwt/index.html","fa4657c1171a471c39615fba8ed90f70"],["/tags/logrotate/index.html","c039cc1309b09107b238435782a67d88"],["/tags/loop/index.html","c5c29760d1445649568cc5d9a7458012"],["/tags/mac/index.html","e7548b253a274f679806731d570373be"],["/tags/npm/index.html","429518b3d27b79bbf54772c613a44a31"],["/tags/observable/index.html","f699355cd8033c72f38149bfd6d29f88"],["/tags/path/index.html","f3f1c628e2a0e4e9fac81cab740d5a9c"],["/tags/polyfill/index.html","f99c8c25bc83e0b7bebe6579fed30a87"],["/tags/postcss/index.html","7272d37d6aae60ec4e1e6b6156eedb71"],["/tags/postman/index.html","bebe1dd3177bfa9721b232106b8f1c5b"],["/tags/session-cookie/index.html","595586347b4f32ef9b7c731d9e4f027c"],["/tags/session/index.html","f02edc9255f00946938add05f7e2e22e"],["/tags/shrinkwrap/index.html","90d7d58777d5e47fe1a5f1ce250f0432"],["/tags/this/index.html","c244c8043b1bb9c755c101c91166328b"],["/tags/webpack/index.html","61621fde49e7b6e7b565fb7da192a6f2"],["/tags/—-ES2019-—-ECMAScript/index.html","b7653068f92f07ccf9850605f312c51a"],["/tags/代理/index.html","1190c014c179dee21fe79f609f9f0a82"],["/tags/代理服务器/index.html","b9292704c0aa5fa83e4727664ee49d9e"],["/tags/代码生成图片/index.html","6d4e97b14592e6d5b5c200a2f77dbb82"],["/tags/入门/index.html","bec1d52348e0302099e28f84facf9b6e"],["/tags/博客搭建/index.html","ef4af6e82efd6178b6666f8da372be38"],["/tags/工具/index.html","ab30a4de84e4bebb1b6df3a33dfdab9a"],["/tags/异步/index.html","82757685fbfb4432db2775cd71522849"],["/tags/循环/index.html","dac61cf617c5155c997b49b1b402bddc"],["/tags/按键符号/index.html","418483bff008b4fa568e14eb358e0c12"],["/tags/文档阅读/index.html","27f47a7dce1bd7f29dd076fa3d3993c1"],["/tags/服务/index.html","b40358f11c1d857bdfdc5acbef3739c1"],["/tags/服务部署/index.html","f0fcb2a7509beb13f9910414e4e6f17c"],["/tags/杂文/index.html","58640b92794d5b1388466836aaf400f4"],["/tags/经典问题/index.html","e07f079458f72e7e819b4ff8687ed5e4"],["/tags/编程基础/index.html","77bf81f7dea90a148e8e9460a77f5f82"],["/tags/编译器/index.html","29ad1157f233f113c8b69e0e8e9f2681"],["/tags/联表查询/index.html","45a10bc29332bb92a618dc7800ffef15"],["/tags/路由/index.html","0965e8245fa1bf97337875b0584ef9d9"],["/tags/运维/index.html","43fb72b300be4c1ba28fa3e1d0f587b3"]];
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







