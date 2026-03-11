import React from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { useVisitor } from "../context/VisitorContext.jsx";

function VisitorPass() {
  const navigate = useNavigate();
  const { visitor } = useVisitor();

  if (!visitor) {
    return (
      <div className="w-full px-4">
        <div className="mx-auto my-8 w-full max-w-3xl rounded-xl bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-gray-600">
            No visitor information found. Please complete registration first.
          </p>
          <button
            onClick={() => navigate("/home/register")}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Go to Registration
          </button>
        </div>
      </div>
    );
  }

  const qrPayload = JSON.stringify({
    visitorId: visitor.id,
    fullName: visitor.fullName,
    company: visitor.company,
    department: visitor.department,
    purpose: visitor.purpose,
    visitDate: visitor.visitDate,
  });

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 flex w-full max-w-3xl flex-col items-center">
        <h1 className="mb-2 text-3xl font-bold text-green-600">
          Visitor Pass
        </h1>
        <p className="mb-4 text-sm text-gray-600 text-center">
          Show this QR code at the facility entrance. Security will scan it to
          verify your visit details and match your identity.
        </p>

        <div className="mt-4 w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-sm">
            <p>
              <span className="font-semibold">Visitor:</span>{" "}
              {visitor.fullName}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Company:</span>{" "}
              {visitor.company}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Department / Host:</span>{" "}
              {visitor.department}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Purpose:</span>{" "}
              {visitor.purpose}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Visit Date:</span>{" "}
              {visitor.visitDate
                ? new Date(visitor.visitDate).toLocaleString()
                : "-"}
            </p>
            <p className="mt-1">
              <span className="font-semibold">Visitor ID:</span>{" "}
              {visitor.id}
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="overflow-hidden rounded-xl bg-white p-3 shadow-inner">
              <QRCode
                value={qrPayload}
                size={180}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox="0 0 256 256"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default VisitorPass;

