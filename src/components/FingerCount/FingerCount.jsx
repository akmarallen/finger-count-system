import { Hand } from "lucide-react";
import { useCamera } from "../../hooks/useCamera";
import { useMediaPipe } from "../../hooks/useMediaPipe";
import { useFingerCount } from "../../hooks/useFingerCount";
import VideoCanvas from "../VideoCanvas";
import FingerDisplay from "../FingerDisplay";
import LoadingSpinner from "../LoadingSpinner";
import ErrorMessage from "../ErrorMessage";

const FingerCount = () => {
  const { videoRef, error: cameraError, isReady } = useCamera();
  const { fingerCount, calculateFingerCount } = useFingerCount();
  const {
    hands,
    isLoading,
    error: mediaPipeError,
  } = useMediaPipe(calculateFingerCount);

  const error = cameraError || mediaPipeError;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Hand className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">Счетчик пальцев</h1>
          </div>

          <ErrorMessage message={error} />

          <div className="mb-6 relative">
            <VideoCanvas
              videoRef={videoRef}
              hands={hands}
              isLoading={isLoading || !isReady}
              onResults={calculateFingerCount}
            />
            {(isLoading || !isReady) && (
              <LoadingSpinner message="Загрузка камеры и MediaPipe..." />
            )}
          </div>

          <FingerDisplay count={fingerCount} />

          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Инструкция:</h3>
            <ul className="text-white/70 space-y-1 text-sm list-none">
              <li>Поднимите руку перед камерой</li>
              <li>Показывайте пальцы - система автоматически подсчитает их</li>
              <li>Поддерживается распознавание двух рук одновременно</li>
              <li>Используется MediaPipe от Google</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FingerCount;
