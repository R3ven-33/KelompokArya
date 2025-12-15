// User Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // The authentication check is now handled globally in script.js
    // Only initialize page-specific functionality here

    // Sample user data
    const userData = {
        name: "Ahmad Jaelani",
        email: "ahmad.jaelani@example.com",
        totalBookings: 5,
        activeBookings: 2,
        completedBookings: 3,
        totalSpent: 1200000
    };

    // Update user info
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userEmail').textContent = userData.email;

    // Update stats
    document.getElementById('totalBookings').textContent = userData.totalBookings;
    document.getElementById('activeBookings').textContent = userData.activeBookings;
    document.getElementById('completedBookings').textContent = userData.completedBookings;
    document.getElementById('totalSpent').textContent = `Rp ${userData.totalSpent.toLocaleString('id-ID')}`;

    // Sample booking data
    const sampleBookings = [
        {
            id: "#BK00123",
            field: "Lapangan Mini Soccer",
            date: "15 Dec 2025",
            time: "09:00 - 11:00",
            status: "Selesai",
            statusClass: "success"
        },
        {
            id: "#BK00124",
            field: "Lapangan Mini Soccer",
            date: "20 Dec 2025",
            time: "14:00 - 16:00",
            status: "Menunggu",
            statusClass: "warning"
        },
        {
            id: "#BK00125",
            field: "Lapangan Mini Soccer",
            date: "22 Dec 2025",
            time: "16:00 - 18:00",
            status: "Menunggu Pembayaran",
            statusClass: "warning"
        }
    ];

    // Update bookings table
    const bookingsTableBody = document.getElementById('bookingsTableBody');
    if (bookingsTableBody) {
        bookingsTableBody.innerHTML = '';

        sampleBookings.forEach(booking => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${booking.id}</td>
                <td>${booking.field}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td><span class="badge bg-${booking.statusClass}">${booking.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary">Detail</button>
                    ${booking.status === "Menunggu" ? '<button class="btn btn-sm btn-outline-danger">Batalkan</button>' :
                      booking.status === "Menunggu Pembayaran" ? '<button class="btn btn-sm btn-outline-success">Bayar</button>' : ''}
                </td>
            `;
            bookingsTableBody.appendChild(row);
        });
    }

    // Add event listeners to detail buttons
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', function() {
            const bookingId = this.closest('tr').querySelector('td:first-child').textContent;
            alert(`Detail booking: ${bookingId}`);
        });
    });

    // Add event listeners to cancel buttons
    document.querySelectorAll('.btn-outline-danger').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin membatalkan booking ini?')) {
                alert('Booking berhasil dibatalkan');
            }
        });
    });

    // Add event listeners to pay buttons
    document.querySelectorAll('.btn-outline-success').forEach(button => {
        button.addEventListener('click', function() {
            alert('Anda akan diarahkan ke halaman pembayaran');
        });
    });
});