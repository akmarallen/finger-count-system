import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3">
      <AlertCircle className="w-5 h-5 text-red-300" />
      <p className="text-red-200">{message}</p>
    </div>
  );
};

export default ErrorMessage;
