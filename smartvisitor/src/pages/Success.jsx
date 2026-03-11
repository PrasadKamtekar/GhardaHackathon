import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 flex w-full max-w-3xl flex-col items-center">
        <h1 className="mb-2 text-4xl font-bold text-green-600">
          Entry Approved
        </h1>
        <p className="text-sm text-gray-600">
          Your digital visitor pass has been generated.
        </p>
        <div className="mt-6 w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm">
            <span className="font-semibold">Visitor ID:</span> VIS12345
          </p>
          <p className="mt-2 text-sm">
            <span className="font-semibold">Status:</span> Approved
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Success;