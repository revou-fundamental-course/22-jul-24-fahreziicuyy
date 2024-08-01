//Menu
const btnHamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", () =>{
    btnHamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
})

//Feedback
const loadMore = document.querySelector(".load-more-btn");
let jumlahItem = 3;

loadMore.addEventListener("click", () => {
    let boxes = [...document.querySelectorAll(".feedback-box .box")];
    for (let i = jumlahItem; i < jumlahItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }

    jumlahItem += 3;

    if (jumlahItem >= boxes.length) {
        loadMore.style.display = "none";
    }
});

//Contact Us
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    if (name && email && interest) {
        alert(`Thank you for reaching out, ${name}! We have received your interest in ${interest}.`);
        // Refresh the page after displaying the alert
        window.location.reload();
    } else {
        alert('Please fill out all fields.');
    }
});
