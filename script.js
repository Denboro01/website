const displayText = document.getElementById("displaytext");
const displayImages = ['images/Denis_Display.png', 'images/Fourly_Display.png', 'images/Other_Half_Display.png', 'images/Adorabullet_Display.png', 'images/SoF_Display.png'];
const gameNames = ['Who is Denis?', 'Fourly', 'Other Half', 'Adorabullet', 'Signs of Forest'];
const gameArt = document.getElementById("gameart");
const display = document.getElementsByClassName("display")[0];

// Attempting to fix the delayed image change bug
const preloadedImages = [];

displayImages.forEach(src => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
})


function UpdateDisplay(id) {
    // Change the image of GameArt by using the preloaded images
    gameArt.src = preloadedImages[id].src;

    // Change the DisplayText's text
    displayText.innerHTML = gameNames[id];
}

function AnimationDelay() {
    let games = document.getElementsByClassName("game");

    // Add a delay to each game to float
    for (var i = 0 ; i < games.length ; i++) {
        games[i].style.animationDelay = String(i) + "s";

        // Add an event listener that triggers the popin for both the gameart and display name
        games[i].addEventListener("mouseenter", PopIn);
    }

    let extpages = document.getElementsByClassName('extpage');

    for (var i = 0 ; i < extpages.length ; i++) {
        extpages[i].style.animationDelay = String(i * .4) + "s";
    }
}

function PopIn() {

    // Animate the game art popin
     gameArt.animate([
         {
             transform: "scale(0)"
         },
         {
             transform: "scale(1)"
         }
     ], {
         duration: 200
     });

    // Animate the display name popin
    display.animate([
        {
            transform: "scale(0)"
        },
        {
            transform: "scale(1.2)"
        },
        {
            transform: "scale(1)"
        }
    ], {
        duration: 300
    });

    display.style.transform = "scale(1)";
}

AnimationDelay();