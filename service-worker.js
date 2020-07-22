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

var precacheConfig = [["/404.html","abba6874ac953408f34e5bb7092d28f6"],["/about/index.html","c354d41561cf3da73ae8de2001fae034"],["/archives/2017/03/index.html","4d726046129526181ef9072173eace63"],["/archives/2017/04/index.html","93fbf8c6ae85d5fde63a6f9cba239b7d"],["/archives/2017/05/index.html","4fde7134e107e2f2180298f3ecdd551c"],["/archives/2017/07/index.html","9d1fc2682952b15ab44bfe2d447b4282"],["/archives/2017/08/index.html","8ccf76a8c8c95960df3a7b165a0f04b7"],["/archives/2017/10/index.html","7dcafd81e482ab707898ea7d3dcefefa"],["/archives/2017/11/index.html","26b7c8cd8c2722b999bbc77ce721f4a2"],["/archives/2017/12/index.html","f8e0a8550cc505aec213527f501e4e23"],["/archives/2017/index.html","fd1f20c6fdbbd6a52d22bcd277bf73da"],["/archives/2017/page/2/index.html","6da5ba25e73ba97c1222df2fd8b64755"],["/archives/2017/page/3/index.html","436cc510531118d70758decfe21b3cbf"],["/archives/2017/page/4/index.html","a78ecd7efe9de8abf69b380fedbc2f26"],["/archives/2018/02/index.html","5cc6939db9c62db8db678e2e41002caa"],["/archives/2018/03/index.html","2e0a3040c3e75894c617c65c1f167b93"],["/archives/2018/05/index.html","e18436c2f125cdb4af94524c8d514687"],["/archives/2018/10/index.html","c08c28cc7d238cb5b006eab91a2822f5"],["/archives/2018/11/index.html","2927942da3239cbed0d7f16ac3f6d3d1"],["/archives/2018/12/index.html","df3ec9631c06021a474a8a326f5afe08"],["/archives/2018/index.html","c6e583def1942b0d15fb22a7a97ceafc"],["/archives/2018/page/2/index.html","bc5c34595dcf91a7d9d8cba19b8b2a13"],["/archives/2018/page/3/index.html","0d516a05b050378c5657f46e606884b2"],["/archives/2018/page/4/index.html","db360702de292d89efb83d003afdc5c1"],["/archives/2019/01/index.html","bafae0d377f94a302dbb86d43e2aa798"],["/archives/2019/02/index.html","c6da3777fe31097eb8dc3d67dc7e5a49"],["/archives/2019/03/index.html","86b472ee1b8d725f2d2d0e60356cb65f"],["/archives/2019/04/index.html","684e7788f8f0f14d4bca24b171f68a2d"],["/archives/2019/05/index.html","61b55c970511cc78fba92ea8741c72ec"],["/archives/2019/08/index.html","7cb442dfcc7ed2f6534c7a8dafcb02b0"],["/archives/2019/index.html","b71d3693d26bbf17e23486f00846e4c4"],["/archives/2019/page/2/index.html","10116eeb31f1e6d68ece4f3e46e299b8"],["/archives/2020/07/index.html","aeeef5a4090fe799829ff0e824140e1c"],["/archives/2020/index.html","9b12f42f6548f566891c2e7a13be8dc6"],["/archives/index.html","9e975044a52a902ceecf88455201c559"],["/archives/page/10/index.html","b10a3db3e1c07f9743f98804663db0cc"],["/archives/page/2/index.html","ca8a259c826e4ece97c0f6b29e6e16ec"],["/archives/page/3/index.html","4b1a79a3ced35fa024e75674fc5aae3c"],["/archives/page/4/index.html","26688af9d3346a44ae4009099ce3fd4b"],["/archives/page/5/index.html","0984ef328993e12c5d8ab19b7ed58e46"],["/archives/page/6/index.html","e5120975aa24a1507dc3e5a735943426"],["/archives/page/7/index.html","561ef07325f04f62f969b15961da0557"],["/archives/page/8/index.html","53bdc2d7b69212001f49218e3dc47488"],["/archives/page/9/index.html","1cab36042bfcfa984812965410e20a0a"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/Nginx/index.html","6f5d6d5f401a0a9c4ffad9cf79702472"],["/categories/RxJs/index.html","a49667acb3d5fb2c12d01ce68d79a139"],["/categories/docker/index.html","3d33a4fa8bdfe9abb03d6c2f94272c65"],["/categories/hexo/index.html","5659d01df129c6345ad73451541eeddc"],["/categories/index.html","83409263ca5341157663f91f378f72a3"],["/css/main.css","544facd2aa14f03e2b30086f74e943a6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","1970386fd3233bf8c431f42ffa882371"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.png","e923280a0e100b477c6ee7b27ee6b507"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon.png","b184dec9f49ad89c2dc29b70f185232d"],["/images/icons/icon-128x128.png","53eb2b5eb79e9dfad6bef7bd7c3872e0"],["/images/icons/icon-144x144.png","4f8ab9115d84645876e164e823e5350f"],["/images/icons/icon-152x152.png","2aed688ce877ef8717148849411abc37"],["/images/icons/icon-192x192.png","9e813df7d11b1a4e0c47a79ef18ca5be"],["/images/icons/icon-384x384.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-512x512.png","3d6cf83f891e68b00883b9cef870d0c9"],["/images/icons/icon-72x72.png","fc708903e21bb584a387ce1eb0ee393b"],["/images/icons/icon-96x96.png","d6f470f56b38244b36e8848c48975ba2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/upyun_logo.min.svg","10dff70c5fd812191f8fe6e7d9d54fc7"],["/images/wechatpay.png","91938b3618578b3ba66a67bfc344b587"],["/index.html","f172603d3291627d6b897ed46a3b91c0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a7af8f923c31f6e47c11afe673aee5fd"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","b024df38d355fd34fe8a61ac6c622bc3"],["/page/2/index.html","01a8f317ad1b4e43f36c690c03f61c99"],["/page/3/index.html","299e48b8d927effd63a4d4d69548cb1f"],["/page/4/index.html","a02a55eddd7acc0fc127aa497bff2bd4"],["/page/5/index.html","6a41c0080e0736921a5cbf5b13818189"],["/page/6/index.html","2b42bf364357f8b1276228be786d3b06"],["/page/7/index.html","929b41d3546d0426411b815727369c92"],["/page/8/index.html","ef0ac5ddddf579f0c6c5ca7ad2a4878e"],["/page/9/index.html","f153abf778072612194767558a7ca99c"],["/posts/12fd/index.html","a79b544d176e190b78f13083d44d7270"],["/posts/1d4e/index.html","c3e7f8bd89f58a2a00fafe9af23f2970"],["/posts/232a/index.html","0b34f1abe3697be10643e56c865f1fa8"],["/posts/2465/index.html","6c1c8915702636b5f9dacf640295ea2c"],["/posts/25df/index.html","94232c67a341bd30646f5dda3b76d795"],["/posts/25f4/index.html","09fcb0dc0943ab82926384fd237f95c9"],["/posts/26fe/index.html","ceaa85b0b24d6a7f40cec8ec7a8af44a"],["/posts/289d/index.html","c0ffd3e936921d977cd35388c5e80bdb"],["/posts/2b83/index.html","4b43aa5833f98450be67f3cd3514aec8"],["/posts/3b3f/index.html","2f59360c5162961248f1bbb73a50cd0c"],["/posts/3be7/index.html","9ed8605c62d679a2b00d236dc4fa9474"],["/posts/3d25/index.html","d4b27eaea9bfc09f860faeb9e36c7850"],["/posts/435b/index.html","891dcfc8682d7ee7496f7a80cd030fa7"],["/posts/52b0/index.html","b0acb655e18efcd98f35dc1efe85cdc6"],["/posts/5389/index.html","fd2e1d97d282ac2cb8d39dfcda36b5cc"],["/posts/61a1/index.html","75f0d5ad645568e442fe80f987c1e3bc"],["/posts/61f4/index.html","4f0819544a01fcff0bd5a853826e4c81"],["/posts/6a81/index.html","78f5000f9a2c116db98baf40354196d0"],["/posts/7117/index.html","a9b93e1eaabcfbeb7927460eff5306f9"],["/posts/72a3/index.html","1db4823311387e3f7a2f759f7c0b00d8"],["/posts/7a8a/index.html","37106d8e43b6ef09cd54cb34d062e0b9"],["/posts/7f0b/index.html","2777fd9e3152f79222aae105ddb8f2a1"],["/posts/7ffc/index.html","c7bcbec524731d8a491325f83a171396"],["/posts/80bb/index.html","89dd91eb54d3b61430d2b7af94fb6428"],["/posts/82bb/index.html","6635bf6a5db99f997c938cb351235c5d"],["/posts/8e89/index.html","b139a5508e26df0c43afccfc08bfbad5"],["/posts/9295/index.html","6e9cba00187b52b0634e0569ffdc8bf9"],["/posts/a5bd/index.html","6da233eed32b1095e18a93a1e1e54ab4"],["/posts/a5ff/index.html","46a4de7a9d1a098777f249bfadb9b80e"],["/posts/a927/index.html","cd4c433459698e7178cf46e1fc2c7df6"],["/posts/a9a9/index.html","dd7fa2a8c530066939af23780d086a52"],["/posts/aaba/index.html","4d0d4bec0ba4939071fe9b312db97736"],["/posts/aadc/index.html","82130bf7c6b4ee806d92398783d03015"],["/posts/b2fd/index.html","2eb53a6d629d4b1502c29aa1a35168fa"],["/posts/b5c3/index.html","5d6d90c2d62674e4c06db0ff0b2c68bc"],["/posts/bb9f/index.html","f169c1e28b45c6c80eaa2bc4848acec9"],["/posts/c769/index.html","7bb9804a08468ad715dd59b18d02f081"],["/posts/c92b/index.html","f76032157e700b05489f480e093cefcd"],["/posts/c953/index.html","71a2dcd1a269c1eb9d4ecd90f38884a7"],["/posts/d0c9/index.html","79e860ac5d0a93ed0e70af83812ee773"],["/posts/d267/index.html","390a102f01f4d6f6caf9f0b43a0479e9"],["/posts/db53/index.html","bc7d5e7d2f02243acb32f9fdd32d9d80"],["/posts/df50/index.html","9303a633d981c9e2c71f0db9d22e9512"],["/posts/e874/index.html","9b1b63d7a3d75467d9a4fdb52a2b3927"],["/posts/ee16/index.html","97e7dcb189e4e2d264e0ab688d9b284c"],["/posts/f37e/index.html","12bc43e95f9ceb66256d282362fe078c"],["/posts/f5d4/index.html","f62aa3122ade474a68de4b9fe808b963"],["/posts/f82c/index.html","fb90b6df2ce4d9ad8a1d26a5c6c80c25"],["/tags/7-0版本/index.html","b3bff8d47f095fc2a7311c0c3afb2932"],["/tags/CDN/index.html","534d9fac8a9e531a449ec5c7eebe6ae0"],["/tags/Context/index.html","11e527dc14dc011507234060aeb8a03d"],["/tags/JavaScript/index.html","9aec7d0534c7a8ac6a564fc6b2c66992"],["/tags/MongoDB/index.html","1b36ac0c77ee0d179f0a4656008ac4f8"],["/tags/Nginx/index.html","a1665b481906860d011a8842593083bf"],["/tags/Node/index.html","d60a85e01625bcbc3d1d7d98e9079380"],["/tags/Node/page/2/index.html","f7eb1174bd0216a378e8f1b45c5f435c"],["/tags/PWA/index.html","cdbc00aaf9c4f198ca43acebe9a45485"],["/tags/RxJs/index.html","433f1d7beab94e402c305761cd3d24ef"],["/tags/Tomcat/index.html","51fd4f31bb4b4c6831f9239b86167c1e"],["/tags/abbrlink/index.html","ea09ecc66dc8c5cd9fb821dfde87739e"],["/tags/autoprefixer/index.html","c6eefd5aefb5927e132eab703b99b565"],["/tags/babel/index.html","200c70786361dd437873bca7fb102f4d"],["/tags/chromeApp/index.html","2ee9a4484087e358318237ea24bcbb89"],["/tags/css/index.html","f9279886ff9d28daa65f60f8e418418d"],["/tags/docker/index.html","2ac5bc12b172ae1c2046339faf90eb3a"],["/tags/express/index.html","0727c4b62c06117ce7614edc242ea342"],["/tags/flex布局/index.html","0396fd3b56fa451a2f5a0559d6413f0e"],["/tags/fs/index.html","76cd8cf4bf3638af6a5fb4c81c023d95"],["/tags/github/index.html","9b19c3f0d508fcef96356887b09f89a2"],["/tags/hexo/index.html","f0040065842c2b4127b1264fc6e9562d"],["/tags/iconfont/index.html","93f06b4e5f1aab2e95c75fac70b95004"],["/tags/iframe/index.html","2e41af87e061693e362d196a7698334b"],["/tags/img/index.html","279ada8face8e49c43db69efc010e7a8"],["/tags/index.html","28c860d349903e8f8c47cf02413fd799"],["/tags/ios/index.html","7ea6c997712b1af2162b3185c8fb1a7e"],["/tags/java/index.html","71504f52eb22c8310c8f277f425831ca"],["/tags/jwt/index.html","dea5f5e3da754a6fe3fb548481f18b1b"],["/tags/leancloud/index.html","fbb3620599e0b6587761b19f61b20dcc"],["/tags/logrotate/index.html","7a2f733fcaac332372c43f84a298fd89"],["/tags/loop/index.html","3d96d0df6882a000c31c66e560490fde"],["/tags/mac/index.html","79e58c765fce3f72df55b48656cc00ac"],["/tags/npm/index.html","0fb65d01407e69cb7bd51493e063a998"],["/tags/observable/index.html","bc2789fdb5ecb5ea16988aa80550b911"],["/tags/path/index.html","9c5bff6e9df02f016236e3a86163d1c7"],["/tags/polyfill/index.html","1e8ca28d9078a2330c49284e850c007c"],["/tags/postcss/index.html","2f8eb9289309f5996d7435d25a71b102"],["/tags/postman/index.html","cce4789656171dea8ae1362f3305d083"],["/tags/react/index.html","c20537fd894de914e399617354746245"],["/tags/session-cookie/index.html","0b1311a3ced37840ec6acf72704e84ff"],["/tags/session/index.html","bb7b5f61f4bef97cc186b2077fef4e27"],["/tags/shrinkwrap/index.html","65efdeb0790244e9206040d7484b5675"],["/tags/this/index.html","bd003d1e3efc0044788f21d6ae122e43"],["/tags/webpack/index.html","d626ba61753db3e681745539e522810e"],["/tags/—-ES2019-—-ECMAScript/index.html","9d734c0462563f9b99016c6bc7352f85"],["/tags/代理/index.html","687ae2d2255205dbdcbe57d4fd4be8f7"],["/tags/代理服务器/index.html","9d11c5e2852880c00020ce653f89dea8"],["/tags/代码生成图片/index.html","1ef934c02f6d2b9710846f9fdbe9f507"],["/tags/入门/index.html","d9b7fc020d431ef0eb90a7278049a601"],["/tags/前端数据管理/index.html","c8995095fa42d3f37a70d199f3d6422b"],["/tags/包管理/index.html","810a5bbcd049a2614ed8c2236a95b692"],["/tags/博客搭建/index.html","7581b614c10c2cba196c80ea0db96807"],["/tags/又拍云/index.html","519b1839f0dcb3b28bb305ac66d1f75b"],["/tags/图床/index.html","66e11a805d9987b7e3f30db44a5d2724"],["/tags/工具/index.html","513d3c9aaadb498d7bb66737090ed401"],["/tags/异步/index.html","3eab2d5228ce7f7e54ed6843bea20dd9"],["/tags/循环/index.html","252cb65bd4db3935ce4d0663e0bd8744"],["/tags/按键符号/index.html","a1a0cf784b27a4a0204e35c44face4fb"],["/tags/换电脑/index.html","0692b25b9a9f6ea6faad0ccc52a72808"],["/tags/文档阅读/index.html","c89c2ee4e0477d126474c9326085dc91"],["/tags/日常/index.html","be6bdc8b5d352bd73261479dfca9341a"],["/tags/服务/index.html","bfc3513a428c59c0be64f6e6e923b6e4"],["/tags/服务部署/index.html","ca14f415a50ecae32e9a4ca2c4561ee5"],["/tags/杂文/index.html","4e438dd80a744bbc99e6038673833469"],["/tags/框架选择/index.html","32d9fc364762682729bb9028205a47c0"],["/tags/模块/index.html","ed5134338f37b291277268138bc87702"],["/tags/正则表达式/index.html","d328a2f5369d28caaaf682c9740ef7cf"],["/tags/爬虫/index.html","14fe32373f47d5bbe3ad42a43d88e6ac"],["/tags/经典问题/index.html","11929ca41658ad8876901d8fd6f434be"],["/tags/编程基础/index.html","582c943fb81002dc56a2eedf61e74505"],["/tags/编译器/index.html","9755dc1be185e2aea5601987239cf90e"],["/tags/联表查询/index.html","f7ed2e0dd41671e62b7c2d3e4c71ba59"],["/tags/路由/index.html","3712ac1a4a85a059058e203727da5a40"],["/tags/运维/index.html","3b253313b1f72ce51e015040a2b62cd4"]];
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







