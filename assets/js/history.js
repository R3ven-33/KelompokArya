// Booking History JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // The authentication check is now handled globally in script.js
    // Only initialize page-specific functionality here

    // Sample booking history data
    const sampleBookings = [
        {
            id: "#BK00125",
            field: {
                name: "Lapangan Mini Soccer"
            },
            date: "22 Des 2025",
            time: "10:00 - 12:00",
            duration: 2,
            total: "Rp 300.000",
            status: "Selesai",
            statusClass: "success"
        },
        {
            id: "#BK00124",
            field: {
                name: "Lapangan Mini Soccer"
            },
            date: "20 Des 2025",
            time: "14:00 - 16:00",
            duration: 2,
            total: "Rp 300.000",
            status: "Menunggu",
            statusClass: "warning"
        },
        {
            id: "#BK00123",
            field: {
                name: "Lapangan Mini Soccer"
            },
            date: "15 Des 2025",
            time: "09:00 - 11:00",
            duration: 2,
            total: "Rp 300.000",
            status: "Selesai",
            statusClass: "success"
        },
        {
            id: "#BK00122",
            field: {
                name: "Lapangan Mini Soccer"
            },
            date: "10 Des 2025",
            time: "16:00 - 18:00",
            duration: 2,
            total: "Rp 300.000",
            status: "Dibatalkan",
            statusClass: "danger"
        }
    ];
    
    // Status class mapping
    function getStatusClass(status) {
        const statusClasses = {
            'Selesai': 'success',
            'Menunggu': 'warning',
            'Dikonfirmasi': 'primary',
            'Dibatalkan': 'danger'
        };
        return statusClasses[status] || 'secondary';
    }
    
    // Filter functionality
    document.getElementById('statusFilter').addEventListener('change', function() {
        const selectedStatus = this.value;
        filterBookings(selectedStatus);
    });
    
    // Function to filter bookings
    function filterBookings(status) {
        const allBookings = document.querySelectorAll('.booking-list .card');
        
        allBookings.forEach(bookingCard => {
            const statusBadge = bookingCard.querySelector('.badge');
            const currentStatus = statusBadge.textContent.trim();
            
            if (status === '' || currentStatus === status) {
                bookingCard.style.display = 'block';
            } else {
                bookingCard.style.display = 'none';
            }
        });
    }
    
    // Add event listeners to detail buttons
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', function() {
            const bookingId = this.closest('.card').querySelector('h5').textContent;
            alert(`Detail booking: ${bookingId}`);
        });
    });
    
    // Add event listeners to cancel buttons (if any)
    document.querySelectorAll('.btn-outline-danger').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin membatalkan booking ini?')) {
                alert('Booking berhasil dibatalkan');
            }
        });
    });
});