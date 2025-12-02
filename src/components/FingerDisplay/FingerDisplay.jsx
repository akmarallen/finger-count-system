import React from "react";

const FingerDisplay = ({ count }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-8 text-center">
      <p className="text-white/80 text-lg mb-2">Количество пальцев</p>
      <p className="text-6xl font-bold text-white">{count}</p>
    </div>
  );
};

export default FingerDisplay;
