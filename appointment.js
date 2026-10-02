document.addEventListener("DOMContentLoaded", function () {

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
            "https://wa.me/23279613842?text=" +
            encodeURIComponent(whatsappText);

        window.location.href = url;

    });

});