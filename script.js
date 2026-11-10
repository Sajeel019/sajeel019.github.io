const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("surpriseMessage");

btn.addEventListener("click", () => {
  message.textContent =
    "You make life a little more beautiful. Thank you for being you, Zuhaa. ♡";

  btn.textContent = "A little love, always ♡";

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = "♡";
    heart.style.cssText = `
      position:fixed;
      left:${Math.random() * 100}%;
      top:70%;
      color:#e98eae;
      font-size:25px;
      z-index:999;
      pointer-events:none;
      transition:all 1.5s;
    `;
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translateY(-${100 + Math.random() * 250}px)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1600);
  }
});
