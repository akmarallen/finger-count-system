import React, { useRef, useEffect } from "react";
import { drawHand } from "../../utils/handDrawing";

const VideoCanvas = ({ videoRef, hands, isLoading, onResults }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const detectHands = async () => {
      if (videoRef.current && videoRef.current.readyState === 4 && hands) {
        await hands.send({ image: videoRef.current });
      }
      animationFrameId = requestAnimationFrame(detectHands);
    };

    if (hands && !isLoading) {
      detectHands();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hands, isLoading, videoRef]);

  useEffect(() => {
    const handleResults = (results) => {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      if (!canvas || !video) return;

      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (results.multiHandLandmarks) {
        results.multiHandLandmarks.forEach((landmarks) => {
          drawHand(ctx, landmarks, canvas.width, canvas.height);
        });
      }

      onResults(results);
    };

    if (hands) {
      hands.onResults(handleResults);
    }
  }, [hands, videoRef, onResults]);

  return (
    <div className="relative bg-black rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        style={{ display: "none" }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-auto"
        style={{ maxHeight: "500px" }}
      />
    </div>
  );
};

export default VideoCanvas;
