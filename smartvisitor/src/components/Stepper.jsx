import React from "react";
import {
  ClipboardList,
  Camera,
  Shield,
  Lock,
  QrCode,
} from "lucide-react";

const steps = [
  { label: "Registration", Icon: ClipboardList },
  { label: "Identity Verification (Selfie)", Icon: Camera },
  { label: "Safety Training", Icon: Shield },
  { label: "Quiz", Icon: Lock },
  { label: "Visitor Pass", Icon: QrCode },
];

export default function Stepper({ currentStep = 0 }) {
  const total = steps.length;
  const safeStep = Math.min(Math.max(currentStep, 0), total - 1);
  const progress =
    total > 1 ? (safeStep / (total - 1)) * 100 : 0;

  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col px-4 py-3">
        {/* Circles + connecting line */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          {/* Base gray line */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-200" />

          {/* Blue progress line */}
          {progress > 0 && (
            <div
              className="pointer-events-none absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          )}

          {steps.map((step, index) => {
            const isActive = index === safeStep;
            const isCompleted = index < safeStep;
            const { Icon } = step;

            const circleColor =
              isActive || isCompleted
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-400";

            return (
              <div
                key={step.label}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 sm:h-11 sm:w-11 ${circleColor} transition-colors`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Labels row */}
        <div className="mt-2 flex items-start justify-between gap-2 sm:gap-4">
          {steps.map((step, index) => {
            const isActive = index === safeStep;
            const isCompleted = index < safeStep;
            const labelColor =
              isActive || isCompleted ? "text-blue-600" : "text-gray-400";

            return (
              <div key={step.label} className="flex-1 text-center">
                <span
                  className={`text-[0.65rem] sm:text-xs font-medium ${labelColor}`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}