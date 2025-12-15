// Booking page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Booking steps navigation
    let currentStep = 1;
    const stepButtons = {
        1: document.getElementById('nextStep'),
        2: document.getElementById('nextStep'),
        3: document.getElementById('nextStep'),
        4: document.getElementById('prevStep')
    };

    const prevStepBtn = document.getElementById('prevStep');

    // Show current step
    function showStep(step) {
        // Hide all steps
        document.querySelectorAll('.step-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        document.getElementById(`step${step}`).classList.add('active');
        document.querySelectorAll('.step')[step-1].classList.add('active');

        // Update progress bar
        const progressWidth = (step - 1) * 25;
        document.querySelector('.progress-bar').style.width = `${progressWidth}%`;

        // Show/hide navigation buttons
        if (step === 1) {
            prevStepBtn.style.display = 'none';
        } else {
            prevStepBtn.style.display = 'inline-block';
        }

        if (step === 4) {
            document.getElementById('nextStep').textContent = 'Selesai';
        } else {
            document.getElementById('nextStep').textContent = 'Selanjutnya';
        }

        // Update booking summary
        updateBookingSummary();
    }

    // Go to next step
    document.getElementById('nextStep').addEventListener('click', function() {
        if (currentStep < 4) {
            // Validate current step before proceeding
            let isValid = true;

            if (currentStep === 1) {
                const selectedField = document.getElementById('selectField').value;
                if (!selectedField) {
                    alert('Mohon pilih lapangan terlebih dahulu');
                    isValid = false;
                }
            } else if (currentStep === 2) {
                const selectedTime = document.querySelector('.time-slot.selected');
                if (!selectedTime) {
                    alert('Mohon pilih jadwal terlebih dahulu');
                    isValid = false;
                }
            } else if (currentStep === 3) {
                const bookingForm = document.getElementById('bookingDetailsForm');
                if (!bookingForm.checkValidity()) {
                    bookingForm.reportValidity();
                    isValid = false;
                }
            }

            if (isValid) {
                currentStep++;
                showStep(currentStep);
            }
        } else {
            // Final step - complete booking
            alert('Booking berhasil! Pembayaran akan segera diproses.');
            // In a real application, this would submit the booking to the server
            window.location.href = 'dashboard-user.html';
        }
    });

    // Go to previous step
    prevStepBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Initialize
    showStep(currentStep);

    // Time slots functionality
    const timeSlotsContainer = document.getElementById('timeSlots');
    const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];

    timeSlots.forEach(time => {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'col-md-3 col-sm-4 col-6';
        slotDiv.innerHTML = `
            <div class="time-slot" data-time="${time}">
                ${time}
            </div>
        `;
        timeSlotsContainer.appendChild(slotDiv);
    });

    // Time slot selection
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', function() {
            if (!this.classList.contains('booked')) {
                // Remove selected class from all slots
                document.querySelectorAll('.time-slot').forEach(s => {
                    s.classList.remove('selected');
                });

                // Add selected class to clicked slot
                this.classList.add('selected');

                // Update summary
                updateBookingSummary();
            }
        });
    });

    // Field selection - for mini soccer field
    document.getElementById('selectField').addEventListener('change', function() {
        const fieldName = this.options[this.selectedIndex].text;
        document.getElementById('selectedFieldName').textContent = fieldName;

        // Update summary
        updateBookingSummary();
    });

    // Booking date selection
    document.getElementById('scheduleDate').addEventListener('change', function() {
        // In a real application, this would load available time slots for the selected date
        updateBookingSummary();
    });

    // Update booking summary
    function updateBookingSummary() {
        const selectedField = document.getElementById('selectField');
        const selectedTime = document.querySelector('.time-slot.selected');
        const scheduleDate = document.getElementById('scheduleDate');
        const bookingDuration = document.getElementById('bookingDuration');

        if (selectedField && selectedField.value) {
            document.getElementById('summaryFieldName').textContent = selectedField.options[selectedField.selectedIndex].text;
        }

        if (scheduleDate.value) {
            document.getElementById('summaryDate').textContent = new Date(scheduleDate.value).toLocaleDateString('id-ID');
        }

        if (selectedTime) {
            const startTime = selectedTime.dataset.time;
            const duration = bookingDuration ? bookingDuration.value : 1;
            const endTime = calculateEndTime(startTime, parseInt(duration));
            document.getElementById('summaryTime').textContent = `${startTime} - ${endTime}`;
        }

        if (bookingDuration) {
            document.getElementById('summaryDuration').textContent = `${bookingDuration.value} jam`;
        }

        // Calculate total - using mini soccer price
        if (selectedField && selectedField.value && selectedTime) {
            const price = 150000; // Mini soccer price
            const duration = bookingDuration ? parseInt(bookingDuration.value) : 1;
            const total = price * duration;
            document.getElementById('summaryTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;

            // Update payment summary as well
            document.getElementById('paymentFieldName').textContent = selectedField.options[selectedField.selectedIndex].text;
            document.getElementById('paymentDate').textContent = scheduleDate.value ? new Date(scheduleDate.value).toLocaleDateString('id-ID') : '-';
            document.getElementById('paymentTime').textContent = selectedTime ? `${selectedTime.dataset.time} - ${calculateEndTime(selectedTime.dataset.time, duration)}` : '-';
            document.getElementById('paymentDuration').textContent = `${duration} jam`;
            document.getElementById('paymentHourlyRate').textContent = `Rp ${price.toLocaleString('id-ID')}`;
            document.getElementById('paymentTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
        }
    }

    // Calculate end time
    function calculateEndTime(startTime, duration) {
        const [hours, minutes] = startTime.split(':').map(Number);
        const start = new Date();
        start.setHours(hours, minutes, 0, 0);

        const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
        return `${end.getHours().toString().padStart(2, '0')}:${end.getMinutes().toString().padStart(2, '0')}`;
    }
});