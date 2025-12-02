import { useState, useEffect, useRef } from "react";

export const useCamera = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let currentStream;

    const startCamera = async () => {
      try {
        currentStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setIsReady(true);
          };
        }

        setStream(currentStream);
      } catch (err) {
        setError("Не удалось получить доступ к камере: " + err.message);
      }
    };

    startCamera();

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return { videoRef, stream, error, isReady };
};
