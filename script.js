document.documentElement.classList.add("js");

const revealables = document.querySelectorAll(".card, .rule, .panel, .contact-card");

if ("IntersectionObserver" in window) {
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
} else {
  revealables.forEach((el) => {
    el.classList.add("reveal");
  });
}

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

const imageModal = document.querySelector("[data-image-modal]");
const imageModalEl = document.querySelector("[data-image-modal-img]");
const imageModalTriggers = document.querySelectorAll("[data-image-modal-trigger]");

if (imageModal && imageModalEl && imageModalTriggers.length > 0) {
  let lastModalTrigger = null;

  const openImageModal = (trigger) => {
    const imageSrc = trigger.getAttribute("href");
    if (!imageSrc) {
      return;
    }

    imageModalEl.src = imageSrc;
    imageModalEl.alt =
      trigger.getAttribute("data-image-modal-alt") || "Imagem de exemplo";

    imageModal.classList.add("is-open");
    imageModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    lastModalTrigger = trigger;
  };

  const closeImageModal = () => {
    imageModal.classList.remove("is-open");
    imageModal.setAttribute("aria-hidden", "true");
    imageModalEl.removeAttribute("src");
    imageModalEl.alt = "";
    document.body.classList.remove("modal-open");

    if (lastModalTrigger) {
      lastModalTrigger.focus();
      lastModalTrigger = null;
    }
  };

  imageModalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openImageModal(trigger);
    });
  });

  const imageModalCloseEls = imageModal.querySelectorAll(
    "[data-image-modal-close]"
  );

  imageModalCloseEls.forEach((el) => {
    el.addEventListener("click", closeImageModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageModal.classList.contains("is-open")) {
      closeImageModal();
    }
  });
}

const textModal = document.querySelector("[data-text-modal]");
const textModalTriggers = document.querySelectorAll("[data-text-modal-trigger]");

if (textModal && textModalTriggers.length > 0) {
  let lastTextModalTrigger = null;

  const openTextModal = (trigger) => {
    textModal.classList.add("is-open");
    textModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    lastTextModalTrigger = trigger;
  };

  const closeTextModal = () => {
    textModal.classList.remove("is-open");
    textModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastTextModalTrigger) {
      lastTextModalTrigger.focus();
      lastTextModalTrigger = null;
    }
  };

  textModalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openTextModal(trigger);
    });
  });

  const textModalCloseEls = textModal.querySelectorAll("[data-text-modal-close]");

  textModalCloseEls.forEach((el) => {
    el.addEventListener("click", closeTextModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && textModal.classList.contains("is-open")) {
      closeTextModal();
    }
  });
}
