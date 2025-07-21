function showSidebar() {
  document.querySelector('.sidebar').style.display = 'flex';
  document.getElementById('cartSidebar').classList.remove('active'); // Hide cart
}

function hideSidebar() {
  document.querySelector('.sidebar').style.display = 'none';
}

function toggleCart() {
  const cart = document.getElementById('cartSidebar');
  const menu = document.querySelector('.sidebar');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none'; // Hide menu if it's open
  }
  cart.classList.toggle('active');
}


//cart
  let cart = [];
  let total = 0;

  function clearCart() {
  cart = [];
  updateCartUI();
  }

  function closeCart() {
  document.getElementById('cartSidebar').classList.remove('show');
  }



  function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('show');
  }

  function updateCartUI() {
    const cartItem = document.getElementById('cartItem');
    const totalElement = document.getElementById('total');
    const countElement = document.getElementById('count');

    if (cart.length === 0) {
      cartItem.innerHTML = "Your Cart is empty";
      totalElement.innerText = "KES 0.00";
      countElement.innerText = "0";
      return;
    }

    let itemsHTML = "";
    total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      itemsHTML += `
        <div class="cart-product">
          <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;margin-right:10px;">
          <span>${item.name}</span> x${item.quantity} - KES ${item.price * item.quantity}
        </div>
      `;
    });

    cartItem.innerHTML = itemsHTML;
    totalElement.innerText = `KES ${total.toFixed(2)}`;
    countElement.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function addToCart(name, price, image) {
    // Check if item already in cart
    const found = cart.find(item => item.name === name);
    if (found) {
      found.quantity++;
    } else {
      cart.push({ name, price: parseFloat(price), image, quantity: 1 });
    }
    updateCartUI();
  }

  // Add event listeners after DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        const image = btn.getAttribute('data-image');
        addToCart(name, price, image);
        toggleCart(); // open cart on add
      });
    });
  });   

//Image Slider
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let autoSlide = setInterval(() => changeSlide(1), 2000);

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === slideIndex);
    dots[i].classList.toggle('active', i === slideIndex);
  });
}
function changeSlide(n) {
  clearInterval(autoSlide); // Stop auto-slide on manual navigation
  showSlide(slideIndex + n);
  autoSlide = setInterval(() => changeSlide(1), 2000); // Restart auto-slide
}

function goToSlide(n) {
  clearInterval(autoSlide);
  showSlide(n);
  autoSlide = setInterval(() => changeSlide(1), 2000);
}

// Start initial slide
showSlide(slideIndex);


// Auto slide offers
let offerIndex = 0;
const offerSlides = document.querySelectorAll('.offer-slide');

function showOfferSlide() {
  offerSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === offerIndex);
  });
  offerIndex = (offerIndex + 1) % offerSlides.length;
}

setInterval(showOfferSlide, 3000); // every 3s
showOfferSlide();



  // Get all dropdown buttons
  const toggles = document.querySelectorAll('.dropdown-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      // Close other open dropdowns
      toggles.forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('active');
          btn.nextElementSibling.style.display = 'none';
        }
      });

      // Toggle current dropdown
      const dropdownMenu = this.nextElementSibling;
      const isVisible = dropdownMenu.style.display === 'block';

      // Toggle class and visibility
      this.classList.toggle('active', !isVisible);
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });
  });

  // Optional: Click outside to close dropdowns
  window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-toggle')) {
      toggles.forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.display = 'none';
      });
    }
  });

//small-selection images
const productImg = document.getElementById("product-img");
const smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach(img => {
  img.addEventListener("click", () => {
    productImg.src = img.src;
  });
});


  const params = new URLSearchParams(window.location.search);
  document.getElementById("product-name").textContent = params.get("name");
  document.getElementById("product-price").textContent = "KES " + params.get("price");
  document.getElementById("product-img").src = params.get("image");
  document.getElementById("product-description").textContent = params.get("desc");

  // Handle thumbnail click to update main image
  document.addEventListener("click", e => {
    if (e.target.classList.contains("small-img")) {
      document.getElementById("product-img").src = e.target.src;
    }
  });

//search btn
function searchBrands() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Optional: Trigger search on Enter key
document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchBrands();
  }
});


  // Open Visa Modal
  document.getElementById('visa').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('visaModal').style.display = 'flex';
  });

  // Close Visa Modal
  document.getElementById('closeVisa').addEventListener('click', function () {
    document.getElementById('visaModal').style.display = 'none';
  });

  // Optional: Submit Visa Form (simulate)
  document.getElementById('visaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Visa Payment Submitted!");
    document.getElementById('visaModal').style.display = 'none';
  });





  


