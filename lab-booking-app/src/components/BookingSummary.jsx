function BookingSummary({
  patientName,
  patientAge,
  patientEmail,
  patientNumber,
  selectedTest,
  bookingDate,
  selectedSlot,
  handleConfirmBooking
}) {
  return (
    <div className="summary-card">

      <h2 className="summary-title">
        Booking Summary
      </h2>

      <div className="space-y-3">

        <p>
          <span className="font-semibold">
            Patient Name:
          </span>{" "}
          {patientName || "-"}
        </p>

        <p>
          <span className="font-semibold">
            Patient Age:
          </span>{" "}
          {patientAge || "-"}
        </p>

        <p>
          <span className="font-semibold">
            Patient Phone Number:
          </span>{" "}
          {patientNumber || "-"}
        </p>

        <p>
          <span className="font-semibold">
            Patient Email:
          </span>{" "}
          {patientEmail || "-"}
        </p>

        <p>
          <span className="font-semibold">
            Test:
          </span>{" "}
          {selectedTest?.name || "-"}
        </p>

        <p>
          <span className="font-semibold">
            Booking Date:
          </span>{" "}
          {
            bookingDate
              ? bookingDate.toLocaleDateString()
              : "-"
          }
        </p>

        <p>
          <span className="font-semibold">
            Time Slot:
          </span>{" "}
          {selectedSlot || "-"}
        </p>

        <p>
          <span className="font-semibold">
            Total Price:
          </span>{" "}
          ₹{selectedTest?.price || 0}
        </p>

      </div>

    </div>
  );
}

export default BookingSummary;