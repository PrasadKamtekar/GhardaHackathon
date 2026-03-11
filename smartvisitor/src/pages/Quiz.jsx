import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home/pass");
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 flex w-full max-w-3xl flex-col items-center">
        <h2 className="mb-6 text-2xl font-bold">Safety Quiz</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl text-left rounded-xl bg-white p-6 shadow-sm"
        >
          <p className="mb-2 font-semibold">
            1. What is mandatory inside industrial plant?
          </p>
          <label className="mb-1 flex items-center gap-2">
            <input type="radio" name="q1" value="helmet" required />
            <span>Helmet</span>
          </label>
          <label className="mb-4 flex items-center gap-2">
            <input type="radio" name="q1" value="nothing" />
            <span>Nothing</span>
          </label>

          <button
            type="submit"
            className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Submit Quiz →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
