import React from "react";
import { Camera } from "lucide-react";

const LoadingSpinner = ({ message = "Загрузка..." }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <div className="text-center">
        <Camera className="w-16 h-16 text-white animate-pulse mx-auto mb-4" />
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
