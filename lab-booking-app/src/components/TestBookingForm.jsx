import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TimeSlots from "./TimeSlots";

function PatientForm({
  patientName,
  setPatientName,
  patientAge,
  setPatientAge,
  patientNumber,
  setPatientNumber,
  patientEmail,
  setPatientEmail,
  bookingDate,
  setBookingDate,
  selectedSlot,
  setSelectedSlot,
  handleSaveDetails
}) {

  return (
    <div className="card-style">

      <h2 className="text-2xl font-bold mb-6">
        Enter Patient Details
      </h2>


      <div className="mb-5">
        <div>
        <label className="form-label">
          Patient Name
        </label>

        <input
          type="text"
          placeholder="Enter Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="form-input"
        />
</div>
<div>

            <label className="form-label">
              Patient Age
            </label>

            <input
              type="number"
              value={patientAge}
              onChange={(e) =>{
                const value = e.target.value;


      if (value >= 0 || value === "") {
        setPatientAge(value);
              }
            }}
              className="form-input"
              placeholder="Enter age"
              min="0"
              required
            />

          </div>

          <div>

            <label className="form-label">
              Patient Phone Number
            </label>

            <input
              type="number"
              value={patientNumber}
              onChange={(e) => {

      // Allow Only Numbers

      const value =
        e.target.value.replace(/\D/g, "");

      // Limit to 10 Digits

      if (value.length <= 10) {
        setPatientNumber(value);
      }

    }}
    className="form-input"
    placeholder="Enter 10-digit phone number"
    maxLength={10}
    required/>

          </div>

<div>

            <label className="form-label">
              Patient Email
            </label>

            <input
              type="email"
              value={patientEmail}
              onChange={(e) =>
                setPatientEmail(e.target.value)
              }
              className="form-input"
              placeholder="Enter email"
              required
            />

          </div>

      </div>


      <div className="mb-5">

        <label className="form-label">
          Booking Date
        </label>

        <DatePicker
          selected={bookingDate}
          onChange={(date) => setBookingDate(date)}
          minDate={new Date()}
          placeholderText="Select Booking Date"
          className="form-input"
        />

      </div>


      <TimeSlots
  selectedSlot={selectedSlot}
  setSelectedSlot={setSelectedSlot}
  bookingDate={bookingDate}
/>


      <button
        onClick={handleSaveDetails}
        className="confirm-btn"
      >
        Save
      </button>

    </div>
  );
}

export default PatientForm;



  