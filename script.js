document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("reelVideo");

    // Tap to play/pause
    video.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
