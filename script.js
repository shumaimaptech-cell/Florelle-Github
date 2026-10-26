/* ==========================================
   FLORELLE FLOWER WEBSITE
   JavaScript
========================================== */


/* ==========================================
   1. PRODUCT DATA
========================================== */

const products = [
    {
        name: "Red Rose Bouquet",
        category: "Roses",
        description: "Classic red roses for special moments.",
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmHNnFWV65PnzRpKLm3M4ZeGlAkkQG_vor5uo-mxT3X26Kv-kGErCUqj5&s=10"
    },
    {
        name: "Pink Rose Bouquet",
        category: "Roses",
        description: "Soft pink roses with elegant charm.",
        price: 38,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5w-6r4jc77RjYl9KjD7mrpRdZEy3iJOP2t9TqM8FybH0vX5VOuI_Hjk&s=10"
    },
    {
        name: "White Rose Bouquet",
        category: "Roses",
        description: "Pure white roses for timeless beauty.",
        price: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG4rEFWjPrPHnq3hckm8ZOjhtsBRkct9ZqhoU2hBshw&s=10"
    },
    {
        name: "Tulip Dreams",
        category: "Tulips",
        description: "Colorful tulips full of spring freshness.",
        price: 32,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzEPdo_IPqUJxLp_xONdG7vLfVxZoZ7TLg4sD91hB8yoOMvGE4PYasQg&s=10"
    },
    {
        name: "Yellow Tulips",
        category: "Tulips",
        description: "Bright yellow tulips for cheerful days.",
        price: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-0_majRLSaUDJpM51JjZvb_ZNG75j3_i49yaIag38pOAvA5fM1dpi1du&s=10"
    },
    {
        name: "Pink Tulips",
        category: "Tulips",
        description: "Beautiful pink tulips with soft tones.",
        price: 34,
        image: "https://cdn11.bigcommerce.com/s-s00dfko9/images/stencil/1280x1280/products/189/2488/Pink_Tulips_Manila__69700.1729866119.jpg?c=2"
    },
    {
        name: "Sunflower Bliss",
        category: "Sunflowers",
        description: "Sunny flowers that brighten every room.",
        price: 28,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXuME85oN0oC58VAmiEFf-5Y15Vnr_1cO62gnVwArSQ&s"
    },
    {
        name: "White Lily Bouquet",
        category: "Lilies",
        description: "Elegant white lilies with fresh fragrance.",
        price: 42,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcNB0CRINjm61l-qLq97XAuhRObr8mUc1R8bn_ChzgcSAqbzOlBCcPv4&s=10"
    },
    {
        name: "Pink Lily Bouquet",
        category: "Lilies",
        description: "Delicate pink lilies for a graceful gift.",
        price: 44,
        image: "https://www.giftshopislamabad.pk/cdn/shop/files/luxury-oversized-pink-lilies-bouquet-pakistan-jpg.webp"
    },
    {
        name: "Lavender Love",
        category: "Lavender",
        description: "Calming lavender with natural beauty.",
        price: 29,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dN_QxeDFP1-_BvSZ91dHRPJfpAeieUr9v7UEbxeasgEIy-g2cKcjBiY&s=10"
    },
    {
        name: "Purple Orchid",
        category: "Orchids",
        description: "Exotic purple orchids with elegance.",
        price: 48,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaT5BVrCoK-bdjbjp6Rgkxz1FkKgKiljDfZSjmIzhM96C0sB0Lm84Wn8R&s=10"
    },
    {
        name: "Mixed Spring Bouquet",
        category: "Mixed",
        description: "A colorful mix of seasonal flowers.",
        price: 45,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQ_7X91ly2dtkiQxDrzKfkrv7_AQo3jnsFk2ivzB7mkOWgy-E_76bo6Xv&s=10"
    },
    {
        name: "Daisy Delight",
        category: "Daisies",
        description: "Fresh white daisies with sunny centers.",
        price: 26,
        image: "https://flowersugar.com/cdn/shop/files/Daisy_delight_yellow_table_750x.jpg?v=1686615639"
    },
    {
        name: "Peach Roses",
        category: "Roses",
        description: "Warm peach roses with a soft finish.",
        price: 39,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTuaDbewPwXKxdHr-F5ButptHJMK5zuRoWCxfjYek9ATjGgLEyWzxVGNi&s=10"
    },
    {
        name: "Baby's Breath",
        category: "Flowers",
        description: "Delicate little flowers for a soft look.",
        price: 24,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0qAg-Re4hfXmM5wBcIPHj_wbAQX3OaTOAqk-hkqRFh-gzmJzCgBVxSMc&s=10"
    },
    {
        name: "Garden Fresh",
        category: "Mixed",
        description: "A fresh arrangement inspired by gardens.",
        price: 43,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz-p9vTg6gdwxaFDhbHJphNWqvntLbOUuTWBmqO4zWxuC28JXWAWhPUQ&s=10"
    },
    {
        name: "Romantic Roses",
        category: "Roses",
        description: "A beautiful arrangement of fresh roses.",
        price: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnq07jUe0xIfW_id7OJnVDjZHo0kVhWoSakMcV1K2Nw&s=10"
    },
    {
        name: "Tropical Bloom",
        category: "Tropical",
        description: "Bright tropical flowers with bold colors.",
        price: 55,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeR2ujiOTsbFM39M28lwwCM6TiTZpjDYMJcfH2aKJLfg&s"
    },
    {
        name: "Pastel Bouquet",
        category: "Mixed",
        description: "Soft pastel flowers for elegant occasions.",
        price: 46,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RZKiOCxyBCFi1XuoUDdhplD0G9U5Q-g5JnuPTZMkUw&s"
    },
    {
        name: "Freesia Flower ",
        category: "Premium",
        description: "Luxury flowers arranged in a beautiful bouqet.",
        price: 65,
        image: "https://thewateringcan.ca/wp-content/uploads/2021/03/ACS_1330.jpg"
    }
];


