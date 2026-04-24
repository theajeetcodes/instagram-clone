const stories = document.querySelectorAll(".story");
const viewer = document.getElementById("storyViewer");
const viewerImg = document.getElementById("storyImage");
const closeBtn = document.getElementById("closeStory");

let currentIndex = 0;
let timer;

function showStory(index) {
    currentIndex = index;
    viewer.style.display = "flex";

    const img = stories[currentIndex].querySelector("img");
    viewerImg.src = img.src;

    startTimer();
}

function startTimer() {
    clearTimeout(timer);

    timer = setTimeout(() => {
        nextStory();
    }, 5000);
}

function nextStory() {
    currentIndex++;

    if (currentIndex < stories.length) {
        const img = stories[currentIndex].querySelector("img");
        viewerImg.src = img.src;
        startTimer();
    } else {
        closeViewer();
    }
}

function closeViewer() {
    viewer.style.display = "none";
    clearTimeout(timer);
}

stories.forEach((story, index) => {
    story.addEventListener("click", () => {
        showStory(index);
    });
});

closeBtn.addEventListener("click", closeViewer);
