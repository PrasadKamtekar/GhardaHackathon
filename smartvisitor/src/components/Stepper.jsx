import React from "react";
import {
  ClipboardList,
  Shield,
  Lock,
  IdCard,
  Smartphone,
} from "lucide-react";

const steps = [
  { label: "Registration", Icon: ClipboardList },
  { label: "Safety Training", Icon: Shield },
  { label: "Quiz", Icon: Lock },
  { label: "Verification", Icon: IdCard },
  { label: "Success", Icon: Smartphone },
];

export default function Stepper({ currentStep = 0 }) {
  return (
    <div className="w-full border-b border-slate-200 pb-4 mb-6">
      <div className="relative w-full">
        {/* Base gray line behind all steps */}
        <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Blue progress line behind circles */}
        {steps.length > 1 && currentStep > 0 && (
          <div
            className="absolute left-0 h-0.5 bg-blue-500 top-1/2 -translate-y-1/2 pointer-events-none transition-all"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        )}

        {/* Step circles */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const { Icon } = step;

            const circleClasses = isActive
              ? "bg-blue-600 text-white shadow-md shadow-blue-200"
              : "bg-gray-100 text-gray-400 shadow-sm";

            return (
              <div
                key={step.label}
                className="flex flex-col items-center shrink-0 min-h-[4rem]"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${circleClasses} transition-all z-10`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span
                  className={`mt-2 text-[0.65rem] sm:text-xs text-center font-medium ${
                    isActive ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}