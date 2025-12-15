# Sports Field Rental Application

This is a complete web application for booking sports fields with both user and admin functionalities.

## Features

### For Users:
- Registration & login (email / phone number)
- View field list with search and filter options
- Check schedules and availability
- Book fields with time selection
- Online payment or upload payment proof
- Booking history tracking

### For Admin:
- Admin login with authentication
- Field management (add, edit, delete fields)
- Schedule and pricing management
- Payment confirmation system
- Booking and revenue reports

## Pages Included

- **Home** (`index.html`) - Main landing page
- **Daftar Lapangan** (`fields.html`) - List of available fields
- **Detail Lapangan** (`detail.html`) - Detailed view of individual fields
- **Booking Jadwal** (`booking.html`) - Booking process
- **Login/Register** (`login.html` & `register.html`) - Authentication
- **Dashboard User** (`dashboard-user.html`) - User dashboard
- **Dashboard Admin** (`dashboard-admin.html`) - Admin dashboard
- **Profile** (`profile.html`) - User profile management
- **Booking History** (`booking-history.html`) - Booking history for users
- **Admin Management Pages**:
  - Field Management (`admin-fields.html`)
  - Schedule & Pricing (`admin-schedule.html`)
  - Payment Confirmation (`admin-payments.html`)
  - Booking Management (`admin-bookings.html`)
  - Reports (`admin-reports.html`)

## How to Use

1. Open `index.html` in your browser to access the home page
2. Register as a new user or login with existing credentials:
   - User: email `user@example.com` with password `password123`
   - Admin: email `admin@example.com` with password `admin123`
3. Browse available sports fields and make bookings
4. For admin functions, login with admin credentials

## Technologies Used

- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript
- Font Awesome for icons
- Chart.js for admin reports

## Note

This is a frontend-only implementation. In a real application, you would need a backend server to handle authentication, data storage, and payment processing.