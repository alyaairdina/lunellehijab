/*==================================================
                LOADING SCREEN
==================================================*/

function initializeLoadingScreen(){

    const loadingScreen=document.getElementById("loading-screen");

    if(!loadingScreen) return;

    setTimeout(()=>{

        loadingScreen.classList.add("loading-hidden");

    },1200);

}

/*==================================================
                GENERATE NAVBAR
==================================================*/

function generateHeader(){

    const header = document.getElementById("header");

    if(!header) return;

    const currentUser = JSON.parse(localStorage.getItem("lunelleCurrentUser") || "null");

    const accountHTML = currentUser
        ? `
<div class="account-menu">

<button type="button" class="icon-btn account-btn" id="accountMenuBtn">

<i class="fa-solid fa-circle-user"></i>

<span class="account-name">${currentUser.name.split(" ")[0]}</span>

</button>

<div class="account-dropdown" id="accountDropdown">

<span class="account-dropdown-name">Hi, ${currentUser.name}</span>

<button type="button" id="logoutBtn">Logout</button>

</div>

</div>
`
        : `
<a href="login.html" class="icon-btn">

<i class="fa-regular fa-user"></i>

</a>
`;

    header.innerHTML = `

<header class="navbar">

<div class="container nav-container">

<a href="index.html" class="logo">

<img src="images/logo.png"
alt="Lunelle Logo">

</a>

<nav class="desktop-nav">

<ul class="nav-menu">

<li>

<a href="index.html">

Home

</a>

</li>

<li>

<a href="new-arrival.html">

New Arrival

</a>

</li>

<li class="nav-dropdown">

<a href="basic-hijab.html">
Basic Hijab
<i class="fa-solid fa-chevron-down"></i>
</a>

<ul class="dropdown-menu">

<li><a href="basic-shawl.html">Basic Shawl</a></li>

<li><a href="basic-square.html">Basic Square</a></li>

<li><a href="instant.html">Instant Hijab</a></li>

</ul>

</li>

<li class="nav-dropdown">

<a href="printed-hijab.html">
Printed Hijab
<i class="fa-solid fa-chevron-down"></i>
</a>

<ul class="dropdown-menu">

<li><a href="printed-shawl.html">Printed Shawl</a></li>

<li><a href="printed-square.html">Printed Square</a></li>

</ul>

</li>

<li class="nav-dropdown">

<a href="accessories.html">
Accessories
<i class="fa-solid fa-chevron-down"></i>
</a>

<ul class="dropdown-menu">

<li><a href="brooch.html">Brooch</a></li>

<li><a href="pins.html">Hijab Pins</a></li>

</ul>

</li>

<li>

<a href="sale.html">

Sale

</a>

</li>

</ul>

</nav>

<div class="nav-right">

${accountHTML}

<a href="cart.html" class="icon-btn cart-btn">

<i class="fa-solid fa-bag-shopping"></i>

<span class="cart-count">

0

</span>

</a>

</div>

</div>

</header>

`;

    const accountBtn = document.getElementById("accountMenuBtn");
    const accountDropdown = document.getElementById("accountDropdown");
    const logoutBtn = document.getElementById("logoutBtn");

    if(accountBtn && accountDropdown){

        accountBtn.addEventListener("click", () => {

            accountDropdown.classList.toggle("show");

        });

        document.addEventListener("click", (e) => {

            if(!accountBtn.contains(e.target) && !accountDropdown.contains(e.target)){

                accountDropdown.classList.remove("show");

            }

        });

    }

    if(logoutBtn){

        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("lunelleCurrentUser");

            window.location.href = "index.html";

        });

    }

}

/*==================================================
                GENERATE FOOTER
==================================================*/

function generateFooter(){

    const footer = document.getElementById("footer");

    if(!footer) return;

    footer.innerHTML = `

<footer class="footer">

<div class="footer-newsletter">

<div class="container">

<h2>Subscribe To Our Newsletter</h2>

<p>Be the first to receive our latest collections, exclusive offers and styling inspiration.</p>

<form class="newsletter-form">

<input type="email" placeholder="Enter your email address">

<button type="submit">Subscribe</button>

</form>

</div>

</div>

<div class="footer-main">

<div class="container footer-grid">

<div class="footer-about">

<img src="images/logo.png" alt="Lunelle Logo">

<h3>Grace In Every Fold</h3>

<p>Elegant hijabs crafted for confidence, comfort and everyday sophistication.</p>

</div>

<div>

<h4>Company</h4>

<ul>

<li><a href="about.html">About Us</a></li>

<li><a href="privacy-policy.html">Privacy Policy</a></li>

<li><a href="group.html">Meet Our Team</a></li>

</ul>

</div>

<div>

<h4>Customer Care</h4>

<ul>

<li><a href="faq.html">FAQ</a></li>

<li><a href="return-policy.html">Return Policy</a></li>

</ul>

</div>

<div>

<h4>Contact</h4>

<ul class="footer-contact">

<li><i class="fa-solid fa-phone"></i><span>+60 12-345 6789</span></li>

<li><i class="fa-solid fa-envelope"></i><a href="mailto:lunellehijabs@gmail.com">lunellehijabs@gmail.com</a></li>

</ul>

</div>

<div>

<h4>Follow Us</h4>

<div class="footer-social">

<a href="https://www.instagram.com/lunellehijabs" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>

<a href="https://www.tiktok.com/@lunellehijabs" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i></a>

</div>

</div>

</div>

</div>

<div class="footer-bottom">

<div class="container">

<div class="footer-copy">

<p>&copy; 2026 Lunelle Hijab. All Rights Reserved.</p>

</div>

<div class="footer-disclaimer">

<p><strong>Disclaimer:</strong> This website was developed solely for educational purposes for the IML254 Introduction to Web Content Development course and is not the official website of Lunelle Hijab. &nbsp;|&nbsp; <strong>Last Updated:</strong> July 2026 &nbsp;|&nbsp; <strong>Recommended Browser:</strong> Microsoft Edge, Google Chrome &nbsp;|&nbsp; <strong>Recommended Resolution:</strong> 1920 &times; 1080</p>

</div>

</div>

</div>

</footer>

`;

}

