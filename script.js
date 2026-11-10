// Zuhaa's romantic surprise page.
// IMPORTANT: This is a playful front-end password gate, not secure authentication.
// The password is visible to anyone who inspects the public JavaScript source.
const SECRET_PASSWORD = "Zuhaa";

const gate = document.getElementById("passwordGate");
const website = document.getElementById("mainWebsite");
const form = document.getElementById("unlockForm");
const input = document.getElementById("passwordInput");
const error = document.getElementById("gateError");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.trim() === SECRET_PASSWORD) {
    error.textContent = "";
    gate.classList.add("gate-unlocking");
    window.setTimeout(() => {
      gate.hidden = true;
      website.hidden = false;
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 450);
  } else {
    error.textContent = "Not quite! Here's a little hint: Jeel ♡";
    input.value = "";
    input.focus();
  }
});

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", () => {
  surpriseMessage.textContent =
    "You make life a little more beautiful. Thank you for being you, Zuhaa. ♡";
  surpriseBtn.textContent = "A little love, always ♡";
  burstHearts();
});

function burstHearts() {
  const symbols = ["♡", "✦", "♥", "✧"];
  for (let i = 0; i < 18; i++) {
    const item = document.createElement("span");
    item.textContent = symbols[i % symbols.length];
    item.className = "floating-heart";
    item.style.left = `${45 + Math.random() * 10}%`;
    item.style.top = `${55 + Math.random() * 8}%`;
    item.style.color = i % 2 ? "#d8759d" : "#efa9c2";
    item.style.fontSize = `${14 + Math.random() * 18}px`;
    item.style.position = "fixed";
    item.style.zIndex = "20";
    item.style.pointerEvents = "none";
    item.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    document.body.appendChild(item);

    requestAnimationFrame(() => {
      item.style.transform =
        `translate(${(Math.random() - 0.5) * 260}px, ${-90 - Math.random() * 220}px) rotate(${Math.random() * 100 - 50}deg)`;
      item.style.opacity = "0";
    });
    window.setTimeout(() => item.remove(), 1300);
  }
}


/* MAGICAL BLOOMING HEARTS */
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".blooming-hearts")) return;

  const container = document.createElement("div");
  container.className = "blooming-hearts";
  document.body.appendChild(container);

  const hearts = ["♥", "♡", "💗", "💕"];

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");

    heart.className = "bloom-heart";
    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 24) + "px";
    heart.style.animationDuration = (8 + Math.random() * 10) + "s";
    heart.style.animationDelay = (Math.random() * 15) + "s";

    container.appendChild(heart);
  }
});
