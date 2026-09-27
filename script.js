/* =========================================
   FATIMA'S BIRTHDAY WEBSITE
   Interactive Effects
========================================= */


/* =========================================
   OPEN SURPRISE BUTTON
========================================= */

function startJourney() {

    createHearts();

    setTimeout(function() {
        window.location.href = "memories.html";
    }, 900);

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    const hearts = ["♡", "♥", "✦", "✧", "🌷"];

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.color = "#b46f87";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        heart.style.transition =
            "transform 2s ease-out, opacity 2s ease-out";

        document.body.appendChild(heart);


        setTimeout(function() {

            heart.style.transform =
                "translateY(-100vh) rotate(360deg)";

            heart.style.opacity = "0";

        }, 50);


        setTimeout(function() {
            heart.remove();
        }, 2200);

    }

}


/* =========================================
   RANDOM LITTLE SPARKLES
========================================= */

document.addEventListener("click", function(event) {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✦";

    sparkle.style.position = "fixed";
    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    sparkle.style.color = "#b46f87";
    sparkle.style.fontSize = "18px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";

    sparkle.style.transition =
        "all 0.7s ease";

    document.body.appendChild(sparkle);


    setTimeout(function() {

        sparkle.style.transform =
            "translateY(-25px) scale(1.5)";

        sparkle.style.opacity = "0";

    }, 20);


    setTimeout(function() {
        sparkle.remove();
    }, 800);

});


/* =========================================
   OPEN FINAL GIFT
========================================= */

function openGift() {

    const gift = document.getElementById("giftBox");
    const message = document.getElementById("hiddenMessage");
    const button = document.querySelector(".open-gift");

    if (!gift || !message) {
        return;
    }

    /* Open the gift lid */
    gift.classList.add("gift-open");

    /* Celebration */
    createHearts();

    /* Show birthday message */
    setTimeout(function() {

        message.classList.add("show-message");

        if (button) {
            button.style.display = "none";
        }

    }, 700);

}