import "./styles.css";
let mainSelector = 0;

document.addEventListener("DOMContentLoaded", () => {
    homePage();

    document.querySelector(".menu-btn").addEventListener("click", () => {
        menuPage();
    });

    document.querySelector(".logo-home").addEventListener("click", () => {
        homePage();
    });
});


function homePage() {
    const contentDiv = document.getElementById("content");
    const homepageContent = `
    <div class="main-container"> 
    <div class="main-heading-container">
    <h1>Fire up your <br>BK® order!</h1>
       
    <button class="order-pickup-btn order">
    <img src="./assets/motorbike.svg" class="bike-icon" alt>
    Order Pickup
    </button>
    <button class="order-pickup-btn deliver">
    <img src="./assets/cart.svg" class="bike-icon" alt>
    Order Delivery</button>
    </div>
    <div class="banner-container">
        <img class="food-banner" src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/23ade834ac1dfb5adc195c6f977540dcb2dcc1ca-2100x1050.png?w=900&q=75&fit=max&auto=format" alt="Burger King">
    </div>
    <p>Check out our menu for more details.</p>  
  </.div>
    `;
    contentDiv.innerHTML = homepageContent;
}

function menuPage() {
    const contentDiv = document.getElementById("content");
    const homepageContent = `
      <h1>IMRA YOU GONNA BE FINE!!</h1>
      <p>This content was loaded on page load using JavaScript.</p>
        <p>We serve the best food in town!</p>
        <p>Check out our menu for more details.</p>
    `;
    contentDiv.innerHTML = homepageContent;
}

