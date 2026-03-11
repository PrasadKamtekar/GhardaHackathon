import { useNavigate } from "react-router-dom";

function Verification() {

  const navigate = useNavigate();

  return (
    <div className="p-10 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Identity Verification
      </h2>

      <p className="mb-4">
        Capture your selfie for AI face verification
      </p>

      <input type="file" className="mb-4" />

      <br />

      <button
        onClick={() => navigate("/success")}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Verify
      </button>

    </div>
  );
}

export default Verification;