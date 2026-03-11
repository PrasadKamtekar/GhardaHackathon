import { useNavigate } from "react-router-dom";

function Quiz() {

  const navigate = useNavigate();

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        Safety Quiz
      </h2>

      <p className="font-semibold mb-2">
        1. What is mandatory inside industrial plant?
      </p>

      <label className="block">
        <input type="radio" name="q1" /> Helmet
      </label>

      <label className="block mb-6">
        <input type="radio" name="q1" /> Nothing
      </label>

      <button
        onClick={() => navigate("/home/verification")}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Submit
      </button>

    </div>
  );
}

export default Quiz;