/*==================================================
                NAVBAR SCROLL
==================================================*/

function initializeNavbar(){

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar");

        if(!navbar) return;

        if(window.scrollY > 60){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

}

/*==================================================
                START WEBSITE
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeLoadingScreen();

    generateHeader();

    generateFooter();

	initializeNavbar();

	initializeFeedback();

	initializeNewsletter();

	initializePromoClaim();

	initializeMembershipPopup();

	initializeShippingPopup();

	initializeClearancePopup();

	initializeMemberPromoCard();

	initializeLunaAI();

	initializeAuthTabs();

    loadProductPage();

    loadNewArrivalPage();

    loadBestSeller();

    loadCollectionProducts("basic-hijab", "basicHijabProducts");
	
	loadPaginatedCollection("basic-shawl", "basicShawlProducts");
	
	loadPaginatedCollection("basic-square", "basicSquareProducts");
	
	loadCollectionProducts("instant", "instantProducts");

	loadPaginatedCollection("printed-shawl", "printedShawlProducts");

	loadPaginatedCollection("printed-square", "printedSquareProducts");

    loadCollectionProducts("printed-hijab", "printedHijabProducts");

    loadCollectionProducts("accessories", "accessoriesProducts");

	loadPaginatedCollection("brooch", "broochProducts");

	loadPinsPage();

    loadClearanceProducts("saleProducts");

    updateCartBadge();

    loadCart();

    initializePromoInput();

    initializeCheckout();

});
 
/*==================================================
                HERO SLIDER
==================================================*/

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    if(slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));

    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");

    if(dots[index]){

        dots[index].classList.add("active");

    }

}

function nextSlide(){

    if(slides.length === 0) return;

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    setInterval(nextSlide,5000);

}

/*==================================================
                PRODUCT PAGE
==================================================*/

function loadProductPage(){

    const container=document.getElementById("product-details");

    if(!container) return;

    const params=new URLSearchParams(window.location.search);

    const productId=params.get("id");

    const product=products.find(item=>item.id===productId);

    if(!product){

    container.innerHTML = "<h2>Product not found.</h2>";

    return;

}

const relatedProducts = products.filter(item =>
    item.collection === product.collection &&
    item.id !== product.id
);

container.innerHTML = `

<div class="product-container">

<div class="product-left">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="product-right">

<h2>${product.collection}</h2>

<h3>${product.name}</h3>

<div class="product-stars">

★★★★★ (${product.reviews} Reviews)

</div>

<div class="product-price-page">

RM ${product.price.toFixed(2)}

</div>

<div class="product-meta">

<p><strong>Material:</strong> ${product.material}</p>

<p><strong>Stock:</strong> ${product.stock}</p>

<p><strong>Category:</strong> ${product.category}</p>

</div>

<div class="quantity-box">

<button class="quantity-btn" id="minusQty">−</button>

<span class="quantity-value" id="quantity">1</span>

<button class="quantity-btn" id="plusQty">+</button>

</div>

<button class="btn add-cart">

Add To Cart

</button>

<div class="product-description">

${product.description}

</div>

</div>

</div>

${relatedProducts.length > 0 ? `

<div class="related-products">

<h3>${product.category === "pins" ? "Shop Others" : "Shop Other Colours"}</h3>

<div class="related-grid">

${relatedProducts.map(item => `

<a href="product-detail.html?id=${item.id}"
   class="related-card">

<img src="${item.image}"
     alt="${item.name}">

<span>${item.name}</span>

</a>

`).join("")}

</div>

</div>

` : ""}

`;

    let quantity=1;

    const quantityText=document.getElementById("quantity");

    document.getElementById("plusQty").onclick=()=>{

        quantity++;

        quantityText.textContent=quantity;

    };

    document.getElementById("minusQty").onclick=()=>{

        if(quantity>1){

            quantity--;

            quantityText.textContent=quantity;

        }

    };

    const addCartBtn = container.querySelector(".add-cart");

    if(addCartBtn){

        addCartBtn.onclick = () => {

            addToCart(product.id, quantity);

        };

    }

}

/*==================================================
            NEW ARRIVAL PAGE
==================================================*/

function loadNewArrivalPage(){

    const container = document.getElementById("newArrivalProducts");

    if(!container) return;

    const paginationEl = document.getElementById("paginationControls");

    const prevBtn = document.getElementById("prevPage");

    const nextBtn = document.getElementById("nextPage");

    const sortSelect = document.getElementById("sortProducts");

    const perPage = 4;

    let currentPage = 1;

    const newProducts = products.filter(product => product.badge === "New");

    function getSorted(){

        const sorted = [...newProducts];

        if(sortSelect && sortSelect.value === "High-Low"){

            sorted.sort((a,b) => b.price - a.price);

        }

        else{

            sorted.sort((a,b) => a.price - b.price);

        }

        return sorted;

    }

    function renderPaginationButtons(totalPages){

        if(!paginationEl || !nextBtn) return;

        paginationEl.querySelectorAll(".page-num").forEach(btn => btn.remove());

        for(let i = 1; i <= totalPages; i++){

            const btn = document.createElement("button");

            btn.textContent = i;

            btn.className = "page-num" + (i === currentPage ? " active" : "");

            btn.addEventListener("click", () => {

                currentPage = i;

                renderPage();

            });

            nextBtn.parentNode.insertBefore(btn, nextBtn);

        }

    }

    function renderPage(){

        const sorted = getSorted();

        const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));

        if(currentPage > totalPages) currentPage = totalPages;

        const start = (currentPage - 1) * perPage;

        container.innerHTML = sorted.slice(start, start + perPage).map(buildProductCard).join("");

        renderPaginationButtons(totalPages);

    }

    if(sortSelect){

        sortSelect.addEventListener("change", () => {

            currentPage = 1;

            renderPage();

        });

    }

    if(prevBtn){

        prevBtn.addEventListener("click", () => {

            if(currentPage > 1){

                currentPage--;

                renderPage();

            }

        });

    }

    if(nextBtn){

        nextBtn.addEventListener("click", () => {

            const totalPages = Math.max(1, Math.ceil(getSorted().length / perPage));

            if(currentPage < totalPages){

                currentPage++;

                renderPage();

            }

        });

    }

    renderPage();

}

