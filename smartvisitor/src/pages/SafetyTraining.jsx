import { useNavigate } from "react-router-dom";

function SafetyTraining() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 flex w-full max-w-3xl flex-col items-center">
        <h2 className="mb-6 text-3xl font-bold">Safety Awareness Training</h2>
        <div className="mb-6 flex h-64 w-full max-w-xl items-center justify-center rounded-xl bg-yellow-400 shadow-sm">
          Training Video Placeholder
        </div>
        <button
          onClick={() => navigate("/home/quiz")}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          Continue to Quiz →
        </button>
      </div>
    </div>
  );
}

export default SafetyTraining;