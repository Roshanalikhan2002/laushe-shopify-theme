const products = [
    {
        id: "chia-seeds",
        title: "Chia Seeds (380g)",
        price: 1690,
        originalPrice: 1890,
        image: "assets/products/chia_seeds.jpg",
        category: "Organic",
        tagline: "“Tiny Seeds, Maximum Nutrition”",
        certification: "100% Organic & Non-GMO",
        shortBenefits: "Energy • Digestion • Omega-3",
        purity: "• 100% natural, raw chia seeds free from chemicals.<br>• Richly packed with essential antioxidants.",
        benefits: ["Boosts Energy & Vitality", "Supports Digestion", "Rich in Omega-3", "Promotes Heart Health"],
        usage: "• Add 1–2 teaspoons daily to smoothies, yogurt, or salads.<br>• Soak in water or milk for 10-15 mins for a nutrient-dense gel texture.",
        storage: "• Store in an airtight container.<br>• Keep away from moisture to retain freshness.",
        description: "100% Pure & Organic Chia Seeds offering nature's best for natural energy and digestive health."
    },
    {
        id: "golden-elixir",
        title: "Golden Elixir",
        price: 1490,
        originalPrice: null,
        image: "assets/products/golden_elixir.png",
        category: "Healthcare",
        tagline: "“Your Daily Dose of Healing”",
        certification: "100% Natural Ayurvedic Blend",
        shortBenefits: "Joints • Immunity • Anti-inflammatory",
        purity: "• Dried Ginger Powder, Crushed Black Pepper, Makhana Powder, Dried Turmeric Powder, Crushed Elaichi, Ceylon Cinnamon Powder, Proprietary Herbal Blend<br>• 100% Natural and Effective, Safe for All.",
        benefits: ["Strengthens Joints & Bones", "Fights Inflammation & Soothes Pain", "Clears Acne & Enhances Skin Glow", "Boosts Immunity & Overall Wellness", "Improves Digestion & Gut Health", "Increases Energy & Vitality", "Balances Hormones & Reduces Stress", "Promotes Better Sleep"],
        usage: "• Heat 1 cup of milk, then add 1 tablespoon (7.5g) of the mixture.<br>• Simmer for 5-7 minutes.<br>• Strain if desired, or enjoy as is.",
        storage: "• Store in a cool, dry place.",
        description: "A powerful blend of anti-inflammatory herbs crafted for holistic joint health, beautifully glowing skin, and peaceful sleep."
    },
    {
        id: "panjiri",
        title: "Panjiri (450gm)",
        price: 2990,
        originalPrice: null,
        image: "assets/products/panjiri.png",
        category: "Organic",
        tagline: "“Pure Energy. Pure Tradition.”",
        certification: "Handcrafted & 100% Natural",
        shortBenefits: "Postpartum Strength & Recovery • Natural Energy & Immunity Boost • Winter‑Ready Warmth & Nutrition",
        purity: "• Whole Wheat Flour, Semolina (Sooji, optional), Desi Ghee, Edible Gum (Gond), Phool Makhana (Fox Nuts / Lotus Seeds).<br>• Mixed Nuts & Dry Fruits, Seeds & Kernels, Dried Coconut, Powdered Sweetener, Spices.<br>• All ingredients are natural, no preservatives. May contain nuts and dairy.",
        benefits: ["Supports postpartum recovery and body strengthening", "Boosts energy and stamina naturally", "Strengthens immunity", "Improves digestion and gut health", "Rich in proteins, vitamins, and minerals", "Supports bone and joint health", "Good for lactation and mother’s energy", "Warms and comforts during winters"],
        usage: "• Take 1–2 tablespoons daily.<br>• Can be eaten directly or mixed with warm milk.<br>• Suitable for adults and children above 1 year.",
        storage: "• Store in a cool, dry place in an airtight container.<br>• Consume within 3 months of opening.",
        description: "A traditional postpartum recovery and body strengthening superfood, enriched with dry fruits and vital nutrients."
    },
    {
        id: "desi-ghee",
        title: "Pure Desi Ghee (500gm)",
        price: 2790,
        originalPrice: 2990,
        image: "assets/products/ghee.jpg",
        category: "Organic",
        tagline: "“Nature’s Gold, Rich in Wellness”",
        certification: "100% Pure and traditional",
        shortBenefits: "Immunity • Digestion • Energy",
        purity: "• 100% pure, traditional slow-cooked ghee.",
        benefits: ["Boosts Immunity", "Enhances Digestion", "Supports Energy", "Strengthens Bones", "Improves Lactation", "Rich in nutrients"],
        usage: "• Use in cooking, frying, or roasting.<br>• Add a teaspoon to warm milk for energy.<br>• Can be used for skin and hair nourishment.",
        storage: "• Store in a cool, dry place.<br>• Keep the jar tightly closed after use.",
        description: "Authentic, traditional slow-cooked Desi Ghee perfect for elevating health and culinary delight."
    },
    {
        id: "pure-honey",
        title: "Pure Honey (450gm)",
        price: 2990,
        originalPrice: 3290,
        image: "assets/products/honey.jpg",
        category: "Organic",
        tagline: "“Nature’s Sweetness, Pure & Golden”",
        certification: "100% Pure & Organic",
        shortBenefits: "Immunity • Digestion • Energy",
        purity: "• 100% pure, raw, unprocessed honey.",
        benefits: ["Boosts Immunity", "Enhances Digestion", "Supports Energy", "Natural Antioxidant", "Soothes Throat", "Supports Skin Health"],
        usage: "• Take 1 teaspoon daily directly or mix with warm water, milk, or tea.<br>• Use as a natural sweetener in cooking and baking.<br>• Optional: apply topically for skin nourishment and glow.",
        storage: "• Store in a cool, dry place.<br>• Keep jar tightly closed.<br>• Do not refrigerate to preserve natural properties.",
        description: "100% pure, raw, unprocessed honey sourced from pristine environments to boost your vitality effortlessly."
    },
    {
        id: "hair-oil",
        title: "Royce Hair Oil",
        price: 1690,
        originalPrice: null,
        image: "assets/products/hair_oil.jpg",
        category: "Organic",
        tagline: "“Rooted in Tradition, Proven by Results”",
        certification: "Infused with Sunnah Blessings for Stronger, Healthier Hair",
        shortBenefits: "Hair Growth • Strength • Dandruff Control",
        purity: "• Sunnah-blessed Olive & Black Seed Oil.<br>• Infused with a secret blend of six highly potent, 100% natural oils.",
        benefits: ["Strengthens Roots", "Reduces Hair Fall", "Boosts Shine", "Eliminates Dandruff"],
        usage: "• Apply to scalp and hair tips.<br>• Massage gently for 5-6 minutes to stimulate absorption.<br>• Leave for 4 to 8 hours or overnight for best results.<br>• Wash with a mild shampoo and enjoy the transformation.",
        storage: "• Keep the bottle tightly closed.<br>• Store away from moisture and prolonged sun exposure.",
        description: "A deeply nourishing Sunnah Blessed hair oil formulated to accelerate hair growth, strengthen roots, and restore natural shine."
    },
    {
        id: "skinny-sips",
        title: "Skinny Sips Kehwa",
        price: 1690,
        originalPrice: null,
        image: "assets/products/skinny_sips.jpg",
        category: "Healthcare",
        tagline: "“Sip Your Way to Wellness”",
        certification: "100% Herbal Detox Blend",
        shortBenefits: "Fat Loss • Detox • Metabolism",
        purity: "• Sourced from naturally grown, premium quality herbs.<br>• A pure botanical blend with zero unlisted additives.",
        benefits: ["Rapid Fat Loss", "Purify Your System", "Boost-up Metabolism", "Controls Appetite"],
        usage: "• Take 1 sachet after each main meal (3 times a day).<br>• Follow the easy diet plan included in the box.<br>• With consistent use, you can achieve your target weight in just 3 months. No workouts, no strict routines.",
        storage: "• Store in a cool, dry place.<br>• Keep sachets sealed until ready to use.",
        description: "The smart, herbal solution specifically targeted for sustainable weight loss, metabolism boosting, and comprehensive detox."
    },
    {
        id: "weight-gainer",
        title: "Weight Gainer",
        price: 1990,
        originalPrice: null,
        image: "assets/products/weight_gainer.png",
        category: "Healthcare",
        tagline: "“Build Healthy Mass the Natural Way”",
        certification: "100% Organic & Safe",
        shortBenefits: "Muscle Growth • Stamina • Vitality",
        purity: "• No steroids, chemicals, or artificial mass-producing additives.<br>• Powered entirely by highly nutritious botanical ingredients.",
        benefits: ["Accelerates Natural & Sustainable Weight Gain", "Strengthens Muscles & Bones", "Boosts Energy & Stamina", "Enhances Digesion & Gut Health", "Supports Hormonal Balance & Reduces Stress"],
        usage: "• For Children (2-10): Mix ½ scoop in warm milk or porridge.<br>• For All (Above 10): Mix 1 full scoop in milk, Greek yogurt or blend in a protein shake with dates and bananas.",
        storage: "• Ensure the container is tightly sealed after each use.<br>• Store away from direct sunlight in a dry environment.",
        description: "A 100% Organic weight gainer designed precisely for safe muscle growth, sustainable stamina enhancement, and hormonal balance."
    }
];