/*==================================================
                BEST SELLERS
==================================================*/

function loadBestSeller(){

    const container=document.querySelector(".best-seller-grid");

    if(!container) return;

    const bestSeller=products.filter(product=>

        product.badge==="Best Seller"

    );

    container.innerHTML = bestSeller.slice(0,4).map(buildProductCard).join("");

}

/*==================================================
            CUSTOMER FEEDBACK
==================================================*/

const stars=document.querySelectorAll(".rating-stars i");

stars.forEach((star,index)=>{

    star.addEventListener("click",()=>{

        stars.forEach((item,i)=>{

            if(i<=index){

                item.classList.remove("fa-regular");

                item.classList.add("fa-solid");

            }

            else{

                item.classList.remove("fa-solid");

                item.classList.add("fa-regular");

            }

        });

    });

});

/*==================================================
                NEWSLETTER
==================================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

    newsletter.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you for subscribing to Lunelle Hijab!");

        newsletter.reset();

    });

}

function loadPaginatedCollection(category, containerId){

    const container = document.getElementById(containerId);
    const pagination = document.getElementById("collectionPagination");
    const previousButton = document.getElementById("prevCollectionPage");
    const nextButton = document.getElementById("nextCollectionPage");
    const count = document.getElementById("visibleProductCount");

    if(!container || !pagination ||
       !previousButton || !nextButton) return;

    const collectionProducts = products.filter(product =>
        product.category === category
    );

    const productsPerPage = 4;

    let currentPage = 1;

    const totalPages = Math.ceil(
        collectionProducts.length / productsPerPage
    );

    function renderPagination(){

        pagination.querySelectorAll(".page-num").forEach(button => {
            button.remove();
        });

        for(let page = 1; page <= totalPages; page++){

            const pageButton = document.createElement("button");

            pageButton.type = "button";
            pageButton.textContent = page;
            pageButton.className =
                "page-num" + (page === currentPage ? " active" : "");

            pageButton.addEventListener("click", () => {

                currentPage = page;

                renderPage();

            });

            pagination.insertBefore(pageButton, nextButton);

        }

        previousButton.disabled = currentPage === 1;

        nextButton.disabled = currentPage === totalPages;

    }

    function renderPage(){

        const start = (currentPage - 1) * productsPerPage;

        const visibleProducts = collectionProducts.slice(
            start,
            start + productsPerPage
        );

        displayProducts(visibleProducts, container);

        if(count){

            count.textContent = visibleProducts.length;

        }

        renderPagination();

    }

    previousButton.addEventListener("click", () => {

        if(currentPage > 1){

            currentPage--;

            renderPage();

        }

    });

    nextButton.addEventListener("click", () => {

        if(currentPage < totalPages){

            currentPage++;

            renderPage();

        }

    });

    renderPage();

}

/*==================================================
                HIJAB PINS PAGE
==================================================*/

function loadPinsPage(){

    const container = document.getElementById("pinsProducts");

    if(!container) return;

    const sortSelect = document.getElementById("pinsSort");
    const count = document.getElementById("visiblePinsCount");

    const pinsProducts = products.filter(product =>
        product.category === "pins"
    );

    function renderPins(){

        const sorted = [...pinsProducts];

        if(sortSelect && sortSelect.value === "High-Low"){

            sorted.sort((a,b) => b.price - a.price);

        }

        else{

            sorted.sort((a,b) => a.price - b.price);

        }

        displayProducts(sorted, container);

        if(count){

            count.textContent = sorted.length;

        }

    }

    if(sortSelect){

        sortSelect.addEventListener("change", renderPins);

    }

    renderPins();

}

/*==================================================
            COLLECTION PRODUCTS
==================================================*/

function loadCollectionProducts(category, containerId){

    const container=document.getElementById(containerId);

    if(!container) return;

    let filteredProducts=products.filter(product=>

        product.mainCategory === category ||
		product.category === category

    );

    displayProducts(filteredProducts,container);

    initializeFilters(filteredProducts,container);

}

/*==================================================
            CLEARANCE PRODUCTS (SALE PAGE)
==================================================*/

function loadClearanceProducts(containerId){

    const container = document.getElementById(containerId);
    const pagination = document.getElementById("collectionPagination");
    const previousButton = document.getElementById("prevCollectionPage");
    const nextButton = document.getElementById("nextCollectionPage");
    const count = document.getElementById("visibleProductCount");

    if(!container || !pagination ||
       !previousButton || !nextButton) return;

    const clearanceProducts = products.filter(product =>

        product.badge === "Sale"

    );

    const productsPerPage = 4;

    let currentPage = 1;

    const totalPages = Math.max(1, Math.ceil(
        clearanceProducts.length / productsPerPage
    ));

    function renderPagination(){

        pagination.querySelectorAll(".page-num").forEach(button => {
            button.remove();
        });

        for(let page = 1; page <= totalPages; page++){

            const pageButton = document.createElement("button");

            pageButton.type = "button";
            pageButton.textContent = page;
            pageButton.className =
                "page-num" + (page === currentPage ? " active" : "");

            pageButton.addEventListener("click", () => {

                currentPage = page;

                renderPage();

            });

            pagination.insertBefore(pageButton, nextButton);

        }

        previousButton.disabled = currentPage === 1;

        nextButton.disabled = currentPage === totalPages;

    }

    function renderPage(){

        const start = (currentPage - 1) * productsPerPage;

        const visibleProducts = clearanceProducts.slice(
            start,
            start + productsPerPage
        );

        displayProducts(visibleProducts, container);

        if(count){

            count.textContent = visibleProducts.length;

        }

        renderPagination();

    }

    previousButton.addEventListener("click", () => {

        if(currentPage > 1){

            currentPage--;

            renderPage();

        }

    });

    nextButton.addEventListener("click", () => {

        if(currentPage < totalPages){

            currentPage++;

            renderPage();

        }

    });

    renderPage();

}

/*==================================================
        SHARED PRODUCT CARD TEMPLATE
==================================================*/

