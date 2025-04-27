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
     <span class="cart-icon"></span>
    Order Pickup
    </button>
    <button class="order-pickup-btn deliver">
         <span class="bike-icon"></span>
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

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.classList.add("active");
}

window.openTab = openTab;
function menuPage() {
    const contentDiv = document.getElementById("content");
    const homepageContent = `
    <div class="menu-container">
    <h2>Select Location</h2>
    <div class="location-btn-container">
        <button class="pickup-btn">Pick Up</button>
        <button class="deliver-btn">Delivery</button>
    </div>
    <div class="address-container">
        <input type="text" name="address-search-input"
        class="address-search"
        placeholder="Your address">
        <div class="address-tab-container">
        <button class="tablinks"
            onclick="openTab(event, 'Nearby')">Nearby</button>
        <button class="tablinks"
            onclick="openTab(event, 'Favorites')">Favorites</button>
        <button class="tablinks"
            onclick="openTab(event, 'Recents')">Recents</button>
        </div>
        <div id="Nearby" class="tabcontent">
        <p>Restaurants near you...</p>
        </div>
        <div id="Favorites" class="tabcontent">
        <p>Your favorites...</p>
        </div>
        <div id="Recents" class="tabcontent">
        <p>Recents...</p>
        </div>
    </div>
</div>
    `;
    contentDiv.innerHTML = homepageContent;
    document.querySelector(".tablinks").click();
}



