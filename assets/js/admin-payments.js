// Admin Payments JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // The authentication check is now handled globally in script.js
    // Only initialize page-specific functionality here

    // Confirm payment functionality
    document.querySelectorAll('.btn-success').forEach(button => {
        if (button.textContent.trim() === 'Konfirmasi' && button.closest('.modal')) {
            button.addEventListener('click', function() {
                const modal = this.closest('.modal');
                const bookingId = modal.querySelector('strong').textContent.split(':')[1].trim();

                // In a real application, this would send confirmation to the server
                alert(`Pembayaran untuk booking ${bookingId} berhasil dikonfirmasi`);

                // Update main table status
                const tableRows = document.querySelectorAll('#statusFilter').closest('.card').parentElement.querySelectorAll('tbody tr');
                tableRows.forEach(row => {
                    if (row.cells[0].textContent === bookingId) {
                        const statusCell = row.querySelector('.badge');
                        statusCell.className = 'badge bg-success';
                        statusCell.textContent = 'Dikonfirmasi';
                    }
                });

                // Close modal
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            });
        }
    });

    // Reject payment functionality
    document.querySelectorAll('.btn-danger').forEach(button => {
        if (button.textContent.trim() === 'Tolak' && button.closest('.modal')) {
            button.addEventListener('click', function() {
                const modal = this.closest('.modal');
                const bookingId = modal.querySelector('strong').textContent.split(':')[1].trim();
                const rejectionReason = modal.querySelector('#rejectionReason') ?
                    modal.querySelector('#rejectionReason').value : '';

                if (!rejectionReason) {
                    alert('Mohon masukkan alasan penolakan');
                    return;
                }

                // In a real application, this would send rejection to the server
                alert(`Pembayaran untuk booking ${bookingId} berhasil ditolak\nAlasan: ${rejectionReason}`);

                // Update main table status
                const tableRows = document.querySelectorAll('#statusFilter').closest('.card').parentElement.querySelectorAll('tbody tr');
                tableRows.forEach(row => {
                    if (row.cells[0].textContent === bookingId) {
                        const statusCell = row.querySelector('.badge');
                        statusCell.className = 'badge bg-danger';
                        statusCell.textContent = 'Ditolak';
                    }
                });

                // Close modal
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            });
        }
    });

    // Filter functionality
    document.getElementById('statusFilter').addEventListener('change', function() {
        const selectedStatus = this.value;
        if (selectedStatus) {
            alert(`Filter pembayaran dengan status: ${selectedStatus}`);
        }
    });
});