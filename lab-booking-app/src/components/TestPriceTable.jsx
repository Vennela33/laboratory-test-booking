function TestPriceTable({ tests }) {
  return (
    <div className="bg-white mt-8 p-6 rounded-2xl shadow-lg overflow-x-auto">

      <h2 className="text-2xl font-bold mb-4">
        Laboratory Test Prices
      </h2>

      <table className="w-full border-collapse">

        <thead>
          <tr className="bg-gray-200">


              <th className="text-left p-4">
                Patient
              </th>

            <th className="p-3 text-left">
              Test Name
            </th>

             <th className="text-left p-4">
                Time
              </th>

            <th className="p-3 text-left">
              Price
            </th>

            <th className="p-3 text-left">
              Status
            </th>

          </tr>
        </thead>

        <tbody>

          {tests.map((test) => (
            <tr
              key={test.id}
              className="border-b"
            >
                <td className="p-4 font-medium">
                  {test.patient}
                </td>

              <td className="p-3">
                {test.name}
              </td>

              <td className="p-4">
                  {test.time}
                </td>

              <td className="p-3">
                ₹{test.price}
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    test.status === "Completed"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {test.status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TestPriceTable;