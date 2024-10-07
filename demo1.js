var searchform = document.querySelector('.search-form');
var loginform = document.querySelector('.login-form-container');
var bookDetailsSection = document.getElementById('book-details');
var homeSection = document.querySelector('.home');
var cartCount=0;
var books = [
  {
      title: "Book Title 1",
      author: "Author 1",
      description: "Description of Book 1",
      image: "images/image1.jpg",
      price: "$10"
  },
  {
      title: "Book Title 2",
      author: "Author 2",
      description: "Description of Book 2",
      image: "images/image2.jpg",
      price: "$15"
  },
  {
    title: "Book Title 3",
    author: "Author 3",
    description: "Description of Book 3",
    image: "images/image3.jpg",
    price: "$20"
  },
  {
    title: "Book Title 4",
    author: "Author 4",
    description: "Description of Book 4",
    image: "images/image4.jpg",
    price: "$25"
  },
  {
    title: "Book Title 5",
    author: "Author 5",
    description: "Description of Book 5",
    image: "images/image5.jpg",
    price: "$20"
  },
  {
    title: "Book Title 6",
    author: "Author 6",
    description: "Description of Book 6",
    image: "images/image6.jpg",
    price: "$25"
  },
  {
    title: "Book Title 7",
    author: "Author 7",
    description: "Description of Book 7",
    image: "images/image7 .jpg",
    price: "$20" 
  },
  {
    title: "Book Title 8",
    author: "Author 8",
    description: "Description of Book 8",
    image: "images/image8.jpg",
    price: "$25"
  },
  {
    title: "Book Title 9",
    author: "Author 9",
    description: "Description of Book 9",
    image: "images/image9.jpg",
    price: "$20"
  },
  {
    title: "Book Title 10",
    author: "Author 10",
    description: "Description of Book 10",
    image: "images/image10.jpg",
    price: "$25"
  },
  {
    title: "Book Title 11",
    author: "Author 11",
    description: "Description of Book 11",
    image: "images/image11.jpg",
    price: "$20"
  },
  {
    title: "Book Title 12",
    author: "Author 12",
    description: "Description of Book 12",
    image: "images/image12.jpg",
    price: "$25"

  },
  {
    title: "Book Title 13",
    author: "Author 13",
    description: "Description of Book 13",
    image: "images/image13.jpg",
    price: "$20"
  },
  {
    title: "Book Title 14",
    author: "Author 14",
    description: "Description of Book 14",
    image: "images/image14.jpg",
    price: "$25"

  },
  {
    title: "Book Title 15",
    author: "Author 15",
    description: "Description of Book 15",
    image: "images/image15.jpg",
    price: "$20"
    
  },
  {
    title: "Book Title 16",
    author: "Author 16",
    description: "Description of Book 16",
    image: "images/image16.jpg",
    price: "$25"
  },
  {
    title: "Book Title 17",
    author: "Author 17",
    description: "Description of Book 17",
    image: "images/image17.jpg",
    price: "$20"
  }
  
];


document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginform.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}

var toggleHeaderClass = () => {
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};

window.onscroll = toggleHeaderClass;
window.onload = toggleHeaderClass;

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides:true,
  autoplay:{
    delay:5000,
    disableOnInteraction:false,
  },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

      
      localStorage.setItem("userName", "admin@gmail.com");
      localStorage.setItem("password", "admin123");

      var userName = localStorage.getItem("userName");
      var password = localStorage.getItem("password");

      function submitForm(event) {
        event.preventDefault(); 

        var inputUserName = document.getElementById("username").value;
        var inputPassword = document.getElementById("password").value;

        if (inputUserName === userName && inputPassword === password) {
            alert("Login Successfully");
          
            document.getElementById('username-display').textContent = inputUserName; 
            document.getElementById('username-display').style.display = 'inline'; 
        } else {
            alert("Login Failed");
        }
    }

    function openBookDetails(index) {
      var book = books[index];
      document.getElementById('book-title').textContent = book.title;
      document.getElementById('book-author').textContent = book.author;
      document.getElementById('book-description').textContent = book.description;
      document.getElementById('book-image').src = book.image;
      document.getElementById('book-price').textContent = book.price;
  
      homeSection.style.display = 'none';
      bookDetailsSection.style.display = 'block';
  }
  
  function closeBookDetails() {
      bookDetailsSection.style.display = 'none';
      homeSection.style.display = 'block';
  }


function addToCart(index) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(books[index]);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Item added to cart');
}

function updateCartCount() {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

function loadCart() {
  var cartTableBody = document.getElementById('cart-table-body');
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartTableBody.innerHTML = ' ';
  cart.forEach((item, index) => {
      var row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.title}</td>
          <td>${item.author}</td>
          <td>${item.price}</td>
          <td><button class="btn" onclick="removeFromCart(${index})">Remove</button></td>
      `;
      cartTableBody.appendChild(row);
  });
  updateCartCount();
}

window.removeFromCart = function(index) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function checkout() {
  localStorage.setItem('cart', JSON.stringify([]));
  loadCart();
  alert('Checkout successful!');
}

window.onload = function() {
  var urlParams = new URLSearchParams(window.location.search);
  var title = urlParams.get('title');
  var author = urlParams.get('author');
  var description = urlParams.get('description');
  var image = urlParams.get('image');
  var price = urlParams.get('price');

  if (title && author && description && image) {
      openBookDetails(books.findIndex(book => book.title === title && book.author === author && book.description === description && book.image === image));
  }
  updateCartCount();
  loadCart();
};

document.getElementById('checkout-btn')?.addEventListener('click', checkout);
document.getElementById('add-to-cart-btn')?.addEventListener('click', function() {
  var title = document.getElementById('book-title').textContent;
  var author = document.getElementById('book-author').textContent;
  var price = document.getElementById('book-price').textContent;
  var index = books.findIndex(book => book.title === title && book.author === author && book.price === price);
  addToCart(index);
});

function submitRegistrationForm(event) {
  event.preventDefault(); 

  var inputUserName = document.getElementById("reg-username").value;
  var inputEmail = document.getElementById("reg-email").value;
  var inputPassword = document.getElementById("reg-password").value;
  var inputConfirmPassword = document.getElementById("reg-confirm-password").value;

s
  document.getElementById("username-error").style.display = "none";
  document.getElementById("email-error").style.display = "none";
  document.getElementById("password-error").style.display = "none";
  document.getElementById("confirm-password-error").style.display = "none";

  var isValid = true;

  if (!/^[a-zA-Z][a-zA-Z0-9]{2,}$/.test(inputUserName)) {
      document.getElementById("username-error").textContent = "Username must be at least 3 characters long and cannot start with a number.";
      document.getElementById("username-error").style.display = "block";
      isValid = false;
  }

  if (inputPassword.length < 8 || !/[a-z]/.test(inputPassword) || !/[A-Z]/.test(inputPassword)) {
      document.getElementById("password-error").textContent = "Password must be at least 8 characters long and contain both uppercase and lowercase letters.";
      document.getElementById("password-error").style.display = "block";
      isValid = false;
  }

  if (inputPassword !== inputConfirmPassword) {
      document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
      document.getElementById("confirm-password-error").style.display = "block";
      isValid = false;
  }

  if (isValid) {
      
      localStorage.setItem("username", inputEmail);
      localStorage.setItem("password", inputPassword);

      alert("Registration is done!");
      window.location.href = 'home.html'; 

      var loginFormContainer = document.querySelector('.login-form-container');
      if (loginFormContainer) {
          loginFormContainer.classList.add('active');
      }
  }
}