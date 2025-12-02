// Загрузка библиотек MediaPipe

export const loadMediaPipeScripts = () => {
  return new Promise((resolve, reject) => {
    const scripts = [
      "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js",
      "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
      "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
    ];

    let loadedCount = 0;

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        loadedCount++;
        if (loadedCount === scripts.length) {
          setTimeout(() => resolve(), 500);
        }
      };
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  });
};
