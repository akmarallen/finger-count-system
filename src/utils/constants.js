// Константы для работы с руками

export const HAND_CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4], // Большой палец
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8], // Указательный
  [0, 9],
  [9, 10],
  [10, 11],
  [11, 12], // Средний
  [0, 13],
  [13, 14],
  [14, 15],
  [15, 16], // Безымянный
  [0, 17],
  [17, 18],
  [18, 19],
  [19, 20], // Мизинец
  [5, 9],
  [9, 13],
  [13, 17], // Ладонь
];

export const FINGER_TIPS = [4, 8, 12, 16, 20];
export const FINGER_PIPS = [3, 6, 10, 14, 18];

export const MEDIAPIPE_CONFIG = {
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
};

export const CANVAS_STYLES = {
  LANDMARK_COLOR: "#ff0000",
  CONNECTION_COLOR: "#00ff00",
  LANDMARK_RADIUS: 5,
  LINE_WIDTH: 2,
};
