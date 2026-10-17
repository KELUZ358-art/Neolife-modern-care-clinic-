document.addEventListener("DOMContentLoaded", function () {

const APPOINTMENT_API_URL =
  "https://neo-life-clinic-backend--kanukelechi358k.replit.app/api/appointment-slots";

const CLINIC_TIME_ZONE = "Africa/Freetown";

function formatDateInputValue(date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts.map(part => [part.type, part.value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function formatTimeInputValue(date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts.map(part => [part.type, part.value])
  );

  return `${values.hour}:${values.minute}`;
}

function formatSlotLabel(start, end) {
  const dateLabel = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    weekday: "short",
    day: "numeric",
    month: "short"
  }).format(start);

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  return `${dateLabel} · ${timeFormatter.format(start)}–${timeFormatter.format(end)}`;
}
    
    const form = document.getElementById("appointmentForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const patient = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const service = document.getElementById("service").value;
        const doctor = document.getElementById("doctor").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value.trim();

        if (!patient || !phone || !date || !service || !doctor || !time) {
            alert("Please complete all required fields.");
            return;
        }

        const whatsappText =
            "NEOLIFE MODERN CARE CLINIC\n\n" +
            "NEW APPOINTMENT REQUEST\n\n" +
            "Patient Name: " + patient + "\n" +
            "Patient Phone: " + phone + "\n" +
            "Email: " + (email || "Not provided") + "\n" +
            "Doctor: " + doctor + "\n" +
            "Service: " + service + "\n" +
            "Appointment Date: " + date + "\n" +
            "Appointment Time: " + time + "\n" +
            "Additional Message: " + (message || "None");

        const url =
            "https://wa.me/23272030688?text=" +
            encodeURIComponent(whatsappText);

        window.location.href = url;

    });

});
