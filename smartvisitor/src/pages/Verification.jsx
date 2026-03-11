import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";

function Verification() {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col items-center">
      <Stepper currentStep={3} />
      <h2 className="text-3xl font-bold mb-6">Identity Verification</h2>
      <p className="mb-4">Capture your selfie for AI face verification</p>
      <input type="file" className="mb-6" />
      <button
        onClick={() => navigate("/home/success")}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Verify →
      </button>
    </div>
  );
}

export default Verification;