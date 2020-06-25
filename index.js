window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const body = document.querySelector("body");
  const visualHeading = document.querySelector(".visual h1");

  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6960d3",
    "#60b2d3",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      if (visualHeading) visualHeading.style.opacity = 0;
      sounds[index].currentTime = 0;
      sounds[index].play();
      changeBodyStyles();
      callingBubbles(index);
    });
  });

  const callingBubbles = (index) => {
    createBubbles(index);
    setTimeout(() => createBubbles(index), 300);
    setTimeout(() => createBubbles(index), 600);
    setTimeout(() => createBubbles(index), 900);
  };

  const changeBodyStyles = () => {
    body.style.backgroundColor = "rgb(18, 26, 36)";
    body.style.color = "#fff";
  };

  const createBubbles = (index) => {
    const bubble = document.createElement("div");

    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 2s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
