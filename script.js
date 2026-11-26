// FREE PLAY - Website functionality

// Search games
const searchBox = document.querySelector(".search-box");
const gameCards = document.querySelectorAll(".game-card");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const search = this.value.toLowerCase();

        gameCards.forEach(card => {
            const name = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = name.includes(search)
                ? "block"
                : "none";
        });
    });
}

// Game category buttons
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.category;

        gameCards.forEach(card => {
            const gameCategory = card.dataset.category;

            card.style.display =
                category === "all" || category === gameCategory
                    ? "block"
                    : "none";
        });

        if (searchBox) searchBox.value = "";
    });
});

console.log("FREE PLAY is ready!");
