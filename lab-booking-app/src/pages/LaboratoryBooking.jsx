import { useState } from "react";

import Navbar from "../components/Navbar";
import LabTestCard from "../components/LabTestCard";
import PatientForm from "../components/TestBookingForm";
import BookingSummary from "../components/BookingSummary";

import tests from "../data/tests.json";

function LaboratoryBooking() {

  const [selectedTest, setSelectedTest] = useState(null);

  const [patientName, setPatientName] = useState("");
  
  const [patientAge,setPatientAge]=useState("");

  const [patientNumber, setPatientNumber] = useState("");

  const [patientEmail, setPatientEmail] = useState("");

  const [bookingDate, setBookingDate] = useState(null);

  const [selectedSlot, setSelectedSlot] = useState("");

  const [showSummary, setShowSummary] = useState(false);

  const [bookingSuccess, setBookingSuccess] = useState(false);



  const handleSaveDetails = () => {


  if (!patientName.trim()) {

    alert("Please enter patient name");

    return;
  }


  if (
    patientAge === "" ||
    patientAge < 1 ||
    patientAge > 120
  ) {

    alert("Please enter valid age");

    return;
  }


  if (patientNumber.length !== 10) {

    alert(
      "Phone number must contain 10 digits"
    );

    return;
  }

if (!patientEmail.trim()) {

  alert("Please enter email address");

  return;
}
  const emailPattern =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailPattern.test(patientEmail)) {

    alert("Please enter valid email");

    return;
  }


  if (!bookingDate) {

    alert("Please select booking date");

    return;
  }


  if (!selectedSlot) {

    alert("Please select time slot");

    return;
  }


  setShowSummary(true);
};

  const handleConfirmBooking = () => {


  setShowSummary(false);


  setBookingSuccess(true);
};

  return (

    <div className="main-container">


      <Navbar />


      <div className="page-container">


        <h1 className="main-title">

          Laboratory Test Booking

        </h1>


        <h2 className="heading-style">

          Available Tests

        </h2>


        <div className="tests-grid">

          {tests.map((test) => (

            <LabTestCard
              key={test.id}
              test={test}
              selectedTest={selectedTest}
              setSelectedTest={setSelectedTest}
            />

          ))}

        </div>

      </div>


      {selectedTest && (

        <div className="popup-overlay">

          <div className="popup-container">


            <button
              onClick={() => {
                setSelectedTest(null);
                setShowSummary(false);
              }}
              className="close-btn"
            >
              ×
            </button>


            <h2 className="popup-title">

              Laboratory Test Booking

            </h2>


            <div className="test-info-card">

              <div className="test-header">

                <div>

                  <h3 className="selected-test-title">

                    {selectedTest.name}

                  </h3>

                  <p className="selected-test-description">

                    {selectedTest.description}

                  </p>

                </div>

                <div>

                  <p className="selected-test-price">

                    ₹{selectedTest.price}

                  </p>

                </div>

              </div>


              <div className="test-extra-info">

                <p>

                  <strong>Duration:</strong>{" "}

                  {selectedTest.duration}

                </p>

                <p>

                  <strong>Preparation:</strong>{" "}

                  {selectedTest.preparation}

                </p>

              </div>

            </div>


            <div className="card-style">

              <PatientForm
                patientName={patientName}
                setPatientName={setPatientName}
                patientAge={patientAge}
                setPatientAge={setPatientAge}
                patientEmail={patientEmail}
                setPatientEmail={setPatientEmail}
                patientNumber={patientNumber}
                setPatientNumber={setPatientNumber}
                bookingDate={bookingDate}
                setBookingDate={setBookingDate}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                handleSaveDetails={handleSaveDetails}
              />

            </div>

          </div>

        </div>

      )}


      {showSummary && (

        <div className="popup-overlay">

          <div className="summary-popup">

            <h2 className="popup-title">

              Booking Summary

            </h2>


            <BookingSummary
              selectedTest={selectedTest}
              patientName={patientName}
              patientAge={patientAge}
              patientNumber={patientNumber}
              patientEmail={patientEmail}
              bookingDate={bookingDate}
              selectedSlot={selectedSlot}
            />


            <div className="summary-buttons">


              <button
                onClick={() => setShowSummary(false)}
                className="back-btn"
              >
                Back
              </button>


              <button
                onClick={handleConfirmBooking}
                className="confirm-btn"
              >
                Confirm Booking
              </button>

            </div>

          </div>

        </div>

      )}


{bookingSuccess && (

  <div className="popup-overlay">

    <div className="success-popup">


      <div className="success-icon">

        ✓

      </div>


      <h2 className="success-title">

        Booking Successful

      </h2>


      <p className="success-message">

        Your laboratory test has been booked successfully.

      </p>


      <div className="success-details">

        <p>

          <strong>Test:</strong>{" "}

          {selectedTest?.name}

        </p>

        <p>

          <strong>Patient:</strong>{" "}

          {patientName}

        </p>

        <p>

          <strong>Date:</strong>{" "}

          {
            bookingDate
              ? bookingDate.toLocaleDateString("en-IN")
              : "-"
          }

        </p>

        <p>

          <strong>Time:</strong>{" "}

          {selectedSlot}

        </p>

      </div>


      <button
        className="done-btn"
        onClick={() => {


          setBookingSuccess(false);

          setSelectedTest(null);

          setPatientName("");

          setBookingDate(null);

          setSelectedSlot("");

        }}
      >

        Done

      </button>

    </div>

  </div>

)}

    </div>

  );
}

export default LaboratoryBooking;