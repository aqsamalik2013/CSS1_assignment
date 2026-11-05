
/* TASK 1: Form Handling and Validation */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const birthYear = document.getElementById("birth-year").value;

    const formMessage = document.getElementById("form-message");
    const ageMessage = document.getElementById("age-message");

    if (username.trim() !== "" && email.trim() !== "") {

        formMessage.textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";

        /* TASK 5: Type Converter and Age Verification */

        const year = parseInt(birthYear);

        if (!isNaN(year) && year >= 1900 && year <= 2026) {

            const age = 2026 - year;

            if (age <= 18 || age >= 60) {
                ageMessage.textContent =
                    "You qualify for a special age discount!";
            } else {
                ageMessage.textContent =
                    "You do not qualify for the special age discount.";
            }

        } else {
            ageMessage.textContent =
                "Please enter a valid birth year.";
        }

    } else {

        formMessage.textContent =
            "Please enter your name and email.";

        ageMessage.textContent = "";
    }
});


/* TASK 2: Table Row Highlighting */

const tableRows = document.querySelectorAll("#menu-items tr");

tableRows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f5d6bd";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });
});


/* TASK 3: Light and Dark Mode */

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});


/* TASK 4: Interactive Order Total Calculator */

const menuItems = document.querySelectorAll(".menu-item");
const total = document.getElementById("total");

menuItems.forEach(function(item) {

    item.addEventListener("change", function() {

        let totalPrice = 0;

        menuItems.forEach(function(item) {

            if (item.checked) {
                totalPrice += parseFloat(item.dataset.price);
            }

        });

        total.textContent = "Total: $" + totalPrice.toFixed(2);

    });

});


/* TASK 6: Read More and Read Less */

const readMoreButton = document.getElementById("read-more-button");
const extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {

    if (extraText.classList.contains("hidden")) {

        extraText.classList.remove("hidden");
        readMoreButton.textContent = "Read Less";

    } else {

        extraText.classList.add("hidden");
        readMoreButton.textContent = "Read More";

    }

});


/* TASK 7: Live Category Filter */

const filterButtons = document.querySelectorAll(".filter-button");
const menuRows = document.querySelectorAll("#menu-items tr");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        menuRows.forEach(function(row) {

            if (
                selectedCategory === "all" ||
                row.dataset.category === selectedCategory
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* TASK 8: Dynamic Opening Status */

const openingStatus = document.getElementById("opening-status");
const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 22) {

    openingStatus.textContent = "We are Open!";
    openingStatus.style.color = "lightgreen";

} else {

    openingStatus.textContent = "Closed - Open at 8 AM";
    openingStatus.style.color = "red";

}


/* TASK 9: Character Counter */

const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("character-count");

specialNotes.addEventListener("input", function() {

    const remaining = 100 - specialNotes.value.length;

    characterCount.textContent =
        remaining + " characters remaining";

});
