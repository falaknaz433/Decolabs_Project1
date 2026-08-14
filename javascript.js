/* =========================================================
   SPICE HAVEN — MAIN SCRIPT
   Sections: data, render, cart, filters, forms, lightbox, fx
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     0. FALLBACK IMAGE (used if any Unsplash photo fails to load)
  --------------------------------------------------------- */
  const FALLBACK_IMG =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect width="400" height="300" fill="#F3EAD9"/>
      <circle cx="200" cy="128" r="58" fill="none" stroke="#B5432D" stroke-width="3"/>
      <circle cx="200" cy="128" r="38" fill="none" stroke="#D9A441" stroke-width="2"/>
      <text x="200" y="215" font-family="Georgia, serif" font-size="20" fill="#2B2118" text-anchor="middle">Spice Haven</text>
      <text x="200" y="238" font-family="Georgia, serif" font-size="12" fill="#6E5F4F" text-anchor="middle">image unavailable</text>
    </svg>`);
  document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG' && e.target.src !== FALLBACK_IMG) {
      e.target.onerror = null;
      e.target.src = FALLBACK_IMG;
    }
  }, true);

  /* ---------------------------------------------------------
     1. DATA
  --------------------------------------------------------- */
  const IMG = {
    biryani1:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    biryani2:'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80',
    biryani3:'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=700&q=80',
    karahi1:'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=700&q=80',
    karahi2:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    handi:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    bbq1:'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80',
    bbq2:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
    tikka:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80',
    chinese1:'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
    friedrice:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80',
    manchurian:'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=700&q=80',
    pizza1:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    pizza2:'https://images.unsplash.com/photo-1548365328-8b849e6c7cd0?auto=format&fit=crop&w=700&q=80',
    burger1:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    burger2:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    sandwich:'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=700&q=80',
    pasta1:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80',
    pasta2:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80',
    salad1:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
    salad2:'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    raita1:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    raita2:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    soup1:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
    soup2:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
    starter1:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    starter2:'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=700&q=80',
    dessert1:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80',
    icecream:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80',
    brownie:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    tea:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
    coffee:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
    shake1:'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80',
    mango:'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80',
    mocktail1:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80',
    mocktail2:'https://images.unsplash.com/photo-1546171753-2ce9dbb1d8ab?auto=format&fit=crop&w=700&q=80',
    lime:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=700&q=80',
    naan:'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=700&q=80',
    veg1:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
    veg2:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
    interior:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80',
    dining:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
    chef:'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80',
  };

  // ---- Specialities (Most Loved) ----
  const SPECIALITIES = [
    { id:'spc-1', name:'Chicken Karahi', desc:'Bone-in chicken, hand-crushed tomato & green chilli, finished with ginger.', price:1650, rating:4.9, img: IMG.karahi1, cat:"Chef's Special" },
    { id:'spc-2', name:'Mutton Biryani', desc:'Slow-dum biryani layered with saffron rice and tender mutton.', price:1450, rating:4.8, img: IMG.biryani3, cat:'Biryani & Rice' },
    { id:'spc-3', name:'Beef Seekh Kebab', desc:'Charcoal-grilled minced beef skewers with roasted spices.', price:990, rating:4.7, img: IMG.bbq2, cat:'BBQ & Grilled' },
    { id:'spc-4', name:'Chicken Chow Mein', desc:'Wok-tossed noodles with chicken, capsicum and dark soy.', price:850, rating:4.6, img: IMG.chinese1, cat:'Chinese' },
    { id:'spc-5', name:"Chef's Special Handi", desc:'Rich cream-tomato gravy chicken, a Spice Haven original since 2005.', price:1750, rating:5.0, img: IMG.handi, cat:"Chef's Special" },
    { id:'spc-6', name:'Wood-Fired Peshawari Pizza', desc:'Tandoori chicken, jalapeño & mozzarella on a charcoal crust.', price:1250, rating:4.7, img: IMG.pizza1, cat:'Pizza' },
    { id:'spc-7', name:'Gulab Jamun (2 pc)', desc:'Milk-solid dumplings soaked in warm cardamom syrup.', price:350, rating:4.8, img: IMG.dessert1, cat:'Desserts' },
    { id:'spc-8', name:'Mango Lassi Shake', desc:'Chilled mango pulp blended with yogurt and a hint of cardamom.', price:490, rating:4.9, img: IMG.mango, cat:'Shakes' },
  ];

  // ---- Special Offers ----
  const OFFERS = [
    { tag:"Today's Special", title:'Karahi for Two', desc:'1kg Chicken Karahi + 4 Naan + Raita', price:'Rs. 2,450', img: IMG.karahi2 },
    { tag:'Family Deal', title:'Family Feast (6 pax)', desc:'Mutton Biryani tray + BBQ platter + drinks', price:'Rs. 6,900', img: IMG.bbq1 },
    { tag:'Weekend Deal', title:'Friday BBQ Night', desc:'Unlimited BBQ platters, Fri–Sun after 7 PM', price:'Rs. 2,100 / head', img: IMG.tikka },
    { tag:"Chef's Special", title:'Signature Handi Combo', desc:"Chef's Handi + Garlic Naan + Fresh Lime", price:'Rs. 1,990', img: IMG.handi },
    { tag:'Combo Offer', title:'Pizza + Pasta Combo', desc:'Any wood-fired pizza + Alfredo pasta + shake', price:'Rs. 2,250', img: IMG.pizza2 },
  ];

  // ---- Full menu, grouped by category ----
  const MENU = {
    "Chef's Special": [
      { name:"Chef's Special Handi", desc:'Cream-tomato gravy chicken, a house original.', price:1750, img: IMG.handi },
      { name:'Smoked Mutton Karahi', desc:'Wood-smoked mutton karahi with whole spices.', price:2100, img: IMG.karahi1 },
      { name:'Haveli Platter', desc:"Chef's mixed grill with three signature sauces.", price:2650, img: IMG.bbq1 },
    ],
    Chinese: [
      { name:'Chicken Chow Mein', desc:'Wok-tossed noodles, capsicum, dark soy.', price:850, img: IMG.chinese1 },
      { name:'Chicken Manchurian', desc:'Crisp chicken tossed in tangy Manchurian sauce.', price:920, img: IMG.manchurian },
      { name:'Egg Fried Rice', desc:'Classic wok-fried rice with egg and spring onion.', price:650, img: IMG.friedrice },
      { name:'Chilli Beef Dry', desc:'Thin-sliced beef, dry red chilli, bell pepper.', price:1050, img: IMG.starter1 },
    ],
    Pakistani: [
      { name:'Nihari (Beef)', desc:'Overnight-simmered beef shank stew with masala oil.', price:1350, img: IMG.karahi2 },
      { name:'Chicken White Karahi', desc:'Creamy garlic-yogurt karahi, mild spice.', price:1590, img: IMG.karahi1 },
      { name:'Haleem', desc:'Slow-cooked lentil and meat porridge, crisp onions.', price:750, img: IMG.handi },
    ],
    'BBQ & Grilled': [
      { name:'Beef Seekh Kebab', desc:'Charcoal-grilled minced beef skewers.', price:990, img: IMG.bbq2 },
      { name:'Chicken Malai Boti', desc:'Cream-marinated chicken chunks, char-grilled.', price:1100, img: IMG.tikka },
      { name:'Mutton Chops', desc:'Marinated mutton chops, tandoor-finished.', price:1650, img: IMG.bbq1 },
      { name:'Tandoori Chicken (Half)', desc:'Classic red-marinated tandoori half chicken.', price:1150, img: IMG.tikka },
    ],
    'Biryani & Rice': [
      { name:'Chicken Biryani', desc:'Long-grain basmati, dum-cooked with chicken.', price:750, img: IMG.biryani1 },
      { name:'Beef Biryani', desc:'Layered beef biryani with fried onions.', price:850, img: IMG.biryani2 },
      { name:'Mutton Biryani', desc:'Tender mutton, saffron rice, mint.', price:1450, img: IMG.biryani3 },
      { name:'Vegetable Pulao', desc:'Fragrant rice with seasonal vegetables.', price:590, img: IMG.veg1 },
    ],
    'Karahi & Handi': [
      { name:'Chicken Karahi (Full)', desc:'Tomato-chilli karahi, bone-in chicken.', price:2650, img: IMG.karahi1 },
      { name:'Mutton Karahi (Full)', desc:'Rich mutton karahi, whole green chillies.', price:3450, img: IMG.karahi2 },
      { name:'Chicken Handi', desc:'Buttery, mildly spiced chicken handi.', price:1450, img: IMG.handi },
    ],
    'Fast Food': [
      { name:'Chicken Loaded Fries', desc:'Crispy fries topped with chicken and cheese sauce.', price:650, img: IMG.starter2 },
      { name:'Chicken Nuggets (8pc)', desc:'Crumb-fried chicken nuggets with dip.', price:590, img: IMG.starter1 },
      { name:'Zinger Wrap', desc:'Crispy zinger fillet, slaw, garlic mayo in a wrap.', price:520, img: IMG.sandwich },
    ],
    'Burgers & Sandwiches': [
      { name:'Zinger Burger', desc:'Crispy fried chicken fillet, slaw, spicy mayo.', price:590, img: IMG.burger1 },
      { name:'Beef Cheese Burger', desc:'Grilled beef patty, cheddar, caramelised onion.', price:690, img: IMG.burger2 },
      { name:'Club Sandwich', desc:'Triple-decker with chicken, egg, and vegetables.', price:650, img: IMG.sandwich },
    ],
    Pizza: [
      { name:'Peshawari Tandoori Pizza', desc:'Tandoori chicken, jalapeño, mozzarella.', price:1250, img: IMG.pizza1 },
      { name:'Margherita Pizza', desc:'San Marzano tomato, fresh mozzarella, basil.', price:990, img: IMG.pizza2 },
      { name:'BBQ Chicken Pizza', desc:'Smoky BBQ sauce, grilled chicken, red onion.', price:1190, img: IMG.pizza1 },
    ],
    Pasta: [
      { name:'Chicken Alfredo Pasta', desc:'Creamy parmesan sauce, grilled chicken.', price:990, img: IMG.pasta1 },
      { name:'Arrabiata Penne', desc:'Spicy tomato and garlic penne, fresh basil.', price:850, img: IMG.pasta2 },
    ],
    Vegetarian: [
      { name:'Dal Makhani', desc:'Slow-simmered black lentils, cream, butter.', price:650, img: IMG.veg1 },
      { name:'Vegetable Karahi', desc:'Seasonal vegetables in a tomato-chilli base.', price:750, img: IMG.veg2 },
    ],
    Salads: [
      { name:'Fresh Garden Salad', desc:'Crisp lettuce, cucumber, cherry tomato, vinaigrette.', price:450, img: IMG.salad1 },
      { name:'Russian Salad', desc:'Potato, peas, carrot and mayonnaise, chilled.', price:490, img: IMG.salad2 },
    ],
    Raita: [
      { name:'Mint Raita', desc:'Whisked yogurt with fresh mint and roasted cumin.', price:250, img: IMG.raita1 },
      { name:'Boondi Raita', desc:'Yogurt raita with crisp gram-flour boondi.', price:250, img: IMG.raita2 },
    ],
    Soups: [
      { name:'Hot & Sour Soup', desc:'Chicken, vinegar, white pepper, egg ribbons.', price:450, img: IMG.soup1 },
      { name:'Chicken Corn Soup', desc:'Shredded chicken and sweet corn broth.', price:420, img: IMG.soup2 },
    ],
    'Starters / Appetizers': [
      { name:'Chicken Spring Rolls (6pc)', desc:'Crisp rolls filled with spiced chicken and cabbage.', price:590, img: IMG.starter1 },
      { name:'Vegetable Samosa (4pc)', desc:'Hand-folded pastry with spiced potato filling.', price:350, img: IMG.starter2 },
    ],
    Desserts: [
      { name:'Gulab Jamun (2pc)', desc:'Milk dumplings in cardamom syrup.', price:350, img: IMG.dessert1 },
      { name:'Chocolate Brownie', desc:'Warm fudge brownie with walnuts.', price:450, img: IMG.brownie },
      { name:'Vanilla Ice Cream', desc:'Two scoops of classic vanilla bean ice cream.', price:350, img: IMG.icecream },
    ],
    Beverages: [
      { name:'Fresh Lime Soda', desc:'Sweet or salted, fresh-squeezed lime.', price:290, img: IMG.lime },
      { name:'Soft Drink Can', desc:'Chilled 250ml soft drink, choice of flavour.', price:150, img: IMG.mocktail1 },
    ],
    'Tea & Coffee': [
      { name:'Doodh Patti Chai', desc:'Strong milk tea, simmered with cardamom.', price:190, img: IMG.tea },
      { name:'Cold Coffee', desc:'Chilled espresso blended with milk and ice cream.', price:450, img: IMG.coffee },
    ],
    Shakes: [
      { name:'Mango Shake', desc:'Seasonal mango blended thick and cold.', price:490, img: IMG.mango },
      { name:'Oreo Shake', desc:'Vanilla ice cream blended with crushed Oreo.', price:520, img: IMG.shake1 },
    ],
    Mocktails: [
      { name:'Mint Margarita (Mocktail)', desc:'Fresh mint, lime, soda — alcohol-free.', price:390, img: IMG.mocktail1 },
      { name:'Virgin Mojito', desc:'Mint, lime, sugarcane syrup, soda, crushed ice.', price:410, img: IMG.mocktail2 },
    ],
  };

  const CATEGORY_ORDER = Object.keys(MENU);

  // ---- Gallery ----
  const GALLERY = [
    { img: IMG.interior, alt:'Spice Haven dining interior', cls:'wide' },
    { img: IMG.biryani3, alt:'Mutton biryani close-up' },
    { img: IMG.bbq1, alt:'Charcoal BBQ platter', cls:'tall' },
    { img: IMG.chinese1, alt:'Chicken chow mein' },
    { img: IMG.pizza1, alt:'Wood-fired tandoori pizza' },
    { img: IMG.dessert1, alt:'Gulab jamun dessert' },
    { img: IMG.mocktail1, alt:'Mint mocktail drink' },
    { img: IMG.chef, alt:'Chef preparing food', cls:'wide' },
    { img: IMG.dining, alt:'Warm dining tables' },
    { img: IMG.karahi1, alt:'Chicken karahi in a pan' },
    { img: IMG.naan, alt:'Fresh tandoori naan' },
    { img: IMG.icecream, alt:'Vanilla ice cream scoops' },
  ];

  // ---- Reviews ----
  const REVIEWS = [
    { name:'Ayesha Raza', loc:'DHA, Karachi', text:'The mutton karahi tastes exactly like my nani\u2019s cooking. We have been coming here for twelve years.', init:'AR' },
    { name:'Bilal Ahmed', loc:'Clifton, Karachi', text:'Their BBQ platter for Friday nights is unmatched — smoky, tender, and always fresh off the grill.', init:'BA' },
    { name:'Sana Malik', loc:'Gulshan, Karachi', text:'Ordered the family deal for a birthday — generous portions and the biryani was perfectly spiced.', init:'SM' },
    { name:'Fahad Siddiqui', loc:'Bahadurabad, Karachi', text:'Best zinger burger in the city, hands down. Service is quick even during rush hour.', init:'FS' },
    { name:'Hina Tariq', loc:'PECHS, Karachi', text:'Loved the ambience for our anniversary dinner. The staff even arranged a small cake surprise.', init:'HT' },
    { name:'Omar Farooq', loc:'North Nazimabad, Karachi', text:'Consistent quality every single time. The chicken handi is my go-to comfort order.', init:'OF' },
  ];

  /* ---------------------------------------------------------
     2. UTILITIES
  --------------------------------------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const fmt = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK');
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2200);
  }

  /* ---------------------------------------------------------
     3. PAGE LOAD / LOADER
  --------------------------------------------------------- */
  window.addEventListener('load', () => {
    setTimeout(() => $('#pageLoader').classList.add('loaded'), 250);
  });

  /* ---------------------------------------------------------
     4. NAVBAR: scroll state, hamburger, active link
  --------------------------------------------------------- */
  const header = $('#siteHeader');
  const navLinks = $('#navLinks');
  const hamburger = $('#hamburgerBtn');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    highlightActiveLink();
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  $$('.nav-link').forEach((link) =>
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    })
  );

  const sectionIds = ['home','menu','about','specialities','gallery','reservations','contact'];
  function highlightActiveLink() {
    let current = 'home';
    sectionIds.forEach((id) => {
      const sec = document.getElementById(id);
      if (sec && window.scrollY >= sec.offsetTop - 140) current = id;
    });
    $$('.nav-link').forEach((l) => {
      l.classList.toggle('active-link', l.getAttribute('href') === '#' + current);
    });
  }

  $('#orderNowBtn').addEventListener('click', () => scrollToId('menu'));
  $('#heroOrderBtn').addEventListener('click', () => scrollToId('menu'));
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  /* ---------------------------------------------------------
     5. SCROLL REVEAL + COUNTERS
  --------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  function observeReveals() {
    $$('.reveal-up:not(.is-visible)').forEach((el) => revealObserver.observe(el));
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------
     6. RENDER: SPECIALITIES
  --------------------------------------------------------- */
  function renderSpecialities() {
    const grid = $('#specialGrid');
    grid.innerHTML = SPECIALITIES.map((item) => `
      <div class="special-card reveal-up">
        <div class="special-media">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <span class="special-rating">★ ${item.rating}</span>
        </div>
        <div class="special-body">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="card-foot">
            <span class="price-tag">${fmt(item.price)}</span>
            <button class="add-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}">Add to Order</button>
          </div>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------
     7. RENDER: OFFERS
  --------------------------------------------------------- */
  function renderOffers() {
    const grid = $('#offersGrid');
    grid.innerHTML = OFFERS.map((o) => `
      <div class="offer-card reveal-up">
        <img src="${o.img}" alt="${o.title}" loading="lazy">
        <span class="offer-tag">${o.tag}</span>
        <div class="offer-info">
          <h3>${o.title}</h3>
          <p>${o.desc}</p>
          <span class="offer-price">${o.price}</span>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------
     8. RENDER: MENU + FILTER
  --------------------------------------------------------- */
  let activeCategory = 'All';

  function renderFilters() {
    const wrap = $('#menuFilter');
    const cats = ['All', ...CATEGORY_ORDER];
    wrap.innerHTML = cats.map((c) =>
      `<button class="filter-btn${c === activeCategory ? ' active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');
    $$('.filter-btn', wrap).forEach((btn) =>
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        $$('.filter-btn', wrap).forEach((b) => b.classList.toggle('active', b === btn));
        renderMenuGrid();
      })
    );
  }

  function renderMenuGrid() {
    const grid = $('#menuGrid');
    const cats = activeCategory === 'All' ? CATEGORY_ORDER : [activeCategory];
    let html = '';
    cats.forEach((cat) => {
      (MENU[cat] || []).forEach((item) => {
        html += `
          <div class="menu-card menu-fade-item">
            <div class="menu-thumb"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
            <div class="menu-info">
              <h4>${item.name}</h4>
              <p>${item.desc}</p>
              <div class="card-foot">
                <span class="price-tag">${fmt(item.price)}</span>
                <button class="add-btn" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}">Add</button>
              </div>
            </div>
          </div>`;
      });
    });
    grid.innerHTML = html;
  }

  /* ---------------------------------------------------------
     9. RENDER: GALLERY + LIGHTBOX
  --------------------------------------------------------- */
  function renderGallery() {
    const grid = $('#galleryGrid');
    grid.innerHTML = GALLERY.map((g, i) =>
      `<div class="gallery-item ${g.cls || ''}" data-index="${i}">
         <img src="${g.img}" alt="${g.alt}" loading="lazy">
       </div>`
    ).join('');
    $$('.gallery-item', grid).forEach((el) =>
      el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index, 10)))
    );
  }

  let lightboxIndex = 0;
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImg');
  function openLightbox(i) {
    lightboxIndex = i;
    updateLightbox();
    lightbox.classList.add('open');
  }
  function updateLightbox() {
    const item = GALLERY[lightboxIndex];
    lightboxImg.src = item.img;
    lightboxImg.alt = item.alt;
  }
  $('#lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
  $('#lightboxNext').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % GALLERY.length;
    updateLightbox();
  });
  $('#lightboxPrev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
    updateLightbox();
  });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowRight') $('#lightboxNext').click();
    if (e.key === 'ArrowLeft') $('#lightboxPrev').click();
  });

  /* ---------------------------------------------------------
     10. RENDER: REVIEWS
  --------------------------------------------------------- */
  function renderReviews() {
    const track = $('#reviewsTrack');
    track.innerHTML = REVIEWS.map((r) => `
      <div class="review-card reveal-up">
        <div class="review-stars">★★★★★</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-person">
          <span class="review-avatar">${r.init}</span>
          <div><strong>${r.name}</strong><span>${r.loc}</span></div>
        </div>
      </div>`).join('');
  }

  /* ---------------------------------------------------------
     11. CART SYSTEM (localStorage-backed)
  --------------------------------------------------------- */
  const CART_KEY = 'spiceHavenCart';
  let cart = loadCart();

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function addToOrder(name, price, img) {
    const id = slug(name);
    const existing = cart.find((c) => c.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ id, name, price: Number(price), img, qty: 1 });
    saveCart();
    renderCart();
    toast(`Added "${name}" to your order`);
    pulseCart();
  }

  function pulseCart() {
    const btn = $('#cartToggle');
    btn.style.transform = 'scale(1.15)';
    setTimeout(() => (btn.style.transform = ''), 220);
  }

  function updateQty(id, delta) {
    const item = cart.find((c) => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
    saveCart();
    renderCart();
  }

  function removeItem(id) {
    cart = cart.filter((c) => c.id !== id);
    saveCart();
    renderCart();
  }

  function cartSubtotal() {
    return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  }
  function cartDeliveryFee() {
    const sub = cartSubtotal();
    if (sub === 0) return 0;
    return sub >= 3000 ? 0 : 150;
  }

  function renderCart() {
    const itemsWrap = $('#cartItems');
    const emptyMsg = $('#cartEmptyMsg');
    const count = cart.reduce((s, c) => s + c.qty, 0);
    $('#cartCount').textContent = count;

    if (cart.length === 0) {
      itemsWrap.innerHTML = '';
      itemsWrap.appendChild(emptyMsg);
      emptyMsg.hidden = false;
    } else {
      emptyMsg.hidden = true;
      itemsWrap.innerHTML = cart.map((c) => `
        <div class="cart-item">
          <img src="${c.img}" alt="${c.name}">
          <div class="cart-item-info">
            <h5>${c.name}</h5>
            <div class="cart-item-price">${fmt(c.price)}</div>
            <div class="qty-control">
              <button data-action="dec" data-id="${c.id}" aria-label="Decrease quantity">−</button>
              <span>${c.qty}</span>
              <button data-action="inc" data-id="${c.id}" aria-label="Increase quantity">+</button>
              <button class="cart-item-remove" data-action="remove" data-id="${c.id}">Remove</button>
            </div>
          </div>
        </div>`).join('');
    }

    const sub = cartSubtotal();
    const del = cartDeliveryFee();
    $('#cartSubtotal').textContent = fmt(sub);
    $('#cartDelivery').textContent = del === 0 ? 'Free' : fmt(del);
    $('#cartTotal').textContent = fmt(sub + del);
  }

  $('#cartItems').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === 'inc') updateQty(id, 1);
    if (action === 'dec') updateQty(id, -1);
    if (action === 'remove') removeItem(id);
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-btn');
    if (!btn) return;
    addToOrder(btn.dataset.name, btn.dataset.price, btn.dataset.img);
  });

  // cart panel open/close
  const cartPanel = $('#cartPanel');
  const cartOverlay = $('#cartOverlay');
  function openCart() { cartPanel.classList.add('open'); cartOverlay.classList.add('open'); }
  function closeCart() { cartPanel.classList.remove('open'); cartOverlay.classList.remove('open'); }
  $('#cartToggle').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  /* ---------------------------------------------------------
     12. CHECKOUT MODAL
  --------------------------------------------------------- */
  const checkoutOverlay = $('#checkoutOverlay');
  $('#checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) { toast('Your cart is empty'); return; }
    renderCheckoutSummary();
    closeCart();
    checkoutOverlay.classList.add('open');
  });
  $('#checkoutClose').addEventListener('click', () => checkoutOverlay.classList.remove('open'));
  checkoutOverlay.addEventListener('click', (e) => { if (e.target === checkoutOverlay) checkoutOverlay.classList.remove('open'); });

  function renderCheckoutSummary() {
    $('#checkoutItemsList').innerHTML = cart.map((c) =>
      `<div class="checkout-mini-item"><span>${c.name} × ${c.qty}</span><span>${fmt(c.price * c.qty)}</span></div>`
    ).join('');
    const sub = cartSubtotal();
    const del = cartDeliveryFee();
    $('#chkSubtotal').textContent = fmt(sub);
    $('#chkDelivery').textContent = del === 0 ? 'Free' : fmt(del);
    $('#chkTotal').textContent = fmt(sub + del);
  }

  function validateField(input, errEl, testFn, message) {
    const value = input.value.trim();
    const ok = testFn(value);
    input.classList.toggle('invalid', !ok);
    if (errEl) errEl.textContent = ok ? '' : message;
    return ok;
  }

  const PHONE_RE = /^0\d{2,4}-?\d{6,8}$/;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  $('#placeOrderBtn').addEventListener('click', () => {
    const nameOk = validateField($('#chkName'), $('#err-chkName'), (v) => v.length > 1, 'Please enter your full name');
    const phoneOk = validateField($('#chkPhone'), $('#err-chkPhone'), (v) => PHONE_RE.test(v), 'Enter a valid phone e.g. 0300-1234567');
    const addrOk = validateField($('#chkAddress'), $('#err-chkAddress'), (v) => v.length > 6, 'Please enter a delivery address');
    if (!nameOk || !phoneOk || !addrOk) return;

    const orderNo = 'SH-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    $('#orderNumber').textContent = orderNo;

    cart = [];
    saveCart();
    renderCart();
    checkoutOverlay.classList.remove('open');
    $('#confirmOverlay').classList.add('open');
    $('#checkoutForm').reset();
  });

  $('#confirmCloseBtn').addEventListener('click', () => $('#confirmOverlay').classList.remove('open'));
  $('#confirmOverlay').addEventListener('click', (e) => { if (e.target.id === 'confirmOverlay') $('#confirmOverlay').classList.remove('open'); });

  /* ---------------------------------------------------------
     13. RESERVATION FORM
  --------------------------------------------------------- */
  $('#reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    const nameOk = validateField($('#resName'), $('#err-resName'), (v) => v.length > 1, 'Please enter your name');
    const phoneOk = validateField($('#resPhone'), $('#err-resPhone'), (v) => PHONE_RE.test(v), 'Enter a valid phone number');
    const emailOk = validateField($('#resEmail'), $('#err-resEmail'), (v) => EMAIL_RE.test(v), 'Enter a valid email');
    const guestsOk = validateField($('#resGuests'), $('#err-resGuests'), (v) => v.length > 0, 'Select number of guests');
    const dateOk = validateField($('#resDate'), $('#err-resDate'), (v) => v.length > 0, 'Select a date');
    const timeOk = validateField($('#resTime'), $('#err-resTime'), (v) => v.length > 0, 'Select a time');

    if (nameOk && phoneOk && emailOk && guestsOk && dateOk && timeOk) {
      $('#resSuccess').hidden = false;
      toast('Table reservation requested');
      f.reset();
      setTimeout(() => ($('#resSuccess').hidden = true), 5000);
    }
  });

  /* ---------------------------------------------------------
     14. CONTACT FORM
  --------------------------------------------------------- */
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    const nameOk = validateField($('#cName'), $('#err-cName'), (v) => v.length > 1, 'Please enter your name');
    const emailOk = validateField($('#cEmail'), $('#err-cEmail'), (v) => EMAIL_RE.test(v), 'Enter a valid email');
    const msgOk = validateField($('#cMsg'), $('#err-cMsg'), (v) => v.length > 4, 'Please write a short message');

    if (nameOk && emailOk && msgOk) {
      $('#contactSuccess').hidden = false;
      toast('Message sent to Spice Haven');
      f.reset();
      setTimeout(() => ($('#contactSuccess').hidden = true), 5000);
    }
  });

  /* ---------------------------------------------------------
     15. FOOTER CATEGORY LINKS
  --------------------------------------------------------- */
  $$('[data-cat-link]').forEach((link) =>
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.catLink;
      activeCategory = cat;
      renderFilters();
      renderMenuGrid();
      scrollToId('menu');
    })
  );

  /* ---------------------------------------------------------
     16. INIT
  --------------------------------------------------------- */
  $('#footerYear').textContent = new Date().getFullYear();

  renderSpecialities();
  renderOffers();
  renderFilters();
  renderMenuGrid();
  renderGallery();
  renderReviews();
  renderCart();
  observeReveals();

  // re-observe on resize/dynamic content in case new nodes were added late
  window.addEventListener('load', observeReveals);
})();
