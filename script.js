
function toggleBackToTopButton() {
    const button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


window.onscroll = toggleBackToTopButton;
document.getElementById("backToTopBtn").onclick = scrollToTop;