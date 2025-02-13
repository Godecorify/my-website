document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".dynamic-text p");
    const messages = [
        "Your space, reimagined beautifully.",
        "Designs that inspire.",
        "Go Decór with Ify - GoDecórify Your Space"
    ];
    let index = 0;

    // Change the message every 3 seconds
    setInterval(() => {
        index = (index + 1) % messages.length;
        textElement.textContent = messages[index];
    }, 3000);
});
