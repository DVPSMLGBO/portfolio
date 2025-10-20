document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".skills-card");

    cards.forEach((card, index) => {
        // Timeout progressif pour chaque carte, effet "pierre après pierre"
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200);
    });
});
