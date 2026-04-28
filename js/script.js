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
        username: "code.with.ajeet",
        profile: "images/profile.png",
        time: "1 h",
        caption: "Portpolio",
        media: "video/video1.mp4",
        type: "video",
        likes: "1M",
        comments: "700k",
        reposts: "50k",
        messages: ""
    },
    {
        username: "codecraft.dev",
        profile: "images/story4.jpg",
        time: "2 h",
        caption: "dubai vibe",
        media: "images/post1.jpg",
        type: "image",
        likes: "500k",
        comments: "120k",
        reposts: "10k",
        messages: ""
    },
    {
      username: "its_sakshi",
      profile: "images/story1.jpg",
      time: "52 min",
      caption: "Dubai",
      media: "video/video2.mp4",
      type: "video",
      likes: "70k",
      comments: "10k",
      reposts: "200",
      messages: ""
    },
    {
      username: "tech.diary",
      profile: "images/story2.jpg",
      time: "5 min",
      caption: "I Love India",
      media: "video/video3.mp4",
      type: "video",
      likes: "100k",
      comments: "70k",
      reposts: "700",
      messages: ""
    },
    {
      username: "pixel.engineer",
      profile: "images/story3.jpg",
      time: "3 h",
      caption: "edited",
      media: "images/story3.jpg",
      type: "image",
      likes: "10k",
      comments: "3k",
      reposts: "70",
      messages: ""
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
              <img src="images/notification.png" class="like-icon">
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

            <div class="icon">
              <img src="images/message.png">
              <span>${post.messages}</span>
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

postContainer.addEventListener("click", (e) => {
  const likeBtn = e.target.closest(".like-icon");

  if (likeBtn) {
    likeBtn.classList.toggle("liked");
  }
});