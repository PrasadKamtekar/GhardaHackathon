import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";

function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col items-center">
      <Stepper currentStep={2} />
      <h2 className="text-2xl font-bold mb-6">Safety Quiz</h2>

      <div className="text-left w-full max-w-xl">
        <p className="font-semibold mb-2">1. What is mandatory inside industrial plant?</p>
        <label className="block mb-1">
          <input type="radio" name="q1" /> Helmet
        </label>
        <label className="block mb-6">
          <input type="radio" name="q1" /> Nothing
        </label>
      </div>

      <button
        onClick={() => navigate("/home/verification")}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Submit Quiz →
      </button>
    </div>
  );
}

export default Quiz;