import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVisitor } from "../context/VisitorContext.jsx";

function Selfie() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [captured, setCaptured] = useState(false);
  const navigate = useNavigate();
  const { visitor, setVisitor } = useVisitor();

  useEffect(() => {
    if (!visitor) {
      navigate("/home/register");
      return;
    }

    let stream;

    const setupCamera = async () => {
      if (
        typeof navigator === "undefined" ||
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
      ) {
        setError(
          "Camera is not supported in this browser. If camera does not open, please allow camera permission in your browser settings."
        );
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });

        const videoEl = videoRef.current;
        if (videoEl) {
          videoEl.srcObject = stream;
          // Some mobile browsers require an explicit play()
          if (typeof videoEl.play === "function") {
            videoEl.play().catch(() => {
              // Ignore play errors; user interaction may be required
            });
          }
        }
      } catch (err) {
        console.error("Camera error:", err);
        if (err && err.name === "NotAllowedError") {
          setError(
            "Camera permission was denied. Please allow camera access in your browser settings and reload this page."
          );
        } else {
          setError(
            "Unable to access camera. If camera does not open, please allow camera permission in your browser settings."
          );
        }
      }
    };

    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [visitor, navigate]);

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");

    setVisitor((prev) =>
      prev
        ? {
            ...prev,
            selfieDataUrl: dataUrl,
          }
        : prev
    );
    setCaptured(true);
  };

  const handleContinue = () => {
    navigate("/home/training");
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 flex w-full max-w-3xl flex-col items-center">
        <h2 className="mb-2 text-2xl font-bold">Identity Verification</h2>
        <p className="mb-4 text-sm text-gray-600 text-center">
          Please capture a clear selfie for identity verification. This photo
          will be used to verify your identity when entering the facility.
        </p>

        {error && (
          <p className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="flex w-full max-w-xl flex-col items-center gap-4">
          <div className="relative w-full max-w-sm overflow-hidden rounded-xl bg-black shadow-sm">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="aspect-[3/4] w-full object-cover"
            />
          </div>

          <canvas ref={canvasRef} className="hidden" />

          {captured && visitor?.selfieDataUrl && (
            <div className="mt-2 flex flex-col items-center">
              <span className="mb-2 text-xs text-gray-500">
                Captured selfie preview
              </span>
              <img
                src={visitor.selfieDataUrl}
                alt="Captured selfie"
                className="h-32 w-32 rounded-full object-cover border border-slate-200 shadow-sm"
              />
            </div>
          )}

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={handleCapture}
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Capture Selfie
            </button>
            <button
              type="button"
              onClick={handleContinue}
              disabled={!visitor?.selfieDataUrl}
              className="rounded-lg px-6 py-2 text-sm font-semibold text-white shadow-md transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 bg-green-600 hover:bg-green-700"
            >
              Continue to Training →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selfie;

