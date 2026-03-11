import { useNavigate } from "react-router-dom"

function Success() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center text-center">

      <h1 className="text-3xl font-bold mb-4 text-green-600">
        Verification Successful
      </h1>

      <p className="mb-6">
        Your visitor pass has been approved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Go to Home
      </button>

    </div>
  )
}

export default Success