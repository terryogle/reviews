/*!
 * HealthyLine Outlet — Verified eBay Reviews Widget v2.0
 * Universal 1-script embeddable widget (Shadow DOM isolated, zero dependencies).
 *
 * 1-Line Universal Embed (works on ANY site — WordPress, Elementor, Shopify, Tilda, Webflow, HTML):
 *   <script src="https://YOUR_GITHUB_LOGIN.github.io/hlo-ebay-reviews/widget.js" defer></script>
 *
 * Optional URL params on <script src=".../widget.js?layout=carousel&autoplay=true">
 * OR optional container <div> attributes:
 *   <div class="hlo-ebay-reviews" data-layout="carousel" data-autoplay="true"></div>
 *
 * Layouts:
 *   "carousel" (default) — Interactive Homepage Slider with filters, drag-scroll, clickable review modal & "All Reviews" drawer
 *   "showcase"           — Full-page 3-column grid with live search & pagination
 *   "badge"              — Compact Product Page trust pill that opens the full reviews modal
 */
(function () {
  "use strict";

  const capturedCurrentScript = document.currentScript;

  if (window.__HLO_EBAY_WIDGET_V2__) {
    if (typeof window.HLOEbayReviewsInit === "function") {
      window.HLOEbayReviewsInit();
    }
    return;
  }
  window.__HLO_EBAY_WIDGET_V2__ = true;

  function findWidgetScriptEl() {
    if (capturedCurrentScript && capturedCurrentScript.src) return capturedCurrentScript;
    const scripts = document.querySelectorAll('script[src*="widget.js"]');
    return scripts.length > 0 ? scripts[scripts.length - 1] : null;
  }

  const SCRIPT_EL = findWidgetScriptEl();

  function parseScriptInfo() {
    if (!SCRIPT_EL || !SCRIPT_EL.src) {
      return { baseUrl: ".", params: new URLSearchParams() };
    }
    try {
      const u = new URL(SCRIPT_EL.src, window.location.href);
      const baseUrl = (u.origin + u.pathname).replace(/\/[^/]+$/, "");
      return { baseUrl, params: u.searchParams };
    } catch (e) {
      return {
        baseUrl: SCRIPT_EL.src.replace(/\/[^/?#]+(\?.*)?(#.*)?$/, ""),
        params: new URLSearchParams()
      };
    }
  }

  const SCRIPT_INFO = parseScriptInfo();
  const BASE_URL = SCRIPT_INFO.baseUrl;
  let cachedDataPromise = null;

  const INLINE_DATA = {"store":{"name":"HealthyLine Outlet","ebay_username":"healthylineoutlet","ebay_profile_url":"https://www.ebay.com/fdbk/feedback_profile/healthylineoutlet?filter=feedback_page%3ARECEIVED_AS_SELLER","ebay_store_url":"https://www.ebay.com/usr/healthylineoutlet","website_url":"https://healthylineoutlet.com","member_since":"Feb 2013","feedback_score":1305,"total_seller_reviews":180,"total_all_feedback":1579,"items_sold":"3,100+","positive_percent":100.0,"top_rated_seller":true,"dsr":{"accurate_description":5.0,"shipping_cost":5.0,"shipping_speed":5.0,"communication":5.0},"last_synced":"2026-11-05T12:00:00Z"},"catalog":[{"id":2332537,"name":"American Choice 7428 Mat Best Deal","slug":"american-choice-7428-mat-best-deal","sku":"AC-Mat","permalink":"https://healthylineoutlet.com/product/american-choice-7428-mat-best-deal/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/American-Choice-Mat-600x600.jpg","price":180.0},{"id":2332533,"name":"TAO 4018 Chair with PEMF Best Deal","slug":"tao-4018-chair-best-deal","sku":"TAO-Mat","permalink":"https://healthylineoutlet.com/product/tao-4018-chair-best-deal/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/11/Tao-4018-1000x1000-1-600x600.jpg","price":250.0},{"id":2332508,"name":"Mesh JT 7224 Mat Light Best Deal","slug":"mesh-jt-7224-mat-best-deal","sku":"MESH-Mat-Best-Deal","permalink":"https://healthylineoutlet.com/product/mesh-jt-7224-mat-best-deal/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/11/1000x1000-1-600x600.jpg","price":100.0},{"id":2332451,"name":"Amethyst 1818 Far Infrared Heating Pad","slug":"amethyst-far-nfrared-heating-pad","sku":"TAO-Mat-1818","permalink":"https://healthylineoutlet.com/product/amethyst-far-nfrared-heating-pad/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Tao-1818-1000x1000-1-600x600.jpg","price":80.0},{"id":2332419,"name":"Portable Heated Gemstone Pads with Power-Bank","slug":"portable-heated-gemstone-pads-with-power-bank","sku":"MESH-Mat","permalink":"https://healthylineoutlet.com/product/portable-heated-gemstone-pads-with-power-bank/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2022/03/Portable-Series-600x600.jpg","price":65.0},{"id":2332301,"name":"American Choice Mat","slug":"american-choice-mat","sku":"AC-Mat","permalink":"https://healthylineoutlet.com/product/american-choice-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/American-Choice-Mat-600x600.jpg","price":65.0},{"id":2332180,"name":"SOFT Mat","slug":"soft-mat","sku":"SOFT-Mat","permalink":"https://healthylineoutlet.com/product/soft-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/SOFT-7224-1000x1000-1-600x600.png","price":160.0},{"id":2332055,"name":"Rainbow Chakra Mat","slug":"rainbow-chakra-mat","sku":"Rainbow-Mat","permalink":"https://healthylineoutlet.com/product/rainbow-chakra-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Rainbow-7428-1000x1000-3-600x600.jpg","price":200.0},{"id":2331990,"name":"TAO Mat","slug":"tao-mat","sku":"TAO-Mat","permalink":"https://healthylineoutlet.com/product/tao-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/TAO-7224-1000x1000-1-600x600.png","price":55.0},{"id":2331950,"name":"Mesh JT Mat","slug":"mesh-jt-mat","sku":"MESH-Mat","permalink":"https://healthylineoutlet.com/product/mesh-jt-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/MESH-1000X1000-600x600.jpg","price":60.0},{"id":2331903,"name":"Platinum Mat","slug":"platinum-mat","sku":"Platinum-Mat","permalink":"https://healthylineoutlet.com/product/platinum-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Platinum-1000x1000-1-600x600.jpg","price":400.0},{"id":2331850,"name":"TAJ Mat","slug":"taj-mat","sku":"TAJ-Mat","permalink":"https://healthylineoutlet.com/product/taj-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Taj-7224-1000x1000-1-600x600.png","price":140.0},{"id":2331738,"name":"Jet Mat","slug":"jet-mat","sku":"Jet-PhP","permalink":"https://healthylineoutlet.com/product/jet-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/09/Jet-1000x1000-1-600x600.jpg","price":170.0},{"id":2330263,"name":"Mesh JT Mat 3220 – Light (Worth $97)","slug":"mesh-jt-mat-3220-light-free-with-purchases-of-750","sku":"014-mJT-3220-L-2","permalink":"https://healthylineoutlet.com/product/mesh-jt-mat-3220-light-free-with-purchases-of-750/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2018/05/MESH-3220-Light_2-600x600.jpg","price":83.0},{"id":2330235,"name":"Carrying case","slug":"carrying-case","sku":"","permalink":"https://healthylineoutlet.com/product/carrying-case/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2024/06/Carrying-case-hlo-600x600.jpg","price":1.0}],"reviews":[{"id":"ebay-3306e2c6ce","rating":5,"text":"Absolutely fantastic and arrived better than expected! I’ve previously used the taj mat and have been wanting to try out the rainbow mat for quite some time. This thing is super well built and comfortable, I’m extremely impressed with the quality of healthy line mats. They work! Buy one and start healing!","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Pain Relief & Sleep","PEMF & Infrared"],"photo":"https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/UHgAAeSw9x1qvDtA/$_1.JPG?set_id=8800005007","seller_reply":null,"item_title":null,"product":{"name":"Rainbow Chakra Mat","slug":"rainbow-chakra-mat","url":"https://healthylineoutlet.com/product/rainbow-chakra-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Rainbow-7428-1000x1000-3-600x600.jpg"},"featured":true},{"id":"ebay-5eca67ad46","rating":5,"text":"Such a great deal! These PEMF TAJ mats are a Godsend for chronic trigger point flare ups spanning from head to lower back. I’ve never slept or felt better. This is my second one. My husband stole my first mat, so I had to get a new one. Healthyline’s “used” mats are legit like new down to accessories & the original box & protective plastic the mats come in. Highly recommend!","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Pain Relief & Sleep","Like-New Condition","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":null,"product":{"name":"TAJ Mat","slug":"taj-mat","url":"https://healthylineoutlet.com/product/taj-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Taj-7224-1000x1000-1-600x600.png"},"featured":true},{"id":"ebay-38e5402ad0","rating":5,"text":"Amazing fast shipping, item is fantastic, better than expected, thank you so much for the opportunity and will definitely recommend! Top notch! 😁","buyer":"Verified eBay Buyer","verified":true,"period":"Past month","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":true},{"id":"ebay-d0eaf27000","rating":5,"text":"jt mesh mat is working well, full body chronic pain condition with fibro and muscular/bone degenerative condition as well as sciatica/scoliosis etc .... and i use the healthyline pad 8-10 hours everyday at 145*, has a penetrating heat without the \"burn\" or sting, helps with my restless leg, helps keep legs and lower back loose for when i have to actually leave the house, the relief is real and this heating pad is a must have for anyone who relates to all that.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Like-New Condition","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":null,"product":{"name":"Mesh JT Mat","slug":"mesh-jt-mat","url":"https://healthylineoutlet.com/product/mesh-jt-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/MESH-1000X1000-600x600.jpg"},"featured":true},{"id":"ebay-56c8668d25","rating":5,"text":"The Item was like new and it came in the original box and packaging. The customer service was great. I had several questions which they responded to quickly and they followed up to ensure that everything was perfect and I was completely happy with the product.","buyer":"7***1 (64)","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Customer Support"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Far Infrared Heated Memory Foam Pillow with PEMF Photons for Pain","product":{"name":"Far Infrared Heated Memory Foam Pillow (PEMF + Photon)","slug":"memory-foam-pillow","url":"https://healthylineoutlet.com/shop/?s=pillow","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Tao-1818-1000x1000-1-600x600.jpg"},"featured":true},{"id":"ebay-f49fbb1078","rating":5,"text":"If you are on the fence about buying, please take my word for it and make the buy! I received a message with pics of my mat and shipping label, and from pressing \"buy now\" to having the mat in hand was literally under 48 hours - amazing!! Mat came with brand new controller and manuals, plus, the trade-in offer makes this a no brainer. The mat design itself is wonderful - much more than just a heat mat. It is a truly luxurious experience. Highly recommend this seller and their products!!","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Like-New Condition","Fast Shipping","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":true},{"id":"ebay-69bf5fe7b5","rating":5,"text":"I received my HealthyLine mat quickly from this vendor, it was in good condition with all working parts, carrying case and mat cover. I've been using it for about two weeks to make sure it's working properly. I had a little trouble adjusting to the controller and asked a question about it to HealthyLine Outlet, which was answered promptly. All in all I'm quite satisfied with my purchase and would recommend HealthyLine Outlet to anyone who wants to try PEMF at a reasonable price.","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Pain Relief & Sleep","Like-New Condition","Fast Shipping","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":null,"product":{"name":"Platinum Mat","slug":"platinum-mat","url":"https://healthylineoutlet.com/product/platinum-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Platinum-1000x1000-1-600x600.jpg"},"featured":true},{"id":"ebay-0749b3f193","rating":5,"text":"Came looking like a brand new mat! Works well and gives me the best rest! I see significant improvement in my pain caused by scoliosis and spina bifida. Arrived right on time. Highly recommend.","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Pain Relief & Sleep","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":true},{"id":"ebay-b5d62a27fc","rating":5,"text":"BETTER THAN DESCRIBED / VERY WELL PACKAGED / COULD NOT TELL FROM A NEW ONE / I WAITED TWO MONTHS TO REVIEW IN ORDER TO KNOW HOW WELL IT WORKS, IT HAS ELIMINATED MY SCIATIC NERVE PAIN AND THE ARTHRITIS IN MY NECK, I HAVE FULL RANGE OF MOTION NOW. / BEST PURCHASE EVER / GREAT SELLER AND BEST PRICE.","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Pain Relief & Sleep","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":true},{"id":"ebay-1ef10785e1","rating":5,"text":"Someone call the fire dept. This seller is on fire. Great Product and just as described with lightning fast delivery. I really love these products and sleep with the FIR mat each night... to help with detox and health. Never put that fire out!","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Pain Relief & Sleep","Fast Shipping","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-d5f243d3f8","rating":5,"text":"Perfect! Great communication, packaging, speedy delivery and matched description. Using it right now!","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Like-New Condition","Fast Shipping","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-f5ad3588f8","rating":5,"text":"Excellent! Super fast shipping, great communication, great product. My 2nd purchase, and every time has been flawless.","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Fast Shipping","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-324dc66e61","rating":5,"text":"Thank you for this beautiful product! Item was like new: manual and packaged beautifully. Item arrived expeditiously.","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-2fb68031d3","rating":5,"text":"I was astonished by not only the mat itself, but all that was included with it. And I want to say thank you very very much to HealthyLine Outlet for your great quality and service. I even received the package two days early. I slept on it for the first time last night and it seems I was asleep by the time my head hit the pillow. Superior sellers, and I will be back!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Fast Shipping","Customer Support","PEMF & Infrared"],"photo":null,"seller_reply":"Thank you!","item_title":null,"product":null,"featured":false},{"id":"ebay-c91a03a045","rating":5,"text":"If I could, I'd give this seller 10 stars! Both purchases I have made from them have been exemplary. I really am happy with my mat and my pad. Not only was it a pleasure opening the packages, there was a lot of care put in, along with extras I didn't expect. I am very satisfied and look forward to doing business with them again soon. Top Sellers!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":"Thank you very much! We are trying to make our customers happy and healthy! Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-25e6ce69f4","rating":5,"text":"Unit is just like new! Great seller support, I called for info, then hung up to send an email instead. Before I finished the email, seller had called ME to answer my questions. Great deal on eBay too!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-bcc4873aca","rating":5,"text":"Item arrived as described from recommended seller. A+","buyer":"t***o (988)","verified":true,"period":"Past year","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Far Infrared Heated Memory Foam Pillow with PEMF Photons for Pain","product":{"name":"Far Infrared Heated Memory Foam Pillow (PEMF + Photon)","slug":"memory-foam-pillow","url":"https://healthylineoutlet.com/shop/?s=pillow","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Tao-1818-1000x1000-1-600x600.jpg"},"featured":false},{"id":"ebay-f0ba18f50d","rating":5,"text":"5-Stars quality, condition, value, appearance, shipping. My daughter's back pain healed. tyvm","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Pain Relief & Sleep","Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-31c4395237","rating":5,"text":"Arrived quickly, & in perfect condition. Helpful communication from seller, with pictures of item shipped.","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Like-New Condition","Fast Shipping","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-18576abc14","rating":5,"text":"Very good condition and seller sent me helpful information - would purchase from them again!","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Like-New Condition","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-df9f18e001","rating":5,"text":"Great product, fantastic price! It works beautifully and seems like new, maybe even never used. The seller is straightforward with product details and I'm very pleased with the mat's quality and condition. Another plus is the speedy delivery.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-5c37d2396e","rating":5,"text":"If I could, I would give 10 stars. This was a refurbished item that arrived quickly, and in better condition than I could have imagined. It was like New... maybe it was. I am extremely pleased with ordering this item.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-da96c9c3f5","rating":5,"text":"For a used item, it arrived looking like brand new. Arrived very quickly. Dog laid on it already. Extremely glad to have located this seller and excited to have this product help my dog live better.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":"Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-0388be4382","rating":5,"text":"The best thing about this model is that it is small enough to move to different rooms, but big enough to do half my body length at one time. This truly works for a variety of conditions. This is an excellent well-made infrared mat for a great price.","buyer":"jacknjunior","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Mesh 3220 Tourmaline Jade Mat Negative Ions Spa Heat Therapy Pad","product":{"name":"Mesh JT Mat 3220 – Light (Worth $97)","slug":"mesh-jt-mat-3220-light-free-with-purchases-of-750","url":"https://healthylineoutlet.com/product/mesh-jt-mat-3220-light-free-with-purchases-of-750/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2018/05/MESH-3220-Light_2-600x600.jpg"},"featured":false},{"id":"ebay-15917ca1ea","rating":5,"text":"Easy to use well constructed healing mat. Great healing mat with multiple features. Quality product and easy to use.","buyer":"wshimer123","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Platinum 3220 Heating Pad with Changeable PEMF Wave FIR Photon Light","product":{"name":"Platinum Mat","slug":"platinum-mat","url":"https://healthylineoutlet.com/product/platinum-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Platinum-1000x1000-1-600x600.jpg"},"featured":false},{"id":"ebay-ae57fc4075","rating":5,"text":"Good product and great price. This gives me the chance to try this technology before deciding whether or not to purchase a larger more expensive mat.","buyer":"bend2585","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Platinum 3220 Heating Pad with Changeable PEMF Wave FIR Photon Light","product":{"name":"Platinum Mat","slug":"platinum-mat","url":"https://healthylineoutlet.com/product/platinum-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Platinum-1000x1000-1-600x600.jpg"},"featured":false},{"id":"ebay-fbb8d33f86","rating":5,"text":"great ebayer! fast shipping! highly recommended","buyer":"e***s (2317)","verified":true,"period":"Verified Purchase","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":"HealthyLine TAO Mat Amethyst Tourmaline Gemstone Heating Pad 72''x24''","product":{"name":"TAO Mat","slug":"tao-mat","url":"https://healthylineoutlet.com/product/tao-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/TAO-7224-1000x1000-1-600x600.png"},"featured":false},{"id":"ebay-9f6b6e9e9d","rating":5,"text":"Like new 'Bio Mat' with crystals in it. Easy to use, good discount from new price, free shipping and great service. Very dependable seller.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Customer Support","PEMF & Infrared"],"photo":null,"seller_reply":null,"item_title":null,"product":{"name":"SOFT Mat","slug":"soft-mat","url":"https://healthylineoutlet.com/product/soft-mat/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/SOFT-7224-1000x1000-1-600x600.png"},"featured":false},{"id":"ebay-0d5061c38e","rating":5,"text":"Mat appears brand new, came with clear and thorough instructions, works well for this whole family of athletes.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-048a4c501d","rating":5,"text":"Communication from seller was prompt and detailed about my order. Very helpful and kind with support if needed. Item in great condition and packed like new. Thanks so much!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-c85d68d366","rating":5,"text":"Arrived today, cannot wait to try this tonight. Actually received more than what was advertised. The mat covers are very nice. Well pleased with my purchase. Fast shipping. Thank you.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping"],"photo":null,"seller_reply":"Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-f7dbe41b54","rating":5,"text":"This purchase didn’t quite work out due to a delivery issue, but the company made it right and quickly, and I’ve had other orders from them shipped very promptly. I can recommend them without reservation.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-509107d4da","rating":5,"text":"Excellent communication and fast shipping. My mat was still in plastic and in perfect condition. Highly recommended seller. A+++","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Customer Support"],"photo":null,"seller_reply":"Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-aca98f2340","rating":5,"text":"THIS mat is amazing!! From the service, delivery and product... top notch!! I would buy from them again, in a heartbeat!!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Customer Support"],"photo":null,"seller_reply":"Thank you! Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-8e5555a0db","rating":5,"text":"Works perfectly, looks in brand new condition, seller communication top notch, and item received very quickly. Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-adafbefeed","rating":5,"text":"Wonderful seller! Excellent product, arrived in record time and in perfect condition. Purchase with confidence! Thank you so much!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":"Thank you for the feedback! Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-4ee6f2f2d9","rating":5,"text":"Great quality, in great condition, great value for the discounted price, and appearance is exactly as advertised. Happy customer here! Thanks again","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-1f26b8d71a","rating":5,"text":"Always a pleasure buying from you guys!! Amazing products that help heal. 🙏","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-a90e16851f","rating":5,"text":"I have used this brand for many years. I have also given these as gifts. An absolutely extraordinary product.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-25b1ed9872","rating":5,"text":"Quick ship. Very well packaged. As described. Both kinds of control remotes. Clean. Works as described. 2nd Mat purchased. Came with catalog. May get a 3rd Mat as a gift. Thanks","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-67e1e97bef","rating":5,"text":"Seller was great, love the item!! UPS delivered my package to a wrong address, and Seller was super responsive to me and contacted UPS immediately — whoever got my package dropped it off on my porch a couple days later!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-7fa289e44f","rating":5,"text":"This is pretty amazing! Great communication from seller, phenomenal product. Works great. I may order another. Pretty happy with it.","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-d513c3e481","rating":5,"text":"Prompt delivery and as described. I am pleased with the product and transaction.","buyer":"Verified eBay Buyer","verified":true,"period":"Past year","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-92c557f80d","rating":5,"text":"Well packed, great communication, product appears brand new!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-a831b7a757","rating":5,"text":"Item as described, looks brand new, great price, super fast shipping, would buy from this seller again","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-08a3470ffd","rating":5,"text":"Love it!!! It doesn’t have the new smell as I was hoping and it works perfectly! Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-64af942107","rating":5,"text":"Quick shipping, item even better than expected!! Thanks!! ✨ この度はどうもありがとうございました！とても素晴らしいお取引ができました。 ✨","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-70de7625f5","rating":5,"text":"On time delivery. I had a problem with the controller and they have addressed it with no hesitation.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Customer Support"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-54ba97c5e0","rating":5,"text":"Wonderful product and I am using it on myself as well as my Reiki clients on massage table. It provides a soothing penetrating warmth and a boost from the crystals included in the mat. I absolutely love the quality of this product and know I will get good use for many years to come.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","PEMF & Infrared"],"photo":null,"seller_reply":"Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-59f1d2c31c","rating":5,"text":"Absolutely LOVE IT!!! I can feel the healing effects! It’s AMAZING!!! Highly recommend!!!! 💕💕💕","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-c0113d9e78","rating":5,"text":"I absolutely love this product and I’m super thrilled to have it, thank you thank you thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-087c44afa7","rating":5,"text":"Thank you! Fast delivery and great value.","buyer":"n***7 (3583)","verified":true,"period":"Verified Purchase","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":"American Choice FIR Infrared Amethyst Heating Pad Pain Relief 74 x 28","product":{"name":"American Choice 7428 Mat Best Deal","slug":"american-choice-7428-mat-best-deal","url":"https://healthylineoutlet.com/product/american-choice-7428-mat-best-deal/","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/American-Choice-Mat-600x600.jpg"},"featured":false},{"id":"ebay-b6adfb9484","rating":5,"text":"Perfect thanks!","buyer":"m***e (474)","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Far Infrared Heated Memory Foam Pillow with PEMF Photons for Pain","product":{"name":"Far Infrared Heated Memory Foam Pillow (PEMF + Photon)","slug":"memory-foam-pillow","url":"https://healthylineoutlet.com/shop/?s=pillow","thumbnail":"https://healthylineoutlet.com/wp-content/uploads/2025/10/Tao-1818-1000x1000-1-600x600.jpg"},"featured":false},{"id":"ebay-884fe81696","rating":5,"text":"Amazing seller! Super fast shipping! A++++++","buyer":"Verified eBay Buyer","verified":true,"period":"Past 6 months","tags":["Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-185ef4bca6","rating":5,"text":"Fast. Correct. Penetrating Infrared heat.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","PEMF & Infrared"],"photo":null,"seller_reply":"Please enjoy!","item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0000","rating":5,"text":"If you are on the fence about buying, please take my word for it and make the buy! I received a message with pics of my mat and shipping label, and from pressing \"buy now\" to having the mat in hand was literally under 48 hours- amazing!! Mat came with brand new controller and manuals, plus, the trade-in offer makes this a no brainer. The mat design itself is wonderful- much more than just a heat mat. It is a truly luxurious experience. Highly recommend this seller and their products!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer","Matched to Models","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0001","rating":5,"text":"Seller was great, love the item!! But UPS was a nightmare, they delivered my package to a wrong address, the photo of delivery was not my porch, and then gave both me and the seller the run around while trying to get a case opened for the missing package. Seller was super responsive to me and contacted UPS immediately, the problem was all with UPS, and luckily resolved without them, whoever got my package took it upon themselves to drop it off on my porch a couple days later!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0002","rating":5,"text":"Item was ordered on 10/17. After not receiving it and making attempts to contact the seller, it was discovered that a technical mishap prevented them from sending it out by the original estimated shipping date. Customer Service did reach out to me to apologize for their error and rescheduled a new delivery; item was then received on 10/31. I appreciated the apology and their follow through; based on that I would recommend them to other buyers.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0003","rating":5,"text":"Edited: Item was received on 10/31. After reaching out phone calls and emails, I was able to arrange via Customer Service a new shipping date. Item arrived well packaged, in almost perfect condition and is working well. Thank you Customer Service for working with me to resolve this unfortunate issue and ensure that I received my item. After seeing how the company responded to this mishap, I would feel comfortable ordering from them again.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Pain Relief & Sleep","Verified Buyer","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0004","rating":5,"text":"Such a great deal! These PEMF TAJ mats are a Godsend for chronic trigger point flare ups spanning from head to lower back. I've never slept or felt better. This is my second one. My husband stole my first mat, so I had to get a new one. Healthyline's \"used\" mats are legit like new down to accessories & the original box & protective plastic the mats come in. Highly recommend!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Verified Buyer","Like-New Condition","Matched to Models","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":{"name":"HealthyLine TAJ Mat"},"featured":false},{"id":"ebay-scraped-0005","rating":5,"text":"Absolutely fantastic and arrived better than expected! I've previously used the taj mat and have been wanting to try out the rainbow mat for quite some time. This thing is super well built and comfortable, I'm extremely impressed with the quality of healthy line mats. They work! Buy one and start healing!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Verified Buyer","Matched to Models","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":{"name":"HealthyLine TAJ Mat"},"featured":false},{"id":"ebay-scraped-0006","rating":5,"text":"The Item was like new and it came in the original box and packaging. The costumer service was great. I had several questions which they responded to quickly to and they followed up to ensure that everything was prefect and I was completely happy with the product.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0007","rating":5,"text":"Someone call the fire dept. This seller is on fire. Great Product and just as described with lightning fast delivery. I really love these products and sleep with the FIR mat each night...to help with detox and health. Never out that fire out!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Verified Buyer","Like-New Condition","Matched to Models","Top Rated","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0008","rating":5,"text":"Thank you for this beautiful product! Item was like new : Manuel and packaged beautifully. Item arrived expeditiously.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0009","rating":5,"text":"As described. Well packaged. Timely delivery. Great price! Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0010","rating":5,"text":"Quick feedback, shipped quickly and product as advertised.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Verified Buyer","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0011","rating":5,"text":"Thank you for fast shipping and great service.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Top Rated","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0012","rating":5,"text":"Amazing seller! Super fast shipping!A++++++","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Top Rated","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0013","rating":5,"text":"Thank you! The product is as promised.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-scraped-0014","rating":5,"text":"Superb seller!A++++*","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Top Rated"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false},{"id":"ebay-outlet-0070","rating":5,"text":"Great condition, good price, and fastest shipping ever! Thank you.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":"Enjoy!","item_title":"HealthyLine TAJ Mat","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0071","rating":5,"text":"Good eBay merchant, Good comms. Rated 5 stars.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine AJT 8040","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0072","rating":5,"text":"It's a great mat! Got here fast and works great!!!! Love it!!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer","Matched to Models"],"photo":null,"seller_reply":null,"item_title":"HealthyLine AJT 8040","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0073","rating":5,"text":"Great Mat...Great Deal...Great Experience...Thank You!!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models"],"photo":null,"seller_reply":null,"item_title":"HealthyLine AJT 8040","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0074","rating":5,"text":"Good.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":"Please enjoy!","item_title":"HealthyLine AJT 8040","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0075","rating":5,"text":"If I could afford it I would get a small one to take with me in the car. My only issue is that they are expensive, but not saying they aren't worth it.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Mat","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0076","rating":5,"text":"In the evening I find my husband, who totally doesn't believe in energy healing or PEMF, relaxing on the mat.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models","Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Mat","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0077","rating":5,"text":"Great product! I got a dog for the first time and the Pooper Scooper comes in handy. It's great if you don't want to bend over.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models"],"photo":null,"seller_reply":null,"item_title":"Grass Jawz Scooper","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0078","rating":5,"text":"Very happy with purchase. Product arrived in perfect condition and earlier than expected. Will definitely buy from this seller again.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0079","rating":5,"text":"Amazing product, amazing seller. Shipped fast and well packaged. Exactly as described. Would highly recommend.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0080","rating":5,"text":"Thank you for the great product and fast shipping. Very professional seller. A+.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0081","rating":5,"text":"Love my new mat! It helps with my back pain and I sleep so much better now. Shipping was fast and the mat was in perfect condition. Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models","Pain Relief & Sleep","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0082","rating":5,"text":"Thank you works great as described quick ship.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0083","rating":5,"text":"I've purchased 2 other mats from this seller and it's always gone very well. This time I noticed that the picture they sent me before sending didn't match the original picture. The controller was different. I kind of went off on the seller thinking it was an old controller. Turns out it was a newer controller. Seller was kind to me despite me being a jerk. Package came fast.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":"Please enjoy!","item_title":"HealthyLine Mesh","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0084","rating":5,"text":"nice seller, smoth transaction, good quality, fast shipping.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0085","rating":5,"text":"A+++++++++++++++++ superb seller.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0086","rating":5,"text":"Quick to ship! Arrived unscathed!! Love it!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":"Please enjoy!","item_title":"HealthyLine Platinum","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0087","rating":5,"text":"This product is amazing! Most effective heating pad and best help for my chronic back pain that I have ever had!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer","Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":"HealthyLine Inframat Pro","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0088","rating":5,"text":"Very nice! What a great seller! Offered me a really good deal too.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0089","rating":5,"text":"honest and caring.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0090","rating":5,"text":"Good communication, fast shipping, love the product so far.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0091","rating":5,"text":"work fine.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0092","rating":5,"text":"Thanks love it! Both arrived early on Tuesday and I'm trying it out now! Thank you…very happy with packing and packaging.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0093","rating":5,"text":"This mat was like new. It works great!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer","Like-New Condition"],"photo":null,"seller_reply":null,"item_title":"HealthyLine","product":null,"featured":false,"source":"eBay"},{"id":"ebay-outlet-0094","rating":5,"text":"Magical heating pad. It is very healing and works perfectly. I'm in love!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer","Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":"HealthyLine TAO Pillow","product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0095","rating":5,"text":"Great seller! A+++++","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0096","rating":5,"text":"A++++ seller!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0097","rating":5,"text":"Unit is just link new! Great seller support, I called for info, then hung up to send an email instead. Before I finished the email, seller had called ME to answer my questions. Great deal on ebay too-","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0098","rating":5,"text":"Smooth transaction. Nice Biomat clone!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0099","rating":5,"text":"Exactly as described. Great communication and follow up. Highly recommended seller.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0100","rating":5,"text":"Quick ship- well packaged- like new-works as should- good price- Thank you..","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0101","rating":5,"text":"On time delivery. I had s problem with the controller and they have addressed it with no hesitation.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0102","rating":5,"text":"This is my second purchase from this seller.Great products at great prices! I am quite sure there will be more items purchased by me from this seller. Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0103","rating":5,"text":"Great price and condition, super fast shipping, would buy from this seller again","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0104","rating":5,"text":"This purchase didn't quite work out due to a delivery issue, but the company made it right and quickly, and I've had other orders from them shipped very promptly. I can recommend them without reservation.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0105","rating":5,"text":". Well packaged and fast shipping. Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0106","rating":5,"text":"well described and received","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0107","rating":5,"text":"Quick shipping, Item arrived in good condition as described.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0108","rating":5,"text":"Arrived quickly and packaged well","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0109","rating":5,"text":"Item as described. Quick ship.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0110","rating":5,"text":"Highly recommend this seller!!! SUPER fast shipping and extremely helpful!!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0111","rating":5,"text":"AAA++++ seller just as described will buy from again","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0112","rating":5,"text":"Excellent service. Product just as described","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0113","rating":5,"text":"Great seller and item. Fast shipping.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0114","rating":5,"text":"Fast shipping and item as described. Excellent quality product. Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0115","rating":5,"text":"Great quality and fast shipping amazing amd so grateful.. amazing seller .","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0116","rating":5,"text":"Item was received in great condition. Works great! Great experience with this seller.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0117","rating":5,"text":"Amazing product that was shipped so fast. I would love to work with this buyer again.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0118","rating":5,"text":"Great customer regarding shipping. Fast delivery","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0119","rating":5,"text":"Excellent condition perfect shipping thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0120","rating":5,"text":"Incredible! Super fast delivery! Thank you! Product is great!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0121","rating":5,"text":"Excellent delivery response time.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0122","rating":5,"text":"Great product, arrived quicky. Very Happy!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0123","rating":5,"text":"Fast response and already love my purchase.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0124","rating":5,"text":"All good, quick shipping- Thanks!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0125","rating":5,"text":"As described. Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0126","rating":5,"text":"Exactly as advertised.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0127","rating":5,"text":"Excellent customer service highly recommended.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0128","rating":5,"text":"♥ .:* (¯´·.¸(¯´·.¸( ❀ Amazing eBayer - Thank You ❀ )¸.·´¯)¸.·´¯) *:. ♥","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0129","rating":5,"text":"Perfect transaction in every way.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0130","rating":5,"text":"Excellent transaction in all respects- Thanks!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0131","rating":5,"text":"Perfect transaction again thank you.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0132","rating":5,"text":"Great item great price, quick shipping!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0133","rating":5,"text":"Great mat! Always great service. Highly recommended A+++","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0134","rating":5,"text":"Seems to work great. Fast shipping. Thank you.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0135","rating":5,"text":"Received product quickly, and it works well","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0136","rating":5,"text":"Omg love this mat so much! Received it so fast .","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0137","rating":5,"text":"Excellent! Mat is perfect. Shipping was quick and secure. Highly recommended. Thank you.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0138","rating":5,"text":"Great product, great seller, highly recommend.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0139","rating":5,"text":"awesome seller. amazing product","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0140","rating":5,"text":"Great product great seller!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0141","rating":5,"text":"Excellent mat excellent service highly recommended.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0142","rating":5,"text":"good price, great product -- thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0143","rating":5,"text":"positive","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0144","rating":5,"text":"Original mat ordered was out of stock, seller quickly offered a more superior mat as a replacement.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0145","rating":5,"text":"I was away for a month so sorry for the delay in feedback. The mat is working very well. Customer service top notch and accessible. I have been looking for a mat I could afford and this item being discontinued is a perfect fit for me. I didn't know much about PEMF, but it's another level of relaxing. I've had terrible insomnia and it has helped me get much more sleep!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0146","rating":5,"text":"Awesome seller! Love this product it is healing my pain","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0147","rating":5,"text":"Great quality. I love my purchase. It's such a great price compared to other similar products. I wasn't expecting much for the price and it's good quality and well made. It looks brand new in a box with a carry case. It says used but it didn't looked used at all. I'm very happy with the product.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0148","rating":5,"text":"It's a great mat ! Got here fast and works great!!!! Love it !!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0149","rating":5,"text":"fast delivery, very good product. It is big enough for me and my cat.love the product","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Fast Shipping","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0150","rating":5,"text":"The absolute lowest price I saw online? Huge win!\" The size and quality of the Jade is what caught my attention when I opened the box. I've been using this mat for a few weeks now and I'm really happy with it. It's very comfortable to lay on and the heat therapy is really relaxing. I've noticed that my muscles feel looser and more relaxed after using the mat. I'm able to sleep longer and deeper. I also like the negative ion function, which helps to improve my mood and energy levels.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Pain Relief & Sleep","Matched to Models","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-manual-0151","rating":5,"text":"This was a \"used\" product in perfectly new-like condition as reviewed by seller. I'm very satisfied...works perfectly and after 6 hours of use, the bottom of my feet feel much better.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Like-New Condition","Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0152","rating":5,"text":"jt mesh mat is working well , full body chronic pain condition with fibro and muscular/bone degenerative condition as well as sciatica/scoliosis etc .... and i use the healthyline pad 8-10 hours everyday at 145* , has a penetrating heat without the \"burn\" or sting , helps with my restless leg , helps keep legs and lower back loose for when i have to actually leave the house , the releif is real and this heating pad is a must have for anyone who relates to all that","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Pain Relief & Sleep","Matched to Models"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0153","rating":5,"text":"Works wonderfully!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0154","rating":5,"text":"Helps with keeping pain in check🤨🤨🤨","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Pain Relief & Sleep"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0155","rating":5,"text":"Great deal and product!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0156","rating":5,"text":"Good purchase,","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0157","rating":5,"text":"I LOVE my mat!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0158","rating":5,"text":"Works & looks good","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0159","rating":5,"text":"Good experience.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0160","rating":5,"text":"I love my new mat, I hope to buy more items in the future.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Matched to Models"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0161","rating":5,"text":"Love it!!! It doesn't have the new smell as I was hoping and it works perfectly! Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0162","rating":5,"text":"A+ thank you","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0163","rating":5,"text":"Love it!!! Thank you!!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0164","rating":5,"text":"Excellent product and aervice","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0165","rating":5,"text":"Works very well.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0166","rating":5,"text":"I absolutely love this product and I'm super thrilled to have it, thank you thank you thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0167","rating":5,"text":"Very Happy! Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0168","rating":5,"text":"Good thanks","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0169","rating":5,"text":"Love it thank you so much!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0170","rating":5,"text":"Excellent!! A1!!!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0171","rating":5,"text":"Great awesome","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0172","rating":5,"text":"Awesome quality!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0173","rating":5,"text":"This is a great product and exactly what I needed.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0174","rating":5,"text":"nameste' I love love it","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0175","rating":5,"text":"Super fadt dhipment. Great product.","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer","Fast Shipping"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0176","rating":5,"text":"we love it","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0177","rating":5,"text":"great product and condition","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0178","rating":5,"text":"So far I am liking this thing!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"},{"id":"ebay-page2-0179","rating":5,"text":"Love it! Thank you!","buyer":"Verified eBay Buyer","verified":true,"period":"Verified Purchase","tags":["Verified Buyer"],"photo":null,"seller_reply":null,"item_title":null,"product":null,"featured":false,"source":"eBay"}]};

  // Standalone build: reviews are embedded, nothing is fetched over the network.
  function fetchReviewsData() {
    return Promise.resolve(INLINE_DATA);
  }

  const BRAND_MARK = `<span class="reviews-wordmark" style="font-weight:700;font-size:22px;letter-spacing:-0.4px;color:#3b626b;">Reviews</span>`;
  const BRAND_MARK_SM = `<span class="reviews-wordmark" style="font-weight:700;font-size:15px;letter-spacing:-0.2px;color:#3b626b;">Reviews</span>`;

  const STAR_SVG = `<svg viewBox="0 0 20 20" class="star-icon" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.604a1 1 0 00.95.69h3.789c.969 0 1.371 1.24.588 1.81l-3.065 2.227a1 1 0 00-.364 1.118l1.17 3.604c.3.921-.755 1.688-1.54 1.118l-3.065-2.227a1 1 0 00-1.175 0l-3.065 2.227c-.784.57-1.838-.197-1.539-1.118l1.17-3.604a1 1 0 00-.364-1.118L2.56 9.031c-.783-.57-.38-1.81.588-1.81h3.789a1 1 0 00.95-.69l1.162-3.604z"/></svg>`;

  const VERIFIED_PLUS_SVG = `<svg viewBox="0 0 20 20" class="pos-icon" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#05823F"/><path d="M10 5.2v9.6M5.2 10h9.6" stroke="#fff" stroke-width="2.3" stroke-linecap="round"/></svg>`;

  const TOP_RATED_SVG = `<svg viewBox="0 0 24 24" class="trs-icon" aria-hidden="true"><path fill="#F5AF02" d="M12 1.8l7.5 3.3v6.2c0 5.3-3.2 10.1-7.5 11.9-4.3-1.8-7.5-6.6-7.5-11.9V5.1L12 1.8z"/><path fill="#fff" d="M10.6 15.6l-3.3-3.3 1.4-1.4 1.9 1.9 4.7-4.7 1.4 1.4-6.1 6.1z"/></svg>`;

  const EXTERNAL_ICON = `<svg viewBox="0 0 16 16" class="ext-icon" aria-hidden="true"><path fill="currentColor" d="M9.5 2.5h4v4h-1.5V5.06L7.28 9.78 6.22 8.72 10.94 4H9.5V2.5zM3.5 4.5h3.5V6H5v5h5V9.5h1.5V13h-8V4.5z"/></svg>`;

  const WIDGET_STYLES = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    :host {
      all: initial;
      display: block;
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #12161c;
      line-height: 1.55;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      --brand: #3b626b;
      --brand-dark: #28454c;
      --brand-soft: #74a69f;
      --brand-tint: #e8f1ef;
      --surface: #ffffff;
      --bg-tinted: #f5f9f8;
      --border: #dce8e6;
      --text: #182026;
      --muted: #5d676e;
      --ebay-green: #05823f;
      --star: #f59e0b;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    .hlo-wrap {
      --brand: #3b626b;
      --brand-dark: #28454c;
      --brand-soft: #74a69f;
      --brand-tint: #e8f1ef;
      --surface: #ffffff;
      --bg-tinted: #f5f9f8;
      --border: #dce8e6;
      --text: #182026;
      --muted: #5d676e;
      --ebay-green: #05823f;
      --star: #f59e0b;
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 26px 28px;
      border-radius: 20px;
    }

    .hlo-wrap.theme-tinted {
      background: var(--bg-tinted);
      border: 1px solid var(--border);
    }

    .hlo-wrap.theme-light {
      background: transparent;
      padding: 8px 0;
    }

    /* Shared Brand Badges */
    .ebay-logo {
      height: 28px;
      width: auto;
      display: block;
    }

    .trs-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #fff9eb;
      border: 1px solid #fde68a;
      color: #92400e;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 999px;
      text-decoration: none;
    }

    .trs-icon {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
    }

    .stars-inline {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }

    .star-icon {
      width: 17px;
      height: 17px;
      fill: var(--star);
    }

    .ext-icon {
      width: 14px;
      height: 14px;
    }

    .verify-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 9px 16px;
      background: var(--brand);
      color: #ffffff;
      text-decoration: none;
      font-size: 12.5px;
      font-weight: 600;
      border-radius: 999px;
      border: 1px solid var(--brand);
      cursor: pointer;
      font-family: inherit;
      transition: background 0.18s ease, transform 0.15s ease;
      white-space: nowrap;
    }

    .verify-btn:hover {
      background: var(--brand-dark);
      border-color: var(--brand-dark);
      transform: translateY(-1px);
    }

    .ghost-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 15px;
      background: var(--surface);
      color: var(--brand-dark);
      border: 1px solid var(--border);
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 600;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.16s ease;
      white-space: nowrap;
      text-decoration: none;
    }

    .ghost-btn:hover {
      border-color: var(--brand);
      color: var(--brand);
      background: #ffffff;
    }

    /* Filter Pills */
    .pills-scroll {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .filter-pill {
      appearance: none;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--muted);
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.16s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .filter-pill:hover {
      border-color: var(--brand-soft);
      color: var(--brand);
    }

    .filter-pill.active {
      background: var(--brand);
      border-color: var(--brand);
      color: #ffffff;
    }

    .pill-count {
      font-size: 10.5px;
      opacity: 0.85;
      background: rgba(0, 0, 0, 0.06);
      padding: 1px 6px;
      border-radius: 999px;
    }

    .filter-pill.active .pill-count {
      background: rgba(255, 255, 255, 0.22);
    }

    /* ==========================================
       CAROUSEL (HOMEPAGE SLIDER) LAYOUT
       ========================================== */
    .carousel-top {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding-bottom: 16px;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--border);
    }

    .carousel-brand-summary {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .carousel-rating-cluster {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: var(--text);
    }

    .carousel-rating-cluster strong {
      font-size: 17px;
      font-weight: 700;
      color: var(--text);
    }

    .carousel-meta-text {
      font-size: 12.5px;
      color: var(--muted);
    }

    .carousel-meta-text b {
      color: var(--text);
      font-weight: 600;
    }

    .carousel-actions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .carousel-subbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 16px;
    }

    .carousel-nav-group {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
    }

    .nav-btn {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--brand-dark);
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      user-select: none;
    }

    .nav-btn:hover {
      background: var(--brand);
      border-color: var(--brand);
      color: #fff;
      transform: scale(1.04);
    }

    .carousel-track {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: calc((100% - 36px) / 3);
      gap: 18px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      padding: 4px 2px 10px;
      scrollbar-width: none;
      cursor: grab;
      -webkit-overflow-scrolling: touch;
    }

    .carousel-track:focus-visible {
      outline: 2px solid var(--brand-soft);
      outline-offset: 4px;
      border-radius: 16px;
    }

    .carousel-viewport {
      position: relative;
    }

    .edge-fade {
      position: absolute;
      top: 0;
      bottom: 12px;
      width: 54px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s ease;
      z-index: 2;
    }

    .edge-fade.left {
      left: 0;
      background: linear-gradient(90deg, var(--bg-tinted) 8%, rgba(245, 249, 248, 0) 100%);
    }

    .edge-fade.right {
      right: 0;
      background: linear-gradient(270deg, var(--bg-tinted) 8%, rgba(245, 249, 248, 0) 100%);
    }

    .theme-light .edge-fade.left {
      background: linear-gradient(90deg, #ffffff 8%, rgba(255, 255, 255, 0) 100%);
    }

    .theme-light .edge-fade.right {
      background: linear-gradient(270deg, #ffffff 8%, rgba(255, 255, 255, 0) 100%);
    }

    .edge-fade.visible {
      opacity: 1;
    }

    .carousel-track.dragging {
      cursor: grabbing;
      scroll-behavior: auto;
      scroll-snap-type: none;
    }

    .carousel-track::-webkit-scrollbar {
      display: none;
    }

    .carousel-track .review-card {
      scroll-snap-align: start;
      min-height: 310px;
      cursor: pointer;
    }

    .carousel-bottom {
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .progress-rail {
      flex: 1 1 200px;
      max-width: 320px;
      height: 5px;
      background: #dce8e6;
      border-radius: 999px;
      overflow: hidden;
    }

    .progress-thumb {
      height: 100%;
      width: 18%;
      background: var(--brand);
      border-radius: 999px;
      transition: width 0.2s ease;
    }

    .carousel-counter {
      font-size: 12px;
      color: var(--muted);
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
    }

    .slide-counter {
      font-variant-numeric: tabular-nums;
      font-weight: 600;
      color: var(--brand-dark);
      background: #ffffff;
      border: 1px solid var(--border);
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 11.5px;
    }

    /* ==========================================
       REVIEW CARDS (SHARED + CLAMPED)
       ========================================== */
    .review-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 15px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 14px;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
      position: relative;
    }

    .review-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(18, 22, 28, 0.07);
      border-color: #b7d2ce;
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .verified-pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 11.5px;
      font-weight: 600;
      color: var(--ebay-green);
      background: #ecfdf3;
      border: 1px solid #ccebd9;
      padding: 3px 9px;
      border-radius: 999px;
      text-decoration: none;
    }

    .pos-icon {
      width: 13px;
      height: 13px;
      flex-shrink: 0;
    }

    .review-body {
      font-size: 13.8px;
      color: #222b32;
      line-height: 1.6;
      margin: 0;
      word-break: break-word;
    }

    .review-body.clamped {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .review-body mark {
      background: #fef08a;
      color: inherit;
      padding: 0 2px;
      border-radius: 3px;
    }

    .read-more-inline {
      background: none;
      border: none;
      padding: 0;
      color: var(--brand);
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      align-self: flex-start;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .read-more-inline:hover {
      text-decoration: underline;
    }

    .buyer-photo-btn {
      align-self: flex-start;
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      padding: 0 10px 0 0;
      background: #f8fafc;
      cursor: zoom-in;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: border-color 0.15s ease;
    }

    .buyer-photo-btn:hover {
      border-color: var(--brand);
    }

    .buyer-photo-btn img {
      width: 46px;
      height: 46px;
      object-fit: cover;
      display: block;
    }

    .buyer-photo-btn span {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--brand);
    }

    .seller-reply {
      background: var(--brand-tint);
      border-left: 3px solid var(--brand);
      padding: 8px 11px;
      border-radius: 0 8px 8px 0;
      font-size: 12px;
      color: var(--brand-dark);
    }

    .seller-reply strong {
      display: block;
      font-size: 10.5px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 2px;
      color: var(--brand);
    }

    .product-chip {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 10px;
      background: #f8fbfb;
      border: 1px solid #e3eeec;
      border-radius: 10px;
      text-decoration: none;
      color: var(--text);
      transition: background 0.15s ease, border-color 0.15s ease;
    }

    .product-chip:hover {
      background: var(--brand-tint);
      border-color: var(--brand-soft);
    }

    .product-chip img {
      width: 34px;
      height: 34px;
      border-radius: 6px;
      object-fit: cover;
      flex-shrink: 0;
      background: #fff;
      border: 1px solid #e5e7eb;
    }

    .product-chip-info {
      min-width: 0;
      flex: 1;
    }

    .product-chip-label {
      font-size: 10px;
      color: var(--muted);
      display: block;
      line-height: 1.2;
    }

    .product-chip-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--brand-dark);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }

    .product-chip-arrow {
      font-size: 13px;
      color: var(--brand);
      font-weight: 700;
      padding-right: 2px;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding-top: 10px;
      border-top: 1px solid #eef4f3;
      font-size: 11.8px;
      color: var(--muted);
    }

    .buyer-name {
      font-weight: 500;
      color: #3f484f;
    }

    /* ==========================================
       SHOWCASE FULL GRID LAYOUT
       ========================================== */
    .trust-banner {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px 28px;
      display: grid;
      grid-template-columns: 1.25fr 1fr auto;
      gap: 24px;
      align-items: center;
      box-shadow: 0 10px 30px rgba(59, 98, 107, 0.06);
      margin-bottom: 22px;
    }

    .trust-left {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .brand-eyebrow {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .since-tag {
      font-size: 12px;
      color: var(--muted);
      font-weight: 500;
    }

    .headline-row {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 12px;
    }

    .big-score {
      font-size: 30px;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.02em;
      line-height: 1.1;
    }

    .stats-sub {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 14px;
      font-size: 13px;
      color: var(--muted);
    }

    .stats-sub strong {
      color: var(--text);
      font-weight: 600;
    }

    .dsr-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 1fr));
      gap: 10px 18px;
      padding-left: 20px;
      border-left: 1px solid var(--border);
    }

    .dsr-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .dsr-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 10px;
      font-size: 12px;
      color: var(--muted);
      font-weight: 500;
    }

    .dsr-top strong {
      color: var(--brand);
      font-weight: 700;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .dsr-bar {
      height: 6px;
      background: var(--brand-tint);
      border-radius: 999px;
      overflow: hidden;
    }

    .dsr-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--brand) 0%, var(--brand-soft) 100%);
      border-radius: 999px;
    }

    .trust-cta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }

    .seller-handle {
      font-size: 11.5px;
      color: var(--muted);
    }

    .seller-handle code {
      background: var(--brand-tint);
      color: var(--brand-dark);
      padding: 2px 6px;
      border-radius: 5px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 11px;
    }

    .controls-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 20px;
    }

    .search-box {
      position: relative;
      min-width: 240px;
      flex: 0 1 290px;
    }

    .search-input {
      width: 100%;
      padding: 8px 14px 8px 35px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--surface);
      font-family: inherit;
      font-size: 13px;
      color: var(--text);
      outline: none;
    }

    .search-input:focus {
      border-color: var(--brand);
      box-shadow: 0 0 0 3px rgba(59, 98, 107, 0.12);
    }

    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      color: var(--muted);
      pointer-events: none;
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .footer-actions {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }

    .load-more-btn {
      appearance: none;
      background: var(--surface);
      border: 1.5px solid var(--brand);
      color: var(--brand);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      padding: 10px 22px;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.16s ease;
    }

    .load-more-btn:hover {
      background: var(--brand);
      color: #ffffff;
    }

    .all-ebay-link {
      font-size: 13px;
      color: var(--muted);
      text-decoration: none;
      font-weight: 500;
    }

    .all-ebay-link:hover {
      color: var(--brand);
      text-decoration: underline;
    }

    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 36px 20px;
      background: var(--surface);
      border-radius: 14px;
      border: 1px dashed var(--border);
      color: var(--muted);
      font-size: 14px;
    }

    /* Compact Badge */
    .compact-badge {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px 16px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: 0 4px 14px rgba(18, 22, 28, 0.05);
      cursor: pointer;
      transition: border-color 0.16s ease, transform 0.15s ease;
      font-family: inherit;
    }

    .compact-badge:hover {
      border-color: var(--brand);
      transform: translateY(-1px);
    }

    .compact-badge .ebay-logo {
      height: 22px;
    }

    .badge-divider {
      width: 1px;
      height: 22px;
      background: var(--border);
    }

    .badge-metrics {
      font-size: 12.5px;
      color: var(--text);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .badge-cta {
      font-size: 12px;
      color: var(--brand);
      font-weight: 600;
      text-decoration: underline;
    }

    /* Modals (Single Review Detail + Full Drawer) */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 30, 0.62);
      backdrop-filter: blur(3px);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.16s ease;
    }

    .modal-box {
      background: var(--bg-tinted);
      border-radius: 20px;
      max-width: 1100px;
      width: 100%;
      max-height: 88vh;
      overflow-y: auto;
      position: relative;
      padding: 24px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
    }

    .detail-modal-box {
      background: #ffffff;
      border-radius: 18px;
      max-width: 580px;
      width: 100%;
      max-height: 88vh;
      overflow-y: auto;
      position: relative;
      padding: 26px 28px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .modal-box .trust-banner {
      display: none;
    }

    .modal-head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 0 52px 14px 0;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border);
    }

    .modal-head-main {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .modal-head-title {
      font-size: 19px;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.01em;
    }

    .modal-head-sub {
      font-size: 12.5px;
      color: var(--muted);
    }

    .detail-photo {
      width: 100%;
      max-height: 360px;
      object-fit: contain;
      background: #0f171e;
      border-radius: 12px;
      display: block;
    }

    .detail-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding-top: 12px;
      border-top: 1px solid #eef4f3;
    }

    .close-modal-btn {
      position: sticky;
      top: 0;
      float: right;
      margin-left: auto;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: #ffffff;
      color: var(--text);
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
      z-index: 5;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .close-modal-btn:hover {
      background: #f1f5f9;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (max-width: 1024px) {
      .trust-banner {
        grid-template-columns: 1fr;
      }
      .dsr-grid {
        padding-left: 0;
        border-left: none;
        padding-top: 14px;
        border-top: 1px solid var(--border);
      }
      .trust-cta {
        align-items: flex-start;
      }
      .reviews-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .carousel-track {
        grid-auto-columns: calc((100% - 18px) / 2);
      }
    }

    @media (max-width: 640px) {
      .hlo-wrap {
        padding: 16px;
        border-radius: 14px;
      }
      .reviews-grid {
        grid-template-columns: 1fr;
      }
      .carousel-track {
        grid-auto-columns: 86%;
      }
      .carousel-track .review-card {
        min-height: 0;
      }
      .search-box {
        flex: 1 1 100%;
      }
      .carousel-top {
        gap: 10px;
      }
      .carousel-actions {
        width: 100%;
      }
      .carousel-actions .ghost-btn,
      .carousel-actions .verify-btn {
        flex: 1 1 auto;
        justify-content: center;
      }
      .carousel-subbar {
        flex-wrap: nowrap;
        gap: 10px;
        margin-bottom: 12px;
      }
      .pills-scroll {
        flex: 1 1 auto;
        min-width: 0;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 2px;
      }
      .pills-scroll::-webkit-scrollbar {
        display: none;
      }
      .filter-pill {
        flex: 0 0 auto;
      }
      .carousel-nav-group {
        margin-left: 0;
        flex: 0 0 auto;
        gap: 6px;
      }
      .nav-btn {
        width: 34px;
        height: 34px;
        font-size: 18px;
      }
      .carousel-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      .progress-rail {
        flex: 0 0 auto;
        height: 5px;
        max-width: 100%;
        width: 100%;
      }
      .carousel-counter {
        gap: 8px 12px;
      }
      .carousel-meta-text {
        font-size: 12px;
      }
    }
  `;

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightText(text, query) {
    const safe = escapeHtml(text);
    if (!query || query.trim().length < 2) return safe;
    const escapedQ = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp("(" + escapedQ + ")", "gi");
    return safe.replace(re, "<mark>$1</mark>");
  }

  function renderStars(count) {
    let html = '<span class="stars-inline" aria-label="' + count + ' out of 5 stars">';
    for (let i = 0; i < count; i++) html += STAR_SVG;
    html += "</span>";
    return html;
  }

  function detectPageProductSlug() {
    const m = window.location.pathname.match(/\/product\/([^/?#]+)/i);
    return m ? m[1].toLowerCase() : "";
  }

  function injectSeoJsonLd(store) {
    if (document.getElementById("hlo-ebay-jsonld")) return;
    const script = document.createElement("script");
    script.id = "hlo-ebay-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      name: store.name || "HealthyLine Outlet",
      url: store.website_url || "https://healthylineoutlet.com",
      sameAs: [store.ebay_store_url, store.ebay_profile_url].filter(Boolean),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: String(store.feedback_score || 1305),
        reviewCount: String(store.total_seller_reviews || 1077)
      }
    });
    document.head.appendChild(script);
  }

  function openReviewDetailModal(shadowRoot, review, store) {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";

    const photoBlock = review.photo
      ? `<img class="detail-photo" src="${escapeHtml(review.photo)}" alt="Verified customer photo" onerror="this.style.display='none'"/>`
      : "";

    const replyBlock = review.seller_reply
      ? `<div class="seller-reply">
           <strong>HealthyLine Outlet replied</strong>
           ${escapeHtml(review.seller_reply)}
         </div>`
      : "";

    const prodBlock = review.product
      ? `<a class="product-chip" href="${escapeHtml(review.product.url)}" target="_top" rel="noopener">
           ${
             review.product.thumbnail
               ? `<img src="${escapeHtml(review.product.thumbnail)}" alt="${escapeHtml(review.product.name)}" onerror="this.style.display='none'"/>`
               : ""
           }
           <span class="product-chip-info">
             <span class="product-chip-label">Shop matching model on HealthyLineOutlet.com</span>
             <span class="product-chip-title">${escapeHtml(review.product.name)}</span>
           </span>
           <span class="product-chip-arrow">&rarr;</span>
         </a>`
      : "";

    backdrop.innerHTML = `
      <div class="detail-modal-box" role="dialog" aria-modal="true">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div style="display:flex;align-items:center;gap:10px;">
            ${renderStars(review.rating || 5)}
            <span class="verified-pill">${VERIFIED_PLUS_SVG} Verified Purchase</span>
          </div>
          <button type="button" class="close-modal-btn" style="position:static;margin:0;" aria-label="Close">&times;</button>
        </div>

        <p class="review-body" style="font-size:15px;line-height:1.68;">${escapeHtml(review.text)}</p>
        ${photoBlock}
        ${replyBlock}
        ${prodBlock}

        <div class="detail-actions">
          <span style="font-size:12.5px;color:#5d676e;">
            Buyer: <strong style="color:#182026;">${escapeHtml(review.buyer || "Verified Buyer")}</strong> &bull; ${escapeHtml(review.period || "Verified Purchase")}
          </span>
        </div>
      </div>
    `;

    shadowRoot.appendChild(backdrop);
    installEscapeHandler();
    const close = () => backdrop.remove();
    backdrop.querySelector(".close-modal-btn").addEventListener("click", close);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });
  }

  function openAllReviewsModal(shadowRoot, data, opts) {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    const box = document.createElement("div");
    box.className = "modal-box";
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "close-modal-btn";
    closeBtn.innerHTML = "&times;";
    closeBtn.setAttribute("aria-label", "Close all reviews");

    const store = data.store || {};
    const total = (data.reviews || []).length;
    const head = document.createElement("div");
    head.className = "modal-head";
    head.innerHTML = `
      <div class="modal-head-main">
        <span class="modal-head-title">All ${total} Verified Reviews</span>
        <span class="modal-head-sub">100% Positive &bull; ${(store.feedback_score || 1305).toLocaleString()} Score &bull; Top-Rated since 2013</span>
      </div>
    `;

    box.appendChild(closeBtn);
    box.appendChild(head);
    backdrop.appendChild(box);
    shadowRoot.appendChild(backdrop);
    installEscapeHandler();

    renderShowcaseInto(box, data, {
      limit: 12,
      theme: "light",
      productSlug: opts.productSlug,
      shadowRootForModals: shadowRoot
    });

    const close = () => backdrop.remove();
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });
  }

  function renderCardHtml(r, query, clampForCarousel) {
    const isLong = (r.text || "").length > 195;
    const bodyCls = clampForCarousel ? "review-body clamped" : "review-body";

    const readMoreHtml =
      clampForCarousel && isLong
        ? `<button type="button" class="read-more-inline" data-open-id="${escapeHtml(r.id)}">Read full review &rarr;</button>`
        : "";

    const photoHtml = r.photo
      ? `<button type="button" class="buyer-photo-btn" data-open-id="${escapeHtml(r.id)}">
           <img src="${escapeHtml(r.photo)}" alt="Verified buyer photo" loading="lazy" onerror="this.parentElement.style.display='none'"/>
           <span>Buyer Photo</span>
         </button>`
      : "";

    const replyHtml =
      !clampForCarousel && r.seller_reply
        ? `<div class="seller-reply">
             <strong>HealthyLine Outlet replied</strong>
             ${escapeHtml(r.seller_reply)}
           </div>`
        : "";

    const productHtml = r.product
      ? `<a class="product-chip" href="${escapeHtml(r.product.url)}" target="_top" rel="noopener">
           ${
             r.product.thumbnail
               ? `<img src="${escapeHtml(r.product.thumbnail)}" alt="${escapeHtml(r.product.name)}" loading="lazy" onerror="this.style.display='none'"/>`
               : ""
           }
           <span class="product-chip-info">
             <span class="product-chip-label">Verified purchase model</span>
             <span class="product-chip-title">${escapeHtml(r.product.name)}</span>
           </span>
           <span class="product-chip-arrow">&rarr;</span>
         </a>`
      : "";

    return `
      <article class="review-card" data-review-id="${escapeHtml(r.id)}">
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div class="card-top">
            ${renderStars(r.rating || 5)}
            <span class="verified-pill">${VERIFIED_PLUS_SVG} Verified Purchase</span>
          </div>
          <p class="${bodyCls}">${highlightText(r.text, query)}</p>
          ${readMoreHtml}
          ${photoHtml}
          ${replyHtml}
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${productHtml}
          <div class="card-footer">
            <span class="buyer-name">${escapeHtml(r.buyer || "Verified Buyer")}</span>
            <span>${escapeHtml(r.period || "Verified Purchase")}</span>
          </div>
        </div>
      </article>
    `;
  }

  function bindCardClicks(shadowRoot, scopeEl, reviewsById, store) {
    scopeEl.querySelectorAll(".review-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        // Let direct product links navigate naturally
        if (e.target.closest("a.product-chip")) return;
        // Ignore click if user was dragging the slider
        if (scopeEl.getAttribute("data-dragged") === "1") return;
        const id = card.getAttribute("data-review-id");
        const rev = reviewsById[id];
        if (rev) openReviewDetailModal(shadowRoot, rev, store);
      });
    });
  }

  let escapeHandlerInstalled = false;
  function installEscapeHandler() {
    if (escapeHandlerInstalled) return;
    escapeHandlerInstalled = true;
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const hosts = document.querySelectorAll("#hlo-ebay-reviews, .hlo-ebay-reviews");
      for (let i = hosts.length - 1; i >= 0; i--) {
        const root = hosts[i].shadowRoot;
        if (!root) continue;
        const modals = root.querySelectorAll(".modal-backdrop");
        if (modals.length > 0) {
          modals[modals.length - 1].remove();
          e.stopPropagation();
          return;
        }
      }
    });
  }

  function renderCarouselInto(shadowRoot, data, opts) {
    const store = data.store || {};
    const allReviews = (data.reviews || []).slice();
    const reviewsById = {};
    allReviews.forEach((r) => (reviewsById[r.id] = r));

    let targetSlug = opts.productSlug || "";
    if (targetSlug === "auto") targetSlug = detectPageProductSlug();
    if (targetSlug) {
      allReviews.sort((a, b) => {
        const aM = a.product && a.product.slug.includes(targetSlug) ? 1 : 0;
        const bM = b.product && b.product.slug.includes(targetSlug) ? 1 : 0;
        return bM - aM;
      });
    }

    const categories = [
      { key: "ALL", label: "All Reviews", count: allReviews.length },
      {
        key: "TAJ",
        label: "TAJ Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("TAJ")).length
      },
      {
        key: "Pillow",
        label: "Pillow Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Pillow")).length
      },
      {
        key: "Platinum",
        label: "Platinum Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Platinum")).length
      },
      {
        key: "Mesh",
        label: "Mesh Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Mesh")).length
      },
      {
        key: "Rainbow",
        label: "Rainbow Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Rainbow")).length
      }
    ];

    let currentTag = "ALL";

    const container = document.createElement("div");
    container.className = "hlo-wrap theme-" + (opts.theme || "tinted");
    container.innerHTML = `
      <div class="carousel-top">
        <div class="carousel-brand-summary">
          <span style="display:inline-flex;align-items:center;">
            ${BRAND_MARK}
          </span>
          <span class="trs-pill">
            ${TOP_RATED_SVG} Top-Rated Seller
          </span>
          <div class="carousel-rating-cluster">
            ${renderStars(5)}
            <strong>100% Positive</strong>
          </div>
          <span class="carousel-meta-text">
            <b>${(store.feedback_score || 1305).toLocaleString()}</b> Rating Score &bull;
            <b>${(store.total_seller_reviews || 1077).toLocaleString()}+</b> Verified Orders
          </span>
        </div>

        <div class="carousel-actions">
          <button type="button" class="ghost-btn open-all-btn">
            Search All Reviews (${allReviews.length})
          </button>
        </div>
      </div>

      <div class="carousel-subbar">
        <div class="carousel-nav-group">
          <button type="button" class="nav-btn prev-btn" aria-label="Previous reviews">&lsaquo;</button>
          <button type="button" class="nav-btn next-btn" aria-label="Next reviews">&rsaquo;</button>
        </div>
      </div>

      <div class="carousel-viewport">
        <div class="edge-fade left" aria-hidden="true"></div>
        <div class="carousel-track" tabindex="0" aria-label="Verified customer reviews slider"></div>
        <div class="edge-fade right visible" aria-hidden="true"></div>
      </div>

      <div class="carousel-bottom">
        <div class="progress-rail" aria-hidden="true">
          <div class="progress-thumb"></div>
        </div>
        <div class="carousel-counter">
          <span class="counter-label">Click any review card to read in full</span>
          <span class="slide-counter"></span>
        </div>
      </div>
    `;

    shadowRoot.appendChild(container);

    const track = container.querySelector(".carousel-track");
    const thumb = container.querySelector(".progress-thumb");
    const pillBtns = container.querySelectorAll(".filter-pill");
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");
    const openAllBtn = container.querySelector(".open-all-btn");

    function getFilteredList() {
      const list = allReviews.filter((r) => {
        if (currentTag === "ALL") return true;
        // Filter by product series
        return r.product && r.product.name && r.product.name.includes(currentTag);
      });
      return opts.limit ? list.slice(0, opts.limit) : list;
    }

    function updateProgress() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const fadeLeft = container.querySelector(".edge-fade.left");
      const fadeRight = container.querySelector(".edge-fade.right");
      const counterEl = container.querySelector(".slide-counter");
      const total = track.querySelectorAll(".review-card").length;

      if (maxScroll <= 2) {
        thumb.style.width = "100%";
        fadeLeft.classList.remove("visible");
        fadeRight.classList.remove("visible");
        if (counterEl) counterEl.textContent = total ? `1 – ${total} of ${total}` : "";
        return;
      }

      const ratio = track.scrollLeft / maxScroll;
      thumb.style.width = Math.min(100, Math.max(12, ratio * 88 + 12)).toFixed(1) + "%";

      fadeLeft.classList.toggle("visible", track.scrollLeft > 8);
      fadeRight.classList.toggle("visible", track.scrollLeft < maxScroll - 8);

      if (counterEl) {
        const firstCard = track.querySelector(".review-card");
        const cardW = firstCard ? firstCard.offsetWidth + 18 : 380;
        const firstVisible = Math.min(total, Math.round(track.scrollLeft / cardW) + 1);
        const perView = Math.max(1, Math.round(track.clientWidth / cardW));
        const lastVisible = Math.min(total, firstVisible + perView - 1);
        counterEl.textContent = `${firstVisible} – ${lastVisible} of ${total}`;
      }
    }

    function renderSlides() {
      const list = getFilteredList();
      track.innerHTML = list.map((r) => renderCardHtml(r, "", true)).join("");
      track.scrollLeft = 0;
      bindCardClicks(shadowRoot, track, reviewsById, store);
      requestAnimationFrame(updateProgress);
    }

    function stepSlide(dir) {
      const firstCard = track.querySelector(".review-card");
      const step = firstCard ? firstCard.offsetWidth + 18 : 380;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (dir > 0 && track.scrollLeft >= maxScroll - 10) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else if (dir < 0 && track.scrollLeft <= 10) {
        track.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        track.scrollBy({ left: dir * step, behavior: "smooth" });
      }
    }

    prevBtn.addEventListener("click", () => stepSlide(-1));
    nextBtn.addEventListener("click", () => stepSlide(1));
    track.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    // Keyboard support: ←/→ when the slider has focus
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        stepSlide(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepSlide(-1);
      }
    });

    // Escape closes the top-most open modal (works even when focus sits outside the shadow tree)
    installEscapeHandler();

    pillBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        pillBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentTag = btn.getAttribute("data-tag") || "ALL";
        renderSlides();
      });
    });

    openAllBtn.addEventListener("click", () => {
      openAllReviewsModal(shadowRoot, data, opts);
    });

    // Desktop Mouse Drag-to-Scroll
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    track.addEventListener("mousedown", (e) => {
      if (e.button !== 0 || e.target.closest("a, button")) return;
      isDown = true;
      startX = e.pageX;
      startScroll = track.scrollLeft;
      track.setAttribute("data-dragged", "0");
    });
    window.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 6) {
        track.classList.add("dragging");
        track.setAttribute("data-dragged", "1");
        track.scrollLeft = startScroll - dx;
      }
    });
    window.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
      setTimeout(() => track.setAttribute("data-dragged", "0"), 60);
    });

    // Gentle Autoplay (pauses on hover / focus / modal)
    if (opts.autoplay) {
      let paused = false;
      container.addEventListener("mouseenter", () => (paused = true));
      container.addEventListener("mouseleave", () => (paused = false));
      container.addEventListener("touchstart", () => (paused = true), { passive: true });
      setInterval(() => {
        if (paused || shadowRoot.querySelector(".modal-backdrop")) return;
        stepSlide(1);
      }, 6000);
    }

    renderSlides();
  }

  function renderShowcaseInto(targetEl, data, opts) {
    const modalRoot = opts.shadowRootForModals || targetEl;
    const store = data.store || {};
    const allReviews = (data.reviews || []).slice();
    const reviewsById = {};
    allReviews.forEach((r) => (reviewsById[r.id] = r));

    let targetSlug = opts.productSlug || "";
    if (targetSlug === "auto") targetSlug = detectPageProductSlug();

    if (targetSlug) {
      allReviews.sort((a, b) => {
        const aMatch = a.product && a.product.slug.includes(targetSlug) ? 1 : 0;
        const bMatch = b.product && b.product.slug.includes(targetSlug) ? 1 : 0;
        return bMatch - aMatch;
      });
    }

    const state = {
      tag: "ALL",
      query: "",
      visibleCount: opts.limit || 9
    };

    const categories = [
      { key: "ALL", label: "All Reviews", count: allReviews.length },
      {
        key: "TAJ",
        label: "TAJ Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("TAJ")).length
      },
      {
        key: "Pillow",
        label: "Pillow Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Pillow")).length
      },
      {
        key: "Platinum",
        label: "Platinum Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Platinum")).length
      },
      {
        key: "Mesh",
        label: "Mesh Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Mesh")).length
      },
      {
        key: "Rainbow",
        label: "Rainbow Series",
        count: allReviews.filter((r) => r.product && r.product.name && r.product.name.includes("Rainbow")).length
      }
    ];

    const dsr = store.dsr || {};
    const container = document.createElement("div");
    container.className = "hlo-wrap theme-" + (opts.theme || "tinted");

    container.innerHTML = `
      <div class="trust-banner">
        <div class="trust-left">
          <div class="brand-eyebrow">
            ${BRAND_MARK}
            <span class="trs-pill">${TOP_RATED_SVG} Top-Rated Seller</span>
            <span class="since-tag">Member since ${escapeHtml(store.member_since || "Feb 2013")}</span>
          </div>
          <div class="headline-row">
            <span class="big-score">${escapeHtml(store.positive_percent || 100)}% Positive</span>
            ${renderStars(5)}
          </div>
          <div class="stats-sub">
            <span><strong>${escapeHtml((store.feedback_score || 1305).toLocaleString())}</strong> Feedback Score</span>
            <span>&bull;</span>
            <span><strong>${escapeHtml((store.total_seller_reviews || 1077).toLocaleString())}+</strong> Seller Reviews</span>
            <span>&bull;</span>
            <span><strong>${escapeHtml(store.items_sold || "3,100+")}</strong> Mats Sold</span>
          </div>
        </div>

        <div class="dsr-grid" aria-label="Detailed Seller Ratings">
          <div class="dsr-item">
            <div class="dsr-top"><span>Accurate description</span><strong>${(dsr.accurate_description || 5.0).toFixed(1)} / 5.0</strong></div>
            <div class="dsr-bar"><div class="dsr-fill" style="width:${((dsr.accurate_description || 5) / 5) * 100}%"></div></div>
          </div>
          <div class="dsr-item">
            <div class="dsr-top"><span>Shipping speed</span><strong>${(dsr.shipping_speed || 5.0).toFixed(1)} / 5.0</strong></div>
            <div class="dsr-bar"><div class="dsr-fill" style="width:${((dsr.shipping_speed || 5) / 5) * 100}%"></div></div>
          </div>
          <div class="dsr-item">
            <div class="dsr-top"><span>Reasonable shipping</span><strong>${(dsr.shipping_cost || 5.0).toFixed(1)} / 5.0</strong></div>
            <div class="dsr-bar"><div class="dsr-fill" style="width:${((dsr.shipping_cost || 5) / 5) * 100}%"></div></div>
          </div>
          <div class="dsr-item">
            <div class="dsr-top"><span>Communication</span><strong>${(dsr.communication || 5.0).toFixed(1)} / 5.0</strong></div>
            <div class="dsr-bar"><div class="dsr-fill" style="width:${((dsr.communication || 5) / 5) * 100}%"></div></div>
          </div>
        </div>

        <div class="trust-cta">
          <a class="verify-btn" href="${escapeHtml(store.ebay_profile_url)}" target="_blank" rel="noopener noreferrer">
            Verify on eBay ${EXTERNAL_ICON}
          </a>
          <span class="seller-handle">Official seller: <code>${escapeHtml(store.ebay_username || "healthylineoutlet")}</code></span>
        </div>
      </div>

      <div class="controls-bar">
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="8.5" cy="8.5" r="5.5"/><path d="M13 13l4 4" stroke-linecap="round"/>
          </svg>
          <input type="search" class="search-input" placeholder="Search pain, PEMF, TAJ, condition..." aria-label="Search reviews"/>
        </div>
      </div>

      <div class="reviews-grid"></div>

      <div class="footer-actions">
        <button type="button" class="load-more-btn">Show More Reviews</button>
        <a class="all-ebay-link" href="${escapeHtml(store.ebay_profile_url)}" target="_blank" rel="noopener noreferrer">
          Browse all ${(store.total_seller_reviews || 1077).toLocaleString()} feedback entries on eBay &rarr;
        </a>
      </div>
    `;

    targetEl.appendChild(container);

    const gridEl = container.querySelector(".reviews-grid");
    const loadMoreBtn = container.querySelector(".load-more-btn");
    const searchInput = container.querySelector(".search-input");
    const pillBtns = container.querySelectorAll(".filter-pill");

    function getFiltered() {
      return allReviews.filter((r) => {
        if (state.tag === "PRODUCT_MATCHED" && !r.product) return false;
        if (state.tag !== "ALL" && state.tag !== "PRODUCT_MATCHED") {
          if (!(r.tags || []).includes(state.tag)) return false;
        }
        if (state.query.trim().length > 0) {
          const q = state.query.toLowerCase();
          const hay =
            (r.text || "") +
            " " +
            (r.product ? r.product.name : "") +
            " " +
            (r.item_title || "") +
            " " +
            (r.tags || []).join(" ");
          if (!hay.toLowerCase().includes(q)) return false;
        }
        return true;
      });
    }

    function updateGrid() {
      const filtered = getFiltered();
      if (filtered.length === 0) {
        gridEl.innerHTML = `<div class="empty-state">No reviews matched "<strong>${escapeHtml(state.query)}</strong>". Try searching for <em>TAJ</em>, <em>PEMF</em>, <em>pain</em>, or <em>like new</em>.</div>`;
        loadMoreBtn.style.display = "none";
        return;
      }
      const slice = filtered.slice(0, state.visibleCount);
      gridEl.innerHTML = slice.map((r) => renderCardHtml(r, state.query, false)).join("");

      if (filtered.length > state.visibleCount) {
        const rem = filtered.length - state.visibleCount;
        loadMoreBtn.style.display = "inline-flex";
        loadMoreBtn.textContent = `Show More Reviews (${rem} more)`;
      } else {
        loadMoreBtn.style.display = "none";
      }

      bindCardClicks(modalRoot, gridEl, reviewsById, store);
    }

    pillBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        pillBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.tag = btn.getAttribute("data-tag") || "ALL";
        state.visibleCount = opts.limit || 9;
        updateGrid();
      });
    });

    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value || "";
      state.visibleCount = opts.limit || 9;
      updateGrid();
    });

    loadMoreBtn.addEventListener("click", () => {
      state.visibleCount += opts.limit || 9;
      updateGrid();
    });

    updateGrid();
  }

  function renderBadgeInto(shadowRoot, data, opts) {
    const store = data.store || {};
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "compact-badge";
    btn.innerHTML = `
      ${BRAND_MARK_SM}
      <span class="badge-divider"></span>
      <span class="badge-metrics">
        ${renderStars(5)}
        <span>100% Positive &bull; ${(store.feedback_score || 1305).toLocaleString()} Score</span>
      </span>
      <span class="badge-cta">Read ${(store.total_seller_reviews || 1077).toLocaleString()}+ Reviews</span>
    `;
    shadowRoot.appendChild(btn);

    btn.addEventListener("click", () => {
      openAllReviewsModal(shadowRoot, data, opts);
    });
  }

  function mountContainer(hostEl) {
    if (hostEl.getAttribute("data-hlo-mounted") === "1") return;
    hostEl.setAttribute("data-hlo-mounted", "1");

    const qParams = SCRIPT_INFO.params;
    const layout = (hostEl.getAttribute("data-layout") || qParams.get("layout") || "carousel").toLowerCase();
    const limitAttr = hostEl.getAttribute("data-limit") || qParams.get("limit");
    const limit = limitAttr ? parseInt(limitAttr, 10) : layout === "carousel" ? 55 : 9;
    const productSlug = hostEl.getAttribute("data-product") || qParams.get("product") || "";
    const theme = hostEl.getAttribute("data-theme") || qParams.get("theme") || "tinted";
    const customSrc = hostEl.getAttribute("data-src") || qParams.get("src") || "";
    const enableSeo = (hostEl.getAttribute("data-seo") || qParams.get("seo")) !== "false";
    const autoplayAttr = hostEl.getAttribute("data-autoplay") || qParams.get("autoplay");
    const autoplay = autoplayAttr !== "false";

    const shadow = hostEl.attachShadow({ mode: "open" });
    const styleEl = document.createElement("style");
    styleEl.textContent = WIDGET_STYLES;
    shadow.appendChild(styleEl);

    const loader = document.createElement("div");
    loader.style.cssText = "padding:24px;text-align:center;color:#5d676e;font-size:13.5px;";
    loader.textContent = "Loading verified reviews...";
    shadow.appendChild(loader);

    fetchReviewsData(customSrc)
      .then((data) => {
        loader.remove();
        if (enableSeo && data.store) injectSeoJsonLd(data.store);

        const opts = { limit, productSlug, theme, autoplay };
        if (layout === "showcase") {
          renderShowcaseInto(shadow, data, opts);
        } else if (layout === "badge") {
          renderBadgeInto(shadow, data, opts);
        } else {
          renderCarouselInto(shadow, data, opts);
        }
      })
      .catch((err) => {
        loader.innerHTML = `<span style="color:#3b626b;font-weight:600;">1,077+ Verified Reviews · 100% Positive</span>`;
        console.warn("[HLO eBay Widget] Failed to load reviews JSON:", err);
      });
  }

  function initAll() {
    let targets = document.querySelectorAll("#hlo-ebay-reviews, .hlo-ebay-reviews");
    // Universal 1-Line Embed: if user only pasted <script src=".../widget.js" defer></script> without a <div>,
    // automatically create the container right before the <script> tag!
    if (targets.length === 0 && SCRIPT_EL && SCRIPT_EL.parentNode) {
      const autoDiv = document.createElement("div");
      autoDiv.className = "hlo-ebay-reviews";
      SCRIPT_EL.parentNode.insertBefore(autoDiv, SCRIPT_EL);
      targets = [autoDiv];
    }
    targets.forEach(mountContainer);
  }

  window.HLOEbayReviewsInit = initAll;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