function buildProductCard(product){

    const priceHTML = product.originalPrice
        ? `RM ${product.price.toFixed(2)} <span class="price-original">RM ${product.originalPrice.toFixed(2)}</span>`
        : `RM ${product.price.toFixed(2)}`;

    return `

<div class="product-card">

<div class="product-image">

<a href="product-detail.html?id=${product.id}">

<img src="${product.image}" alt="${product.name}">

</a>

${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}

</div>

<div class="product-info">

<p class="product-collection">${product.collection}</p>

<h3 class="product-name">${product.name}</h3>

<div class="product-rating">★★★★★ <span>(${product.reviews})</span></div>

<p class="product-material">${product.material}</p>

<div class="product-price">${priceHTML}</div>

<div class="product-buttons">

<a href="product-detail.html?id=${product.id}" class="btn">View Details</a>

<button class="btn add-cart-btn" data-id="${product.id}">Add To Cart</button>

</div>

</div>

</div>

`;

}

/*==================================================
            DISPLAY PRODUCTS
==================================================*/

function displayProducts(productList,container){

    container.innerHTML = productList.map(buildProductCard).join("");

}

/*==================================================
            FILTERS
==================================================*/

function initializeFilters(originalProducts,container){

    const material=document.getElementById("materialFilter");

    const price=document.getElementById("priceFilter");

    const sort=document.getElementById("sortProducts");

    if(!material || !price || !sort) return;

    function updateProducts(){

        let filtered=[...originalProducts];

        if(material.value!=="All Materials"){

            filtered=filtered.filter(product=>

                product.material===material.value

            );

        }

        if(price.value==="Below RM30"){

            filtered=filtered.filter(product=>

                product.price<30

            );

        }

        else if(price.value==="RM30 - RM50"){

            filtered=filtered.filter(product=>

                product.price>=30 && product.price<=50

            );

        }

        else if(price.value==="Above RM50"){

            filtered=filtered.filter(product=>

                product.price>50

            );

        }

        switch(sort.value){

            case "Price: Low to High":

                filtered.sort((a,b)=>a.price-b.price);

            break;

            case "Price: High to Low":

                filtered.sort((a,b)=>b.price-a.price);

            break;

            case "Best Seller":

                filtered=filtered.filter(product=>

                    product.badge==="Best Seller"

                );

            break;

        }

        displayProducts(filtered,container);

    }

material.onchange = updateProducts;
price.onchange = updateProducts;
sort.onchange = updateProducts;

updateProducts();

}
/*==================================================
                SHOPPING CART
==================================================*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/*-------------------------
ADD TO CART
-------------------------*/

