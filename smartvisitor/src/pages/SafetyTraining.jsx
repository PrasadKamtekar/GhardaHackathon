import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";

function SafetyTraining() {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col items-center">
      <Stepper currentStep={1} />
      <h2 className="text-3xl font-bold mb-6">Safety Awareness Training</h2>
      <div className="w-full max-w-xl h-64 bg-yellow-400 flex items-center justify-center mb-6">
        Training Video Placeholder
      </div>
      <button
        onClick={() => navigate("/home/quiz")}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Continue to Quiz →
      </button>
    </div>
  );
}

export default SafetyTraining;