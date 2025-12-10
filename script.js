// MOBILE MENU
document.getElementById("mobileMenu").addEventListener("click", () => {
    alert("Mobile menu coming soon!");
});

// BUTTON ACTIONS
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Button clicked:", btn.innerText);
    });
});