function addToCart(productId, qty){

    qty = qty || 1;

    const product = products.find(item => item.id == productId);

    if(!product){

        alert("Product not found!");

        return;

    }

    const existing = cart.find(item => item.id == product.id);

    if(existing){

        existing.quantity += qty;

    }

    else{

        cart.push({

            ...product,

            quantity:qty

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();

    alert(product.name + " added to cart!");

}

/*-------------------------
ADD TO CART (grid buttons)
-------------------------*/

document.addEventListener("click", (e) => {

    const btn = e.target.closest(".add-cart-btn");

    if(!btn) return;

    addToCart(btn.dataset.id, 1);

});

/*-------------------------
UPDATE CART BADGE
-------------------------*/

function updateCartBadge(){

    const badge = document.querySelector(".cart-count");

    if(!badge) return;

    let total = 0;

    cart.forEach(item=>{

        total += item.quantity;

    });

    badge.textContent = total;

}

/*-------------------------
LOAD CART PAGE
-------------------------*/

function loadCart(){

    const cartContainer = document.getElementById("cartItems");

    if(!cartContainer) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item,index)=>{

        subtotal += item.price * item.quantity;

        cartContainer.innerHTML += `

<tr>

<td>

<div class="cart-product">

<img src="${item.image}">

<div>

<h4>${item.name}</h4>

<p>${item.material}</p>

</div>

</div>

</td>

<td>

RM ${item.price.toFixed(2)}

</td>

<td>

<div class="qty-control">

<button type="button" class="qty-btn" onclick="changeQty(${index},-1)">-</button>

<span class="qty-value">${item.quantity}</span>

<button type="button" class="qty-btn" onclick="changeQty(${index},1)">+</button>

</div>

</td>

<td>

RM ${(item.price*item.quantity).toFixed(2)}

</td>

<td>

<button onclick="removeCart(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

    });

    document.getElementById("subtotal").textContent =
    "RM " + subtotal.toFixed(2);

    const shipping = subtotal >= 150 ? 0 : 8;

    const shippingEl = document.getElementById("shippingCost");

    if(shippingEl){

        shippingEl.textContent = shipping === 0 ? "FREE" : "RM " + shipping.toFixed(2);

    }

    const shippingHintEl = document.getElementById("shippingHint");

    if(shippingHintEl){

        if(shipping === 0){

            shippingHintEl.textContent = "You've unlocked free shipping!";

        }

        else{

            shippingHintEl.textContent = "Spend RM " + (150 - subtotal).toFixed(2) + " more for free shipping.";

        }

    }

    let savedPromo = localStorage.getItem("appliedPromo") || "";

    const currentUser = JSON.parse(localStorage.getItem("lunelleCurrentUser") || "null");

    let promoDiscount = 0;
    let memberDiscount = 0;
    const discountLabelParts = [];

    if(savedPromo){

        const promoAmount = calculatePromoDiscount(savedPromo, subtotal, cart);

        if(promoAmount === null){

            // Cart contents no longer qualify for this promo (e.g. items were changed/removed)
            localStorage.removeItem("appliedPromo");
            savedPromo = "";

        }

        else{

            promoDiscount = promoAmount;
            discountLabelParts.push(savedPromo);

        }

    }

    if(currentUser){

        memberDiscount = subtotal * 0.10;
        discountLabelParts.push("Member 10%");

    }

    const discount = promoDiscount + memberDiscount;

    const discountLabel = discountLabelParts.length
        ? "Discount (" + discountLabelParts.join(" + ") + ")"
        : "Discount";

    const discountEl = document.getElementById("discount");

    if(discountEl){

        discountEl.textContent = "- RM " + discount.toFixed(2);

    }

    const discountLabelEl = document.getElementById("discountLabel");

    if(discountLabelEl){

        discountLabelEl.textContent = discountLabel;

    }

    document.getElementById("grandTotal").textContent =
    "RM " + (subtotal + shipping - discount).toFixed(2);

    localStorage.setItem("cartDiscount", discount);

    const promoInput = document.getElementById("promoCode");

    if(promoInput && savedPromo && document.activeElement !== promoInput){

        promoInput.value = savedPromo;

    }

}

/*-------------------------
CHANGE QUANTITY
-------------------------*/

function changeQty(index,value){

    cart[index].quantity += value;

    if(cart[index].quantity <=0){

        cart.splice(index,1);

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

    updateCartBadge();

}

/*-------------------------
REMOVE
-------------------------*/

function removeCart(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

    updateCartBadge();

}

/*-------------------------
PROMO
-------------------------*/

function calculatePromoDiscount(promo, subtotal, cartItems){

    cartItems = cartItems || cart;

    switch(promo){

        case "LUNELLE10":

            return subtotal * 0.10;

        case "BUY2SAVE10":{

            const hijabQty = cartItems.reduce((total,item)=>{

                const isHijab = item.mainCategory === "basic-hijab" || item.mainCategory === "printed-hijab";

                return total + (isHijab ? item.quantity : 0);

            },0);

            if(hijabQty < 2) return null;

            return subtotal * 0.10;

        }

        case "HIJAB15":

            return subtotal * 0.15;

        case "NEW20":

            return subtotal * 0.20;

        default:

            return null;

    }

}

function applyPromo(showAlert){

    showAlert = showAlert !== false;

    const promoInput = document.getElementById("promoCode");

    if(!promoInput) return;

    const promo = promoInput.value.trim().toUpperCase();

    if(!promo){

        localStorage.removeItem("appliedPromo");

        loadCart();

        return;

    }

    let subtotal = 0;

    cart.forEach(item=>{

        subtotal += item.price * item.quantity;

    });

    const discountAmount = calculatePromoDiscount(promo, subtotal, cart);

    if(discountAmount === null){

        if(showAlert){

            if(promo === "BUY2SAVE10"){

                alert("BUY2SAVE10 only applies when your cart has 2 or more hijabs (Basic, Printed or Instant Hijab).");

            }

            else{

                alert("Invalid Promo Code");

            }

        }

        localStorage.removeItem("appliedPromo");

        loadCart();

        return;

    }

    localStorage.setItem("appliedPromo", promo);

    loadCart();

}

/*-------------------------
AUTO-APPLY PROMO WHILE TYPING
-------------------------*/

function initializePromoInput(){

    const promoInput = document.getElementById("promoCode");

    if(!promoInput) return;

    let debounceTimer;

    promoInput.addEventListener("input", () => {

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {

            applyPromo(false);

        }, 400);

    });

}

/*==================================================
            CHECKOUT / RECEIPT
==================================================*/

function initializeCheckout(){

    const form = document.getElementById("checkoutForm");

    if(!form) return;

    const messageEl = document.getElementById("checkoutMessage");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        messageEl.textContent = "";

        messageEl.className = "form-message";

        const name = document.getElementById("customerName").value.trim();

        const email = document.getElementById("customerEmail").value.trim();

        const phone = document.getElementById("customerPhone").value.trim();

        const state = document.getElementById("customerState").value;

        const address = document.getElementById("customerAddress").value.trim();

        const paymentInput = form.querySelector('input[name="payment"]:checked');

        if(!name || !email || !phone || !state || !address){

            messageEl.textContent = "Please fill in all customer information fields.";

            messageEl.className = "form-message error";

            return;

        }

        if(!paymentInput){

            messageEl.textContent = "Please select a payment method.";

            messageEl.className = "form-message error";

            return;

        }

        cart = JSON.parse(localStorage.getItem("cart")) || [];

        if(cart.length === 0){

            messageEl.textContent = "Your cart is empty. Add items before checking out.";

            messageEl.className = "form-message error";

            return;

        }

        let subtotal = 0;

        cart.forEach(item => {

            subtotal += item.price * item.quantity;

        });

        const shipping = subtotal >= 150 ? 0 : 8;

        const discount = parseFloat(localStorage.getItem("cartDiscount")) || 0;

        const promoCode = localStorage.getItem("appliedPromo") || "";

        const currentUserForReceipt = JSON.parse(localStorage.getItem("lunelleCurrentUser") || "null");

        const receiptLabelParts = [];

        if(promoCode) receiptLabelParts.push(promoCode);

        if(currentUserForReceipt) receiptLabelParts.push("Member 10%");

        const discountLabel = receiptLabelParts.length
            ? "Discount (" + receiptLabelParts.join(" + ") + ")"
            : "Discount";

        const grandTotal = subtotal + shipping - discount;

        const orderId = "LH" + Date.now().toString().slice(-8);

        const orderDate = new Date().toLocaleString("en-MY", {

            dateStyle: "medium",

            timeStyle: "short"

        });

        renderReceipt({

            orderId, orderDate, name, email, phone, state, address,

            payment: paymentInput.value,

            items: cart,

            subtotal, shipping, discount, promoCode, discountLabel, grandTotal

        });

        localStorage.removeItem("cart");

        localStorage.removeItem("cartDiscount");

        localStorage.removeItem("appliedPromo");

        cart = [];

        updateCartBadge();

    });

}

function renderReceipt(order){

    const section = document.querySelector(".checkout-section .container");

    if(!section) return;

    const itemRows = order.items.map(item => `

<tr>

<td>${item.name}</td>

<td>${item.quantity}</td>

<td>RM ${item.price.toFixed(2)}</td>

<td>RM ${(item.price*item.quantity).toFixed(2)}</td>

</tr>

`).join("");

    section.innerHTML = `

<div class="receipt-card" id="receiptCard">

<div class="receipt-header">

<img src="images/logo.png" alt="Lunelle Hijab">

<h2>Lunelle Hijab</h2>

<p>Order Receipt</p>

</div>

<div class="receipt-meta">

<div>

<span>Order No.</span>

<strong>${order.orderId}</strong>

</div>

<div>

<span>Date</span>

<strong>${order.orderDate}</strong>

</div>

</div>

<div class="receipt-meta">

<div>

<span>Customer</span>

<strong>${order.name}</strong>

</div>

<div>

<span>Payment Method</span>

<strong>${order.payment}</strong>

</div>

</div>

<div class="receipt-address">

<span>Delivery Address</span>

<p>${order.address}, ${order.state}</p>

<p>${order.phone} &middot; ${order.email}</p>

</div>

<table class="receipt-table">

<thead>

<tr>

<th>Item</th>

<th>Qty</th>

<th>Price</th>

<th>Total</th>

</tr>

</thead>

<tbody>

${itemRows}

</tbody>

</table>

<div class="receipt-totals">

<div>

<span>Subtotal</span>

<strong>RM ${order.subtotal.toFixed(2)}</strong>

</div>

<div>

<span>Shipping</span>

<strong>${order.shipping === 0 ? "FREE" : "RM " + order.shipping.toFixed(2)}</strong>

</div>

${order.discount > 0 ? `

<div>

<span>${order.discountLabel}</span>

<strong>- RM ${order.discount.toFixed(2)}</strong>

</div>

` : ""}

<div class="receipt-grand-total">

<span>Grand Total</span>

<strong>RM ${order.grandTotal.toFixed(2)}</strong>

</div>

</div>

<p class="receipt-note">Thank you for shopping with Lunelle Hijab. This receipt was generated for IML254 educational project purposes only.</p>

<div class="receipt-actions">

<button type="button" class="btn" id="printReceiptBtn">

<i class="fa-solid fa-print"></i> Print Receipt

</button>

<a href="index.html" class="btn btn-outline">

Continue Shopping

</a>

</div>

</div>

`;

    document.getElementById("printReceiptBtn").addEventListener("click", () => {

        window.print();

    });

}

/*==================================================
            RESTORED FEATURES
==================================================*/

function initializeFeedback(){

    const stars = document.querySelectorAll(".rating-stars i");
    const message = document.getElementById("feedbackMessage");
    const submit = document.getElementById("feedbackSubmit");
    const response = document.getElementById("feedbackResponse");

    let rating = 0;

    if(!submit || !message || !response) return;

    stars.forEach((star,index)=>{

        star.addEventListener("click",()=>{

            rating = index + 1;

            stars.forEach((item,i)=>{

                item.classList.toggle("fa-solid", i < rating);
                item.classList.toggle("fa-regular", i >= rating);

            });

        });

    });

    submit.addEventListener("click",()=>{

        if(rating === 0 || message.value.trim() === ""){

            response.textContent =
            "Please select a rating and write your feedback.";

            response.className = "form-message error";

            return;

        }

        response.textContent =
        "Thank you for sharing your feedback with Lunelle Hijab!";

        response.className = "form-message success";

        message.value = "";
        rating = 0;

        stars.forEach(star=>{

            star.classList.remove("fa-solid");
            star.classList.add("fa-regular");

        });

    });

}

function initializeNewsletter(){

    const newsletter = document.querySelector(".newsletter-form");

    if(!newsletter) return;

    let response = document.createElement("p");

    response.className = "form-message newsletter-response";

    newsletter.insertAdjacentElement("afterend",response);

    newsletter.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email =
        newsletter.querySelector('input[type="email"]');

        if(!email.value.trim() || !email.checkValidity()){

            response.textContent =
            "Please enter a valid email address.";

            response.className =
            "form-message newsletter-response error";

            return;

        }

        response.textContent =
        "Thank you for subscribing to Lunelle Hijab!";

        response.className =
        "form-message newsletter-response success";

        newsletter.reset();

    });

}

function initializePromoClaim(){

    const claimButton = document.getElementById("claimCodeBtn");
    const promoBox = document.getElementById("promoCodeBox");
    const promoText = document.getElementById("promoCodeText");
    const copyButton = document.getElementById("copyPromoCode");
    const response = document.getElementById("promoCodeMessage");

    if(claimButton && promoBox){

        claimButton.addEventListener("click",()=>{

            promoBox.hidden = false;
            promoBox.classList.add("show");
            claimButton.hidden = true;

        });

    }

    if(copyButton && promoText){

        copyButton.addEventListener("click",async()=>{

            const code = promoText.textContent.trim();

            try{

                await navigator.clipboard.writeText(code);

            }
            catch(error){

                const temporaryInput = document.createElement("textarea");

                temporaryInput.value = code;
                document.body.appendChild(temporaryInput);
                temporaryInput.select();

                document.execCommand("copy");

                temporaryInput.remove();

            }

            if(response){

                response.textContent =
                code + " copied. Use it in your cart.";

                response.className = "form-message success";

            }

        });

    }

}

/*==================================================
            MEMBERSHIP POPUP
==================================================*/

function generateMembershipPopup(){

    if(document.getElementById("membershipOverlay")) return;

    const wrap = document.createElement("div");

    wrap.innerHTML = `
<div class="membership-overlay" id="membershipOverlay">
<div class="membership-popup">

<button type="button" class="membership-close" id="membershipClose" aria-label="Close">
<i class="fa-solid fa-xmark"></i>
</button>

<div class="popup-icon">
<i class="fa-solid fa-gift"></i>
</div>

<h2>Become A Member</h2>

<p>Create a free account and enjoy 10% off automatically at checkout, plus early access to new collections and member-only promotions.</p>

<form class="membership-form" id="membershipForm">
<input type="email" id="membershipEmail" placeholder="Enter your email address" required>
<button type="submit">Join Free</button>
</form>

<p class="form-message" id="membershipMessage"></p>

<p class="membership-note">No spam, just Lunelle updates. Unsubscribe anytime.</p>

</div>
</div>
`;

    document.body.appendChild(wrap.firstElementChild);

}

function initializeMembershipPopup(){

    if(document.body.dataset.page !== "home") return;

    generateMembershipPopup();

    const overlay = document.getElementById("membershipOverlay");
    const closeBtn = document.getElementById("membershipClose");
    const form = document.getElementById("membershipForm");
    const message = document.getElementById("membershipMessage");

    if(!overlay) return;

    function closePopup(remember){

        overlay.classList.remove("active");

        if(remember){

            sessionStorage.setItem("membershipPopupSeen","true");

        }

    }

    function openPopup(){

        if(sessionStorage.getItem("membershipPopupSeen")) return;

        overlay.classList.add("active");

    }

    setTimeout(() => {

        openPopup();

    }, 3500);

    if(closeBtn){

        closeBtn.addEventListener("click", () => closePopup(true));

    }

    overlay.addEventListener("click", (e) => {

        if(e.target === overlay){

            closePopup(true);

        }

    });

    if(form){

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const email = document.getElementById("membershipEmail").value.trim();

            if(!email){

                message.textContent = "Please enter your email address.";
                message.className = "form-message error";

                return;

            }

            const users = JSON.parse(localStorage.getItem("lunelleUsers")) || {};

            const existingUser = users[email.toLowerCase()];

            const name = existingUser
                ? existingUser.name
                : email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase());

            users[email.toLowerCase()] = { name, email };

            localStorage.setItem("lunelleUsers", JSON.stringify(users));

            localStorage.setItem("lunelleCurrentUser", JSON.stringify({ name, email }));

            message.textContent = "Welcome to Lunelle, " + name + "! Your 10% member discount is now active.";
            message.className = "form-message success";

            setTimeout(() => {

                closePopup(true);

                window.location.reload();

            }, 1800);

        });

    }

}

/*==================================================
        SHIPPING PROGRESS POPUP (SCROLL TRIGGERED)
==================================================*/

function generateShippingPopup(){

    if(document.getElementById("shippingPopup")) return;

    const wrap = document.createElement("div");

    wrap.innerHTML = `
<div class="shipping-popup" id="shippingPopup">

<div class="popup-icon">
<i class="fa-solid fa-truck-fast"></i>
</div>

<div>
<h4>Free Shipping On RM 150+</h4>
<p>Spend RM 150 or more in a single order and shipping is on us, applied automatically at checkout.</p>
</div>

<button type="button" class="shipping-popup-close" id="shippingPopupClose" aria-label="Close">
<i class="fa-solid fa-xmark"></i>
</button>

</div>
`;

    document.body.appendChild(wrap.firstElementChild);

}

function initializeShippingPopup(){

    generateShippingPopup();

    const popup = document.getElementById("shippingPopup");
    const closeBtn = document.getElementById("shippingPopupClose");

    if(!popup) return;

    function closePopup(){

        popup.classList.remove("active");

        sessionStorage.setItem("shippingPopupSeen", "true");

    }

    if(closeBtn){

        closeBtn.addEventListener("click", closePopup);

    }

    window.addEventListener("scroll", () => {

        if(sessionStorage.getItem("shippingPopupSeen")) return;

        const scrolled = window.scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;

        if(pageHeight > window.innerHeight && scrolled >= pageHeight * 0.5){

            popup.classList.add("active");

        }

    });

}

/*==================================================
        CLEARANCE SLIDE-IN POPUP
==================================================*/

function generateClearancePopup(){

    if(document.getElementById("clearancePopup")) return;

    const wrap = document.createElement("div");

    wrap.innerHTML = `
<div class="clearance-popup" id="clearancePopup">

<button type="button" class="clearance-popup-close" id="clearancePopupClose" aria-label="Close">
<i class="fa-solid fa-xmark"></i>
</button>

<h4>Clearance Sale</h4>

<p>Selected pieces are now up to 20% off while stocks last.</p>

<a href="sale.html">Shop Clearance</a>

</div>
`;

    document.body.appendChild(wrap.firstElementChild);

}

function initializeClearancePopup(){

    if(document.body.dataset.page === "sale") return;

    if(sessionStorage.getItem("clearancePopupSeen")) return;

    generateClearancePopup();

    const popup = document.getElementById("clearancePopup");
    const closeBtn = document.getElementById("clearancePopupClose");

    if(!popup) return;

    function closePopup(){

        popup.classList.remove("active");

        sessionStorage.setItem("clearancePopupSeen", "true");

    }

    setTimeout(() => {

        popup.classList.add("active");

    }, 8000);

    if(closeBtn){

        closeBtn.addEventListener("click", closePopup);

    }

}

/*==================================================
        MEMBER PROMO CARD (SALE PAGE)
==================================================*/

function initializeMemberPromoCard(){

    const box = document.getElementById("memberPromoBox");

    if(!box) return;

    const currentUser = JSON.parse(localStorage.getItem("lunelleCurrentUser") || "null");

    if(currentUser){

        box.classList.add("is-member");

        box.innerHTML = `
<div class="member-status"><i class="fa-solid fa-circle-check"></i> Member Discount Active</div>
<strong>10% off is applied automatically at checkout, no code needed.</strong>
`;

    }

    else{

        box.innerHTML = `
<span>Sign in or create a free account to unlock this discount.</span>
<a href="login.html" class="btn">Login / Create Account</a>
`;

    }

}

/*==================================================
                LUNA AI WIDGET
==================================================*/

function generateLunaWidget(){

    const container = document.getElementById("luna-ai");

    if(!container) return;

    container.innerHTML = `
<button type="button" class="luna-toggle" id="lunaToggle" aria-label="Chat with Luna">
<i class="fa-solid fa-comment-dots"></i>
</button>

<div class="luna-panel" id="lunaPanel">

<div class="luna-header">
<img src="images/logo.png" alt="Luna AI">
<div>
<h4>Luna AI</h4>
<p>Lunelle Hijab Assistant</p>
</div>
<button type="button" class="luna-close" id="lunaClose" aria-label="Close chat">
<i class="fa-solid fa-xmark"></i>
</button>
</div>

<div class="luna-messages" id="lunaMessages"></div>

<div class="luna-quick" id="lunaQuick">
<button type="button" data-q="shipping">Shipping</button>
<button type="button" data-q="return">Returns</button>
<button type="button" data-q="material">Materials</button>
<button type="button" data-q="promo">Promo Code</button>
</div>

<div class="luna-input-row">
<input type="text" id="lunaInput" placeholder="Type your question...">
<button type="button" id="lunaSend" aria-label="Send">
<i class="fa-solid fa-paper-plane"></i>
</button>
</div>

</div>
`;

}

function lunaReply(text){

    const query = text.toLowerCase();

    if(query.includes("shipping") || query.includes("delivery")){

        return "We offer flat-rate shipping at RM 8 across Malaysia, with orders typically arriving in 3-5 working days.";

    }

    if(query.includes("return") || query.includes("exchange") || query.includes("refund")){

        return "Items can be returned within 7 days of delivery if unworn and in original packaging. Check our Return Policy page for full details.";

    }

    if(query.includes("material") || query.includes("fabric")){

        return "Our hijabs come in fabrics like Premium Chiffon, Cotton Voile and Korean Moss Crepe depending on the collection. Each product page lists its exact material.";

    }

    if(query.includes("promo") || query.includes("discount") || query.includes("code")){

        return "You can grab 10% off by joining as a member, or use BUY2SAVE10 when you buy any two hijabs in a single order.";

    }

    if(query.includes("size") || query.includes("dimension")){

        return "Most of our shawls and squares are one-size and designed with flexible draping to suit most head sizes.";

    }

    if(query.includes("payment")){

        return "We accept Online Banking, E-Wallet and Cash On Delivery at checkout.";

    }

    if(query.includes("contact") || query.includes("email") || query.includes("phone")){

        return "You can reach our team at lunellehijabs@gmail.com or +60 12-345 6789.";

    }

    if(query.includes("hello") || query.includes("hi") || query.includes("hey")){

        return "Hi there! I'm Luna, your Lunelle Hijab assistant. Ask me about shipping, returns, materials or promo codes!";

    }

    if(query.includes("thank")){

        return "You're very welcome! Let me know if there's anything else I can help with.";

    }

    return "I'm still learning! For more specific help, please check our FAQ page or reach out at lunellehijabs@gmail.com.";

}

function addLunaMessage(text, sender){

    const messages = document.getElementById("lunaMessages");

    if(!messages) return;

    const bubble = document.createElement("div");

    bubble.className = "luna-msg " + sender;
    bubble.textContent = text;

    messages.appendChild(bubble);

    messages.scrollTop = messages.scrollHeight;

}

function initializeLunaAI(){

    generateLunaWidget();

    const toggle = document.getElementById("lunaToggle");
    const panel = document.getElementById("lunaPanel");
    const closeBtn = document.getElementById("lunaClose");
    const input = document.getElementById("lunaInput");
    const sendBtn = document.getElementById("lunaSend");
    const quick = document.getElementById("lunaQuick");

    if(!toggle || !panel) return;

    let greeted = false;

    function openPanel(){

        panel.classList.add("active");

        if(!greeted){

            addLunaMessage("Hi, I'm Luna! Ask me about shipping, returns, materials or promo codes.", "bot");
            greeted = true;

        }

    }

    toggle.addEventListener("click", () => {

        panel.classList.toggle("active");

        if(panel.classList.contains("active")){

            openPanel();

        }

    });

    if(closeBtn){

        closeBtn.addEventListener("click", () => panel.classList.remove("active"));

    }

    function handleSend(){

        const text = input.value.trim();

        if(!text) return;

        addLunaMessage(text, "user");
        input.value = "";

        setTimeout(() => {

            addLunaMessage(lunaReply(text), "bot");

        }, 500);

    }

    if(sendBtn){

        sendBtn.addEventListener("click", handleSend);

    }

    if(input){

        input.addEventListener("keydown", (e) => {

            if(e.key === "Enter"){

                handleSend();

            }

        });

    }

    if(quick){

        quick.querySelectorAll("button").forEach(btn => {

            btn.addEventListener("click", () => {

                const map = {
                    shipping: "What are your shipping options?",
                    return: "What is your return policy?",
                    material: "What materials do you use?",
                    promo: "Do you have any promo codes?"
                };

                const text = map[btn.dataset.q] || btn.dataset.q;

                addLunaMessage(text, "user");

                setTimeout(() => {

                    addLunaMessage(lunaReply(text), "bot");

                }, 500);

            });

        });

    }

}

/*==================================================
                AUTH / LOGIN PAGE
==================================================*/

function initializeAuthTabs(){

    const tabs = document.querySelectorAll(".auth-tab");
    const forms = document.querySelectorAll(".auth-form");

    if(tabs.length === 0) return;

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove("active"));
            forms.forEach(f => f.classList.remove("active"));

            tab.classList.add("active");

            const targetForm = document.getElementById(target);

            if(targetForm){

                targetForm.classList.add("active");

            }

        });

    });

    document.querySelectorAll("[data-switch-tab]").forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const target = link.dataset.switchTab;
            const targetTab = document.querySelector(`.auth-tab[data-tab="${target}"]`);

            if(targetTab){

                targetTab.click();

            }

        });

    });

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if(loginForm){

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();

            if(!email){

                loginMessage.textContent = "Please enter your email address.";
                loginMessage.className = "form-message error";

                return;

            }

            const users = JSON.parse(localStorage.getItem("lunelleUsers")) || {};

            const existingUser = users[email.toLowerCase()];

            const name = existingUser
                ? existingUser.name
                : email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase());

            localStorage.setItem("lunelleCurrentUser", JSON.stringify({ name, email }));

            loginMessage.textContent = "Welcome back, " + name + "!";
            loginMessage.className = "form-message success";

            loginForm.reset();

            setTimeout(() => {

                window.location.href = "index.html";

            }, 1200);

        });

    }

    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    if(registerForm){

        registerForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.getElementById("registerName").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("registerConfirmPassword").value;

            if(!name || !email){

                registerMessage.textContent = "Please fill in all fields.";
                registerMessage.className = "form-message error";

                return;

            }

            if(password !== confirmPassword){

                registerMessage.textContent = "Passwords do not match. Please try again.";
                registerMessage.className = "form-message error";

                return;

            }

            const users = JSON.parse(localStorage.getItem("lunelleUsers")) || {};

            users[email.toLowerCase()] = { name, email };

            localStorage.setItem("lunelleUsers", JSON.stringify(users));

            localStorage.setItem("lunelleCurrentUser", JSON.stringify({ name, email }));

            registerMessage.textContent = "Welcome, " + name + "! Your account has been created.";
            registerMessage.className = "form-message success";

            registerForm.reset();

            setTimeout(() => {

                window.location.href = "index.html";

            }, 1200);

        });

    }

}