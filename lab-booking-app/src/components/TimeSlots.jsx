const slots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM"
];

function TimeSlots({
  selectedSlot,
  setSelectedSlot,
  bookingDate
}) {


  const convertToMinutes = (time) => {

    const [timePart, modifier] = time.split(" ");

    let [hours, minutes] =
      timePart.split(":").map(Number);


    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }

    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return (hours * 60) + minutes;
  };


  const isPastSlot = (slot) => {

    if (!bookingDate) return false;

    const now = new Date();


    const selectedDay =
      bookingDate.getDate();

    const selectedMonth =
      bookingDate.getMonth();

    const selectedYear =
      bookingDate.getFullYear();

    const currentDay =
      now.getDate();

    const currentMonth =
      now.getMonth();

    const currentYear =
      now.getFullYear();

    const isToday =
      selectedDay === currentDay &&
      selectedMonth === currentMonth &&
      selectedYear === currentYear;


    if (!isToday) return false;


    const currentMinutes =
      now.getHours() * 60 +
      now.getMinutes();


    const slotMinutes =
      convertToMinutes(slot);


    return slotMinutes <= currentMinutes;
  };

  return (

    <div className="time-slot-container">

      <label className="form-label">

        Select Time Slot

      </label>

      <div className="slot-grid">

        {slots.map((slot, index) => {

          const disabled =
            isPastSlot(slot);

          return (

            <button
              key={index}
              type="button"
              disabled={disabled}
              onClick={() => {

                if (!disabled) {
                  setSelectedSlot(slot);
                }

              }}
              className={`
                slot-btn
                ${
                  selectedSlot === slot
                    ? "active-slot"
                    : ""
                }
                ${
                  disabled
                    ? "disabled-slot"
                    : ""
                }
              `}
            >

              {slot}

            </button>

          );

        })}

      </div>

    </div>

  );
}

export default TimeSlots;