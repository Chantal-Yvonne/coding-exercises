const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const icon = document.querySelector(".pause-icon");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    icon.classList.add("icon-pause");
    icon.classList.remove("icon-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    icon.classList.remove("icon-pause");
    icon.classList.add("icon-play");
  }
});

