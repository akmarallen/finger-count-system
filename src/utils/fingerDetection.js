// Алгоритм подсчета пальцев

export const countFingers = (landmarks, handedness) => {
  let count = 0;

  // Большой палец
  const thumbTip = landmarks[4];
  const thumbIP = landmarks[3];

  if (handedness === "Right") {
    if (thumbTip.x < thumbIP.x) count++;
  } else {
    if (thumbTip.x > thumbIP.x) count++;
  }

  // Остальные пальцы
  const fingerTips = [8, 12, 16, 20];
  const fingerPIPs = [6, 10, 14, 18];

  fingerTips.forEach((tipIndex, i) => {
    const tip = landmarks[tipIndex];
    const pip = landmarks[fingerPIPs[i]];

    if (tip.y < pip.y) {
      count++;
    }
  });

  return count;
};
