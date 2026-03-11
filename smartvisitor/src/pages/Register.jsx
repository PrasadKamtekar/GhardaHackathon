import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home/training"); // move to next step
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-linear-to-b from-slate-50 to-white px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200/70"
      >
        <Stepper currentStep={0} />
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Visitor Registration
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Pre-register before arriving at the industrial facility
          </p>
        </div>

        <input
          name="fullName"
          className="w-full mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 transition duration-200 focus:-translate-y-px focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Full Name *"
          required
        />
        <input
          name="company"
          className="w-full mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 transition duration-200 focus:-translate-y-px focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Company / Organization *"
          required
        />
        <input
          name="mobile"
          className="w-full mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 transition duration-200 focus:-translate-y-px focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Mobile Number *"
          required
        />
        <input
          name="email"
          className="w-full mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 transition duration-200 focus:-translate-y-px focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Email Address *"
          type="email"
          required
        />
        <select
          name="department"
          className="w-full mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-sm text-gray-700 transition duration-200 focus:-translate-y-px focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Department to Visit *</option>
          <option>Production</option>
          <option>Maintenance</option>
          <option>Admin</option>
        </select>
        <textarea
          name="purpose"
          rows="3"
          className="w-full mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 transition duration-200 focus:-translate-y-px focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Purpose of Visit *"
          required
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-linear-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md shadow-blue-200 transition duration-200 hover:-translate-y-px hover:from-blue-700 hover:to-blue-600 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          CONTINUE TO SAFETY TRAINING →
        </button>
      </form>
    </div>
  );
}

export default Register;