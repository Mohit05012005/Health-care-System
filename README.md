# Healthcare Hospital Management System

A modern healthcare appointment booking and management system with a responsive frontend and Node.js backend.

## Features

- 🏥 Online appointment booking system
- 👨‍⚕️ Doctor specialization filtering
- 📧 Email confirmation for appointments
- 📱 Responsive design for all devices
- 🔒 Secure form handling
- 📍 Contact information with map integration

## Tech Stack

- **Frontend:**

  - HTML5
  - CSS3
  - JavaScript
  - AOS (Animate On Scroll library)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Nodemailer

## Project Structure

```
├── backend/
│   ├── controller/
│   ├── model/
│   ├── route/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
├── myminiproject/
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   ├── navbar.html
│   ├── request-appointment.html
│   └── services.html
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Configure environment variables:
   Create a `.env` file in the backend directory with:

```
SERVICE=gmail
USER=your-email@gmail.com
PASS=your-app-password
MONGO_URI=your-mongodb-connection-string
PORT=3000
```

4. Start the server:

```bash
npm start
```

## API Endpoints

### Appointments

- **POST** `/api/v1/appointment`
  - Creates new appointment
  - Sends confirmation email

### Contact

- **POST** `/api/v1/contact`
  - Handles contact form submissions

## Frontend Pages

- **Home** (`index.html`): Landing page with services overview
- **Services** (`services.html`): Detailed medical services
- **Appointment** (`request-appointment.html`): Appointment booking form
- **Contact** (`contact.html`): Contact information and form
- **About** (`about.html`): Hospital information

## Database Schema

### Appointment Model

```javascript
{
    name: String,
    email: String,
    disease: String,
    doctor: String,
    date: String,
    time: String,
    phone: Number,
    message: String,
    department: String
}
```

### Contact Model

```javascript
{
    name: String,
    email: String,
    subject: String,
    message: String
}
```

## Features in Detail

1. **Appointment Booking**

   - Two-step booking process
   - Disease-based doctor filtering
   - Email confirmation
   - Session storage for form data

2. **Interactive UI**

   - Responsive navbar
   - Animated sections
   - Testimonial slider
   - Floating action buttons

3. **Contact System**
   - Google Maps integration
   - Contact form with email notification
   - Location and contact details

## License

© 2025 HealthCare Plus. All rights reserved.

## Contributors

- Mohit Bohra (Developer)

## Support

For support, email bohramohit93199@gmail.com
