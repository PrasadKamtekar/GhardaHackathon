import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col items-center">
      <Stepper currentStep={4} />
      <h1 className="text-4xl font-bold text-green-600 mb-4">Entry Approved</h1>
      <p>Your digital visitor pass has been generated.</p>
      <div className="mt-6 p-6 border rounded shadow w-full max-w-sm">
        <p>Visitor ID: VIS12345</p>
        <p>Status: Approved</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Go to Home
      </button>
    </div>
  );
}

export default Success;