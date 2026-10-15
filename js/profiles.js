const profileDefaultImages = [
    "/Test/assets/img/profiles/defaults/profile-default-img-blob.png",
    "/Test/assets/img/profiles/defaults/profile-default-img-carl.png",
    "/Test/assets/img/profiles/defaults/profile-default-img-daurin.png",
    "/Test/assets/img/profiles/defaults/profile-default-img-kane.png",
    "/Test/assets/img/profiles/defaults/profile-default-img-shadow_king.png",
    "/Test/assets/img/profiles/defaults/profile-default-img-skull_knight.png",
    "/Test/assets/img/profiles/defaults/profile-default-img-witch.png"
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