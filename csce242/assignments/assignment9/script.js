const water = document.getElementById("water");
const bubbleCount = 12;

for (let i = 0; i < bubbleCount; i++) {

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = Math.floor(Math.random() * 15) + 8;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    const maxLeft = 250 - size;
    bubble.style.left = Math.floor(Math.random() * maxLeft) + "px";

    const duration = Math.random() * 4 + 4;
    bubble.style.animationDuration = duration + "s";

    water.appendChild(bubble);
}
