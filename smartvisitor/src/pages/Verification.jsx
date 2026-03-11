import { useNavigate } from "react-router-dom";

function Verification() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 flex w-full max-w-3xl flex-col items-center">
        <h2 className="mb-4 text-3xl font-bold">Identity Verification</h2>
        <p className="mb-4 text-sm text-gray-600">
          Capture your selfie for AI face verification.
        </p>
        <input
          type="file"
          className="mb-6 w-full max-w-sm rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm"
        />
        <button
          onClick={() => navigate("/home/success")}
          className="rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
        >
          Verify →
        </button>
      </div>
    </div>
  );
}

export default Verification;