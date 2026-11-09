// Hover behaviour for image cards (projects + publications).
// If a card has a gif, hovering shows the gif; otherwise it cycles through the images.
document.addEventListener("DOMContentLoaded", function () {
    const galleries = document.querySelectorAll(".project-gallery");

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll(".gallery-image");
        if (images.length <= 1) return; // No slideshow needed

        const hasGif = gallery.getAttribute("data-has-gif") === "true";
        let gifIndex = -1;

        if (hasGif) {
            images.forEach((img, index) => {
                if (img.getAttribute("data-is-gif") === "true" && gifIndex === -1) {
                    gifIndex = index;
                }
            });
        }

        let interval;
        let currentIndex = 0;

        const show = (index) => {
            images[currentIndex].style.opacity = 0;
            currentIndex = index;
            images[currentIndex].style.opacity = 1;
        };

        gallery.addEventListener("mouseenter", () => {
            if (hasGif && gifIndex !== -1) {
                show(gifIndex);
            } else {
                // Instantly show the second image, then cycle every 2 seconds
                show((currentIndex + 1) % images.length);
                interval = setInterval(() => {
                    show((currentIndex + 1) % images.length);
                }, 2000);
            }
        });

        gallery.addEventListener("mouseleave", () => {
            if (interval) clearInterval(interval);
            show(0);
        });
    });
});
