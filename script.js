const revealables = document.querySelectorAll(".section, .card, .rule, .panel, .contact-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealables.forEach((el, index) => {
  el.style.setProperty("--reveal-delay", `${index * 60}ms`);
  observer.observe(el);
});

const backgrounds = [
  "assets/background/background (1).jpeg",
  "assets/background/background (2).jpeg",
  "assets/background/background (3).jpeg",
  "assets/background/background (4).jpeg",
  "assets/background/background (5).jpeg",
  "assets/background/background (6).jpeg",
  "assets/background/background (7).jpeg",
  "assets/background/background (8).jpeg",
  "assets/background/background (9).jpeg",
  "assets/background/background (10).jpeg",
  "assets/background/background (11).jpeg",
  "assets/background/background (12).jpeg",
  "assets/background/background (13).jpeg",
  "assets/background/background (14).jpeg",
  "assets/background/background (15).jpeg",
  "assets/background/background (16).jpeg",
  "assets/background/background (17).jpeg",
  "assets/background/background (18).jpeg",
  "assets/background/background (19).jpeg",
  "assets/background/background (20).jpeg",
  "assets/background/background (21).jpeg",
  "assets/background/background (22).jpeg",
];
const bgLayers = document.querySelectorAll(".bg-layer");

if (bgLayers.length >= 2 && backgrounds.length > 0) {
  let currentLayer = 0;
  let lastBackground = null;
  const visibleOpacity = "0.22";

  const shuffle = (list) => {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    if (copy.length > 1 && copy[0] === lastBackground) {
      [copy[0], copy[1]] = [copy[1], copy[0]];
    }
    return copy;
  };

  let queue = shuffle(backgrounds);
  const getNextBackground = () => {
    if (queue.length === 0) {
      queue = shuffle(backgrounds);
    }
    const next = queue.shift();
    lastBackground = next;
    return next;
  };

  const firstBackground = getNextBackground();
  bgLayers[0].style.backgroundImage = `url("${firstBackground}")`;
  bgLayers[0].style.opacity = visibleOpacity;
  bgLayers[1].style.opacity = "0";

  setInterval(() => {
    const nextBackground = getNextBackground();
    const nextLayer = bgLayers[1 - currentLayer];
    const prevLayer = bgLayers[currentLayer];

    nextLayer.style.backgroundImage = `url("${nextBackground}")`;
    nextLayer.style.opacity = visibleOpacity;
    prevLayer.style.opacity = "0";

    currentLayer = 1 - currentLayer;
  }, 30000);
}
