import { HAND_CONNECTIONS, CANVAS_STYLES } from "./constants";

// Отрисовка руки на canvas

export const drawHand = (ctx, landmarks, width, height) => {
  // Рисуем соединения
  ctx.strokeStyle = CANVAS_STYLES.CONNECTION_COLOR;
  ctx.lineWidth = CANVAS_STYLES.LINE_WIDTH;

  HAND_CONNECTIONS.forEach(([start, end]) => {
    const startPoint = landmarks[start];
    const endPoint = landmarks[end];

    ctx.beginPath();
    ctx.moveTo(startPoint.x * width, startPoint.y * height);
    ctx.lineTo(endPoint.x * width, endPoint.y * height);
    ctx.stroke();
  });

  // Рисуем точки
  ctx.fillStyle = CANVAS_STYLES.LANDMARK_COLOR;
  landmarks.forEach((landmark) => {
    ctx.beginPath();
    ctx.arc(
      landmark.x * width,
      landmark.y * height,
      CANVAS_STYLES.LANDMARK_RADIUS,
      0,
      2 * Math.PI
    );
    ctx.fill();
  });
};