/* ==========================================
   2. WAIT FOR HTML TO LOAD
========================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       3. GET HTML ELEMENTS
    ========================================== */

    const productsContainer = document.getElementById("productsContainer");
    const cartCounter = document.getElementById("cartCount");
    const currentDateTime = document.getElementById("currentDateTime");
    const currentYear = document.getElementById("currentYear");
    const contactForm = document.getElementById("contactForm");
    const newsletterForm = document.getElementById("newsletterForm");


    /* ==========================================
       4. CART COUNT
    ========================================== */

    let cartCount = 0;


    /* ==========================================
       5. DISPLAY PRODUCTS
    ========================================== */

    function displayProducts() {

        if (!productsContainer) {
            console.error("Products container not found.");
            return;
        }

        productsContainer.innerHTML = "";

        products.forEach(function (product) {

            const productCard = document.createElement("div");

            productCard.className = "product-card";

            productCard.innerHTML = `
                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <span class="product-category">
                        ${product.category}
                    </span>

                </div>

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <div class="product-bottom">

                        <span class="price">
                            $${product.price}
                        </span>

                        <button
                            type="button"
                            class="add-cart"
                            data-name="${product.name}"
                            data-price="${product.price}"
                        >
                            <i class="fa-solid fa-cart-plus"></i>
                            Add to Cart
                        </button>

                    </div>

                </div>
            `;

            productsContainer.appendChild(productCard);

        });
    }


    /* ==========================================
       6. ADD TO CART
    ========================================== */

    if (productsContainer) {

        productsContainer.addEventListener("click", function (event) {

            const button = event.target.closest(".add-cart");

            if (!button) {
                return;
            }

            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");


            /* Increase cart count */

            cartCount++;


            /* Update cart badge */

            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }


            /* SweetAlert2 */

            if (typeof Swal !== "undefined") {

                Swal.fire({
                    title: "Added to Cart!",
                    html: `
                        <strong>${productName}</strong>
                        <br>
                        Price: <strong>$${productPrice}</strong>
                    `,
                    icon: "success",
                    confirmButtonText: "Continue Shopping",
                    confirmButtonColor: "#542b38"
                });

            } else {

                alert(
                    productName +
                    " added to cart. Price: $" +
                    productPrice
                );

            }

        });

    }


//   Date And Time
    let time = document.getElementById("time");

function getTime() {
    let clock = new Date();
    let watch = clock.toLocaleTimeString();

    time.innerHTML = `${watch}`;
}

getTime();
setInterval(getTime, 1000);


// DATE
let date = document.getElementById("date");

function getDate() {
    let clock = new Date();

    let day = clock.getDay();
    let Y = clock.getFullYear();
    let m = clock.getMonth();
    let D = clock.getDate();

    // Month
    switch (m) {
        case 0:
            m = "January";
            break;
        case 1:
            m = "February";
            break;
        case 2:
            m = "March";
            break;
        case 3:
            m = "April";
            break;
        case 4:
            m = "May";
            break;
        case 5:
            m = "June";
            break;
        case 6:
            m = "July";
            break;
        case 7:
            m = "August";
            break;
        case 8:
            m = "September";
            break;
        case 9:
            m = "October";
            break;
        case 10:
            m = "November";
            break;
        case 11:
            m = "December";
            break;
    }

    // Day
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    date.innerHTML = `${day}, ${m} ${D}, ${Y}`;
}

getDate();


    /* ==========================================
       9. CONTACT FORM
    ========================================== */

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            if (typeof Swal !== "undefined") {

                Swal.fire({
                    title: "Message Sent!",
                    text: "Thank you for contacting Florelle.",
                    icon: "success",
                    confirmButtonColor: "#542b38"
                });

            } else {

                alert("Message sent successfully!");

            }


            contactForm.reset();

        });

    }


    /* ==========================================
       10. NEWSLETTER FORM
    ========================================== */

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();


            if (typeof Swal !== "undefined") {

                Swal.fire({
                    title: "Subscribed!",
                    text: "You have successfully joined the Florelle newsletter.",
                    icon: "success",
                    confirmButtonColor: "#542b38"
                });

            } else {

                alert("Successfully subscribed!");

            }


            newsletterForm.reset();

        });

    }


    /* ==========================================
       11. START WEBSITE
    ========================================== */

    displayProducts();

});