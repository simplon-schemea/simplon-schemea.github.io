const images = [
    "images/request.png",
    "images/mcd1.svg",
    "images/mcd2.svg",
    "images/mpd.png"
];

const wireframes = [
    "wireframes/board-desktop.png",
    "wireframes/board-mobile.png",
    "wireframes/protected-mobile.png"
];

const imageContainer = document.getElementById("images-container");
const wireframeContainer = document.getElementById("wireframes-container");

/**
 *
 * @param {HTMLElement} container
 * @param {string[]} images
 */
function inject(container, images) {
    for (const image of images) {
        const img = container.appendChild(document.createElement("img"));
        img.src = image;

        img.addEventListener("click", function () {
            open(image);
        });
    }
}

inject(imageContainer, images);
inject(wireframeContainer, wireframes);