let cart = [];

// DOM Elements
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Functions
function toggleCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    if (!drawer || !overlay) return;
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    if (!cartDrawer.classList.contains('open')) toggleCart();
}

function updateCartUI() {
    if (!cartItems || !cartTotal) return;
    cartItems.innerHTML = cart.length === 0 ? '<p style="text-align:center; padding: 20px; opacity: 0.5;">Your cart is empty.</p>' : '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item" style="display: flex; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid #EEE; padding-bottom: 15px;">
                <img src="${item.image}" style="width: 70px; height: 70px; border-radius: 10px; object-fit: cover;">
                <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 14px;">${item.title}</h4>
                    <p style="font-size: 12px; margin: 5px 0;">Rs. ${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
                <div style="font-weight: 800;">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
            </div>
        `;
    });
    
    cartTotal.innerText = `Rs. ${total.toLocaleString()}`;
}

// Search Functions
function toggleSearch() {
    let searchBar = document.getElementById('search-bar');
    if (!searchBar) {
        // Create dynamic search bar
        searchBar = document.createElement('div');
        searchBar.id = 'search-bar';
        searchBar.innerHTML = `
            <form onsubmit="executeSearch(event)" style="width: 100%; max-width: 600px; position: relative;">
                <input type="text" id="search-input" placeholder="Search products (e.g. Honey) ...">
                <button type="submit" style="position: absolute; right: 15px; top: 15px; background: none; border: none; cursor: pointer;">
                    <ion-icon name="search-outline" style="font-size: 20px; color: var(--deep-forest);"></ion-icon>
                </button>
            </form>
        `;
        document.querySelector('.sticky-header').appendChild(searchBar);
    }
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 50);
    }
}

function executeSearch(e) {
    if (e) e.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        // Only redirect to catalog if not already there, but with parameters
        window.location.href = `catalog.html?search=${encodeURIComponent(query)}`;
    }
}

// Global Exports
window.toggleCart = toggleCart;
window.addToCart = addToCart;
window.toggleSearch = toggleSearch;
window.executeSearch = executeSearch;
window.toggleMobileMenu = toggleMobileMenu;
