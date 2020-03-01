const card = document.querySelectorAll(".featured-bg .card");

//videos
let V = [];
V[0] = "https://www.youtube.com/embed/KaaedNZTUos";
V[1] = "https://www.youtube.com/embed/HiMUT-RQZCQ";
V[2] = "";
V[3] = "";
V[4] = "";
V[5] = "";

//links to github
let L = [];
L[0] = "https://github.com/Mental-Block/John-Doe-Masonry";
L[1] = "https://github.com/Mental-Block/Tetris";
L[2] = "";
L[3] = "";
L[4] = "";
L[5] = "";

//live preview
let P = [];
P[0] = "https://johndoemasonry.netlify.com";
P[1] = "https://tetris100.netlify.com/";
P[2] = "";
P[3] = "";
P[4] = "";
P[5] = "";

const bigVideoPlayer = (cardNumber, videoNumber, linkNumber, siteNumber) => {
  card[cardNumber].addEventListener("click", () => {
    const videoBox = document.createElement("div");
    const videoBoxX = document.createElement("div");
    const buttonBox = document.createElement("div");
    const line1 = document.createElement("div");
    const line2 = document.createElement("div");
    const iframe = document.createElement("iframe");
    const a = document.createElement("a");
    const a2 = document.createElement("a");
    const button = document.createElement("button");
    const button2 = document.createElement("button");

    videoBox.classList.add("video-box");
    videoBoxX.classList.add("video-box-x");
    buttonBox.classList.add("btn-box");
    line1.classList.add("line", "line1");
    line2.classList.add("line", "line2");

    iframe.classList.add("iframe");
    iframe.setAttribute("src", videoNumber);
    iframe.setAttribute("allowfullscreen", true);

    a.setAttribute("href", linkNumber);
    a.setAttribute("target", "_blank");
    a.classList.add("link");
    button.innerHTML = "Source code";
    button.classList.add("btn");

    a2.setAttribute("href", siteNumber);
    a2.setAttribute("target", "_blank");
    a2.classList.add("link-1");
    button2.innerHTML = "Live preview";
    button2.classList.add("btn");

    document.getElementById("featured-projects").appendChild(videoBox);
    document.querySelector(".video-box").appendChild(videoBoxX);
    document.querySelector(".video-box-x").appendChild(line1);
    document.querySelector(".video-box-x").appendChild(line2);
    document.querySelector(".video-box").appendChild(iframe);

    document.querySelector(".video-box").appendChild(buttonBox);

    document.querySelector(".btn-box").appendChild(a);
    document.querySelector(".link").appendChild(button);

    document.querySelector(".btn-box").appendChild(a2);
    document.querySelector(".link-1").appendChild(button2);

    iframe.autoplay = false;
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; encrypted-media; gyroscope; picture-in-picture";

    videoBoxX.addEventListener("click", () =>
      videoBox.parentNode.removeChild(videoBox)
    );
  });
};

bigVideoPlayer(0, V[0], L[0], P[0]);
bigVideoPlayer(1, V[1], L[1], P[1]);
/*
bigVideoPlayer(2, V[2], L[2]);
bigVideoPlayer(3, V[3], L[3]);
bigVideoPlayer(4, V[4], L[4]);
bigVideoPlayer(5, V[5], L[5]);
*/
