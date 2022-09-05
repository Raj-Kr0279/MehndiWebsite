// const closeIc = document.querySelector(".fa-xmark");
const video = document.querySelectorAll("video");
const x = document.querySelector(".fa-xmark");

video.forEach((play) =>
  play.addEventListener("click", () => {
    play.classList.add("active");
    // play.setAttribute("controls", "true");
    x.style.visibility = "visible";
    if (play.paused) {
      play.play();
    } else {
      play.pause();
      play.currentTime = 0;
    }
  })
);
function CloseVid() {
  // const vid = document.querySelectorAll("video");

  console.log("clicked");
  if (Array.from(video).some(({ classList }) => classList.contains("active"))) {
    video.forEach((play) => {
      x.style.visibility = "visible";
      x.addEventListener("click", () => {
        // console.log("clicked");
        x.style.visibility = "hidden";
        play.classList.remove("active");
        play.pause();
        // play.setAttribute("controls", "false");
      });
    });
  }
}

//   console.log(x);
//   x.style.visibility = "visible";
//   play.classList.remove("active");
// });
