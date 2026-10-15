const profileDefaultImages = [
    "/assets/img/profiles/defaults/profile-default-img-blob.png",
    "/assets/img/profiles/defaults/profile-default-img-carl.png",
    "/assets/img/profiles/defaults/profile-default-img-daurin.png",
    "/assets/img/profiles/defaults/profile-default-img-kane.png",
    "/assets/img/profiles/defaults/profile-default-img-shadow_king.png",
    "/assets/img/profiles/defaults/profile-default-img-skull_knight.png",
    "/assets/img/profiles/defaults/profile-default-img-witch.png"
];

const shuffledProfileImages = [...profileDefaultImages]
    .sort(() => Math.random() - 0.5);

let profileImageIndex = 0;

function getRandomProfileDefaultImg() {
    if (profileImageIndex >= shuffledProfileImages.length) {
        profileImageIndex = 0;
        shuffledProfileImages.sort(() => Math.random() - 0.5);
    }

    return shuffledProfileImages[profileImageIndex++];
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".profile-img").forEach(image => {
        if (image.getAttribute("src")) return;

        image.src = getRandomProfileDefaultImg();
    });
});