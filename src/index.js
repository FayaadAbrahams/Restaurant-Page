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
      <h1>Fire up your BK® order!</h1>
      <p>This content was loaded on page load using JavaScript.</p>
        <p>We serve the best food in town!</p>
        <p>Check out our menu for more details.</p>
        
    `;
    contentDiv.innerHTML = homepageContent;

}

function menuPage(){
    const contentDiv = document.getElementById("content");
    const homepageContent = `
      <h1>THIS IS THE MENU!</h1>
      <p>This content was loaded on page load using JavaScript.</p>
        <p>We serve the best food in town!</p>
        <p>Check out our menu for more details.</p>
    `;
    contentDiv.innerHTML = homepageContent;
}