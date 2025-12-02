import { useState, useCallback } from "react";
import { countFingers } from "../utils/fingerDetection";

export const useFingerCount = () => {
  const [fingerCount, setFingerCount] = useState(0);

  const calculateFingerCount = useCallback((results) => {
    let total = 0;

    if (results.multiHandLandmarks && results.multiHandedness) {
      for (let i = 0; i < results.multiHandLandmarks.length; i++) {
        const landmarks = results.multiHandLandmarks[i];
        const handedness = results.multiHandedness[i].label;
        total += countFingers(landmarks, handedness);
      }
    }

    setFingerCount(total);
  }, []);

  return { fingerCount, calculateFingerCount };
};
