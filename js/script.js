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

// POST

const postContainer = document.getElementById("postContainer");

const posts = [
    {
        username: "tech.diary",
        profile: "images/story2.jpg",
        time: "1 h",
        caption: "I Love India",
        media: "video/video3.mp4",
        type: "video",
        likes: "1M",
        comments: "700k",
        reposts: "50k"
    },
    {
        username: "codecraft.dev",
        profile: "images/story4.jpg",
        time: "2 h",
        caption: "Coding is fun",
        media: "images/post1.jpg",
        type: "image",
        likes: "500k",
        comments: "120k",
        reposts: "10k"
    }
];

function renderPosts() {
    postContainer.innerHTML = "";

    posts.forEach(post => {
        const postHTML = `
    <div class="post">

        <div class="user-detail">
          <img src="${post.profile}" class="post-profile">

          <div class="user-info">
            <div class="top-row">
              <span class="username">${post.username}</span>
              <span class="post-timing">• ${post.time}</span>
            </div>
          </div>
        </div>

        <div class="image-video">
          ${
            post.type === "video"
              ? `<video autoplay muted loop>
                   <source src="${post.media}" type="video/mp4">
                 </video>`
              : `<img src="${post.media}">`
          }
        </div>

        <div class="post-update">
          <div class="update-icons">
            <div class="icon">
              <img src="images/notification.png">
              <span>${post.likes}</span>
            </div>

            <div class="icon">
              <img src="images/comment.png">
              <span>${post.comments}</span>
            </div>

            <div class="icon">
              <img src="images/repost.png">
              <span>${post.reposts}</span>
            </div>
          </div>

          <div class="description-box">
            <span class="username">${post.username}</span>
            <span class="description">${post.caption}</span>
          </div>
        </div>

    </div>
    `;

    postContainer.innerHTML += postHTML;
    });
}

renderPosts();
