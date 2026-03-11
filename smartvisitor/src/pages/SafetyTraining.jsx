import { useNavigate } from "react-router-dom";

function SafetyTraining() {

    const navigate = useNavigate();

    return (
        <div className="p-10 text-center">

            <h2 className="text-3xl font-bold mb-6">
                Safety Awareness Training
            </h2>

            <div className="flex justify-center">

                <div className="w-[100vw] h-[80vh] bg-amber-400">
                    training video here
                </div>


            </div>

            <button
                onClick={() => navigate("/home/quiz")}
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
            >
                Continue to Quiz
            </button>

        </div>
    );
}

export default SafetyTraining;