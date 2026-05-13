function LabTestCard({
  test,
  selectedTest,
  setSelectedTest
}) {
  return (
    <div
      onClick={() => setSelectedTest(test)}
      className={`
        search-input pl-12
        ${
          selectedTest?.id === test.id
            ? "selected-card"
            : ""
        }
      `}
    >

      <div className="flex justify-between items-start mb-3">

        <h2 className="test-title">
          {test.name}
        </h2>

        <p className="test-price">
          ₹{test.price}
        </p>

      </div>

      <p className="text-description">
        {test.description}
      </p>

      <div className="space-y-2 text-sm">

        <p>
          <span className="font-semibold">
            Duration:
          </span>{" "}
          {test.duration}
        </p>

        <p>
          <span className="font-semibold">
            Preparation:
          </span>{" "}
          {test.preparation || "No preparation needed"}
        </p>

      </div>

    </div>
  );
}

export default LabTestCard;