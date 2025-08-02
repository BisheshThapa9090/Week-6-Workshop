var allImages = document.querySelectorAll("img");

for (var i = 0; i < allImages.length; i++) {
    var image = allImages[i];
    image.style.transition = "transform 0.3s ease";

    image.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
    });

    image.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
}

var allCards = document.querySelectorAll(".card");

for (var j = 0; j < allCards.length; j++) {
    var card = allCards[j];
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
        this.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "";
    });
}
