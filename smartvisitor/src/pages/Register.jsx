import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home/training");   // correct path
  };

  return (
    <div className="p-10 flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded w-96"
      >

        <h2 className="text-2xl mb-4 font-bold">
          Visitor Pre-Registration
        </h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Full Name"
          required
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          required
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Mobile Number"
          required
        />

        <select className="border p-2 w-full mb-3">
          <option>Select Department</option>
          <option>Production</option>
          <option>Maintenance</option>
          <option>Admin</option>
        </select>

        <button
          type="submit"
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
        >
          Continue to Training
        </button>

      </form>

    </div>
  );
}

export default Register;