document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".scaler img");
  const section = document.querySelector(".content-wrap main section");
  const layers = document.querySelectorAll(".grid > .layer");

  if (!image || !section) return;

  function update() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    let progress = (vh - rect.top) / vh;
    progress = Math.max(0, Math.min(1, progress));

    // ✅ IMAGE SCALE
    const scale = 1 - progress * 0.5;
    image.style.transform = `scale(${scale})`;

    // ✅ GRID LAYERS
    layers.forEach((layer, index) => {
      const delay = index * 0.1;

      let layerProgress = (progress - delay) * 2;
      layerProgress = Math.max(0, Math.min(1, layerProgress));

      layer.style.opacity = layerProgress;
      layer.style.transform = `scale(${layerProgress})`;
    });

    requestAnimationFrame(update);
  }

  update();
});
