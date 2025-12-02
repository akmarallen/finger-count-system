import { useState, useEffect } from "react";
import { loadMediaPipeScripts } from "../utils/mediaLoader";
import { MEDIAPIPE_CONFIG } from "../utils/constants";

export const useMediaPipe = (onResults) => {
  const [hands, setHands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const initMediaPipe = async () => {
      try {
        await loadMediaPipeScripts();

        const handsInstance = new window.Hands({
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });

        handsInstance.setOptions(MEDIAPIPE_CONFIG);
        handsInstance.onResults(onResults);

        setHands(handsInstance);
        setIsLoading(false);
      } catch (err) {
        setError("Ошибка загрузки MediaPipe: " + err.message);
        setIsLoading(false);
      }
    };

    initMediaPipe();
  }, [onResults]);

  return { hands, isLoading, error };
};
