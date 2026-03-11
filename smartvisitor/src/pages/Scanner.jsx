function Success() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold text-green-600">
        Entry Approved
      </h1>

      <p className="mt-4">
        Your digital visitor pass has been generated.
      </p>

      <div className="mt-6 p-6 border rounded shadow">

        <p>Visitor ID: VIS12345</p>
        <p>Status: Approved</p>

      </div>

    </div>
  );
}

export default Success;