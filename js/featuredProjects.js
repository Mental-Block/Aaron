const card = document.querySelectorAll(".featured-bg .card");
const video = document.querySelectorAll("video");

let V = [];

V[0] = "./videos/CardClip.mp4";
V[1] = "";
V[2] = "";
V[3] = "";
V[4] = "";
V[5] = "";

let L = [];

L[0] = "https://github.com/Mental-Block/John-Doe-Masonry";
L[1] = "";
L[2] = "";
L[3] = "";
L[4] = "";
L[5] = "";

const videoHover = (cardNumber, VideoNumber) => {
  card[cardNumber].addEventListener("mouseover", () => {
    video[VideoNumber].play();

    card[cardNumber].addEventListener("mouseout", () => {
      video[VideoNumber].pause();
    });
  });
};

const bigVideoPlayer = (cardNumber, videoNumber, link) => {
  card[cardNumber].addEventListener("click", () => {
    let videoBox = document.createElement("div");
    let videoBoxX = document.createElement("div");
    let line1 = document.createElement("div");
    let line2 = document.createElement("div");
    let video1 = document.createElement("video");
    let source = document.createElement("source");
    let a = document.createElement("a");
    let button = document.createElement("button");

    videoBox.classList.add("video-box");
    videoBoxX.classList.add("video-box-x");
    line1.classList.add("line", "line1");
    line2.classList.add("line", "line2");
    video1.classList.add("video1");
    source.setAttribute("type", "video/mp4");

    source.setAttribute("src", videoNumber);
    a.setAttribute("href", link);
    button.classList.add("btn");
    a.setAttribute("target", "_blank");

    document.getElementById("featured-projects").appendChild(videoBox);
    document.querySelector(".video-box").appendChild(videoBoxX);
    document.querySelector(".video-box-x").appendChild(line1);
    document.querySelector(".video-box-x").appendChild(line2);
    document.querySelector(".video-box").appendChild(video1);
    document.querySelector(".video-box .video1").appendChild(source);
    document.querySelector(".video-box").appendChild(button);
    document.querySelector(".video-box button").appendChild(a);

    a.innerHTML = "Source code";

    video1.controls = true;
    video1.muted = true;

    videoBoxX.addEventListener("click", () =>
      videoBox.parentNode.removeChild(videoBox)
    );
  });
};

bigVideoPlayer(0, V[0], L[0]);
/*
bigVideoPlayer(1, V[1], L[1]);
bigVideoPlayer(2, V[2], L[2]);
bigVideoPlayer(3, V[3], L[3]);
bigVideoPlayer(4, V[4], L[4]);
bigVideoPlayer(5, V[5], L[5]);
*/

// Don't reference actual V[]; as video is already in the html
videoHover(0, 0);

/*
videoHover(1, 1);
videoHover(2, 2);
videoHover(3, 3);
videoHover(4, 4);
videoHover(5, 5);
*/
