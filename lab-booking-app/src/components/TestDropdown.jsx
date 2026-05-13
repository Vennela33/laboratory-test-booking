function TestDropdown({ tests, selectedTest, setSelectedTest }) {
  return (
    <div className="mb-4">
      <label className="text-black block mb-2 font-semibold">
        Select Laboratory Test
      </label>

      <select
        value={selectedTest}
        onChange={(e) => setSelectedTest(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        <option value="">Choose Test</option>

        {tests.map((test) => (
          <option key={test.id} value={test.name}>
            {test.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TestDropdown;